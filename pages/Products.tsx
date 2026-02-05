
import React from 'react';

export const Products: React.FC = () => {
  const products = [
    {
      id: 'insight',
      name: 'InsightStream AI',
      status: 'OPERATIONAL',
      desc: 'Real-time behavioral analytics engine processing over 10M events daily for enterprise scale e-commerce.',
      stack: 'Redis / ClickHouse',
      latency: '< 50ms',
      color: 'green'
    },
    {
      id: 'vault',
      name: 'VaultGuard Pro',
      status: 'BETA',
      desc: 'Next-gen encryption-as-a-service with zero-knowledge architecture for sensitive financial data storage.',
      stack: 'AES-256 GCM',
      latency: 'API / gRPC',
      color: 'amber'
    },
    {
      id: 'node',
      name: 'NodeMesh CMS',
      status: 'MVP',
      desc: 'Decentralized headless CMS framework built for ultra-fast static generation and edge delivery.',
      stack: 'React / Next.js',
      latency: 'Edge Native',
      color: 'blue'
    }
  ];

  return (
    <div className="animate-in fade-in duration-700 py-20 bg-slate-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative">
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="mb-20">
          <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[10px] font-bold uppercase tracking-[0.2em] mb-6 inline-block">
            In-House Innovation
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight max-w-3xl">
            Proprietary SaaS <br/>
            <span className="text-gradient">Solutions for Scale</span>
          </h1>
          <p className="text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
            We innovate from within. Explore our portfolio of high-performance SaaS products engineered for modern digital infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p) => (
            <div key={p.id} className="group p-10 bg-white/5 border border-white/10 rounded-3xl hover:border-primary/50 transition-all duration-500">
              <div className="flex justify-between items-start mb-8">
                <div className={`w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white`}>
                   <div className="w-6 h-6 bg-current opacity-30 rounded" />
                </div>
                <span className={`text-[10px] font-black px-3 py-1 rounded-full border ${
                  p.color === 'green' ? 'text-green-400 border-green-500/20' : 
                  p.color === 'amber' ? 'text-amber-400 border-amber-500/20' : 
                  'text-primary border-primary/20'
                }`}>
                  {p.status}
                </span>
              </div>
              <h3 className="text-2xl font-bold mb-4">{p.name}</h3>
              <p className="text-slate-400 mb-8 text-sm leading-relaxed font-medium">{p.desc}</p>
              <div className="flex items-center gap-6 text-[11px] font-mono text-slate-500">
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div> {p.stack}
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-primary rounded-full"></div> {p.latency}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-40 bg-white/5 border border-white/10 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">The Logic of Framework (LOF)</h2>
            <p className="text-slate-400 mb-12 text-lg">How we identify market gaps and engineer precision solutions.</p>
            <div className="space-y-6">
              <div className="flex gap-6 p-6 rounded-2xl bg-red-500/5 border-l-4 border-red-500">
                <p className="text-sm text-slate-300"><strong>Problem:</strong> Legacy SaaS platforms suffer from "feature bloat" and monolithic architectures.</p>
              </div>
              <div className="flex gap-6 p-6 rounded-2xl bg-primary/5 border-l-4 border-primary">
                <p className="text-sm text-slate-300"><strong>Solution:</strong> Micro-modular systems focusing on edge performance and serverless scalability.</p>
              </div>
            </div>
          </div>
          <div className="absolute right-0 bottom-0 top-0 w-1/3 hidden lg:flex items-center justify-center">
             <div className="w-full h-2/3 bg-slate-900 rounded-l-[3rem] border border-white/10 p-8 font-mono text-xs text-primary/80">
                <p>// Solution_Architecture.js</p>
<pre className="mt-4 w-full rounded-lg border border-white/10 bg-slate-900 p-4 text-xs text-white overflow-auto">
  <code>{`// Solution_Architecture.js
const optimizeScale = (infra) => {
  return infra.pipe(
    edgeComputing(),
    // ...
  );
};`}</code>
</pre>
               <p className="ml-8 text-green-400">automatedHealing()</p>
                <p className="ml-4">);</p>
                <p className="">&#125;;</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};
