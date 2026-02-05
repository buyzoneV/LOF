
import React from 'react';
import { Page } from '../types';
import { PROJECTS, SERVICES, BLOG_POSTS } from '../constants';

interface HomeProps {
  onNavigate: (page: Page) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 overflow-hidden hero-bg">
        <div className="max-w-7xl mx-auto px-6 text-center z-10">
          <div className="mb-12 inline-block animate-float">
            <div className="w-48 h-48 md:w-64 md:h-64 bg-slate-900 rounded-[2.5rem] flex items-center justify-center p-8 shadow-2xl">
               <img src="https://picsum.photos/seed/lof-logo/400/400" alt="Logo" className="w-full h-full object-contain rounded-xl opacity-80" />
            </div>
          </div>
          <h1 className="text-4xl md:text-7xl font-black leading-tight mb-8 tracking-tighter">
            우리는 비즈니스를 움직이는<br/>
            <span className="text-gradient">디지털 플랫폼</span>을 만듭니다.
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
            비즈니스의 가능성을 현실로 바꾸는 최신 기술 스택 기반의 <br className="hidden md:block"/>
            웹, 모바일 앱, 그리고 엔터프라이즈 SaaS 솔루션을 제공합니다.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={() => onNavigate('PORTFOLIO')}
              className="w-full sm:w-auto px-10 py-4 bg-[#00A3FF] text-white font-bold rounded-full hover:shadow-xl hover:shadow-blue-500/40 transition-all flex items-center justify-center gap-2 group"
            >
              포트폴리오 보기 
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
            <button 
              onClick={() => onNavigate('TECH_LOG')}
              className="w-full sm:w-auto px-10 py-4 bg-white border border-slate-200 font-bold rounded-full hover:border-[#00A3FF] hover:text-[#00A3FF] transition-all"
            >
              테크 로그 읽기
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-300">
          <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Core Services</h2>
            <div className="h-1.5 w-20 bg-[#00A3FF] rounded-full"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="group p-8 bg-[#F8FAFC] rounded-2xl border border-slate-100 hover:border-[#00A3FF]/50 transition-all hover:-translate-y-2">
                <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-6 h-6 bg-current opacity-30 rounded" />
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24" id="portfolio">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Featured Projects</h2>
              <p className="text-slate-500 font-medium">LOF가 함께 만든 혁신적인 결과물들입니다.</p>
            </div>
            <button 
              onClick={() => onNavigate('PORTFOLIO')}
              className="text-[#00A3FF] font-bold flex items-center gap-1 hover:underline group"
            >
              View All Portfolio <span className="group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group cursor-pointer" onClick={() => onNavigate('PORTFOLIO')}>
                <div className="relative aspect-video bg-slate-200 rounded-3xl overflow-hidden mb-6">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-8">
                    <span className="text-white font-bold text-lg">{project.category}</span>
                    <span className="text-white/70 text-sm">{project.tags.join(', ')}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00A3FF] transition-colors">{project.title}</h3>
                <p className="text-slate-500 text-sm font-medium">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Log Preview */}
      <section className="py-24 bg-slate-50" id="techlog">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">Tech Log</h2>
            <p className="text-slate-500 font-medium">우리가 고민하고 해결한 기술적 도전들을 기록합니다.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {BLOG_POSTS.slice(0, 2).map((post) => (
              <div 
                key={post.id} 
                className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all cursor-pointer group"
                onClick={() => onNavigate('BLOG_POST')}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 ${post.category === 'ENGINEERING' ? 'bg-blue-50 text-blue-600' : 'bg-green-50 text-green-600'} text-[10px] font-bold rounded-full uppercase tracking-wider`}>
                    {post.category}
                  </span>
                  <span className="text-slate-400 text-[10px] font-bold tracking-widest">{post.date}</span>
                </div>
                <h4 className="text-2xl font-bold mb-4 group-hover:text-[#00A3FF] transition-colors">{post.title}</h4>
                <p className="text-slate-500 mb-6 line-clamp-2 text-sm leading-relaxed">{post.excerpt}</p>
                <div className="flex items-center gap-3">
                  <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full bg-slate-100" />
                  <span className="text-sm font-bold text-slate-700">{post.author.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
