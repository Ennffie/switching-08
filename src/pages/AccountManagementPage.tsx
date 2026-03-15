import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronDown } from 'lucide-react';

const AccountManagementPage = () => {
  const navigate = useNavigate();
  const [openMPF, setOpenMPF] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f5f5f5]">
      <div className="px-4 pt-3 pb-2 flex items-center">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-gray-700">
          <ChevronLeft size={24} />
        </button>
      </div>
      <div className="px-4 pt-2 pb-6">
        <h1 className="text-[24px] font-bold text-[#E6A23C] mb-8">帳戶管理</h1>
        <div className="space-y-6">
          <div className="bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-6 shadow-[0_4px_18px_rgba(0,0,0,0.05)] flex items-center gap-5">
            <img src="./icons/icon-empf-account-management.png" alt="積金易帳戶管理" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
            <div className="text-[20px] font-semibold text-[#1F1F1F] tracking-[-0.01em]">積金易帳戶管理</div>
          </div>
          <button onClick={() => setOpenMPF(v => !v)} className="w-full bg-white rounded-[18px] border border-[#D9D4CC] px-6 py-6 shadow-[0_4px_18px_rgba(0,0,0,0.05)] flex items-center gap-5 text-left">
            <img src="./icons/profile-account-management-mpf.png" alt="強積金帳戶管理" className="w-[58px] h-[58px] object-contain flex-shrink-0" />
            <div className="flex-1 text-[20px] font-semibold text-[#1F1F1F] tracking-[-0.01em]">強積金帳戶管理</div>
            <ChevronDown size={24} className={`text-[#1F1F1F] transition-transform ${openMPF ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountManagementPage;
