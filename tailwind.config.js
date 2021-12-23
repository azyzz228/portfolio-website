module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        plex: "'IBM Plex Sans', sans-serif;",
        mulish: "'Mulish', sans-serif;",
        poppins: "'Poppins', sans-serif;",
        opensans: "'Open Sans', sans-serif;"
      },
      colors: {
        'blue-on-purple': '#0085ff'
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        moveUp: 'moveUp 300ms ease-in-out 1'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },

          '50%': { transform: 'rotate(3deg)' },
        },

        moveUp: {
          '0%': { transform: 'translate(0,0)' },
          '100%': { transform: 'translate(0,-60px)' }
        }
      },
    },
  },
  plugins: [],
}
