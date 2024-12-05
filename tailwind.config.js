/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}", '!./node_modules/**/*'],
  theme: {
    extend: {
      colors: {
        lightGray: '#F5F5F5',  
      },
      fontFamily:
      {
        libreBodoni_boldItalic:['LibreBodoni-BoldItalic', 'serfif'],
        krona: ['KronaOne-Regular', 'sans-serif'], 
      },
      backgroundImage: {
        'banner': "url('./img/banner.png')",
        'main-1-bg':"url('./img/main-1-bg.png')",
        'main-2-bg':"url('./img/main-2-bg.png')",
        'main-3-bg':"url('./img/main-3-bg.png')",
        'main-5-bg':"url('./img/main-5-bg.png')",
        'main-6-bg':"url('./img/main-6-bg.png')",
        'main-7-bg':"url('./img/main-7-bg.png')",
        'main-7-btn':"url('./img/main-7-button.png')",
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
  },
  plugins: [],
},
}
}