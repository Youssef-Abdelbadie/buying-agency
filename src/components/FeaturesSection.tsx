import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { TrendingUp, Settings, MessageCircle } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'نتائج مضمونة',
    text: 'نزيد مبيعاتك بنسبة تفوق 120% عبر استراتيجيات دقيقة.',
    gradient: 'from-[#00C9FF] to-[#92FE9D]',
  },
  {
    icon: Settings,
    title: 'حلول مخصصة',
    text: 'نطوّر استراتيجيات تناسب مشروعك بالضبط.',
    gradient: 'from-[#92FE9D] to-[#00C9FF]',
  },
  {
    icon: MessageCircle,
    title: 'دعم دائم',
    text: 'فريقنا معك خطوة بخطوة من الإطلاق إلى النجاح.',
    gradient: 'from-[#00C9FF] to-[#1E1E2F]',
  },
];

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #00C9FF 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-5xl mb-4"
          >
            <span className="gradient-text">ليه تختارنا؟</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            نحن نقدم حلولاً رقمية متكاملة لنمو مشروعك بسرعة وفعالية
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-2xl mb-4 text-[#1E1E2F]">
                    {feature.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {feature.text}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    className={`h-1 bg-gradient-to-r ${feature.gradient} mt-6 rounded-full`}
                  ></motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-[#00C9FF]/10 to-[#92FE9D]/10 rounded-3xl p-10"
        >
          {[
            { number: '5+', label: 'سنوات خبرة' },
            { number: '500+', label: 'عميل راضٍ' },
            { number: '1000+', label: 'مشروع منجز' },
            { number: '24/7', label: 'دعم فني' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl gradient-text mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
