
import React from 'react';
import { Page } from '../types';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-950 text-white py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-8 cursor-pointer" onClick={() => onNavigate('HOME')}>
               <div className="w-8 h-8 bg-[#00A3FF] rounded-lg flex items-center justify-center text-white font-black text-[10px]">
                LOF
              </div>
              <span className="text-2xl font-black tracking-tighter">로직온파이어</span>
            </div>
            <p className="text-slate-400 max-w-sm mb-8 leading-relaxed">
              비즈니스의 디지털 전환을 이끄는 전문 파트너입니다. 
              기획부터 디자인, 개발까지 최고의 완성도를 약속합니다.
            </p>
            <div className="flex gap-4">
              {['Facebook', 'Twitter', 'LinkedIn'].map((social) => (
                <div key={social} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#00A3FF] cursor-pointer transition-colors">
                  <div className="w-4 h-4 bg-white/30 rounded-full" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/50">Company Info</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li>상호: 로직온파이어</li>
              <li>사업자번호: 459-62-01096</li>
              <li>주소: 대전광역시 서구 계룡로 566</li>
              <li>이메일: hello@lof-dev.com</li>
            </ul>
          </div>

          <div>
            <h5 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/50">Explore</h5>
            <ul className="space-y-4 text-slate-400 text-sm">
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('SERVICES')}>Services</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('PORTFOLIO')}>Portfolio</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('TECH_LOG')}>Tech Log</li>
              <li className="hover:text-white cursor-pointer transition-colors" onClick={() => onNavigate('ADMIN')}>Admin Console</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs uppercase tracking-widest">
          <p>© 2024 로직온파이어 (Logic On Fire) Corp. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
