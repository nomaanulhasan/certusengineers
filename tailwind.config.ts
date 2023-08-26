import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        'top-strip': '#e5eef6',
        'card-border': '#e6ecf7',
        'main-blue': '#022950',
        'main-orange': '#ff6d00',
        'primary-text': '#1d2c38',
        'nav-hover': '#0093d8',
        'secondary-text': '#454545',
        'section-head': '#104cba',
        'card-head': '#1575A3',
        'footer-separator': '#223452',
      },
      spacing: {
        'top-strip': '52px',
      },
      maxWidth: {
        tv: '1536px',
      },
    },
  },
  plugins: [],
};
export default config;
