module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#7053C6', 
        secondary: '#C74E2D', 
        accent: '#FB8700', 
        dark: '#0E0330',
        light: '#F5F2FD',
        'prime-50': '#F5F2FD',
        'prime-100': '#E7E0FA',
        'prime-200': '#CFC2F5',
        'prime-300': '#A28AE8',
        'prime-400': '#8B6EDD',
        'prime-500': '#7053C6',
        'prime-600': '#5B33CC',
        'prime-700': '#441FAD',
        'prime-800': '#2F0F8A',
        'prime-900': '#0E0330',
        'prime2-50': '#F9EEEB',
        'prime2-100': '#FCE4DE',
        'prime2-200': '#F6BEAF',
        'prime2-300': '#EA8C73',
        'prime2-400': '#E36B4B',
        'prime2-500': '#C74E2D',
        'prime2-600': '#AF4528',
        'prime2-700': '#A13011',
        'prime2-800': '#752A15',
        'prime2-900': '#300C03',
        'accent-50': '#FFF2E3',
        'accent-100': '#FBE6CE',
        'accent-200': '#BCCCDC',
        'accent-300': '#F7C589',
        'accent-400': '#F59F3B',
        'accent-500': '#FB8700',
        'accent-600': '#CA6D00',
        'accent-700': '#A25A06',
        'accent-800': '#7D4502',
        'accent-900': '#4B2901',
        'primeGrey-50': '#F9F8FC',
        'primeGrey-100': '#F3F2F7',
        'primeGrey-200': '#EEEEF2',
        'primeGrey-300': '#D7D7E0',
        'primeGrey-400': '#9E9CAF',
        'primeGrey-500': '#706B80',
        'primeGrey-600': '#4F4B63',
        'primeGrey-700': '#3A3751',
        'primeGrey-800': '#1F1F37',
        'primeGrey-900': '#171127',
        'primeGrey-950': '#0E0B19',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
        // Extend spacing as needed
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
        // Add or customize your font families
      },
      backgroundImage: {
        'hero-pattern': "url('/path/to/your/background/image')",
        // Define more background images as needed
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        // Add more keyframes for animations
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        // Define more animations
      },
      // Any other theme extensions you need
    },
  },
  plugins: [
    // Add Tailwind plugins here, if any
  ],
  // Any other Tailwind configuration options you need
};
