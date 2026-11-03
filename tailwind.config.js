/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        psy: {
          blue: '#13284C',
          navy: '#0D1B3E',
          dark: '#0B1528',
          action: '#059669',
          actionHover: '#047857',
          lime: '#8EE061', // Vert lime exact de la carte officielle
          limeDark: '#45A519',
          mint: '#5ECFA7', // Vert menthe aqua exact de la carte
          mintSoft: '#E6FAF2',
          gradientStart: '#8EE061',
          gradientMid: '#72D984',
          gradientEnd: '#5ECFA7',
          anthracite: '#1E293B',
          card: '#FFFFFF',
        },
      },
      fontFamily: {
        sans: ['"Poppins"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Poppins"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft-sm': '0 2px 10px -2px rgba(13, 27, 62, 0.08), 0 1px 4px -1px rgba(5, 150, 105, 0.06)',
        'soft-md': '0 12px 28px -4px rgba(13, 27, 62, 0.12), 0 4px 12px -2px rgba(5, 150, 105, 0.08)',
        'soft-lg': '0 22px 40px -6px rgba(13, 27, 62, 0.15), 0 8px 20px -4px rgba(5, 150, 105, 0.10)',
        'glow-action': '0 0 25px 2px rgba(5, 150, 105, 0.45)',
        'glow-lime': '0 0 25px 2px rgba(142, 224, 97, 0.50)',
      },
      borderRadius: {
        '2xl': '1.25rem',
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
    },
  },
  plugins: [],
}
