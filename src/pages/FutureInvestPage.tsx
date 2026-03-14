import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ExternalLink, Info, ArrowUpDown, RotateCcw } from 'lucide-react';

interface Fund {
  id: string;
  name: string;
  allocation: number;
  riskLevel: number;
}

type ContributionType = 'employee-mandatory' | 'employer-voluntary';

const riskColors: Record<number, string> = {
  1: 'bg-blue-500',
  2: 'bg-cyan-500',
  3: 'bg-teal-500',
  4: 'bg-green-500',
  5: 'bg-yellow-500',
  6: 'bg-orange-500',
  7: 'bg-red-500',
};

const fundsBase: Fund[] = [
  { id: '1', name: '預設投資策略', allocation: 0, riskLevel: 4 },
  { id: '2', name: '信安港元儲蓄基金', allocation: 0, riskLevel: 1 },
  { id: '3', name: '信安強積金保守基金', allocation: 0, riskLevel: 1 },
  { id: '4', name: '信安65歲後基金', allocation: 0, riskLevel: 3 },
];

const FutureInvestPage = () => {
  const navigate = useNavigate();
  const [contributionType, setContributionType] = useState<ContributionType>('employee-mandatory');
  const [employeeMandatoryFunds, setEmployeeMandatoryFunds] = useState<Fund[]>(fundsBase);
  const [employerVoluntaryFunds, setEmployerVoluntaryFunds] = useState<Fund[]>(fundsBase);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentFunds = contributionType === 'employee-mandatory' ? employeeMandatoryFunds : employerVoluntaryFunds;
  const total = useMemo(() => currentFunds.reduce((sum, f) => sum + f.allocation, 0), [currentFunds]);

  const resetCurrentTab = () => {
    const cleared = currentFunds.map(f => ({ ...f, allocation: 0 }));
    if (contributionType === 'employee-mandatory') setEmployeeMandatoryFunds(cleared);
    else setEmployerVoluntaryFunds(cleared);
  };

  return (
    <div className="min-h-screen bg-[#F6F5F4] flex flex-col">
      <div className="sticky top-0 z-20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="px-4 pt-4 pb-4 flex items-center justify-center relative border-b border-[#ECECEC]">
          <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
            <img src="./icons/icon-back.png" alt="返回" className="w-6 h-6 object-contain" />
          </button>
          <h1 className="text-[18px] font-semibold text-[#1F1F1F]">未來供款的投資</h1>
        </div>

        <div className="px-6 pt-4 pb-4 bg-white">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-[18px] left-[40px] right-[40px] h-[2px] bg-[#E6E3E3]" />
            {['✓','2','3'].map((n, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[20px] font-bold ${i < 2 ? 'bg-[#F5A623] text-white shadow-[0_2px_4px_rgba(0,0,0,0.12)]' : 'bg-[#F3F0F3] text-[#B7B3B3]'}`}>
                  <span className="text-[20px] leading-none">{n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pt-8 pb-40 flex-1">
        <h2 className="text-[24px] font-bold text-[#E6A23C] mb-6">未來供款的投資</h2>

        <div className="flex border-b border-[#E4E0E0] mb-4 overflow-hidden">
          <button onClick={() => setContributionType('employee-mandatory')} className={`flex-1 pb-3 text-[16px] font-medium relative ${contributionType === 'employee-mandatory' ? 'text-[#E6A23C]' : 'text-[#B1AEAE]'}`}>
            僱主強制性供款（港幣）
            {contributionType === 'employee-mandatory' && <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#F5A623] rounded-full" />}
          </button>
          <button onClick={() => setContributionType('employer-voluntary')} className={`flex-1 pb-3 text-[16px] font-medium relative ${contributionType === 'employer-voluntary' ? 'text-[#E6A23C]' : 'text-[#B1AEAE]'}`}>
            僱主自願性供款（港幣）
            {contributionType === 'employer-voluntary' && <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#F5A623] rounded-full" />}
          </button>
        </div>

        <div className="flex items-center justify-between mb-5">
          <button className="flex items-center gap-2 text-[#1F1F1F]">
            <ArrowUpDown size={20} />
            <span className="text-[17px] font-medium">排序</span>
          </button>
          <button onClick={resetCurrentTab} className="flex items-center gap-2 text-[#1F1F1F]">
            <RotateCcw size={20} />
            <span className="text-[17px] font-medium">重設</span>
          </button>
        </div>

        <div className="space-y-4">
          {currentFunds.map((fund) => (
            <div key={fund.id} className="bg-white border border-[#E2DEDE] rounded-[18px] px-5 py-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-start gap-2 mb-3">
                    <div className="text-[18px] leading-[1.45] text-[#1F1F1F] font-medium break-words">{fund.name}</div>
                    {fund.name === '預設投資策略' ? <Info size={18} strokeWidth={1.8} className="text-[#B9B5B5] mt-[2px] flex-shrink-0" /> : <ExternalLink size={18} strokeWidth={1.8} className="text-[#B9B5B5] mt-[2px] flex-shrink-0" />}
                  </div>
                  <div className="flex items-center gap-2">
                    <div className={`w-[4px] h-[22px] rounded-full ${riskColors[fund.riskLevel]}`} />
                    <span className="text-[16px] text-[#7B7878]">風險級別 {fund.riskLevel}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-shrink-0 pl-2">
                  <div className="w-[74px] h-[50px] rounded-[6px] border border-[#D7D3D3] bg-white text-center text-[20px] text-[#1F1F1F] flex items-center justify-center">0</div>
                  <span className="text-[18px] text-[#7A7777]">%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="fixed left-0 right-0 bottom-0 z-20 bg-white px-6 pt-4 pb-6 border-t border-[#E9E5E5] shadow-[0_-2px_8px_rgba(0,0,0,0.03)]">
        <div className="flex justify-between items-center mb-2 text-[18px] font-medium">
          <span className="text-[#1F1F1F]">總和：</span>
          <span className="text-[20px] font-bold text-[#D62828]">{total}%</span>
        </div>
        <button className="w-full h-[58px] rounded-full bg-[#E6E3E3] text-[#B8B4B4] text-[19px] font-semibold">下一步</button>
      </div>
    </div>
  );
};

export default FutureInvestPage;
