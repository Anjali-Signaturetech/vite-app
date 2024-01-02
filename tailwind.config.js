/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./**/*.{js,jsx,ts,tsx}",
    "./src/components/podcasts/player/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}", 
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-550': '#428BCA',
      },
      width: {
        '1260': '1260px',
        '340':'340px',
      },
      height: {
        '591': '591px',
         '340':'340px'
      },
    },
  },
  plugins: [],
}

