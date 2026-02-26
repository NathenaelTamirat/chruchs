'use client';

import { Card } from '@/components/ui/card';
import { Facebook, Youtube, Send, Mail } from 'lucide-react';

interface SocialMediaProps {
  language: 'en' | 'am';
}

const socialLinks = [
  {
    name: 'Facebook',
    icon: Facebook,
    url: 'https://facebook.com',
    color: 'hover:text-blue-600',
  },
  {
    name: 'YouTube',
    icon: Youtube,
    url: 'https://youtube.com',
    color: 'hover:text-red-600',
  },
  {
    name: 'Telegram',
    icon: Send,
    url: 'https://telegram.org',
    color: 'hover:text-blue-500',
  },
  {
    name: 'Email',
    icon: Mail,
    url: 'mailto:info@gospelchurch.com',
    color: 'hover:text-orange-600',
  },
];

export default function SocialMedia({ language }: SocialMediaProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-foreground">
          {language === 'en' ? 'Connect With Us' : 'ከእኛ ጋር ያገናኙ'}
        </h2>
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Follow us on social media for updates, messages, and community news.'
            : 'ለወቅታዊ መረጃ፣ መልእክቶች እና ማህበረሰብ ጫዋታዎች ፌስቡክ ይከተሉ።'}
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
              >
                <Card className="p-8 bg-card border-accent/30 hover:border-accent hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-center h-full">
                  <Icon className={`w-12 h-12 text-foreground/60 group-hover:scale-110 transition-transform duration-300 ${social.color}`} />
                  <p className="mt-4 text-foreground font-semibold text-center">{social.name}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 md:p-12 bg-gradient-to-r from-accent/10 to-accent/5 border-accent/30">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'en' ? 'Stay Updated' : 'ወቅታዊ ይስሙ'}
            </h3>
            <p className="text-foreground/70 mb-6">
              {language === 'en'
                ? 'Subscribe to our newsletter for weekly messages and updates.'
                : 'ለ ሳምንታዊ መልእክቶች እና ወቅታዊ መረጃ ይመዝገቡ።'}
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={language === 'en' ? 'Your email address' : 'የእርስዎ ኢሜይል አድራሻ'}
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-accent text-foreground"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-semibold whitespace-nowrap"
              >
                {language === 'en' ? 'Subscribe' : 'ይመዝገቡ'}
              </button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
