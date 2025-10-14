export interface FAQ {
  question: string;
  answer: string;
}

export interface ProductDetail {
  productId: number;
  details: string;
  ingredients: string;
  howToUse: string;
  faqs: FAQ[];
}

export type ProductDetailsMap = {
  [productId: number]: ProductDetail;
};
