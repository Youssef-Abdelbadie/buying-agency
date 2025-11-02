import { motion } from 'motion/react';
import { TrendingUp, Sparkles, Zap } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-10"></div>
      
      {/* Floating 3D Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
            rotate: [0, 360],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-gradient-to-br from-[#00C9FF]/20 to-[#92FE9D]/20 blur-xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, 40, 0],
            x: [0, -30, 0],
            rotate: [0, -360],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-[15%] w-40 h-40 rounded-full bg-gradient-to-br from-[#92FE9D]/20 to-[#00C9FF]/20 blur-xl"
        ></motion.div>
        <motion.div
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-[20%] w-24 h-24 rounded-lg bg-gradient-to-br from-[#00C9FF]/10 to-transparent blur-lg"
        ></motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-md"
            >
              <Sparkles className="w-5 h-5 text-[#00C9FF]" />
              <span className="text-sm text-gray-700">التسويق الرقمي الذكي</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">نحو نمو رقمي</span>
              <br />
              <span className="text-[#1E1E2F]">أسرع وأذكى.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-gray-600 leading-relaxed"
            >
              Boostify تساعدك على مضاعفة النتائج من التسويق الرقمي في أسابيع.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <button className="btn-gradient text-white px-8 py-4 rounded-full shadow-xl flex items-center gap-2">
                <span>احجز استشارة مجانية</span>
                <Zap className="w-5 h-5" />
              </button>
              <button className="bg-white text-[#00C9FF] border-2 border-[#00C9FF] px-8 py-4 rounded-full hover:bg-[#00C9FF]/10 transition-all">
                شاهد أعمالنا
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 pt-8"
            >
              <div className="text-center">
                <div className="text-3xl gradient-text">+120%</div>
                <div className="text-sm text-gray-600">زيادة المبيعات</div>
              </div>
              <div className="text-center">
                <div className="text-3xl gradient-text">+500</div>
                <div className="text-sm text-gray-600">مشروع ناجح</div>
              </div>
              <div className="text-center">
                <div className="text-3xl gradient-text">98%</div>
                <div className="text-sm text-gray-600">رضا العملاء</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Animation/Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Chart Visualization */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="relative w-full h-full bg-white/50 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white"
              >
                <div className="flex items-end justify-around h-full gap-4">
                  {[30, 45, 60, 75, 90, 100].map((height, index) => (
                    <motion.div
                      key={index}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-[#00C9FF] to-[#92FE9D] rounded-t-lg relative group"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.5 + index * 0.1 }}
                        className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white px-2 py-1 rounded shadow-md text-xs opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        +{height}%
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="absolute top-4 right-4 bg-[#92FE9D] text-[#1E1E2F] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg"
                >
                  <TrendingUp className="w-5 h-5" />
                  <span>نمو متزايد</span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
