
import React from 'react';

interface BlogPostViewProps {
  onBack: () => void;
}

export const BlogPostView: React.FC<BlogPostViewProps> = ({ onBack }) => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-20 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-400 hover:text-primary font-bold text-sm mb-12 transition-colors">
          ← Back to Logs
        </button>

        <header className="mb-16">
          <div className="flex gap-4 mb-8">
            <span className="px-3 py-1 bg-primary/10 text-primary text-[10px] font-black rounded-md uppercase tracking-widest">SaaS Architecture</span>
            <span className="text-slate-400 text-[10px] font-bold uppercase tracking-widest self-center">Oct 24, 2023 • 12 min read</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter leading-[1.1]">
            Building Scalable SaaS Architectures: From MVP to Enterprise Grade
          </h1>
          <div className="flex items-center gap-4 py-8 border-y border-slate-100">
            <div className="w-12 h-12 rounded-full bg-slate-100" />
            <div>
              <p className="font-bold text-slate-900">Marcus Sterling</p>
              <p className="text-xs text-slate-500 font-medium">CTO at LOF Tech</p>
            </div>
          </div>
        </header>

        <div className="prose prose-slate lg:prose-xl max-w-none">
          <p className="text-xl text-slate-500 font-medium leading-relaxed mb-12">
            In the fast-paced world of SaaS development, the ability to scale isn't just a technical requirement—it's a business necessity. At LOF Tech, we've helped dozens of startups transition from fragile MVPs to robust enterprise-grade platforms.
          </p>
          
          <h2 className="text-2xl font-black mt-16 mb-6">1. The Multi-Tenant Conundrum</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            The core of any SaaS is multi-tenancy. Choosing between shared database instances versus siloed databases is one of the most critical early decisions. For most modern SaaS products, a Logical Isolation model provides the best balance of cost and security.
          </p>

          <div className="my-12 p-10 bg-slate-50 border border-slate-200 rounded-[2rem]">
            <div className="h-64 flex items-center justify-center gap-8">
              <div className="w-40 h-40 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center font-mono text-[10px] text-slate-400">Tenant A Context</div>
              <div className="w-40 h-40 bg-primary/10 rounded-2xl flex items-center justify-center font-mono text-[10px] text-primary">Shared API Gateway</div>
              <div className="w-40 h-40 border-2 border-dashed border-slate-300 rounded-2xl flex items-center justify-center font-mono text-[10px] text-slate-400">Tenant B Context</div>
            </div>
            <p className="text-center text-xs text-slate-400 italic mt-6">Figure 1.0: Logical isolation using RLS in a shared RDS instance.</p>
          </div>

          <h2 className="text-2xl font-black mt-16 mb-6">2. Designing for Resilience</h2>
          <p className="text-slate-600 mb-8 leading-relaxed">
            Failure is inevitable. Our approach centers on Graceful Degradation. If your search microservice is down, the dashboard should still function, perhaps showing cached data or a simple message.
          </p>
          
          <div className="bg-slate-900 rounded-2xl p-8 my-10 font-mono text-xs text-primary/80 leading-relaxed">
            <p className="text-slate-500">// Implementation Example (Node.js)</p>
            <p className="mt-2"><span className="text-blue-400">const</span> breaker = <span className="text-blue-400">new</span> circuitBreaker(getStats, options);</p>
            <p>breaker.fallback(() =&gt; (&#123; status: <span className="text-amber-400">'unavailable'</span> &#125;));</p>
          </div>

          <blockquote className="border-l-4 border-primary pl-8 my-12 italic text-2xl font-medium text-slate-700">
            "The goal of scalability is not just handling more traffic, but handling it predictably while maintaining a constant unit cost."
          </blockquote>
        </div>

        <div className="mt-20 pt-10 border-t border-slate-100 flex items-center justify-between">
          <div className="flex gap-4">
            <button className="px-4 py-2 rounded-xl bg-slate-100 text-slate-500 font-bold text-xs hover:bg-primary hover:text-white transition-all">Share on Twitter</button>
            <button className="px-4 py-2 rounded-xl bg-slate-100 text-slate-500 font-bold text-xs hover:bg-primary hover:text-white transition-all">Copy Link</button>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-xl font-bold text-sm shadow-lg shadow-blue-500/20">
            Save this Log
          </button>
        </div>
      </div>
    </div>
  );
};
