import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

export type CognitiveMode = 'Vision' | 'Lifestyle' | 'Mind';

interface IridescentBust3DProps {
  mode: CognitiveMode;
  neuralPulse: number;
  shaderIntensity: number;
  compactLayout: boolean;
}

const VERTEX_SHADER = `
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  varying vec3 vLocalPos;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uPulse;

  // Simplex-like 3D wave displacement for subtle living cortical breath
  float waveField(vec3 p, float t) {
    return sin(p.x * 5.2 + t * 1.4) * cos(p.y * 4.8 - t * 1.1) * sin(p.z * 5.0 + t * 0.9);
  }

  void main() {
    vUv = uv;
    vLocalPos = position;

    float microRipple = waveField(position, uTime) * (0.008 + uPulse * 0.018);
    vec3 displaced = position + normal * microRipple;

    vec4 worldPos = modelMatrix * vec4(displaced, 1.0);
    vWorldPosition = worldPos.xyz;

    vec4 mvPosition = viewMatrix * worldPos;
    vViewPosition = -mvPosition.xyz;
    vNormal = normalize(normalMatrix * normal);

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const FRAGMENT_SHADER = `
  varying vec3 vNormal;
  varying vec3 vWorldPosition;
  varying vec3 vViewPosition;
  varying vec3 vLocalPos;
  varying vec2 vUv;

  uniform float uTime;
  uniform float uMode;
  uniform float uPulse;
  uniform float uIntensity;
  uniform vec2 uPointer;

  // Smooth 3D procedural organic turbulence for neural plasma veins
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  float noise3D(vec3 x) {
    vec3 i = floor(x);
    vec3 f = fract(x);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(
        mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
        mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x),
        f.y
      ),
      mix(
        mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
        mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x),
        f.y
      ),
      f.z
    );
  }

  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.52;
    for (int i = 0; i < 4; i++) {
      v += a * noise3D(p);
      p = p * 2.08 + vec3(0.4, -0.3, 0.5);
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 N = normalize(vNormal);
    vec3 V = normalize(vViewPosition);
    vec3 P = vLocalPos;

    // Fresnel rim dispersion
    float NoV = clamp(dot(N, V), 0.0, 1.0);
    float fresnel = pow(1.0 - NoV, 2.35);

    // Organic neural flow coordinates
    vec3 flowCoord = P * 2.15 + vec3(
      sin(uTime * 0.35 + uPointer.x * 0.8) * 0.45,
      cos(uTime * 0.28 + uPointer.y * 0.8) * 0.45,
      uTime * 0.22
    );
    float n1 = fbm(flowCoord);
    float n2 = fbm(flowCoord * 1.85 + vec3(n1 * 1.7));

    // Fine cortical vein ridges (bright white-cyan synaptic filaments)
    float veinPattern = pow(1.0 - abs(sin((P.y * 5.5 + n2 * 4.8 - uTime * 0.45) * 3.14159)), 7.0);

    // Base spectral palette matching Viktor Oddy's MindAI reference bust:
    // Deep electric cyan (#00E8FF), vivid royal blue (#284CFF), luminous magenta-violet (#E11DFF / #8C28FF),
    // and fiery solar orange/gold (#FF5500 / #FFE600) in thermal cortical hotspots.
    vec3 colCyan = vec3(0.0, 0.93, 1.0);
    vec3 colBlue = vec3(0.18, 0.34, 0.98);
    vec3 colViolet = vec3(0.58, 0.18, 0.96);
    vec3 colMagenta = vec3(1.0, 0.14, 0.68);
    vec3 colOrange = vec3(1.0, 0.32, 0.02);
    vec3 colYellow = vec3(1.0, 0.94, 0.28);

    // Shift palette subtly based on active mode (Vision=0, Lifestyle=1, Mind=2)
    if (uMode > 0.5 && uMode < 1.5) {
      colCyan = vec3(0.05, 0.98, 0.82);
      colMagenta = vec3(1.0, 0.28, 0.55);
    } else if (uMode >= 1.5) {
      colViolet = vec3(0.45, 0.12, 1.0);
      colOrange = vec3(1.0, 0.48, 0.05);
    }

    // Spatial anatomical thermal zones (matching the exact hotspots on forehead, temple, eye, cheek, and left clavicle)
    float hotspotForehead = exp(-length(P - vec3(-0.22, 0.98, 0.55)) * 2.6);
    float hotspotTemple = exp(-length(P - vec3(0.32, 0.72, 0.45)) * 2.3);
    float hotspotEyeBridge = exp(-length(P - vec3(0.05, 0.42, 0.78)) * 3.1);
    float hotspotClavicle = exp(-length(P - vec3(0.65, -1.65, 0.35)) * 2.2);
    float hotspotShoulderRight = exp(-length(P - vec3(-0.82, -1.78, 0.22)) * 2.5);

    float thermalHeat = clamp(
      (hotspotForehead * 1.15 + hotspotTemple * 0.95 + hotspotEyeBridge * 0.9 + hotspotClavicle * 1.2 + hotspotShoulderRight * 0.75)
      + (n2 - 0.48) * 0.75 + uPulse * 0.35,
      0.0,
      1.0
    );

    // Base cool-to-warm iridescent blend
    vec3 baseSpectrum = mix(colCyan, colBlue, smoothstep(0.15, 0.55, n1));
    baseSpectrum = mix(baseSpectrum, colViolet, smoothstep(0.32, 0.75, n2 + fresnel * 0.35));
    baseSpectrum = mix(baseSpectrum, colMagenta, smoothstep(0.45, 0.82, thermalHeat + n1 * 0.25));
    baseSpectrum = mix(baseSpectrum, colOrange, smoothstep(0.62, 0.88, thermalHeat));
    baseSpectrum = mix(baseSpectrum, colYellow, smoothstep(0.78, 0.98, thermalHeat));

    // Cyan-blue neck & jaw cool subsurface channel
    float neckCoolMask = smoothstep(0.35, -0.95, P.y) * (1.0 - hotspotClavicle * 0.85);
    baseSpectrum = mix(baseSpectrum, mix(colCyan, colViolet, n2 * 0.65), neckCoolMask * 0.55);

    // High-gloss studio key light & rim specular reflections (creating the sculpted porcelain/liquid-glass look)
    vec3 L1 = normalize(vec3(-0.55, 0.65, 0.85));
    vec3 L2 = normalize(vec3(0.75, 0.35, 0.55));
    vec3 H1 = normalize(L1 + V);
    vec3 H2 = normalize(L2 + V);

    float spec1 = pow(max(dot(N, H1), 0.0), 42.0);
    float spec2 = pow(max(dot(N, H2), 0.0), 24.0);
    float diffuse = max(dot(N, L1), 0.0) * 0.45 + 0.62;

    vec3 color = baseSpectrum * diffuse * uIntensity;

    // Add luminous cortical veins and Fresnel iridescent glaze
    color += mix(colCyan, vec3(1.0, 0.96, 1.0), 0.65) * veinPattern * (0.45 + uPulse * 0.4);
    color += mix(colCyan, colMagenta, sin(P.y * 3.0 + uTime) * 0.5 + 0.5) * fresnel * 0.68;
    color += vec3(1.0, 0.98, 1.0) * (spec1 * 0.88 + spec2 * 0.42);

    gl_FragColor = vec4(clamp(color, 0.0, 1.0), 1.0);
  }
