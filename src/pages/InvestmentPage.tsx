import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const InvestmentPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleFundSwitching = () => {
    navigate('/investment/fund-switching');
  };

  const handleRebalancing = () => {
    navigate('/investment/rebalancing');
  };

  const handleFutureContributions = () => {
    navigate('/investment/future-contributions');
  };

  const handleCombined = () => {
    navigate('/investment/combined');
  };

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      {/* Header */}
      <div className="px-4 pt-3 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700">
          <ChevronLeft size={24} />
        </button>
      </div>

      {/* Title */}
      <div className="px-4 pt-2 pb-6">
        <h1 className="text-[24px] font-bold text-[#E6A23C] mb-2">投資管理</h1>
        <p className="text-[16px] text-gray-600">選擇投資操作</p>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 space-y-6">
        
        {/* 【現在】Section */}
        <div>
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#007AFF] text-white text-[14px] font-semibold rounded-full">
              【現在】Existing Balance
            </div>
          </div>
          
          <div className="space-y-4">
            {/* 基金轉換 */}
            <button 
              onClick={handleFundSwitching}
              className="w-full bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.05)] text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-[28px] flex-shrink-0">🔁</div>
                <div className="flex-1">
                  <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                    基金轉換 <span className="text-[14px] font-normal text-gray-500">Fund Switching</span>
                  </div>
                  <p className="text-[14px] text-gray-600 mb-2">
                    將現有基金轉換至其他基金
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      • 可選「全部供款一齊處理」
                    </span>
                    <span className="text-[12px] px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      • 可選「不同供款，個別處理」
                    </span>
                  </div>
                </div>
              </div>
            </button>

            {/* 重新配置 */}
            <button 
              onClick={handleRebalancing}
              className="w-full bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.05)] text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-[28px] flex-shrink-0">⚖️</div>
                <div className="flex-1">
                  <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                    重新配置 <span className="text-[14px] font-normal text-gray-500">Fund Rebalancing</span>
                  </div>
                  <p className="text-[14px] text-gray-600 mb-2">
                    賣出所有現有基金，重新分配
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] px-2 py-1 bg-amber-50 text-amber-700 rounded-full">
                      ⚠️ 只適用「全部供款一齊處理」
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 【未來】Section */}
        <div>
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#34C759] text-white text-[14px] font-semibold rounded-full">
              【未來】Future Contributions
            </div>
          </div>
          
          <div className="space-y-4">
            {/* 調整未來供款 */}
            <button 
              onClick={handleFutureContributions}
              className="w-full bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.05)] text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-[28px] flex-shrink-0">💰</div>
                <div className="flex-1">
                  <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                    調整未來供款 <span className="text-[14px] font-normal text-gray-500">Future</span>
                  </div>
                  <p className="text-[14px] text-gray-600 mb-2">
                    設定新供款的投資分配
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      • 不影響現有持倉
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 【現在 + 未來】Section */}
        <div>
          <div className="mb-3">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#AF52DE] text-white text-[14px] font-semibold rounded-full">
              【現在 + 未來】Combined
            </div>
          </div>
          
          <div className="space-y-4">
            {/* 組合調整 */}
            <button 
              onClick={handleCombined}
              className="w-full bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.05)] text-left"
            >
              <div className="flex items-start gap-4">
                <div className="text-[28px] flex-shrink-0">🔄</div>
                <div className="flex-1">
                  <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                    組合調整 <span className="text-[14px] font-normal text-gray-500">Combined</span>
                  </div>
                  <p className="text-[14px] text-gray-600 mb-2">
                    同時調整現有資產 + 未來供款
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-[12px] px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                      • 全面重新規劃投資策略
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* 提示 */}
        <div className="bg-blue-50 border border-blue-200 rounded-[12px] px-4 py-3">
          <div className="text-[14px] text-blue-800">
            <span className="font-semibold">💡 提示</span>
            <ul className="mt-2 space-y-1 text-[13px]">
              <li>• 「全部供款一齊處理」：一次設定，同步套用所有供款戶口</li>
              <li>• 「不同供款，個別處理」：只處理你選擇嘅供款戶口</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default InvestmentPage;
