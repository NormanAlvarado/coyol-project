import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { MdLanguage } from 'react-icons/md';
import { ChevronDown } from 'lucide-react';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languages = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'es', label: 'Español', flag: '🇨🇷' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setLanguageDropdownOpen(false);
  };

  const navItems = [
    { name: t('nav.home'), to: 'home' },
    { name: t('nav.about'), to: 'about' },
    { name: t('nav.tasting'), to: 'tasting' },
    { name: t('nav.heritage'), to: 'heritage' },
    { name: t('nav.games'), to: 'games' },
    { name: t('nav.behindTheWine'), to: 'behind-the-wine' },
    { name: t('nav.biodiversity'), to: 'biodiversity' },
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
          <Link to="home" smooth={true} duration={500} className="cursor-pointer flex-shrink min-w-0 overflow-hidden">
            <div className="h-10 sm:h-12 md:h-14 lg:h-16 w-32 sm:w-40 md:w-48 lg:w-56 overflow-hidden">
              <img 
                src="https://media.discordapp.net/attachments/1092348611632828446/1438363964198359120/Sidus_lettering.png?ex=69169c54&is=69154ad4&hm=ae245d364c18fad4bd41622e1748170324a9289d1c3a42db159333c453fa104a&=&format=webp&quality=lossless&width=1792&height=1338" 
                alt="Sidus" 
                className="h-full w-auto object-cover object-left scale-[3.5] translate-x-12"
              />
            </div>
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
            
            {/* Language Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="flex items-center space-x-1 text-cream hover:text-gold transition-colors ml-1 px-2 py-1.5 rounded-md hover:bg-gold/10 flex-shrink-0"
                aria-label="Select language"
              >
                <MdLanguage size={16} className="lg:w-5 lg:h-5" />
                <span className="text-xs font-noto font-semibold">{currentLanguage.flag}</span>
                <ChevronDown size={14} className={`transition-transform ${languageDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-40 bg-wine/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/20 overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-4 py-2.5 text-left flex items-center space-x-2 transition-colors ${
                          i18n.language === lang.code
                            ? 'bg-gold/20 text-gold'
                            : 'text-cream hover:bg-gold/10 hover:text-gold'
                        }`}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span className="text-sm font-noto">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-1 flex-shrink-0">
            {/* Language Dropdown Mobile */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                className="text-cream hover:text-gold transition-colors p-1.5 rounded-md hover:bg-gold/10"
                aria-label="Select language"
              >
                <MdLanguage size={20} />
              </button>

              <AnimatePresence>
                {languageDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-36 bg-wine/95 backdrop-blur-md rounded-lg shadow-xl border border-gold/20 overflow-hidden z-50"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => changeLanguage(lang.code)}
                        className={`w-full px-3 py-2 text-left flex items-center space-x-2 transition-colors ${
                          i18n.language === lang.code
                            ? 'bg-gold/20 text-gold'
                            : 'text-cream hover:bg-gold/10 hover:text-gold'
                        }`}
                      >
                        <span className="text-base">{lang.flag}</span>
                        <span className="text-xs font-noto">{lang.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

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
