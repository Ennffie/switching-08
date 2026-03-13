import { useEffect } from 'react';
import BottomNav from '../components/BottomNav';

const TodoPage = () => {
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

      <div className="flex-1 flex flex-col items-center justify-center px-6 pb-24" style={{ marginTop: '-32px' }}>
        <img src="./icons/todo-empty-state.jpg" alt="沒有待辦事項" className="w-[84px] h-[84px] object-contain mb-4 opacity-70" />
        <h2 className="text-[18px] font-semibold text-[#1f1f1f] mb-1">沒有待辦事項</h2>
        <p className="text-[15px] text-[#B8B8B8] text-center">你未有待辦事項。</p>
      </div>

      <BottomNav activeTab="todo" />
    </div>
  );
};

export default TodoPage;
