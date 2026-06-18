import React from 'react';
import { Github, ExternalLink, Briefcase } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const Projects = () => {
  const projects = [
    {
      title: 'Credit Card Fraud Detection',
      description: 'Developed a supervised ML model on a 284K imbalanced dataset, applied random undersampling, benchmarked Logistic Regression vs Random Forest, and achieved ROC-AUC 0.842 with an F1-score boost from 0.83 → 0.92 through optimal threshold tuning.',
      technologies: ['Machine Learning', 'Python', 'Pandas', 'Scikit-learn', 'Logistic Regression', 'Random Forest', 'ROC-AUC'],

    },
    {
      title: 'YOLOv8-Based LIPSS Periodicity Prediction',
      description: 'Developed a YOLOv8-based model to predict the periodicity of LIPSS (Low-Intensity Periodic Scattering Signals) in real-time using 2D FFT, achieving 95% accuracy in detecting periodic patterns in medical images.',
      technologies: ['Python', 'YOLOv8', 'OpenCV', 'NumPy', '2D FFT', 'Machine Learning', 'Computer Vision'],
      github: 'https://github.com/17VaibhaVPal/Yolo-v8-Machine-Learning',

    },
    {
      title: 'Career Catalyst',
      description: 'Developed a MERN-based job search platform with JWT auth, resume uploads (Multer), employer job postings, advanced job filters, and a secure backend for managing users, applications, and job workflows.',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Mongoose', 'JWT', 'Multer'],
      github: 'https://github.com/17VaibhaVPal/CareerNest',
      live: 'https://careercatalyst1.onrender.com/landing'

    },
    {
      title: 'FreeVerse_X',
      description: 'A full-stack microblogging platform with tweets, comments, follows, bookmarks, real-time messaging, and voice typing built using Next.js, GraphQL, Prisma, PostgreSQL, Redis, and AWS S3 with secure JWT authentication',
      technologies: ['Next.js', 'TypeScript', 'Node.js', 'GraphQL', 'Prisma', 'PostgreSQL', 'Redis', 'AWS S3', 'JWT'],
      github: 'https://github.com/17VaibhaVPal/FreeVerse_x',
      live: 'https://freeverse-x.vercel.app/',

    },
    {
      title: 'Weed & Crop Classification',
      description: 'Built a Deep Learning model using a CNN with Data Augmentation, Batch Normalization, and Dropout to classify crops and weeds, achieving 83% Accuracy, 90% Precision, and 87% F1-score.',
      technologies: ['Deep Learning', 'CNN', 'Python', 'TensorFlow', 'Keras', 'Image Processing', 'ROC-AUC'],
    },
    
    {
      title: 'Fake News Prediction',
      description: 'Developed a Logistic Regression model on a Kaggle dataset using TF-IDF, Porter Stemming, and stratified train-test split, achieving 97.9% test accuracy with only 0.75% train-test gap.',
      technologies: ['Machine Learning', 'Python', 'Pandas', 'Scikit-learn', 'TF-IDF', 'Logistic Regression', 'NLP'],
    },


  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Work Experience
          </span>
        </h2>

        <ScrollReveal delay={200}>
        <div className="mb-16">
          <div className="bg-gray-800/50 rounded-lg p-8 backdrop-blur-sm border border-gray-700/50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div className="flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-2xl font-semibold">Clear (formerly ClearTax)</h3>
                  <p className="text-purple-400 font-medium">Software Development Engineer Intern</p>
                </div>
              </div>
              <span className="text-gray-400 mt-2 md:mt-0 text-sm font-medium bg-gray-700/50 px-3 py-1 rounded-full w-fit">
                Jan 2026 – July 2026
              </span>
            </div>

            <ul className="space-y-3 text-gray-300 mt-6">
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 text-xs">&#9670;</span>
                <span>Developed and maintained B2C marketing pages and 10+ financial calculators using <strong className="text-white">Next.js, React, TypeScript, Tailwind CSS</strong>, and styled-components, serving <strong className="text-white">2M+ monthly users</strong> on cleartax.in with SSR and SSG for SEO-friendly page delivery.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 text-xs">&#9670;</span>
                <span>Improved Core Web Vitals through Lighthouse-driven optimization, achieving <strong className="text-white">25% improvement in performance scores</strong> and <strong className="text-white">18% increase in organic search traffic</strong>; revamped calculator UI into a unified mobile-responsive design, reducing mobile bounce rate by <strong className="text-white">15%</strong> during tax-filing season.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 text-xs">&#9670;</span>
                <span>Built internal CMS tools using <strong className="text-white">Retool</strong>, enabling content teams to self-serve page updates, manage fund-level FAQs, configure page-specific and inline CTAs, and author reusable components — reducing engineering dependency by <strong className="text-white">70%</strong> and eliminating code deploys for content changes.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 text-xs">&#9670;</span>
                <span>Built and maintained RESTful APIs using <strong className="text-white">Python, Django Framework, MySQL, Redis, and S3</strong>, powering personalized cards, lead capture, fund FAQs, URL shortener, and financial tools, with end-to-end test coverage across DAO, service, and resource layers ensuring zero-regression deployments.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400 mt-1.5 text-xs">&#9670;</span>
                <span>Implemented end-to-end <strong className="text-white">CI/CD workflows</strong> using GitHub Actions, Jenkins, Docker, AWS ECR, Helm, and Kubernetes (EKS) for automated testing and multi-stage deployments; leveraged <strong className="text-white">Coralogix and Kubernetes dashboards</strong> for real-time log monitoring and production issue resolution.</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Python', 'Django', 'MySQL', 'Redis', 'AWS S3', 'Docker', 'Kubernetes', 'Jenkins', 'Retool'].map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-700 rounded-full text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
        </ScrollReveal>

        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal key={index} delay={index * 150}>
            <div
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300 h-full"
            >
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 bg-gray-700 rounded-full text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Conditional Rendering */}
              <div className="flex space-x-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github className="w-5 h-5 mr-1" />
                    Code
                  </a>
                )}

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <ExternalLink className="w-5 h-5 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;