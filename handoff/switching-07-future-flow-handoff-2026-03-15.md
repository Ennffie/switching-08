# switching-07 handoff — Future Contribution Investment Flow

Date: 2026-03-15  
Repo: `https://github.com/Ennffie/switching-07`  
Tagged version: `future-flow-complete-2026-03-15`

## 1. What was built

This round focused on **Flow 2 = 未來供款的投資** and aligning it closely with **Flow 1 = 現有帳戶結餘的投資**.

Implemented flow:

1. Invest landing page
2. Future flow Step 1 — select plan/account
3. Future flow Step 2 — future contribution fund allocation
4. Future flow Step 3 — confirm page
5. Terms page → accept
6. Success page
7. Records list page
8. Record detail page with 2 tabs

---

## 2. Important lesson / user preference

### Most important instruction from user
When user says:
- “跟 flow 1”
- “照抄”
- “copy 過去”

It means:
- **do not approximate**
- **do not redesign**
- **do not invent a similar version**
- directly copy **structure / behavior / data shape / interaction model** from Flow 1

This was a major lesson from the session. User got frustrated when changes were “close” but not exact.

### Practical rule for next AI
If future edits touch Flow 2 and user references Flow 1:
1. read the Flow 1 source first
2. copy exact layout / interaction logic
3. only then swap labels/data where explicitly requested

---

## 3. Files added / changed conceptually

### Key future-flow pages
- `src/pages/FutureSelectPlanPage.tsx`
- `src/pages/FutureInvestPage.tsx`
- `src/pages/FutureConfirmPage.tsx`
- `src/pages/FutureSuccessPage.tsx`
- `src/pages/FutureRecordsPage.tsx`
- `src/pages/FutureRecordDetailPage.tsx`

### Context / content-style state holders
- `src/context/FutureInvestContext.tsx`
- `src/context/FutureSubmissionContext.tsx`

### Wiring
- `src/App.tsx`
- `src/pages/InvestPage.tsx`

---

## 4. Current future flow behavior

## Step 1 — FutureSelectPlanPage

Aligned toward Flow 1 with user-specified details:
- AIA visible logo
- Manulife visible logo
- reduced card height
- “帳戶詳情” styling aligned to Flow 1
- popup copied in structure from Flow 1
- popup and card data aligned based on user screenshots
- employer/company row added
- account types corrected:
  - card 1 = `一般僱員`
  - card 2 = `個人帳戶`
- company names:
  - AIA = `實運有限公司`
  - Manulife = `德信工程有限公司`

User preferred exact matching to Flow 1 assets and popup structure.

---

## Step 2 — FutureInvestPage

This page now supports:
- two tabs:
  - `僱主強制性供款（港幣）`
  - `僱員強制性供款（港元）`
- fund list copied from **Flow 1 “轉入”基金** direction
- numeric keypad input for all fund percentages
- sort bottom sheet modeled after Flow 1
- reset button clears current tab inputs
- both tabs must total **100%** to enable next
- notes section added based on user screenshot

### State persistence used here
`FutureInvestContext` stores the editable per-tab allocations.

### Submission snapshot behavior
When Step 2 presses Next, allocations are copied into `FutureSubmissionContext` as submission-time saved data.
This is important because records/detail pages should show **submitted** values, not live editing state.

---

## Step 3 — FutureConfirmPage

Built in Flow 1 style:
- step bar current step = 3
- confirm title
- step 1 summary section
- step 2 summary section
- edit buttons
- submit button

Current implementation uses:
- AIA / 友邦 plan display
- saved Step 2 allocations from context

Submit goes to Terms page.

---

## Terms / Success / Records

### Terms page
Current behavior:
- Accept no longer shows the old popup
- Accept goes directly to future success page

### FutureSuccessPage
Current behavior:
- shows success state
- reference number from `FutureSubmissionContext`
- submitted time from `FutureSubmissionContext`
- “查閱提交狀態” → future records page
- secondary button → `/invest` investment selection page

### FutureRecordsPage
Current behavior:
- one single record card only
- subtle shadow added
- card uses same reference number as success page
- top-left back goes to main page `/`
- clicking card opens detail page

### FutureRecordDetailPage
Current behavior:
- basic info section
- two tabs:
  - `選擇計劃及帳戶`
  - `未來供款的投資`
- investment tab reads **submitted** allocations from `FutureSubmissionContext`
  (not live editing state)

---

## 5. Why two contexts exist

### `FutureInvestContext`
Use this for **editable working state** while user is still in Step 2 / Step 3 flow.

### `FutureSubmissionContext`
Use this for **submitted snapshot state**:
- reference number
- submitted time
- submitted employer mandatory allocations
- submitted employee mandatory allocations

This separation was added because records/detail pages were missing data when they depended on live state.

---

## 6. Reset behavior already added

On Invest landing page, when user presses the **future investment card**:
- future editable content is reset
- future submitted content is reset
- reference number and submitted time are refreshed

This creates a clean new run.

---

## 7. Common pitfalls discovered

### Pitfall 1 — “similar” is not enough
If user asks to follow Flow 1, copy exact behavior/code patterns.
Do not build a simplified approximation.

### Pitfall 2 — records pages should not read live editor state
If records detail needs submitted values, read from submission snapshot context, not from edit context.

### Pitfall 3 — exact labels matter
User was very specific about:
- tab labels
- account types
- employer/company names
- popup contents
- icon visibility

### Pitfall 4 — assets may not exist
For missing image/icon assets, using existing icon components can be safer than guessing a missing file path.

---

## 8. What next AI should check first

If more work is requested, inspect these in order:

1. `src/pages/FutureSelectPlanPage.tsx`
2. `src/pages/FutureInvestPage.tsx`
3. `src/pages/FutureConfirmPage.tsx`
4. `src/pages/FutureSuccessPage.tsx`
5. `src/pages/FutureRecordsPage.tsx`
6. `src/pages/FutureRecordDetailPage.tsx`
7. `src/context/FutureInvestContext.tsx`
8. `src/context/FutureSubmissionContext.tsx`
9. `src/pages/FundTransferPage.tsx` (Flow 1 reference)
10. `src/pages/ConfirmPage.tsx` (Flow 1 reference)
11. `src/pages/RecordsPage.tsx` (Flow 1 reference)

---

## 9. Recommended working style for next AI

When asked to change Flow 2:
- compare against Flow 1 source first
- preserve user-requested exact labels and wording
- keep using context/content approach instead of ad hoc hardcoded display-only data
- when touching post-submit pages, confirm whether page should use:
  - live editable data, or
  - submitted snapshot data

If unsure, for records/history pages the safer answer is usually:
- **submitted snapshot data**

---

## 10. Current git marker

Tagged release:
- `future-flow-complete-2026-03-15`

Use this as restore/reference point before further changes.
