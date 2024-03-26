module.exports = {
  theme: {
    extend: {
      colors: {
        // Define your color palette here
        primary: '#334155', // Slate
        secondary: '#64748B', // Blue Gray
        accent: '#10B981', // Emerald
        dark: '#1E293B',
        light: '#F8FAFC',
        // Add more custom colors as needed
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
