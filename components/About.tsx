'use client';

import { Card } from '@/components/ui/card';
import { Heart, BookOpen, Users } from 'lucide-react';

interface AboutProps {
  language: 'en' | 'am';
}

export default function About({ language }: AboutProps) {
  const values = [
    {
      icon: Heart,
      titleEn: 'Worship',
      titleAm: 'ምግባር',
      descEn: 'A place dedicated to worship and prayer',
      descAm: 'ምግባር እና ጸሎት በሚደረግበት ቦታ',
    },
    {
      icon: BookOpen,
      titleEn: 'Gospel Teaching',
      titleAm: 'ወንጌል ትምህርት',
      descEn: 'Sharing the message of Christ',
      descAm: 'ስለ ክርስቶስ ዜና መስፋት',
    },
    {
      icon: Users,
      titleEn: 'Community',
      titleAm: 'ማህበረሰብ',
      descEn: 'Building a strong faith community',
      descAm: 'ጠንካራ ሙሉ ማህበረሰብ መገንባት',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 animate-fadeInDown">
          {language === 'en' ? 'About Our Church' : 'ስለ ቤተክርስቲያንን'}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-12 rounded-full" />

        {/* Main Description */}
        <Card className="p-8 md:p-12 mb-12 bg-secondary/50 border border-blue-500/30 hover:border-blue-500/60 shadow-lg hover:shadow-blue-500/20 transition-all duration-300 backdrop-blur-sm animate-slideInLeft">
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            {language === 'en'
              ? 'Gospel Church is a Protestant church dedicated to the worship of God and the sharing of the Gospel of Jesus Christ. Founded and visioned by Prophet Temesgen Wogaso, our church serves as a beacon of faith, hope, and spiritual growth for our community.'
              : 'ወንጌል ቤተክርስቲያን የእግዚአብሔር ምግባር እና ስለ ለየሱስ ክርስቶስ ወንጌል መስፋት የሚታከል ፕሮቴስታንት ቤተክርስቲያን ነው። ነቢይ ተመስገን ወገሶ በመምራት፣ ቤተክርስቲያንን ሙሉ ስር ፀሎት እና ሙሉ ምግባር ቦታ አድርጋታለ።'}
          </p>

          <p className="text-lg text-foreground/90 leading-relaxed">
            {language === 'en'
              ? 'Under the prophetic vision and leadership of Prophet Temesgen Wogaso, we are committed to spreading the Gospel, fostering spiritual growth, and building a compassionate community of believers.'
              : 'በነቢይ ተመስገን ወገሶ ታሪካዊ ዓላማ ስር፣ እኛ ወንጌልን መስፋት፣ ሙሉ ምግባር መልካም አሠናውት እና ተስፋ ሙሉ ማህበረሰብ መገንባት ለመቆም ተጠርተናል።'}
          </p>
        </Card>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colors = [
              'from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20',
              'from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-purple-500/60 hover:shadow-purple-500/20',
              'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 hover:border-emerald-500/60 hover:shadow-emerald-500/20',
            ];
            return (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br ${colors[index]} border hover:shadow-xl transition-all duration-300 animate-scaleUp`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-accent/10 rounded-full">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {language === 'en' ? value.titleEn : value.titleAm}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {language === 'en' ? value.descEn : value.descAm}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
