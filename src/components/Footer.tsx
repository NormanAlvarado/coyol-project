import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-sophisticated text-cream py-6 sm:py-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-3 sm:space-y-4 md:space-y-0 gap-4">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="cursor-pointer order-1">
            <h3 className="text-lg sm:text-xl font-playfair font-bold text-gold hover:text-cream transition-colors text-center md:text-left">
              Vino Coyol Premium
            </h3>
          </Link>

          {/* Copyright */}
          <p className="text-xs sm:text-sm font-noto text-cream/70 text-center order-3 md:order-2">
            {t('footer.copyright')}
          </p>

          {/* Quick Links */}
          <div className="flex space-x-4 sm:space-x-6 order-2 md:order-3">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-xs sm:text-sm font-noto text-cream/70 hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-xs sm:text-sm font-noto text-cream/70 hover:text-gold transition-colors cursor-pointer whitespace-nowrap"
            >
              {t('nav.contact')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
