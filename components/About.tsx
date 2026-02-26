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
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {language === 'en' ? 'About Our Church' : 'ስለ ቤተክርስቲያንን'}
        </h2>

        {/* Main Description */}
        <Card className="p-8 md:p-12 mb-12 bg-secondary border-accent/30">
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
            return (
              <Card
                key={index}
                className="p-6 bg-card border-accent/20 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
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
