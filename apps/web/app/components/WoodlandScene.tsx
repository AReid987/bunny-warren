"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const WoodlandScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // ---- basic setup ----
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(0x88bbff, 10, 60);
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      100
    );
    camera.position.set(4, 3, 5);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.9;
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 0.8, 0);
    controls.maxPolarAngle = Math.PI / 2 - 0.05;
    controls.minDistance = 2;
    controls.maxDistance = 12;

    // ---- lighting ----
    const sun = new THREE.DirectionalLight(0xfff5e1, 1.2);
    sun.position.set(8, 12, 6);
    sun.castShadow = true;
    sun.shadow.mapSize.set(1024, 1024);
    sun.shadow.camera.left = -10;
    sun.shadow.camera.right = 10;
    sun.shadow.camera.top = 10;
    sun.shadow.camera.bottom = -10;
    scene.add(sun, new THREE.AmbientLight(0x88aaff, 0.6));

    // ---- ground ----
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(40, 40),
      new THREE.MeshStandardMaterial({ color: 0x2f9e4a, roughness: 0.9 })
    );
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // ---- table & stools ----
    const wood = new THREE.MeshStandardMaterial({
      color: 0x6e4a2e,
      roughness: 0.8,
    });
    const table = new THREE.Mesh(
      new THREE.CylinderGeometry(1.2, 1.3, 0.15, 16),
      wood
    );
    table.position.y = 0.6;
    table.castShadow = table.receiveShadow = true;
    scene.add(table);

    [
      [-1, -1],
      [1, -1],
      [1, 1],
      [-1, 1],
    ].forEach(([x, z]) => {
      const stool = new THREE.Mesh(
        new THREE.CylinderGeometry(0.3, 0.3, 0.4, 16),
        wood
      );
      stool.position.set(x, 0.6, z);
      stool.castShadow = stool.receiveShadow = true;
      scene.add(stool);
    });

    // ---- card placeholders ----
    const cardGeo = new THREE.BoxGeometry(0.08, 0.001, 0.12);
    const cardMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    for (let i = 0; i < 8; i++) {
      const c = new THREE.Mesh(cardGeo, cardMat);
      c.position.set(
        (Math.random() - 0.5) * 0.6,
        0.68,
        (Math.random() - 0.5) * 0.4
      );
      c.rotation.y = Math.random() * Math.PI;
      c.castShadow = true;
      scene.add(c);
    }

    // ---- simple characters ----
    function rabbit(color = 0xffffff) {
      const g = new THREE.Group();
      const b = new THREE.Mesh(
        new THREE.SphereGeometry(0.2, 12, 12),
        new THREE.MeshStandardMaterial({ color })
      );
      b.position.y = 0.2;
      b.castShadow = true;
      g.add(b);
      const h = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 12, 12),
        new THREE.MeshStandardMaterial({ color })
      );
      h.position.y = 0.35;
      h.castShadow = true;
      g.add(h);
      const e = new THREE.Mesh(
        new THREE.CylinderGeometry(0.03, 0.03, 0.22, 8),
        new THREE.MeshStandardMaterial({ color })
      );
      e.position.set(0.05, 0.55, 0.05);
      e.rotation.x = -0.3;
      e.castShadow = true;
      g.add(e.clone(), e.clone().translateX(-0.1));
      return g;
    }
    function makeFox() {
      const g = new THREE.Group();
      const b = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 0.4, 12),
        new THREE.MeshStandardMaterial({ color: 0xd2691e })
      );
      b.rotation.z = Math.PI / 2;
      b.position.y = 0.2;
      b.castShadow = true;
      g.add(b);
      const h = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xd2691e })
      );
      h.position.set(0.3, 0.25, 0);
      h.castShadow = true;
      g.add(h);
      const sn = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.2, 8),
        new THREE.MeshStandardMaterial({ color: 0xf4a460 })
      );
      sn.position.set(0.45, 0.25, 0);
      sn.rotation.z = -Math.PI / 2;
      sn.castShadow = true;
      g.add(sn);
      return g;
    }
    function makeGirl() {
      const g = new THREE.Group();
      const b = new THREE.Mesh(
        new THREE.CylinderGeometry(0.15, 0.15, 0.7, 12),
        new THREE.MeshStandardMaterial({ color: 0x8fbc8f })
      );
      b.position.y = 0.35;
      b.castShadow = true;
      g.add(b);
      const h = new THREE.Mesh(
        new THREE.SphereGeometry(0.15, 12, 12),
        new THREE.MeshStandardMaterial({ color: 0xffdbac })
      );
      h.position.y = 0.9;
      h.castShadow = true;
      g.add(h);
      return g;
    }

    scene.add(
      rabbit(),
      rabbit(0xaaaaaa).translateX(0.5),
      makeFox().translateX(1),
      makeGirl().translateX(1.5)
    );

    // ---- mushrooms & flowers (low-poly) ----
    const mushMat = new THREE.MeshStandardMaterial({ color: 0xd22d2d });
    for (let i = 0; i < 15; i++) {
      const cap = new THREE.Mesh(
        new THREE.SphereGeometry(0.1, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2),
        mushMat
      );
      cap.position.set(
        (Math.random() - 0.5) * 18,
        0,
        (Math.random() - 0.5) * 18
      );
      cap.castShadow = true;
      scene.add(cap);
    }
    const flowerMat = new THREE.MeshStandardMaterial({ color: 0xff69b4 });
    for (let i = 0; i < 30; i++) {
      const f = new THREE.Mesh(new THREE.SphereGeometry(0.05, 6, 6), flowerMat);
      f.position.set(
        (Math.random() - 0.5) * 18,
        0.1,
        (Math.random() - 0.5) * 18
      );
      f.castShadow = true;
      scene.add(f);
    }

    // ---- resize & animate ----
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);
    renderer.setAnimationLoop(() => {
      controls.update();
      renderer.render(scene, camera);
    });

    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div ref={mountRef}>
      <div
        style={{
          position: "absolute",
          top: "8px",
          left: "8px",
          color: "#fff",
          fontFamily: "sans-serif",
          fontSize: "12px",
          background: "#0008",
          padding: "4px 6px",
          borderRadius: "4px",
          pointerEvents: "none",
        }}
      >
        🐇🦊🧚‍♀️ drag to orbit, scroll to zoom
      </div>
    </div>
  );
};

export default WoodlandScene;