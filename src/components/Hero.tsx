import { motion } from "motion/react";
import { ArrowRight, ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col justify-center items-center px-6 pt-20 relative overflow-hidden bg-[#050505]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/back.jpg" 
          alt="Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]" />
      </div>

      {/* Background Accents */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-orange-900/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-4xl w-full text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-6 inline-block px-4 py-1.5 bg-white/5 border border-white/10 rounded-full text-xs font-semibold tracking-widest uppercase text-gray-400"
        >
          Computational Scientist
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-white"
        >
          Hello, I'm <span className="text-blue-500">Onur Çatmabacak</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          I'm a Computational Scientist. This is a space where I share my work, projects, and publications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
        >
          {/* FIXED: Smooth scroll anchor link */}
          <a
            href="#research"
            className="px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center cursor-pointer no-underline"
          >
            Explore Research
            <ArrowRight size={20} className="ml-2" />
          </a>

          {/* FIXED: CV Link with proper pathing */}
          <a
            href="/OnurCatmabacak_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-[#0a0a0a] border border-white/5 hover:border-white/10 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center hover:bg-white/5 cursor-pointer no-underline"
          >
            View CV
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-600"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}