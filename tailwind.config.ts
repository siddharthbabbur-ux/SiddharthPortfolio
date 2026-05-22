import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 40px rgba(124, 58, 237, 0.18)',
        soft: '0 24px 80px rgba(15, 23, 42, 0.2)'
      },
      colors: {
        surface: '#111827',
        glass: 'rgba(15, 23, 42, 0.72)',
        neon: '#06B6D4'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle at center, rgba(124, 58, 237, 0.22), transparent 45%)',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, #7c3aed, #06b6d4, #7c3aed)'
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        }
      }
    }
  },
  plugins: []
};

export default config;
