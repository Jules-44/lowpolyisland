import * as THREE from 'three';
import { SceneManager } from './engine/SceneManager.js';
import { InputManager } from './engine/InputManager.js';
import { AudioEngine } from './engine/AudioEngine.js';
import { Player } from './entities/Player.js';
import { CameraController } from './entities/CameraController.js';
import { QuadBike } from './entities/QuadBike.js';
import { World } from './world/World.js';

class GameApp {
  constructor() {
    this.container = document.getElementById('game-container');

    // 1. Core Systems
    this.sceneManager = new SceneManager(this.container);
    this.inputManager = new InputManager(this.container);
    this.audioEngine = new AudioEngine();

    // 2. World & Entities
    this.world = new World(this.sceneManager.scene);
    this.player = new Player(this.sceneManager.scene);
    this.cameraController = new CameraController(this.sceneManager.camera);
    this.quadBike = new QuadBike(this.sceneManager.scene, -36, 46);

    // Initial position on the boardwalk pier looking out towards sunset
    this.player.position.set(0, 2.38, -8);
    this.player.rotation = Math.PI; // Face down the pier toward the ocean gazebo

    // 3. UI Elements
    this.fpsDisplay = document.getElementById('fps-display');
    this.speedBadge = document.getElementById('speed-badge');
    this.camBadgeText = document.getElementById('cam-mode-text');
    this.camBadge = document.getElementById('cam-badge');
    this.arrowModeBtn = document.getElementById('arrow-mode-btn');
    this.pointerLockBtn = document.getElementById('pointer-lock-btn');
    this.retroResBtn = document.getElementById('retro-res-btn');
    this.skyThemeBtn = document.getElementById('sky-theme-btn');
    this.actionPrompt = document.getElementById('action-prompt');
    this.actionText = document.getElementById('action-text');

    // Walkman UI
    this.btnPlay = document.getElementById('btn-play');
    this.btnNext = document.getElementById('btn-next');
    this.btnPrev = document.getElementById('btn-prev');
    this.volSlider = document.getElementById('vol-slider');
    this.trackTitle = document.getElementById('track-title');
    this.trackArtist = document.getElementById('track-artist');
    this.reelLeft = document.getElementById('reel-left');
    this.reelRight = document.getElementById('reel-right');
    this.vSegments = document.querySelectorAll('.v-segment');

    // Clock
    this.clock = new THREE.Clock();
    this.frameCount = 0;
    this.lastFpsUpdate = 0;

    this._setupUI();
    this._setupControls();

    // Start loop
    this.animate = this.animate.bind(this);
    requestAnimationFrame(this.animate);
  }

