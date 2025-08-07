/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#0B0E12',
        card: 'rgba(255,255,255,0.04)',
        stroke: 'rgba(255,255,255,0.08)',
        accent: '#6C63FF',
        accent2: '#9B5CFF'
      },
      boxShadow: {
        'elev': '0 8px 24px rgba(0,0,0,0.35)'
      },
      borderRadius: {
        xl2: '20px'
      }
    }
  },
  plugins: []
}
