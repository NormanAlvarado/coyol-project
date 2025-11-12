/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wine: '#8B0000', // Rojo oscuro para detalles
        gold: '#D4AF37', // Dorado para detalles y acentos
        cream: '#C0C0C0', // Plateado
        sophisticated: '#000000', // Negro
        navy: '#0A1929', // Azul oscuro
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        noto: ['Noto Sans KR', 'sans-serif'],
      },
    },
  },
}
