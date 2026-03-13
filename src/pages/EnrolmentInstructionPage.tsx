import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const steps = [
  {
    icon: './icons/enrol-step-1.png',
    title: '第1步 選擇計劃',
    desc: '選擇一個強積金計劃，然後以「智方便」流動應用程式驗證你的身分。'
  },
  {
    icon: './icons/enrol-step-2.png',
    title: '第2步 填妥個人資料',
    desc: '提供個人及業務資料（如適用）'
  },
  {
    icon: './icons/enrol-step-3.png',
    title: '第3步 作出投資選擇',
    desc: '選擇成分基金並進行投資分配'
  },
  {
    icon: './icons/enrol-step-4.png',
    title: '第4步 設定供款及付款詳情',
    desc: '設定供款週期、付款方法等'
  }
];

const EnrolmentInstructionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F7F6F5] flex flex-col">
      <div className="bg-white border-b border-[#ECECEC] px-4 pt-4 pb-4 flex items-center justify-center relative">
        <button onClick={() => navigate(-1)} className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center">
          <img src="./icons/icon-back.png" alt="返回" className="w-6 h-6 object-contain" />
        </button>
        <h1 className="text-[18px] font-semibold text-[#1F1F1F] tracking-[-0.01em]">強積金帳戶登記</h1>
      </div>

      <div className="px-6 pt-8 pb-8 flex-1">
        <h2 className="text-[22px] font-bold text-[#E6A23C] mb-5">登記指示</h2>
        <p className="text-[16px] text-[#1F1F1F] leading-[1.55] mb-8">只需幾步，即可登記強積金帳戶</p>

        <div className="space-y-8 pb-8 border-b border-[#E3E3E3]">
          {steps.map((step) => (
            <div key={step.title} className="flex items-start gap-5">
              <img src={step.icon} alt={step.title} className="w-[72px] h-[72px] object-contain flex-shrink-0 mt-1" />
              <div className="pt-1">
                <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-2 leading-[1.35]">{step.title}</h3>
                <p className="text-[16px] text-[#1F1F1F] leading-[1.55]">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-8">
          <h3 className="text-[18px] font-bold text-[#1F1F1F] mb-4">所需項目</h3>
          <p className="text-[16px] text-[#1F1F1F] leading-[1.55]">在開始前，請先準備以下項目，以便順利進行登記：</p>
        </div>
      </div>

      <div className="bg-white px-6 pt-4 pb-6 border-t border-[#ECECEC]">
        <button className="w-full h-[58px] rounded-full bg-[#1E3557] text-white text-[18px] font-semibold mb-4">開始登記</button>
        <button className="w-full text-center text-[18px] font-medium text-[#1F1F1F]">以現有紀錄繼續</button>
      </div>
    </div>
  );
};

export default EnrolmentInstructionPage;
