export interface BlogPost {
  id: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'morning-skincare-routine',
    date: '2024-03-15',
    author: 'Dr. Ayşe Demir',
    readTime: '5',
    category: 'daily-care',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'vitamin-c-benefits',
    date: '2024-03-10',
    author: 'Dr. Mehmet Yılmaz',
    readTime: '7',
    category: 'ingredients',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'summer-sun-protection',
    date: '2024-03-05',
    author: 'Dr. Zeynep Kaya',
    readTime: '6',
    category: 'sun-care',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'night-cream-importance',
    date: '2024-02-28',
    author: 'Dr. Ayşe Demir',
    readTime: '5',
    category: 'night-care',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'eye-cream-guide',
    date: '2024-02-22',
    author: 'Dr. Can Öztürk',
    readTime: '6',
    category: 'eye-care',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'arbutin-skin-brightening',
    date: '2024-02-18',
    author: 'Dr. Mehmet Yılmaz',
    readTime: '8',
    category: 'ingredients',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'chemical-peeling-guide',
    date: '2024-02-12',
    author: 'Dr. Zeynep Kaya',
    readTime: '9',
    category: 'treatments',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hydration-secrets',
    date: '2024-02-08',
    author: 'Dr. Ayşe Demir',
    readTime: '5',
    category: 'hydration',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'anti-aging-strategies',
    date: '2024-02-02',
    author: 'Dr. Can Öztürk',
    readTime: '10',
    category: 'anti-aging',
    image: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'toner-benefits',
    date: '2024-01-28',
    author: 'Dr. Mehmet Yılmaz',
    readTime: '4',
    category: 'cleansing',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'winter-skincare-tips',
    date: '2024-01-22',
    author: 'Dr. Zeynep Kaya',
    readTime: '7',
    category: 'seasonal',
    image: 'https://images.unsplash.com/photo-1609690409547-ba5d5f60c3c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'acne-prone-skin-care',
    date: '2024-01-18',
    author: 'Dr. Ayşe Demir',
    readTime: '8',
    category: 'problem-skin',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'double-cleansing-method',
    date: '2024-01-12',
    author: 'Dr. Can Öztürk',
    readTime: '6',
    category: 'cleansing',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'retinol-beginners-guide',
    date: '2024-01-08',
    author: 'Dr. Mehmet Yılmaz',
    readTime: '9',
    category: 'ingredients',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sensitive-skin-solutions',
    date: '2024-01-02',
    author: 'Dr. Zeynep Kaya',
    readTime: '7',
    category: 'problem-skin',
    image: 'https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'skin-types-guide',
    date: '2023-12-28',
    author: 'Dr. Ayşe Demir',
    readTime: '6',
    category: 'basics',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'hyaluronic-acid-power',
    date: '2023-12-22',
    author: 'Dr. Can Öztürk',
    readTime: '5',
    category: 'ingredients',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'sheet-mask-secrets',
    date: '2023-12-18',
    author: 'Dr. Mehmet Yılmaz',
    readTime: '4',
    category: 'treatments',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'spf-importance',
    date: '2023-12-12',
    author: 'Dr. Zeynep Kaya',
    readTime: '6',
    category: 'sun-care',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'evening-routine-essentials',
    date: '2023-12-08',
    author: 'Dr. Ayşe Demir',
    readTime: '7',
    category: 'daily-care',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=800&q=80'
  }
];
