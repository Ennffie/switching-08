# Switching-04 版本記錄

**Repo:** https://github.com/Ennffie/Switching-04  
**GitHub Pages:** https://ennffie.github.io/Switching-04/

---

## 版本歷史

### v1.0.0 - 初始版本
**日期:** 2026-02-18  
**Commit:** 9210a47d (HashRouter 轉換)

**內容:**
- 基本 React + Vite 項目結構
- HashRouter 設定（解決 GitHub Pages 404 問題）
- 基本頁面結構：Landing、Invest、SelectPlan、FundTransfer、Confirm
- 初始 CSS 樣式

**🔗 連結:** https://ennffie.github.io/Switching-04/#/

---

### v1.1.0 - 加返導航功能
**日期:** 2026-02-18  
**Commit:** 3b5d9564

**修改:**
- Landing page「投資」按鈕可點擊
- 添加 navigate 到 /invest

**🔗 連結:** https://ennffie.github.io/Switching-04/#/

---

### v1.2.0 - CSS 樣式修復
**日期:** 2026-02-18  
**Commit:** 6d8335ab

**修改:**
- 添加缺失嘅 CSS styles
- 修復 SelectPlan 同 FundTransfer 頁面樣式

**🔗 連結:** https://ennffie.github.io/Switching-04/#/

---

### v1.3.0 - CSS Inject 方法
**日期:** 2026-02-18  
**Commit:** fdc0c8f4

**修改:**
- 將 custom CSS 改為 JavaScript inject 方法
- 確保 Tailwind build 後樣式仍然生效
- 添加 .gitignore 文件

**🔗 連結:** https://ennffie.github.io/Switching-04/#/

---

### v2.0.0 - UI 大更新（參考設計圖）
**日期:** 2026-02-18  
**Commit:** (Sub-agent 更新)

**修改:**
- Landing Page：橙色標題、白色卡片、圖標左置
- 投資頁面：返回箭頭、橙色標題、副標題、兩個選項卡片
- Step 1：Step indicator、紅色提示、計劃卡片設計、深藍色按鈕
- Step 2：Tab 導航、基金分配、Validation
- Step 3：確認摘要、提交按鈕

**🔗 連結:** https://ennffie.github.io/Switching-04/#/

---

### v2.1.0 - 投資頁面圖標更新
**日期:** 2026-02-18  
**Commit:** 最新

**修改:**
- 使用用戶提供嘅 icon 圖片
- 卡片邊線改為 2px 粗 + 黑色
- 添加輕微陰影效果

**🔗 連結:** https://ennffie.github.io/Switching-04/#/invest

---

## 回滾方法

如果需要返去舊版本，可以喺 GitHub repo 揾返對應 commit，然後：

```bash
git checkout [commit-hash]
npm run deploy
```

或者修改 GitHub Pages branch 去對應版本。

---

## 當前版本

**最新版本:** v2.1.0  
**更新日期:** 2026-02-18  
**狀態:** ✅ 正常運作

**主要功能:**
- ✅ Landing Page 導航
- ✅ 投資頁面（跟設計圖）
- ✅ Step 1 選擇計劃
- ✅ Step 2 基金轉換
- ✅ Step 3 確認頁面

---

*最後更新: 2026-02-18*