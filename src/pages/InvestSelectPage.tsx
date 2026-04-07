import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

interface InvestmentOption {
  id: string;
  emoji: string;
  title: string;
  description: string;
  tags: string[];
  hasWarning?: boolean;
  warningText?: string;
}

const InvestSelectPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const { schemeData } = location.state || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const investmentOptions: InvestmentOption[] = [
    {
      id: 'switching',
      emoji: '🔁',
      title: '基金轉換',
      description: '將現有基金轉換至其他基金',
      tags: ['可選「全部供款一齊處理」', '可選「不同供款，個別處理」']
    },
    {
      id: 'rebalancing',
      emoji: '⚖️',
      title: '重新配置',
      description: '賣出所有現有基金，重新分配',
      tags: ['只適用「全部供款一齊處理」'],
      hasWarning: true,
      warningText: '⚠️ 只適用「全部供款一齊處理」'
    },
    {
      id: 'future',
      emoji: '💰',
      title: '調整未來供款',
      description: '設定新供款的投資分配',
      tags: ['不影響現有持倉']
    },
    {
      id: 'combined',
      emoji: '🔄',
      title: '組合調整',
      description: '同時調整現有資產 + 未來供款',
      tags: ['全面重新規劃投資策略']
    }
  ];

  const handleOptionClick = (option: InvestmentOption) => {
    navigate('/invest/mode-selection', {
      state: {
        option: option.id,
        schemeData
      }
    });
  };

  const renderSection = (title: string, color: string, options: InvestmentOption[]) => (
    <div className="mb-6">
      <div className="mb-3">
        <div 
          className="inline-flex items-center gap-2 px-4 py-2 text-white text-[14px] font-semibold rounded-full"
          style={{ backgroundColor: color }}
        >
          {title}
        </div>
      </div>
      
      <div className="space-y-4">
        {options.map((option) => (
          <button 
            key={option.id}
            onClick={() => handleOptionClick(option)}
            className="w-full bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-5 shadow-[0_4px_18px_rgba(0,0,0,0.05)] text-left active:scale-[0.98] transition-transform"
          >
            <div className="flex items-start gap-4">
              <div className="text-[28px] flex-shrink-0">{option.emoji}</div>
              <div className="flex-1">
                <div className="text-[18px] font-bold text-[#1F1F1F] mb-1">
                  {option.title}
                </div>
                <p className="text-[14px] text-gray-600 mb-2">
                  {option.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {option.hasWarning ? (
                    <span className="text-[12px] px-2 py-1 bg-amber-50 text-amber-700 rounded-full">
                      {option.warningText}
                    </span>
                  ) : (
                    option.tags.map((tag, index) => (
                      <span key={index} className="text-[12px] px-2 py-1 bg-gray-100 text-gray-700 rounded-full">
                        • {tag}
                      </span>
                    ))
                  )}
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );

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
      <div className="px-4 pb-8">
        
        {/* 【現在】Section */}
        {renderSection('【現在】', '#007AFF', investmentOptions.filter(o => ['switching', 'rebalancing'].includes(o.id)))}

        {/* 【未來】Section */}
        {renderSection('【未來】', '#34C759', investmentOptions.filter(o => o.id === 'future'))}

        {/* 【現在 + 未來】Section */}
        {renderSection('【現在 + 未來】', '#AF52DE', investmentOptions.filter(o => o.id === 'combined'))}

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

export default InvestSelectPage;
