import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-wine via-wine/90 to-sophisticated"
    >
      {/* Parallax Background Effect */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=2940')",
            transform: 'scale(1.1)',
          }}
        />
      </div>

      {/* Golden Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-wine/80 via-transparent to-wine/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto py-20 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-playfair font-bold text-gold mb-4 md:mb-6 drop-shadow-2xl leading-tight">
            {t('hero.title')}
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <p className="text-xl sm:text-2xl md:text-4xl font-noto text-cream mb-8 md:mb-12 drop-shadow-lg px-2">
            {t('hero.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="about" smooth={true} duration={500}>
            <button className="group relative px-8 sm:px-10 py-3 sm:py-4 bg-gold text-wine font-playfair text-base sm:text-lg font-bold rounded-full overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-gold/50 hover:scale-105">
              <span className="relative z-10">{t('hero.cta')}</span>
              <div className="absolute inset-0 bg-gradient-to-r from-gold via-cream to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </Link>
        </motion.div>

        {/* Decorative Elements - Hidden on mobile, visible on larger screens */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="hidden lg:block absolute top-10 xl:top-20 left-4 xl:left-10 w-24 h-24 xl:w-32 xl:h-32 border-2 border-gold/30 rounded-full pointer-events-none"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1.2 }}
          className="hidden lg:block absolute bottom-10 xl:bottom-20 right-4 xl:right-10 w-20 h-20 xl:w-24 xl:h-24 border-2 border-gold/30 rounded-full pointer-events-none"
        />
      </div>

      {/* Scroll Indicator - Hidden on small screens */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        className="hidden md:block absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gold rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
