import React from 'react';
import { useLanguage, Language } from '@/contexts/LanguageContext';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface LanguageSelectorProps {
  isScrolled: boolean;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ isScrolled }) => {
  const { language, setLanguage } = useLanguage();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'en', label: 'English', flag: '🇬🇧' },
    { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
    { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  ];

  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button
          className={`flex items-center space-x-1 p-2 transition-all duration-500 ${
            !isScrolled 
              ? 'text-white hover:text-[hsl(var(--hover))]' 
              : 'text-[#191919] hover:text-[hsl(var(--hover))]'
          }`}
          aria-label="Select Language"
        >
          <span className="text-base">
            {currentLanguage?.flag}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-40 bg-white z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`cursor-pointer ${language === lang.code ? 'bg-accent' : ''}`}
          >
            <span className="mr-2 text-lg">{lang.flag}</span>
            {lang.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageSelector;
