# Switching-04 Design Document

## 項目概述
MPF 基金轉換界面 - React + TypeScript + Vite

## 技術棧
- **框架：** React 18
- **語言：** TypeScript
- **構建工具：** Vite
- **路由：** React Router (HashRouter)
- **樣式：** Inline CSS

---

## 核心設計規範

### 顏色系統
| 用途 | 顏色 |
|------|------|
| 主要橙色 | `#E67E22` |
| 深藍色（主要行動） | `#2c3e50` |
| 灰色（禁用） | `#ccc` |
| 背景灰 | `#f5f5f5` |

### 字體規範
- 標題：20-22px, fontWeight: 700
- 正文：14-16px, fontWeight: 400-600
- 輔助文字：12-13px, color: #666

---

## 重要技術方案

### 1. GitHub Pages SPA Routing
**問題：** BrowserRouter 會 404
**解決：** 用 HashRouter
```javascript
<HashRouter>
  <Route path="/" element={<MyMPFPage />} />
  <Route path="/invest" element={<InvestPage />} />
</HashRouter>
```

### 2. 圖片路徑
**問題：** vite.config.ts 有 `base: '/Switching-04/'`
**正確路徑：**
```javascript
<img src="/Switching-04/icons/manulife-logo-new.jpg" />
```

### 3. iOS Safari 滾動檢測 ⭐
**問題：** `scroll` 事件唔會即時觸發
**解決方案：**
```javascript
useEffect(() => {
  const checkScroll = () => {
    const scrollTop = window.pageYOffset || document.body.scrollTop || 0;
    const windowHeight = window.innerHeight;
    const docHeight = document.body.scrollHeight;
    const remaining = docHeight - (scrollTop + windowHeight);
    
    if (remaining <= 200) {
      setCanAccept(true);
    }
  };
  
  const intervalId = setInterval(checkScroll, 200);
  return () => clearInterval(intervalId);
}, []);
```
**關鍵點：**
- 用 `setInterval` 每 200ms 檢查一次
- 用 `document.body.scrollHeight`（iOS Safari 最準確）
- 剩餘滾動距離少於 200px 就當係到底

### 4. React 頁面滾動到頂
```javascript
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
```
**Back button 都要加：**
```javascript
navigate(-1);
setTimeout(() => window.scrollTo(0, 0), 0);
```

---

## 頁面流程

```
Landing (MyMPFPage) 
  ↓
InvestPage (選擇現有帳戶/未來供款)
  ↓
Step 1: SelectPlanPage (選擇計劃)
  ↓
Step 2: FundTransferPage (轉出/轉入基金分配)
  ↓
Step 3: ConfirmPage (確認摘要)
  ↓
TermsPage (條款及細則) ← 用 iOS 滾動檢測
  ↓
SuccessPage (成功提交)
  ↓
RecordsPage (我嘅紀錄)
```

---

## Step Bar 規範
- 圓圈：40px 直徑
- 連接線：80px 寛，3px 厚
- 已完成：橙色背景 + ✓
- 當前：橙色背景 + 數字
- 未開始：灰色背景 + 數字

---

*Last updated: 2026-02-18*
