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

### Linking to a single entry

Every entry has a stable link: the site address plus `#` and the entry's `id` from `data/mof-catalog.json`, for example `https://scottchiang0521.github.io/mof-open-source-hub/#mofid-mofkey`. Opening such a link shows that entry (clearing any filters), and selecting an entry on the page updates the address bar, so the current address can always be cited. The detail panel also has a **Copy link** button. Two limits: link previews (chat apps, social sites) show the site-level description, not the entry's, because the site is a single static page; and **an `id` must not be renamed**, or links already shared would stop working.

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
- **Automated re-check.** `pnpm check:sources` (also run monthly by `.github/workflows/source-check.yml`) re-reads each license file and compares it with `data/source-baseline.json` and with the license wording in the catalog, looks every DOI up in the Crossref and DataCite APIs, and follows the other URLs. A changed or mismatching license text, a DOI registered with neither registry, or a 404/410 link fails the run and opens an issue. A DOI whose registered title shares little with the catalog's title, and any blocked or unreachable URL, are warnings only (publishers often refuse automated requests, and that cannot be told apart from a dead link). DOIs are looked up in the registries rather than followed, because doi.org redirects to the publisher, which answers a bot with 403. This shows that a DOI exists and that its title resembles the catalog's; it does not show that the DOI is the right citation for a tool. Only files that are license texts are hashed; terms pages and creativecommons.org pages get the link check only. After you have reviewed a legitimate change, run `pnpm sources:baseline` to record the new text. This catches changes; it does not replace reading the license.
- **How far the first 15 entries are independently re-checked** (as of 2026-10-14). Their text was compiled on 2026-10-09 from an earlier verification report, and the source manifest states that it did not re-verify those facts, so the verifier and method of that report are not recorded here. The monthly source check now re-tests part of it itself: for 10 of the 15, that the license file still looks like the license family the catalog states (the other 5 rest on a CC page, a README or a terms page, which are only link-checked); for all 15, that the paper DOI exists in Crossref or DataCite and that its registered title resembles the catalog's; and for every entry, that the URLs still answer. **No script re-checks the descriptive text** (capabilities, MOF applicability, ML training use, maintenance status, caveats, data-access class). For those 15 entries it still rests on the earlier report.

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

### 連結到單一條目

每個條目都有固定連結：網站位址加上 `#` 與該條目在 `data/mof-catalog.json` 中的 `id`，例如 `https://scottchiang0521.github.io/mof-open-source-hub/#mofid-mofkey`。開啟這類連結會顯示該條目（並清除篩選條件）；在頁面上選取條目時，網址列也會同步更新，因此目前的網址隨時可以直接引用。詳細面板另有「複製連結」按鈕。兩項限制：分享預覽（通訊軟體、社群網站）顯示的是整個網站的描述，而不是該條目的，因為本站是單一靜態頁面；另外 **`id` 不可更名**，否則已分享出去的連結會失效。

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
- **自動重新檢查。** `pnpm check:sources`（也由 `.github/workflows/source-check.yml` 每月執行）會重新讀取每份授權檔，與 `data/source-baseline.json` 及目錄中的授權文字比對；每個 DOI 會到 Crossref 與 DataCite 的 API 查詢；其餘網址則直接連線檢查。授權文字改變或與目錄不符、DOI 在兩個機構都查不到、連結回應 404／410，執行會失敗並開立 issue。DOI 註冊的標題與目錄標題幾乎不重疊，以及被擋或連不上的網址，只列為警告（出版者常拒絕自動化請求，這無法與失效連結區分）。DOI 是查註冊機構而不是直接連線，因為 doi.org 會轉到出版者，而出版者會以 403 回應機器人。這能證明 DOI 存在且標題與目錄相近，但不能證明該 DOI 就是某個工具該引用的文獻。只有本身是授權全文的檔案會做雜湊比對；條款頁與 creativecommons.org 頁面只檢查連結。確認變更屬正當後，執行 `pnpm sources:baseline` 記錄新文字。這個檢查能發現變動，但不能取代閱讀授權本身。
- **前 15 項目前有多少經過獨立重新檢查**（截至 2026-10-14）。這 15 項的內容於 2026-10-09 依先前的核實報告整理，而來源清冊明確表示未重新核實這些事實，因此該報告的核實者與方法並未記錄在此。每月的來源檢查現在自行重新驗證其中一部分：15 項中的 10 項，確認授權檔仍屬目錄所述的授權類型（其餘 5 項的依據是 CC 頁面、README 或條款頁，只檢查連結）；15 項全部，確認論文 DOI 在 Crossref 或 DataCite 查得到，且註冊標題與目錄相近；每一項，確認網址仍有回應。**描述性文字沒有任何腳本檢查**（功能、MOF 適用性、ML 訓練用途、維護狀態、限制、資料存取分類），這 15 項在這些部分仍依據先前的報告。
