import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Fund {
  id: string;
  name: string;
  allocation: number;
}

type ContributionType = 'mandatory' | 'voluntary';

const mandatoryFundsBase: Fund[] = [
  { id: 'f1', name: '預設投資策略', allocation: 0 },
  { id: 'f2', name: '友邦強積金優選計劃 - 保證組合', allocation: 0 },
  { id: 'f3', name: '友邦強積金優選計劃 - 強積金保守基金', allocation: 0 },
  { id: 'f4', name: '友邦強積金優選計劃 - 65歲後基金', allocation: 0 },
  { id: 'f5', name: '友邦強積金優選計劃 - 亞洲債券基金', allocation: 0 },
  { id: 'f6', name: '友邦強積金優選計劃 - 均衡組合', allocation: 0 },
  { id: 'f7', name: '友邦強積金優選計劃 - 穩定資本組合', allocation: 0 },
  { id: 'f8', name: '友邦強積金優選計劃 - 環球債券基金', allocation: 0 },
  { id: 'f9', name: '友邦強積金優選計劃 - 中港動態資產配置基金', allocation: 0 },
  { id: 'f10', name: '友邦強積金優選計劃 - 核心累積基金', allocation: 0 },
  { id: 'f11', name: '友邦強積金優選計劃 - 增長組合', allocation: 0 },
  { id: 'f12', name: '友邦強積金優選計劃 - 基金經理精選退休基金', allocation: 0 },
  { id: 'f13', name: '友邦強積金優選計劃 - 美洲基金', allocation: 0 },
  { id: 'f14', name: '友邦強積金優選計劃 - 亞洲股票基金', allocation: 0 },
  { id: 'f15', name: '友邦強積金優選計劃 - 亞歐基金', allocation: 0 },
  { id: 'f16', name: '友邦強積金優選計劃 - 歐洲股票基金', allocation: 0 },
  { id: 'f17', name: '友邦強積金優選計劃 - 大中華股票基金', allocation: 0 },
  { id: 'f18', name: '友邦強積金優選計劃 - 綠色退休基金', allocation: 0 },
  { id: 'f19', name: '友邦強積金優選計劃 - 中港基金', allocation: 0 },
  { id: 'f20', name: '友邦強積金優選計劃 - 北美股票基金', allocation: 0 },
  { id: 'f21', name: '友邦強積金優選計劃 - 全球基金', allocation: 0 },
];

const voluntaryFundsBase: Fund[] = [
  { id: 'v1', name: '預設投資策略', allocation: 0 },
  { id: 'v2', name: '友邦強積金優選計劃 - 保證組合', allocation: 0 },
  { id: 'v3', name: '友邦強積金優選計劃 - 強積金保守基金', allocation: 0 },
  { id: 'v4', name: '友邦強積金優選計劃 - 65歲後基金', allocation: 0 },
  { id: 'v5', name: '友邦強積金優選計劃 - 亞洲債券基金', allocation: 0 },
  { id: 'v6', name: '友邦強積金優選計劃 - 均衡組合', allocation: 0 },
  { id: 'v7', name: '友邦強積金優選計劃 - 穩定資本組合', allocation: 0 },
  { id: 'v8', name: '友邦強積金優選計劃 - 環球債券基金', allocation: 0 },
  { id: 'v9', name: '友邦強積金優選計劃 - 中港動態資產配置基金', allocation: 0 },
  { id: 'v10', name: '友邦強積金優選計劃 - 核心累積基金', allocation: 0 },
  { id: 'v11', name: '友邦強積金優選計劃 - 增長組合', allocation: 0 },
  { id: 'v12', name: '友邦強積金優選計劃 - 基金經理精選退休基金', allocation: 0 },
  { id: 'v13', name: '友邦強積金優選計劃 - 美洲基金', allocation: 0 },
  { id: 'v14', name: '友邦強積金優選計劃 - 亞洲股票基金', allocation: 0 },
  { id: 'v15', name: '友邦強積金優選計劃 - 亞歐基金', allocation: 0 },
  { id: 'v16', name: '友邦強積金優選計劃 - 歐洲股票基金', allocation: 0 },
  { id: 'v17', name: '友邦強積金優選計劃 - 大中華股票基金', allocation: 0 },
  { id: 'v18', name: '友邦強積金優選計劃 - 綠色退休基金', allocation: 0 },
  { id: 'v19', name: '友邦強積金優選計劃 - 中港基金', allocation: 0 },
  { id: 'v20', name: '友邦強積金優選計劃 - 北美股票基金', allocation: 0 },
  { id: 'v21', name: '友邦強積金優選計劃 - 全球基金', allocation: 0 },
];

