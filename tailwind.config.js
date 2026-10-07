export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 20px 45px rgba(34, 197, 94, 0.18)',
      },
      colors: {
        moss: '#1d4d3d',
        sandstone: '#d7c3a3',
        stone: '#94a3b8',
      },
      backgroundImage: {
        'earth-grid': 'radial-gradient(circle at center, rgba(148, 163, 184, 0.15) 0, rgba(148, 163, 184, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};
