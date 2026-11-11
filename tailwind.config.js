export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: { extend: {
    colors: { ink: '#070b17', panel: '#0d1326', edge: '#1c2544', accent: '#5b8cff', violet: '#8b7bff', mute: '#93a0c0' },
    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'], display: ['"Space Grotesk"', 'Inter', 'sans-serif'] },
  } },
  plugins: [],
}
