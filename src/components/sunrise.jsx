import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const SunriseScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x444444 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Lighting
    const sun = new THREE.DirectionalLight(0xffdd88, 1.2);
    sun.castShadow = true;
    scene.add(sun);

    const ambientLight = new THREE.AmbientLight(0x333333);
    scene.add(ambientLight);

    // Camera position
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    let sunAngle = -Math.PI / 2;

    const animate = () => {
      requestAnimationFrame(animate);

      // Move sun
      sunAngle += 0.001;
      const sunX = 50 * Math.cos(sunAngle);
      const sunY = 50 * Math.sin(sunAngle);
      sun.position.set(sunX, sunY, 0);

      // Gradient background color
      const progress = (sunY + 50) / 100;
      const topColor = new THREE.Color(0x000000).lerp(new THREE.Color(0xffcc88), progress);
      renderer.setClearColor(topColor);

      renderer.render(scene, camera);
    };

    animate();

    // Resize handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default SunriseScene;
