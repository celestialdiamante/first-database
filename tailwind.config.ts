import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#a3e635",
          "primary-content": "#ffffff",
          "secondary": "#f3f4f6",
          "secondary-content": "#141415",
          "accent": "#e7e5e4",
          "accent-content": "#001616",
          "neutral": "#111827",
          "neutral-content": "#f3f4f6",
          "base-100": "#ffffff",
          "base-200": "#dedede",
          "base-300": "#bebebe",
          "base-content": "#161616",
          "info": "#0000ff",
          "info-content": "#c6dbff",
          "success": "#00ff00",
          "success-content": "#001600",
          "warning": "#00ff00",
          "warning-content": "#001600",
          "error": "#ff0000",
          "error-content": "#160000",        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
