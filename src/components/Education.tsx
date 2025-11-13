import React from 'react';
import { BookOpen } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Education
          </span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">Motilal Nehru National Institute of Technology Allahabad</h3>
            </div>
            <div className="ml-12">
              <p className="text-gray-400 mb-2">B.Tech in Electronics and Communication Engineering</p>
              <p className="text-gray-400 mb-4">2022 - 2026</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>CGPA: 7.02/10</li>
               
              </ul>
              
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">Lucknow Public School</h3>
            </div>
            <div className="ml-12">
              <p className="text-gray-400 mb-2">Senior Secondary</p>
              <p className="text-gray-400 mb-4">2020 - 2022</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Completed senior secondary in PCM with 94.3%</li>
                <li>C.B.S.E. Board</li>
                
              </ul>
              
            </div>
          </div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-800/50 rounded-lg p-6 mb-8 backdrop-blur-sm hover:transform hover:scale-105 transition-all duration-300">
            <div className="flex items-center mb-4">
              <BookOpen className="w-8 h-8 text-blue-500 mr-4" />
              <h3 className="text-2xl font-semibold">S.K.D Academy</h3>
            </div>
            <div className="ml-12">
              <p className="text-gray-400 mb-2">Secondary</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Completed senior secondary school with 95.4%</li>
                <li>Involved in various cultural activities like dance and music</li>
              </ul>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;