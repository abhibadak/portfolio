import React, { useState, useEffect, useRef } from 'react';
import { 
  ExternalLink, Github, Code, Database, Server, Cloud, 
  Zap, Monitor, Users, Calendar, Activity, BookOpen,
  Dumbbell, Brain, Container, GitBranch
} from 'lucide-react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      id: 1,
      title: 'Gym Fitness Planner',
      description: 'Comprehensive fitness application with BMI calculator, meal planning, and supplement recommendations',
      longDescription: 'A full-featured fitness platform built with Streamlit that helps users track their fitness journey, calculate BMI, generate personalized meal plans, and get supplement recommendations based on their goals.',
      image: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Streamlit', 'Python', 'Pandas', 'Nutrition API', 'SQLite'],
      features: [
        'BMI Calculator with health recommendations',
        'Personalized meal plan generator',
        'Supplement recommendation engine',
        'Calorie tracking and analytics',
        'Workout routine planner'
      ],
      category: 'Health & Fitness',
      icon: Dumbbell,
      color: 'from-green-500 to-emerald-600',
      github: 'https://github.com/abhibadak',
      demo: '#',
      stats: {
        users: '500+',
        features: '15+',
        rating: '4.8/5'
      }
    },
    {
      id: 2,
      title: 'AI Book Suggester',
      description: 'Intelligent book recommendation system powered by Gemini API with reading time estimation',
      longDescription: 'An AI-powered book recommendation platform that uses Google\'s Gemini API to analyze user preferences and suggest books from Google Books API. Features include reading time estimation, book summaries, and personalized recommendations.',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Streamlit', 'Gradio', 'Gemini API', 'Google Books API', 'NLP'],
      features: [
        'AI-powered book recommendations',
        'Reading time estimation algorithm',
        'Book summary generation',
        'Personalized reading lists',
        'Genre-based filtering'
      ],
      category: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-violet-600',
      github: 'https://github.com/abhibadak',
      demo: '#',
      stats: {
        books: '1M+',
        accuracy: '94%',
        languages: '10+'
      }
    },
    {
      id: 3,
      title: 'DevOps Dashboard',
      description: 'Real-time monitoring dashboard for Docker containers with geolocation and messaging features',
      longDescription: 'A comprehensive DevOps dashboard that provides real-time monitoring of Docker containers, system metrics, and includes geolocation services for distributed systems monitoring and team communication features.',
      image: 'https://images.pexels.com/photos/159151/book-address-book-learning-learn-159151.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['React', 'Node.js', 'Docker', 'WebSocket', 'Redis', 'MongoDB'],
      features: [
        'Real-time container monitoring',
        'System metrics visualization',
        'Geolocation tracking',
        'Team messaging system',
        'Alert management'
      ],
      category: 'DevOps & Monitoring',
      icon: Monitor,
      color: 'from-cyan-500 to-blue-600',
      github: 'https://github.com/abhibadak',
      demo: '#',
      stats: {
        containers: '100+',
        uptime: '99.9%',
        alerts: '50+'
      }
    },
    {
      id: 4,
      title: 'Jenkins CI/CD Pipeline',
      description: 'Automated CI/CD pipeline with Docker integration and Kubernetes deployment',
      longDescription: 'A robust CI/CD pipeline built with Jenkins that automates the entire software delivery process from code commit to production deployment, featuring Docker containerization and Kubernetes orchestration.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600',
      technologies: ['Jenkins', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
      features: [
        'Automated build processes',
        'Docker containerization',
        'Kubernetes deployment',
        'GitHub/DockerHub integration',
        'Infrastructure as Code'
      ],
      category: 'CI/CD & Automation',
      icon: GitBranch,
      color: 'from-orange-500 to-red-600',
      github: 'https://github.com/abhibadak',
      demo: '#',
      stats: {
        deployments: '200+',
        success: '98%',
        time: '15min'
      }
    }
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-75"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-bold font-rajdhani mb-4 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            Showcasing my journey in DevOps, cloud infrastructure, and full-stack development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group transform transition-all duration-1000 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-purple-400/50 transition-all duration-500 hover:scale-105">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className={`bg-gradient-to-r ${project.color} px-3 py-1 rounded-full text-white text-sm font-medium flex items-center space-x-1`}>
                      <project.icon size={14} />
                      <span>{project.category}</span>
                    </div>
                  </div>

                  {/* Project Actions */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <Github size={16} className="text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-white/70 mb-4 line-clamp-2">
                    {activeProject === project.id ? project.longDescription : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-white/10 rounded-full text-xs text-white/80 border border-white/20">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Project Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-white">{value}</div>
                        <div className="text-xs text-white/60 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>

                  {/* Features (shown on hover) */}
                  {activeProject === project.id && (
                    <div className="space-y-2 animate-fadeIn">
                      <h4 className="text-sm font-semibold text-purple-300">Key Features:</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, featureIndex) => (
                          <li key={featureIndex} className="text-xs text-white/70 flex items-center space-x-2">
                            <span className="w-1 h-1 bg-purple-400 rounded-full flex-shrink-0"></span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-3 mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-400/50 px-4 py-2 rounded-full text-center text-sm text-white font-medium transition-all duration-200 flex items-center justify-center space-x-2"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 bg-gradient-to-r ${project.color} hover:opacity-90 px-4 py-2 rounded-full text-center text-sm text-white font-medium transition-all duration-200 flex items-center justify-center space-x-2`}
                    >
                      <ExternalLink size={16} />
                      <span>Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className={`text-center mt-12 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <a
            href="https://github.com/abhibadak"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 px-6 py-3 rounded-full font-medium transition-all duration-200 transform hover:scale-105"
          >
            <Github size={20} />
            <span>View All Projects</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;