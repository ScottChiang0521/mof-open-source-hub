# MOF Open Source Hub

> A traceable guide to open-source tools, databases, and research resources for metal-organic frameworks (MOFs).
>
> 可追溯的金屬有機框架（MOF）開源工具、資料庫與研究資源導覽。

English first, Traditional Chinese (繁體中文) second. The site, `data/mof-catalog.json`, and `research/source-manifest.md` follow the same order.

## English

This project collects open-source tools and data resources for **MOF structure processing, gas adsorption, carbon capture / direct air capture (DAC), periodic DFT, photo- and electrocatalysis, and machine learning**. The site separates *code license*, *data-access terms*, *paper supplementary data*, *training-data availability*, and *required restrictions*, and shows every text field in English first and Traditional Chinese second.

### For ChatGPT and other research assistants

To analyze, compare, or cite the resources here, read these two files first:

| File | Contents | Suggested use |
|---|---|---|
| [`research/source-manifest.md`](research/source-manifest.md) | Verification basis, primary sources, papers, SI / data-archive URLs, licenses and restrictions (Part A English, Part B 繁體中文) | Literature tracing, license reading, study design |
| [`data/mof-catalog.json`](data/mof-catalog.json) | Structured entries kept in sync with the site; language-neutral fields at the top level, text in `en` and `zh` objects | Search, filtering, comparison, data processing |

Suggested prompt:

```text
Read research/source-manifest.md and data/mof-catalog.json in this GitHub repository.
Compare the tools usable for MOF gas adsorption, DAC, and photo-/electrocatalysis. State the code license, data license, ML-training availability, and required restrictions separately, and do not mistake access rights to paper SI, model files, or upstream structure data for a code license.
```

### Scope and curation levels

This version lists **39 resources** (28 software, 8 databases, 3 portals) in two curation levels:

| Curation status | Entries | Meaning |
|---|---:|---|
| Verified, ready to display | 5 | Official source, core use, and the main license / data access can be matched unambiguously. |
| Verified, read the notes | 34 | Usable for research, but with version, source, restricted upstream data, unconfirmed license, model-applicability, or maintenance limits. |

Contents by theme:

- **Simulation and DFT:** gRASPA, RASPA2, RASPA3, DAC-SIM, Quantum ESPRESSO, lammps_interface.
- **Structure processing, validation and pore analysis:** Zeo++, PoreBlazer, MOFid / MOFkey, CoRE MOF Tools, MOSAEC, MOFChecker, mofstructure, PORMAKE, AuToGraFS, ToBaCCo 3.0.
- **Machine learning, generative design and text mining:** mofdscribe, PACMAN-charge, MOFDiff, MOFSimBench, MOFTransformer, MOFormer, MOFSimplify, MOFFlow, ChatMOF, L2M3, GHP-MOFassemble, MOF Literature Extraction (SynMOF).
- **Databases, portals and archives:** QMOF Database, CoRE MOF DB, Materials Project MOF Explorer, Crystallography Open Database (COD), ARC-MOF, MOFX-DB (with hMOF), NIST/ARPA-E adsorbent database, Materials Cloud Archive, Open DAC 2025, NOMAD, Cambridge Structural Database (licensed, not open).

Candidates that failed verification were not added (for example MOSAEC-DB, whose Zenodo record currently returns HTTP 410, and JARVIS-DFT, whose terms and MOF scope could not be confirmed). They are listed in the source manifest's *Excluded* section.

### Data-use principles

1. **Open-source code is not open training data.** Rights to repositories, models, paper supplementary data (SI), data archives, and upstream databases must be read separately.
2. **Public download is not unrestricted use.** Where CSD / CCDC, third-party force fields, NOMAD calculation records, model files, or dataset subsets are involved, return to the original source for reuse and commercial-use terms.
3. **Fix versions and screening rules.** For QMOF, CoRE MOF, COD, and similar databases, record the data version, download date, deduplication, whether the set is limited to synthesized MOFs, and the structure-cleaning procedure.
4. **Model outputs need external validation.** Partial charges, ML force fields, generated structures, and PBE band gaps each have a defined range of applicability; they do not equal experimental results or synthetic feasibility.

