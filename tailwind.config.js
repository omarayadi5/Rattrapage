module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "#e5e7eb",
        background: "#f8fafc",
        card: "#fff",
        primary: "#6366f1",
        "tech-blue": "#2563eb",
        "tech-cyan": "#06b6d4",
        "muted-foreground": "#6b7280",
        foreground: "#111827", // <-- AJOUTE CETTE LIGNE
        // Ajoute ici toutes les couleurs utilisées dans ton projet
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("tailwindcss-animate"),
  ],
};
