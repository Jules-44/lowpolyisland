import * as THREE from 'three';

/**
 * Player — Authentic Late 90s / PS1 Faceted Low-Poly Adventurer.
 * Features:
 * - Faceted tapered polygonal anatomy (no Roblox toy boxes)
 * - Tapered athletic windbreaker with collar & retro block patterns
 * - Faceted snapback cap & neck headphones
 * - Segmented tapered polygonal limbs with elbow and knee contours
 * - Low-res pixel-art canvas textures with NearestFilter
 * - Procedural running and jumping animation
 */
export class Player {
  constructor(scene) {
    this.scene = scene;

    this.position = new THREE.Vector3(0, 2.38, -10);
    this.velocity = new THREE.Vector3();
    this.rotation = Math.PI; // Face down pier

    this.walkSpeed = 7.0;
    this.runSpeed = 13.5;
    this.zoomSpeed = 24.0;
    this.moveState = 'WALK'; // 'WALK' | 'RUN' | 'ZOOM' | 'IDLE'
    this.isDrivingQuad = false;

    this.jumpForce = 9.5;
    this.gravity = 25.0;
    this.isGrounded = true;

    this.animTime = 0;
    this.isMoving = false;

    // Low-poly dust particle pool for Zoom speed
    this.dustParticles = [];
    const dustGeo = new THREE.DodecahedronGeometry(0.12, 0);
    for (let i = 0; i < 8; i++) {
      const p = new THREE.Mesh(dustGeo, new THREE.MeshBasicMaterial({ color: 0xc4b294, transparent: true, opacity: 0.6 }));
      p.visible = false;
      this.scene.add(p);
      this.dustParticles.push({ mesh: p, life: 0, maxLife: 0.35 });
    }
    this.dustTimer = 0;

    this.mesh = new THREE.Group();
    this._buildFacetedPS1Model();
    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.rotation;
    this.scene.add(this.mesh);

    this.radius = 0.5;
    this.height = 1.8;
  }

  _createPixelTexture(type) {
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const ctx = canvas.getContext('2d');

    if (type === 'jacket') {
      // 90s Cyber-Coral Windbreaker with teal accent stripes and zip
      ctx.fillStyle = '#eb3467';
      ctx.fillRect(0, 0, 64, 64);

      // Geometric diagonal teal/cyan stripe
      ctx.fillStyle = '#2de2e6';
      ctx.beginPath();
      ctx.moveTo(0, 16);
      ctx.lineTo(64, 40);
      ctx.lineTo(64, 48);
      ctx.lineTo(0, 24);
      ctx.fill();

      // Deep navy bottom hem
      ctx.fillStyle = '#16192b';
      ctx.fillRect(0, 54, 64, 10);

      // Center silver zipper
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(30, 0, 4, 54);
      ctx.fillStyle = '#888888';
      ctx.fillRect(31, 0, 2, 54);
    } else if (type === 'pants') {
      // Navy baggy cargo pants with seam shading and pocket lines
      ctx.fillStyle = '#1b2238';
      ctx.fillRect(0, 0, 64, 64);

      // Subtle pixel dither / seams
      ctx.fillStyle = '#121726';
      ctx.fillRect(0, 0, 4, 64);
      ctx.fillRect(60, 0, 4, 64);
      ctx.fillRect(16, 24, 32, 16); // cargo pocket
      ctx.fillStyle = '#263152';
      ctx.fillRect(18, 26, 28, 12);
    } else if (type === 'sneaker') {
      // Chunky white 90s runner sneaker with neon pink heel accent
      ctx.fillStyle = '#e8ecf2';
      ctx.fillRect(0, 0, 64, 64);
      // Dark rubber sole
      ctx.fillStyle = '#222633';
      ctx.fillRect(0, 50, 64, 14);
      // Neon accent swoosh/block
      ctx.fillStyle = '#ff2a7a';
      ctx.fillRect(8, 24, 48, 8);
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.magFilter = THREE.NearestFilter; // Authentic sharp pixel filter
    tex.minFilter = THREE.NearestFilter;
    return tex;
  }

  _buildFacetedPS1Model() {
    const skinMat = new THREE.MeshLambertMaterial({ color: 0xe0ad82, flatShading: true });
    const jacketTex = this._createPixelTexture('jacket');
    const jacketMat = new THREE.MeshLambertMaterial({ map: jacketTex, flatShading: true });
    const pantsTex = this._createPixelTexture('pants');
    const pantsMat = new THREE.MeshLambertMaterial({ map: pantsTex, flatShading: true });
    const shoeTex = this._createPixelTexture('sneaker');
    const shoeMat = new THREE.MeshLambertMaterial({ map: shoeTex, flatShading: true });
    const darkMat = new THREE.MeshLambertMaterial({ color: 0x161a29, flatShading: true });
    const cyanVisorMat = new THREE.MeshBasicMaterial({ color: 0x2de2e6 });

    // 1. Tapered Polygonal Torso (athletic inverted frustum)
    const torsoGeo = new THREE.CylinderGeometry(0.32, 0.22, 0.72, 6);
    this.torso = new THREE.Mesh(torsoGeo, jacketMat);
    this.torso.position.y = 1.15;
    this.torso.castShadow = true;
    this.mesh.add(this.torso);

    // Collar detail
    const collarGeo = new THREE.CylinderGeometry(0.18, 0.24, 0.14, 6);
    const collar = new THREE.Mesh(collarGeo, darkMat);
    collar.position.y = 0.4;
    this.torso.add(collar);

    // 2. Head & Neck
    const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 0.18, 5), skinMat);
    neck.position.y = 1.55;
    this.mesh.add(neck);

