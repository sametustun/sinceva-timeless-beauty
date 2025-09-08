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
              <p>
                Sinceva was born from a simple yet profound belief: beauty is timeless, and everyone deserves 
                to feel confident in their own skin. Our name, "Since Eva," pays homage to the very essence 
                of femininity and the eternal pursuit of beauty that has captivated humanity since the beginning of time.
              </p>
              <p>
                Founded with a passion for excellence and innovation, Sinceva combines cutting-edge skincare 
                science with the finest natural ingredients. We understand that true beauty comes from within, 
                but the right skincare routine can enhance and celebrate your natural radiance.
              </p>
              <p>
                Every product in our collection is carefully formulated to address specific skin concerns while 
                maintaining the delicate balance that healthy skin requires. From our anti-aging serums to our 
                gentle cleansers, each formula is a testament to our commitment to quality and effectiveness.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl">
              <div className="absolute inset-8 bg-muted rounded-xl shadow-elegant" />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="text-center mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              To empower individuals on their journey to beautiful, healthy skin through innovative, 
              sustainable, and effective skincare solutions. We believe that skincare is not just about 
              appearance – it's about self-care, confidence, and embracing your authentic beauty.
            </p>
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