For the full classification, URLs, and per-entry limits, see [`research/source-manifest.md`](research/source-manifest.md).

### Run the site locally

Requirements: Node.js 22+ and pnpm 10+.

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000` by default.

Checks and production build:

```bash
pnpm check
pnpm build
```

Regenerate the structured catalog after editing entries (`data/mof-catalog.json` is generated, do not edit it by hand):

```bash
pnpm catalog
```

### Project structure

```text
client/                         React 19 + TypeScript + Vite + Tailwind front end
client/src/const.ts             Chinese data model and the original 15 entries
client/src/const.en.ts          English counterparts of the original 15 entries, labels, workflow guide
client/src/new/                 Entries added 2026-10-14 (Chinese record + English record per entry)
client/src/catalog.ts           Merges all entries for the site and the generator
scripts/build-catalog.ts        Generates data/mof-catalog.json from the entries above
research/source-manifest.md     Traceable sources, papers, SI and data archives (English, then Chinese)
data/mof-catalog.json           Structured bilingual data for programs and LLMs
```

### Citation and disclaimer

This repository is a research guide and provenance tool. It does not replace the original papers, database terms, or project documentation. Before using any listed tool or data, rely on the original project, publisher, and data archive linked from each entry.

The site code is under the MIT license set in `package.json`; **the listed third-party software, datasets, model files, literature, and supplementary data keep their own terms and copyrights.** Do not read this repository's code license as a re-license of any external resource.

### Verification

- Original 15 entries verified 2026-10-09; entries added and the two CoRE MOF Zenodo records appended to `core-mof-db` verified 2026-10-14 (`lastVerified` is stored per entry).
- Evidence types: official repositories, official documentation, formal papers, publisher SI, data archives, versioned releases, data services / APIs. Every DOI of the added entries was resolved through Crossref or DataCite.
- Where a publisher or archive blocked automated requests, the entry says so instead of claiming the page was verified.

---

## 繁體中文

本專案整理適用於 **MOF 結構處理、氣體吸附、碳捕捉／直接空氣捕捉（DAC）、週期性 DFT、光電／電催化，以及機器學習** 的開源工具與資料資源。網站將「程式碼授權」、「資料存取條件」、「論文補充資料」、「訓練資料可用性」與「必要限制」分開標示，且所有文字欄位皆英文在前、繁體中文在後。

### 給 ChatGPT 與其他研究助理

若需要分析、比較或引用本專案中的資源，請優先讀取以下兩份檔案：

| 檔案 | 內容 | 建議用途 |
|---|---|---|
| [`research/source-manifest.md`](research/source-manifest.md) | 各工具／資料庫的核實依據、主要來源、論文、SI／資料保存庫 URL、授權與限制（A 部分英文、B 部分繁體中文） | 文獻追溯、授權判讀、研究設計 |
| [`data/mof-catalog.json`](data/mof-catalog.json) | 與網站同步的結構化條目；與語言無關的欄位在最上層，文字放在 `en` 與 `zh` 物件 | 搜尋、篩選、比較與資料處理 |

建議提示語：

```text
請讀取此 GitHub repository 中的 research/source-manifest.md 與 data/mof-catalog.json。
比較可用於 MOF 氣體吸附、DAC 與光電／電催化的工具；請分別說明程式碼授權、資料授權、ML 訓練可用性與必要限制，且不要把論文 SI、模型檔或上游結構資料的存取權誤判為程式碼授權。
```

### 核實範圍

本版本收錄 **39 項**資源（28 項軟體、8 項資料庫、3 項資料入口），分為兩個策展層級：

| 策展狀態 | 項目 | 意義 |
|---|---:|---|
| 已核實，可立即展示 | 5 | 官方來源、核心用途與主要授權／資料存取可明確對應。 |
| 已核實，須閱讀註記 | 34 | 可供研究使用，但有版本、來源、受限上游資料、授權未確認、模型適用範圍或維護狀態等必要限制。 |

依主題的收錄內容：

- **分子模擬與 DFT**：gRASPA、RASPA2、RASPA3、DAC-SIM、Quantum ESPRESSO、lammps_interface。
- **結構處理、驗證與孔隙分析**：Zeo++、PoreBlazer、MOFid／MOFkey、CoRE MOF Tools、MOSAEC、MOFChecker、mofstructure、PORMAKE、AuToGraFS、ToBaCCo 3.0。
- **機器學習、生成式設計與文獻探勘**：mofdscribe、PACMAN-charge、MOFDiff、MOFSimBench、MOFTransformer、MOFormer、MOFSimplify、MOFFlow、ChatMOF、L2M3、GHP-MOFassemble、MOF Literature Extraction（SynMOF）。
- **資料庫、資料入口與保存庫**：QMOF Database、CoRE MOF DB、Materials Project MOF Explorer、Crystallography Open Database（COD）、ARC-MOF、MOFX-DB（含 hMOF）、NIST/ARPA-E 吸附材料資料庫、Materials Cloud Archive、Open DAC 2025、NOMAD、Cambridge Structural Database（需授權，非開放）。

未通過核實的候選未收錄（例如 MOSAEC-DB：其 Zenodo 紀錄目前回應 HTTP 410；JARVIS-DFT：條款與 MOF 範圍無法確認），列於來源清冊的「排除」一節。

### 重要資料使用原則

1. **開源程式碼不等於開放訓練資料。** 程式庫、模型、論文補充資料（SI）、資料保存庫與上游資料庫的權利必須各自判讀。
2. **公開下載不等於不受限制。** 尤其涉及 CSD／CCDC、第三方力場、NOMAD 計算記錄、模型檔或資料集子集時，應回到原始來源確認再利用與商業使用條件。
3. **固定版本與篩選規則。** QMOF、CoRE MOF、COD 等資料庫應在研究中紀錄資料版本、下載日期、去重、是否限於已合成 MOF，以及結構清理流程。
4. **模型結果需要外部驗證。** 部分電荷、ML 力場、生成式結構與 PBE 能隙均有明確適用範圍，不能直接等同實驗結果或合成可行性。

完整的資源分類、URL 與逐項限制，請見 [`research/source-manifest.md`](research/source-manifest.md)。

### 本機執行網站

需求：Node.js 22+、pnpm 10+。

```bash
pnpm install
pnpm dev
```

開發伺服器預設運行於 `http://localhost:3000`。

