import { useNavigate } from 'react-router-dom';
import { Bell, ChevronRight } from 'lucide-react';

const HomePage = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: '💼', label: '我的帳戶', hasArrow: true },
    { icon: '📊', label: '基金轉換 / 重組投資組合', hasArrow: true, onClick: () => navigate('/invest') },
    { icon: '📋', label: '計劃資料', hasArrow: true },
    { icon: '📄', label: '文件', hasArrow: true },
    { icon: '📈', label: '表現', hasArrow: true },
    { icon: '💱', label: '貨幣', value: 'HKD', hasArrow: true },
  ];

  const bottomItems = [
    { icon: '🏠', label: '主頁', active: true },
    { icon: '🔔', label: '通知', active: false },
    { icon: '👤', label: '個人', active: false },
    { icon: '☰', label: '選單', active: false },
  ];

  return (
    <div className="page-container">
      {/* Header */}
      <div className="home-header">
        <div className="header-top">
          <div className="logo-section">
            <div className="logo-icon">MPF</div>
            <span className="logo-text">我的強積金</span>
          </div>
          <Bell className="notification-icon" size={24} />
        </div>
        <div className="welcome-text">
          <p className="greeting">你好</p>
          <p className="user-name">CHAN TAI MAN</p>
        </div>
      </div>

      {/* Menu List */}
      <div className="menu-list">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className="menu-item"
            onClick={item.onClick}
          >
            <div className="menu-item-left">
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
            </div>
            <div className="menu-item-right">
              {item.value && <span className="menu-value">{item.value}</span>}
              {item.hasArrow && <ChevronRight size={20} className="menu-arrow" />}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        {bottomItems.map((item, index) => (
          <div key={index} className={`nav-item ${item.active ? 'active' : ''}`}>
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </div>

      {/* Bottom Spacer */}
      <div className="bottom-spacer">
        <img src="/bottom-bg.png" alt="" className="bottom-bg-image" />
      </div>
    </div>
  );
};

export default HomePage;
