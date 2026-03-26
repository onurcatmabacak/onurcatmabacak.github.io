import { motion } from "motion/react";
import { Menu, X, Github, Linkedin, Mail, GraduationCap, Library } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "CV", href: "#cv" },
  { name: "Research", href: "#research" },
  { name: "Comp Astro", href: "#comp-astro" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-md border-b border-white/5 py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter text-white"
        >
          ONUR ÇATMABACAK
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="flex items-center space-x-4 ml-4 pl-4 border-l border-white/10"
          >
            <a href="https://scholar.google.com/citations?user=Onur%20%C3%87atmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Google Scholar">
              <GraduationCap size={18} />
            </a>
            <a href="https://ui.adsabs.harvard.edu/search/q=Onur%20%C3%87atmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="NASA ADS">
              <Library size={18} />
            </a>
            <a href="https://orcid.org/my-orcid?orcid=0000-0003-4067-1434" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="ORCID">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
                <circle cx="12" cy="12" r="10" />
                <path d="M10.5 11v5" />
                <path d="M10.5 8v.01" />
                <path d="M13.5 8v8h1a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-1z" />
              </svg>
            </a>
            <a href="https://github.com/onurcatmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="GitHub">
              <Github size={18} />
            </a>
            <a href="https://www.linkedin.com/in/onurcatmabacak/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="LinkedIn">
              <Linkedin size={18} />
            </a>
            <a href="mailto:onurcatmabacak@gmail.com" className="text-gray-500 hover:text-white transition-colors">
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-[#0a0a0a] border-b border-white/10 p-6 md:hidden flex flex-col space-y-4"
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-white"
            >
              {item.name}
            </a>
          ))}
          <div className="flex items-center space-x-6 pt-4 border-t border-white/10">
            <a href="https://scholar.google.com/citations?user=Onur%20%C3%87atmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="Google Scholar">
              <GraduationCap size={22} />
            </a>
            <a href="https://ui.adsabs.harvard.edu/search/q=Onur%20%C3%87atmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="NASA ADS">
              <Library size={22} />
            </a>
            <a href="https://orcid.org/my-orcid?orcid=0000-0003-4067-1434" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="ORCID">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[22px] h-[22px]">
                <circle cx="12" cy="12" r="10" />
                <path d="M10.5 11v5" />
                <path d="M10.5 8v.01" />
                <path d="M13.5 8v8h1a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-1z" />
              </svg>
            </a>
            <a href="https://github.com/onurcatmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="GitHub">
              <Github size={22} />
            </a>
            <a href="https://www.linkedin.com/in/onurcatmabacak/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" title="LinkedIn">
              <Linkedin size={22} />
            </a>
            <a href="mailto:onurcatmabacak@gmail.com" className="text-gray-400 hover:text-white transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
