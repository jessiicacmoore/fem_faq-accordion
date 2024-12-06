export const theme = {
  colors: {
    primary: '#a92be5',
    secondary: '#f9eeff',
    text: '#331537',
    gray: '#8f898e',
    lightGray: '#f0f0f0',
    white: '#fff',
  },
  font: {
    familyPrimary: '"Work Sans", sans-serif',
    weightBody: 400,
    weightHeading: 700,
    weightAccordionButton: 600,
    sizeAccordionButton: '1.125rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    round: '50%',
  },
  shadow: {
    lg: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  },
};

export type ThemeType = typeof theme;
