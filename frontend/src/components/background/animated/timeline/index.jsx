import React from 'react';
import * as THREE from 'three';

export function   TimelineBackground() {
  const mountRef = React.useRef(null);

  React.useEffect(() => {
    // Scene setup
    const scene = new THREE.Scene();
    
    // Create gradient background
    const canvas = document.createElement('canvas');
    canvas.width = 2;
    canvas.height = 2;
    const context = canvas.getContext('2d');
    const gradient = context.createLinearGradient(0, 0, 0, 2);
    gradient.addColorStop(0, '#1a0033'); // Deep purple top
    gradient.addColorStop(0.5, '#0a0a2a'); // Dark blue middle
    gradient.addColorStop(1, '#000011'); // Dark navy bottom
    context.fillStyle = gradient;
    context.fillRect(0, 0, 2, 2);
    
    const backgroundTexture = new THREE.CanvasTexture(canvas);
    scene.background = backgroundTexture;

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Enhanced particle system with multiple layers
    const createParticleLayer = (count, size, colorRange, spread) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const colors = new Float32Array(count * 3);
      const sizes = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 1] = (Math.random() - 0.5) * spread;
        positions[i * 3 + 2] = (Math.random() - 0.5) * spread;

        // Create color variations based on college theme (purple/gold)
        const hue = Math.random() * colorRange + 0.7; // Purple to gold range
        const color = new THREE.Color().setHSL(hue, 0.8, 0.5 + Math.random() * 0.3);
        colors[i * 3] = color.r;
        colors[i * 3 + 1] = color.g;
        colors[i * 3 + 2] = color.b;

        sizes[i] = Math.random() * size + 0.5;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

      return geometry;
    };

    // Create multiple particle layers
    const layer1 = createParticleLayer(8000, 2, 0.3, 2000);
    const layer2 = createParticleLayer(5000, 1.5, 0.2, 1500);
    const layer3 = createParticleLayer(3000, 1, 0.1, 1000);

    // Create materials with glow effect
    const createGlowMaterial = (size, opacity) => {
      return new THREE.PointsMaterial({
        size: size,
        vertexColors: true,
        transparent: true,
        opacity: opacity,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });
    };

    const particles1 = new THREE.Points(layer1, createGlowMaterial(3, 0.8));
    const particles2 = new THREE.Points(layer2, createGlowMaterial(2, 0.6));
    const particles3 = new THREE.Points(layer3, createGlowMaterial(1.5, 0.4));

    scene.add(particles1, particles2, particles3);

    function animate() {
      requestAnimationFrame(animate);
      
      // Rotate particle layers at different speeds
      particles1.rotation.x += 0.001;
      particles1.rotation.y += 0.002;
      particles2.rotation.x -= 0.0015;
      particles2.rotation.y += 0.001;
      particles3.rotation.x += 0.002;
      particles3.rotation.y -= 0.0015;

      renderer.render(scene, camera);
    }

    animate();

    // Enhanced mouse interaction
    const handleMouseMove = (event) => {
      const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

      // Subtle camera movement
      camera.position.x += (mouseX * 5 - camera.position.x) * 0.05;
      camera.position.y += (mouseY * 5 - camera.position.y) * 0.05;
      camera.lookAt(scene.position);
    };

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Cleanup on unmount
    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      mountRef.current.removeChild(renderer.domElement);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return <div ref={mountRef} className="fixed top-0 left-0 w-full h-full z-[-1]" />;
}
