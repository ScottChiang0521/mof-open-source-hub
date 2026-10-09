# MOF Open Source Hub

> 可追溯的金屬有機框架（MOF）開源工具、資料庫與研究資源導覽。

本專案整理適用於 **MOF 結構處理、氣體吸附、碳捕捉／直接空氣捕捉（DAC）、週期性 DFT、光電／電催化，以及機器學習** 的開源工具與資料資源。網站以繁體中文呈現，並將「程式碼授權」、「資料存取條件」、「論文補充資料」、「訓練資料可用性」與「必要限制」分開標示。

## 給 ChatGPT 與其他研究助理

若需要分析、比較或引用本專案中的資源，請優先讀取以下兩份檔案：

| 檔案 | 內容 | 建議用途 |
|---|---|---|
| [`research/source-manifest.md`](research/source-manifest.md) | 15 項工具／資料庫的核實依據、主要來源、論文、SI／資料保存庫 URL、授權與限制 | 文獻追溯、授權判讀、研究設計 |
| [`data/mof-catalog.json`](data/mof-catalog.json) | 與網站同步的結構化條目 | 搜尋、篩選、比較與資料處理 |

建議提示語：

```text
請讀取此 GitHub repository 中的 research/source-manifest.md 與 data/mof-catalog.json。
比較可用於 MOF 氣體吸附、DAC 與光電／電催化的工具；請分別說明程式碼授權、資料授權、ML 訓練可用性與必要限制，且不要把論文 SI、模型檔或上游結構資料的存取權誤判為程式碼授權。
```

## 核實範圍

本版本收錄 **15 項**資源，分為三個策展層級：

| 策展狀態 | 項目 | 意義 |
|---|---:|---|
| 已核實，可立即展示 | 3 | 官方來源、核心用途與主要授權／資料存取可明確對應。 |
| 已核實，須閱讀註記 | 12 | 可供研究使用，但有版本、來源、受限上游資料、模型適用範圍或維護狀態等必要限制。 |

收錄內容包括：

- **分子模擬與 DFT**：gRASPA、RASPA2、DAC-SIM、Quantum ESPRESSO。
- **結構處理與孔隙分析**：Zeo++、PoreBlazer、MOFid／MOFkey、CoRE MOF Tools。
- **機器學習與逆向設計**：mofdscribe、PACMAN-charge、MOFDiff。
- **資料庫與資料入口**：QMOF Database、CoRE MOF DB、Materials Project MOF Explorer、Crystallography Open Database（COD）。

## 重要資料使用原則

1. **開源程式碼不等於開放訓練資料。** 程式庫、模型、論文補充資料（SI）、資料保存庫與上游資料庫的權利必須各自判讀。
2. **公開下載不等於不受限制。** 尤其涉及 CSD／CCDC、第三方力場、NOMAD 計算記錄、模型檔或資料集子集時，應回到原始來源確認再利用與商業使用條件。
3. **固定版本與篩選規則。** QMOF、CoRE MOF、COD 等資料庫應在研究中紀錄資料版本、下載日期、去重、是否限於已合成 MOF，以及結構清理流程。
4. **模型結果需要外部驗證。** 部分電荷、ML 力場、生成式結構與 PBE 能隙均有明確適用範圍，不能直接等同實驗結果或合成可行性。

完整的資源分類、URL 與逐項限制，請見 [`research/source-manifest.md`](research/source-manifest.md)。

## 本機執行網站

### 需求

- Node.js 22+
- pnpm 10+

### 指令

```bash
pnpm install
pnpm dev
```

開發伺服器預設運行於 `http://localhost:3000`。

### 驗證與正式建置

```bash
pnpm check
pnpm build
```

## 專案結構

```text
client/                         React 19 + TypeScript + Vite + Tailwind 前端
client/src/const.ts             網站資料模型與 15 項資源條目
research/source-manifest.md     可追溯來源、論文、SI 與資料保存庫清冊
data/mof-catalog.json           供程式與 LLM 使用的結構化資料
```

## 引用與免責聲明

本 repository 是研究導覽與來源追溯工具，不取代原始論文、資料庫條款或專案文件。使用任何列出工具或資料前，請以條目連結的原始專案、出版者與資料保存庫為準。

此網站程式碼採用 `package.json` 所列的 MIT 授權設定；**所列第三方軟體、資料集、模型檔、文獻與補充資料均保留各自的條款與著作權**。請勿將本 repository 的程式碼設定誤解為對所有外部資源的再授權。

## 資料核實

- 核實日期：2026-10-09
- 主要證據類型：官方程式庫、官方文件、正式論文、出版者 SI、資料保存庫、版本化 release、資料服務／API
- 網站 checkpoint：`15d69623`