const EnrolmentStep3InvestPage = () => {
  const navigate = useNavigate();
  const [contributionType, setContributionType] = useState<ContributionType>('mandatory');
  const [mandatoryFunds] = useState<Fund[]>(mandatoryFundsBase);
  const [voluntaryFunds] = useState<Fund[]>(voluntaryFundsBase);

  useEffect(() => { window.scrollTo(0,0); }, []);

  const currentFunds = contributionType === 'mandatory' ? mandatoryFunds : voluntaryFunds;
  const total = useMemo(() => currentFunds.reduce((sum, f) => sum + f.allocation, 0), [currentFunds]);

  return (
    <div className="min-h-screen bg-[#F6F5F4] flex flex-col">
      <div className="sticky top-0 z-20 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
        <div className="px-4 pt-4 pb-4 flex items-center justify-center relative border-b border-[#ECECEC]">
          <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center"><img src="./icons/icon-back.png" alt="返回" className="w-6 h-6 object-contain" /></button>
          <h1 className="text-[18px] font-semibold text-[#1F1F1F] tracking-[-0.01em]">申請一般僱員</h1>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-4">
            <img src="./icons/icon-save.png" alt="儲存" className="w-6 h-6 object-contain" />
            <img src="./icons/icon-close.png" alt="關閉" className="w-5 h-5 object-contain" />
          </div>
        </div>

        <div className="px-6 pt-4 pb-4 bg-white">
          <div className="flex items-center justify-between relative">
            <div className="absolute top-[18px] left-[40px] right-[40px] h-[2px] bg-[#E6E3E3]" />
            {['✓','✓','3','4'].map((n, i) => (
              <div key={i} className="relative z-10 flex flex-col items-center">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[20px] font-bold ${i < 3 ? 'bg-[#F5A623] text-white shadow-[0_2px_4px_rgba(0,0,0,0.12)]' : 'bg-[#EDEBEB] text-[#B7B3B3]'}`}>
                  <span className="text-[20px] leading-none">{n}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="px-6 pt-8 pb-28 flex-1">
        <h2 className="text-[24px] font-bold text-[#E6A23C] mb-5">投資選擇</h2>
        <div className="space-y-4 text-[16px] leading-[1.65] text-[#1F1F1F] mb-7">
          <p>在作出投資選擇前，你應先了解不同基金的風險等級並衡量自己的風險承受能力。</p>
          <p>請指示如何把投資分配至下列成分基金內。強制性供款和自願性供款（如有），將根據你於下表提供的投資選擇作出投資。投資分配百分比必須為整數（例如：須為50%而非50.5%）及其總和必須為100%。</p>
          <p>有關 DIS 詳情，請參閱積金局網站。</p>
        </div>

        <div className="flex border-b border-[#E4E0E0] mb-4 overflow-hidden">
          <button onClick={() => setContributionType('mandatory')} className={`flex-1 pb-3 text-[16px] font-medium relative ${contributionType === 'mandatory' ? 'text-[#E6A23C]' : 'text-[#B1AEAE]'}`}>
            僱主強制性供款分配
            {contributionType === 'mandatory' && <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#F5A623] rounded-full" />}
          </button>
          <button onClick={() => setContributionType('voluntary')} className={`flex-1 pb-3 text-[16px] font-medium relative ${contributionType === 'voluntary' ? 'text-[#E6A23C]' : 'text-[#B1AEAE]'}`}>
            僱主自願性供款分配
            {contributionType === 'voluntary' && <div className="absolute left-0 right-0 bottom-0 h-[3px] bg-[#F5A623] rounded-full" />}
          </button>
        </div>

        <div className="flex justify-end items-center gap-2 mb-5 text-[#1F1F1F]">
          <img src="./icons/icon-reset.png" alt="重設" className="w-6 h-6 object-contain" />
          <span className="text-[17px] font-medium">重設分配</span>
        </div>

        <div className="space-y-4">
          {currentFunds.map((fund) => (
            <div key={fund.id} className="bg-white border border-[#D7D2D2] rounded-[18px] px-5 py-6 flex items-center justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
              <div className="flex items-center gap-4 min-w-0 pr-4">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <img src="./icons/icon-info.png" alt="info" className="w-7 h-7 object-contain" />
                </div>
                <div className="text-[18px] leading-[1.45] text-[#1F1F1F] break-words">{fund.name}</div>
              </div>
              <div className="w-8 h-8 rounded-[4px] border border-[#D8D8D8] bg-white flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>

      <div className="sticky bottom-0 bg-white px-6 pt-4 pb-6 border-t border-[#E9E5E5] shadow-[0_-2px_8px_rgba(0,0,0,0.03)]">
        <div className="flex justify-between items-center mb-4 text-[18px] font-medium">
          <span className="text-[#1F1F1F]">總和：</span>
          <span className="text-[#D62828] text-[20px] font-bold">{total}%</span>
        </div>
        <button className="w-full h-[58px] rounded-full bg-[#19345B] text-white text-[19px] font-semibold">下一步</button>
      </div>
    </div>
  );
};

export default EnrolmentStep3InvestPage;
