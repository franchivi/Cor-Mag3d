/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./*.html",
    "./stitch_screens/**/*.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "surface-container-high": "#2a2a2a",
        "on-secondary-fixed": "#261900",
        "on-tertiary-fixed-variant": "#44474c",
        "surface-container-lowest": "#0e0e0e",
        "primary-container": "#9e0000",
        "on-error": "#690005",
        "on-tertiary": "#2d3135",
        "on-secondary-container": "#dab36a",
        "secondary": "#e9c176",
        "surface-variant": "#353534",
        "tertiary-container": "#494c51",
        "secondary-fixed-dim": "#e9c176",
        "secondary-fixed": "#ffdea5",
        "on-surface-variant": "#e4beb8",
        "surface-container": "#201f1f",
        "secondary-container": "#604403",
        "primary-fixed": "#ffdad4",
        "tertiary-fixed-dim": "#c4c6cc",
        "error-container": "#93000a",
        "surface-bright": "#393939",
        "surface-dim": "#131313",
        "surface-container-highest": "#353534",
        "background": "#131313",
        "inverse-primary": "#b91d11",
        "on-tertiary-fixed": "#191c20",
        "on-primary-fixed": "#410000",
        "surface-tint": "#ffb4a8",
        "outline": "#ab8983",
        "on-tertiary-container": "#bbbdc3",
        "surface-container-low": "#1c1b1b",
        "on-primary-container": "#ffa698",
        "error": "#ffb4ab",
        "outline-variant": "#5b403c",
        "surface": "#131313",
        "on-surface": "#e5e2e1",
        "tertiary": "#c4c6cc",
        "on-background": "#e5e2e1",
        "primary-fixed-dim": "#ffb4a8",
        "on-primary-fixed-variant": "#930000",
        "on-error-container": "#ffdad6",
        "on-primary": "#690000",
        "primary": "#ffb4a8",
        "on-secondary": "#412d00",
        "inverse-on-surface": "#313030",
        "on-secondary-fixed-variant": "#5d4201",
        "inverse-surface": "#e5e2e1",
        "tertiary-fixed": "#e1e2e9"
      },
      "spacing": {
        "margin": "48px",
        "container-max": "1440px",
        "unit": "8px",
        "gutter": "24px"
      },
      "fontFamily": {
        "body-md": ["Be Vietnam Pro"],
        "label-sm": ["Space Grotesk"],
        "body-lg": ["Be Vietnam Pro"],
        "headline-md": ["Space Grotesk"],
        "display-xl": ["Space Grotesk"],
        "headline-lg": ["Space Grotesk"]
      },
      "fontSize": {
        "body-md": ["16px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "label-sm": ["12px", {"lineHeight": "1.0", "fontWeight": "700"}],
        "body-lg": ["18px", {"lineHeight": "1.6", "fontWeight": "400"}],
        "headline-md": ["24px", {"lineHeight": "1.3", "letterSpacing": "0.02em", "fontWeight": "600"}],
        "display-xl": ["64px", {"lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700"}],
        "headline-lg": ["40px", {"lineHeight": "1.2", "letterSpacing": "0.05em", "fontWeight": "700"}]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
