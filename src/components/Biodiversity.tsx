import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Leaf } from 'lucide-react';

const Biodiversity = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const commitments = [
    {
      titleKey: 'biodiversity.commitments.sustainable.title',
      descKey: 'biodiversity.commitments.sustainable.description',
    },
    {
      titleKey: 'biodiversity.commitments.carbon.title',
      descKey: 'biodiversity.commitments.carbon.description',
    },
    {
      titleKey: 'biodiversity.commitments.reforestation.title',
      descKey: 'biodiversity.commitments.reforestation.description',
    },
    {
      titleKey: 'biodiversity.commitments.renewable.title',
      descKey: 'biodiversity.commitments.renewable.description',
    },
  ];

  return (
    <section id="biodiversity" className="py-12 sm:py-16 lg:py-20 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <Leaf className="w-12 h-12 sm:w-16 sm:h-16 text-gold mx-auto mb-4" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-3 sm:mb-4 px-4">
            {t('biodiversity.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-noto text-cream/80 px-4 max-w-3xl mx-auto">
            {t('biodiversity.subtitle')}
          </p>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto mb-12 sm:mb-16"
        >
          <div className="bg-sophisticated/50 rounded-lg p-6 sm:p-8 border border-gold/20">
            <p className="text-base sm:text-lg font-noto leading-relaxed text-center mb-4 text-cream">
              {t('biodiversity.intro.paragraph1')}
            </p>
            <p className="text-base sm:text-lg font-noto leading-relaxed text-center text-cream/90">
              {t('biodiversity.intro.paragraph2')}
            </p>
          </div>
        </motion.div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gold mb-6 sm:mb-8 text-center">
            {t('biodiversity.commitmentsTitle')}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {commitments.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-sophisticated rounded-lg p-6 border border-gold/30 hover:border-gold/50 transition-all duration-300"
              >
                <h4 className="text-lg sm:text-xl font-playfair font-bold text-gold mb-3">
                  {t(commitment.titleKey)}
                </h4>
                <p className="text-sm sm:text-base font-noto text-cream/70 leading-relaxed">
                  {t(commitment.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="max-w-3xl mx-auto text-center mt-12 sm:mt-16"
        >
          <div className="bg-sophisticated/50 rounded-lg p-8 sm:p-10 border border-gold/20">
            <Leaf className="w-12 h-12 text-gold mx-auto mb-4" />
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gold mb-4">
              {t('biodiversity.cta.title')}
            </h3>
            <p className="text-base sm:text-lg font-noto text-cream/80 leading-relaxed">
              {t('biodiversity.cta.description')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Biodiversity;