驗證與正式建置：

```bash
pnpm check
pnpm build
```

修改條目後重新產生結構化資料（`data/mof-catalog.json` 為產生檔，請勿手動編輯）：

```bash
pnpm catalog
```

### 專案結構

```text
client/                         React 19 + TypeScript + Vite + Tailwind 前端
client/src/const.ts             中文資料模型與原 15 項條目
client/src/const.en.ts          原 15 項條目、標籤與工作流指南的英文對應
client/src/new/                 2026-10-14 新增條目（每項含中文記錄與英文記錄）
client/src/catalog.ts           為網站與產生器合併所有條目
scripts/build-catalog.ts        由上述條目產生 data/mof-catalog.json
research/source-manifest.md     可追溯來源、論文、SI 與資料保存庫清冊（先英文、後中文）
data/mof-catalog.json           供程式與 LLM 使用的雙語結構化資料
```

### 引用與免責聲明

本 repository 是研究導覽與來源追溯工具，不取代原始論文、資料庫條款或專案文件。使用任何列出工具或資料前，請以條目連結的原始專案、出版者與資料保存庫為準。

此網站程式碼採用 `package.json` 所列的 MIT 授權設定；**所列第三方軟體、資料集、模型檔、文獻與補充資料均保留各自的條款與著作權**。請勿將本 repository 的程式碼設定誤解為對所有外部資源的再授權。

### 資料核實

- 原 15 項核實日期：2026-10-09；新增項目及補入 `core-mof-db` 的兩筆 CoRE MOF Zenodo 紀錄核實日期：2026-10-14（`lastVerified` 逐項記錄）。
- 主要證據類型：官方程式庫、官方文件、正式論文、出版者 SI、資料保存庫、版本化 release、資料服務／API。新增項目的每個 DOI 皆經 Crossref 或 DataCite 解析。
- 出版者或保存庫阻擋自動化請求時，條目會如實註明，不宣稱該頁已核實。
