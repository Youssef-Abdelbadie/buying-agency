import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    plan: 'Basic',
    price: '$199',
    features: ['موقع صفحة واحدة', 'تصميم متجاوب', 'دعم شهر', 'استضافة مجانية'],
    cta: 'ابدأ الآن',
    highlight: false,
  },
  {
    plan: 'Pro',
    price: '$499',
    features: ['موقع متكامل', 'تحليل أداء', 'دعم 3 شهور', 'تحسين SEO', 'لوحة تحكم'],
    cta: 'الأكثر شعبية',
    highlight: true,
  },
  {
    plan: 'Ultimate',
    price: '$899',
    features: ['إدارة حملات', 'تقارير مخصصة', 'دعم سنوي', 'استشارات دورية', 'أولوية الدعم'],
    cta: 'ابدأ الآن',
    highlight: false,
  },
];

export function PricingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C9FF]/5 to-[#92FE9D]/5"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">خطط الأسعار</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            اختر الخطة التي تناسب احتياجاتك ومشروعك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.plan}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="relative"
            >
              {plan.highlight && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D] text-white px-4 py-1 rounded-full text-sm flex items-center gap-1 shadow-lg z-10"
                >
                  <Star className="w-4 h-4 fill-white" />
                  <span>الأفضل قيمة</span>
                </motion.div>
              )}

              <motion.div
                whileHover={{ y: -10, scale: plan.highlight ? 1.05 : 1.02 }}
                className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full ${
                  plan.highlight
                    ? 'border-2 border-[#00C9FF] ring-4 ring-[#00C9FF]/20'
                    : 'border border-gray-100'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl mb-2 text-[#1E1E2F]">
                    {plan.plan}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl gradient-text">{plan.price}</span>
                    <span className="text-gray-600">/شهرياً</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.6 + idx * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <div className={`flex-shrink-0 w-6 h-6 rounded-full ${
                        plan.highlight 
                          ? 'bg-gradient-to-br from-[#00C9FF] to-[#92FE9D]'
                          : 'bg-gray-200'
                      } flex items-center justify-center`}>
                        <Check className={`w-4 h-4 ${
                          plan.highlight ? 'text-white' : 'text-gray-600'
                        }`} />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-4 rounded-full transition-all ${
                    plan.highlight
                      ? 'btn-gradient text-white shadow-xl'
                      : 'bg-gray-100 text-[#1E1E2F] hover:bg-gray-200'
                  }`}
                >
                  {plan.cta}
                </motion.button>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            غير متأكد من الخطة المناسبة؟
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[#00C9FF] border-2 border-[#00C9FF] px-8 py-3 rounded-full hover:bg-[#00C9FF]/10 transition-all"
          >
            تحدث مع خبير
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
