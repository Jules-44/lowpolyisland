import * as THREE from 'three';
import { CollisionWorld } from './CollisionWorld.js';

/**
 * FjordWorld — Level 3: Nordic Pine Fjords & Stilt Villages
 * 
 * Aesthetic & Features:
 * - Towering granite mountain peaks & sheer glacial cliff walls
 * - Crystalline fjord sound with animated low-poly water waves
 * - Traditional Scandinavian red & ochre stilt fishing cottages (Rorbu) built over the water
 * - Connected wooden boardwalk piers with lanterns, barrels, crates, and fish drying racks
 * - High arched wooden timber trestle bridge spanning the fjord channel
 * - Alpine switchback trail winding up the granite cliffs with wooden guard rails
 * - Mountain summit Stave Lookout tower with rotating beacon
 * - Scandinavian evergreen pines, golden birch trees, and mossy granite boulders
 * - Full collision detection and seamless quad bike / player terrain & bridge physics
 */
export class FjordWorld {
  constructor(scene) {
    this.scene = scene;
    this.rootGroup = new THREE.Group();
    this.scene.add(this.rootGroup);

    this.time = 0;
    this.collisionWorld = new CollisionWorld();

    // Level metadata
    this.id = 'fjord';
    this.name = 'NORDIC FJORDS // RORBU ARCHIPELAGO';
    this.skyTheme = 'NORDIC_TWILIGHT';
    this.hasOcean = true;

    // Spawns
    this.playerSpawn = { x: -95, y: 3.8, z: -35, rotY: Math.PI * 0.4 };
    this.quadSpawn = { x: -88, y: 3.6, z: -30, rotY: Math.PI * 0.5 };
    this.defaultTrackIndex = 1; // TWILIGHT OVER THE REEF

    // Entities & animations
    this.lanternLights = [];
    this.chimneySmokes = [];
    this.beaconGroup = null;
    this.campfireFlames = [];

    // Shared materials
    this._initMaterials();

    // Build the world
    this._buildWater();
    this._buildTerrain();
    this._buildHighTrestleBridge();
    this._buildNorthBridge();
    this._buildStiltVillage();
    this._buildStaveLookout();
    this._buildAlpineTrail();
    this._buildForestAndBoulders();
    this._buildCoastalProps();
  }

  _initMaterials() {
    this.materials = {
      rock: new THREE.MeshStandardMaterial({
        color: 0x5a636e,
        roughness: 0.88,
        metalness: 0.08,
        flatShading: true
      }),
      grass: new THREE.MeshStandardMaterial({
        color: 0x3d5a38,
        roughness: 0.9,
        flatShading: true
      }),
      moss: new THREE.MeshStandardMaterial({
        color: 0x4f683a,
        roughness: 0.85,
        flatShading: true
      }),
      snowCap: new THREE.MeshStandardMaterial({
        color: 0xd8e4ea,
        roughness: 0.6,
        flatShading: true
      }),
      woodPlanks: new THREE.MeshStandardMaterial({
        color: 0x5a4231,
        roughness: 0.85,
        flatShading: true
      }),
      darkTimber: new THREE.MeshStandardMaterial({
        color: 0x3b2c21,
        roughness: 0.88,
        flatShading: true
      }),
      rorbuRed: new THREE.MeshStandardMaterial({
        color: 0x932824,
        roughness: 0.75,
        flatShading: true
      }),
      rorbuOchre: new THREE.MeshStandardMaterial({
        color: 0xb5782a,
        roughness: 0.75,
        flatShading: true
      }),
      slateRoof: new THREE.MeshStandardMaterial({
        color: 0x252e36,
        roughness: 0.8,
        flatShading: true
      }),
      pineFoliage: new THREE.MeshStandardMaterial({
        color: 0x1f3826,
        roughness: 0.85,
        flatShading: true
      }),
      birchFoliage: new THREE.MeshStandardMaterial({
        color: 0xc48737,
        roughness: 0.82,
        flatShading: true
      }),
      birchTrunk: new THREE.MeshStandardMaterial({
        color: 0xe0e0d6,
        roughness: 0.7,
        flatShading: true
      }),
      windowGlow: new THREE.MeshBasicMaterial({
        color: 0xffbe58
      }),
      lanternGlow: new THREE.MeshBasicMaterial({
        color: 0xffaa33
      }),
      fireAmber: new THREE.MeshBasicMaterial({
        color: 0xff6600
      })
    };
  }

  /* -------------------------------------------------------------
   * 1. Animated Low-Poly Fjord Water
   * ------------------------------------------------------------- */
  _buildWater() {
    const waterGeo = new THREE.PlaneGeometry(800, 800, 72, 72);
    waterGeo.rotateX(-Math.PI / 2);

    this.waterMat = new THREE.MeshStandardMaterial({
      color: 0x0f2b38,
      roughness: 0.25,
      metalness: 0.2,
      flatShading: true,
      transparent: true,
      opacity: 0.93
    });

    this.waterMesh = new THREE.Mesh(waterGeo, this.waterMat);
    this.waterMesh.position.y = 0.0;
    this.rootGroup.add(this.waterMesh);

    this.waterPosAttribute = waterGeo.attributes.position;
    this.waterBaseY = new Float32Array(this.waterPosAttribute.count);
    for (let i = 0; i < this.waterPosAttribute.count; i++) {
      this.waterBaseY[i] = this.waterPosAttribute.getY(i);
    }
  }

