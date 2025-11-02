import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Github, Heart } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, url: '#' },
    { name: 'Instagram', icon: Instagram, url: '#' },
    { name: 'LinkedIn', icon: Linkedin, url: '#' },
    { name: 'Behance', icon: Github, url: '#' },
  ];

  return (
    <footer className="bg-[#1E1E2F] text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00C9FF] to-[#92FE9D] flex items-center justify-center">
                <span className="text-white">B</span>
              </div>
              <span className="gradient-text text-xl">Boostify</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              نساعدك على تحقيق النمو الرقمي الذي تطمح إليه من خلال حلول تسويقية وتقنية مبتكرة.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              {['الرئيسية', 'الخدمات', 'الأعمال', 'الأسعار', 'من نحن'].map((link) => (
                <li key={link}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-[#00C9FF] transition-colors inline-block"
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              {['تصميم المواقع', 'تطوير التطبيقات', 'التسويق الرقمي', 'تحسين محركات البحث', 'الاستشارات'].map((service) => (
                <li key={service}>
                  <motion.a
                    whileHover={{ x: 5 }}
                    href="#"
                    className="text-gray-400 hover:text-[#00C9FF] transition-colors inline-block"
                  >
                    {service}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="text-lg mb-4">النشرة البريدية</h4>
            <p className="text-gray-400 mb-4">
              اشترك للحصول على آخر الأخبار والعروض
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="بريدك الإلكتروني"
                className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 focus:border-[#00C9FF] outline-none transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-gradient px-6 py-2 rounded-lg"
              >
                اشترك
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-gray-400 text-center md:text-right flex items-center gap-2"
          >
            © 2025 Boostify Digital. كل الحقوق محفوظة.
            <span className="inline-flex items-center gap-1">
              صنع بـ <Heart className="w-4 h-4 fill-red-500 text-red-500" /> في السعودية
            </span>
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex gap-4"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.name}
                  href={social.url}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.2, y: -3 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-br hover:from-[#00C9FF] hover:to-[#92FE9D] transition-all"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              );
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
