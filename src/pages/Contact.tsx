import React, { useState } from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import contactBanner from '@/assets/contact_banner.jpg';
import contactBannerMobile from '@/assets/contact_banner_mobile.jpg';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/data/translations';

const Contact: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Here you would integrate with your backend to send the email to info@sinceva.com
      // For now, we'll just show a success message
      console.log('Form submitted:', formData);
      
      toast({
        title: t.messageSentSuccess,
        description: t.messageSentDesc,
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: t.address,
      content: t.addressContent
    },
    {
      icon: Phone,
      title: t.phone,
      content: t.phoneContent
    },
    {
      icon: Mail,
      title: t.email,
      content: t.emailContent
    },
    {
      icon: Clock,
      title: t.businessHours,
      content: t.hoursContent
    },
  ];

  return (
    <Layout>
      <PageHero 
        title={t.contactUs}
        subtitle={t.contactSubtitle}
        backgroundImage={contactBanner}
        backgroundImageMobile={contactBannerMobile}
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold mb-8">{t.sendMessage}</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.fullName} *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    placeholder={t.enterFullName}
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.emailAddress} *
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder={t.enterEmailPlaceholder}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  {t.subject} *
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder={t.subjectPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.message} *
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  placeholder={t.messagePlaceholder}
                  className="min-h-[120px]"
                />
              </div>

              <Button type="submit" className="w-full">
                {t.sendMessageBtn}
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <h2 className="text-2xl font-semibold">{t.getInTouch}</h2>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{info.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4">{t.visitStore}</h3>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p>{t.interactiveMap}</p>
                  <p className="text-sm">{t.mapIntegration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;