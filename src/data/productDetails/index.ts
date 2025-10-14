import { productDetailsTR } from './tr';
import { productDetailsEN } from './en';
import { productDetailsAR } from './ar';
import { ProductDetailsMap } from './types';

export type SupportedLanguage = 'tr' | 'en' | 'ar';

export const productDetails: Record<SupportedLanguage, ProductDetailsMap> = {
  tr: productDetailsTR,
  en: productDetailsEN,
  ar: productDetailsAR
};

export * from './types';
