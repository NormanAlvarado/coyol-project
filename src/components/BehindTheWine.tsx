import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const BehindTheWine = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="behind-the-wine" className="py-12 sm:py-16 lg:py-20 bg-wine text-cream relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-10"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-3 sm:mb-4 px-4">
            {t('behindTheWine.title')}
          </h2>
        </motion.div>

        {/* Oda/Párrafo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-wine/40 backdrop-blur-sm rounded-lg p-8 sm:p-10 lg:p-12 border border-gold/30">
            <p className="text-lg sm:text-xl lg:text-2xl font-playfair leading-relaxed text-center italic text-cream/95">
              {t('behindTheWine.ode')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BehindTheWine;
