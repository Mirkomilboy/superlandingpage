module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '8xl': '1440px'
      },
      width: {
        '38': '157px'
      },
      fontFamily: {
        'omnes': 'Omnes',
      },
      colors: {
        brand: {
          gray: '#D7D7D7',
          black: '#202125',
          btnDisabled: '#96E6F6',
          light: {
            sky: '#E6F9FD',
            blue: '#00C2EA',
            yellow: '#FFD600',
            gray: '#B4B4B4',
            violet: '#7A2FDA',
          },
          dark: {
            blue: '#0A96B2',
            yellow: '#D0B00A',
            gray: '#808080',
            violet: '#6426B3',
          }
        }
      },
      spacing: {
        17.5: '70px',
        23: '92px'
      },
      borderRadius: {
        2.5: '10px',
        5: '20px'
      },
      letterSpacing: {
        50.5: '0.505em'
      },
      boxShadow: {
        brand: '0px 1px 48px rgba(0, 0, 0, 0.1)'
      },
      dropShadow: {
        0.25: '0px 4px 4px rgba(0, 0, 0, 0.25)'
      },
      backgroundImage: {
        'hero': "url('../assets/bg-hero.png')",
        'hero-mobile': "url('../assets/bg-hero-mobile.png')",
        'bottomInnerShadow1': "linear-gradient(180deg, rgba(0, 0, 0, 0) 29.17%, rgba(0, 0, 0, 0.7) 100%), url('../assets/fastFood.png');",
        'bottomInnerShadow2': "linear-gradient(180deg, rgba(0, 0, 0, 0) 29.17%, rgba(0, 0, 0, 0.7) 100%), url('../assets/Burger.png');",
        'bottomInnerShadow3': "linear-gradient(180deg, rgba(0, 0, 0, 0) 29.17%, rgba(0, 0, 0, 0.7) 100%), url('../assets/Pizzen.png');",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
