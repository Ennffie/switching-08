import { useEffect } from 'react';
import BottomNav from '../components/BottomNav';

const ProfilePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    { icon: './icons/profile-my-record.png', label: '我的紀錄' },
    { icon: './icons/profile-statement.png', label: '我的信件及報表' },
    { icon: './icons/profile-account-management.png', label: '帳戶管理' },
    { icon: './icons/profile-more-services.png', label: '更多服務' },
    { icon: './icons/profile-setting.png', label: '積金易帳戶設定' },
    { icon: './icons/profile-contact-us.png', label: '聯絡我們' },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      <div className="px-4 pt-5 pb-3 bg-[#f5f5f5]">
        <h1 className="text-[22px] font-bold text-[#E6A23C]">我的帳戶</h1>
      </div>

      <div className="px-4 pb-6 space-y-4">
        {items.map((item) => (
          <div key={item.label} className="bg-white rounded-[18px] px-5 py-5 flex items-center gap-4 border border-[#F1F1F1] shadow-[0_1px_4px_rgba(0,0,0,0.03)]">
            <img src={item.icon} alt={item.label} className="w-11 h-11 object-contain flex-shrink-0" />
            <span className="text-[17px] font-medium text-[#1f1f1f] tracking-[-0.01em]">{item.label}</span>
          </div>
        ))}

        <button className="w-full flex items-center justify-center gap-2 pt-1 pb-3 mt-1">
          <img src="./icons/profile-logout.png" alt="登出" className="w-5 h-5 object-contain" />
          <span className="text-[17px] font-medium text-[#1E3557]">登出</span>
        </button>
      </div>

      <BottomNav activeTab="profile" />
    </div>
  );
};

export default ProfilePage;
