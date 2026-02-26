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
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-orange-500/5 via-background to-yellow-500/5">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600 animate-fadeInDown">
          {language === 'en' ? 'Connect With Us' : 'ከእኛ ጋር ያገናኙ'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-12 rounded-full" />
        <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">
          {language === 'en'
            ? 'Follow us on social media for updates, messages, and community news.'
            : 'ለወቅታዊ መረጃ፣ መልእክቶች እና ማህበረሰብ ጫዋታዎች ፌስቡክ ይከተሉ።'}
        </p>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const colors = [
              'from-blue-500/20 to-blue-500/5 border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20',
              'from-red-500/20 to-red-500/5 border-red-500/30 hover:border-red-500/60 hover:shadow-red-500/20',
              'from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20',
              'from-orange-500/20 to-orange-500/5 border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/20',
            ];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-scaleUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className={`p-8 bg-gradient-to-br ${colors[index]} border-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center h-full`}>
                  <Icon className={`w-12 h-12 group-hover:scale-125 transition-transform duration-300 ${social.color}`} />
                  <p className="mt-4 text-foreground font-bold text-center">{social.name}</p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-8 md:p-12 bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/20 border-2 border-orange-500/30 hover:border-orange-500/60 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all animate-slideInUp">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
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
                className="px-6 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all font-bold whitespace-nowrap"
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
