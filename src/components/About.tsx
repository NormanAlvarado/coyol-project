import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-playfair font-bold text-wine mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl font-noto text-wine/70">{t('about.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?q=80&w=2940"
                alt="Coyol Wine Bottle"
                className="w-full h-[500px] object-cover hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine/60 to-transparent" />
            </div>
            {/* Decorative golden border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-gold rounded-lg -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg font-noto text-sophisticated/80 leading-relaxed">
              {t('about.description1')}
            </p>
            <p className="text-lg font-noto text-sophisticated/80 leading-relaxed">
              {t('about.description2')}
            </p>
            <div className="bg-wine/5 border-l-4 border-gold p-6 rounded-r-lg">
              <p className="text-lg font-playfair italic text-wine">
                {t('about.description3')}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
