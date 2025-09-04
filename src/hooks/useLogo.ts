import { useState, useEffect } from 'react';
import { LogoConfig, LogoType, LogoState } from '../types/logo';
import { logoContent } from '../data/content';

export const useLogo = (logoType: LogoType) => {
  const [logoState, setLogoState] = useState<LogoState>({
    isLoading: true,
    hasError: false,
    currentLogo: null
  });

  useEffect(() => {
    const loadLogo = () => {
      try {
        let logoUrl: string;
        
        switch (logoType) {
          case 'desktop-white':
            logoUrl = logoContent.desktop.white;
            break;
          case 'desktop-black':
            logoUrl = logoContent.desktop.black;
            break;
          case 'mobile-white':
            logoUrl = logoContent.mobile.white;
            break;
          case 'mobile-black':
            logoUrl = logoContent.mobile.black;
            break;
          default:
            throw new Error('Invalid logo type');
        }

        // If logo URL is empty or placeholder, show fallback
        if (!logoUrl || logoUrl.includes('placeholder') || logoUrl === '') {
          setLogoState({
            isLoading: false,
            hasError: false,
            currentLogo: null
          });
          return;
        }

        // Test if image loads successfully
        const img = new Image();
        img.onload = () => {
          setLogoState({
            isLoading: false,
            hasError: false,
            currentLogo: logoUrl
          });
        };
        img.onerror = () => {
          setLogoState({
            isLoading: false,
            hasError: true,
            currentLogo: null
          });
        };
        img.src = logoUrl;

      } catch (error) {
        setLogoState({
          isLoading: false,
          hasError: true,
          currentLogo: null
        });
      }
    };

    loadLogo();
  }, [logoType]);

  return logoState;
};

export const useLogos = () => {
  const desktopWhite = useLogo('desktop-white');
  const desktopBlack = useLogo('desktop-black');
  const mobileWhite = useLogo('mobile-white');
  const mobileBlack = useLogo('mobile-black');

  return {
    desktop: {
      white: desktopWhite,
      black: desktopBlack
    },
    mobile: {
      white: mobileWhite,
      black: mobileBlack
    }
  };
};