  /* -------------------------------------------------------------
   * 2. Elevation Mathematical Model
   * ------------------------------------------------------------- */
  getIslandElevation(x, z) {
    // A. Main Fjord Trestle Bridge (X: -78 to 78, Z: -24 to -16)
    if (x >= -78 && x <= 78 && Math.abs(z - -20) <= 4.2) {
      // Arched roadway from 5.8m on western pier up to 11.5m at center, down to 8.5m on eastern cliff
      const t = (x + 78) / 156.0;
      const arch = Math.sin(t * Math.PI) * 4.5;
      const baseElev = 5.8 * (1 - t) + 8.5 * t;
      return baseElev + arch;
    }

    // B. North Bay Timber Bridge (spanning between Western Skerry and Northern Pine Sanctuary)
    // Runs from (-80, 4.0, 35) to (-15, 6.0, 115)
    const nbDx = -15 - -80;
    const nbDz = 115 - 35;
    const nbLen = Math.hypot(nbDx, nbDz);
    const nbProg = ((x - -80) * nbDx + (z - 35) * nbDz) / (nbLen * nbLen);
    if (nbProg >= 0 && nbProg <= 1) {
      const perpDist = Math.abs((x - -80) * nbDz - (z - 35) * nbDx) / nbLen;
      if (perpDist <= 3.2) {
        const arch = Math.sin(nbProg * Math.PI) * 2.8;
        return (4.0 * (1 - nbProg) + 6.0 * nbProg) + arch;
      }
    }

    // C. Western Skerry (Stilt Village & Fishing Wharf)
    // Centered at (-105, -25), radius ~85m
    const wDx = x - -105;
    const wDz = z - -25;
    const wDist = Math.hypot(wDx * 0.95, wDz * 0.85);

    // Village wooden boardwalk piers over water
    if (x >= -125 && x <= -75 && z >= -55 && z <= 5) {
      // Boardwalk pier network height
      if ((Math.abs(z - -35) <= 3.8 && x >= -120 && x <= -75) ||
          (Math.abs(x - -95) <= 3.8 && z >= -50 && z <= 0) ||
          (Math.abs(x - -110) <= 3.8 && z >= -48 && z <= -15)) {
        return 3.8;
      }
    }

    let h = 0.0;

    if (wDist < 80) {
      const wt = 1 - (wDist / 80);
      h = Math.max(h, Math.pow(wt, 1.2) * 9.5);
      // Gentle rocky undulations
      h += Math.sin(x * 0.12) * Math.cos(z * 0.15) * 1.1;
    }

    // D. Eastern Granite Massif & Peak (Towering Fjord Cliffs)
    // Centered at (115, 25), radius ~140m
    const eDx = x - 115;
    const eDz = z - 25;
    const eDist = Math.hypot(eDx * 0.9, eDz * 0.75);

    if (eDist < 135) {
      const et = 1 - (eDist / 135);
      // Towering craggy cliffs rising sheer up to 42 meters
      let cliffH = Math.pow(et, 0.75) * 38.0;
      // Sheer facet noise
      cliffH += Math.sin(x * 0.18 + z * 0.08) * 3.2;
      cliffH += Math.cos(x * 0.06 - z * 0.14) * 2.5;

      // Summit peak where the Stave Lookout stands
      const summitDist = Math.hypot(x - 128, z - 38);
      if (summitDist < 25) {
        cliffH += Math.max(0, (1 - summitDist / 25) * 6.5);
      }

      h = Math.max(h, cliffH);
    }

    // E. Alpine Switchback Trail (carved along the western face of the Eastern Massif)
    const trailHeight = this._getAlpineTrailHeight(x, z);
    if (trailHeight !== null) {
      return trailHeight;
    }

    // F. Northern Skerry (Pine Sanctuary & Waterfall Source)
    // Centered at (0, 165), radius ~100m
    const nDx = x - 0;
    const nDz = z - 165;
    const nDist = Math.hypot(nDx * 0.8, nDz * 0.9);

    if (nDist < 95) {
      const nt = 1 - (nDist / 95);
      const pineH = Math.pow(nt, 1.1) * 22.0 + Math.sin(x * 0.1) * Math.cos(z * 0.1) * 1.8;
      h = Math.max(h, pineH);
    }

    // G. Outlying sea rocks / skerries in fjord channel
    const rock1Dist = Math.hypot(x - -15, z - -95);
    if (rock1Dist < 16) {
      h = Math.max(h, (1 - rock1Dist / 16) * 5.5);
    }
    const rock2Dist = Math.hypot(x - 25, z - 75);
    if (rock2Dist < 22) {
      h = Math.max(h, (1 - rock2Dist / 22) * 8.2);
    }

    return h;
  }

  _getAlpineTrailHeight(x, z) {
    // Switchback trail ascending from Bridge East abutment (78, 8.5, -20) up to Summit (128, 42.0, 38)
    // Segment 1: from (78, -20) to (95, 5) -> ascends from 8.5 to 19.0
    const d1 = this._pointToSegmentDist(x, z, 78, -20, 95, 5);
    if (d1.dist < 4.5) {
      return 8.5 + (19.0 - 8.5) * d1.prog;
    }
    // Segment 2: from (95, 5) hairpin turn to (82, 35) -> ascends from 19.0 to 29.5
    const d2 = this._pointToSegmentDist(x, z, 95, 5, 82, 35);
    if (d2.dist < 4.5) {
      return 19.0 + (29.5 - 19.0) * d2.prog;
    }
    // Segment 3: from (82, 35) hairpin turn up to summit (125, 38) -> ascends from 29.5 to 41.5
    const d3 = this._pointToSegmentDist(x, z, 82, 35, 125, 38);
    if (d3.dist < 4.8) {
      return 29.5 + (41.5 - 29.5) * d3.prog;
    }
    return null;
  }

  _pointToSegmentDist(px, pz, ax, az, bx, bz) {
    const dx = bx - ax;
    const dz = bz - az;
    const lenSq = dx * dx + dz * dz;
    if (lenSq === 0) return { dist: Math.hypot(px - ax, pz - az), prog: 0 };
    let t = ((px - ax) * dx + (pz - az) * dz) / lenSq;
    t = Math.max(0, Math.min(1, t));
    const projX = ax + t * dx;
    const projZ = az + t * dz;
    return { dist: Math.hypot(px - projX, pz - projZ), prog: t };
  }

  getGroundHeight(x, z, currentY) {
    // If under trestle bridge and moving at water level, allow passage underneath
    const onBridgeX = x >= -78 && x <= 78;
    const onBridgeZ = Math.abs(z - -20) <= 4.2;
    if (onBridgeX && onBridgeZ) {
      const bridgeHeight = this.getIslandElevation(x, z);
      // If entity is near water level (currentY < 4.0), let them cruise underneath the bridge!
      if (currentY !== undefined && currentY < 3.8) {
        return 0.0;
      }
      return bridgeHeight;
    }

    return this.getIslandElevation(x, z);
  }

