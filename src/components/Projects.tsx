import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

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
            Work Experience and Projects
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;