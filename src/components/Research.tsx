import { motion } from "motion/react";
import { ExternalLink, BookOpen, Database, Globe, Cpu, Layers, Sparkles } from "lucide-react";

const researchTopics = [
  {
    title: "Accretion Disks Around Compact Objects",
    description: "Studying the dynamics and emission properties of accretion disks around black holes and neutron stars.",
    link: "https://chandra.harvard.edu/resources/illustrations/blackholes2.html",
    linkText: "Image Credit: NASA/CXC/M.Weiss.",
    icon: <Sparkles className="text-blue-400" size={24} />,
    image: "/BHXRB_artist_int_with_labels-1.jpeg",
    tags: ["Astrophysics", "Compact Objects"],
  },
  {
    title: "Ultra Luminious X-Ray Sources",
    description: "Investigating the nature and physical mechanisms behind ULXs in nearby galaxies.",
    link: "https://chandra.harvard.edu/photo/2018/ulx/",
    linkText: "Image Credit: NASA/CXC/Caltech/M.Brightman et al.",
    icon: <Layers className="text-orange-400" size={24} />,
    image: "/ULXs.jpg",
    tags: ["X-Ray", "ULX"],
  },
  {
    title: "AGN Emission Lines",
    description: "Analyzing the spectral signatures of Active Galactic Nuclei to understand their central engines.",
    link: "https://fermi.gsfc.nasa.gov/science/eteu/agn/",
    linkText: "Image Credit: NASA Fermi",
    icon: <Globe className="text-green-400" size={24} />,
    image: "/AGN_Emission_Lines.png",
    tags: ["AGN", "NASA"],
  },
  {
    title: "Numerical Methods",
    description: "Developing and implementing high-performance numerical algorithms for astrophysical simulations.",
    link: "https://maths.anu.edu.au/research/groups/theoretical-astrophysics",
    linkText: "Image Credit: Australian National University",
    icon: <Cpu className="text-purple-400" size={24} />,
    image: "/astro_diff_equation.jpg",
    tags: ["Numerical", "ANU"],
  },
  {
    title: "Galaxy Formation and Evolution",
    description: "Simulating the cosmic history of galaxies from the early universe to the present day.",
    link: "https://arxiv.org/pdf/1909.07976",
    linkText: "Image Credit: Vogelsberger et al. 2019",
    icon: <Database className="text-red-400" size={24} />,
    image: "/galaxy_simulations.png",
    tags: ["Galaxy", "Evolution"],
  },
];

export default function Research() {
  return (
    <section id="research-section" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Research Interests</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Exploring the universe through computational methods and theoretical astrophysics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {researchTopics.map((topic, index) => (
            <motion.div
              key={topic.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group rounded-3xl border border-white/5 bg-[#0a0a0a] hover:bg-[#0f0f0f] hover:border-white/10 transition-all duration-500 flex flex-col h-full overflow-hidden"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <img 
                  src={topic.image} 
                  alt={topic.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-60" />
                <div className="absolute bottom-4 left-6 p-2 bg-black/40 backdrop-blur-md rounded-xl border border-white/10">
                  {topic.icon}
                </div>
              </div>
              
              <div className="p-8 flex-grow">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {topic.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {topic.description}
                </p>
              </div>

              <div className="px-8 pb-8 mt-auto flex flex-col space-y-4">
                <div className="flex flex-wrap gap-2">
                  {topic.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-lg text-[10px] font-bold uppercase tracking-wider text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                
                {topic.link && (
                  <a
                    href={topic.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    {topic.linkText}
                    <ExternalLink size={14} className="ml-1.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
