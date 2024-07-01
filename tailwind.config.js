/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        '1xl': '1400px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'blue-gradient':
          'linear-gradient(90deg, #141446 0%, #1C2067 50%, #141446 100%)',
      },

      fontFamily: {
        'g-regular': ['"Gilroy-Regular"'],
        'g-medium': ['"Gilroy-Medium"'],
        'g-semibold': ['"Gilroy-SemiBold"'],
        'g-bold': ['"Gilroy-Bold"'],
        'g-extrabold': ['"Gilroy-ExtraBold"'],
        'g-black': ['"Gilroy-Black"'],
      },
      colors: {
        secondary: '#161851',
        secondaryLight: '#555555',
        'secondary-second': '#00227B',
        'light-blue': '#cceffe',
        'water-sky': '#dbf4fe',
        'light-sky': '#cceffe',
        primary: '#02b1f8',
        silver: '#E7E7E7',
        'light-gray': '#D9D9D9',
        'transparent-light-gray': '#D9D9D94D',
        'slate-gray': '#929292',
        'dim-gray': '#d8d8d8',
        yellow: '#FFC700',
        green: '008000',
        description: '#00000080',
        'yellow-500': '#FFC700',
        pink: '#FE007D',
        red: '#FF0000',
        'red-dark': '#ee3123',
        'light-500': '#bababf',
      },
      borderRadius: {
        5: '5px',
        10: '10px',
      },
      boxShadow: {
        default: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
        normal: '0px 1px 4px 0px #0000004D',
      },
    },
  },
  plugins: [],
};
