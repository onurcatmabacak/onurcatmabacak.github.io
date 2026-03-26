import { motion } from "motion/react";
import { Download, Briefcase, GraduationCap, Award, Code, Sparkles } from "lucide-react";

const experience = [
  {
    title: "Linux System Engineer",
    company: "Bank Julius Baer",
    period: "Nov. 2023 - Present",
    description: "Focusing on threat detection automation, data integration, and infrastructure monitoring using the Splunk ecosystem to support the bank's operational stability.",
    icon: <Briefcase size={20} className="text-blue-400" />,
  },
  {
    title: "Independent Researcher",
    company: "Feza Gursey Center for Physics and Mathematics",
    period: "Jan. 2023 - Present",
    description: "Conducting astrophysical research by modeling physical processes in phenomena like active galactic nuclei and X-ray binaries, while also working on the GPU parallelization of the GIZMO simulation code.",
    icon: <Briefcase size={20} className="text-blue-400" />,
  },
  {
    title: "Software Developer",
    company: "Spherene AG",
    period: "Nov. 2021 - Jan. 2023",
    description: "Reduced operational costs by replacing proprietary dependencies with open-source alternatives, and enhanced their additive manufacturing software by integrating new solvers and deploying services on Google Cloud.",
    icon: <Briefcase size={20} className="text-blue-400" />,
  },
  {
    title: "Doctoral Researcher",
    company: "University of Zurich",
    period: "Sept. 2016 - Oct. 2022",
    description: "Analyzed massive datasets from cosmological supercomputer simulations, developed theoretical models for black hole-galaxy scaling, and supervised a research group.",
    icon: <Briefcase size={20} className="text-blue-400" />,
  },
];

const skills = [
  "Python",
  "Django",
  "BASH",
  "FORTRAN95",
  "C/C++",
  "Julia",
  "CUDA/HIP",
  "GPU Programming",
  "Linux",
  "Splunk",
  "Docker",
  "Git",
  "Google Cloud",
  "High-Performance Computing (HPC)",
  "Machine Learning",
  "Data Science",
  "Numerical Algorithms",
  "FEniCS FEM Solver"
];

const awards = [
  {
    title: "Second place in the ”Sabanci University Academic Year Teaching Assistant Awards”",
    year: "",
  },
  {
    title: "Full Merit Scholarship for Doctoral Studies, Sabanci University",
    year: "",
  },
  {
    title: "Full Merit Scholarship for Master Studies, Kültür University",
    year: "",
  },
  {
    title: "Full Merit Scholarship for Bachelor Studies, Kültür University",
    year: "",
  },
  {
    title: "Full Merit Scholarship for Bachelor Studies, Yeditepe University",
    year: "",
  },
];

export default function CV() {
  return (
    <section id="cv" className="py-24 px-6 bg-[#080808]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <div>
            <h2 className="text-4xl font-bold tracking-tight mb-4 text-white">Curriculum Vitae</h2>
            <p className="text-gray-400 max-w-xl">
              A summary of my academic background, professional experience, and technical skills.
            </p>
          </div>
          <motion.a
            href="/OnurCatmabacak_CV.pdf"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 md:mt-0 px-6 py-3 bg-[#0a0a0a] border border-white/5 rounded-2xl flex items-center text-sm font-bold text-white shadow-sm hover:bg-white/5 hover:border-white/10 transition-all"
          >
            <Download size={18} className="mr-2" />
            Download PDF
          </motion.a>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Experience & Education */}
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center">
                <Briefcase size={14} className="mr-2" />
                Experience
              </h3>
              <div className="space-y-8">
                {experience.map((item, index) => (
                  <motion.div
                    key={item.title + index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative pl-8 border-l border-white/5"
                  >
                    <div className="absolute -left-3 top-0 p-1.5 bg-[#0a0a0a] border border-white/10 rounded-full shadow-sm">
                      {item.icon}
                    </div>
                    <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <span className="text-sm font-mono text-gray-600">{item.period}</span>
                    </div>
                    <p className="text-blue-400 text-sm font-medium mb-2">{item.company}</p>
                    <p className="text-gray-400 text-sm leading-relaxed">{item.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-8 flex items-center">
                <GraduationCap size={14} className="mr-2" />
                Education
              </h3>
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="relative pl-8 border-l border-white/5"
                >
                  <div className="absolute -left-3 top-0 p-1.5 bg-[#0a0a0a] border border-white/10 rounded-full shadow-sm">
                    <GraduationCap size={20} className="text-purple-400" />
                  </div>
                  <div className="mb-1 flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <h4 className="text-lg font-bold text-white">PhD in Computational Astrophysics</h4>
                    <span className="text-sm font-mono text-gray-600">Sept. 2016 - Oct. 2022</span>
                  </div>
                  <p className="text-blue-400 text-sm font-medium mb-2">University of Zurich</p>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Awards */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 bg-[#0a0a0a] rounded-3xl border border-white/5 shadow-sm"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center">
                <Code size={14} className="mr-2" />
                Technical Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className="px-3 py-1.5 bg-white/5 text-gray-300 rounded-xl text-xs font-medium border border-white/5">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-8 bg-[#0a0a0a] rounded-3xl border border-white/5 shadow-sm"
            >
              <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-6 flex items-center">
                <Award size={14} className="mr-2" />
                Awards and Scholarships
              </h3>
              <div className="space-y-6">
                {awards.map((award, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mt-1 mr-3 text-yellow-500">
                      <Sparkles size={16} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white leading-tight">{award.title}</h4>
                      {award.year && <p className="text-xs text-gray-500 mt-1">{award.year}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
