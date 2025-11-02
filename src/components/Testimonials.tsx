import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const testimonials = [
  {
    name: 'شركة النور التجارية',
    role: 'مدير التسويق',
    text: 'Boostify غيرت أداء حملاتنا التسويقية 180 درجة. فريق محترف ونتائج مبهرة في وقت قياسي.',
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGJ1c2luZXNzJTIwY2xpZW50fGVufDF8fHx8MTc2MjAxOTg1OHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
  {
    name: 'TechPro Solutions',
    role: 'المدير التنفيذي',
    text: 'موقعنا الجديد زود العملاء بنسبة 60% في أول شهرين. استثمار يستحق كل قرش.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwbWFya2V0aW5nJTIwdGVhbXxlbnwxfHx8fDE3NjIwMjA0OTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
  {
    name: 'متجر الإبداع',
    role: 'صاحب المتجر',
    text: 'التطبيق اللي طوروه لنا سهّل حياة عملائنا وزاد المبيعات بشكل ملحوظ. شكراً Boostify!',
    image: 'https://images.unsplash.com/photo-1628017974725-18928e8e8211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNoJTIwc3RhcnR1cCUyMG9mZmljZXxlbnwxfHx8fDE3NjE5ODg1MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-[#1E1E2F] to-[#2a2a3e] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
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
          <h2 className="text-4xl md:text-5xl mb-4">
            عملاؤنا <span className="gradient-text">قالوا عنا</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            آراء حقيقية من عملاء حققوا نجاحات كبيرة معنا
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 md:p-12 shadow-2xl border border-white/20">
              {/* Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="absolute top-8 right-8 opacity-20"
              >
                <Quote className="w-16 h-16 text-[#00C9FF]" />
              </motion.div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                  >
                    <Star className="w-6 h-6 fill-[#92FE9D] text-[#92FE9D]" />
                  </motion.div>
                ))}
              </div>

              {/* Testimonial Text */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl md:text-2xl text-center mb-8 leading-relaxed"
              >
                "{testimonials[currentIndex].text}"
              </motion.p>

              {/* Client Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-center justify-center gap-4"
              >
                <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#00C9FF]">
                  <ImageWithFallback
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-right">
                  <div className="text-lg">{testimonials[currentIndex].name}</div>
                  <div className="text-sm text-gray-300">{testimonials[currentIndex].role}</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronRight className="w-6 h-6" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-all rounded-full ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-gradient-to-r from-[#00C9FF] to-[#92FE9D]'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all"
            >
              <ChevronLeft className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
}
