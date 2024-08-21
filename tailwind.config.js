/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    /*
      Major Third Type Scale
      Base 16px
      Ratio 1.25
    */
    spacing: {
      '0': '0rem',
      '4': '0.25rem',  // 4px
      '8': '0.5rem',     // 8px
      '12': '0.75rem',  // 12px
      '16': '1rem',       // 16px
      '20': '1.25rem',  // 20px
      '24': '1.5rem',     // 24px
      '28': '1.75rem',  // 28px
      '32': '2rem',       // 32px
      '36': '2.25rem',  // 36px
      '40': '2.5rem',     // 40px
      '44': '2.75rem',     // 44px
      '48': '3rem',       // 48px
      '52': '3.25rem',       // 52px
      '56': '3.5rem',       // 56px
      '60': '3.75rem',  // 60px
      '64': '4rem',       // 64px
      '68': '4.25rem',       // 68px
      '72': '4.5rem',     // 72px
      '76': '4.75rem',     // 76px
      '80': '5rem',      // 80px
      '84': '5.25rem',      // 84px
      '88': '5.5rem',    // 88px
      '92': '5.75rem',    // 92px
      '96': '6rem',      // 96px
      '100': '6.25rem',      // 100px
      '104': '6.5rem',    // 104px
      '108': '6.75rem',    // 108px
      '112': '7rem',      // 112px
      '116': '7.25rem',      // 116px
      '120': '7.5rem',    // 120px
      '124': '7.75rem',    // 124px
      '128': '8rem',      // 128px
      '132': '8.25rem',      // 132px
      '136': '8.5rem',    // 136px
      '140': '8.75rem',    // 140px
      '144': '9rem',      // 144px
      '148': '9.25rem',    // 148px
      '152': '9.5rem',    // 152px
      '156': '9.75rem',    // 156px
      '160': '10rem',     // 160px
      '164': '10.25rem',     // 164px
      '168': '10.5rem',     // 168px
      '172': '10.75rem',     // 172px
      '176': '11rem',     // 176px
      '180': '11.25rem',     // 180px
      '184': '11.5rem',     // 184px
      '188': '11.75rem',     // 188px
      '192': '12rem',     // 192px
      '196': '12.25rem',     // 196px
      '200': '12.5rem',     // 200px
    },
    fontSize: {
      'xs': ["0.625rem", { lineHeight: "1rem" }], // 10px LH 16
      'sm': ["0.75rem", { lineHeight: "1.25rem" }], // 12px LH 20
      'base': ["1rem", { lineHeight: "1.5rem" }], // 16px LH 24
      'lg': ["1.25rem", { lineHeight: "1.75rem" }], // 20px LH 28
      'xl': ["1.5rem", { lineHeight: "1.75rem" }], // 24px LH 28
      '2xl': ["2rem", { lineHeight: "2.25rem" }], // 32px LH 36
      '3xl': ["2.5rem", { lineHeight: "2.75rem" }], // 40px LH 44
      '4xl': ["3rem", { lineHeight: "3.5rem" }], // 48px LH 56
      '5xl': ["3.75rem", { lineHeight: "4.25rem" }], // 60px LH 68
      '6xl': ["4.5rem", { lineHeight: "5rem" }], // 72px
    },
    container: {
      // The container class sets the max-width of an element to match the min-width of the current breakpoint. This is useful if you’d prefer to design for a fixed set of screen sizes instead of trying to accommodate a fully fluid viewport.
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          100: "var(--primary-100)",
          90: "var(--primary-90)",
          80: "var(--primary-80)",
          70: "var(--primary-70)",
          60: "var(--primary-60)",
          50: "var(--primary-50)",
          40: "var(--primary-40)",
          30: "var(--primary-30)",
          20: "var(--primary-20)",
          10: "var(--primary-10)",
          5: "var(--primary-05)",
          3: "var(--primary-03)",
        },
        secondary: {
          100: "var(--secondary-100)",
          90: "var(--secondary-90)",
          80: "var(--secondary-80)",
          70: "var(--secondary-70)",
          60: "var(--secondary-60)",
          50: "var(--secondary-50)",
          40: "var(--secondary-40)",
          30: "var(--secondary-30)",
          20: "var(--secondary-20)",
          10: "var(--secondary-10)",
          5: "var(--secondary-05)",
        },
        red: {
          100: "var(--red-100)",
          90: "var(--red-90)",
          80: "var(--red-80)",
          70: "var(--red-70)",
          60: "var(--red-60)",
          50: "var(--red-50)",
          40: "var(--red-40)",
          30: "var(--red-30)",
          20: "var(--red-20)",
          10: "var(--red-10)",
          5: "var(--red-05)",
        },
        yellow: {
          100: "var(--yellow-100)",
          90: "var(--yellow-90)",
          80: "var(--yellow-80)",
          70: "var(--yellow-70)",
          60: "var(--yellow-60)",
          50: "var(--yellow-50)",
          40: "var(--yellow-40)",
          30: "var(--yellow-30)",
          20: "var(--yellow-20)",
          10: "var(--yellow-10)",
          5: "var(--yellow-05)",
        },
        green: {
          100: "var(--green-100)",
          90: "var(--green-90)",
          80: "var(--green-80)",
          70: "var(--green-70)",
          60: "var(--green-60)",
          50: "var(--green-50)",
          40: "var(--green-40)",
          30: "var(--green-30)",
          20: "var(--green-20)",
          10: "var(--green-10)",
          5: "var(--green-05)",
        },
        neutral: {
          100: "var(--neutral-100)",
          96: "var(--neutral-96)",
          92: "var(--neutral-92)",
          88: "var(--neutral-88)",
          84: "var(--neutral-84)",
          70: "var(--neutral-70)",
          60: "var(--neutral-60)",
          50: "var(--neutral-50)",
          40: "var(--neutral-40)",
          30: "var(--neutral-30)",
          20: "var(--neutral-20)",
          16: "var(--neutral-16)",
          12: "var(--neutral-12)",
          8: "var(--neutral-08)",
          0: "var(--neutral-00)",
        },
        // Utility Colors
        background: "hsl(var(--background))",
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          hover: "hsl(var(--foreground_hover))"
        },
        border_color: "hsl(var(--border_color))",
        primary_color: {
          DEFAULT: "hsl(var(--primary))",
          hover: "hsl(var(--primary-hover))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary_color: {
          DEFAULT: "hsl(var(--secondary))",
          hover: "hsl(var(--secondary-hover))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          hover: "hsl(var(--destructive-hover))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        disabled: {
          DEFAULT: "hsl(var(--disabled))",
          foreground: "hsl(var(--disabled-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
        },
      },
      screens: {
        'xs': {'max': '599px'},
        'sm': {'min': '600px', 'max': '904px'},
        'md': {'min': '905px', 'max': '1239px'},
        'lg': {'min': '1240px', 'max': '1439px'},
        'xl': {'min': '1440px'},
      },
      borderRadius: {
        lg: "var(--radius-20)",
        md: "var(--radius-12)",
        sm: "var(--radius-8)",
      },
      dropShadow:{
        
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      fontFamily: {
        "roboto": ["Roboto", "sans-serif"],
        "noto-mono-sans": ["Noto Sans Mono", "monospace"]
      },
      aspectRatio: {
        '4/3':'4 / 3',
        '3/2':'3 / 2',
        '3/4':'3 / 4',
      }
      },
    },
  plugins: [],
}