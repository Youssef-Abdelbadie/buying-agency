import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

const logos = [
  { name: 'Google', color: '#4285F4' },
  { name: 'Meta', color: '#0668E1' },
  { name: 'Shopify', color: '#96BF48' },
  { name: 'HubSpot', color: '#FF7A59' },
  { name: 'Amazon', color: '#FF9900' },
  { name: 'Microsoft', color: '#00A4EF' },
];

export function LogosStrip() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <section ref={ref} className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl text-gray-600">
            شركاؤنا في <span className="gradient-text">النجاح</span>
          </h3>
        </motion.div>

        {/* Logos Container */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-12 md:gap-16 flex-wrap"
          >
            {logos.map((logo, index) => (
              <motion.div
                key={logo.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="group cursor-pointer"
              >
                <div className="flex flex-col items-center gap-3">
                  {/* Logo Circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 bg-white border-2 border-gray-100 group-hover:border-opacity-0"
                    style={{
                      boxShadow: `0 4px 20px ${logo.color}20`,
                    }}
                  >
                    <span
                      className="text-xl transition-all duration-300"
                      style={{ color: logo.color }}
                    >
                      {logo.name.charAt(0)}
                    </span>
                  </div>
                  
                  {/* Logo Name */}
                  <motion.span
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="text-sm text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {logo.name}
                  </motion.span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="h-px bg-gradient-to-r from-transparent via-[#00C9FF]/30 to-transparent mt-12 mx-auto"
          style={{ transformOrigin: 'center' }}
        />

        {/* Additional Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600">
            نعمل مع أكثر من{' '}
            <span className="gradient-text">200+ شريك</span>
            {' '}عالمي ومحلي
          </p>
        </motion.div>
      </div>
    </section>
  );
}
