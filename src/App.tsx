import React, { useState } from 'react';
import { CognitiveMode, IridescentBust3D } from './components/IridescentBust3D';

interface NavDetail {
  title: string;
  tag: string;
  summary: string;
  metrics: Array<{ label: string; value: string }>;
}

const NAV_CONTENT: Record<string, NavDetail> = {
  Experience: {
    title: 'Multimodal Neural Synthesis',
    tag: 'EXPERIENCE LAYER',
    summary:
      'MindAI translates visual intuition, spoken intent, and spatial gestures into real-time generative workflows with sub-12ms cognitive latency.',
    metrics: [
      { label: 'Synaptic Frame Rate', value: '120 Hz' },
      { label: 'Context Window', value: '2.4M Tokens' },
    ],
  },
  Pricing: {
    title: 'Adaptive Cognitive Tiers',
    tag: 'COMPUTE ALLOCATION',
    summary:
      'Dedicated neural processing clusters scale elastically from solo creative studios to enterprise research laboratories.',
    metrics: [
      { label: 'Studio Core', value: '$38 / mo' },
      { label: 'Dedicated Cortex', value: 'Custom SLA' },
    ],
  },
  FAQ: {
    title: 'System Architecture Answers',
    tag: 'TECHNICAL FAQ',
    summary:
      'Zero-retention private weights ensure your proprietary visual and cognitive embeddings remain encrypted inside your local enclave.',
    metrics: [
      { label: 'Enclave Isolation', value: 'SOC2 + ISO' },
      { label: 'Zero Data Training', value: 'Verified' },
    ],
  },
  Resources: {
    title: 'Cognitive Model Benchmarks',
    tag: 'RESEARCH LIBRARY',
    summary:
      'Explore interactive shader kernels, cross-modal attention maps, and spatial reasoning datasets curated by the MindAI research group.',
    metrics: [
      { label: 'Vision-Mind Score', value: '98.4%' },
      { label: 'Open Kernels', value: '42 Modules' },
    ],
  },
  Support: {
    title: '24/7 Neural Engineering Desk',
    tag: 'LIVE TELEMETRY SUPPORT',
    summary:
      'Direct access to systems engineers for custom pipeline integration, WebGL/WebGPU viewport tuning, and low-latency API routing.',
    metrics: [
      { label: 'Median Response', value: '4 Minutes' },
      { label: 'Global Uptime', value: '99.98%' },
    ],
  },
  Doc: {
    title: 'SDK & Cognitive Protocol',
    tag: 'DEVELOPER DOCS',
    summary:
      'Stream real-time semantic vectors directly into Three.js, React, or native spatial computing runtimes with a three-line initialization.',
    metrics: [
      { label: 'SDK Version', value: 'v4.2 Stable' },
      { label: 'Transport', value: 'gRPC / WebRTC' },
    ],
  },
};

const MODE_DESCRIPTIONS: Record<
  CognitiveMode,
  { headlineTop: string; headlineMain: string; headlineBold: string; bodyPrefix: string; bodyBold: string; bodySuffix: string }
> = {
  Vision: {
    headlineTop: 'Where Your Mind',
    headlineMain: 'Meets the ',
    headlineBold: 'Impossible',
    bodyPrefix: 'MindAI is a new way to interact with technology a ',
    bodyBold: 'cognitive',
    bodySuffix: ' system that understands your vision.',
  },
  Lifestyle: {
    headlineTop: 'Where Daily Flow',
    headlineMain: 'Becomes ',
    headlineBold: 'Effortless',
    bodyPrefix: 'Ambient intelligence that adapts to your rhythm through a ',
    bodyBold: 'cognitive',
    bodySuffix: ' companion built for calm clarity.',
  },
  Mind: {
    headlineTop: 'Where Deep Thought',
    headlineMain: 'Unlocks ',
    headlineBold: 'Discovery',
    bodyPrefix: 'Expand complex reasoning and spatial synthesis with a ',
    bodyBold: 'cognitive',
    bodySuffix: ' architecture that thinks alongside you.',
  },
};

