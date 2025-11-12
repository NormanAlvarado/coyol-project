import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About',
        tasting: 'Tasting Notes',
        heritage: 'Heritage',
        games: 'Games',
        behindTheWine: 'Our People',
        biodiversity: 'Biodiversity',
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
        description1: 'Sidus is a unique artisanal wine crafted from the exotic coyol palm log, a treasure of Costa Rican biodiversity. Each bottle captures the essence of tropical forests and centuries-old traditions.',
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
          description: 'Savory dishes like: Chicken stew, Pajeon, and fried chicken',
        },
      },
      heritage: {
        title: 'Cultural Heritage',
        subtitle: 'Rooted in Tradition',
        description1: 'The coyol palm has been part of Costa Rican culture for centuries. Villagers revered this tree for its versatility and nutritional value.',
        description2: 'Our wine honors this legacy, transforming the coyol log into a premium beverage that shares our cultural identity through your local tales.',
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
      games: {
        title: 'Interactive Games',
        subtitle: 'Play and Learn About Our Wine Culture',
        quiz: {
          title: 'Discover Your Spirit in Sidus',
          description: 'Answer a few questions and discover which animal spirit represents you in our Sidus family.',
          question: 'Question',
          questions: {
            q1: {
              question: 'How do you prefer to spend your free time?',
              options: {
                a: 'Exploring new places and having adventures',
                b: 'Planning and strategizing my next goals',
                c: 'Relaxing at home with loved ones',
              },
            },
            q2: {
              question: 'What quality do you value most in yourself?',
              options: {
                a: 'Kindness and empathy',
                b: 'Energy and enthusiasm',
                c: 'Intelligence and cunning',
              },
            },
            q3: {
              question: 'In a group, you tend to be:',
              options: {
                a: 'The strategic leader',
                b: 'The peaceful mediator',
                c: 'The fun entertainer',
              },
            },
          },
          spirits: {
            monkey: {
              name: 'Monkey Spirit',
              description: 'You are energetic, playful, and social! Like the monkey, you love adventures and bringing joy to those around you. Your enthusiasm is contagious and you always find a way to make life more fun.',
            },
            fox: {
              name: 'Fox Spirit',
              description: 'You are clever, strategic, and adaptable! Like the fox, you know how to navigate any situation with intelligence and grace. Your cunning and wisdom make you a natural problem solver.',
            },
            rabbit: {
              name: 'Rabbit Spirit',
              description: 'You are gentle, intuitive, and compassionate! Like the rabbit, you value peace and harmony. Your kindness and sensitivity make you a trusted friend and confidant.',
            },
          },
          result: {
            title: 'Your Spirit Is...',
          },
          playAgain: 'Discover Another Spirit',
        },
        playButton: 'Play',
        footer: 'Discover the magic of Sidus through fun and educational games',
      },
      behindTheWine: {
        title: 'The People Behind Sidus',
        ode: 'To the artisans who, with calloused hands and patient hearts, transform the humble coyol palm into liquid gold. Your knowledge, passed down through generations, is the soul of every bottle. You are the guardians of tradition, the keepers of ancient wisdom, and the reason our wine carries the essence of Costa Rica. With deep gratitude and profound respect, we honor your craft, your dedication, and the love you pour into every harvest. This wine is yours as much as it is ours.',
      },
      biodiversity: {
        title: 'Costa Rica\'s Biodiversity',
        subtitle: 'Protecting our natural heritage for future generations',
        intro: {
          paragraph1: 'Costa Rica is home to nearly 6% of the world\'s biodiversity, despite covering only 0.03% of the planet\'s surface. Our tropical forests are vital ecosystems that support countless species and indigenous communities.',
          paragraph2: 'At Sidus, we understand that our wine\'s quality depends on healthy ecosystems. That\'s why we\'re committed to minimizing our environmental footprint and actively protecting the biodiversity that makes our wine possible.',
        },
        stats: {
          species: { number: '500,000+', label: 'Species' },
          protected: { number: '25%', label: 'Protected Land' },
          carbon: { number: 'Carbon Neutral', label: 'Since 2020' },
          water: { number: '100%', label: 'Water Recycled' },
        },
        ecosystemsTitle: 'The Ecosystems We Protect',
        ecosystems: {
          rainforest: {
            title: 'Tropical Rainforests',
            description: 'Home to the coyol palm and thousands of species. We protect these forests through sustainable harvesting practices.',
          },
          rivers: {
            title: 'Rivers & Watersheds',
            description: 'Clean water is essential for our production. We maintain riparian zones and prevent contamination.',
          },
          wildlife: {
            title: 'Wildlife Corridors',
            description: 'Our lands serve as safe passages for endangered species, connecting protected areas.',
          },
        },
        commitmentsTitle: 'Our Environmental Commitments',
        commitmentsSubtitle: 'We measure our success not just by the quality of our wine, but by the health of our environment',
        commitments: {
          sustainable: {
            title: 'Sustainable Harvesting',
            description: 'We only harvest mature coyol palms using methods that allow forest regeneration. Our selective approach ensures long-term forest health.',
          },
          carbon: {
            title: 'Carbon Footprint',
            description: 'We\'ve achieved carbon neutrality through renewable energy, efficient transport, and reforestation programs that offset our emissions.',
          },
          reforestation: {
            title: 'Reforestation Programs',
            description: 'For every bottle sold, we plant native trees. To date, we\'ve planted over 50,000 trees in degraded areas.',
          },
          renewable: {
            title: 'Renewable Energy',
            description: 'Our facilities run on 100% renewable energy from solar and hydroelectric sources, reducing our environmental impact.',
          },
        },
        cta: {
          title: 'Join Our Mission',
          description: 'When you choose Sidus, you\'re not just enjoying exceptional wine—you\'re supporting the preservation of Costa Rica\'s incredible biodiversity and the communities that protect it.',
        },
      },
      footer: {
        copyright: '© 2025 Sidus. Crafted in Costa Rica.',
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: 'Inicio',
        about: 'Acerca',
        tasting: 'Notas de Cata',
        heritage: 'Herencia',
        games: 'Juegos',
        behindTheWine: 'Nuestra Gente',
        biodiversity: 'Biodiversidad',
        gallery: 'Galería',
        contact: 'Contacto',
      },
      hero: {
        title: 'Prueba el Alma de Costa Rica',
        subtitle: 'Vino que captura la esencia tropical',
        cta: 'Descubre el Sabor',
      },
      about: {
        title: 'El Arte del Coyol',
        subtitle: 'Un Viaje Exótico',
        description1: 'Sidus es un vino artesanal único elaborado a partir del exótico tronco de palma de coyol, un tesoro de la biodiversidad costarricense. Cada botella captura la esencia de los bosques tropicales y tradiciones centenarias.',
        description2: 'Nuestro meticuloso proceso de producción combina conocimiento ancestral con técnicas modernas de vinificación, resultando en un vino sofisticado que encarna la riqueza de la cultura costarricense.',
        description3: 'Producción limitada, calidad exclusiva. Cada cosecha representa nuestro compromiso con la sostenibilidad y autenticidad.',
      },
      tasting: {
        title: 'Notas de Cata',
        subtitle: 'Una Experiencia Sensorial',
        aroma: {
          title: 'Aroma',
          description: 'Frutas tropicales maduras con sutiles notas de madera suave y vainilla',
        },
        flavor: {
          title: 'Sabor',
          description: 'Dulzura equilibrada, cuerpo medio, final persistente y elegante',
        },
        texture: {
          title: 'Textura',
          description: 'Suave y aterciopelado, con taninos refinados',
        },
        pairing: {
          title: 'Maridaje',
          description: 'Platos salados como: Estofado de pollo, Pajeon y pollo frito',
        },
      },
      heritage: {
        title: 'Herencia Cultural',
        subtitle: 'Arraigados en la Tradición',
        description1: 'La palma de coyol ha sido parte de la cultura costarricense durante siglos. Los pobladores veneraban este árbol por su versatilidad y valor nutricional.',
        description2: 'Nuestro vino honra este legado, transformando el tronco de coyol en una bebida premium que comparte nuestra identidad cultural a través de historias locales.',
        description3: 'Estamos comprometidos con prácticas sostenibles que protegen nuestros bosques y apoyan a las comunidades locales, asegurando que esta tradición perdure para las generaciones futuras.',
      },
      gallery: {
        title: 'Viaje Visual',
        subtitle: 'Del Bosque a la Copa',
      },
      contact: {
        title: 'Ponte en Contacto',
        subtitle: 'Experimenta la Excelencia',
        name: 'Nombre',
        email: 'Correo Electrónico',
        message: 'Mensaje',
        send: 'Enviar Mensaje',
        followUs: 'Síguenos',
      },
      games: {
        title: 'Juegos Interactivos',
        subtitle: 'Juega y Aprende Sobre Nuestra Cultura del Vino',
        quiz: {
          title: 'Descubre tu Espíritu en Sidus',
          description: 'Responde algunas preguntas y descubre qué espíritu animal te representa en nuestra familia Sidus.',
          question: 'Pregunta',
          questions: {
            q1: {
              question: '¿Cómo prefieres pasar tu tiempo libre?',
              options: {
                a: 'Explorando nuevos lugares y teniendo aventuras',
                b: 'Planificando y estrategizando mis próximas metas',
                c: 'Relajándome en casa con mis seres queridos',
              },
            },
            q2: {
              question: '¿Qué cualidad valoras más en ti mismo?',
              options: {
                a: 'La amabilidad y empatía',
                b: 'La energía y entusiasmo',
                c: 'La inteligencia y astucia',
              },
            },
            q3: {
              question: 'En un grupo, tiendes a ser:',
              options: {
                a: 'El líder estratégico',
                b: 'El mediador pacífico',
                c: 'El animador divertido',
              },
            },
          },
          spirits: {
            monkey: {
              name: 'Espíritu del Mono',
              description: '¡Eres enérgico, juguetón y sociable! Como el mono, amas las aventuras y llevar alegría a quienes te rodean. Tu entusiasmo es contagioso y siempre encuentras la manera de hacer la vida más divertida.',
            },
            fox: {
              name: 'Espíritu del Zorro',
              description: '¡Eres astuto, estratégico y adaptable! Como el zorro, sabes cómo navegar cualquier situación con inteligencia y gracia. Tu astucia y sabiduría te convierten en un solucionador natural de problemas.',
            },
            rabbit: {
              name: 'Espíritu del Conejo',
              description: '¡Eres gentil, intuitivo y compasivo! Como el conejo, valoras la paz y la armonía. Tu amabilidad y sensibilidad te convierten en un amigo y confidente de confianza.',
            },
          },
          result: {
            title: 'Tu Espíritu Es...',
          },
          playAgain: 'Descubrir Otro Espíritu',
        },
        playButton: 'Jugar',
        footer: 'Descubre la magia de Sidus a través de juegos divertidos y educativos',
      },
      behindTheWine: {
        title: 'La Gente Detrás de Sidus',
        ode: 'A los artesanos que, con manos callosas y corazones pacientes, transforman la humilde palma de coyol en oro líquido. Su conocimiento, transmitido a través de generaciones, es el alma de cada botella. Ustedes son los guardianes de la tradición, los custodios de la sabiduría ancestral, y la razón por la que nuestro vino lleva la esencia de Costa Rica. Con profunda gratitud y respeto, honramos su oficio, su dedicación y el amor que vierten en cada cosecha. Este vino es tan suyo como nuestro.',
      },
      biodiversity: {
        title: 'Biodiversidad de Costa Rica',
        subtitle: 'Protegiendo nuestro patrimonio natural para futuras generaciones',
        intro: {
          paragraph1: 'Costa Rica alberga casi el 6% de la biodiversidad mundial, a pesar de cubrir solo el 0.03% de la superficie del planeta. Nuestros bosques tropicales son ecosistemas vitales que sustentan innumerables especies y comunidades indígenas.',
          paragraph2: 'En Sidus, entendemos que la calidad de nuestro vino depende de ecosistemas saludables. Por eso estamos comprometidos a minimizar nuestra huella ambiental y proteger activamente la biodiversidad que hace posible nuestro vino.',
        },
        stats: {
          species: { number: '500,000+', label: 'Especies' },
          protected: { number: '25%', label: 'Tierra Protegida' },
          carbon: { number: 'Carbono Neutral', label: 'Desde 2020' },
          water: { number: '100%', label: 'Agua Reciclada' },
        },
        ecosystemsTitle: 'Los Ecosistemas que Protegemos',
        ecosystems: {
          rainforest: {
            title: 'Bosques Tropicales',
            description: 'Hogar de la palma de coyol y miles de especies. Protegemos estos bosques mediante prácticas de cosecha sostenible.',
          },
          rivers: {
            title: 'Ríos y Cuencas',
            description: 'El agua limpia es esencial para nuestra producción. Mantenemos zonas ribereñas y prevenimos la contaminación.',
          },
          wildlife: {
            title: 'Corredores de Vida Silvestre',
            description: 'Nuestras tierras sirven como pasajes seguros para especies en peligro, conectando áreas protegidas.',
          },
        },
        commitmentsTitle: 'Nuestros Compromisos Ambientales',
        commitmentsSubtitle: 'Medimos nuestro éxito no solo por la calidad de nuestro vino, sino por la salud de nuestro ambiente',
        commitments: {
          sustainable: {
            title: 'Cosecha Sostenible',
            description: 'Solo cosechamos palmas de coyol maduras usando métodos que permiten la regeneración del bosque. Nuestro enfoque selectivo asegura la salud forestal a largo plazo.',
          },
          carbon: {
            title: 'Huella de Carbono',
            description: 'Hemos logrado la neutralidad de carbono mediante energía renovable, transporte eficiente y programas de reforestación que compensan nuestras emisiones.',
          },
          reforestation: {
            title: 'Programas de Reforestación',
            description: 'Por cada botella vendida, plantamos árboles nativos. Hasta la fecha, hemos plantado más de 50,000 árboles en áreas degradadas.',
          },
          renewable: {
            title: 'Energía Renovable',
            description: 'Nuestras instalaciones funcionan con 100% energía renovable de fuentes solares e hidroeléctricas, reduciendo nuestro impacto ambiental.',
          },
        },
        cta: {
          title: 'Únete a Nuestra Misión',
          description: 'Cuando eliges Sidus, no solo disfrutas de un vino excepcional—estás apoyando la preservación de la increíble biodiversidad de Costa Rica y las comunidades que la protegen.',
        },
      },
      footer: {
        copyright: '© 2025 Sidus. Elaborado en Costa Rica.',
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
        games: '게임',
        behindTheWine: '우리 사람들',
        biodiversity: '생물다양성',
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
        description1: 'Sidus는 코스타리카 생물다양성의 보물인 이국적인 코욜 과일로 만든 독특한 수제 와인입니다. 각 병은 열대 숲과 수세기에 걸친 전통의 본질을 담고 있습니다.',
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
      games: {
        title: '인터랙티브 게임',
        subtitle: '게임을 통해 우리의 와인 문화를 배워보세요',
        quiz: {
          title: 'Sidus에서 당신의 영혼을 발견하세요',
          description: '몇 가지 질문에 답하고 Sidus 가족에서 당신을 나타내는 동물 영혼을 발견하세요.',
          question: '질문',
          questions: {
            q1: {
              question: '자유 시간을 어떻게 보내는 것을 선호하나요?',
              options: {
                a: '새로운 장소를 탐험하고 모험을 즐기기',
                b: '다음 목표를 계획하고 전략 세우기',
                c: '사랑하는 사람들과 집에서 휴식하기',
              },
            },
            q2: {
              question: '자신에게서 가장 가치 있다고 생각하는 자질은?',
              options: {
                a: '친절함과 공감 능력',
                b: '에너지와 열정',
                c: '지능과 영리함',
              },
            },
            q3: {
              question: '그룹에서 당신은 주로:',
              options: {
                a: '전략적인 리더',
                b: '평화로운 중재자',
                c: '재미있는 엔터테이너',
              },
            },
          },
          spirits: {
            monkey: {
              name: '원숭이 영혼',
              description: '당신은 활기차고, 장난기 많고, 사교적입니다! 원숭이처럼 모험을 사랑하고 주변 사람들에게 기쁨을 가져다줍니다. 당신의 열정은 전염성이 있으며 항상 삶을 더 재미있게 만드는 방법을 찾습니다.',
            },
            fox: {
              name: '여우 영혼',
              description: '당신은 영리하고, 전략적이며, 적응력이 뛰어납니다! 여우처럼 지능과 우아함으로 모든 상황을 헤쳐 나갈 줄 압니다. 당신의 교활함과 지혜는 당신을 타고난 문제 해결사로 만듭니다.',
            },
            rabbit: {
              name: '토끼 영혼',
              description: '당신은 온화하고, 직관적이며, 자비롭습니다! 토끼처럼 평화와 조화를 소중히 여깁니다. 당신의 친절함과 감수성은 당신을 신뢰할 수 있는 친구이자 상담자로 만듭니다.',
            },
          },
          result: {
            title: '당신의 영혼은...',
          },
          playAgain: '다른 영혼 발견하기',
        },
        playButton: '게임하기',
        footer: '재미있고 교육적인 게임을 통해 Sidus의 마법을 발견하세요',
      },
      behindTheWine: {
        title: 'Sidus를 만드는 사람들',
        ode: '굳은살 박힌 손과 인내심 있는 마음으로 겸손한 코욜 야자를 액체 금으로 변환하는 장인들에게. 세대를 거쳐 전해진 당신의 지식은 모든 병의 영혼입니다. 당신은 전통의 수호자이자 고대 지혜의 관리인이며, 우리 와인이 코스타리카의 본질을 담고 있는 이유입니다. 깊은 감사와 존경심을 가지고, 우리는 당신의 기술, 헌신, 그리고 모든 수확에 쏟는 사랑을 기립니다. 이 와인은 우리의 것만큼이나 당신의 것입니다.',
      },
      biodiversity: {
        title: '코스타리카의 생물다양성',
        subtitle: '미래 세대를 위해 우리의 자연 유산을 보호합니다',
        intro: {
          paragraph1: '코스타리카는 지구 표면의 0.03%만 차지하지만 세계 생물다양성의 거의 6%를 보유하고 있습니다. 우리의 열대 숲은 수많은 종과 원주민 공동체를 지원하는 중요한 생태계입니다.',
          paragraph2: 'Sidus에서 우리는 와인의 품질이 건강한 생태계에 달려 있다는 것을 이해합니다. 그래서 우리는 환경 발자국을 최소화하고 우리의 와인을 가능하게 하는 생물다양성을 적극적으로 보호하기 위해 노력합니다.',
        },
        stats: {
          species: { number: '500,000+', label: '종' },
          protected: { number: '25%', label: '보호 지역' },
          carbon: { number: '탄소 중립', label: '2020년부터' },
          water: { number: '100%', label: '물 재활용' },
        },
        ecosystemsTitle: '우리가 보호하는 생태계',
        ecosystems: {
          rainforest: {
            title: '열대 우림',
            description: '코욜 야자와 수천 종의 서식지. 우리는 지속 가능한 수확 관행을 통해 이러한 숲을 보호합니다.',
          },
          rivers: {
            title: '강과 수계',
            description: '깨끗한 물은 우리 생산에 필수적입니다. 우리는 강변 지역을 유지하고 오염을 방지합니다.',
          },
          wildlife: {
            title: '야생동물 통로',
            description: '우리의 땅은 멸종 위기 종의 안전한 통로 역할을 하며 보호 구역을 연결합니다.',
          },
        },
        commitmentsTitle: '우리의 환경 약속',
        commitmentsSubtitle: '우리는 와인의 품질뿐만 아니라 환경의 건강으로 성공을 측정합니다',
        commitments: {
          sustainable: {
            title: '지속 가능한 수확',
            description: '우리는 숲 재생을 허용하는 방법을 사용하여 성숙한 코욜 야자만 수확합니다. 우리의 선택적 접근 방식은 장기적인 숲 건강을 보장합니다.',
          },
          carbon: {
            title: '탄소 발자국',
            description: '우리는 재생 에너지, 효율적인 운송, 그리고 우리의 배출을 상쇄하는 재조림 프로그램을 통해 탄소 중립을 달성했습니다.',
          },
          reforestation: {
            title: '재조림 프로그램',
            description: '판매되는 모든 병에 대해 우리는 토착 나무를 심습니다. 지금까지 우리는 황폐한 지역에 50,000그루 이상의 나무를 심었습니다.',
          },
          renewable: {
            title: '재생 에너지',
            description: '우리의 시설은 태양 및 수력 발전원의 100% 재생 에너지로 운영되어 환경 영향을 줄입니다.',
          },
        },
        cta: {
          title: '우리의 사명에 동참하세요',
          description: 'Sidus를 선택할 때, 당신은 단지 뛰어난 와인을 즐기는 것이 아니라 코스타리카의 놀라운 생물다양성과 그것을 보호하는 공동체의 보존을 지원하는 것입니다.',
        },
      },
      footer: {
        copyright: '© 2025 Sidus. 코스타리카에서 제작.',
      },
    },
  },
};

// Configuración del detector de idioma
const languageDetectorOptions = {
  // Orden de detección: primero localStorage, luego navegador, finalmente español por defecto
  order: ['localStorage', 'navigator'],
  // Guardar el idioma seleccionado en localStorage
  caches: ['localStorage'],
  // Clave para guardar en localStorage
  lookupLocalStorage: 'i18nextLng',
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'es',
    detection: languageDetectorOptions,
    interpolation: {
      escapeValue: false,
    },
  });

// Si no hay idioma guardado, establecer español por defecto
if (!localStorage.getItem('i18nextLng')) {
  i18n.changeLanguage('es');
}

export default i18n;
