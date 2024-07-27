/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        Tint: {
          50: "#FFFFFF",
          100: "#F6EAEB",
          200: "#EDD5D8",
          300: "#E5C1C4",
          400: "#DCACB1",
          500: "#CA8289",
          600: "#B95962",
        },
      Shade: {
          50: "#86262F",
          100: "#641C23",
          200: "#431318",
          300: "#320E12",
          400: "#21090C",
          500: "#110506",
          600: "#000000",
        },
          Neutral: {
          50: "#F8F8F8",
          100: "#F0F0F0",
          200: "#EDEDED",
          300: "#D6D6D6",
          400: "#CBCBCB",
          500: "#AFAFAF",
          600: "#898989",
          700: "#656565",
          800: "#641C23",
          900: "#242424",
        },
        'Primary': '#A72F3B',
        'Error': '#C30000',
        'E/Light': '#ED2E2E',
        'Warning': '#A9791C',
        'W/Light': '#F4B740',
        'Success': '#00966D',
        'S/Light': '#00BA88',
        'E/BG': '#FFF2F2',
        'W/BG': '#FFF8E1',
        'S/BG': '#F3FDFA',
      },
      fontSize: {
        'Heading':  ['2.75rem', {
          lineHeight: '3.818rem',
          fontWeight: '700',
        }],
        'Heading1':  ['2.5rem', {
          lineHeight: '3.5rem',
          fontWeight: '700',
        }],
        'Heading2':  ['2rem', {
          lineHeight: '2.775rem',
          fontWeight: '700',
        }],
        'Heading3':  ['1.5rem', {
          lineHeight: '2.1rem',
          fontWeight: '700',
        }],
        'Heading4':  ['1.25rem', {
          lineHeight: '1.75rem',
          fontWeight: '700',
        }],
        'Heading5':  ['1.125rem', {
          lineHeight: '1.575rem',
          fontWeight: '700',
        }],
        'Body': ['1.25rem', {
          lineHeight: '2.25rem',
          fontWeight: '400',
        }],
        'Body1': ['1.125rem', {
          lineHeight: '2rem',
          fontWeight: '400',
        }],
        'Body2': ['1rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
        'Body3': ['.875rem', {
          lineHeight: '1.600rem',
          fontWeight: '400',
        }],
        'Body4': ['.75rem', {
          lineHeight: '1.35rem',
          fontWeight: '400',
        }],
        'Body5': ['.75rem', {
          lineHeight: '1.35rem',
          fontWeight: '300',
        }],
        'Caption': ['.875rem', {
          lineHeight: '1.575rem',
          fontWeight: '700',
        }],
        'Caption1': ['.75rem', {
          lineHeight: '1.35rem',
          fontWeight: '400',
        }],
        'Caption2': ['.625rem', {
          lineHeight: '1.125rem',
          fontWeight: '700',
        }],
        'Caption3': ['.625rem', {
          lineHeight: '1.125rem',
          fontWeight: '400',
        }],
        'Button': ['1rem', {
          lineHeight: '1.8rem',
          fontWeight: '500',
        }],
        'Button1': ['.875rem', {
          lineHeight: '1.5rem',
          fontWeight: '500',
        }],
        'Overline': ['1rem', {
          lineHeight: '1.8rem',
          fontWeight: '400',
        }],
        'Overline1': ['.75rem', {
          lineHeight: '1.4rem',
          fontWeight: '700',
        }],
        'Underline': ['1rem', {
          lineHeight: '1.75rem',
          fontWeight: '400',
        }],
        'Underline1': ['.75rem', {
          lineHeight: '1.35rem',
          fontWeight: '700',
        }],
        'Underline2': ['.625rem', {
          lineHeight: '1.1rem',
          fontWeight: '300',
        }],
      },
      fontFamily: {
        'IRANSansX': ["IRANSansX"]
      },
    },
  },
  plugins: [],
};
