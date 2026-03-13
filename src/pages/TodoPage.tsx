import { useEffect, useState } from 'react';
import BottomNav from '../components/BottomNav';

const TodoPage = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <div className="px-4 pt-5 pb-3 flex items-center justify-between bg-[#f5f5f5]">
        <h1 className="text-[22px] font-bold text-[#E6A23C]">待辦事項</h1>
        <button className="w-8 h-8 flex items-center justify-center">
          <img src="./icons/icon-filter.png" alt="篩選" className="w-6 h-6 object-contain" />
        </button>
      </div>

      <div className="px-4 pb-3">
        <p className="text-[15px] leading-[1.55] text-[#2A2A2A]">
          注意：下列項目旨在提醒你在未來90天內到期需多加注意的待辦事項。請瀏覽相關功能頁面以了解其他尚待完成事項（如供款）詳情。
        </p>
      </div>

      <div className="px-3 pb-24">
        <button
          onClick={() => setShowModal(true)}
          className="w-full text-left bg-white rounded-[24px] px-6 pt-7 pb-5 shadow-[0_2px_10px_rgba(0,0,0,0.06)] border border-[#F0F0F0] overflow-hidden"
        >
          <h2 className="text-[18px] font-bold text-[#1F1F1F] mb-6 leading-[1.4]">你有一個已儲存的申請有待提交</h2>

          <div className="space-y-5">
            <div><div className="text-[15px] text-[#B1B1B1] mb-1">功能</div><div className="text-[18px] text-[#1F1F1F] font-medium">登記</div></div>
            <div><div className="text-[15px] text-[#B1B1B1] mb-1">計劃名稱</div><div className="text-[18px] text-[#1F1F1F] font-medium">友邦強積金優選計劃</div></div>
            <div><div className="text-[15px] text-[#B1B1B1] mb-1">帳戶類別</div><div className="text-[18px] text-[#1F1F1F] font-medium">一般僱員</div></div>
            <div><div className="text-[15px] text-[#B1B1B1] mb-1">僱主名稱</div><div className="text-[18px] text-[#1F1F1F] font-medium">雨有限公司</div></div>
            <div><div className="text-[15px] text-[#B1B1B1] mb-1">成員帳戶號碼</div><div className="text-[18px] text-[#1F1F1F] font-medium">56485926</div></div>
            <div><div className="text-[15px] text-[#B1B1B1] mb-1">參考編號</div><div className="text-[18px] text-[#1F1F1F] font-medium break-all">END1009183001348700_001</div></div>
          </div>

          <div className="mt-7 pt-5 border-t border-[#E5E5E5] flex items-center gap-3">
            <img src="./icons/icon-calendar.png" alt="到期日" className="w-7 h-7 object-contain flex-shrink-0" />
            <div className="text-[16px] text-[#8A8A8A]">到期日（日／月／年）：</div>
            <div className="text-[16px] text-[#6E6E6E]">22/04/2026</div>
          </div>
        </button>
      </div>

      {showModal && (
        <>
          <div className="fixed inset-0 bg-black/35 z-40" onClick={() => setShowModal(false)} />
          <div className="fixed inset-0 z-50 flex items-center justify-center px-6">
            <div className="relative w-full max-w-[500px] bg-white rounded-[28px] px-7 pt-6 pb-6 shadow-[0_12px_32px_rgba(0,0,0,0.18)]">
              <button onClick={() => setShowModal(false)} className="absolute right-5 top-5 w-8 h-8 flex items-center justify-center">
                <img src="./icons/todo-modal-close.png" alt="關閉" className="w-5 h-5 object-contain" />
              </button>

              <div className="flex flex-col items-center text-center pt-6 pb-2">
                <img src="./icons/todo-modal-doc.png" alt="已儲存申請" className="w-[92px] h-[92px] object-contain mb-6" />
                <h3 className="text-[22px] font-bold text-[#E6A23C] leading-[1.4] mb-4">確定繼續已儲存的申請？</h3>
                <p className="text-[16px] leading-[1.6] text-[#1F1F1F] mb-8">
                  你可按「繼續」繼續提交申請。如欲返回上一頁，請按「取消」。
                </p>

                <button className="w-full h-[56px] rounded-full bg-[#1E3557] text-white text-[18px] font-medium mb-4">繼續</button>
                <button onClick={() => setShowModal(false)} className="text-[18px] font-medium text-[#1F1F1F]">取消</button>
              </div>
            </div>
          </div>
        </>
      )}

      <BottomNav activeTab="todo" />
    </div>
  );
};

export default TodoPage;