  resolveCollisions(position, radius, currentY) {
    if (this.collisionWorld) {
      this.collisionWorld.resolve(position, radius, currentY);
    }
  }

  /* -------------------------------------------------------------
   * 3. Low-Poly Terrain Mesh Construction
   * ------------------------------------------------------------- */
  _buildTerrain() {
    const geo = new THREE.PlaneGeometry(560, 560, 110, 110);
    geo.rotateX(-Math.PI / 2);

    const pos = geo.attributes.position;
    const colors = [];
    const color = new THREE.Color();

    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i);
      const z = pos.getZ(i);
      const elev = this.getIslandElevation(x, z);
      pos.setY(i, elev);

      // Biome-based vertex tinting:
      // Underwater/shoreline: wet dark granite & sand
      // Lowlands (0.5 to 12m): rich Scandinavian green grass & moss
      // Uplands (12 to 28m): rocky granite scree
      // Mountain Peaks (> 28m): dark granite crags with snow-capped dusting
      if (elev < 0.6) {
        color.setHex(0x2a363d); // Submerged dark wet rock
      } else if (elev < 12.0) {
        // Western village & pine lowland
        const t = (elev - 0.6) / 11.4;
        color.setHex(t < 0.5 ? 0x486438 : 0x3d5432);
      } else if (elev < 26.0) {
        // Granite crag slopes
        color.setHex(0x565e68);
      } else {
        // High alpine peaks with crisp dusting of glacial snow
        const snowT = Math.min(1.0, (elev - 26.0) / 14.0);
        color.setHex(snowT > 0.6 ? 0xd0dce4 : 0x6e7782);
      }

