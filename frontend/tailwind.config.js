/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F19",
        primary: {
          DEFAULT: "#6621A8",
          light: "#8B44C9",
          dark: "#4D187E"
        },
        accent: {
          DEFAULT: "#00FFFF",
          light: "#66FFFF",
          dark: "#00CCCC"
        },
        text: {
          DEFAULT: "#C0C0C0",
          light: "#FFFFFF",
          dark: "#9A9A9A"
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'neon-primary': '0 0 5px #6621A8, 0 0 20px #6621A8',
        'neon-accent': '0 0 5px #00FFFF, 0 0 20px #00FFFF',
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};