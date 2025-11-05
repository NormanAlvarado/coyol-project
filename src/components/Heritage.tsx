import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const Heritage = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="heritage" className="py-20 bg-wine text-cream relative overflow-hidden">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(212, 175, 55, 0.1) 35px, rgba(212, 175, 55, 0.1) 70px)`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-gold mb-4">
            {t('heritage.title')}
          </h2>
          <p className="text-xl font-noto text-cream/80">{t('heritage.subtitle')}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Palm Tree Image */}
            <div className="relative mb-12">
              <img
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2913"
                alt="Coyol Palm Tree"
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine via-transparent to-transparent rounded-lg" />
            </div>

            {/* Heritage Text */}
            <div className="bg-wine/40 backdrop-blur-sm rounded-lg p-8 border border-gold/20">
              <p className="text-lg font-playfair leading-relaxed mb-6 text-center">
                {t('heritage.description1')}
              </p>
              <p className="text-lg font-playfair leading-relaxed mb-6 text-center">
                {t('heritage.description2')}
              </p>
              <div className="border-t border-gold/30 pt-6 mt-6">
                <p className="text-lg font-playfair leading-relaxed text-center italic text-gold">
                  {t('heritage.description3')}
                </p>
              </div>
            </div>

            {/* Decorative Quote */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-center py-8"
            >
              <div className="inline-block relative">
                <div className="text-6xl text-gold/30 font-playfair absolute -top-8 -left-4">"</div>
                <p className="text-2xl font-playfair italic text-cream px-8">
                  Where tradition meets excellence
                </p>
                <div className="text-6xl text-gold/30 font-playfair absolute -bottom-8 -right-4">"</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 border border-gold/20 rounded-full" />
      <div className="absolute bottom-10 right-10 w-24 h-24 border border-gold/20 rounded-full" />
    </section>
  );
};

export default Heritage;
