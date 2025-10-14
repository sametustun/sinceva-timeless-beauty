import React from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Leaf, Heart, Award, Globe } from 'lucide-react';
import toobBanner from '@/assets/toob_banner.jpg';
import toobBannerMobile from '@/assets/toob_banner_mobile.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  
  const values = [
    {
      icon: Heart,
      title: t.passionForBeauty,
      description: t.passionDesc
    },
    {
      icon: Leaf,
      title: t.naturalExcellence,
      description: t.naturalDesc
    },
    {
      icon: Award,
      title: t.qualityFirst,
      description: t.qualityDesc
    },
    {
      icon: Globe,
      title: t.sustainableFuture,
      description: t.sustainableDesc
    },
  ];

  return (
    <Layout>
      <PageHero 
        title={t.aboutSinceva}
        subtitle={t.aboutSubtitle}
        backgroundImage={toobBanner}
        backgroundImageMobile={toobBannerMobile}
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">{t.ourStory}</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <h3 className="font-bold">{t.firstTouchTitle}</h3>
              <p>
                {t.firstTouchText}
              </p>
            <h3 className="font-bold">{t.timelessHeritageTitle}</h3>
              <p>
                {t.timelessHeritageText}
              </p>
            <h3 className="font-bold">{t.guidedByMissionTitle}</h3>
              <p>
                {t.guidedByMissionText}
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
              <div className="absolute inset-8 bg-muted rounded-xl shadow-elegant" />
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">{t.ourValues}</h2>
...
        </div>

        {/* Sustainability Section */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">{t.committedToSustainability}</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              {t.sustainabilityText1}
            </p>
            <p>
              {t.sustainabilityText2}
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
