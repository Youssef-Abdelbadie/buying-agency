import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const projects = [
  {
    title: 'تصميم موقع تجارة إلكترونية',
    category: 'تطوير ويب',
    image: 'https://images.unsplash.com/photo-1677214467820-ab069619bbb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWJzaXRlJTIwZGVzaWdufGVufDF8fHx8MTc2MjA5MDg3M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    stats: '+150% مبيعات',
  },
  {
    title: 'تطبيق موبايل للتوصيل',
    category: 'تطوير تطبيقات',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NjIwNTYxMjl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: '10K+ مستخدم',
  },
  {
    title: 'حملة تسويقية متكاملة',
    category: 'تسويق رقمي',
    image: 'https://images.unsplash.com/photo-1608222351212-18fe0ec7b13b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGFuYWx5dGljcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NjIwOTU5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    stats: '+200% وصول',
  },
];

export function ProjectsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">نماذج من أعمالنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مشاريع ناجحة ساعدت عملاءنا على تحقيق أهدافهم الرقمية
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <motion.div
                whileHover={{ y: -15 }}
                className="relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 bg-white"
              >
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full"
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E1E2F]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1 }}
                      className="w-12 h-12 rounded-full bg-white flex items-center justify-center cursor-pointer"
                    >
                      <ExternalLink className="w-6 h-6 text-[#00C9FF]" />
                    </motion.div>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-[#1E1E2F]">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl mb-2 text-[#1E1E2F]">
                    {project.title}
                  </h3>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{project.stats}</span>
                    <motion.div
                      whileHover={{ x: -5 }}
                      className="text-[#00C9FF] cursor-pointer"
                    >
                      <ArrowLeft className="w-5 h-5" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 text-[#00C9FF] border-2 border-[#00C9FF] px-8 py-3 rounded-full hover:bg-[#00C9FF]/10 transition-all"
          >
            <span>شوف كل المشاريع</span>
            <ArrowLeft className="w-5 h-5" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