  _setupControls() {
    // Camera toggle via 'V'
    this.inputManager.onCameraToggle = () => {
      this.cameraController.toggleMode(this.player);
      this.camBadgeText.textContent = this.cameraController.getMode();
    };

    // Camera toggle via clicking badge
    if (this.camBadge) {
      this.camBadge.style.cursor = 'pointer';
      this.camBadge.addEventListener('click', () => {
        this.cameraController.toggleMode(this.player);
        this.camBadgeText.textContent = this.cameraController.getMode();
      });
    }

    // Arrow key camera vs move toggle
    if (this.arrowModeBtn) {
      this.arrowModeBtn.addEventListener('click', () => {
        this.inputManager.toggleArrowMode();
      });
    }

    this.inputManager.onArrowModeToggle = (controlsCamera) => {
      if (this.arrowModeBtn) {
        if (controlsCamera) {
          this.arrowModeBtn.textContent = 'ARROWS: CAM LOOK';
          this.arrowModeBtn.classList.remove('alt-mode');
        } else {
          this.arrowModeBtn.textContent = 'ARROWS: MOVE';
          this.arrowModeBtn.classList.add('alt-mode');
        }
      }
    };

    // Pointer lock toggle (1-finger look without clicking)
    if (this.pointerLockBtn) {
      this.pointerLockBtn.addEventListener('click', () => {
        if (this.inputManager.mouse.isPointerLocked) {
          this.inputManager.exitPointerLock();
        } else {
          this.inputManager.requestPointerLock();
        }
      });
    }

    this.inputManager.onPointerLockChange = (isLocked) => {
      if (this.pointerLockBtn) {
        if (isLocked) {
          this.pointerLockBtn.textContent = 'CURSOR LOCKED [ESC]';
          this.pointerLockBtn.classList.add('alt-mode');
        } else {
          this.pointerLockBtn.textContent = 'LOCK CURSOR';
          this.pointerLockBtn.classList.remove('alt-mode');
        }
      }
    };

    // Retro PS1 pixel resolution toggle
    if (this.retroResBtn) {
      this.retroResBtn.addEventListener('click', () => {
        const isPixel = this.sceneManager.toggleRetroPixelMode();
        if (isPixel) {
          this.retroResBtn.textContent = 'PS1 PIXELS: ON';
          this.retroResBtn.classList.remove('alt-mode');
        } else {
          this.retroResBtn.textContent = 'HD MODE: ON';
          this.retroResBtn.classList.add('alt-mode');
        }
      });
    }

    // Sunset sky theme options in control panel & key [T]
    const sunsetBtns = document.querySelectorAll('.sunset-opt-btn');
    sunsetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const themeId = btn.dataset.theme;
        const theme = this.sceneManager.applySkyTheme(themeId);
        sunsetBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this._showToast(`🌅 SUNSET: ${theme.name} // ${theme.vibe.toUpperCase()}`);
      });
    });

    const cycleSky = () => {
      const theme = this.sceneManager.cycleSkyTheme();
      sunsetBtns.forEach((b) => {
        if (b.dataset.theme === theme.id) {
          b.classList.add('active');
        } else {
          b.classList.remove('active');
        }
      });
      this._showToast(`🌅 SUNSET: ${theme.name} // ${theme.vibe.toUpperCase()}`);
    };

    if (this.skyThemeBtn) {
      this.skyThemeBtn.addEventListener('click', cycleSky);
    }
    this.inputManager.onSkyToggle = cycleSky;

    // Action interaction via 'E'
    this.inputManager.onInteract = () => {
      // 0. If currently riding Quad Bike, dismount
      if (this.quadBike && this.quadBike.isRidden) {
        this.quadBike.dismount(this.player, this.world);
        this._showToast("🛑 DISMOUNTED 4X4 QUAD BIKE");
        return;
      }

      const p = this.player.position;

      // Check proximity to Quad Bike
      if (this.quadBike && p.distanceTo(this.quadBike.position) < 3.8) {
        this.quadBike.mount(this.player);
        this._showToast("🏁 MOUNTED 4X4 QUAD BIKE // WASD TO DRIVE, SHIFT FOR TURBO!");
        return;
      }

      // Check proximity to vending machines
      if (p.distanceTo(new THREE.Vector3(-3.2, 2.38, 2.8)) < 3.2) {
        this._showToast("🥫 DISPENSED ICED COFFEE // ATMOSPHERE +1");
        return;
      }

      // Check proximity to treasure chest
      const treasurePos = new THREE.Vector3(-48, this.world.getGroundHeight(-48, 16), 16);
      if (p.distanceTo(treasurePos) < 4.0) {
        this._showToast("💰 DISCOVERED PIRATE TREASURE // GOLD DOUBLOONS & GEMS");
        return;
      }

      // Check proximity to beach house
      const beachHousePos = new THREE.Vector3(-34, this.world.getGroundHeight(-34, 30), 30);
      if (p.distanceTo(beachHousePos) < 5.5) {
        this._showToast("🏄 CHILLING AT BEACH SHACK // MELLOW VIBES");
        return;
      }

      // Check proximity to campfire
      const campfirePos = new THREE.Vector3(-22, this.world.getGroundHeight(-22, 20), 20);
      if (p.distanceTo(campfirePos) < 3.5) {
        this._showToast("🔥 WARMING HANDS BY THE DRIFTWOOD FIRE");
        return;
      }

      // Check proximity to radio tower
      const towerPos = new THREE.Vector3(-6, this.world.getGroundHeight(-6, 110), 110);
      if (p.distanceTo(towerPos) < 6.0) {
        this._showToast("📻 RADIO MAST SUMMIT // RECEIVING 164 BPM SIGNALS");
        return;
      }

      // Check proximity to clifftop overlook bench
      const overlookPos = new THREE.Vector3(48, this.world.getGroundHeight(48, 68), 68);
      if (p.distanceTo(overlookPos) < 5.5) {
        this._showToast("🌅 CLIFFTOP OBSERVATION // PANORAMIC OCEAN VIBES");
        return;
      }

      // Check proximity to beach bar
      const barPos = new THREE.Vector3(11, this.world.getGroundHeight(11, 14), 14);
      if (p.distanceTo(barPos) < 4.2) {
        this._showToast("🍹 ORDERED TROPICAL COCONUT PUNCH // VIBES MAXIMIZED");
        return;
      }

      // Check proximity to beach loungers on the sand
      const loungerPos = new THREE.Vector3(22, this.world.getGroundHeight(22, 4.5), 4.5);
      if (p.distanceTo(loungerPos) < 4.8) {
        this._showToast("🏖️ RELAXING ON SUNSET LOUNGER // GOLDEN SURF VIBES");
        return;
      }

      // Check proximity to DJ Booth in Dance Area
      const djPos = new THREE.Vector3(0, this.world.getGroundHeight(0, 25.4), 25.4);
      if (p.distanceTo(djPos) < 4.2) {
        const isPlaying = this.audioEngine.togglePlay();
        this._updateWalkmanState(isPlaying);
        this._showToast(isPlaying ? "🎧 SPUN 12\" VINYL // 164 BPM BREAKBEAT DROPPED!" : "🎧 PAUSED TURNTABLES // FADING BREAKBEAT");
        return;
      }

      // Check proximity to Jet Skis near shore
      const jetSkiPos1 = new THREE.Vector3(8.5, 0.2, 1.5);
      const jetSkiPos2 = new THREE.Vector3(-8.5, 0.2, 1.5);
      const jetSkiPos3 = new THREE.Vector3(18.5, 0.2, 3.5);
      if (p.distanceTo(jetSkiPos1) < 3.2 || p.distanceTo(jetSkiPos2) < 3.2 || p.distanceTo(jetSkiPos3) < 3.2) {
        this._showToast("⚡ HIGH-OUTPUT WAVERUNNER 750 // READY FOR OCEAN SWELL");
        return;
      }

      // Check proximity to Trail Bench on winding cliffside path
      const trailBenchPos = new THREE.Vector3(25, this.world.getGroundHeight(25, 44), 44);
      if (p.distanceTo(trailBenchPos) < 4.0) {
        this._showToast("🪑 RESTING ON CLIFFSIDE BENCH // ENJOYING SCENIC ASCENT");
        return;
      }

      // Check proximity to pier gazebo
      const gazeboPos = new THREE.Vector3(0, 2.38, -44);
      if (p.distanceTo(gazeboPos) < 5.0) {
        this._showToast("🌊 WATCHING WAVES CRASH AGAINST THE REEF");
        return;
      }
    };
  }

  _setupUI() {
    // Walkman Play/Pause
    this.btnPlay.addEventListener('click', () => {
      const isPlaying = this.audioEngine.togglePlay();
      this._updateWalkmanState(isPlaying);
    });

    this.btnNext.addEventListener('click', () => {
      const track = this.audioEngine.nextTrack();
      this.trackTitle.textContent = track.title;
      this.trackArtist.textContent = track.artist;
      this._updateWalkmanState(this.audioEngine.isPlaying);
    });

    this.btnPrev.addEventListener('click', () => {
      const track = this.audioEngine.prevTrack();
      this.trackTitle.textContent = track.title;
      this.trackArtist.textContent = track.artist;
      this._updateWalkmanState(this.audioEngine.isPlaying);
    });

    this.volSlider.addEventListener('input', (e) => {
      this.audioEngine.setVolume(parseFloat(e.target.value));
    });

    // Music is strictly OFF by default; user starts it by clicking Walkman PLAY
    this._updateWalkmanState(false);
  }

  _updateWalkmanState(isPlaying) {
    if (isPlaying) {
      this.btnPlay.textContent = '⏸ PAUSE';
      this.reelLeft.classList.add('spinning');
      this.reelRight.classList.add('spinning');
    } else {
      this.btnPlay.textContent = '▶ PLAY';
      this.reelLeft.classList.remove('spinning');
      this.reelRight.classList.remove('spinning');
    }
  }

  _showToast(msg) {
    this.actionText.textContent = msg;
    this.actionPrompt.classList.remove('hidden');
    setTimeout(() => {
      this.actionPrompt.classList.add('hidden');
    }, 2500);
  }

  _checkProximityPrompts() {
    // If driving quad bike, prompt to dismount
    if (this.quadBike && this.quadBike.isRidden) {
      this.actionText.textContent = "DISMOUNT QUAD BIKE";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    const p = this.player.position;

    // 0. Quad Bike near foothills past shack
    if (this.quadBike && p.distanceTo(this.quadBike.position) < 3.8) {
      this.actionText.textContent = "DRIVE 4X4 QUAD BIKE";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 1. Treasure Chest
    const treasurePos = new THREE.Vector3(-48, this.world.getGroundHeight(-48, 16), 16);
    if (p.distanceTo(treasurePos) < 4.0) {
      this.actionText.textContent = "INSPECT SECRET TREASURE";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 2. Beach House
    const beachHousePos = new THREE.Vector3(-34, this.world.getGroundHeight(-34, 30), 30);
    if (p.distanceTo(beachHousePos) < 5.5) {
      this.actionText.textContent = "RELAX AT BEACH SHACK";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 3. Campfire
    const campfirePos = new THREE.Vector3(-22, this.world.getGroundHeight(-22, 20), 20);
    if (p.distanceTo(campfirePos) < 3.5) {
      this.actionText.textContent = "WARM HANDS BY FIRE";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 4. Radio Tower
    const towerPos = new THREE.Vector3(-6, this.world.getGroundHeight(-6, 110), 110);
    if (p.distanceTo(towerPos) < 6.0) {
      this.actionText.textContent = "INSPECT RADIO MAST";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 5. Vending Machines
    const distToVM = p.distanceTo(new THREE.Vector3(-3.2, 2.38, 2.8));
    if (distToVM < 3.0) {
      this.actionText.textContent = "BUY CHILLED DRINK";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 6. Pier Gazebo viewpoint
    const distToGazebo = p.distanceTo(new THREE.Vector3(0, 2.38, -44));
    if (distToGazebo < 5.0) {
      this.actionText.textContent = "ENJOY TWILIGHT HORIZON";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 7. Clifftop Overlook deck
    const overlookPos = new THREE.Vector3(48, this.world.getGroundHeight(48, 68), 68);
    const distToOverlook = p.distanceTo(overlookPos);
    if (distToOverlook < 5.5) {
      this.actionText.textContent = "REST AT CLIFFTOP LOOKOUT";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 8. Beach Tiki Bar (relocated to open flat sand)
    const barPos = new THREE.Vector3(11, this.world.getGroundHeight(11, 14), 14);
    if (p.distanceTo(barPos) < 4.2) {
      this.actionText.textContent = "ORDER TROPICAL COCKTAIL";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 9. Beach Loungers on the sand
    const loungerPos = new THREE.Vector3(22, this.world.getGroundHeight(22, 4.5), 4.5);
    if (p.distanceTo(loungerPos) < 4.8) {
      this.actionText.textContent = "CHILL ON BEACH LOUNGER";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 10. DJ Deck in Dance Arena
    const djPos = new THREE.Vector3(0, this.world.getGroundHeight(0, 25.4), 25.4);
    if (p.distanceTo(djPos) < 4.2) {
      this.actionText.textContent = this.audioEngine.isPlaying ? "PAUSE TURNTABLES" : "SPIN VINYL // DROP BREAKBEAT";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 11. Jet Skis near shore
    const js1 = new THREE.Vector3(8.5, 0.2, 1.5);
    const js2 = new THREE.Vector3(-8.5, 0.2, 1.5);
    const js3 = new THREE.Vector3(18.5, 0.2, 3.5);
    if (p.distanceTo(js1) < 3.2 || p.distanceTo(js2) < 3.2 || p.distanceTo(js3) < 3.2) {
      this.actionText.textContent = "INSPECT HIGH-OUTPUT JET SKI";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    // 12. Trail Bench on winding cliffside path
    const trailBenchPos = new THREE.Vector3(25, this.world.getGroundHeight(25, 44), 44);
    if (p.distanceTo(trailBenchPos) < 4.0) {
      this.actionText.textContent = "REST ON CLIFFSIDE BENCH";
      this.actionPrompt.classList.remove('hidden');
      return;
    }

    this.actionPrompt.classList.add('hidden');
  }

  _updateZoneIndicator() {
    const p = this.player.position;
    let zone = "COASTAL HAVEN // PIER SECTOR";

    // Dynamic zone detection
    if (this.quadBike && this.quadBike.isRidden) {
      zone = "ALL-TERRAIN EXPLORER // 4X4 QUAD BIKE";
    } else if (p.distanceTo(new THREE.Vector3(-36, this.world.getGroundHeight(-36, 46), 46)) < 12) {
      zone = "NORTH FOOTHILLS // ALL-TERRAIN TRAIL";
    } else if (Math.abs(p.x) < 5.5 && p.z >= 16 && p.z <= 28) {
      zone = "NEON PLAZA // 164 BPM DANCE ARENA";
    } else if (p.distanceTo(new THREE.Vector3(11, this.world.getGroundHeight(11, 14), 14)) < 8) {
      zone = "TIKI COVE // SUNSET BEACH BAR";
    } else if (p.distanceTo(new THREE.Vector3(22, this.world.getGroundHeight(22, 4.5), 4.5)) < 8) {
      zone = "GOLDEN DUNES // SUNSET LOUNGE";
    } else if (p.z >= -2 && p.z <= 5 && Math.abs(p.x) <= 22) {
      zone = "COASTAL SURF // JET SKI MOORING";
    } else if (p.distanceTo(new THREE.Vector3(25, this.world.getGroundHeight(25, 44), 44)) < 10) {
      zone = "CLIFFSIDE TRAIL // SCENIC SWITCHBACK";
    } else if (p.x >= 2 && p.x <= 48 && p.z >= 12 && p.z <= 68 && p.y > 4.0 && p.y < 19.0) {
      zone = "CLIFFSIDE TRAIL // SCENIC ASCENT";
    } else if (p.distanceTo(new THREE.Vector3(48, this.world.getGroundHeight(48, 68), 68)) < 10) {
      zone = "SUMMIT DECK // PANORAMIC LOOKOUT";
    } else if (p.distanceTo(new THREE.Vector3(-48, this.world.getGroundHeight(-48, 16), 16)) < 16) {
      zone = "SMUGGLER'S COVE // X MARKS THE SPOT";
    } else if (p.distanceTo(new THREE.Vector3(-34, this.world.getGroundHeight(-34, 30), 30)) < 14) {
      zone = "SURF SHACK // DRIFTWOOD RETREAT";
    } else if (p.distanceTo(new THREE.Vector3(-6, this.world.getGroundHeight(-6, 110), 110)) < 18) {
      zone = "NORTH PEAK // BROADCAST TOWER";
    } else if (p.z >= 0 && p.z < 35 && p.x < -10) {
      zone = "WEST SHORELINE // DRIFTWOOD BEACH";
    } else if (p.z >= 0 && p.z < 35) {
      zone = "SUNSET SHORE // SANDY BEACH COVE";
    } else if (p.z >= 35 && p.x > 25) {
      zone = "CRAGGY BLUFFS // EASTERN SEA CLIFFS";
    } else if (p.z >= 35 && p.x <= 25) {
      zone = "EMERALD RIDGE // PINE FOREST TRAILS";
    }

    const zoneElem = document.getElementById('zone-name');
    if (zoneElem && zoneElem.textContent !== zone) {
      zoneElem.textContent = zone;
    }
  }

  _updateVisualizer() {
    if (!this.audioEngine.isPlaying) {
      this.vSegments.forEach(seg => {
        seg.style.transform = 'scaleY(0.15)';
        seg.classList.remove('active');
      });
      return;
    }

    const data = this.audioEngine.getVisualizerData();
    this.vSegments.forEach((seg, i) => {
      const val = data[i] / 255;
      const height = Math.max(0.15, val * 1.0);
      seg.style.transform = `scaleY(${height})`;
      if (val > 0.45) {
        seg.classList.add('active');
      } else {
        seg.classList.remove('active');
      }
    });
  }

  animate() {
    requestAnimationFrame(this.animate);

    const dt = Math.min(this.clock.getDelta(), 0.1);
    const now = performance.now();

    // 1. Process inputs & update entities
    this.inputManager.update(dt);
    this.player.update(dt, this.inputManager, this.inputManager.mouse.yaw, this.world);
    if (this.quadBike) {
      this.quadBike.update(dt, this.inputManager, this.world, this.player);
    }
    this.cameraController.update(dt, this.player, this.inputManager);
    this.world.update(dt);

    // 2. Audio & Visualizer
    this._updateVisualizer();

    // 3. Proximity prompts & zone detection
    this._checkProximityPrompts();
    this._updateZoneIndicator();

    // Update speed badge indicator
    if (this.speedBadge) {
      if (this.quadBike && this.quadBike.isRidden) {
        const speedMps = Math.round(Math.abs(this.quadBike.speed));
        const isShift = this.inputManager.keys['ShiftLeft'] || this.inputManager.keys['ShiftRight'];
        if (!this.quadBike.isGrounded) {
          this.speedBadge.textContent = `✈️ AIRTIME ${speedMps} M/S`;
          this.speedBadge.className = 'speed-badge airtime';
        } else if (isShift && speedMps > 15) {
          this.speedBadge.textContent = `🔥 NITRO ${speedMps} M/S`;
          this.speedBadge.className = 'speed-badge nitro';
        } else if (speedMps > 0) {
          this.speedBadge.textContent = `QUAD 4X4: ${speedMps} M/S`;
          this.speedBadge.className = 'speed-badge run';
        } else {
          this.speedBadge.textContent = 'QUAD: IDLE';
          this.speedBadge.className = 'speed-badge';
        }
      } else {
        const state = this.player.moveState;
        if (state === 'ZOOM') {
          this.speedBadge.textContent = '⚡ ZOOM 24 M/S';
          this.speedBadge.className = 'speed-badge zoom';
        } else if (state === 'RUN') {
          this.speedBadge.textContent = 'RUN 14 M/S';
          this.speedBadge.className = 'speed-badge run';
        } else {
          this.speedBadge.textContent = this.player.isMoving ? 'WALK 7 M/S' : 'IDLE';
          this.speedBadge.className = 'speed-badge';
        }
      }
    }

    // 4. Render
    this.sceneManager.render();

    // 5. FPS update
    this.frameCount++;
    if (now - this.lastFpsUpdate >= 1000) {
      const fps = Math.round((this.frameCount * 1000) / (now - this.lastFpsUpdate));
      if (this.fpsDisplay) {
        this.fpsDisplay.textContent = `${fps} FPS`;
      }
      this.frameCount = 0;
      this.lastFpsUpdate = now;
    }
  }
}

// Bootstrap
window.addEventListener('DOMContentLoaded', () => {
  new GameApp();
});
