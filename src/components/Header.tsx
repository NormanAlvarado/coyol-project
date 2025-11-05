import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');
  };

  const navItems = [
    { name: t('nav.home'), to: 'home' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.tasting'), to: 'tasting' },
    { name: t('nav.heritage'), to: 'heritage' },
    { name: t('nav.gallery'), to: 'gallery' },
    { name: t('nav.contact'), to: 'contact' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-wine/95 backdrop-blur-md shadow-lg'
          : 'bg-sophisticated/80 backdrop-blur-md shadow-md'
      }`}
    >
      <div className="w-full px-3 sm:px-4 md:px-6 lg:px-8 max-w-screen-2xl mx-auto">
        <nav className="flex items-center justify-between py-2.5 sm:py-3 md:py-4 gap-2">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="cursor-pointer flex-shrink min-w-0">
            <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-playfair font-bold text-gold hover:text-cream transition-colors truncate">
              Vino Coyol Premium
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-3 xl:space-x-4 flex-shrink-0">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                activeClass="text-gold"
                className="text-cream hover:text-gold transition-colors cursor-pointer font-noto text-xs lg:text-sm uppercase tracking-wide whitespace-nowrap"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-cream hover:text-gold transition-colors ml-1 px-1.5 py-1 rounded-md hover:bg-gold/10 flex-shrink-0"
              aria-label="Toggle language"
            >
              <MdLanguage size={16} className="lg:w-5 lg:h-5" />
              <span className="text-xs font-noto font-semibold">{i18n.language === 'en' ? 'KO' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1 flex-shrink-0">
            <button
              onClick={toggleLanguage}
              className="text-cream hover:text-gold transition-colors p-1.5 rounded-md hover:bg-gold/10"
              aria-label="Toggle language"
            >
              <MdLanguage size={20} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cream hover:text-gold transition-colors p-1.5 rounded-md hover:bg-gold/10"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden pb-2 border-t border-gold/20 pt-2 overflow-hidden"
          >
            <div className="flex flex-col space-y-0.5">
              {navItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-80}
                  activeClass="text-gold bg-gold/10"
                  className="block py-2 px-2 text-cream hover:text-gold hover:bg-gold/10 transition-all cursor-pointer font-noto rounded-md text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
};

export default Header;
