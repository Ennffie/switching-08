import { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import StepBar from '../components/StepBar';

interface Fund {
  id: string;
  name: string;
  allocation: number;
  riskLevel: number;
  description?: string;
}

// 風險級別顏色
const riskColors: Record<number, string> = {
  1: 'bg-blue-500',
  2: 'bg-cyan-500',
  3: 'bg-teal-500',
  4: 'bg-green-500',
  5: 'bg-yellow-500',
  6: 'bg-orange-500',
  7: 'bg-red-500',
};

// 風險級別標籤
const riskLabels: Record<number, string> = {
  1: '低風險',
  2: '低風險',
  3: '中低風險',
  4: '中低風險',
  5: '中高風險',
  6: '高風險',
  7: '高風險',
};

// 完整基金列表
const allFunds: Fund[] = [
  { id: '1', name: '預設投資策略', allocation: 0, riskLevel: 4 },
  { id: '2', name: '友邦強積金優選計劃 - 保證組合', allocation: 0, riskLevel: 1 },
  { id: '3', name: '友邦強積金優選計劃 - 強積金保守基金', allocation: 0, riskLevel: 1 },
  { id: '4', name: '友邦強積金優選計劃 - 65歲後基金', allocation: 0, riskLevel: 3, description: '當65歲後基金或核心累積基金作為獨立投資選項，預設投資策略的風險降低機制並不適用' },
  { id: '5', name: '友邦強積金優選計劃 - 亞洲債券基金', allocation: 0, riskLevel: 3 },
  { id: '6', name: '友邦強積金優選計劃 - 均衡組合', allocation: 0, riskLevel: 4 },
  { id: '7', name: '友邦強積金優選計劃 - 穩定資本組合', allocation: 0, riskLevel: 4 },
  { id: '8', name: '友邦強積金優選計劃 - 環球債券基金', allocation: 0, riskLevel: 4 },
  { id: '9', name: '友邦強積金優選計劃 - 中港動態資產配置基金', allocation: 0, riskLevel: 5 },
  { id: '10', name: '友邦強積金優選計劃 - 核心累積基金', allocation: 0, riskLevel: 5, description: '當65歲後基金或核心累積基金作為獨立投資選項,預設投資策略的風險降低機制並不適用' },
  { id: '11', name: '友邦強積金優選計劃 - 增長組合', allocation: 0, riskLevel: 5 },
  { id: '12', name: '友邦強積金優選計劃 - 基金經理精選退休基金', allocation: 0, riskLevel: 5 },
  { id: '13', name: '友邦強積金優選計劃 - 美洲基金', allocation: 0, riskLevel: 6 },
  { id: '14', name: '友邦強積金優選計劃 - 亞洲股票基金', allocation: 0, riskLevel: 6 },
  { id: '15', name: '友邦強積金優選計劃 - 亞歐基金', allocation: 0, riskLevel: 6 },
  { id: '16', name: '友邦強積金優選計劃 - 歐洲股票基金', allocation: 0, riskLevel: 6 },
  { id: '17', name: '友邦強積金優選計劃 - 大中華股票基金', allocation: 0, riskLevel: 6 },
  { id: '18', name: '友邦強積金優選計劃 - 綠色退休基金', allocation: 0, riskLevel: 6 },
  { id: '19', name: '友邦強積金優選計劃 - 中港基金', allocation: 0, riskLevel: 6 },
  { id: '20', name: '友邦強積金優選計劃 - 北美股票基金', allocation: 0, riskLevel: 6 },
  { id: '21', name: '友邦強積金優選計劃 - 全球基金', allocation: 0, riskLevel: 6 },
];

const RebalancePage = () => {
  const navigate = useNavigate();
  const [funds, setFunds] = useState<Fund[]>(allFunds);
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // 計算總百分比
  const totalAllocation = funds.reduce((sum, fund) => sum + fund.allocation, 0);

  // 處理百分比變更
  const handleAllocationChange = (fundId: string, value: number) => {
    setFunds(funds.map(fund => 
      fund.id === fundId ? { ...fund, allocation: value } : fund
    ));
  };

  // 處理下一步
  const handleNext = () => {
    if (totalAllocation !== 100) {
      setShowWarning(true);
    } else {
      // TODO: Navigate to confirm page
      navigate('/invest/confirm');
    }
  };

  // 排序邏輯（「預設投資策略」永遠第一位）
  const sortedFunds = useMemo(() => {
    const defaultFund = funds.find(f => f.name.includes('預設投資策略'));
    let otherFunds = funds.filter(f => !f.name.includes('預設投資策略'));
    
    // 按風險級別排序
    otherFunds.sort((a, b) => a.riskLevel - b.riskLevel);
    
    // 組合：預設投資策略放第一位，其他跟排序
    return defaultFund ? [defaultFund, ...otherFunds] : otherFunds;
  }, [funds]);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Sticky Header + Step Bar */}
      <div className="sticky top-0 z-50 bg-white">
        <div className="flex items-center justify-between px-4 py-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-600">
            <ChevronLeft size={24} />
          </button>
          <h1 className="text-base font-medium text-gray-900">重設投資組合（全部基金轉換）</h1>
          <div className="w-8" />
        </div>
        <StepBar currentStep={2} />
      </div>

      <div className="px-4 py-6">
        <h2 className="text-[22px] font-bold text-[#E67E22] mb-4">設定新投資組合</h2>
        
        <p className="text-[15px] text-gray-700 mb-6">
          請設定你希望轉換後的投資組合比例。所有基金的百分比總和必須為 100%。
        </p>

        {/* 提示訊息 */}
        {showWarning && totalAllocation !== 100 && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-4">
            <p className="text-red-600 text-sm">
              投資分配總和必須為 100%。目前總和為 {totalAllocation.toFixed(1)}%
            </p>
          </div>
        )}

        {/* 總百分比顯示 */}
        <div className="bg-white rounded-lg p-4 mb-4 flex justify-between items-center">
          <span className="text-gray-600">總計</span>
          <span className={`text-lg font-semibold ${totalAllocation === 100 ? 'text-green-600' : 'text-red-600'}`}>
            {totalAllocation.toFixed(1)}%
          </span>
        </div>

        {/* 基金列表 */}
        <div className="space-y-3">
          {sortedFunds.map((fund) => (
            <div key={fund.id} className="bg-white rounded-lg p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-900 flex-1">{fund.name}</span>
                <div className={`px-2 py-1 rounded text-xs text-white ${riskColors[fund.riskLevel]}`}>
                  {riskLabels[fund.riskLevel]}
                </div>
              </div>
              
              {/* 百分比輸入 */}
              <input
                type="number"
                min="0"
                max="100"
                value={fund.allocation || ''}
                onChange={(e) => handleAllocationChange(fund.id, Number(e.target.value))}
                placeholder="0%"
                className="w-full h-10 border border-gray-300 rounded px-3 text-right"
              />
              
              {fund.description && (
                <p className="text-xs text-gray-500 mt-2">{fund.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* 提示文字 */}
        <div className="mt-6 p-4 bg-blue-50 rounded-lg text-sm text-gray-700 space-y-2">
          <p>• 在做出投資選擇之前，你應先了解不同基金的風險等級並衡量自己的風險承受能力。</p>
          <p>• 成員必須注意投資市場可能出現顯著的波動，基金單位價格可跌可升。</p>
          <p>• 投資比例應為整數（例如50%而非50.5%）。</p>
        </div>
      </div>

      {/* Bottom Button */}
      <div className="fixed bottom-0 left-0 right-0 bg-white p-4 border-t border-gray-200">
        <button
          onClick={handleNext}
          disabled={totalAllocation !== 100}
          className={`
            w-full py-3 rounded-lg text-base font-medium transition-all
            ${totalAllocation === 100 
              ? 'bg-[#1e3a5f] text-white' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }
          `}
        >
          下一步
        </button>
      </div>

      <div className="h-20" />
    </div>
  );
};

export default RebalancePage;
