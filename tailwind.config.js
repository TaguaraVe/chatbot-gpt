/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        error: {
          50: '#FFF3F2',
          100: '#FFCECB',
          200: '#FF9D98',
          300: '#FF7871',
          400: '#FF544A',
          500: '#FF3B30',
          600: '#FF170A',
          700: '#BD0A00',
          800: '#720600',
          900: '#260200',
        },
        neutral: {
          50: '#F0F0F0',
          100: '#D6D6D6',
          200: '#BDBDBD',
          300: '#A3A3A3',
          400: '#8A8A8A',
          500: '#707070',
          600: '#575757',
          700: '#3D3D3D',
          800: '#242424',
        },
        primary: {
          50: '#dacde5',
          100: '#c1abd3',
          200: '#ad8fc4',
          300: '#7F589E',
          400: '#724794',
          500: '#7F589E',
          600: '#643589',
          700: '#532C72',
          800: '#703c98',
          900: '#44245F',
        },
        secondary: {
          50: '#D2EEFE',
          100: '#A0DBFD',
          200: '#6EC8FC',
          300: '#3CB5FB',
          400: '#0AA2FA',
          500: '#0483CC',
          600: '#03649B',
          700: '#024369',
          800: '#012337',
        },
        success: {
          50: '#F2FCF5',
          100: '#CCF2D5',
          200: '#98E4AB',
          300: '#72DA8C',
          400: '#4BD06D',
          500: '#34C759',
          600: '#2EAE4E',
          700: '#217C38',
          800: '#144B21',
          900: '#07190B',
        },
        black: '#1f1f1f',
        white: '#fafafa',
        info: '#0dcaf0',
        warning: '#ffc800',
        danger: '#dc3545',
        form: 'rgba(255, 255, 255, 0.8)',
        light: {
          100: '#f7fbff',
          300: '#d6d6d6',
        },
        dark: '#212529',
        tdGreen: '#21c501',
        tdOrange: '#fd5d01',
      },

      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },

      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },

      backgroundImage: {
        'global-pattern': "url('/assets/images/routes.svg')",
        'mobile-pattern': "url('/assets/images/RouteMobile.svg')",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
