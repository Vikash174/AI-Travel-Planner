const palette = {
  primary: '#0a7ea4',
  white: '#fff',
  black: '#000',
  gray: {
    100: '#ECEDEE',
    200: '#9BA1A6',
    300: '#687076',
    400: '#11181C',
  },
};

export const Colors = {
  light: {
    primary: palette.primary,
    background: palette.white,
    text: palette.gray[400],
    tint: palette.primary,
    tabIconDefault: palette.gray[300],
    tabIconSelected: palette.primary,
    icon: palette.gray[300],
    inputBorder: palette.gray[200],
  },
  dark: {
    primary: palette.primary,
    background: palette.black,
    text: palette.gray[100],
    tint: palette.white,
    tabIconDefault: palette.gray[200],
    tabIconSelected: palette.white,
    icon: palette.gray[200],
    inputBorder: palette.gray[300],
  },
};

type Theme = 'light' | 'dark';

export const getColors = (theme: Theme) => Colors[theme];