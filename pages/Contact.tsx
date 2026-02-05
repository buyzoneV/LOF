
import React, { useState } from 'react';
import { Inquiry } from '../types';

export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Save to localStorage
    const newInquiry: Inquiry = {
      id: Date.now().toString(),
      ...formState,
      date: new Date().toLocaleString(),
      status: 'PENDING'
    };

    const existingInquiries = JSON.parse(localStorage.getItem('lof_inquiries') || '[]');
    localStorage.setItem('lof_inquiries', JSON.stringify([newInquiry, ...existingInquiries]));

    setTimeout(() => {
      setIsSubmitted(true);
    }, 800);
  };

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <span className="text-[#00A3FF] text-xs font-bold uppercase tracking-[0.3em] mb-4 inline-block">Start a Project</span>
            <h1 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter leading-tight">
              Let's build <br/>
              something <span className="text-gradient">Great.</span>
            </h1>
            <p className="text-slate-500 text-lg mb-12 max-w-md font-medium leading-relaxed">
              우리는 단순한 개발사가 아닌 비즈니스의 성공을 함께 고민하는 기술 파트너입니다. 
              프로젝트의 성격과 목표를 공유해 주시면 최적의 솔루션을 제안해 드립니다.
            </p>
            
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Email us</h4>
                  <p className="text-slate-500 text-sm">hello@lof-dev.com</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 mb-1">Our Studio</h4>
                  <p className="text-slate-500 text-sm">서울특별시 강남구 테헤란로 123, 15층</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            {isSubmitted ? (
              <div className="bg-slate-900 text-white p-12 rounded-[3rem] h-full flex flex-col items-center justify-center text-center">
                <div className="w-20 h-20 bg-[#00A3FF] rounded-full flex items-center justify-center mb-8">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="text-3xl font-bold mb-4">감사합니다!</h3>
                <p className="text-slate-400 leading-relaxed">
                  문의 내용이 성공적으로 접수되었습니다.<br/>
                  담당자가 검토 후 24시간 이내에 연락드리겠습니다.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-slate-50 p-10 md:p-12 rounded-[3rem] border border-slate-100">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        placeholder="홍길동" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#00A3FF]/20 focus:border-[#00A3FF] transition-all" 
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        placeholder="email@example.com" 
                        className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#00A3FF]/20 focus:border-[#00A3FF] transition-all" 
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company / Organization</label>
                    <input 
                      type="text" 
                      value={formState.company}
                      onChange={(e) => setFormState({...formState, company: e.target.value})}
                      placeholder="회사명을 입력해주세요" 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#00A3FF]/20 focus:border-[#00A3FF] transition-all" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Project Details</label>
                    <textarea 
                      required
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      rows={5}
                      placeholder="프로젝트의 개요나 궁금한 점을 적어주세요." 
                      className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-[#00A3FF]/20 focus:border-[#00A3FF] transition-all resize-none" 
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full py-5 bg-[#00A3FF] text-white font-bold rounded-2xl shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 hover:-translate-y-1 transition-all active:scale-95"
                  >
                    Send Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
