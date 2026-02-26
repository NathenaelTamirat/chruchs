'use client';

import { MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface LocationProps {
  language: 'en' | 'am';
}

export default function Location({ language }: LocationProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {language === 'en' ? 'Visit Us' : 'ማንኞን ይጎብኙ'}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96 md:h-full">
            <iframe
              width="100%"
              height="100%"
              frameBorder="0"
              title="Church Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7066379283427!2d38.74889!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNDguMCJOIDM4wrA0NCc1My43IkU!5e0!3m2!1sen!2set!4v1234567890"
              allowFullScreen={true}
              loading="lazy"
            />
          </div>

          {/* Information */}
          <div className="flex flex-col justify-center gap-6">
            <Card className="p-6 bg-card border-accent/30">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">
                    {language === 'en' ? 'Address' : 'አድራሻ'}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Gospel Church
                    <br />
                    Addis Ababa, Ethiopia
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-accent/30">
              <h3 className="text-lg font-bold text-foreground mb-4">
                {language === 'en' ? 'Directions' : 'አቅጣጫዎች'}
              </h3>
              <a
                href="https://www.google.com/maps/search/Gospel+Church+Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium"
              >
                {language === 'en' ? 'Get Directions' : 'አቅጣጫ ያግኙ'}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
              </a>
            </Card>

            <Card className="p-6 bg-accent/5 border-accent/30">
              <p className="text-sm text-foreground/70">
                {language === 'en'
                  ? 'We welcome all visitors. Please feel free to join us for any of our services.'
                  : 'ሁሉንም እንኩዋን ብንደነበገ ታዘብዋለን። በማንኛውም ወክትዮቻችን ተካፍል።'}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
