import { useTranslation } from 'react-i18next';
import { Link } from 'react-scroll';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-sophisticated text-cream py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo */}
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <h3 className="text-xl font-playfair font-bold text-gold hover:text-cream transition-colors">
              Vino Coyol Premium
            </h3>
          </Link>

          {/* Copyright */}
          <p className="text-sm font-noto text-cream/70 text-center">
            {t('footer.copyright')}
          </p>

          {/* Quick Links */}
          <div className="flex space-x-6">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-sm font-noto text-cream/70 hover:text-gold transition-colors cursor-pointer"
            >
              {t('nav.about')}
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-sm font-noto text-cream/70 hover:text-gold transition-colors cursor-pointer"
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
