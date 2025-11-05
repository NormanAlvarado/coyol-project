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
          : 'bg-wine/30 backdrop-blur-sm'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h1 className="text-2xl md:text-3xl font-playfair font-bold text-gold hover:text-cream transition-colors">
              Vino Coyol Premium
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-gold"
                className="text-cream hover:text-gold transition-colors cursor-pointer font-noto text-sm uppercase tracking-wider"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-cream hover:text-gold transition-colors"
              aria-label="Toggle language"
            >
              <MdLanguage size={20} />
              <span className="text-xs font-noto">{i18n.language === 'en' ? 'KO' : 'EN'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={toggleLanguage}
              className="text-cream hover:text-gold transition-colors"
              aria-label="Toggle language"
            >
              <MdLanguage size={24} />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-cream hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pb-4"
          >
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-gold"
                className="block py-2 text-cream hover:text-gold transition-colors cursor-pointer font-noto"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
};

export default Header;
