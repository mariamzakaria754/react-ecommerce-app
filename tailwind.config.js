/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem", // 16px  — موبايل
        sm: "1.25rem", // 20px
        md: "2rem", // 32px  — تابلت
        lg: "2.5rem", // 40px
        xl: "3rem", // 48px
        "2xl": "3.5rem", // 56px  — ديسكتوب 1440
        "3xl": "4rem", // 64px  — ديسكتوب كبير
      },
    },

    extend: {
      // ─────────────────────────────────────────────────────────
      // BREAKPOINTS
      //
      //  sm   640px   موبايل كبير / فولد
      //  md   768px   تابلت ابتداء  ← tablet start
      //  lg  1024px   لابتوب
      //  xl  1280px   لابتوب كبير
      // 2xl  1440px   ديسكتوب      ← desktop start  (override)
      // 3xl  1600px   شاشة كبيرة
      // ─────────────────────────────────────────────────────────
      screens: {
        "2xl": "1440px", // override Tailwind default (1536 → 1440)
        "3xl": "1600px", // extra large screens
      },

      // ─────────────────────────────────────────────────────────
      // MAX WIDTHS
      // ─────────────────────────────────────────────────────────
      maxWidth: {
        container: "1440px",
        "8xl": "1600px",
        "9xl": "1800px",
      },

      spacing: {
        // sections vertical rhythm
        section: "80px",
        "section-lg": "120px",

        navbar: "70px",
        topbar: "36px",
        "navbar-full": "106px", // topbar + navbar

        // card gaps
        "card-gap": "24px",
        "card-gap-sm": "16px",
      },

      // ─────────────────────────────────────────────────────────
      // FONT SIZE  —  type scale موحدة للموقع
      // ─────────────────────────────────────────────────────────
      fontSize: {
        // headings
        h1: [
          "clamp(1.75rem, 4vw, 2.5rem)",
          { lineHeight: "1.2", fontWeight: "700" },
        ],
        h2: [
          "clamp(1.375rem, 3vw, 1.875rem)",
          { lineHeight: "1.3", fontWeight: "600" },
        ],
        h3: [
          "clamp(1.125rem, 2vw, 1.5rem)",
          { lineHeight: "1.4", fontWeight: "600" },
        ],
        h4: [
          "clamp(1rem, 1.5vw, 1.25rem)",
          { lineHeight: "1.4", fontWeight: "500" },
        ],

        // body
        "body-lg": ["1.125rem", { lineHeight: "1.7" }], // 18px
        body: ["1rem", { lineHeight: "1.7" }], // 16px
        "body-sm": ["0.875rem", { lineHeight: "1.6" }], // 14px
        caption: ["0.75rem", { lineHeight: "1.5" }], // 12px
      },

      // ─────────────────────────────────────────────────────────
      // BORDER RADIUS
      // ─────────────────────────────────────────────────────────
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },

      // ─────────────────────────────────────────────────────────
      // FONTS
      // ─────────────────────────────────────────────────────────
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },

      // ─────────────────────────────────────────────────────────
      // COLORS
      // ─────────────────────────────────────────────────────────
      colors: {
        // ── Brand ──────────────────────────────────────────────
        brand: {
          DEFAULT: "#DB4444",
          light: "#E07575",
          dark: "#B03535",
        },

        // ── Backgrounds ────────────────────────────────────────
        backgroundCustom: "#F4F7FD",
        backgroundDark: "#20212C",
        searchBg: "#F5F5F5",

        // ── Text ───────────────────────────────────────────────
        textPrimary: "#000112",
        textSecondary: "#828FA3",
        textWhite: "#FFFFFF",

        primaryCustom: "#635FC7",
        primaryLight: "#A8A4FF",

        secondaryCustom: "#EA5555",
        secondaryLight: "#FF9898",

        // ── shadcn ─────────────────────────────────────────────
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",

        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // ─────────────────────────────────────────────────────────
      // BOX SHADOW  —  لأي cards أو dropdowns
      // ─────────────────────────────────────────────────────────
      boxShadow: {
        card: "0 2px 12px rgba(0,0,0,0.08)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.14)",
        navbar: "0 1px 8px rgba(0,0,0,0.07)",
      },

      // ─────────────────────────────────────────────────────────
      // TRANSITIONS  —  consistent animation
      // ─────────────────────────────────────────────────────────
      transitionDuration: {
        DEFAULT: "200ms",
        fast: "150ms",
        slow: "350ms",
      },
    },
  },

  plugins: [],
};
