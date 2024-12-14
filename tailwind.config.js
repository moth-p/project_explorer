/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}", '!./node_modules/**/*'],
  theme: {
    extend: {
      colors: {
        mainYellow: '#D4FB71',
        subPurple: '#8CABFB',
        lightGray: '#F5F5F5',  
      },
      fontFamily:
      {
        libreBodoni_boldItalic:['LibreBodoni-BoldItalic', 'serfif'],
        libreBodoni_Regular:['LibreBodoni-Regular', 'serfif'],
        krona: ['KronaOne-Regular', 'sans-serif'], 
      },
      backgroundImage: {
        'banner': "url('./img/banner.png')",
        'main-1-bg':"url('./img/main-1-bg.png')",
        'main-2-bg':"url('./img/main-2-bg.png')",
        'main-3-bg':"url('./img/main-3-bg.png')",
        'main-5':"url('./img/main-5.png')",
        'main-6':"url('./img/main-6.png')",
        'main-7-bg':"url('./img/main-7-bg.png')",
        'main-7-btn':"url('./img/main-7-button.png')",
        'carousel-1': "url('./img/carousel-1.png')",
        'carousel-2': "url('./img/carousel-2.png')",
        'carousel-3': "url('./img/carousel-3.png')",
        'carousel-1-sm': "url('./img/carousel-1-sm.png')",
        'carousel-2-sm': "url('./img/carousel-2-sm.png')",
        'carousel-3-sm': "url('./img/carousel-3-sm.png')",
      },
      animation: {
        marquee: 'marquee 32s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        }
      },
  plugins: [],
},
}
}