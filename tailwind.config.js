/** @type {import('tailwindcss').Config} */
module.exports = {
  content:  ["./**/*.{html,js}"],
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
        'mainBG-1':"url('./img/main-bg-1.png')",
        'mainBG-2':"url('./img/main-bg-2.png')",
        'mainBG-3':"url('./img/main-bg-3.png')",
        'mainBG-4':"url('./img/main-bg-4.png')",
        'mainBG-5':"url('./img/main-bg-5.png')",
        'mainBG-6':"url('./img/main-bg-6.png')",
        'main-6-btn':"url('./img/main-6-button.png')",
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