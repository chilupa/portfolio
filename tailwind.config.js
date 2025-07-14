import colors from "tailwindcss/colors";

const config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router fallback
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        krishna: {
          peacock: "#1e3a5f", // deep blue
          featherBlue: "#3b82f6", // bright sky blue
          yellow: "#facc15", // golden yellow
          teal: "#14b8a6", // peacock teal
          pink: "#f472b6", // lotus pink
          lotus: "#ec4899",
          purple: "#8b5cf6", // Krishna’s crown/jewels
          darkBlue: "#0f172a", // base background
        },
      },
    },
  },
  plugins: [],
};
export default config;