`;

/**
 * Builds a high-resolution, continuous anatomical 3D sculpted human head, neck, and shoulders bust.
 * Uses cylindrical harmonic & Gaussian anatomical feature sculpting so the nose bridge, brow ridge,
 * eye sockets, eyeballs, cheekbones, lips, chin, jawline, ears, sternocleidomastoid neck tendons,
 * and clavicles form a smooth classical-futuristic bust matching the MindAI visual reference.
 */
function createSculptedHumanBustGeometry(): THREE.BufferGeometry {
  const radialSegments = 180;
  const heightSegments = 180;
  const geo = new THREE.CylinderGeometry(1, 1, 3.9, radialSegments, heightSegments, false);
  const pos = geo.attributes.position as THREE.BufferAttribute;

  const gaussian2D = (dx: number, dy: number, sx: number, sy: number) =>
    Math.exp(-(dx * dx) / (2 * sx * sx) - (dy * dy) / (2 * sy * sy));

  for (let i = 0; i < pos.count; i++) {
    const vx = pos.getX(i);
    const vy = pos.getY(i); // ranges from -1.95 (bottom chest) to +1.95 (top of cranium)
    const vz = pos.getZ(i);

    // Angle theta around Y axis: theta = 0 is directly front (+Z), +/- PI is back (-Z)
    const theta = Math.atan2(vx, vz);
    const absTheta = Math.abs(theta);

    // Normalized height u in [0, 1] from bottom of bust to crown of head
    const u = (vy + 1.95) / 3.9;

    let rx = 0.5;
    let rz = 0.5;
    let yShift = 0;
    let zCenterOffset = 0;

    if (u < 0.25) {
      // Lower Bust: Shoulders, Pectoral/Upper Chest & Clavicles (u: 0 -> 0.25)
      const t = u / 0.25; // 0 at bottom, 1 at base of neck
      const shoulderFlare = Math.pow(1 - t, 0.68);
      rx = 0.37 + shoulderFlare * 1.28;
      rz = 0.35 + shoulderFlare * 0.42;
      // Natural trapezius/shoulder slope down toward the deltoids
      yShift = -Math.abs(Math.sin(theta)) * shoulderFlare * 0.34;
    } else if (u < 0.43) {
      // Neck Column (u: 0.25 -> 0.43)
      const t = (u - 0.25) / 0.18;
      const neckCurve = 1 - Math.sin(t * Math.PI) * 0.08;
      rx = 0.37 * neckCurve;
      rz = 0.39 * neckCurve;
      // Forward anatomical inclination of the neck
      zCenterOffset = (t - 0.2) * 0.11;
    } else {
      // Head & Cranium (u: 0.43 -> 1.0)
      const h = (u - 0.43) / 0.57; // 0 at chin/jaw base, 1 at top of cranium
      const dome = Math.sin(Math.pow(h, 0.78) * Math.PI);
      rx = 0.66 * dome + 0.015;
      rz = 0.78 * dome + 0.015;

      // Cranial back occiput fullness vs facial front profile
      if (absTheta > 1.35) {
        const backWeight = Math.sin(Math.min(1, h * 1.15) * Math.PI);
        rz += backWeight * 0.14;
      }

      // Jawline & Chin taper at lower face (h: 0 -> 0.32)
      const jawZone = Math.max(0, 1 - h / 0.34);
      const frontFactor = Math.max(0, Math.cos(theta * 0.85));
      rz += jawZone * Math.pow(frontFactor, 1.8) * 0.16;
      rx -= jawZone * 0.12;
      zCenterOffset = 0.09;
    }

    // Base radial point on the anatomical envelope
    const dirX = Math.sin(theta);
    const dirZ = Math.cos(theta);
    let px = dirX * rx;
    let py = vy + yShift;
    let pz = dirZ * rz + zCenterOffset;

    // Sculpted Facial, Cranial, Ear, and Neck Muscle Features using smooth Gaussian fields
    // 1. Nose Bridge, Dorsum & Tip (centered at theta = 0, py in [0.18, 0.68])
    const noseBridge = gaussian2D(theta, py - 0.46, 0.15, 0.22) * 0.155;
    const noseTip = gaussian2D(theta, py - 0.26, 0.12, 0.085) * 0.195;
    const nostrils =
      (gaussian2D(theta - 0.12, py - 0.22, 0.065, 0.055) +
        gaussian2D(theta + 0.12, py - 0.22, 0.065, 0.055)) *
      0.065;
    const philtrumIndent = -gaussian2D(theta, py - 0.12, 0.07, 0.04) * 0.025;

    // 2. Supraorbital Brow Ridge & Glabella
    const browRidge =
      (gaussian2D(theta - 0.32, py - 0.67, 0.24, 0.065) +
        gaussian2D(theta + 0.32, py - 0.67, 0.24, 0.065) +
        gaussian2D(theta, py - 0.66, 0.14, 0.055) * 0.7) *
      0.075;

    // 3. Eye Sockets (Orbital Cavities) + Sculpted Eyeballs & Eyelids
    const leftSocket = -gaussian2D(theta - 0.34, py - 0.53, 0.19, 0.095) * 0.095;
    const rightSocket = -gaussian2D(theta + 0.34, py - 0.53, 0.19, 0.095) * 0.095;
    const leftEye = gaussian2D(theta - 0.33, py - 0.53, 0.105, 0.048) * 0.072;
    const rightEye = gaussian2D(theta + 0.33, py - 0.53, 0.105, 0.048) * 0.072;
    const eyeCrease =
      -(
        gaussian2D(theta - 0.33, py - 0.53, 0.11, 0.012) +
        gaussian2D(theta + 0.33, py - 0.53, 0.11, 0.012)
      ) * 0.018;

    // 4. Zygomatic Arches (Cheekbones) & Buccal Hollows
    const cheekbones =
      (gaussian2D(theta - 0.58, py - 0.31, 0.26, 0.14) +
        gaussian2D(theta + 0.58, py - 0.31, 0.26, 0.14)) *
      0.088;
    const buccalHollows =
      -(
        gaussian2D(theta - 0.52, py - 0.02, 0.22, 0.13) +
        gaussian2D(theta + 0.52, py - 0.02, 0.22, 0.13)
      ) * 0.045;

    // 5. Upper & Lower Lips + Mouth Line + Chin Prominence (Mental Protuberance)
    const upperLip = gaussian2D(theta, py - 0.04, 0.21, 0.038) * 0.082;
    const mouthPart = -gaussian2D(theta, py - 0.005, 0.23, 0.012) * 0.038;
    const lowerLip = gaussian2D(theta, py + 0.045, 0.19, 0.042) * 0.086;
    const mentolabialFold = -gaussian2D(theta, py + 0.11, 0.2, 0.035) * 0.035;
    const chinProminence = gaussian2D(theta, py + 0.21, 0.22, 0.085) * 0.11;
    const jawAngles =
      (gaussian2D(theta - 0.88, py + 0.08, 0.22, 0.12) +
        gaussian2D(theta + 0.88, py + 0.08, 0.22, 0.12)) *
      0.055;

    // 6. Sculpted Ears (Helix & Lobule on lateral sides theta ≈ +/- 1.52)
    const earLeft =
      gaussian2D(theta - 1.52, py - 0.36, 0.13, 0.2) * 0.115 -
      gaussian2D(theta - 1.48, py - 0.36, 0.06, 0.11) * 0.055;
    const earRight =
      gaussian2D(theta + 1.52, py - 0.36, 0.13, 0.2) * 0.115 -
      gaussian2D(theta + 1.48, py - 0.36, 0.06, 0.11) * 0.055;

    // 7. Sternocleidomastoid Neck Tendons, Suprasternal Notch & Clavicle Ridge
    const scmLeft = gaussian2D(theta - 0.42 - (py + 0.8) * 0.35, py + 0.88, 0.16, 0.38) * 0.048;
    const scmRight = gaussian2D(theta + 0.42 + (py + 0.8) * 0.35, py + 0.88, 0.16, 0.38) * 0.048;
    const suprasternalNotch = -gaussian2D(theta, py + 1.22, 0.18, 0.12) * 0.065;
    const clavicleRidge =
      (gaussian2D(theta - 0.55, py + 1.38, 0.38, 0.075) +
        gaussian2D(theta + 0.55, py + 1.38, 0.38, 0.075)) *
      0.068;

    const radialDetail =
      noseBridge +
      noseTip +
      nostrils +
      philtrumIndent +
      browRidge +
      leftSocket +
      rightSocket +
      leftEye +
      rightEye +
      eyeCrease +
      cheekbones +
      buccalHollows +
      upperLip +
      mouthPart +
      lowerLip +
      mentolabialFold +
      chinProminence +
      jawAngles +
      earLeft +
      earRight +
      scmLeft +
      scmRight +
      suprasternalNotch +
      clavicleRidge;

    px += dirX * radialDetail;
    pz += dirZ * radialDetail;

    pos.setXYZ(i, px, py, pz);
  }

  geo.computeVertexNormals();
  return geo;
}

export const IridescentBust3D: React.FC<IridescentBust3DProps> = ({
  mode,
  neuralPulse,
  shaderIntensity,
  compactLayout,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const bustGroupRef = useRef<THREE.Group | null>(null);
  const uniformsRef = useRef<{
    uTime: { value: number };
    uMode: { value: number };
    uPulse: { value: number };
    uIntensity: { value: number };
    uPointer: { value: THREE.Vector2 };
  } | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    camera.position.set(0, 0.12, 6.2);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const uniforms = {
      uTime: { value: 0 },
      uMode: { value: 0 },
      uPulse: { value: 0 },
      uIntensity: { value: 1.05 },
      uPointer: { value: new THREE.Vector2(0, 0) },
    };
    uniformsRef.current = uniforms;

    const bustGeo = createSculptedHumanBustGeometry();
    const bustMat = new THREE.ShaderMaterial({
      vertexShader: VERTEX_SHADER,
      fragmentShader: FRAGMENT_SHADER,
      uniforms,
    });

    const bustMesh = new THREE.Mesh(bustGeo, bustMat);
    const bustGroup = new THREE.Group();
    bustGroup.add(bustMesh);

    // Signature 3/4 left turn matching Viktor Oddy's MindAI screenshot
    bustGroup.rotation.y = -0.44;
    bustGroup.rotation.x = 0.03;
    bustGroup.position.set(0.18, -0.34, 0);
    bustGroupRef.current = bustGroup;
    scene.add(bustGroup);

    const pointer = new THREE.Vector2(0, 0);
    const onPointerMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      pointer.set(nx, ny);
    };
    window.addEventListener('mousemove', onPointerMove);

    const clock = new THREE.Clock();
    let frameId = 0;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      uniforms.uTime.value = elapsed;

      uniforms.uPointer.value.lerp(pointer, 0.06);

      if (bustGroupRef.current) {
        const baseRotY = compactLayout ? -0.26 : -0.44;
        const targetRotY = baseRotY + pointer.x * 0.16 + Math.sin(elapsed * 0.55) * 0.035;
        const targetRotX = 0.03 - pointer.y * 0.08 + Math.cos(elapsed * 0.45) * 0.02;
        bustGroupRef.current.rotation.y += (targetRotY - bustGroupRef.current.rotation.y) * 0.06;
        bustGroupRef.current.rotation.x += (targetRotX - bustGroupRef.current.rotation.x) * 0.06;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', onPointerMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, []);

  // React to mode, pulse, intensity, and layout changes
  useEffect(() => {
    if (!uniformsRef.current || !bustGroupRef.current) return;

    const modeMap: Record<CognitiveMode, number> = {
      Vision: 0,
      Lifestyle: 1,
      Mind: 2,
    };

    gsap.to(uniformsRef.current.uMode, {
      value: modeMap[mode],
      duration: 0.9,
      ease: 'power2.out',
    });

    gsap.to(uniformsRef.current.uIntensity, {
      value: shaderIntensity,
      duration: 0.5,
      ease: 'power2.out',
    });

    if (neuralPulse > 0) {
      gsap.fromTo(
        uniformsRef.current.uPulse,
        { value: 1.2 },
        { value: 0.0, duration: 2.2, ease: 'power3.out' }
      );
    }

    gsap.to(bustGroupRef.current.position, {
      x: compactLayout ? 0.05 : 0.18,
      y: compactLayout ? -0.58 : -0.34,
      duration: 0.9,
      ease: 'power3.out',
    });
  }, [mode, neuralPulse, shaderIntensity, compactLayout]);

  return <div ref={containerRef} className="w-full h-full" />;
};
