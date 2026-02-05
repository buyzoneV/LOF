
import React from 'react';
import { SERVICES } from '../constants';

export const Services: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 inline-block">Expertise Redefined</span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter">
            Service Offerings & <br/>
            <span className="text-gradient">Tech Stack</span>
          </h1>
          <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
            We engineer high-performance mobile apps, scalable web platforms, and complex SaaS architectures using industry-leading technologies.
          </p>
        </div>

        <div className="space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row items-center gap-16 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8">
                <div className={`inline-flex p-4 ${service.color} rounded-2xl`}>
                   <div className="w-8 h-8 bg-current opacity-30 rounded" />
                </div>
                <h2 className="text-4xl font-black tracking-tight">{service.title}</h2>
                <p className="text-slate-500 text-lg leading-relaxed font-medium">
                  {service.description} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="space-y-4">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Our Stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {service.tech.map((tech) => (
                      <span key={tech} className="px-4 py-2 bg-slate-100 rounded-xl text-sm font-bold text-slate-600 border border-slate-200/50">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <button className="flex items-center gap-2 text-primary font-bold hover:underline group">
                  View Case Studies <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
              <div className="flex-1 w-full">
                <div className="aspect-[4/3] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200">
                   <img 
                    src={`https://picsum.photos/seed/${service.id}/800/600`} 
                    alt={service.title} 
                    className="w-full h-full object-cover opacity-80 mix-blend-multiply" 
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
