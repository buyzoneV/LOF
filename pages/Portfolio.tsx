
import React, { useState } from 'react';
import { PROJECTS } from '../constants';

export const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'FINTECH', 'E-COMMERCE', 'COLLABORATION'];

  const filteredProjects = filter === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === filter);

  return (
    <div className="animate-in fade-in duration-700 py-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-black mb-6 tracking-tighter">Pioneering <span className="text-gradient">Digital Excellence</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto font-medium">
            Explore our curated gallery of high-impact software solutions.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-8 py-3 rounded-full text-sm font-bold transition-all ${
                filter === cat 
                  ? 'bg-[#00A3FF] text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-primary hover:text-primary'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group bg-white rounded-[2rem] overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <span className="text-white font-bold flex items-center gap-2">View Case Study →</span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-[10px] font-black tracking-widest uppercase text-primary bg-blue-50 px-3 py-1 rounded-full">{project.category}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-500 text-sm mb-6 font-medium line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold text-slate-400 border border-slate-200 px-2 py-1 rounded-md">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
