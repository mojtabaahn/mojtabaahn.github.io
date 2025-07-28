import { useState, useEffect, useRef } from 'react';
import dataset from '../dataset.yaml';
import { marked } from 'marked';
import {
  Briefcase,
  GraduationCap,
  Code,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Globe,
  FileText,
  Rocket,
  ArrowRight,
  User,
  ChevronRight,
  Sun,
  Moon,
  Monitor
} from 'lucide-react';

const Home = () => {
  const [data, setData] = useState(null);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState('system');
  const sectionRefs = useRef({});

  useEffect(() => {
    // Load theme preference from localStorage
    const savedTheme = localStorage.getItem('theme') || 'system';
    setTheme(savedTheme);
  }, []);

  useEffect(() => {
    // Handle system preference changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e) => {
      if (theme === 'system') {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    // Initial check
    handleSystemThemeChange(mediaQuery);

    // Listen for changes
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme]);

  useEffect(() => {
    // Update theme based on selection
    if (theme === 'system') {
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemPrefersDark);
    } else {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }

    // Save preference to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const cycleTheme = () => {
    setTheme(current => {
      switch (current) {
        case 'light': return 'dark';
        case 'dark': return 'system';
        default: return 'light';
      }
    });
  };

  useEffect(() => {
    // Load the dataset directly
    setData(dataset);
  }, []);

  useEffect(() => {
    if (!data) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Add offset to trigger earlier

      // Check each section's position
      const sections = Object.keys(sectionRefs.current);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (!element) continue;

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(section);
          break;
        }
      }
    };

    // Add smooth scroll behavior with offset
    const handleClick = (e) => {
      const targetId = e.target.getAttribute('href')?.substring(1);
      if (!targetId) return;

      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (!targetElement) return;

      const navHeight = 100; // Approximate height of the navigation bar
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    };

    // Add click event listeners to all navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
      link.addEventListener('click', handleClick);
    });

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navLinks.forEach(link => {
        link.removeEventListener('click', handleClick);
      });
    };
  }, [data]);

  if (!data) {
    return <div className="flex items-center justify-center min-h-screen dark:bg-gray-900 dark:text-white">Loading...</div>;
  }

  // Add refs for each section
  const addSectionRef = (id) => {
    return (el) => {
      sectionRefs.current[id] = el;
    };
  };

  return (
    <div className="bg-white dark:bg-gray-900 min-h-screen relative transition-colors duration-200 font-sans">
      {/* Background decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Main blobs */}
        <div className="absolute top-[25vh] left-[45vw] w-[25vw] h-[25vw] bg-pink-500 dark:bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-[20vh] left-[25vw] h-[30vw] w-[30vw] bg-blue-500 dark:bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        
        {/* Additional animated elements */}
        <div className="absolute bottom-[15vh] right-[20vw] w-[20vw] h-[20vw] bg-purple-500 dark:bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-purple-50/30 to-pink-50/30 dark:from-blue-900/20 dark:via-purple-900/20 dark:to-pink-900/20 animate-gradient-shift"></div>
      </div>

      {/* Add these styles to your global CSS or Tailwind config */}
      <style jsx>{`
        @keyframes gradient-shift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-gradient-shift {
          animation: gradient-shift 15s ease infinite;
          background-size: 200% 200%;
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
      `}</style>

      {/* Header */}
      <header className="py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white tracking-tight font-display">{data.name}</h1>
              <p className="text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mt-2 font-light">{data.title}</p>
            </div>
          </div>
        </div>
      </header>

      <nav className="sticky top-0 z-50 bg-white/30 dark:bg-gray-900/30 backdrop-blur-md border-b border-white/20 dark:border-gray-800/20">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <ul className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <li>
                <a 
                  href="#about" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'about' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#skills" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'skills' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a 
                  href="#experience" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'experience' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a 
                  href="#projects" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'projects' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a 
                  href="#open-source" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'open-source' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  Open Source
                </a>
              </li>
              <li>
                <a 
                  href="#education" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'education' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  Education
                </a>
              </li>
              {data.posts && (
                <li>
                  <a 
                    href="#blog" 
                    className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                      activeSection === 'blog' 
                        ? 'text-gray-900 dark:text-white after:w-full' 
                        : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                    }`}
                  >
                    Blog
                  </a>
                </li>
              )}
              <li>
                <a 
                  href="#contact" 
                  className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 ${
                    activeSection === 'contact' 
                      ? 'text-gray-900 dark:text-white after:w-full' 
                      : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white after:w-0 hover:after:w-full'
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
            <button
              onClick={cycleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Sun className="text-yellow-500" size={20} />
              ) : theme === 'dark' ? (
                <Moon className="text-blue-400" size={20} />
              ) : (
                <Monitor className="text-gray-700 dark:text-gray-300" size={20} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-16 space-y-24">
        {/* About / Professional Summary */}
        <section id="about" ref={addSectionRef('about')} className="relative">
          <div className="absolute top-0 left-0 w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center font-display">
            <User className="text-blue-500 mr-2" size={24} weight="bold" />
            About
          </h2>
          <div className="prose prose-blue dark:prose-invert max-w-none">
            <div dangerouslySetInnerHTML={{ __html: marked(data.professional_summary) }} />
          </div>
        </section>

        {/* Technical Skills */}
        <section id="skills" ref={addSectionRef('skills')} className="relative">
          <div className="absolute bottom-20 right-0 w-32 h-32 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center font-display">
            <Code className="text-blue-500 mr-2" size={24} weight="bold" />
            Technical Skills
          </h2>

          <div className="space-y-8">
            {/* Languages */}
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-white flex items-center">
                <Code weight="bold" className="mr-2 text-blue-500" size={20} />
                Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.technical_skills.languages.map((skill, index) => (
                  <div key={index} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <ArrowRight className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={16} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-white flex items-center">
                <Code weight="bold" className="mr-2 text-blue-500" size={20} />
                Backend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.technical_skills.backend_frameworks_tools.map((skill, index) => (
                  <div key={index} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <ArrowRight className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={16} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-white flex items-center">
                <Code weight="bold" className="mr-2 text-blue-500" size={20} />
                Frontend
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.technical_skills.frontend_technologies.map((skill, index) => (
                  <div key={index} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <ArrowRight className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={16} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* DevOps */}
            <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
              <h3 className="font-medium text-lg mb-4 text-gray-900 dark:text-white flex items-center">
                <Code weight="bold" className="mr-2 text-blue-500" size={20} />
                DevOps & Infrastructure
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {data.technical_skills.devops_infrastructure.map((skill, index) => (
                  <div key={index} className="text-gray-700 dark:text-gray-300 flex items-center">
                    <ArrowRight className="mr-2 text-blue-400 flex-shrink-0 mt-1" size={16} />
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" ref={addSectionRef('experience')} className="relative">
          <div className="absolute top-40 left-10 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Briefcase className="text-blue-500 mr-2" size={24} weight="bold" />
            Experience
          </h2>
          <div className="space-y-6">
            {data.experience.map((job, index) => (
              <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{job.position}</h3>
                  <p className="text-gray-500 dark:text-gray-500 mt-1 sm:mt-0 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">{job.period}</p>
                </div>
                <div className="mb-5">
                  <p className="font-medium text-blue-600 dark:text-blue-400 flex items-center">
                    <Briefcase weight="fill" className="mr-2 text-blue-500 dark:text-blue-500" size={16} />
                    {job.company}
                  </p>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{job.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" ref={addSectionRef('projects')} className="relative">
          <div className="absolute top-20 right-20 w-28 h-28 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Rocket className="text-blue-500 mr-2" size={24} weight="bold" />
            Projects
          </h2>

          <div className="space-y-12">
            {data.projects.map((project, index) => (
              <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4">
                  <h3 className="font-bold text-xl text-gray-900 dark:text-white">{project.name}</h3>
                  <p className="text-gray-500 dark:text-gray-500 mt-1 sm:mt-0 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">{project.period}</p>
                </div>

                {project.website && (
                  <div className="mb-5">
                    <a
                      href={`https://${project.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-800 flex items-center group transition-colors"
                    >
                      <Globe className="mr-2 text-blue-500 dark:text-blue-500 group-hover:text-blue-700" size={16} />
                      <span className="border-b border-blue-200 dark:border-blue-600 pb-0.5">{project.website}</span>
                    </a>
                  </div>
                )}

                <p className="font-medium text-gray-700 dark:text-gray-300 mb-5">{project.description}</p>

                {project.details && (
                  <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                    {project.details.map((detail, i) => (
                      <li key={i} className="flex items-start">
                        <ArrowRight className="mr-2 text-blue-400 dark:text-blue-500 flex-shrink-0 mt-1" size={16} />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {project.services && (
                  <div className="mt-8 space-y-6">
                    <p className="font-medium text-gray-900 dark:text-white flex items-center">
                      <Rocket className="mr-2 text-blue-500" size={18} />
                      Services:
                    </p>
                    {project.services.map((service, i) => (
                      <div key={i} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
                        <h4 className="font-semibold text-gray-800 dark:text-white mb-2">{service.name}</h4>
                        {service.description && (
                          <p className="text-gray-600 dark:text-gray-400 mb-3">{service.description}</p>
                        )}
                        {service.details && (
                          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                            {service.details.map((detail, j) => (
                              <li key={j} className="flex items-start">
                                <ArrowRight className="mr-2 text-blue-400 dark:text-blue-500 flex-shrink-0 mt-1" size={14} />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Open Source */}
        <section id="open-source" ref={addSectionRef('open-source')} className="relative">
          <div className="absolute top-10 left-40 w-20 h-20 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Github className="text-blue-500 mr-2" size={24} />
            Open Source Contributions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.open_source.map((project, index) => (
              <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3">{project.name}</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
                <div className="flex items-center flex-wrap gap-2">
                  <a
                    href={`https://${project.url}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 dark:text-blue-400 hover:text-blue-800 flex items-center group transition-colors"
                  >
                    <Github className="mr-1.5 text-blue-500 dark:text-blue-500 group-hover:text-blue-700" size={16} />
                    <span className="underline underline-offset-8 !decoration-1 decoration-200 dark:decoration-blue-600 pb-0.5">{project.url}</span>
                  </a>
                  {project.status && (
                    <span className="inline-block text-xs bg-amber-100 text-amber-800 px-2.5 py-1 rounded-full">
                      {project.status}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" ref={addSectionRef('education')} className="relative">
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <GraduationCap className="text-blue-500 mr-2" size={24} weight="bold" />
            Education
          </h2>
          <div className="space-y-6">
            {data.education.map((edu, index) => (
              <div key={index} className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-1 flex items-center">
                  <GraduationCap weight="fill" className="mr-2 text-blue-500" size={20} />
                  {edu.degree}
                </h3>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mt-2">
                  <p className="text-gray-700 dark:text-gray-300 font-medium">{edu.institution}</p>
                  <p className="text-gray-500 dark:text-gray-500 mt-1 sm:mt-0 text-sm bg-gray-50 dark:bg-gray-800 px-3 py-1 rounded-full">{edu.period}</p>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{edu.location}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Posts */}
        {data.posts && (
          <section id="blog" ref={addSectionRef('blog')} className="relative">
            <div className="absolute top-20 left-10 w-28 h-28 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
            <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
              <FileText className="text-blue-500 mr-2" size={24} />
              Blog Posts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {data.posts.map((post, index) => (
                <a
                  key={index}
                  href={`https://${post.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-6 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300 group"
                >
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 flex items-center group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <FileText className="mr-2 text-blue-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" size={18} />
                    {post.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">{post.description}</p>
                </a>
              ))}
            </div>
          </section>
        )}

        {/* Contact */}
        <section id="contact" ref={addSectionRef('contact')} className="relative">
          <div className="absolute bottom-10 left-60 w-28 h-28 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10 opacity-70 blur-xl"></div>
          <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white flex items-center">
            <Mail className="text-blue-500 mr-2" size={24} />
            Contact
          </h2>
          <div className="bg-white/30 dark:bg-gray-800/30 backdrop-blur-md p-8 rounded-lg border border-white/20 dark:border-gray-700/20 hover:border-blue-100/50 dark:hover:border-blue-900/50 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">
              <div className="flex items-center group">
                <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                  <Mail className="text-blue-500 dark:text-blue-400" size={20} />
                </div>
                <a href={`mailto:${data.contact_info.email}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-sm overflow-hidden overflow-ellipsis border-b border-blue-200 dark:border-blue-600 pb-0.5 transition-colors">
                  {data.contact_info.email}
                </a>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                  <Phone className="text-blue-500 dark:text-blue-400" size={20} />
                </div>
                <a href={`tel:${data.contact_info.phone}`} className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-sm overflow-hidden overflow-ellipsis border-b border-blue-200 dark:border-blue-600 pb-0.5 transition-colors">
                  {data.contact_info.phone}
                </a>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                  <MapPin className="text-blue-500 dark:text-blue-400" size={20} />
                </div>
                <span className="text-gray-700 dark:text-gray-300 text-sm">{data.contact_info.location}</span>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                  <Globe className="text-blue-500 dark:text-blue-400" size={20} />
                </div>
                <a
                  href={`https://${data.contact_info.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-sm overflow-hidden overflow-ellipsis border-b border-blue-200 dark:border-blue-600 pb-0.5 transition-colors"
                >
                  {data.contact_info.website}
                </a>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                  <Github className="text-blue-500 dark:text-blue-400" size={20} />
                </div>
                <a
                  href={`https://${data.contact_info.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-sm overflow-hidden overflow-ellipsis border-b border-blue-200 dark:border-blue-600 pb-0.5 transition-colors"
                >
                  {data.contact_info.github}
                </a>
              </div>

              <div className="flex items-center group">
                <div className="bg-blue-50 dark:bg-gray-800 p-3 rounded-full mr-4 flex-shrink-0 group-hover:bg-blue-100 dark:group-hover:bg-gray-700 transition-colors">
                  <Linkedin className="text-blue-500 dark:text-blue-400" size={20} />
                </div>
                <a
                  href={`https://${data.contact_info.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-800 text-sm overflow-hidden overflow-ellipsis border-b border-blue-200 dark:border-blue-600 pb-0.5 transition-colors"
                >
                  {data.contact_info.linkedin}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-gray-600 dark:text-gray-400 text-center py-8 mt-20">
        <div className="max-w-5xl mx-auto px-6">
          <p>&copy; {new Date().getFullYear()} {data.name}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;