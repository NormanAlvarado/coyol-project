import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Sparkles, X } from 'lucide-react';

interface Question {
  id: number;
  questionKey: string;
  options: {
    textKey: string;
    spirit: 'monkey' | 'fox' | 'rabbit';
  }[];
}

interface Spirit {
  id: string;
  nameKey: string;
  descriptionKey: string;
  emoji: string;
  color: string;
  gradient: string;
}

const Games = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [showQuiz, setShowQuiz] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<('monkey' | 'fox' | 'rabbit')[]>([]);
  const [result, setResult] = useState<string | null>(null);

  const questions: Question[] = [
    {
      id: 1,
      questionKey: 'games.quiz.questions.q1.question',
      options: [
        { textKey: 'games.quiz.questions.q1.options.a', spirit: 'monkey' },
        { textKey: 'games.quiz.questions.q1.options.b', spirit: 'fox' },
        { textKey: 'games.quiz.questions.q1.options.c', spirit: 'rabbit' },
      ],
    },
    {
      id: 2,
      questionKey: 'games.quiz.questions.q2.question',
      options: [
        { textKey: 'games.quiz.questions.q2.options.a', spirit: 'rabbit' },
        { textKey: 'games.quiz.questions.q2.options.b', spirit: 'monkey' },
        { textKey: 'games.quiz.questions.q2.options.c', spirit: 'fox' },
      ],
    },
    {
      id: 3,
      questionKey: 'games.quiz.questions.q3.question',
      options: [
        { textKey: 'games.quiz.questions.q3.options.a', spirit: 'fox' },
        { textKey: 'games.quiz.questions.q3.options.b', spirit: 'rabbit' },
        { textKey: 'games.quiz.questions.q3.options.c', spirit: 'monkey' },
      ],
    },
  ];

  const spirits: Spirit[] = [
    {
      id: 'monkey',
      nameKey: 'games.quiz.spirits.monkey.name',
      descriptionKey: 'games.quiz.spirits.monkey.description',
      emoji: '🐵',
      color: 'from-amber-500 to-orange-600',
      gradient: 'from-amber-500/20 to-orange-600/20',
    },
    {
      id: 'fox',
      nameKey: 'games.quiz.spirits.fox.name',
      descriptionKey: 'games.quiz.spirits.fox.description',
      emoji: '🦊',
      color: 'from-orange-500 to-red-600',
      gradient: 'from-orange-500/20 to-red-600/20',
    },
    {
      id: 'rabbit',
      nameKey: 'games.quiz.spirits.rabbit.name',
      descriptionKey: 'games.quiz.spirits.rabbit.description',
      emoji: '🐰',
      color: 'from-pink-500 to-purple-600',
      gradient: 'from-pink-500/20 to-purple-600/20',
    },
  ];

  const handleAnswer = (spirit: 'monkey' | 'fox' | 'rabbit') => {
    const newAnswers = [...answers, spirit];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const counts = newAnswers.reduce((acc, curr) => {
        acc[curr] = (acc[curr] || 0) + 1;
        return acc;
      }, {} as Record<string, number>);

      const winner = Object.keys(counts).reduce((a, b) => 
        counts[a] > counts[b] ? a : b
      );
      setResult(winner);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
    setShowQuiz(false);
  };

  const startQuiz = () => {
    setShowQuiz(true);
    setCurrentQuestion(0);
    setAnswers([]);
    setResult(null);
  };

  const currentSpirit = result ? spirits.find(s => s.id === result) : null;

  return (
    <section id="games" className="py-12 sm:py-16 lg:py-20 bg-navy relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gold mb-3 sm:mb-4 px-4">
            {t('games.title')}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl font-noto text-cream/80 px-4">
            {t('games.subtitle')}
          </p>
        </motion.div>

        {/* Game Card */}
        {!showQuiz ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <div className="bg-sophisticated rounded-lg shadow-lg p-8 sm:p-10 border border-gold/30">
              <div className="text-center mb-6">
                <Sparkles className="w-16 h-16 text-gold mx-auto mb-4" />
                <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gold mb-4">
                  {t('games.quiz.title')}
                </h3>
                <p className="text-base sm:text-lg font-noto text-cream/70 mb-6 leading-relaxed">
                  {t('games.quiz.description')}
                </p>
              </div>

              {/* Spirit Preview Icons */}
              <div className="flex justify-center gap-8 mb-8">
                {spirits.map((spirit, index) => (
                  <motion.div
                    key={spirit.id}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl mb-2">{spirit.emoji}</div>
                    <p className="text-xs font-noto text-cream/60">{t(spirit.nameKey)}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* Play Button */}
              <button
                onClick={startQuiz}
                className="w-full py-3 px-8 rounded-md font-noto font-semibold text-sophisticated bg-gold hover:bg-gold/90 transition-all duration-300"
              >
                {t('games.playButton')}
              </button>
            </div>
          </motion.div>
        ) : (
          /* Quiz Modal */
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            style={{ zIndex: 99999 }}
            onClick={(e) => e.target === e.currentTarget && resetQuiz()}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-sophisticated rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative border border-gold/30"
              style={{ zIndex: 100000 }}
            >
              {/* Close Button */}
              <button
                onClick={resetQuiz}
                className="absolute top-4 right-4 text-gold hover:text-cream transition-colors z-10"
              >
                <X size={28} />
              </button>

              {!result ? (
                /* Question View */
                <div className="p-8 sm:p-10">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between text-sm font-noto text-cream/60 mb-2">
                      <span>{t('games.quiz.question')} {currentQuestion + 1}/{questions.length}</span>
                      <span>{Math.round(((currentQuestion) / questions.length) * 100)}%</span>
                    </div>
                    <div className="h-2 bg-gold/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
                        transition={{ duration: 0.5 }}
                        className="h-full bg-gold"
                      />
                    </div>
                  </div>

                  {/* Question */}
                  <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gold mb-6 text-center">
                      {t(questions[currentQuestion].questionKey)}
                    </h3>

                    {/* Options */}
                    <div className="space-y-3">
                      {questions[currentQuestion].options.map((option, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          onClick={() => handleAnswer(option.spirit)}
                          className="w-full p-4 bg-navy rounded-md text-left font-noto text-cream hover:bg-gold/20 border border-gold/10 hover:border-gold/30 transition-all duration-300"
                        >
                          <span className="text-sm sm:text-base">{t(option.textKey)}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                </div>
              ) : (
                /* Result View */
                <div className="p-8 sm:p-10 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring' }}
                  >
                    <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gold mb-6">
                      {t('games.quiz.result.title')}
                    </h3>
                    
                    {currentSpirit && (
                      <>
                        <div className="mb-6">
                          <div className="text-8xl mb-4">{currentSpirit.emoji}</div>
                          <h4 className="text-2xl font-playfair font-bold text-gold mb-2">
                            {t(currentSpirit.nameKey)}
                          </h4>
                        </div>
                        
                        <p className="text-base sm:text-lg font-noto text-cream/80 mb-8 leading-relaxed max-w-xl mx-auto">
                          {t(currentSpirit.descriptionKey)}
                        </p>
                      </>
                    )}

                    <button
                      onClick={resetQuiz}
                      className="px-8 py-3 rounded-md font-noto font-semibold text-sophisticated bg-gold hover:bg-gold/90 transition-all duration-300"
                    >
                      {t('games.quiz.playAgain')}
                    </button>
                  </motion.div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Games;
