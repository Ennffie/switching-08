# Switching-04 版本記錄

> 每次更新都記錄喺度，方便追蹤同回滾

---

## [1.0.2] - 2026-02-20

### 修復
- 🐛 Step 2 預設 0% — 新流程重置為 0%，編輯模式先讀取舊資料
- ✅ 編輯模式標記 — Step 3 撳「編輯」會正確載入保存資料

### 改進
- ✅ 版本記錄系統（CHANGELOG.md）
- ✅ 可回滾到舊版本（Git commits）

---

## [1.0.1] - 2026-02-20

### 新增
- ✅ Step 3「編輯」功能 — 可返回 Step 2 修改資料
- ✅ 版本號顯示（每頁底部 v1.0.1）

### 已知問題
- 🐛 返回 Step 2 時會顯示上次資料（應該 default 0%）

---

## [1.0.0] - 2026-02-18

### 新增
- ✅ Landing Page (MyMPFPage)
- ✅ 投資頁面 (InvestPage)
- ✅ Step 1 (SelectPlanPage)
- ✅ Step 2 (FundTransferPage)
- ✅ Step 3 (ConfirmPage)
- ✅ Deploy 去 GitHub Pages

### 技術
- React + TypeScript + Vite
- Tailwind CSS
- GitHub Pages hosting

---

## 回滾方法

如果需要返去某個版本：

```bash
# 睇所有 commit
git log --oneline

# 返去某個版本
git checkout [commit-hash]

# 或者返去某個 tag
git checkout v1.0.0
```

---

## 檔案位置

| 檔案 | 用途 |
|------|------|
| `src/version.ts` | 版本號定義 |
| `CHANGELOG.md` | 版本記錄（呢個檔案）|
| Git commits | 完整歷史 |

---

*最後更新：2026-02-20*
