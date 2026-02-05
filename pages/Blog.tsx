
import React from 'react';
import { BLOG_POSTS } from '../constants';
import { Page } from '../types';

interface BlogProps {
  onNavigate: (page: Page) => void;
}

export const Blog: React.FC<BlogProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700 py-20 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-20">
          <h1 className="text-5xl font-black mb-6 tracking-tighter">Engineering <span className="text-primary">Insights.</span></h1>
          <p className="text-slate-500 text-lg max-w-2xl font-medium">
            A technical log of how we build scalable mobile apps, robust backends, and high-performance SaaS platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Sidebar */}
          <aside className="lg:col-span-3 space-y-10">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search logs..." 
                className="w-full py-3 px-5 bg-white border border-slate-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent outline-none text-sm transition-all" 
              />
            </div>
            
            <div>
              <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-6 px-1">Specializations</h3>
              <nav className="space-y-1">
                {['All Posts', 'Mobile Dev', 'Architecture', 'SaaS Scale'].map((cat, i) => (
                  <button key={cat} className={`w-full flex justify-between items-center px-4 py-3 rounded-xl transition-all ${i === 0 ? 'bg-primary/10 text-primary font-bold' : 'text-slate-500 hover:bg-white'}`}>
                    <span className="text-sm">{cat}</span>
                    <span className="text-[10px] font-bold opacity-50">{i === 0 ? '24' : i * 4 + 4}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-blue-500/5 rounded-3xl border border-primary/10">
              <h4 className="font-bold mb-3 text-sm">Dev Deep-Dives</h4>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">Get our monthly engineering breakdown straight to your inbox.</p>
              <input type="email" placeholder="Email address" className="w-full p-3 rounded-xl text-xs mb-3 border border-slate-200" />
              <button className="w-full bg-slate-900 text-white text-xs font-bold py-3 rounded-xl hover:bg-black transition-colors">Subscribe</button>
            </div>
          </aside>

          {/* Main List */}
          <section className="lg:col-span-9 space-y-16">
            {BLOG_POSTS.map((post) => (
              <article 
                key={post.id} 
                className="group flex flex-col md:flex-row gap-10 items-start cursor-pointer"
                onClick={() => onNavigate('BLOG_POST')}
              >
                <div className="w-full md:w-1/3 aspect-[4/3] rounded-3xl overflow-hidden shrink-0 shadow-lg group-hover:shadow-xl transition-all">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="flex-1 space-y-6">
                  <div className="flex items-center gap-4">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-[10px] font-black tracking-wider uppercase">{post.category}</span>
                    <span className="text-slate-400 text-[10px] font-bold tracking-widest">{post.date}</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-black group-hover:text-primary transition-colors leading-tight">
                    {post.title}
                  </h2>
                  <p className="text-slate-500 leading-relaxed font-medium text-sm md:text-base line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 pt-2">
                    <img src={post.author.avatar} alt={post.author.name} className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-bold text-slate-700">{post.author.name} <span className="text-slate-400 font-medium ml-1">/ {post.author.role}</span></span>
                  </div>
                </div>
              </article>
            ))}
            
            <div className="flex justify-center gap-2 pt-10">
              <button className="w-10 h-10 rounded-xl bg-primary text-white font-bold">1</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 font-bold hover:border-primary hover:text-primary transition-all">2</button>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 font-bold hover:border-primary hover:text-primary transition-all">3</button>
              <span className="px-2 self-center text-slate-400">...</span>
              <button className="w-10 h-10 rounded-xl bg-white border border-slate-200 text-slate-500 font-bold hover:border-primary hover:text-primary transition-all">8</button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
