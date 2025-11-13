import React from 'react';
import { Code2, Brain, Coffee } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </span>
        </h2>

        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Code2 className="w-6 h-6 mr-2 text-blue-500" />
              Passionate Developer
            </h3>
            <p className="text-gray-300">
            I'm a final-year B.Tech student from MNNIT Allahabad with a strong foundation in Data Science, Machine Learning, and Full-Stack Development. I enjoy building end-to-end products—from training ML models on real-world datasets to deploying scalable backend systems and responsive frontends.
            My work spans YOLOv8-based computer vision pipelines,  ML models, automated Python workflows, RESTful APIs, and full-stack projects using MERN stack.
            </p>
          </div>

          <div className="bg-gray-800/50 rounded-lg p-6 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-4 flex items-center">
              <Brain className="w-6 h-6 mr-2 text-purple-500" />
              Areas of Interest
            </h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              <li>Full Stack Web Development</li>
              <li>Coding</li>
              <li>AI/ML</li> 
              <li>Data Science</li>
            </ul>
          </div>

          
        </div>
      </div>
    </section>
  );
};

export default About;