import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Search } from 'lucide-react';

interface SeoData {
  title: { tr: string; en: string; ar: string };
  description: { tr: string; en: string; ar: string };
  keywords: { tr: string; en: string; ar: string };
}

interface SeoFieldsProps {
  seo: SeoData;
  onChange: (seo: SeoData) => void;
}

const emptySeo: SeoData = {
  title: { tr: '', en: '', ar: '' },
  description: { tr: '', en: '', ar: '' },
  keywords: { tr: '', en: '', ar: '' },
};

export default function SeoFields({ seo = emptySeo, onChange }: SeoFieldsProps) {
  const handleChange = (field: 'title' | 'description' | 'keywords', lang: 'tr' | 'en' | 'ar', value: string) => {
    const newSeo = {
      ...seo,
      [field]: {
        ...seo[field],
        [lang]: value,
      },
    };
    onChange(newSeo);
  };

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-base flex items-center gap-2">
          <Search className="h-4 w-4" />
          SEO Ayarları
        </CardTitle>
        <CardDescription>
          Arama motorları için meta etiketlerini düzenleyin
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="tr">
          <TabsList className="grid w-full grid-cols-3 mb-4">
            <TabsTrigger value="tr">Türkçe</TabsTrigger>
            <TabsTrigger value="en">English</TabsTrigger>
            <TabsTrigger value="ar">العربية</TabsTrigger>
          </TabsList>
          
          {(['tr', 'en', 'ar'] as const).map((lang) => (
            <TabsContent key={lang} value={lang} className="space-y-4">
              <div className="space-y-2">
                <Label className="text-sm">
                  SEO Başlık ({lang.toUpperCase()})
                  <span className="text-muted-foreground ml-2 text-xs">
                    ({(seo?.title?.[lang] || '').length}/60)
                  </span>
                </Label>
                <Input
                  value={seo?.title?.[lang] || ''}
                  onChange={(e) => handleChange('title', lang, e.target.value)}
                  placeholder="Sayfa başlığı (60 karakter önerilir)"
                  maxLength={70}
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm">
                  Meta Açıklama ({lang.toUpperCase()})
                  <span className="text-muted-foreground ml-2 text-xs">
                    ({(seo?.description?.[lang] || '').length}/160)
                  </span>
                </Label>
                <Textarea
                  value={seo?.description?.[lang] || ''}
                  onChange={(e) => handleChange('description', lang, e.target.value)}
                  placeholder="Sayfa açıklaması (160 karakter önerilir)"
                  rows={2}
                  maxLength={200}
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                />
              </div>
              
              <div className="space-y-2">
                <Label className="text-sm">
                  Anahtar Kelimeler ({lang.toUpperCase()})
                </Label>
                <Input
                  value={seo?.keywords?.[lang] || ''}
                  onChange={(e) => handleChange('keywords', lang, e.target.value)}
                  placeholder="kelime1, kelime2, kelime3"
                  dir={lang === 'ar' ? 'rtl' : 'ltr'}
                />
                <p className="text-xs text-muted-foreground">
                  Virgülle ayırarak yazın
                </p>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
