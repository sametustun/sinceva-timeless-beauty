import React from 'react';
import Layout from '@/components/Layout';
import PageHero from '@/components/sections/PageHero';
import { Leaf, Heart, Award, Globe } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We believe every person deserves to feel beautiful and confident in their own skin.'
    },
    {
      icon: Leaf,
      title: 'Natural Excellence',
      description: 'Our products combine the best of nature with advanced skincare science.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Every product undergoes rigorous testing to ensure the highest quality standards.'
    },
    {
      icon: Globe,
      title: 'Sustainable Future',
      description: 'We are committed to sustainable practices and environmental responsibility.'
    },
  ];

  return (
    <Layout>
      <PageHero 
        title="About Sinceva"
        subtitle="Since Eva – the name that inspired our journey toward timeless beauty and elegance."
        backgroundImage="https://images.unsplash.com/photo-1570194071205-54f2c7f447d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
      />
      
      <div className="container mx-auto max-w-7xl px-4 py-16">

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg leading-relaxed">
            <h3 font-bold">The First Touch of Beauty</h3>
              <p>
                Sinceva was born from an ancient symbol: the apple. From the moment Eve reached out her hand, the apple has stood for beginnings curiosity, transformation, and the essence of beauty itself. For us, it is not only the fruit of a story; it is the root of our philosophy. Just as beauty began at that timeless moment, we believe true beauty begins with the first touch of skincare.
              </p>
            <h3 font-bold">A Timeless Heritage</h3>
              <p>
                We see the apple as more than nature’s gift it is a bridge between past and present. Its purity, vitality, and renewing power are woven into each formula, blending ancestral wisdom with modern cosmetic science. With Sinceva, skincare is not just a routine but a heritage of self-care, echoing the eternal journey of beauty through time.
              </p>
            <h3 font-bold">Guided by Our Mission</h3>
              <p>
                Our motto, “The Origin of Beauty,” carries a double truth. It honors humanity’s first story Since Eva and it reminds every woman that beauty starts not with makeup, but with the skin beneath. With every product, we reaffirm our mission: to protect, renew, and illuminate, so that beauty always begins at the right place, Since Eva, since the very first touch.
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
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Sustainability Section */}
        <div className="bg-muted rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Committed to Sustainability</h2>
          <div className="max-w-3xl mx-auto space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              At Sinceva, we recognize our responsibility to protect the environment for future generations. 
              Our sustainability initiatives include eco-friendly packaging, ethically sourced ingredients, 
              and partnerships with suppliers who share our commitment to environmental stewardship.
            </p>
            <p>
              We continuously strive to reduce our carbon footprint while maintaining the highest quality 
              standards. Because we believe that true beauty should never come at the expense of our planet's wellbeing.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
