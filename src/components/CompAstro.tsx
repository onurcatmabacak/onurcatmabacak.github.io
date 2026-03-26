import { motion } from "motion/react";
import { BookOpen, Code, Terminal, Cpu, Database, ChevronRight, Download, ExternalLink, Library } from "lucide-react";

const modules = [
  {
    title: "Numerical Methods",
    description: "Foundational algorithms for solving differential equations, integration, and root-finding in astrophysical contexts.",
    icon: <Terminal className="text-blue-400" size={20} />,
    topics: ["Runge-Kutta Methods", "Adaptive Step-sizing", "Monte Carlo Integration"]
  },
  {
    title: "N-body Simulations",
    description: "Simulating the gravitational interaction between multiple point masses, from planetary systems to galaxy clusters.",
    icon: <Cpu className="text-purple-400" size={20} />,
    topics: ["Direct Summation", "Tree Algorithms", "Particle-Mesh Methods"]
  },
  {
    title: "Hydrodynamics",
    description: "Computational fluid dynamics applied to gas flows, accretion disks, and interstellar medium physics.",
    icon: <Database className="text-orange-400" size={20} />,
    topics: ["Smoothed Particle Hydrodynamics", "Grid-based Methods", "Shock Capturing"]
  },
  {
    title: "High-Performance Computing",
    description: "Parallel programming techniques and optimization for large-scale astrophysical simulations.",
    icon: <Code className="text-green-400" size={20} />,
    topics: ["MPI & OpenMP", "GPU Acceleration", "Data Visualization"]
  }
];

const resources = [
  { name: "Numerical Recipes", type: "Book", link: "http://numerical.recipes/" },
  { name: "Astropy Project", type: "Software", link: "https://www.astropy.org/" },
  { name: "Gadget-4", type: "Simulation Code", link: "https://wwwmpa.mpa-garching.mpg.de/gadget4/" },
  { name: "Athena++", type: "MHD Code", link: "https://www.athenafortran.org/" }
];

export default function CompAstro() {
  return (
    <section id="comp-astro" className="py-24 px-6 bg-[#0a0a0a] border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header - Matching Research Interests Style */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Educational Resources</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured guide designed for students and researchers entering the field of numerical astrophysics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Introduction & CTA */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-3xl font-bold tracking-tight text-white mb-6 leading-tight">
                Introduction to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                  Computational Astrophysics
                </span>
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                This resource covers the fundamental algorithms and high-performance computing techniques required 
                to simulate the universe, from planetary systems to large-scale cosmic structures.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-white/5 text-blue-400">
                    <Download size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Lecture Notes</h4>
                    <p className="text-gray-500 text-sm">Comprehensive PDF guides for each module.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="mt-1 p-2 rounded-lg bg-white/5 text-purple-400">
                    <Code size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Code Repository</h4>
                    <p className="text-gray-500 text-sm">Example implementations in Python and C++.</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://onurcatmabacak.github.io/instructions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-xl bg-white text-black font-bold hover:bg-gray-200 transition-colors group"
              >
                Access Full Course
                <ExternalLink size={18} className="ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Modules Grid */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((module, index) => (
                <motion.div
                  key={module.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
                >
                  <div className="mb-4 p-2 inline-block rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                    {module.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{module.title}</h3>
                  <p className="text-gray-500 text-sm mb-4 leading-relaxed">
                    {module.description}
                  </p>
                  <ul className="space-y-2">
                    {module.topics.map(topic => (
                      <li key={topic} className="flex items-center text-xs text-gray-400">
                        <ChevronRight size={12} className="mr-1 text-blue-500" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Resources Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 p-6 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5"
            >
              <h4 className="text-white font-bold mb-4 flex items-center">
                <Library className="mr-2 text-blue-400" size={18} />
                Recommended Resources
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {resources.map(res => (
                  <a 
                    key={res.name}
                    href={res.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col p-3 rounded-xl bg-black/20 hover:bg-black/40 transition-colors border border-white/5"
                  >
                    <span className="text-white text-sm font-medium">{res.name}</span>
                    <span className="text-gray-500 text-[10px] uppercase tracking-wider">{res.type}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
