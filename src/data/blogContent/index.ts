import { trBlogContent } from './tr';
import { enBlogContent } from './en';
import { arBlogContent } from './ar';

export interface BlogContent {
  title: string;
  excerpt: string;
  content: string;
}

export interface BlogContentMap {
  [key: string]: BlogContent;
}

export const blogContent: Record<'tr' | 'en' | 'ar', BlogContentMap> = {
  tr: trBlogContent,
  en: enBlogContent,
  ar: arBlogContent
};

export const getBlogContent = (language: 'tr' | 'en' | 'ar', postId: string): BlogContent | null => {
  return blogContent[language]?.[postId] || null;
};
