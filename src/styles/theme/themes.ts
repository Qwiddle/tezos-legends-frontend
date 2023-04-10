export type Theme = {
  primary: string;
  brand: string;
  brandHover: string;
  brandGradient: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  background: string;
  backgroundVariant: string;
  backgroundGradient: string;
  border: string;
  borderLight: string;
  green: string;
};

const darkTheme: Theme = {
  primary: 'rgba(28, 28, 40, 1)',
  brand: 'rgba(105, 102, 255, 1)',
  brandHover: 'rgba(123, 120, 255, 1)',
  brandGradient: `
    linear-gradient(325.79deg, #6966FF 24.5%, rgba(105, 102, 255, 0.36) 117.69%)
  `,
  borderLight: 'rgba(241, 233, 231, 0.05)',
  text: 'rgba(250, 249, 246, 1)',
  textSecondary: 'rgba(200, 199, 216, 1)',
  textTertiary: 'rgba(165, 158, 186, 1)',
  background: 'rgba(28, 28, 40, 1)',
  backgroundVariant: 'rgba(57, 57, 83, 1)',
  backgroundGradient: `
    linear-gradient(193.53deg, #2C2C3D -7.66%, #1A1A27 79.5%);
  `,
  border: `
    linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%); 
    background-blend-mode: soft-light;
  `,
  green: 'rgba(22, 181, 127, 1)',
};

export const themes = {
  light: darkTheme,
  dark: darkTheme,
};
