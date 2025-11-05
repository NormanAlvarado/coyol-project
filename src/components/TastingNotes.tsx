import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GiNoseFront, GiWineGlass, GiWaterDrop, GiCheeseWedge } from 'react-icons/gi';

const TastingNotes = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const notes = [
    {
      icon: GiNoseFront,
      title: t('tasting.aroma.title'),
      description: t('tasting.aroma.description'),
      color: 'from-wine to-wine/70',
    },
    {
      icon: GiWineGlass,
      title: t('tasting.flavor.title'),
      description: t('tasting.flavor.description'),
      color: 'from-gold to-gold/70',
    },
    {
      icon: GiWaterDrop,
      title: t('tasting.texture.title'),
      description: t('tasting.texture.description'),
      color: 'from-wine to-wine/70',
    },
    {
      icon: GiCheeseWedge,
      title: t('tasting.pairing.title'),
      description: t('tasting.pairing.description'),
      color: 'from-gold to-gold/70',
    },
  ];

  return (
    <section id="tasting" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-cream to-wine/10">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-wine mb-3 sm:mb-4 px-4">
            {t('tasting.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-noto text-wine/70 px-4">{t('tasting.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {notes.map((note, index) => (
            <motion.div
              key={note.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-cream rounded-xl shadow-lg p-6 sm:p-8 h-full border border-wine/10 hover:shadow-2xl hover:shadow-gold/20 transition-all duration-300 hover:-translate-y-2">
                {/* Icon */}
                <div className={`w-14 h-14 sm:w-16 sm:h-16 mb-4 sm:mb-6 rounded-full bg-gradient-to-br ${note.color} flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <note.icon className="text-cream text-2xl sm:text-3xl" />
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-playfair font-bold text-wine mb-3 sm:mb-4 text-center">
                  {note.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-sophisticated/70 font-noto text-center leading-relaxed">
                  {note.description}
                </p>

                {/* Decorative element */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gold/5 rounded-bl-full -z-10" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TastingNotes;
