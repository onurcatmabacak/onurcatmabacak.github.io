import { Github, Linkedin, Mail, GraduationCap, Library } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#050505] border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-bold tracking-tighter mb-2 text-white">ONUR ÇATMABACAK</h3>
          <p className="text-sm text-gray-500">Computational Scientist & Researcher</p>
        </div>

        <div className="flex space-x-6 mb-8 md:mb-0 items-center">
          <a href="https://scholar.google.com/citations?user=Onur%20%C3%87atmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="Google Scholar">
            <GraduationCap size={20} />
          </a>
          <a href="https://ui.adsabs.harvard.edu/search/q=Onur%20%C3%87atmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="NASA ADS">
            <Library size={20} />
          </a>
          <a href="https://orcid.org/my-orcid?orcid=0000-0003-4067-1434" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="ORCID">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[20px] h-[20px]">
              <circle cx="12" cy="12" r="10" />
              <path d="M10.5 11v5" />
              <path d="M10.5 8v.01" />
              <path d="M13.5 8v8h1a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5h-1z" />
            </svg>
          </a>
          <a href="https://github.com/onurcatmabacak" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="GitHub">
            <Github size={20} />
          </a>
          <a href="https://www.linkedin.com/in/onurcatmabacak/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors" title="LinkedIn">
            <Linkedin size={20} />
          </a>
          <a href="mailto:onurcatmabacak@gmail.com" className="text-gray-500 hover:text-white transition-colors">
            <Mail size={20} />
          </a>
        </div>

        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Onur Çatmabacak. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