      colors.push(color.r, color.g, color.b);
    }

    geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));
    geo.computeVertexNormals();

    const terrainMat = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 0.9,
      metalness: 0.05,
      flatShading: true
    });

    const terrainMesh = new THREE.Mesh(geo, terrainMat);
    terrainMesh.receiveShadow = true;
    this.rootGroup.add(terrainMesh);
  }

  /* -------------------------------------------------------------
   * 4. High Fjord Trestle Bridge (Spans across deep water)
   * ------------------------------------------------------------- */
  _buildHighTrestleBridge() {
    const bridgeGroup = new THREE.Group();
    const bridgeW = 8.4;
    const spanSegments = 26;
    const startX = -78;
    const endX = 78;
    const zCenter = -20;

    // A. Roadway Deck Planks & Guardrails
    for (let i = 0; i < spanSegments; i++) {
      const x1 = startX + (i / spanSegments) * (endX - startX);
      const x2 = startX + ((i + 1) / spanSegments) * (endX - startX);
      const xm = (x1 + x2) * 0.5;

      const y1 = this.getIslandElevation(x1, zCenter);
      const y2 = this.getIslandElevation(x2, zCenter);
      const ym = (y1 + y2) * 0.5;

      const dx = x2 - x1;
      const dy = y2 - y1;
      const segLen = Math.hypot(dx, dy);
      const angleZ = Math.atan2(dy, dx);

      // Deck Slab
      const deck = new THREE.Mesh(
        new THREE.BoxGeometry(segLen, 0.45, bridgeW),
        this.materials.woodPlanks
      );
      deck.position.set(xm, ym - 0.22, zCenter);
      deck.rotation.z = angleZ;
      deck.castShadow = true;
      deck.receiveShadow = true;
      bridgeGroup.add(deck);

      // Side Timber Curbs & Safety Guardrails
      [-bridgeW * 0.48, bridgeW * 0.48].forEach((zOff) => {
        // Railing Post
        const post = new THREE.Mesh(
          new THREE.BoxGeometry(0.25, 1.25, 0.25),
          this.materials.darkTimber
        );
        post.position.set(xm, ym + 0.5, zCenter + zOff);
        bridgeGroup.add(post);

        // Horizontal Timber Handrail
        const rail = new THREE.Mesh(
          new THREE.BoxGeometry(segLen, 0.16, 0.18),
          this.materials.darkTimber
        );
        rail.position.set(xm, ym + 1.0, zCenter + zOff);
        rail.rotation.z = angleZ;
        bridgeGroup.add(rail);

        // Mid-height safety wire
        const midRail = new THREE.Mesh(
          new THREE.BoxGeometry(segLen, 0.08, 0.08),
          this.materials.darkTimber
        );
        midRail.position.set(xm, ym + 0.5, zCenter + zOff);
        midRail.rotation.z = angleZ;
        bridgeGroup.add(midRail);
      });

      // B. Supporting Timber Piles driven into deep water every 4 segments
      if (i % 4 === 0 && Math.abs(xm) < 68) {
        [-bridgeW * 0.42, bridgeW * 0.42].forEach((zOff) => {
          const pierHeight = ym + 0.5;
          const pier = new THREE.Mesh(
            new THREE.CylinderGeometry(0.35, 0.45, pierHeight, 6),
            this.materials.darkTimber
          );
          pier.position.set(xm, pierHeight * 0.5, zCenter + zOff);
          pier.castShadow = true;
          bridgeGroup.add(pier);
        });

        // Cross-brace trestle girder
        const crossGirder = new THREE.Mesh(
          new THREE.BoxGeometry(0.3, 0.4, bridgeW * 0.9),
          this.materials.darkTimber
        );
        crossGirder.position.set(xm, ym - 1.2, zCenter);
        bridgeGroup.add(crossGirder);

        // Lantern on alternating bridge piers
        if (i % 8 === 0) {
          this._addFjordLantern(bridgeGroup, xm, ym + 1.2, zCenter - bridgeW * 0.48);
        }
      }
    }

    // Outer railing collision boxes so vehicles don't tumble off the edge into ocean
    this.collisionWorld.addStaticBox(0, 10, zCenter - bridgeW * 0.52, 160, 4, 0.5);
    this.collisionWorld.addStaticBox(0, 10, zCenter + bridgeW * 0.52, 160, 4, 0.5);

    this.rootGroup.add(bridgeGroup);
  }

  /* -------------------------------------------------------------
   * 5. North Bay Timber Bridge (Connecting West to North Pine Woods)
   * ------------------------------------------------------------- */
  _buildNorthBridge() {
    const bridgeGroup = new THREE.Group();
    const startX = -80, startZ = 35;
    const endX = -15, endZ = 115;
    const bridgeW = 6.2;
    const segments = 18;

    const dx = endX - startX;
    const dz = endZ - startZ;
    const totalDist = Math.hypot(dx, dz);
    const yaw = Math.atan2(dx, dz);

    for (let i = 0; i < segments; i++) {
      const p1 = i / segments;
      const p2 = (i + 1) / segments;
      const pm = (p1 + p2) * 0.5;

      const x = startX + pm * dx;
      const z = startZ + pm * dz;
      const ym = this.getIslandElevation(x, z);
      const segLen = totalDist / segments;

      const deck = new THREE.Mesh(
        new THREE.BoxGeometry(bridgeW, 0.35, segLen + 0.1),
        this.materials.woodPlanks
      );
      deck.position.set(x, ym - 0.18, z);
      deck.rotation.y = yaw;
      deck.castShadow = true;
      deck.receiveShadow = true;
      bridgeGroup.add(deck);

      // Guard rails
      [-bridgeW * 0.48, bridgeW * 0.48].forEach((side) => {
        const sideX = x + Math.cos(yaw) * side;
        const sideZ = z - Math.sin(yaw) * side;
        const post = new THREE.Mesh(
          new THREE.BoxGeometry(0.2, 1.1, 0.2),
          this.materials.darkTimber
        );
        post.position.set(sideX, ym + 0.45, sideZ);
        bridgeGroup.add(post);
      });

      // Underwater pilings
      if (i % 3 === 0 && pm > 0.15 && pm < 0.85) {
        const pierH = ym + 0.5;
        const pier = new THREE.Mesh(
          new THREE.CylinderGeometry(0.3, 0.35, pierH, 6),
          this.materials.darkTimber
        );
        pier.position.set(x, pierH * 0.5, z);
        bridgeGroup.add(pier);
      }
    }

    this.rootGroup.add(bridgeGroup);
  }

  /* -------------------------------------------------------------
   * 6. Traditional Nordic Stilt Fishing Village (Rorbu)
   * ------------------------------------------------------------- */
  _buildStiltVillage() {
    const villageGroup = new THREE.Group();

    // Stilt Cottage Layout definitions: [x, z, rotY, isOchre, scale]
    const rorbuLayout = [
      [-114, -42, 0.25, false, 1.0],
      [-104, -45, 0.0, true, 1.15],
      [-92, -44, -0.2, false, 1.05],
      [-80, -42, -0.4, false, 1.2],
      [-118, -25, 0.8, true, 1.0],
      [-112, -12, 1.4, false, 1.1],
      [-98, -10, 1.57, true, 1.05],
      [-82, -15, -1.2, false, 0.95],
      [-105, -55, 0.1, false, 1.3] // Village Chieftain / Fish Exchange Lodge
    ];

    rorbuLayout.forEach(([x, z, rotY, isOchre, scale]) => {
      this._buildRorbuCottage(villageGroup, x, z, rotY, isOchre, scale);
    });

    // Wooden Boardwalk Pier Decking between cottages
    this._buildBoardwalks(villageGroup);

    this.rootGroup.add(villageGroup);
  }

  _buildRorbuCottage(group, cx, cz, rotY, isOchre, scale) {
    const cottage = new THREE.Group();
    const w = 6.4 * scale;
    const l = 7.8 * scale;
    const wallH = 3.8 * scale;
    const floorY = 3.8; // Set on timber stilts above water level

    const wallMat = isOchre ? this.materials.rorbuOchre : this.materials.rorbuRed;

    // 1. Timber Stilts beneath the house (extending down to rock/water)
    const stiltOffsets = [
      [-w * 0.44, -l * 0.44], [w * 0.44, -l * 0.44],
      [-w * 0.44, 0], [w * 0.44, 0],
      [-w * 0.44, l * 0.44], [w * 0.44, l * 0.44]
    ];

    stiltOffsets.forEach(([sx, sz]) => {
      const groundAtStilt = this.getIslandElevation(cx + sx, cz + sz);
      const stiltLen = Math.max(1.5, floorY - groundAtStilt + 0.4);
      const stilt = new THREE.Mesh(
        new THREE.CylinderGeometry(0.18, 0.22, stiltLen, 5),
        this.materials.darkTimber
      );
      stilt.position.set(sx, floorY - stiltLen * 0.5, sz);
      cottage.add(stilt);
    });

    // 2. Wooden Floor Platform & Joists
    const floor = new THREE.Mesh(
      new THREE.BoxGeometry(w + 0.4, 0.3, l + 0.4),
      this.materials.woodPlanks
    );
    floor.position.set(0, floorY, 0);
    cottage.add(floor);

    // 3. Red or Ochre Timber Walls
    const walls = new THREE.Mesh(
      new THREE.BoxGeometry(w, wallH, l),
      wallMat
    );
    walls.position.set(0, floorY + wallH * 0.5, 0);
    walls.castShadow = true;
    walls.receiveShadow = true;
    cottage.add(walls);

    // 4. Nordic Gabled Pitch Roof
    const roofH = 2.4 * scale;
    const roofOverhang = 0.6;
    const roofGeo = new THREE.ConeGeometry((w + roofOverhang * 2) * 0.72, roofH, 4);
    roofGeo.rotateY(Math.PI / 4);
    const roof = new THREE.Mesh(roofGeo, this.materials.slateRoof);
    roof.position.set(0, floorY + wallH + roofH * 0.46, 0);
    roof.scale.set(1.0, 1.0, l / w);
    roof.castShadow = true;
    cottage.add(roof);

    // 5. White Corner Trim Beams & Bargeboards
    const trimMat = this.materials.birchTrunk;
    [-w * 0.5, w * 0.5].forEach((tx) => {
      [-l * 0.5, l * 0.5].forEach((tz) => {
        const corner = new THREE.Mesh(
          new THREE.BoxGeometry(0.18, wallH, 0.18),
          trimMat
        );
        corner.position.set(tx, floorY + wallH * 0.5, tz);
        cottage.add(corner);
      });
    });

    // 6. Glowing Amber Windows with Cross Muntins
    const winGeo = new THREE.PlaneGeometry(1.2 * scale, 1.4 * scale);
    const winMat = this.materials.windowGlow;

    // Front Window
    const frontWin = new THREE.Mesh(winGeo, winMat);
    frontWin.position.set(0, floorY + wallH * 0.52, l * 0.505);
    cottage.add(frontWin);

    // Side Windows
    [-w * 0.505, w * 0.505].forEach((wx) => {
      const sideWin = new THREE.Mesh(winGeo, winMat);
      sideWin.rotation.y = wx > 0 ? Math.PI / 2 : -Math.PI / 2;
      sideWin.position.set(wx, floorY + wallH * 0.52, 0);
      cottage.add(sideWin);
    });

    // 7. Stone Chimney with Puffed Smoke
    const chimney = new THREE.Mesh(
      new THREE.BoxGeometry(0.65, 1.8, 0.65),
      this.materials.rock
    );
    chimney.position.set(w * 0.28, floorY + wallH + roofH * 0.7, -l * 0.25);
    cottage.add(chimney);

    // Chimney smoke puff particles
    const smokePuff = new THREE.Mesh(
      new THREE.DodecahedronGeometry(0.42),
      new THREE.MeshStandardMaterial({
        color: 0xcccccc,
        transparent: true,
        opacity: 0.4,
        roughness: 1.0
      })
    );
    smokePuff.position.set(w * 0.28, floorY + wallH + roofH * 0.7 + 1.2, -l * 0.25);
    cottage.add(smokePuff);
    this.chimneySmokes.push(smokePuff);

    // 8. Lantern by Cottage Entrance
    this._addFjordLantern(cottage, -w * 0.35, floorY + 2.2, l * 0.52);

    // Transform and add to village group
    cottage.position.set(cx, 0, cz);
    cottage.rotation.y = rotY;
    group.add(cottage);

    // Add solid collision box so player and vehicle cannot phase through houses
    this.collisionWorld.addStaticBox(cx, floorY + wallH * 0.5, cz, w + 0.6, wallH + 1.0, l + 0.6);
  }

  _buildBoardwalks(group) {
    const boardwalks = [
      // Main East-West Village Wharf Boardwalk (from x: -125 to -74, z: -35)
      { x: -100, z: -35, w: 52, d: 5.2, rotY: 0 },
      // North Branch Boardwalk (x: -95, z: -25)
      { x: -95, z: -20, w: 4.8, d: 32, rotY: 0 },
      // Fish Drying Platform (x: -110, z: -25)
      { x: -110, z: -25, w: 4.6, d: 24, rotY: 0 },
      // Ramp connecting boardwalk to Western Skerry island trail (x: -80, z: -35)
      { x: -76, z: -30, w: 12, d: 4.8, rotY: 0.65 }
    ];

    boardwalks.forEach(({ x, z, w, d, rotY }) => {
      const plankDeck = new THREE.Mesh(
        new THREE.BoxGeometry(w, 0.35, d),
        this.materials.woodPlanks
      );
      plankDeck.position.set(x, 3.8 - 0.18, z);
      plankDeck.rotation.y = rotY;
      plankDeck.receiveShadow = true;
      group.add(plankDeck);

      // Edge Pilings
      const halfW = w * 0.46;
      [-halfW, halfW].forEach((px) => {
        const pile = new THREE.Mesh(
          new THREE.CylinderGeometry(0.2, 0.25, 4.8, 6),
          this.materials.darkTimber
        );
        pile.position.set(x + px, 3.8 - 2.0, z);
        group.add(pile);
      });
    });
  }

  /* -------------------------------------------------------------
   * 7. Stave Lookout Tower & Summit Beacon (High East Cliff)
   * ------------------------------------------------------------- */
  _buildStaveLookout() {
    const summitX = 128;
    const summitZ = 38;
    const summitY = this.getIslandElevation(summitX, summitZ);

    const towerGroup = new THREE.Group();
    towerGroup.position.set(summitX, summitY, summitZ);

    // Multi-tiered traditional Nordic Stave Church / Lookout Architecture
    // Base Tier
    const baseW = 8.5;
    const baseH = 5.2;
    const base = new THREE.Mesh(
      new THREE.BoxGeometry(baseW, baseH, baseW),
      this.materials.darkTimber
    );
    base.position.y = baseH * 0.5;
    base.castShadow = true;
    towerGroup.add(base);

    // Tier 1 Pitch Roof
    const roof1Geo = new THREE.ConeGeometry(baseW * 0.85, 3.8, 4);
    roof1Geo.rotateY(Math.PI / 4);
    const roof1 = new THREE.Mesh(roof1Geo, this.materials.slateRoof);
    roof1.position.y = baseH + 1.6;
    towerGroup.add(roof1);

    // Middle Tier Tower
    const midW = 5.5;
    const midH = 6.2;
    const midTier = new THREE.Mesh(
      new THREE.BoxGeometry(midW, midH, midW),
      this.materials.darkTimber
    );
    midTier.position.y = baseH + 3.4 + midH * 0.5;
    towerGroup.add(midTier);

    // Tier 2 Pitch Roof
    const roof2Geo = new THREE.ConeGeometry(midW * 0.88, 3.2, 4);
    roof2Geo.rotateY(Math.PI / 4);
    const roof2 = new THREE.Mesh(roof2Geo, this.materials.slateRoof);
    roof2.position.y = baseH + 3.4 + midH + 1.2;
    towerGroup.add(roof2);

    // High Spire & Lookout Turret
    const turretH = 4.5;
    const turret = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 2.0, turretH, 6),
      this.materials.darkTimber
    );
    turret.position.y = baseH + 3.4 + midH + 2.8 + turretH * 0.5;
    towerGroup.add(turret);

    // Steep Spire Needle
    const spireGeo = new THREE.ConeGeometry(1.8, 6.5, 6);
    const spire = new THREE.Mesh(spireGeo, this.materials.slateRoof);
    spire.position.y = baseH + 3.4 + midH + 2.8 + turretH + 3.0;
    towerGroup.add(spire);

    // Summit Signal Beacon / Glowing Amber Fire Brazier
    this.beaconGroup = new THREE.Group();
    this.beaconGroup.position.y = baseH + 3.4 + midH + 2.8 + turretH + 6.2;

    const brazier = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.4, 0.6, 6),
      this.materials.rock
    );
    this.beaconGroup.add(brazier);

    const beaconLight = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.65),
      this.materials.fireAmber
    );
    beaconLight.position.y = 0.5;
    this.beaconGroup.add(beaconLight);

    towerGroup.add(this.beaconGroup);
    this.rootGroup.add(towerGroup);

    // Collision Box around the tower base
    this.collisionWorld.addStaticBox(summitX, summitY + 4, summitZ, baseW + 0.8, 12, baseW + 0.8);
  }

  /* -------------------------------------------------------------
   * 8. Alpine Switchback Trail Guardrails & Markers
   * ------------------------------------------------------------- */
  _buildAlpineTrail() {
    const trailGroup = new THREE.Group();

    // Key points along the switchback trail ascending the cliff face
    const trailWaypoints = [
      // Abutment entrance
      [78, -20], [84, -10], [90, -2], [95, 5],
      // Hairpin 1
      [94, 15], [90, 24], [85, 30], [82, 35],
      // Hairpin 2 & Ridge run to summit
      [90, 37], [102, 38], [114, 38], [124, 38]
    ];

    for (let i = 0; i < trailWaypoints.length - 1; i++) {
      const [x1, z1] = trailWaypoints[i];
      const [x2, z2] = trailWaypoints[i + 1];
      const xm = (x1 + x2) * 0.5;
      const zm = (z1 + z2) * 0.5;
      const ym = this.getIslandElevation(xm, zm);

      const dx = x2 - x1;
      const dz = z2 - z1;
      const segLen = Math.hypot(dx, dz);
      const yaw = Math.atan2(dx, dz);

      // Wooden Cliff-side Guard Rail on the outer (precipice) side
      const guardOffset = 3.6; // Cliff edge
      const gx = xm + Math.cos(yaw) * guardOffset;
      const gz = zm - Math.sin(yaw) * guardOffset;

      const railPost = new THREE.Mesh(
        new THREE.BoxGeometry(0.22, 1.2, 0.22),
        this.materials.darkTimber
      );
      railPost.position.set(gx, ym + 0.55, gz);
      trailGroup.add(railPost);

      const railBeam = new THREE.Mesh(
        new THREE.BoxGeometry(0.16, 0.18, segLen + 0.2),
        this.materials.darkTimber
      );
      railBeam.position.set(gx, ym + 0.95, gz);
      railBeam.rotation.y = yaw;
      trailGroup.add(railBeam);

      // Small stone trail cairns (rock stacks) every few waypoints
      if (i % 3 === 0) {
        this._buildTrailCairn(trailGroup, xm - Math.cos(yaw) * 3.2, ym, zm + Math.sin(yaw) * 3.2);
      }
    }

    this.rootGroup.add(trailGroup);
  }

  _buildTrailCairn(group, cx, cy, cz) {
    const cairn = new THREE.Group();
    cairn.position.set(cx, cy, cz);
    const stones = [
      { r: 0.45, h: 0.35, y: 0.18 },
      { r: 0.35, h: 0.30, y: 0.48 },
      { r: 0.24, h: 0.25, y: 0.74 },
      { r: 0.14, h: 0.20, y: 0.95 }
    ];
    stones.forEach(({ r, h, y }) => {
      const stone = new THREE.Mesh(
        new THREE.DodecahedronGeometry(r),
        this.materials.rock
      );
      stone.scale.set(1.1, h / r, 0.9);
      stone.position.y = y;
      stone.rotation.set(Math.random(), Math.random(), Math.random());
      cairn.add(stone);
    });
    group.add(cairn);
  }

  /* -------------------------------------------------------------
   * 9. Scandinavian Forests (Spruce Pines, Birch, & Granite Rocks)
   * ------------------------------------------------------------- */
  _buildForestAndBoulders() {
    const forestGroup = new THREE.Group();

    // Instanced / Batched Pine Tree Generation
    // Clusters: Northern Sanctuary (dense), Eastern Ridges (alpine sparse), Western Skerry (coastal)
    const treeLocations = [];

    // 1. Northern Pine Sanctuary Cluster (dense deep woods)
    for (let i = 0; i < 90; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 12 + Math.random() * 70;
      const x = Math.cos(angle) * r;
      const z = 165 + Math.sin(angle) * r;
      const y = this.getIslandElevation(x, z);
      if (y > 2.0) {
        treeLocations.push({ x, y, z, isBirch: Math.random() > 0.78, scale: 0.8 + Math.random() * 0.5 });
      }
    }

    // 2. Western Skerry Hillocks (sparse coastal pines)
    for (let i = 0; i < 45; i++) {
      const x = -135 + Math.random() * 55;
      const z = -65 + Math.random() * 60;
      const y = this.getIslandElevation(x, z);
      if (y > 2.8) {
        // Keep clear of village center
        if (Math.hypot(x - -100, z - -35) > 22) {
          treeLocations.push({ x, y, z, isBirch: Math.random() > 0.7, scale: 0.75 + Math.random() * 0.4 });
        }
      }
    }

    // 3. Eastern Mountain Highlands
    for (let i = 0; i < 55; i++) {
      const x = 70 + Math.random() * 85;
      const z = -35 + Math.random() * 110;
      const y = this.getIslandElevation(x, z);
      if (y > 10.0 && y < 36.0) {
        // Keep clear of switchback trail
        if (this._getAlpineTrailHeight(x, z) === null) {
          treeLocations.push({ x, y, z, isBirch: false, scale: 0.7 + Math.random() * 0.55 });
        }
      }
    }

    // Instantiate trees
    treeLocations.forEach(({ x, y, z, isBirch, scale }) => {
      if (isBirch) {
        this._buildNordicBirch(forestGroup, x, y, z, scale);
      } else {
        this._buildNordicPine(forestGroup, x, y, z, scale);
      }
      // Tree trunk collision cylinder
      this.collisionWorld.addStaticCylinder(x, y + 2, z, 0.45 * scale, 6 * scale);
    });

    // 4. Glacial Erratics & Mossy Granite Boulders
    const boulderPositions = [
      // Fjord channel rocks
      [-15, 0, -95, 14, 6],
      [25, 0, 75, 18, 9],
      [-5, 0, -10, 8, 4.5],
      // Village coastline boulders
      [-72, 1.5, -48, 6.5, 3.8],
      [-128, 2.0, -15, 7.2, 4.2],
      [-110, 2.5, 18, 8.5, 5.0],
      // East cliff footings
      [68, 4.0, -42, 11, 7.5],
      [82, 5.0, 10, 12, 8.0],
      [95, 12.0, 65, 14, 9.5]
    ];

    boulderPositions.forEach(([bx, by, bz, rad, h]) => {
      const rock = new THREE.Mesh(
        new THREE.DodecahedronGeometry(rad * 0.5),
        this.materials.rock
      );
      rock.scale.set(1.2, h / (rad * 0.5), 0.95);
      rock.position.set(bx, by + h * 0.35, bz);
      rock.rotation.set(Math.random(), Math.random(), Math.random());
      rock.castShadow = true;
      rock.receiveShadow = true;
      forestGroup.add(rock);

      this.collisionWorld.addStaticCylinder(bx, by + h * 0.5, bz, rad * 0.45, h + 2);
    });

    this.rootGroup.add(forestGroup);
  }

  _buildNordicPine(group, x, y, z, scale) {
    const pine = new THREE.Group();
    pine.position.set(x, y, z);

    // Trunk
    const trunkH = 4.2 * scale;
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.22 * scale, 0.35 * scale, trunkH, 5),
      this.materials.darkTimber
    );
    trunk.position.y = trunkH * 0.5;
    trunk.castShadow = true;
    pine.add(trunk);

    // 3 tiered low-poly needle cones
    const tiers = [
      { r: 2.8 * scale, h: 3.5 * scale, y: trunkH * 0.65 },
      { r: 2.2 * scale, h: 3.0 * scale, y: trunkH * 0.65 + 2.2 * scale },
      { r: 1.4 * scale, h: 2.6 * scale, y: trunkH * 0.65 + 4.2 * scale }
    ];

    tiers.forEach(({ r, h, y: ty }) => {
      const cone = new THREE.Mesh(
        new THREE.ConeGeometry(r, h, 6),
        this.materials.pineFoliage
      );
      cone.position.y = ty + h * 0.5;
      cone.castShadow = true;
      pine.add(cone);
    });

    group.add(pine);
  }

  _buildNordicBirch(group, x, y, z, scale) {
    const birch = new THREE.Group();
    birch.position.set(x, y, z);

    // White/silver bark trunk with slight Scandinavian lean
    const trunkH = 4.8 * scale;
    const trunk = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18 * scale, 0.28 * scale, trunkH, 5),
      this.materials.birchTrunk
    );
    trunk.position.y = trunkH * 0.5;
    trunk.rotation.z = (Math.random() - 0.5) * 0.12;
    trunk.castShadow = true;
    birch.add(trunk);

    // Autumn Golden/Amber Canopy
    const foliage = new THREE.Mesh(
      new THREE.DodecahedronGeometry(2.4 * scale),
      this.materials.birchFoliage
    );
    foliage.scale.set(1.0, 1.45, 0.95);
    foliage.position.y = trunkH + 1.2 * scale;
    foliage.castShadow = true;
    birch.add(foliage);

    group.add(birch);
  }

  /* -------------------------------------------------------------
   * 10. Props: Drying Racks, Crates, Barrels & Beach Bonfire
   * ------------------------------------------------------------- */
  _buildCoastalProps() {
    const propsGroup = new THREE.Group();

    // A. Fish Drying Racks (Hjell) along village piers
    const hjellPositions = [
      [-112, 3.8, -32, 0.2],
      [-104, 3.8, -32, 0.15],
      [-88, 3.8, -38, -0.4]
    ];

    hjellPositions.forEach(([hx, hy, hz, rotY]) => {
      const hjell = new THREE.Group();
      hjell.position.set(hx, hy, hz);
      hjell.rotation.y = rotY;

      // A-frame timber supports
      [-2.2, 2.2].forEach((xOff) => {
        const leg1 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 3.2, 5), this.materials.woodPlanks);
        leg1.rotation.z = 0.28;
        leg1.position.set(xOff - 0.45, 1.5, 0);
        hjell.add(leg1);

        const leg2 = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 3.2, 5), this.materials.woodPlanks);
        leg2.rotation.z = -0.28;
        leg2.position.set(xOff + 0.45, 1.5, 0);
        hjell.add(leg2);
      });

      // Horizontal poles
      [1.6, 2.2, 2.8].forEach((poleY) => {
        const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 5.2, 5), this.materials.woodPlanks);
        pole.rotation.z = Math.PI / 2;
        pole.position.y = poleY;
        hjell.add(pole);
      });

      propsGroup.add(hjell);
      this.collisionWorld.addStaticBox(hx, hy + 1.5, hz, 5.4, 3.0, 1.2);
    });

    // B. Wooden Cargo Crates & Barrels on boardwalks
    const cratePiles = [
      [-96, 3.8, -38],
      [-102, 3.8, -33],
      [-118, 3.8, -34],
      [-82, 3.8, -33]
    ];

    cratePiles.forEach(([cx, cy, cz]) => {
      // Barrel
      const barrel = new THREE.Mesh(
        new THREE.CylinderGeometry(0.42, 0.48, 1.1, 8),
        this.materials.darkTimber
      );
      barrel.position.set(cx + 0.5, cy + 0.55, cz);
      propsGroup.add(barrel);

      // Wooden Crates
      const crate1 = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.9, 0.9), this.materials.woodPlanks);
      crate1.position.set(cx - 0.5, cy + 0.45, cz);
      propsGroup.add(crate1);

      const crate2 = new THREE.Mesh(new THREE.BoxGeometry(0.75, 0.75, 0.75), this.materials.woodPlanks);
      crate2.position.set(cx - 0.4, cy + 1.25, cz + 0.1);
      propsGroup.add(crate2);

      this.collisionWorld.addStaticBox(cx, cy + 0.8, cz, 2.2, 1.8, 2.0);
    });

    // C. Roaring Beach Bonfire on Western Skerry Cove
    const fireX = -92;
    const fireZ = -18;
    const fireY = this.getIslandElevation(fireX, fireZ);

    const bonfireGroup = new THREE.Group();
    bonfireGroup.position.set(fireX, fireY, fireZ);

    // Stone ring
    const stoneRingGeo = new THREE.TorusGeometry(1.4, 0.28, 5, 10);
    stoneRingGeo.rotateX(Math.PI / 2);
    const stoneRing = new THREE.Mesh(stoneRingGeo, this.materials.rock);
    bonfireGroup.add(stoneRing);

    // Burning log teepee
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const log = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.16, 2.0, 5), this.materials.darkTimber);
      log.position.set(Math.cos(angle) * 0.55, 0.8, Math.sin(angle) * 0.55);
      log.rotation.x = Math.sin(angle) * 0.4;
      log.rotation.z = -Math.cos(angle) * 0.4;
      bonfireGroup.add(log);
    }

    // Low-poly animated flame cones
    const flame1 = new THREE.Mesh(new THREE.ConeGeometry(0.65, 1.6, 5), this.materials.fireAmber);
    flame1.position.y = 0.9;
    bonfireGroup.add(flame1);
    this.campfireFlames.push(flame1);

    const flame2 = new THREE.Mesh(new THREE.ConeGeometry(0.35, 1.1, 5), this.materials.windowGlow);
    flame2.position.y = 0.8;
    bonfireGroup.add(flame2);
    this.campfireFlames.push(flame2);

    propsGroup.add(bonfireGroup);

    this.rootGroup.add(propsGroup);
  }

  _addFjordLantern(parent, lx, ly, lz) {
    const post = new THREE.Mesh(
      new THREE.CylinderGeometry(0.06, 0.08, 1.6, 5),
      this.materials.darkTimber
    );
    post.position.set(lx, ly - 0.8, lz);
    parent.add(post);

    const lantern = new THREE.Mesh(
      new THREE.OctahedronGeometry(0.26),
      this.materials.lanternGlow
    );
    lantern.position.set(lx, ly, lz);
    parent.add(lantern);
    this.lanternLights.push(lantern);
  }

  /* -------------------------------------------------------------
   * 11. Zone Identification
   * ------------------------------------------------------------- */
  getZoneName(pos, isQuad) {
    const x = pos.x;
    const z = pos.z;
    const y = pos.y;
    const mode = isQuad ? '4X4 QUAD' : 'ON FOOT';

    // Bridge zone
    if (x >= -78 && x <= 78 && Math.abs(z - -20) <= 5.5 && y > 4.5) {
      return `FJORD HIGH TRESTLE // CHANNEL CROSSING [${mode}]`;
    }

    // Summit Stave Lookout zone
    if (Math.hypot(x - 128, z - 38) < 32 && y > 30) {
      return `STAVE LOOKOUT // SUMMIT BEACON PEAK [${mode}]`;
    }

    // Alpine Switchback Trail
    if (x > 70 && x < 130 && y > 8.5) {
      return `ALPINE MOUNTAIN PASS // CLIFF TOUGE [${mode}]`;
    }

    // Northern Pine Sanctuary
    if (z > 100) {
      return `NORTHERN FJORD // PINE SANCTUARY [${mode}]`;
    }

    // Stilt Fishing Village
    if (x < -60 && z < 20) {
      return `STILT VILLAGE // RORBU HARBOR [${mode}]`;
    }

    return `NORDIC FJORD ARCHIPELAGO // SOUND CHANNEL [${mode}]`;
  }

  /* -------------------------------------------------------------
   * 12. Frame Update & Entity Animations
   * ------------------------------------------------------------- */
  update(time, dt) {
    this.time += dt;

    // A. Animate Fjord Water Vertex Undulations (gentle deep sea swell)
    if (this.waterPosAttribute && this.waterBaseY) {
      const count = this.waterPosAttribute.count;
      for (let i = 0; i < count; i++) {
        const x = this.waterPosAttribute.getX(i);
        const z = this.waterPosAttribute.getZ(i);

        // Fjord sound wave harmonics
        const wave1 = Math.sin(x * 0.045 + this.time * 1.6) * 0.38;
        const wave2 = Math.cos(z * 0.055 + this.time * 1.2) * 0.32;
        const wave3 = Math.sin((x + z) * 0.08 + this.time * 2.2) * 0.16;

        this.waterPosAttribute.setY(i, this.waterBaseY[i] + wave1 + wave2 + wave3);
      }
      this.waterPosAttribute.needsUpdate = true;
    }

    // B. Flickering Beach Bonfire Flames
    this.campfireFlames.forEach((flame, idx) => {
      const flicker = 0.85 + Math.sin(this.time * 14 + idx * 2.4) * 0.22;
      flame.scale.set(flicker, 1.0 + Math.cos(this.time * 12 + idx) * 0.25, flicker);
    });

    // C. Chimney Woodsmoke Pulsing
    this.chimneySmokes.forEach((smoke, idx) => {
      const pulse = 0.9 + Math.sin(this.time * 2.5 + idx * 1.8) * 0.18;
      smoke.scale.set(pulse, pulse * 1.2, pulse);
    });

    // D. Rotating Summit Signal Beacon
    if (this.beaconGroup) {
      this.beaconGroup.rotation.y += dt * 1.4;
    }
  }

  /* -------------------------------------------------------------
   * 13. Teardown / Cleanup
   * ------------------------------------------------------------- */
  destroy() {
    if (this.rootGroup) {
      this.rootGroup.traverse((child) => {
        if (child.isMesh) {
          if (child.geometry) child.geometry.dispose();
          if (child.material) {
            if (Array.isArray(child.material)) {
              child.material.forEach((m) => m.dispose());
            } else {
              child.material.dispose();
            }
          }
        }
      });
      this.scene.remove(this.rootGroup);
    }
  }
}
