import { trBlogContent } from './tr';
import { trBlogContentPart2 } from './tr-part2';
import { trBlogContentPart3 } from './tr-part3';
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
  tr: { ...trBlogContent, ...trBlogContentPart2, ...trBlogContentPart3 },
  en: enBlogContent,
  ar: arBlogContent
};

export const getBlogContent = (language: 'tr' | 'en' | 'ar', postId: string): BlogContent | null => {
  return blogContent[language]?.[postId] || null;
};
