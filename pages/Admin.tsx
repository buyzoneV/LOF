
import React, { useState, useEffect } from 'react';
import { Inquiry, QuoteItem } from '../types';

const ADMIN_EMAIL = 'kdhpshsishsa@gmail.com';

export const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [activeTab, setActiveTab] = useState<'INQUIRIES' | 'QUOTER'>('INQUIRIES');
  
  // Quoter States (Provider Information) - Updated with user provided data
  const [providerName, setProviderName] = useState('로직온파이어');
  const [providerBizNum, setProviderBizNum] = useState('459-62-01096');
  const [providerCEO, setProviderCEO] = useState('김도현');
  const [providerAddr, setProviderAddr] = useState('대전광역시 서구 계룡로 566');

  // Quoter States (Customer Information)
  const [customerName, setCustomerName] = useState('');
  const [customerBizNum, setCustomerBizNum] = useState('');
  
  const [quoteItems, setQuoteItems] = useState<QuoteItem[]>([
    { id: '1', description: '', quantity: 1, unitPrice: 0 }
  ]);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('lof_inquiries') || '[]');
    setInquiries(data);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === ADMIN_EMAIL) {
      setIsLoggedIn(true);
    } else {
      alert('접근 권한이 없는 이메일입니다.');
    }
  };

  const deleteInquiry = (id: string) => {
    const filtered = inquiries.filter(i => i.id !== id);
    setInquiries(filtered);
    localStorage.setItem('lof_inquiries', JSON.stringify(filtered));
  };

  // Quoter Logic
  const addQuoteItem = () => {
    setQuoteItems([...quoteItems, { id: Date.now().toString(), description: '', quantity: 1, unitPrice: 0 }]);
  };

  const updateQuoteItem = (id: string, field: keyof QuoteItem, value: any) => {
    setQuoteItems(quoteItems.map(item => item.id === id ? { ...item, [field]: value } : item));
  };

  const calculateSubtotal = () => quoteItems.reduce((acc, item) => acc + (item.quantity * item.unitPrice), 0);
  const calculateVAT = () => Math.floor(calculateSubtotal() * 0.1);
  const calculateTotal = () => calculateSubtotal() + calculateVAT();

  // CSV Export Logic
  const exportToCSV = () => {
    const headers = ['품목명', '수량', '단가(원)', '합계(원)'];
    const rows = quoteItems.map(item => [
      item.description || '-',
      item.quantity,
      item.unitPrice,
      item.quantity * item.unitPrice
    ]);

    // Metadata & Summary
    const metadata = [
      ['견적서명', `${providerName} 견적서`],
      ['발행일', new Date().toLocaleDateString()],
      ['수신자', customerName || '고객님'],
      ['공급자', providerName],
      [''],
      headers
    ];

    const summary = [
      [''],
      ['공급가액 합계', calculateSubtotal()],
      ['부가가치세(10%)', calculateVAT()],
      ['총 견적금액', calculateTotal()]
    ];

    const csvContent = [...metadata, ...rows, ...summary]
      .map(e => e.join(","))
      .join("\n");

    // Excel 한글 깨짐 방지용 BOM 추가
    const blob = new Blob(["\ufeff" + csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `LOF_견적서_${customerName || '고객'}_${new Date().toISOString().slice(0,10)}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center p-6">
        <form onSubmit={handleLogin} className="bg-white p-10 rounded-[2.5rem] w-full max-w-md shadow-2xl">
          <div className="flex items-center gap-2 mb-8">
            <div className="w-10 h-10 bg-slate-900 rounded-lg flex items-center justify-center text-white font-black text-xs">LOF</div>
            <span className="text-xl font-black">Admin Login</span>
          </div>
          <p className="text-slate-500 text-sm mb-6">관리자 계정으로 로그인해주세요.</p>
          <div className="space-y-4">
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@email.com"
              className="w-full px-6 py-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              required
            />
            <button type="submit" className="w-full py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-black transition-all">
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col md:flex-row">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-slate-900 text-white p-6 flex flex-col no-print">
        <div className="flex items-center gap-3 mb-12">
          <div className="w-8 h-8 bg-primary rounded flex items-center justify-center text-white font-black text-[10px]">LOF</div>
          <span className="font-black text-lg">Console</span>
        </div>
        
        <nav className="flex-grow space-y-2">
          <button 
            onClick={() => setActiveTab('INQUIRIES')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'INQUIRIES' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-white/5'}`}
          >
            견적상담 내역
          </button>
          <button 
            onClick={() => setActiveTab('QUOTER')}
            className={`w-full text-left px-4 py-3 rounded-xl text-sm font-bold transition-all ${activeTab === 'QUOTER' ? 'bg-primary text-white' : 'text-slate-400 hover:bg-white/5'}`}
          >
            견적서 발행기
          </button>
        </nav>

        <div className="pt-8 border-t border-white/5">
          <button onClick={() => window.location.reload()} className="text-slate-500 text-xs hover:text-white transition-colors">로그아웃</button>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <header className="flex justify-between items-center mb-12 no-print">
          <div>
            <h1 className="text-3xl font-black text-slate-900">
              {activeTab === 'INQUIRIES' ? 'Consulting Inquiries' : 'Quick Quoter'}
            </h1>
            <p className="text-slate-500 font-medium">관리자 전용 시스템입니다.</p>
          </div>
        </header>

        {activeTab === 'INQUIRIES' ? (
          <div className="space-y-6 no-print">
            {inquiries.length === 0 ? (
              <div className="bg-white p-20 rounded-3xl text-center border border-slate-200">
                <p className="text-slate-400">접수된 내역이 없습니다.</p>
              </div>
            ) : (
              inquiries.map((inq) => (
                <div key={inq.id} className="bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-md transition-all">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-xl font-bold mb-1">{inq.name} <span className="text-slate-400 font-normal text-sm">/ {inq.company}</span></h3>
                      <p className="text-xs text-primary font-bold uppercase tracking-widest">{inq.date}</p>
                    </div>
                    <button 
                      onClick={() => deleteInquiry(inq.id)}
                      className="text-slate-300 hover:text-red-500 transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                    </button>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-2xl text-slate-700 text-sm leading-relaxed mb-6">
                    {inq.message}
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1"><div className="w-1.5 h-1.5 rounded-full bg-primary"></div> {inq.email}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto">
            {!showPreview ? (
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm space-y-12 no-print">
                {/* 공급자 정보 입력 */}
                <section>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary"></div> 공급자 정보 (Provider)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">상호명</label>
                      <input type="text" value={providerName} onChange={(e) => setProviderName(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">사업자 등록번호</label>
                      <input type="text" value={providerBizNum} onChange={(e) => setProviderBizNum(e.target.value)} placeholder="000-00-00000" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">대표자명</label>
                      <input type="text" value={providerCEO} onChange={(e) => setProviderCEO(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">주소</label>
                      <input type="text" value={providerAddr} onChange={(e) => setProviderAddr(e.target.value)} className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-primary transition-all" />
                    </div>
                  </div>
                </section>

                {/* 수신자 정보 입력 */}
                <section>
                  <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-slate-400"></div> 수신자 정보 (Receiver)
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">고객명 / 업체명</label>
                      <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} placeholder="수신인 성함 또는 상호" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-primary transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest ml-1">수신자 사업자번호 (선택)</label>
                      <input type="text" value={customerBizNum} onChange={(e) => setCustomerBizNum(e.target.value)} placeholder="000-00-00000" className="w-full px-5 py-3 bg-slate-50 border border-slate-200 rounded-xl outline-none text-sm focus:border-primary transition-all" />
                    </div>
                  </div>
                </section>

                {/* 세부 항목 입력 */}
                <section>
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-sm font-black text-slate-900 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-indigo-500"></div> 견적 세부 내역
                    </h4>
                    <button onClick={addQuoteItem} className="text-xs font-bold text-primary flex items-center gap-1 hover:underline">+ 항목 추가</button>
                  </div>
                  <div className="space-y-4">
                    {quoteItems.map((item) => (
                      <div key={item.id} className="grid grid-cols-12 gap-4 items-end bg-slate-50/50 p-4 rounded-2xl border border-slate-100">
                        <div className="col-span-6 space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 ml-1">품목명 / 서비스 설명</label>
                          <input placeholder="예: 어플리케이션 개발" value={item.description} onChange={(e) => updateQuoteItem(item.id, 'description', e.target.value)} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none focus:border-primary" />
                        </div>
                        <div className="col-span-2 space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 ml-1">수량</label>
                          <input type="number" value={item.quantity} onChange={(e) => updateQuoteItem(item.id, 'quantity', parseInt(e.target.value) || 0)} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none text-center" />
                        </div>
                        <div className="col-span-3 space-y-1">
                          <label className="text-[9px] font-bold text-slate-400 ml-1">단가 (원)</label>
                          <input type="number" value={item.unitPrice} onChange={(e) => updateQuoteItem(item.id, 'unitPrice', parseInt(e.target.value) || 0)} className="w-full px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm outline-none text-right" />
                        </div>
                        <div className="col-span-1 flex justify-center pb-2">
                           <button onClick={() => setQuoteItems(quoteItems.filter(i => i.id !== item.id))} className="text-slate-300 hover:text-red-500 transition-colors">
                             <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                           </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </section>

                <div className="border-t border-slate-100 pt-8 flex justify-end">
                  <button 
                    onClick={() => setShowPreview(true)}
                    className="px-10 py-4 bg-slate-900 text-white font-bold rounded-2xl shadow-xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all"
                  >
                    견적서 미리보기
                  </button>
                </div>
              </div>
            ) : (
              <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
                <div className="flex justify-between items-center no-print">
                   <button onClick={() => setShowPreview(false)} className="text-slate-500 font-bold text-sm flex items-center gap-2 hover:text-slate-900">
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
                     수정하기
                   </button>
                   <div className="flex gap-3">
                     <button 
                        onClick={exportToCSV}
                        className="px-6 py-3 bg-white border border-slate-200 text-slate-700 rounded-2xl text-sm font-bold shadow-sm hover:bg-slate-50 transition-all flex items-center gap-2"
                      >
                        <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                        CSV 다운로드
                      </button>
                     <button onClick={() => window.print()} className="px-8 py-3 bg-primary text-white rounded-2xl text-sm font-bold shadow-lg shadow-primary/30 hover:scale-105 transition-all flex items-center gap-2">
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 00-2 2h2m2 4h10a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h8z" /></svg>
                       인쇄 / PDF 저장
                     </button>
                   </div>
                </div>
                
                {/* Real Invoice Design */}
                <div className="bg-white p-12 md:p-20 shadow-xl border border-slate-200 rounded-lg min-h-[1000px] text-slate-800" id="print-area">
                  <div className="flex justify-between items-start mb-20">
                    <h2 className="text-5xl font-black tracking-tighter uppercase text-slate-900">Quotation</h2>
                    <div className="text-right">
                      <div className="flex items-center justify-end gap-2 mb-4">
                        <div className="w-8 h-8 bg-slate-900 rounded flex items-center justify-center text-white font-black text-[10px]">LOF</div>
                        <span className="font-black text-xl">{providerName}</span>
                      </div>
                      <div className="text-[11px] text-slate-500 space-y-1 font-medium">
                        <p>사업자등록번호: {providerBizNum}</p>
                        <p>대표자: {providerCEO}</p>
                        <p>{providerAddr}</p>
                        <p>T: 02-123-4567 | E: {ADMIN_EMAIL}</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-20 mb-20 pb-10 border-b border-slate-200">
                    <div>
                      <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">To. 수신인</h5>
                      <p className="text-2xl font-bold">{customerName || '고객님 귀하'}</p>
                      {customerBizNum && <p className="text-xs text-slate-500 mt-1">사업자번호: {customerBizNum}</p>}
                      <p className="text-sm text-slate-500 mt-3 font-medium">아래와 같이 견적을 제출합니다.</p>
                    </div>
                    <div className="text-right">
                      <h5 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Date. 발행일</h5>
                      <p className="text-lg font-bold">{new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                      <p className="text-sm text-slate-500 mt-2 font-mono">No. LOF-{Date.now().toString().slice(-8)}</p>
                    </div>
                  </div>

                  <table className="w-full mb-20">
                    <thead>
                      <tr className="border-b-2 border-slate-900">
                        <th className="py-4 text-left text-xs font-black uppercase tracking-widest text-slate-400">품목 및 내용</th>
                        <th className="py-4 text-center text-xs font-black uppercase tracking-widest text-slate-400 w-20">수량</th>
                        <th className="py-4 text-right text-xs font-black uppercase tracking-widest text-slate-400 w-40">단가 (원)</th>
                        <th className="py-4 text-right text-xs font-black uppercase tracking-widest text-slate-400 w-40">금액 (원)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {quoteItems.map((item) => (
                        <tr key={item.id}>
                          <td className="py-6 font-bold text-slate-800">{item.description || '-'}</td>
                          <td className="py-6 text-center text-slate-600">{item.quantity}</td>
                          <td className="py-6 text-right text-slate-600">₩ {item.unitPrice.toLocaleString('ko-KR')}</td>
                          <td className="py-6 text-right font-bold text-slate-900">₩ {(item.quantity * item.unitPrice).toLocaleString('ko-KR')}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  <div className="flex justify-end">
                    <div className="w-full max-sm space-y-4">
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">공급가액 합계</span>
                        <span className="font-bold">₩ {calculateSubtotal().toLocaleString('ko-KR')}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-slate-500">부가가치세 (VAT 10%)</span>
                        <span className="font-bold">₩ {calculateVAT().toLocaleString('ko-KR')}</span>
                      </div>
                      <div className="pt-6 border-t-2 border-slate-900 flex justify-between items-center">
                        <span className="font-black text-xl">총 견적금액</span>
                        <div className="text-right">
                          <span className="font-black text-3xl text-primary tracking-tight">₩ {calculateTotal().toLocaleString('ko-KR')}</span>
                          <p className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-widest">(VAT 포함)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-40 pt-10 border-t border-slate-100 text-[11px] text-slate-400 leading-relaxed grid grid-cols-2 gap-10">
                    <div>
                      <p className="font-black text-slate-600 mb-3 uppercase tracking-wider">Terms & Conditions</p>
                      <ul className="space-y-1.5 list-disc pl-4">
                        <li>본 견적서의 유효기간은 발행일로부터 14일입니다.</li>
                        <li>입금 계좌: 국민은행 123456-01-123456 (예금주: {providerName})</li>
                        <li>결제 조건: 착수금 50%, 납품 시 잔금 50%를 원칙으로 합니다.</li>
                        <li>프로젝트 범위 변경 시 추가 견적이 발생할 수 있습니다.</li>
                      </ul>
                    </div>
                    <div className="flex flex-col justify-end items-end opacity-50">
                       <div className="w-24 h-24 border-4 border-primary/20 rounded-full flex items-center justify-center text-primary font-black text-[10px] rotate-12">
                         OFFICIAL SEAL
                       </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </main>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { background: white !important; padding: 0 !important; margin: 0 !important; }
          main { padding: 0 !important; margin: 0 !important; }
          aside { display: none !important; }
          #print-area { 
            border: none !important; 
            box-shadow: none !important; 
            padding: 40px !important; 
            width: 100% !important; 
            height: auto !important;
            margin: 0 !important;
          }
          .animate-in { animation: none !important; }
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }
      `}</style>
    </div>
  );
};
