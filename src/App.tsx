import React, { useState, useEffect } from 'react';
import {
  Moon,
  Sun,
  Mail,
  Github,
  Linkedin,
  Download,
  ExternalLink,
  Award,
  Code,
  Database,
  Globe,
  Gamepad2,
  Map,
  ShoppingCart,
  Building,
  Trophy
} from 'lucide-react';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check if user has set a preference
    const stored = localStorage.getItem('theme');
    if (stored) return stored === 'dark';
  
    // Default to dark if no preference
    return true;
  });
  

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);
  

  const skills = [
    { name: 'C++ & Data Structures', icon: Code },
    { name: 'OOP in C++', icon: Database },
    { name: 'HTML, CSS, JavaScript', icon: Globe },
    { name: 'Python', icon: Code },
    { name: 'Git & GitHub', icon: Github }
  ];

  const projects = [
    {
      title: 'Vertex Voyage',
      description: 'Dijkstra algorithm with graphical interface using SFML',
      tech: 'SFML + DSA + C++',
      icon: Map,
      color: 'from-mint-500 to-teal-600',
      github: 'https://github.com/habiba-imran/VERTEX-VOYAGE-SFML-BASED-DSA-PROJECT'
    },
    {
      title: '2D Maze Game',
      description: 'Object-oriented maze game using C++ classes for logic and movement',
      tech: 'C++ OOP',
      icon: Gamepad2,
      color: 'from-mint-500 to-green-600',
      github: 'https://github.com/habiba-imran/CONSOLE-BASED-2D-MAZE-GAME---C--OOP'
    },
    {
      title: 'Interactive E-Commerce Website',
      description: 'Responsive UI for a makeup brand with modern web technologies',
      tech: 'HTML/CSS/JS',
      icon: ShoppingCart,
      color: 'from-coral-500 to-red-600',
      github: 'https://github.com/habiba-imran/AN-INTERACTIVE-WEBSITE-FOR-A-MAKEUP-BRAND'
    },
    {
      title: 'Student Management System',
      description: 'Manages student records using file handling in C++',
      tech: 'C++',
      icon: Building,
      color: 'from-indigo-500 to-purple-600',
      github: 'https://github.com/habiba-imran/STUDENT-MANAGEMENT-SYSTEM'
    }
  ];


  const awards = [
    {
      title: '2nd Place in CodeQuest Competition',
      description: 'Competitive programming competition',
      icon: Trophy
    },
    {
      title: 'Merit Scholarship',
      description: 'Academic excellence at Bahria University - 2nd and 3rd semester',
      icon: Award
    }
  ];

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Umm-e-Habiba-Imran-CV.pdf';
    link.download = 'Umm-e-Habiba-Imran-CV.pdf';
    link.click();
  };


  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'
      }`}>
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md z-50 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <h1 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Umm-e-Habiba Imran
            </h1>
            <div className="flex items-center space-x-4">
              <nav className="hidden md:flex space-x-6">
                <a href="#home" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Home</a>
                <a href="#skills" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Skills</a>
                <a href="#projects" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Projects</a>
                <a href="#contact" className="text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Contact</a>
              </nav>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-6 shadow-lg">
                <img
                  src="/profile.jpg"
                  alt="Umm-e-Habiba"
                  className="w-full h-full object-cover"
                />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                Umm-e-Habiba Imran
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
                Motivated CS student passionate about problem-solving and real-world applications of tech.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleDownloadCV}
                  className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
                >
                  <Download size={20} className="mr-2" />
                  Download CV
                </button>
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 border-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 font-medium rounded-lg hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-colors"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
            <p className="text-gray-600 dark:text-gray-400">Technologies I work with</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                      <Icon size={24} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{skill.name}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">Some of my recent work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className={`h-32 bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                    <Icon size={48} className="text-white" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                        {project.tech}
                      </span>

                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 cursor-pointer transition-colors"
                      >
                        <ExternalLink size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-16 bg-white dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Awards & Recognition</h2>
            <p className="text-gray-600 dark:text-gray-400">Academic and competitive achievements</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-gradient-to-br from-coral-50 to-mint-50 dark:from-coral-900/20 dark:to-mint-900/20 rounded-xl border border-coral-200/20 dark:border-coral-700/20"
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-coral-100 dark:bg-coral-900/30 rounded-lg">
                      <Icon size={24} className="text-coral-600 dark:text-coral-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {award.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
            <p className="text-gray-600 dark:text-gray-400">Let's connect and collaborate</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:habibaimrannn@gmail.com"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-4 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/50 transition-colors">
                  <Mail size={32} className="text-indigo-600 dark:text-indigo-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Email</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">habibaimrannn@gmail.com</p>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/habiba-imran-118624258/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-mint-100 dark:bg-mint-900/30 rounded-full mb-4 group-hover:bg-mint-200 dark:group-hover:bg-mint-800/50 transition-colors">
                  <Linkedin size={32} className="text-mint-600 dark:text-mint-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">Connect with me</p>
              </div>
            </a>
            <a
              href="https://github.com/habiba-imran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-4 bg-coral-100 dark:bg-coral-900/30 rounded-full mb-4 group-hover:bg-coral-200 dark:group-hover:bg-coral-800/50 transition-colors">
                  <Github size={32} className="text-coral-600 dark:text-coral-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">GitHub</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">View my code</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 dark:bg-gray-950 text-center">
        <p className="text-gray-400">
          © 2025 Umm-e-Habiba Imran.
        </p>
      </footer>
    </div>
  );
}

export default App;