export const App: React.FC = () => {
  const [mode, setMode] = useState<CognitiveMode>('Vision');
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [compactLayout, setCompactLayout] = useState<boolean>(false);
  const [shaderIntensity, setShaderIntensity] = useState<number>(1.06);
  const [settingsOpen, setSettingsOpen] = useState<boolean>(false);
  const [activeNavModal, setActiveNavModal] = useState<string | null>(null);
  const [promptText, setPromptText] = useState<string>('');
  const [neuralPulse, setNeuralPulse] = useState<number>(0);
  const [cognitiveResponse, setCognitiveResponse] = useState<string | null>(null);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.setAttribute('data-theme', next ? 'dark' : 'light');
  };

  const handlePromptSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = promptText.trim() || `Synthesize ${mode.toLowerCase()} topology`;
    setNeuralPulse((prev) => prev + 1);
    setCognitiveResponse(
      `Cognitive Cortex [${mode} Mode]: Synthesizing "${query}" across 128k multimodal attention nodes.`
    );
    setPromptText('');
  };

  const copy = MODE_DESCRIPTIONS[mode];

  return (
    <div
      className={`relative w-screen h-screen overflow-hidden select-none transition-colors duration-500 ${
        darkMode
          ? 'bg-[#0D0B12] text-[#F5F2F7]'
          : 'bg-gradient-to-b from-[#F6F1F4] via-[#F2EDF1] to-[#ECE6EC] text-[#18151C]'
      }`}
    >
      {/* Fullscreen Three.js Iridescent 3D Sculpted Human Bust */}
      <div className="absolute inset-0 z-10">
        <IridescentBust3D
          mode={mode}
          neuralPulse={neuralPulse}
          shaderIntensity={shaderIntensity}
          compactLayout={compactLayout}
        />
      </div>

      {/* TOP NAVIGATION HEADER */}
      <header className="relative z-30 flex items-start justify-between px-7 sm:px-11 pt-7">
        {/* Top-Left Navigation Columns (or Compact Equal Button) */}
        <div className="flex items-start gap-8 sm:gap-12">
          {compactLayout ? (
            <button
              type="button"
              onClick={() => setCompactLayout(false)}
              aria-label="Expand Navigation Columns"
              className={`w-10 h-10 rounded-full border flex flex-col items-center justify-center gap-1 cursor-pointer transition ${
                darkMode
                  ? 'border-white/25 hover:bg-white/10'
                  : 'border-black/20 hover:bg-black/5'
              }`}
            >
              <span className="w-3.5 h-[1.5px] bg-current" />
              <span className="w-3.5 h-[1.5px] bg-current" />
            </button>
          ) : (
            <>
              <nav aria-label="Primary Navigation" className="flex flex-col gap-1 text-[13.5px] leading-[1.45]">
                {(['Experience', 'Pricing', 'FAQ'] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveNavModal(item)}
                    className="text-left hover:opacity-65 transition cursor-pointer font-normal"
                  >
                    {item}
                  </button>
                ))}
              </nav>
              <nav aria-label="Secondary Navigation" className="flex flex-col gap-1 text-[13.5px] leading-[1.45]">
                {(['Resources', 'Support', 'Doc'] as const).map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveNavModal(item)}
                    className="text-left hover:opacity-65 transition cursor-pointer font-normal"
                  >
                    {item}
                  </button>
                ))}
              </nav>
            </>
          )}
        </div>

        {/* Top-Center Interlocking Geometric Pill Monogram Logo (GD / CD) */}
        <button
          type="button"
          onClick={() => {
            setNeuralPulse((p) => p + 1);
            setCognitiveResponse(null);
          }}
          aria-label="MindAI Core Monogram"
          className="absolute left-1/2 -translate-x-1/2 top-7 cursor-pointer hover:scale-105 transition-transform"
        >
          <svg width="44" height="26" viewBox="0 0 46 28" fill="none">
            <rect
              x="1.5"
              y="1.5"
              width="43"
              height="25"
              rx="12.5"
              stroke="currentColor"
              strokeWidth="2.4"
            />
            <path
              d="M21 7.2H14.2C10.3 7.2 7.2 10.2 7.2 14C7.2 17.8 10.3 20.8 14.2 20.8H19.5V14.2H14.5"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M24.5 7.2H31.8C35.7 7.2 38.8 10.2 38.8 14C38.8 17.8 35.7 20.8 31.8 20.8H24.5V7.2Z"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Top-Right Crescent Moon Theme Toggle + Solid Black Record/Layout Circle */}
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark and Light Mode"
            title="Toggle Dark / Light Spectrum"
            className="w-8 h-8 flex items-center justify-center hover:opacity-70 transition cursor-pointer"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
            </svg>
          </button>

          <button
            type="button"
            onClick={() => setCompactLayout((prev) => !prev)}
            aria-label="Toggle Centered Editorial Layout"
            title="Switch Split / Centered Editorial Layout"
            className={`w-9 h-9 rounded-full flex items-center justify-center transition cursor-pointer shadow-md ${
              darkMode ? 'bg-white text-[#0D0B12]' : 'bg-[#0E0D12] text-white'
            }`}
          >
            <span className="w-2.5 h-2.5 rounded-full bg-current" />
          </button>
        </div>
      </header>

      {/* EDITORIAL HEADLINE & COGNITIVE DESCRIPTION */}
      {compactLayout ? (
        /* Centered Editorial Stack Layout (matching c_intro_18.jpg) */
        <div className="relative z-20 flex flex-col items-center text-center mt-8 px-6 pointer-events-none">
          <div className="max-w-lg text-left">
            <h1 className="text-[36px] sm:text-[44px] leading-[1.14] tracking-[-0.025em] font-light">
              <span className="block">{copy.headlineTop}</span>
              <span className="block">
                {copy.headlineMain}
                <strong className="font-semibold">{copy.headlineBold}</strong>
              </span>
            </h1>
            <p className="mt-4 text-[14.5px] leading-[1.55] opacity-85 max-w-md font-normal">
              {copy.bodyPrefix}
              <strong className="font-semibold">{copy.bodyBold}</strong>
              {copy.bodySuffix}
            </p>
          </div>
        </div>
      ) : (
        /* Wide Split Editorial Layout (matching codex_02.jpg) */
        <>
          <div className="absolute left-7 sm:left-11 top-[51%] -translate-y-1/2 z-20 max-w-md pointer-events-none">
            <h1 className="text-[38px] sm:text-[48px] leading-[1.15] tracking-[-0.025em] font-light">
              <span className="block">{copy.headlineTop}</span>
              <span className="block">
                {copy.headlineMain}
                <strong className="font-semibold">{copy.headlineBold}</strong>
              </span>
            </h1>
          </div>

          <div className="absolute right-8 sm:right-14 top-[69%] -translate-y-1/2 z-20 max-w-[270px] pointer-events-none">
            <p className="text-[13.5px] leading-[1.55] font-normal opacity-90">
              {copy.bodyPrefix}
              <strong className="font-semibold">{copy.bodyBold}</strong>
              {copy.bodySuffix}
            </p>
          </div>
        </>
      )}

      {/* Live Cognitive Response HUD Pill when user interacts */}
      {cognitiveResponse && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-24 z-30 bg-[#1B1922]/90 backdrop-blur-xl text-white px-5 py-2.5 rounded-full text-xs border border-white/15 shadow-xl flex items-center gap-3 max-w-lg">
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-ping shrink-0" />
          <span className="truncate">{cognitiveResponse}</span>
          <button
            type="button"
            onClick={() => setCognitiveResponse(null)}
            className="text-white/60 hover:text-white ml-2 cursor-pointer"
          >
            Dismiss
          </button>
        </div>
      )}

      {/* BOTTOM CONTROLS BAR */}
      <footer className="absolute inset-x-0 bottom-5 px-7 sm:px-10 z-30 flex items-center justify-between">
        {/* Bottom-Left Outlined Circular Sun/Shader Control Button */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setSettingsOpen((prev) => !prev)}
            aria-label="Adjust Iridescent Shader Intensity"
            className={`w-10 h-10 rounded-full border flex items-center justify-center transition cursor-pointer ${
              darkMode
                ? 'border-white/25 hover:bg-white/10'
                : 'border-black/20 hover:bg-black/5'
            }`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
            </svg>
          </button>

          {settingsOpen && (
            <div className="absolute left-0 bottom-13 bg-[#1E1C26]/95 backdrop-blur-xl text-white p-4 rounded-2xl w-64 border border-white/15 shadow-2xl">
              <div className="flex items-center justify-between text-xs font-semibold mb-2">
                <span>Thermal Iridescence</span>
                <span className="text-[#00F0FF]">{Math.round(shaderIntensity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0.7"
                max="1.45"
                step="0.05"
                value={shaderIntensity}
                onChange={(e) => setShaderIntensity(parseFloat(e.target.value))}
                className="w-full accent-[#FF1E9A] cursor-pointer"
              />
              <button
                type="button"
                onClick={() => setNeuralPulse((p) => p + 1)}
                className="mt-3 w-full py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-medium cursor-pointer transition"
              >
                Trigger Synaptic Surge
              </button>
            </div>
          )}
        </div>

        {/* Bottom-Center Dark Frosted Pill Prompt Bar (Overlapping the lower 3D Bust) */}
        <form
          onSubmit={handlePromptSubmit}
          className="bg-[#26252D]/82 backdrop-blur-xl text-white rounded-full px-4 py-3 flex items-center justify-between gap-3 w-[280px] sm:w-[310px] shadow-2xl border border-white/15"
        >
          <button
            type="button"
            onClick={() => setNeuralPulse((p) => p + 1)}
            aria-label="Synthesize Neural Field"
            className="text-white/70 hover:text-white transition cursor-pointer shrink-0"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </button>

          <input
            type="text"
            value={promptText}
            onChange={(e) => setPromptText(e.target.value)}
            aria-label="Enter cognitive command"
            className="bg-transparent text-[13px] text-white placeholder:text-white/60 focus:outline-none w-full text-center font-normal"
            placeholder="Work with MindAI"
          />

          <button
            type="submit"
            aria-label="Voice or Submit Command"
            className="text-white/75 hover:text-white transition cursor-pointer shrink-0"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
              <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
              <line x1="12" y1="19" x2="12" y2="22" />
            </svg>
          </button>
        </form>

        {/* Bottom-Right 3 Outlined Mode Pills: Vision | Lifestyle | Mind */}
        <div className="flex items-center gap-2" role="group" aria-label="Cognitive Spectrum Modes">
          {(['Vision', 'Lifestyle', 'Mind'] as const).map((item) => {
            const isActive = mode === item;
            return (
              <button
                key={item}
                type="button"
                onClick={() => {
                  setMode(item);
                  setNeuralPulse((p) => p + 1);
                }}
                className={`px-4 py-1.5 rounded-full text-[12px] font-medium transition cursor-pointer border ${
                  isActive
                    ? darkMode
                      ? 'bg-white text-[#0D0B12] border-white'
                      : 'bg-[#18151C] text-white border-[#18151C]'
                    : darkMode
                    ? 'border-white/35 text-white/85 hover:border-white'
                    : 'border-black/35 text-[#18151C]/85 hover:border-black'
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
      </footer>

      {/* Interactive Navigation Modal Drawer */}
      {activeNavModal && NAV_CONTENT[activeNavModal] && (
        <div className="absolute inset-0 z-40 bg-black/35 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#181520] text-white rounded-3xl p-7 max-w-md w-full border border-white/15 shadow-2xl">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-semibold tracking-widest text-[#00F0FF]">
                {NAV_CONTENT[activeNavModal].tag}
              </span>
              <button
                type="button"
                onClick={() => setActiveNavModal(null)}
                className="text-xs text-white/60 hover:text-white px-2.5 py-1 rounded-full bg-white/10 cursor-pointer"
              >
                Close
              </button>
            </div>
            <h2 className="text-2xl font-semibold mt-2">{NAV_CONTENT[activeNavModal].title}</h2>
            <p className="text-sm text-white/75 leading-relaxed mt-3">
              {NAV_CONTENT[activeNavModal].summary}
            </p>
            <div className="grid grid-cols-2 gap-3 mt-6">
              {NAV_CONTENT[activeNavModal].metrics.map((m) => (
                <div
                  key={m.label}
                  className="p-3.5 rounded-2xl bg-white/5 border border-white/10"
                >
                  <div className="text-xs text-white/55">{m.label}</div>
                  <div className="text-base font-semibold text-[#FF88E8] mt-1">{m.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
