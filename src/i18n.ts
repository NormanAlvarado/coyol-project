import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        tasting: 'Tasting Notes',
        heritage: 'Heritage',
        gallery: 'Gallery',
        contact: 'Contact',
      },
      hero: {
        title: 'Taste the Soul of Costa Rica',
        subtitle: '코스타리카의 영혼을 담은 와인',
        cta: 'Discover the Flavor',
      },
      about: {
        title: 'The Art of Coyol',
        subtitle: 'An Exotic Journey',
        description1: 'Vino Coyol Premium is a unique artisanal wine crafted from the exotic coyol fruit, a treasure of Costa Rican biodiversity. Each bottle captures the essence of tropical forests and centuries-old traditions.',
        description2: 'Our meticulous production process combines ancestral knowledge with modern winemaking techniques, resulting in a sophisticated wine that embodies the richness of Costa Rican culture.',
        description3: 'Limited production, exclusive quality. Each vintage represents our commitment to sustainability and authenticity.',
      },
      tasting: {
        title: 'Tasting Notes',
        subtitle: 'A Sensory Experience',
        aroma: {
          title: 'Aroma',
          description: 'Ripe tropical fruits with subtle notes of soft wood and vanilla',
        },
        flavor: {
          title: 'Flavor',
          description: 'Balanced sweetness, medium body, persistent and elegant finish',
        },
        texture: {
          title: 'Texture',
          description: 'Smooth and velvety, with refined tannins',
        },
        pairing: {
          title: 'Pairing',
          description: 'Soft cheeses, white meats, tropical fruit desserts',
        },
      },
      heritage: {
        title: 'Cultural Heritage',
        subtitle: 'Rooted in Tradition',
        description1: 'The coyol palm has been part of Costa Rican culture for centuries. Indigenous communities revered this tree for its versatility and nutritional value.',
        description2: 'Our wine honors this legacy, transforming the coyol fruit into an premium beverage that tells the story of our land.',
        description3: 'We are committed to sustainable practices that protect our forests and support local communities, ensuring that this tradition lives on for future generations.',
      },
      gallery: {
        title: 'Visual Journey',
        subtitle: 'From Forest to Glass',
      },
      contact: {
        title: 'Get in Touch',
        subtitle: 'Experience Excellence',
        name: 'Name',
        email: 'Email',
        message: 'Message',
        send: 'Send Message',
        followUs: 'Follow Us',
      },
      footer: {
        copyright: '© 2025 Vino Coyol Premium. Crafted in Costa Rica.',
      },
    },
  },
  ko: {
    translation: {
      nav: {
        home: '홈',
        about: '소개',
        tasting: '시음 노트',
        heritage: '문화유산',
        gallery: '갤러리',
        contact: '연락처',
      },
      hero: {
        title: '코스타리카의 영혼을 맛보다',
        subtitle: 'Taste the Soul of Costa Rica',
        cta: '맛을 발견하세요',
      },
      about: {
        title: '코욜의 예술',
        subtitle: '이국적인 여정',
        description1: '비노 코욜 프리미엄은 코스타리카 생물다양성의 보물인 이국적인 코욜 과일로 만든 독특한 수제 와인입니다. 각 병은 열대 숲과 수세기에 걸친 전통의 본질을 담고 있습니다.',
        description2: '우리의 세심한 생산 과정은 조상의 지식과 현대 양조 기술을 결합하여 코스타리카 문화의 풍요로움을 구현하는 세련된 와인을 만듭니다.',
        description3: '한정 생산, 독점 품질. 각 빈티지는 지속 가능성과 진정성에 대한 우리의 약속을 나타냅니다.',
      },
      tasting: {
        title: '시음 노트',
        subtitle: '감각적 경험',
        aroma: {
          title: '향',
          description: '부드러운 나무와 바닐라의 미묘한 향과 함께 잘 익은 열대 과일',
        },
        flavor: {
          title: '맛',
          description: '균형 잡힌 단맛, 미디엄 바디, 지속적이고 우아한 피니시',
        },
        texture: {
          title: '질감',
          description: '부드럽고 벨벳 같으며 세련된 타닌',
        },
        pairing: {
          title: '페어링',
          description: '부드러운 치즈, 흰 고기, 열대 과일 디저트',
        },
      },
      heritage: {
        title: '문화유산',
        subtitle: '전통에 뿌리를 둔',
        description1: '코욜 야자나무는 수세기 동안 코스타리카 문화의 일부였습니다. 원주민 공동체는 이 나무의 다재다능함과 영양가로 인해 숭배했습니다.',
        description2: '우리의 와인은 이 유산을 기리며 코욜 과일을 우리 땅의 이야기를 들려주는 프리미엄 음료로 변환합니다.',
        description3: '우리는 숲을 보호하고 지역 사회를 지원하는 지속 가능한 관행에 전념하여 이 전통이 미래 세대를 위해 계속 살아있도록 합니다.',
      },
      gallery: {
        title: '시각적 여정',
        subtitle: '숲에서 잔까지',
      },
      contact: {
        title: '연락하기',
        subtitle: '우수성을 경험하세요',
        name: '이름',
        email: '이메일',
        message: '메시지',
        send: '메시지 보내기',
        followUs: '팔로우하기',
      },
      footer: {
        copyright: '© 2025 비노 코욜 프리미엄. 코스타리카에서 제작.',
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
