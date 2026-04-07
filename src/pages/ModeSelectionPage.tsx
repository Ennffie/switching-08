import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface SchemeData {
  schemeName: string;
  totalBalance: number;
  contributions: {
    type: string;
    label: string;
    hasBalance: boolean;
  }[];
}

const ModeSelectionPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMode, setSelectedMode] = useState<'all' | 'individual'>('all');
  const [selectedContributions, setSelectedContributions] = useState<string[]>([]);
  
  // 从 location state 获取 scheme 数据
  const schemeData: SchemeData = location.state?.schemeData || {
    schemeName: '強積金計劃 A',
    totalBalance: 250000,
    contributions: [
      { type: 'employer-mandatory', label: '僱主強制性供款', hasBalance: true },
      { type: 'employee-mandatory', label: '僱員強制性供款', hasBalance: true },
      { type: 'employer-voluntary', label: '僱主自願性供款', hasBalance: true },
      { type: 'employee-voluntary', label: '僱員自願性供款', hasBalance: true },
    ]
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleContributionToggle = (type: string) => {
    setSelectedContributions(prev => 
      prev.includes(type) 
        ? prev.filter(c => c !== type)
        : [...prev, type]
    );
  };

  const handleNext = () => {
    if (selectedMode === 'individual' && selectedContributions.length === 0) {
      alert('請至少選擇一個供款戶口');
      return;
    }

    navigate('/investment/fund-switching/step-1', {
      state: {
        mode: selectedMode,
        selectedContributions: selectedMode === 'all' 
          ? schemeData.contributions.map(c => c.type)
          : selectedContributions,
        schemeData
      }
    });
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
        <h1 className="text-[24px] font-bold text-[#E6A23C] mb-2">基金轉換</h1>
        <p className="text-[16px] text-gray-600">{schemeData.schemeName}</p>
      </div>

      {/* Content */}
      <div className="px-4 pb-8 space-y-4">
        
        {/* 選擇處理方式 */}
        <div className="mb-2">
          <h2 className="text-[18px] font-bold text-[#1F1F1F]">選擇處理方式</h2>
        </div>

        {/* 全部供款一齊處理 */}
        <button 
          onClick={() => setSelectedMode('all')}
          className={`w-full bg-white rounded-[18px] border px-6 py-5 text-left transition-all ${
            selectedMode === 'all' 
              ? 'border-[#E6A23C] shadow-[0_0_0_2px_rgba(230,162,60,0.15)]' 
              : 'border-[#D9D4CC] shadow-[0_4px_18px_rgba(0,0,0,0.05)]'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedMode === 'all' ? 'border-[#E6A23C] bg-[#E6A23C]' : 'border-gray-300'
              }`}>
                {selectedMode === 'all' && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                全部供款一齊處理
              </div>
              <p className="text-[14px] text-gray-600">
                所有供款戶口使用相同設定<br/>
                一次設定，自動套用所有戶口
              </p>
            </div>
          </div>
        </button>

        {/* 不同供款，個別處理 */}
        <button 
          onClick={() => setSelectedMode('individual')}
          className={`w-full bg-white rounded-[18px] border px-6 py-5 text-left transition-all ${
            selectedMode === 'individual' 
              ? 'border-[#E6A23C] shadow-[0_0_0_2px_rgba(230,162,60,0.15)]' 
              : 'border-[#D9D4CC] shadow-[0_4px_18px_rgba(0,0,0,0.05)]'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                selectedMode === 'individual' ? 'border-[#E6A23C] bg-[#E6A23C]' : 'border-gray-300'
              }`}>
                {selectedMode === 'individual' && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                不同供款，個別處理
              </div>
              <p className="text-[14px] text-gray-600 mb-3">
                為每個供款戶口獨立設定
              </p>

              {/* 供款列表（只在選擇個別處理時顯示）*/}
              {selectedMode === 'individual' && (
                <div className="mt-3 pt-3 border-t border-gray-200">
                  <div className="text-[14px] font-semibold text-gray-700 mb-2">
                    此 Scheme 現有供款：
                  </div>
                  <div className="space-y-2">
                    {schemeData.contributions.map((contribution) => (
                      <button
                        key={contribution.type}
                        onClick={(e) => {
                          e.stopPropagation();
                          if (contribution.hasBalance) {
                            handleContributionToggle(contribution.type);
                          }
                        }}
                        disabled={!contribution.hasBalance}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-[12px] transition-all ${
                          contribution.hasBalance
                            ? 'bg-gray-50 hover:bg-gray-100'
                            : 'bg-gray-50 opacity-50 cursor-not-allowed'
                        }`}
                      >
                        <div className="flex-shrink-0">
                          <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                            selectedContributions.includes(contribution.type)
                              ? 'border-[#E6A23C] bg-[#E6A23C]'
                              : 'border-gray-300 bg-white'
                          }`}>
                            {selectedContributions.includes(contribution.type) && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                            )}
                          </div>
                        </div>
                        <div className="flex-1 text-left">
                          <span className="text-[15px] font-medium text-[#1F1F1F]">
                            {contribution.label}
                          </span>
                          {!contribution.hasBalance && (
                            <span className="text-[12px] text-gray-400 ml-2">
                              (無結餘)
                            </span>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {selectedContributions.length > 0 && (
                    <div className="mt-3 text-[13px] text-gray-600">
                      💡 只處理你揀選嘅戶口（已選 {selectedContributions.length} 個）
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </button>

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

        {/* 下一步按鈕 */}
        <div className="pt-4">
          <button
            onClick={handleNext}
            className="w-full bg-[#E6A23C] text-white text-[16px] font-semibold py-4 rounded-[14px] shadow-[0_4px_12px_rgba(230,162,60,0.3)] active:scale-[0.98] transition-transform"
          >
            下一步：轉出設定
          </button>
        </div>

      </div>
    </div>
  );
};

export default ModeSelectionPage;
