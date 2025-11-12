import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const Gallery = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      url: 'https://images.unsplash.com/photo-1566754966132-e15a6513e2f4?q=80&w=2940',
      title: 'Premium Bottle',
    },
    {
      url: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940',
      title: 'Wine Tasting',
    },
    {
      url: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?q=80&w=2787',
      title: 'Vineyard',
    },
    {
      url: 'https://images.unsplash.com/photo-1474722883778-792e7990302f?q=80&w=2791',
      title: 'Golden Hour',
    },
    {
      url: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?q=80&w=2940',
      title: 'Elegant Presentation',
    },
    {
      url: 'https://www.acguanacaste.ac.cr/paginas_especie/magnoliophyta/arecaceae/acrocomia_aculeata/a_aculeata30jun98/acrocomia_aculeata_2700/98-ACG-PI-d-2994_g.jpg',
      title: 'Tropical Paradise',
    },
  ];

  return (
    <section id="gallery" className="py-12 sm:py-16 lg:py-20 bg-sophisticated">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-3 sm:mb-4 px-4">
            {t('gallery.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-noto text-cream/70 px-4">{t('gallery.subtitle')}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => setHoveredIndex(hoveredIndex === index ? null : index)}
            >
              <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className={`w-full h-full object-cover transition-all duration-500 ${
                    hoveredIndex === index ? 'scale-110 blur-sm' : 'scale-100'
                  }`}
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t from-wine via-wine/50 to-transparent transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-90' : 'opacity-0'
                  }`}
                />
                {/* Title */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gold text-center px-4">
                    {image.title}
                  </h3>
                </div>
                {/* Golden border on hover */}
                <div
                  className={`absolute inset-0 border-2 sm:border-4 border-gold transition-opacity duration-300 ${
                    hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Decorative element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-10 sm:mt-12 lg:mt-16 text-center px-4"
        >
          <div className="inline-block px-6 sm:px-8 py-3 sm:py-4 border-2 border-gold/30 rounded-full">
            <p className="font-playfair text-sm sm:text-base text-wine italic">
              Every bottle tells a story of excellence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
