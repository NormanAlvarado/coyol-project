import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { FaInstagram, FaYoutube } from 'react-icons/fa';
import { SiKakaotalk } from 'react-icons/si';

const Contact = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    setErrors({
      ...errors,
      [e.target.name]: '',
    });
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission (e.g., send to API)
      console.log('Form submitted:', formData);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! We will contact you soon.');
    }
  };

  const socialLinks = [
    { icon: FaInstagram, href: '#', name: 'Instagram', color: 'hover:text-pink-500' },
    { icon: SiKakaotalk, href: '#', name: 'KakaoTalk', color: 'hover:text-yellow-400' },
    { icon: FaYoutube, href: '#', name: 'YouTube', color: 'hover:text-red-600' },
  ];

  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-navy">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-3 sm:mb-4 px-4">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-noto text-cream/70 px-4">{t('contact.subtitle')}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 md:mb-0"
          >
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-cream font-noto mb-2 text-sm sm:text-base">
                  {t('contact.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base bg-sophisticated text-cream ${
                    errors.name ? 'border-red-500' : 'border-gold/20'
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-noto`}
                />
                {errors.name && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label htmlFor="email" className="block text-cream font-noto mb-2 text-sm sm:text-base">
                  {t('contact.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base bg-sophisticated text-cream ${
                    errors.email ? 'border-red-500' : 'border-gold/20'
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-noto`}
                />
                {errors.email && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="message" className="block text-cream font-noto mb-2 text-sm sm:text-base">
                  {t('contact.message')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg border text-sm sm:text-base bg-sophisticated text-cream ${
                    errors.message ? 'border-red-500' : 'border-gold/20'
                  } focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all font-noto resize-none`}
                />
                {errors.message && <p className="text-red-500 text-xs sm:text-sm mt-1">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-sophisticated px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-playfair text-base sm:text-lg font-bold hover:bg-gold/90 transition-all duration-300 hover:shadow-lg hover:shadow-gold/30 hover:scale-105"
              >
                {t('contact.send')}
              </button>
            </form>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Social Media */}
            <div className="bg-sophisticated rounded-lg p-6 sm:p-8 border border-gold/30">
              <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gold mb-4 sm:mb-6">
                {t('contact.followUs')}
              </h3>
              <div className="flex space-x-4 sm:space-x-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`w-12 h-12 sm:w-14 sm:h-14 bg-gold text-sophisticated rounded-full flex items-center justify-center transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg`}
                    aria-label={social.name}
                  >
                    <social.icon className="text-xl sm:text-2xl" />
                  </a>
                ))}
              </div>
            </div>

            {/* Decorative Image */}
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1566754966132-e15a6513e2f4?q=80&w=2940"
                alt="Vino Coyol Premium"
                className="w-full h-[250px] sm:h-[300px] md:h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-wine via-transparent to-transparent flex items-end p-4 sm:p-6 lg:p-8">
                <p className="text-gold font-playfair text-base sm:text-lg lg:text-2xl italic">
                  "Crafted with passion, enjoyed with elegance"
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
