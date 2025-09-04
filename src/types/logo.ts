// Logo configuration types for admin panel management
export interface LogoConfig {
  desktop: {
    white: string;
    black: string;
  };
  mobile: {
    white: string;
    black: string;
  };
  fallback: {
    text: string;
    showText: boolean;
  };
}

export type LogoType = 'desktop-white' | 'desktop-black' | 'mobile-white' | 'mobile-black';

export interface LogoState {
  isLoading: boolean;
  hasError: boolean;
  currentLogo: string | null;
}