'use client';

import Image from 'next/image';
import { Card } from '@/components/ui/card';

interface LeaderSectionProps {
  language: 'en' | 'am';
}

export default function LeaderSection({ language }: LeaderSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {language === 'en' ? 'Our Leadership' : 'የእኛ መሪነት'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full">
            <Image
              src="/images/pastor-temesgen.jpg"
              alt="Prophet Temesgen Wogaso"
              fill
              className="object-cover rounded-lg shadow-xl"
            />
          </div>

          {/* Content */}
          <Card className="p-8 md:p-10 bg-card border-accent/30">
            <div className="mb-2">
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-semibold rounded-full">
                {language === 'en' ? 'Prophet' : 'ነቢይ'}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Prophet Temesgen Wogaso
            </h3>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {language === 'en'
                ? 'Prophet Temesgen Wogaso is the visionary founder and spiritual leader of Gospel Church. With a deep commitment to spreading the Gospel and nurturing believers, he provides prophetic guidance and pastoral care to our congregation.'
                : 'ነቢይ ተመስገን ወገሶ የወንጌል ቤተክርስቲያን ታሪካዊ ዓላማ እና መንፈሳዊ መሪ ነው። ወንጌልን መስፋት እና ሙሉ ምግባር በ ልባቸው፣ ወደ ቤተክርስቲያንም ነቢያዊ መመሪያ እና 牧ራ ሥራ ይሰጣሉ።'}
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {language === 'en'
                ? 'Under his prophetic leadership, our church continues to grow in faith, unity, and spiritual maturity. He is dedicated to equipping believers with biblical knowledge and fostering a loving community of worshippers.'
                : 'በውሎ ነቢያዊ መሪነት ስር፣ ቤተክርስቲያንን ሙሉ ምግባር፣ ተዋህዶ እና መንፈሳዊ ሟች የሚራመዱት። ሙሉ ምግባር በሌላ ሙሉ ዕውቀት መታጠቅ እና ሙሉ ምግባር ማህበረሰብ መገንባት ወደ ታሪካዊ ሥራ ሲሆን።'}
              </p>

            <div className="mt-8 pt-8 border-t border-border">
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">
                    {language === 'en' ? 'Title' : 'ሙታ'}
                  </p>
                  <p className="text-lg text-foreground">
                    {language === 'en'
                      ? 'Founder & Spiritual Leader'
                      : 'ስታ ተቋቋም እና መንፈሳዊ መሪ'}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">
                    {language === 'en' ? 'Mission' : 'ታሪካዊ ሥራ'}
                  </p>
                  <p className="text-lg text-foreground">
                    {language === 'en'
                      ? 'Sharing the Gospel & Spiritual Growth'
                      : 'ወንጌል መስፋት እና መንፈሳዊ ሟች'}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
