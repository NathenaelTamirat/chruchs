'use client';

import { Card } from '@/components/ui/card';
import { Clock } from 'lucide-react';

interface ScheduleProps {
  language: 'en' | 'am';
}

const schedule = [
  {
    dayEn: 'Sunday',
    dayAm: 'እሁድ',
    timeEn: 'All Day',
    timeAm: 'ሙሉ ቀን',
  },
  {
    dayEn: 'Wednesday',
    dayAm: 'ሮብ',
    timeEn: '4:00 PM - 9:00 PM (EAT)',
    timeAm: '4:00 PM - 9:00 PM (EAT)',
  },
  {
    dayEn: 'Saturday',
    dayAm: 'ቅዳሜ',
    timeEn: '4:00 PM - 9:00 PM (EAT)',
    timeAm: '4:00 PM - 9:00 PM (EAT)',
  },
];

export default function Schedule({ language }: ScheduleProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {language === 'en' ? 'Program Schedule' : 'የክወናት ሰንጠረዥ'}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-accent/30 hover:border-accent hover:shadow-lg transition-all duration-300 group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Clock className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {language === 'en' ? item.dayEn : item.dayAm}
                </h3>
              </div>

              <p className="text-lg text-foreground/80 font-semibold">
                {language === 'en' ? item.timeEn : item.timeAm}
              </p>

              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm text-foreground/60">
                  {language === 'en' ? 'East African Time' : 'የጫት አፍሪካ ሰዓት'}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Important Note */}
        <Card className="mt-12 p-6 bg-accent/5 border-accent/30">
          <p className="text-sm text-foreground/70 text-center">
            {language === 'en'
              ? 'Please check with the church for any schedule changes or special events.'
              : 'ማንኛውም ጊዜ ለውጥ ወይም ልዩ ክወናቶች ላይ ቤተክርስቲያንን ያሳውቁ።'}
          </p>
        </Card>
      </div>
    </section>
  );
}