    // 8-sided faceted head
    const headGeo = new THREE.CylinderGeometry(0.2, 0.18, 0.32, 7);
    this.head = new THREE.Mesh(headGeo, skinMat);
    this.head.position.y = 1.74;
    this.head.castShadow = true;
    this.mesh.add(this.head);

    // Backward snapback cap
    const capGeo = new THREE.CylinderGeometry(0.22, 0.22, 0.14, 7);
    const cap = new THREE.Mesh(capGeo, darkMat);
    cap.position.y = 0.12;
    this.head.add(cap);

    // Cap brim angled backwards
    const brimGeo = new THREE.BoxGeometry(0.26, 0.04, 0.18);
    const brim = new THREE.Mesh(brimGeo, darkMat);
    brim.position.set(0, 0.08, -0.18);
    brim.rotation.x = 0.2;
    this.head.add(brim);

    // Glowing cyan retro visor glasses
    const visorGeo = new THREE.BoxGeometry(0.28, 0.08, 0.06);
    const visor = new THREE.Mesh(visorGeo, cyanVisorMat);
    visor.position.set(0, 0.04, 0.17);
    this.head.add(visor);

    // DJ Headphones resting around neck
    const phoneGeo = new THREE.TorusGeometry(0.22, 0.04, 5, 10, Math.PI);
    const headphones = new THREE.Mesh(phoneGeo, darkMat);
    headphones.rotation.x = Math.PI / 2;
    headphones.position.set(0, 1.54, 0);
    this.mesh.add(headphones);

    // 3. Faceted Segmented Limbs
    // Left Arm
    this.leftArmPivot = new THREE.Group();
    this.leftArmPivot.position.set(-0.36, 1.42, 0);

