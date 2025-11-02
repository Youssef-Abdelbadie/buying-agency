import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section ref={ref} className="py-20 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00C9FF]/10 via-white to-[#92FE9D]/10"></div>
      
      {/* Floating Circles */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-20 right-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-[#00C9FF]/20 to-transparent blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute bottom-20 left-[10%] w-64 h-64 rounded-full bg-gradient-to-br from-[#92FE9D]/20 to-transparent blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4">
            <span className="gradient-text">ابدأ رحلتك معنا اليوم</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            تواصل معنا الآن واحصل على استشارة مجانية لمشروعك
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 }}
              >
                <label className="block text-gray-700 mb-2">الاسم</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#00C9FF] outline-none transition-all"
                  placeholder="أدخل اسمك الكامل"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <label className="block text-gray-700 mb-2">البريد الإلكتروني</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#00C9FF] outline-none transition-all"
                  placeholder="example@email.com"
                  required
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <label className="block text-gray-700 mb-2">نوع الخدمة</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#00C9FF] outline-none transition-all"
                  required
                >
                  <option value="">اختر الخدمة</option>
                  <option value="تصميم موقع">تصميم موقع</option>
                  <option value="تطوير تطبيق">تطوير تطبيق</option>
                  <option value="تسويق رقمي">تسويق رقمي</option>
                  <option value="استشارة">استشارة</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <label className="block text-gray-700 mb-2">الرسالة</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-6 py-4 rounded-xl bg-white border-2 border-gray-200 focus:border-[#00C9FF] outline-none transition-all resize-none"
                  placeholder="أخبرنا عن مشروعك..."
                  required
                />
              </motion.div>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full btn-gradient text-white px-8 py-4 rounded-xl shadow-xl flex items-center justify-center gap-2"
              >
                <span>أرسل الآن</span>
                <Send className="w-5 h-5" />
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6 text-[#1E1E2F]">معلومات التواصل</h3>
              
              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">البريد الإلكتروني</div>
                    <div className="text-lg">info@boostify.com</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#92FE9D] to-[#00C9FF] flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">الهاتف</div>
                    <div className="text-lg">+966 50 123 4567</div>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#00C9FF] to-[#1E1E2F] flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">العنوان</div>
                    <div className="text-lg">الرياض، المملكة العربية السعودية</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Working Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] rounded-2xl p-8 text-white shadow-lg"
            >
              <h4 className="text-xl mb-4">ساعات العمل</h4>
              <div className="space-y-2 text-white/90">
                <div className="flex justify-between">
                  <span>السبت - الخميس</span>
                  <span>9:00 صباحاً - 6:00 مساءً</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة</span>
                  <span>مغلق</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