    const upperArm = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.35, 5), jacketMat);
    upperArm.position.y = -0.17;
    upperArm.castShadow = true;
    this.leftArmPivot.add(upperArm);

    const forearm = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.35, 5), skinMat);
    forearm.position.y = -0.48;
    forearm.castShadow = true;
    this.leftArmPivot.add(forearm);
    this.mesh.add(this.leftArmPivot);

    // Right Arm
    this.rightArmPivot = new THREE.Group();
    this.rightArmPivot.position.set(0.36, 1.42, 0);

    const rightUpper = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.35, 5), jacketMat);
    rightUpper.position.y = -0.17;
    rightUpper.castShadow = true;
    this.rightArmPivot.add(rightUpper);

    const rightFore = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.07, 0.35, 5), skinMat);
    rightFore.position.y = -0.48;
    rightFore.castShadow = true;
    this.rightArmPivot.add(rightFore);
    this.mesh.add(this.rightArmPivot);

    // 4. Faceted Segmented Legs
    // Left Leg
    this.leftLegPivot = new THREE.Group();
    this.leftLegPivot.position.set(-0.16, 0.82, 0);

    const leftThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.42, 6), pantsMat);
    leftThigh.position.y = -0.21;
    leftThigh.castShadow = true;
    this.leftLegPivot.add(leftThigh);

    const leftCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.42, 6), pantsMat);
    leftCalf.position.y = -0.58;
    leftCalf.castShadow = true;
    this.leftLegPivot.add(leftCalf);

    // Wedge low-poly runner shoe
    const leftShoeGeo = new THREE.BoxGeometry(0.18, 0.14, 0.36);
    const leftShoe = new THREE.Mesh(leftShoeGeo, shoeMat);
    leftShoe.position.set(0, -0.76, 0.06);
    leftShoe.castShadow = true;
    this.leftLegPivot.add(leftShoe);
    this.mesh.add(this.leftLegPivot);

    // Right Leg
    this.rightLegPivot = new THREE.Group();
    this.rightLegPivot.position.set(0.16, 0.82, 0);

    const rightThigh = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.11, 0.42, 6), pantsMat);
    rightThigh.position.y = -0.21;
    rightThigh.castShadow = true;
    this.rightLegPivot.add(rightThigh);

    const rightCalf = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.09, 0.42, 6), pantsMat);
    rightCalf.position.y = -0.58;
    rightCalf.castShadow = true;
    this.rightLegPivot.add(rightCalf);

    const rightShoe = new THREE.Mesh(leftShoeGeo, shoeMat);
    rightShoe.position.set(0, -0.76, 0.06);
    rightShoe.castShadow = true;
    this.rightLegPivot.add(rightShoe);
    this.mesh.add(this.rightLegPivot);

    // Low-poly round ground shadow (added directly to scene so it stays on terrain when jumping)
    const shadowGeo = new THREE.CircleGeometry(0.52, 14);
    this.shadowMat = new THREE.MeshBasicMaterial({
      color: 0x050711,
      transparent: true,
      opacity: 0.48,
      depthWrite: false,
      polygonOffset: true,
      polygonOffsetFactor: -1.0,
      polygonOffsetUnits: -4.0
    });
    this.shadowMesh = new THREE.Mesh(shadowGeo, this.shadowMat);
    this.shadowMesh.rotation.x = -Math.PI / 2;
    this.shadowMesh.position.y = 0.035;
    this.scene.add(this.shadowMesh);
  }

  update(dt, input, cameraYaw, world) {
    if (this.isDrivingQuad) {
      // While driving Quad Bike, transforms & seated posture are driven by QuadBike
      this.mesh.position.copy(this.position);
      this.mesh.rotation.y = this.rotation;
      if (this.shadowMesh) {
        this.shadowMesh.visible = false;
      }
      return;
    }

    const moveDir = new THREE.Vector3();

    if (input.isForward()) moveDir.z -= 1;
    if (input.isBackward()) moveDir.z += 1;
    if (input.isLeft()) moveDir.x -= 1;
    if (input.isRight()) moveDir.x += 1;

    this.isMoving = moveDir.lengthSq() > 0.001;

    if (this.isMoving) {
      moveDir.normalize();
      moveDir.applyAxisAngle(new THREE.Vector3(0, 1, 0), cameraYaw);

      const targetRotation = Math.atan2(moveDir.x, moveDir.z);
      let diff = targetRotation - this.rotation;
      while (diff < -Math.PI) diff += Math.PI * 2;
      while (diff > Math.PI) diff -= Math.PI * 2;
      this.rotation += diff * Math.min(1.0, dt * 14);

      // Determine movement speed and state
      let speed = this.walkSpeed;
      if (input.isZoom()) {
        speed = this.zoomSpeed;
        this.moveState = 'ZOOM';
      } else if (input.isSprint()) {
        speed = this.runSpeed;
        this.moveState = 'RUN';
      } else {
        speed = this.walkSpeed;
        this.moveState = 'WALK';
      }

      this.velocity.x = moveDir.x * speed;
      this.velocity.z = moveDir.z * speed;
    } else {
      this.velocity.x *= Math.max(0, 1 - dt * 12);
      this.velocity.z *= Math.max(0, 1 - dt * 12);
      this.moveState = 'IDLE';
    }

    // 1. Horizontal movement delta
    this.position.x += this.velocity.x * dt;
    this.position.z += this.velocity.z * dt;

    // 2. Resolve horizontal collisions against solid obstacle walls & boulders
    if (world && world.resolveCollisions) {
      world.resolveCollisions(this.position, this.radius, this.position.y);
    }

    // 3. Jump trigger
    if (this.isGrounded && input.isJump()) {
      this.velocity.y = this.jumpForce;
      this.isGrounded = false;
    }

    // 4. Gravity acceleration when airborne
    if (!this.isGrounded) {
      this.velocity.y -= this.gravity * dt;
    }

    // 5. Vertical movement
    this.position.y += this.velocity.y * dt;

    // 6. Surface collision query (terrain + tops of solid objects)
    const groundHeight = world ? world.getGroundHeight(this.position.x, this.position.z, this.position.y) : 0;
    const wasGrounded = this.isGrounded;
    if (this.position.y <= groundHeight) {
      this.position.y = groundHeight;
      this.velocity.y = 0;
      this.isGrounded = true;
    } else if (wasGrounded && (this.position.y - groundHeight) < 0.4 && this.velocity.y <= 0) {
      // Smoothly stick to downward slopes without jittering into airborne state
      this.position.y = groundHeight;
      this.velocity.y = 0;
      this.isGrounded = true;
    } else {
      // Airborne (falling off edge or jumping)
      this.isGrounded = false;
    }

    this.mesh.position.copy(this.position);
    this.mesh.rotation.y = this.rotation;

    // Update ground shadow (stays on terrain surface even during high jumps)
    if (this.shadowMesh) {
      const heightAboveGround = Math.max(0, this.position.y - groundHeight);
      this.shadowMesh.position.set(this.position.x, groundHeight + 0.035, this.position.z);
      const scale = Math.max(0.35, 1.0 - heightAboveGround * 0.12);
      this.shadowMesh.scale.set(scale, scale, scale);
      if (this.shadowMat) {
        this.shadowMat.opacity = Math.max(0.12, 0.45 - heightAboveGround * 0.07);
      }
    }

    // Running / Walking animation
    if (this.isMoving && this.isGrounded) {
      const animSpeed = this.moveState === 'ZOOM' ? 25 : (this.moveState === 'RUN' ? 17 : 11);
      this.animTime += dt * animSpeed;

      const legAngle = Math.sin(this.animTime) * (this.moveState === 'ZOOM' ? 0.95 : 0.8);
      const armAngle = -Math.sin(this.animTime) * (this.moveState === 'ZOOM' ? 0.85 : 0.7);

      this.leftLegPivot.rotation.x = legAngle;
      this.rightLegPivot.rotation.x = -legAngle;
      this.leftArmPivot.rotation.x = armAngle;
      this.rightArmPivot.rotation.x = -armAngle;

      this.torso.position.y = 1.15 + Math.abs(Math.sin(this.animTime * 2)) * 0.06;
      this.head.position.y = 1.74 + Math.abs(Math.sin(this.animTime * 2)) * 0.06;
    } else {
      this.leftLegPivot.rotation.x *= 0.8;
      this.rightLegPivot.rotation.x *= 0.8;
      this.leftArmPivot.rotation.x *= 0.8;
      this.rightArmPivot.rotation.x *= 0.8;
      this.torso.position.y = 1.15;
      this.head.position.y = 1.74;
    }

    // Emit dust puffs when in ZOOM mode on ground
    if (this.moveState === 'ZOOM' && this.isMoving && this.isGrounded) {
      this.dustTimer += dt;
      if (this.dustTimer > 0.07) {
        this.dustTimer = 0;
        const p = this.dustParticles.find(dp => dp.life <= 0);
        if (p) {
          p.mesh.position.set(
            this.position.x + (Math.random() - 0.5) * 0.4,
            groundHeight + 0.08,
            this.position.z + (Math.random() - 0.5) * 0.4
          );
          p.life = p.maxLife;
          p.mesh.visible = true;
          p.mesh.scale.set(1, 1, 1);
          p.mesh.material.opacity = 0.55;
        }
      }
    }

    // Update existing dust particles
    this.dustParticles.forEach(dp => {
      if (dp.life > 0) {
        dp.life -= dt;
        const progress = 1 - (dp.life / dp.maxLife);
        dp.mesh.position.y += dt * 0.4;
        const s = 1.0 + progress * 1.5;
        dp.mesh.scale.set(s, s, s);
        dp.mesh.material.opacity = Math.max(0, 0.55 * (1 - progress));
        if (dp.life <= 0) dp.mesh.visible = false;
      }
    });
  }

  setVisible(visible) {
    this.mesh.visible = visible;
    if (this.shadowMesh) this.shadowMesh.visible = visible;
  }

  getEyePosition() {
    return new THREE.Vector3(
      this.position.x,
      this.position.y + 1.65,
      this.position.z
    );
  }
}
