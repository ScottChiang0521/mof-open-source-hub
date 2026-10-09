# MOF Open Source Hub：來源清冊與保守策展決定

**清冊版本：** 基於題示 15 筆獨立核實結果整理。  
**策展原則：** 本清冊**不新增、推斷或重新核實**任何事實；展示決定僅依每筆結果的 `verdict`、`evidenceSummary`、`caveats` 與所列 URL 作成。`verified` 項目列為「可立即展示」；`verified_with_caveat` 項目列為「可展示但須註記」。本批結果沒有被原核實結論判為不可用的項目，故「排除」為空。

> **資料品質與使用邊界**
>
> 1. 此清冊同時涵蓋**軟體／工具**與**資料庫／資料入口**。軟體的開源授權、資料集的資料授權、論文補充資訊（SI）的取得權利，以及模型檔的使用條款必須分開呈現；不得由其中一項推論另一項的再利用權。
> 2. 「可立即展示」不等於所有下游資料或每一種應用均已驗證；其意義僅為原核實結論為 `verified`。仍應在 UI 保留資料類型、版本與用途範圍。
> 3. 「可展示但須註記」的限制是展示卡與詳情頁的必要內容，尤其是授權衝突／未確認、CSD 衍生或受限資料、非資料庫工具、維護訊號有限、模型適用範圍及資料子集差異。
> 4. **原始論文**用於辨識方法與 DOI；**出版者 SI**是隨論文發布的補充檔，不能自動當作開放訓練資料；**資料保存庫**是版本化資料或模型檔的來源；**程式碼 release**是特定版本的軟體封存；**一般專案資料目錄**則是程式庫內隨附檔案，可能沒有獨立資料授權。
> 5. 對含 CSD／CCDC、NOMAD、MPContribs、第三方力場或上游資料來源的項目，本清冊只陳述已核實的存取或授權範圍；未確認之再散布、商業使用與 ML 訓練權利一律標示為未確認。

## 策展摘要

| 策展層級 | 筆數 | IDs |
|---|---:|---|
| **可立即展示** | 3 | `graspa`、`quantum-espresso`、`qmof-database` |
| **可展示但須註記** | 12 | `raspa2-iraspa`、`zeopp`、`poreblazer`、`mofid-mofkey`、`core-mof-tools`、`pacman-charge`、`mofdscribe`、`mofdiff`、`dac-sim`、`core-mof-db`、`materials-project-mof-explorer`、`crystallography-open-database-cod` |
| **排除** | 0 | 無 |

---

# 一、可立即展示

## gRASPA

- **ID／類型：** `graspa`；GPU 加速 Monte Carlo 吸附模擬軟體。[1] [4]
- **展示判定：** 可立即展示。原核實結論為 `verified`；其官方程式庫與正式論文均支持其用於多孔材料（含 MOF）的分子吸附模擬。[1] [4]
- **建議展示內容：** 說明其為軟體、不是 MOF 結構／性質資料庫；呈現 MIT 授權、MOF 適用性、GCMC／NVT／NVT-Gibbs／Widom／GC-TMMC 等核實用途。不要把其整合 ML potentials 的能力表述為其提供了 ML 訓練資料。[1] [2] [4]
- **授權與狀態：** 程式庫 LICENSE 為 MIT；原核實結果記載 release 頁的最新版與 GPU 相容性細節，應連至 release 與文件，而非將任一硬體路徑泛化為完全等同支援。[2] [3] [6]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/snurr-group/gRASPA> [1] | 主程式碼、功能與 MOF 定位。 |
| 授權正文 | <https://raw.githubusercontent.com/snurr-group/gRASPA/main/LICENSE> [2] | MIT 程式碼授權證據。 |
| 程式碼 release | <https://github.com/snurr-group/gRASPA/releases> [3] | 版本與發行資產；不是資料集。 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acs.jctc.4c01058> [4] | 方法、MOF 實例與書目識別。 |
| 軟體紀錄 | <https://www.osti.gov/biblio/code-172693> [5] | 交叉核實軟體／MIT 記錄。 |
| 一般專案文件 | <https://zhaoli2042.github.io/gRASPA-mkdoc/> [6] | 建置與不同 GPU 路徑的限制。 |

## Quantum ESPRESSO

- **ID／類型：** `quantum-espresso`；週期性 DFT 計算軟體平台。[7] [9]
- **展示判定：** 可立即展示。原核實結論為 `verified`；正式 QEF GitLab 與官方文件支持 GPL-2.0-or-later 的週期性 DFT 軟體定位，且有 M-MOF-74 的已發表 Quantum ESPRESSO 實例。[7] [9] [10] [12]
- **建議展示內容：** 呈現其為計算軟體，不是結構、性質或合成資料庫；可列出電子結構、鬆弛、分子動力學、DFPT 與 DFT+U 等已核實能力。MOF 結果仍依結構模型、泛函、色散、贗勢、磁態、DFT+U 與收斂設定而定，不能預先保證任意 MOF 的結果品質。[9] [10] [12]
- **授權與狀態：** 正式開發與 release 的依據是 QEF GitLab；GitHub 是鏡像，不能當作 issue／PR 的正式開發入口。[7] [8] [11]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫／正式開發庫 | <https://gitlab.com/QEF/q-e> [7] | 正式開發、GPL 授權與維護訊號。 |
| 程式碼 release | <https://gitlab.com/QEF/q-e/-/releases/qe-7.6> [8] | QEF 版本化原始碼封存。 |
| 原始論文（出版者） | <https://iopscience.iop.org/article/10.1088/0953-8984/21/39/395502> [9] | 軟體原始論文與 DOI。 |
| 一般官方文件 | <https://www.quantum-espresso.org/Doc/INPUT_PW.html> [10] | PWscf 週期性 DFT 功能界線。 |
| 程式碼鏡像 | <https://github.com/QEF/q-e> [11] | 鏡像；非正式 issue／PR 入口。 |
| MOF 應用論文（出版者） | <https://www.sciencedirect.com/science/article/pii/S000926141731045X> [12] | M-MOF-74 週期性 DFT 使用證據。 |

## QMOF Database

- **ID／類型：** `qmof-database`；MOF 與相關配位聚合物的高通量週期性 DFT 資料庫，附輔助工具程式庫。[13] [15] [17]
- **展示判定：** 可立即展示。原核實結論為 `verified`；正式 Figshare 資料發布、QMOF 程式庫與 Matter 論文共同支持其公開、直接面向 MOF 的 DFT 結構與性質資料定位。[13] [15] [17]
- **建議展示內容：** 明確分欄呈現**資料為 CC BY 4.0**、**GitHub 程式碼與文件為 MIT**。資料範圍可顯示為 20,000+ MOF／相關結構、DFT 最佳化結構與已核實的電子／電荷／磁性與孔隙欄位；合成部分只呈現已核實的 `synthesized` 旗標、來源與部分 DOI／refcode，不宣稱有完整實驗配方、反應條件或產率。[13] [15] [16] [17]
- **資料品質提示：** 結構同時含已合成與假想結構，並含 MOF-like coordination polymers；需按 `synthesized`、`source`、孔隙欄位等篩選。NOMAD 條目可能高於當前 MOF Explorer，使用原始計算檔時需與具體 QMOF 版本交叉核對。[18] [19] [20]
- **ML／下載：** CC BY 4.0 的 Figshare 資料可用於訓練或衍生，但需署名與標示變更。MPContribs 是查詢／下載鏡像，NOMAD 是計算輸入／輸出保存位置；兩者不是可取代 QMOF 版本化 release 的同義項。[13] [17] [18] [19] [20]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 資料保存庫／版本化資料 release | <https://figshare.com/articles/dataset/QMOF_Database/13147324> [13] | QMOF 正式資料發布、CC BY 4.0 與版本歷史。 |
| 資料保存庫 API | <https://api.figshare.com/v2/articles/13147324> [14] | 檔案與版本中繼資料交叉核對。 |
| 一般專案程式庫 | <https://github.com/Andrew-S-Rosen/QMOF> [15] | 輔助程式碼、文件與資料來源說明。 |
| 授權正文 | <https://github.com/Andrew-S-Rosen/QMOF/blob/main/LICENSE> [16] | GitHub 程式碼 MIT 授權；非資料授權。 |
| 原始論文（出版者） | <https://www.sciencedirect.com/science/article/pii/S2590238521000709> [17] | QMOF 原始論文、範圍與 ML 使用。 |
| 一般官方文件 | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data> [18] | 資料格式、下載與外部保存位置。 |
| 資料服務／API 鏡像 | <https://contribs.materialsproject.org/projects/qmof> [19] | MPContribs 欄位、下載與查詢鏡像。 |
| 計算資料保存庫 | <https://doi.org/10.17172/NOMAD/2021.10.10-1> [20] | QMOF PBE 計算檔保存位置。 |

---

# 二、可展示但須註記

## RASPA2（iRASPA 生態系）

- **ID／類型：** `raspa2-iraspa`；古典分子模擬軟體。[21] [22] [26]
- **必要註記：** 目前官方程式庫 `COPYING` 明載 MIT，但官方網站與 2016 論文曾稱 GPL；本清冊只將目前原始碼庫的明確授權正文標為 MIT，舊版或法務重用需向著作權人確認版本別授權。[21] [23] [26]
- **展示範圍：** RASPA2 用於柔性奈米多孔材料的吸附與擴散，README 直接列出 MOF 與 rigid／flexible MOF 力場範例；iRASPA 是同一生態系的進階可視化套件，不能把 iRASPA 的視覺化功能誤列為 RASPA2 模擬引擎功能。[21] [22] [27] [28]
- **操作／維護註記：** 儲存庫力場、結構與分子檔僅為說明範例，使用者須自行建構與驗證自己的古典力場。原核實結果也僅支持公開、未封存與有限的提交／release 證據，不能承諾長期支援。[22] [24] [25]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般官方網站 | <https://iraspa.org/raspa/> [21] | RASPA 定位與歷史授權表述。 |
| 一般專案程式庫 | <https://github.com/iRASPA/RASPA2> [22] | RASPA2 功能、MOF 範例與使用界線。 |
| 授權正文 | <https://raw.githubusercontent.com/iRASPA/RASPA2/master/COPYING> [23] | 目前程式庫的 MIT 正文。 |
| 維護證據 | <https://github.com/iRASPA/RASPA2/commits/master/> [24] | 可見提交歷史。 |
| 程式碼 release | <https://api.github.com/repos/iRASPA/RASPA2/releases/latest> [25] | 正式 release 與二進位資產中繼資料。 |
| 原始論文（出版者） | <https://www.tandfonline.com/doi/full/10.1080/08927022.2015.1010082> [26] | RASPA 原始論文。 |
| 一般官方網站（iRASPA） | <https://iraspa.org/> [27] | iRASPA 生態系定位。 |
| iRASPA 論文（出版者） | <https://www.tandfonline.com/doi/full/10.1080/08927022.2018.1426855> [28] | 視覺化套件的獨立論文。 |

## Zeo++

- **ID／類型：** `zeopp`；多孔晶體幾何／拓撲分析軟體。[29] [31] [35]
- **必要註記：** 此為軟體，不是資料庫。原核實的開源與授權依據是 EPFL LSMO fork 的 README／LICENSE；官方下載頁本次未能取得可讀下載文字，且官方 Zeo++ 0.3 與 LSMO v0.4.7 屬不同發布脈絡，不能把 LSMO v0.4.7 斷言為原作者 canonical release。[29] [30] [31] [32] [33]
- **展示範圍：** 可呈現 Voronoi 分割、孔徑、可及表面積／體積、通道維度、blocking spheres、開放金屬位點與 MOF／COF 組裝等已核實功能；其 MOF 適用性也由出版者摘要支持。[29] [30] [35]
- **授權／維護註記：** LICENSE 接近 BSD 3-clause，但含額外 enhancement 授權段落，且 API 為 `NOASSERTION`；應保留「修改版 BSD／BSD 3-clause-like」的描述，不簡化成標準 SPDX BSD-3-Clause。其可核實的 fork release／推送停在 2022，應顯示為近年無可見新推送。[31] [32] [33] [34]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般官方網站 | <https://www.zeoplusplus.org/> [29] | 官方功能與 MOF／COF 應用說明。 |
| 一般官方文件 | <https://www.zeoplusplus.org/docs.html> [30] | 功能文件與核心引用。 |
| 一般專案程式庫（LSMO fork） | <https://github.com/lsmo-epfl/zeopp-lsmo> [31] | 可讀取程式碼與 fork 定位。 |
| 授權正文 | <https://github.com/lsmo-epfl/zeopp-lsmo/blob/master/LICENSE> [32] | 修改版 BSD-like 條款。 |
| 程式碼 release | <https://github.com/lsmo-epfl/zeopp-lsmo/releases/tag/v0.4.7> [33] | LSMO v0.4.7 封存。 |
| 維護證據 | <https://api.github.com/repos/lsmo-epfl/zeopp-lsmo> [34] | fork 的公開、未封存與最後推送中繼資料。 |
| 原始論文（出版者） | <https://www.sciencedirect.com/science/article/abs/pii/S1387181111003738> [35] | Zeo++ 方法論與 MOF 目標材料。 |
| 書目中繼資料 | <https://api.crossref.org/works/10.1016%2Fj.micromeso.2011.08.020> [36] | DOI／題名交叉核對。 |

## PoreBlazer

- **ID／類型：** `poreblazer`；多孔材料幾何分析工具，附 MOF 性質表。[37] [40] [42]
- **必要註記：** 主項目是軟體，不是資料庫。README 對「project」宣告 GPL-3.0-or-later，但 repository 未有 GitHub 可辨識的獨立 LICENSE；應將授權證據標為 README 宣告，不宣稱有經 GitHub 偵測的獨立授權檔。[37] [38]
- **展示範圍：** 可呈現 PLD、LCD、連通維度、可及表面積、氦／幾何孔體積與孔徑分布等 MOF 幾何分析功能；MOF 直接適用性由案例與 v4.0 論文支持。[37] [41] [42]
- **資料註記：** `data/` 是**一般專案資料目錄**，隨附 CSD MOF subset 的 PB4、Zeo++、RASPA 幾何性質表；PB4 為 12,081 筆，但這些衍生資料的獨立再利用、CSD 再散布與 ML 訓練許可未確認。不可把程式 GPL 宣告外推至資料表。[40] [42]
- **維護註記：** main 的最後可見提交為 2020，且無 GitHub release；可展示但應標為公開、低維護訊號。[39]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/SarkisovGitHub/PoreBlazer> [37] | 程式、案例與資料目錄入口。 |
| 一般專案 README／授權宣告 | <https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/README.md> [38] | GPL-3.0-or-later 作者宣告。 |
| 維護證據 | <https://github.com/SarkisovGitHub/PoreBlazer/commits/main> [39] | 提交歷史。 |
| 一般專案資料目錄 | <https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/data/README.txt> [40] | 隨附資料表、筆數與欄位；非獨立授權資料發布。 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1080/08927022.2011.592832> [41] | 結構表徵工具的原始論文。 |
| 方法論論文（出版者 DOI） | <https://doi.org/10.1021/acs.chemmater.0c03575> [42] | PoreBlazer v4.0 與 CSD MOF subset 應用。 |
| 出版者 SI 保存庫 | <https://acs.figshare.com/articles/journal_contribution/Materials_Informatics_with_PoreBlazer_v4_0_and_the_CSD_MOF_Database/13296133> [43] | CC BY-NC 4.0 的論文補充資料；不等同 repository 資料表授權。 |
| release API | <https://api.github.com/repos/SarkisovGitHub/PoreBlazer/releases> [44] | 無正式 GitHub release 的查核來源。 |

## MOFid / MOFkey

- **ID／類型：** `mofid-mofkey`；MOF 結構辨識與化學資訊工具。[45] [49]
- **必要註記：** MOFid／MOFkey 是開放標準方向的識別系統，但原始論文明示格式尚未收斂；不可呈現為 IUPAC、CCDC 或社群正式採納的最終標準。[45] [49]
- **展示範圍：** 可呈現 GPL-2.0 的 3D MOF CIF 分解、建構單元／拓撲與識別字串輸出。前端應醒目列出限制：目前不支援 1D／2D MOF；disorder、部分佔據、複雜溶劑或非框架離子可能令結果不準確或失敗；部分 rod-like metal nodes 的拓撲判定亦須個案驗證。[45] [47] [48] [49]
- **資料／維護註記：** ACS SI ZIP 含 CoRE MOF 2019-ASR 的 identifiers、重複資訊與多晶型家族資料，但未核實獨立資料授權，不能直接標成自由 ML 訓練集。正式 release 為 2022 v1.1.0，而主分支仍有較後推送，應分別顯示。[49] [50] [51] [52]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/snurr-group/mofid> [45] | 原始碼、功能與 README 更新。 |
| 授權正文 | <https://github.com/snurr-group/mofid/blob/master/LICENSE> [46] | GPL-2.0 程式碼授權。 |
| 一般官方文件 | <https://snurr-group.github.io/mofid/> [47] | 安裝、輸出與結構限制。 |
| 一般網頁工具 | <https://snurr-group.github.io/web-mofid/> [48] | CIF 本機瀏覽器分析入口與適用範圍。 |
| 原始論文（出版者） | <https://pubs.acs.org/doi/10.1021/acs.cgd.9b01050> [49] | 識別系統、限制與 SI 入口。 |
| 出版者 SI（PDF） | <https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_001.pdf> [50] | 演算法、驗證與資料庫統計。 |
| 出版者 SI（ZIP） | <https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_002.zip> [51] | CoRE MOF 2019-ASR identifiers；授權未確認。 |
| 程式碼 release／容器 | <https://github.com/snurr-group/mofid/releases/tag/v1.1.0> [52] | v1.1.0 Singularity release。 |

## CoRE MOF Tools

- **ID／類型：** `core-mof-tools`；CoRE MOF 的 Python 清理、標準化與驗證工作流程。[53] [54]
- **必要註記：** 此為工具而非獨立資料庫。其 CC BY 4.0 是工具程式碼授權，不能外推至可經工具存取的 CoRE、CSD 或其他資料；CSD 結構下載與 MOSAEC 需要授權 CSD 安裝與 Python API，且有多個選用外部相依項。[53] [55] [56]
- **展示範圍：** 可呈現 CIF preprocess／clean、結構驗證、描述子、資料庫查詢與部分預訓練性質預測等已核實工作流程。[53] [54]
- **版本註記：** Read the Docs 顯示 0.3.1、PyPI 為 0.3.5，GitHub 無 release；UI 應顯示所選取的具體套件版本與查閱日期，避免把文件版視為發行版。[54] [57] [61]
- **相關資料：** Zenodo 的 CoRE MOF 2024 v1.1 是**資料保存庫**且 metadata 為 open／CC BY 4.0；Matter Data S2 是**出版者 SI**，兩者均應與工具授權分開標示。[58] [59] [60]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools> [53] | 工具程式碼與 CoRE 介面定位。 |
| 一般官方文件 | <https://core-mof-tools.readthedocs.io/en/latest/> [54] | 功能與文件版本。 |
| 功能文件 | <https://core-mof-tools.readthedocs.io/en/latest/features.html> [55] | 清理、驗證與外部相依工作流程。 |
| 授權正文 | <https://raw.githubusercontent.com/Chung-Research-Group/CoRE-MOF-Tools/main/LICENSE> [56] | 工具程式碼 CC BY 4.0。 |
| 程式套件 release | <https://pypi.org/project/coremof-tools/> [57] | PyPI 正式套件版本。 |
| 原始／指定關聯論文（出版者） | <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3> [58] | 官方 repository 指定的資料庫／toolkit 引用。 |
| 資料保存庫 | <https://zenodo.org/records/15055758> [59] | CoRE MOF 2024 Dataset v1.1。 |
| 出版者 SI（Data S2） | <https://www.cell.com/cms/10.1016/j.matt.2025.102140/attachment/8852f410-9050-4a67-8725-869f15b11d1d/mmc4.zip> [60] | CR／NCR 細節與非-CoRE 結構清單。 |
| release 查核 | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools/releases> [61] | GitHub 無 releases 的查核來源。 |

## PACMAN-charge

- **ID／類型：** `pacman-charge`；以晶體圖卷積網路預測部分原子電荷的軟體。[62] [66]
- **必要註記：** 這是預測工具，不是資料庫。它的 MOF DDEC6／Bader／CM5／REPEAT 輸出是 ML 預測，不等於對新結構重新執行 DFT 電荷分析。[62] [66]
- **展示範圍：** 可呈現 MIT 授權與輸入 CIF、輸出部分電荷的 MOF 直接用途。UI 應呈現已核實限制：可用元素取決於訓練資料；Th-MOF 的 Bader 模型只有兩個訓練點；預設 `neutral=True` 會以 mean 方法平均分配多餘電荷以中性化系統。[62] [63]
- **版本／資料註記：** PyPI 新於 GitHub release，應分開顯示。Zenodo 連結由 README 提供，但記錄使用較早的 GCNCharge 名稱，頁面也提示有較新版；不可假定其內容與當前 PACMAN-charge 完全一致。訓練資料權利須逐一依上游來源核實。[64] [65] [68] [69]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/Chung-Research-Group/PACMAN-charge> [62] | 功能、模型限制與操作。 |
| 授權正文 | <https://raw.githubusercontent.com/Chung-Research-Group/PACMAN-charge/main/LICENSE> [63] | MIT 程式碼授權。 |
| 程式套件 release | <https://pypi.org/project/PACMAN-charge/> [64] | PyPI 版本。 |
| 程式碼 release | <https://github.com/Chung-Research-Group/PACMAN-charge/releases> [65] | GitHub release 版本。 |
| 原始論文書目中繼資料 | <https://api.crossref.org/works/10.1021/acs.jctc.4c00434> [66] | DOI／題名核對。 |
| 出版者 SI 保存庫 | <https://acs.figshare.com/articles/journal_contribution/PACMAN_A_Robust_Partial_Atomic_Charge_Predicter_for_Nanoporous_Materials_Based_on_Crystal_Graph_Convolution_Networks/25952558> [67] | 公開、CC BY-NC 4.0 的論文補充資料。 |
| 資料／模型保存庫 | <https://zenodo.org/records/10822403> [68] | GCNCharge archive；名稱與版本需保守對待。 |
| 維護證據 | <https://api.github.com/repos/Chung-Research-Group/PACMAN-charge> [69] | 推送與 repository 中繼資料。 |

## mofdscribe

- **ID／類型：** `mofdscribe`；MOF 機器學習 Python 工具庫。[70] [73]
- **必要註記：** 本項目是工具庫，不是單一資料庫。它可包裝結構集合、特徵、標籤、雜湊與中介資料，但每個資料集的範圍與權利必須查看各自紀錄。[70] [71] [73]
- **展示範圍：** 可呈現 MIT 授權、40+ 特徵化器、資料切分、去重、驗證與基準的 MOF ML 工作流；其原始論文是 *An Ecosystem for Digital Reticular Chemistry*。[70] [72] [73]
- **版本／資料註記：** 可安裝正式版和 GitHub release 為 0.0.8，文件則顯示 0.0.9-dev，最近可見提交為 2024；不要標為持續正式發行。Materials Cloud 吸附資料為 CC BY 4.0；MPContribs 頁本次未確認再利用授權；Zenodo CoRE 子集雖 CC BY 4.0，但明示「Not intended for direct use」。[71] [74] [75] [76] [77] [78]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/lamalab-org/mofdscribe> [70] | 程式碼與 MOF ML 定位。 |
| 一般官方文件 | <https://mofdscribe.readthedocs.io/en/latest/> [71] | 功能與 dev 文件版。 |
| 授權正文 | <https://raw.githubusercontent.com/lamalab-org/mofdscribe/main/LICENSE> [72] | MIT 程式碼授權。 |
| 原始論文（出版者） | <https://pubs.acs.org/doi/10.1021/acscentsci.2c01177> [73] | 原始論文、資料可用性與 SI 入口。 |
| 程式碼 release | <https://api.github.com/repos/lamalab-org/mofdscribe/releases/latest> [74] | v0.0.8 release 中繼資料。 |
| 維護證據 | <https://api.github.com/repos/lamalab-org/mofdscribe/commits?per_page=1> [75] | 最後可見提交。 |
| 資料保存庫 | <https://doi.org/10.24435/materialscloud:qt-cj> [76] | CC BY 4.0 吸附／製程資料。 |
| 資料服務／下載介面 | <https://doi.org/10.17188/mpcontribs/1883597> [77] | MOF Explorer backend；頁面再利用授權未確認。 |
| 專案資料保存庫 | <https://zenodo.org/records/7032358> [78] | CoRE 子集、雜湊與特徵；不宜直接使用之標示。 |

## MOFDiff

- **ID／類型：** `mofdiff`；MOF 粗粒化擴散生成與逆向設計研究工具。[79] [84]
- **必要註記：** 此為研究程式碼，無 GitHub release，最後可見主分支提交為 2024。生成 CG 結構不保證可實現；作者要求組裝為全原子結構並 UFF 鬆弛，且尚未以實驗驗證生成結構是否可達成。[79] [81] [82]
- **展示範圍：** 可呈現 MIT 授權、MOF CG 生成、全原子重建、UFF 鬆弛與以 CO2 工作容量為例的評估流程；不得表述為已實證的合成可行性預測器。[79] [80] [84]
- **資料／模型註記：** Zenodo 的前處理 BW-DB、預訓練模型與生成樣本是**資料與模型保存庫**，CC BY 4.0；公開預訓練模型限定 BW-DB，其他任意 MOF 資料集訓練只做過最少測試。ICLR ZIP 是**出版者／會議正式論文頁的補充資料**，只含 top-10 CIF，不能視為完整訓練資料庫。[84] [85] [86] [87]
- **論文識別註記：** ICLR 正式頁未顯示獨立出版者 DOI；本清冊僅將 arXiv DataCite DOI 用作預印本記錄，不把它描述為 ICLR 出版者 DOI。[84] [85]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/microsoft/MOFDiff> [79] | 研究程式碼、限制與資料／模型連結。 |
| 授權正文 | <https://github.com/microsoft/MOFDiff/blob/main/LICENSE> [80] | MIT 程式碼授權。 |
| 維護證據 | <https://github.com/microsoft/MOFDiff/commits/main/> [81] | 最後可見提交。 |
| release 查核 | <https://github.com/microsoft/MOFDiff/releases> [82] | GitHub 無 release 的查核來源。 |
| 一般官方專案頁 | <https://www.microsoft.com/en-us/research/publication/mofdiff-coarse-grained-diffusion-for-metal-organic-framework-design/> [83] | 作者機構專案定位。 |
| 正式會議論文 | <https://proceedings.iclr.cc/paper_files/paper/2024/hash/47547ee84e3fbbcbbbbad7c1fd9a973b-Abstract-Conference.html> [84] | ICLR 正式頁與補充資料入口。 |
| 預印本紀錄 | <https://arxiv.org/abs/2310.10732> [85] | arXiv／DataCite DOI 識別。 |
| 資料與模型保存庫 | <https://zenodo.org/records/10806179> [86] | BW-DB、預訓練模型與生成樣本。 |
| 上游資料保存庫 | <https://archive.materialscloud.org/record/2018.0016/v3> [87] | 原始 BW-DB 下載來源。 |

## DAC-SIM

- **ID／類型：** `dac-sim`；以 MACE-DAC 為基礎的 MOF 直接空氣捕捉分子模擬工具。[88] [90] [92]
- **必要註記：** MIT 授權僅明確覆蓋程式碼；GoldDAC 資料檔與 MACE-DAC-1 模型檔未見獨立授權，不能假定與程式碼有相同再散布或商用權利。[88] [89] [93] [94]
- **展示範圍：** 可呈現 CO2／H2O DAC 的 Widom insertion、MD 與幾何最佳化，及其對 MOF 的直接用途。已核實驗證範圍是 MOF 中 CO2／H2O；不要延伸為其他氣體、所有多孔材料或超出訓練分布組成均同等適用。[90] [92]
- **資料／維護註記：** GoldDAC 是**一般專案資料目錄**內的 ASE-compatible XYZ 檔，包含能量與力標籤，明確設計為 MLFF fine-tuning，但無獨立授權；MACE-DAC-1 同為一般專案內模型檔。正式 release／PyPI 為 0.0.3，主分支有較後提交，沒有 SLA 或未來版本承諾。[93] [94] [95] [96] [97]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/hspark1212/DAC-SIM> [88] | 程式、資產與使用入口。 |
| 授權正文 | <https://github.com/hspark1212/DAC-SIM/blob/main/LICENSE> [89] | MIT 程式碼授權。 |
| 一般官方文件 | <https://hspark1212.github.io/DAC-SIM/0_introduction/introduction.html> [90] | 工具定位與 MOF 分子模擬範圍。 |
| 一般官方文件（Widom） | <https://hspark1212.github.io/DAC-SIM/1_molecular_simulation/widom_insertion.html> [91] | Henry 常數、交互作用能與吸附熱工作流。 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1016/j.matt.2025.102203> [92] | DAC-SIM／MACE-DAC 的方法與 MOF 篩選。 |
| 一般專案資料目錄 | <https://github.com/hspark1212/DAC-SIM/blob/main/assets/GoldDAC/README.md> [93] | GoldDAC 切分與資料欄位；獨立授權未確認。 |
| 一般專案模型目錄 | <https://github.com/hspark1212/DAC-SIM/blob/main/dac_sim/models/README.md> [94] | MACE-DAC-1 模型卡；獨立條款未確認。 |
| 維護證據 | <https://github.com/hspark1212/DAC-SIM/commits/main/> [95] | 最後可見提交。 |
| 程式碼 release | <https://api.github.com/repos/hspark1212/DAC-SIM/releases> [96] | v0.0.3 release 查核。 |
| 程式套件 release | <https://pypi.org/pypi/dac-sim/json> [97] | PyPI 版本中繼資料。 |
| 出版者 SI | <https://www.cell.com/cms/10.1016/j.matt.2025.102203/attachment/b7bcd583-b6ff-46cd-bc3b-450db116ec77/mmc1.pdf> [98] | Matter Document S1。 |

## CoRE MOF DB

- **ID／類型：** `core-mof-db`；計算就緒實驗 MOF 資料庫。[99] [100] [101]
- **必要註記：** 公開 CC BY 4.0 覆蓋的是 Zenodo 所稱的 2025 public SI subset，不等同完整 CoRE MOF DB。完整庫內 CSD modified／unmodified 結構取得條件不同，未修改 CIF 明確需要 CCDC license。[99] [100]
- **展示範圍：** 可呈現實驗報導 MOF CIF、CR／NCR、ASR／FSR／Ion 分類，以及已核實的孔隙、拓撲、開放金屬位、MOFid、RAC、PACMAN DDEC6、熱容、穩定性與 GEMC 疏水分類等欄位；不得宣稱有公開的合成條件資料或 REST API。[99] [100] [101]
- **資料品質註記：** 官方來源有不同版本／截點與計數：2024 全庫與 2025 Zenodo public SI 不能混用。ASR 與 FSR 會重疊，資料庫也含 NCR 與錯誤旗標；訓練或統計需固定版本、篩選規則與去重策略。[99] [100]
- **工具區分：** CoRE MOF Tools 是另行授權的工具庫；其公開程式碼不改變各資料檔與受限 CSD 結構的權利狀態。[103]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般官方資料庫網站 | <https://mof-db.pusan.ac.kr> [99] | 全庫分類、範圍與資料來源入口。 |
| 資料保存庫／版本化 public SI | <https://zenodo.org/records/15621349> [100] | 2025 公開 SI、CC BY 4.0、檔案與版本。 |
| 原始／關聯論文（出版者） | <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3> [101] | CoRE MOF DB 論文與補充資料入口。 |
| 書目中繼資料 | <https://api.crossref.org/works/10.1016/j.matt.2025.102140> [102] | DOI／題名核對。 |
| 一般專案程式庫 | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools> [103] | 工具庫；不是資料庫授權的替代證據。 |
| 授權法律文本 | <https://creativecommons.org/licenses/by/4.0/legalcode> [104] | Zenodo public SI 所標 CC BY 4.0 條款。 |

## Materials Project MOF Explorer

- **ID／類型：** `materials-project-mof-explorer`；基於 QMOF 的 MOF 資料庫檢索入口。[105] [109] [111]
- **必要註記：** 已核實的是底層 QMOF 資料 CC BY 4.0 與 QMOF 程式碼 MIT；未找到 MOF Explorer 網頁前端本身的官方開源程式庫，不可將整個前端表述為 MIT 開源。[105] [109] [110]
- **展示範圍：** 可呈現它是 QMOF 的互動檢索入口，支持結構、孔隙與 DFT 性質探索，以及對 MPContribs API／NOMAD／Globus 等下載位置的連結。結構含實驗與假想 MOF，也可能含較適合稱 coordination polymers 的項目；篩選須使用來源與 `synthesized` 標記。[105] [107] [108] [109]
- **性質／重跑註記：** PBE 能隙通常低估實驗值，HSE06 僅在部分 QMOF 結構可用，不能混為同一品質標籤。資料發布 CC BY 4.0 不等於重跑計算完全無限制：正式論文指出 VASP 是程式碼可得性的例外。[105] [110] [111]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般官方文件／入口說明 | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer> [105] | MOF Explorer 的用途與性質說明。 |
| 一般官方文件（引用） | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/how-to-cite> [106] | 建議引用與資料關係。 |
| 一般官方文件（下載） | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data> [107] | QMOF、MPContribs、NOMAD／Globus 存取說明。 |
| 一般官方文件（結構來源） | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/structure-details/structure-sources> [108] | 實驗／假想與結構來源界線。 |
| 資料保存庫 | <https://figshare.com/articles/dataset/QMOF_Database/13147324> [109] | 底層 QMOF CC BY 4.0 資料 release。 |
| 一般專案程式庫 | <https://github.com/Andrew-S-Rosen/QMOF> [110] | 底層 QMOF MIT 程式碼；非前端來源碼證據。 |
| 關聯論文（出版者） | <https://www.nature.com/articles/s41524-022-00796-6> [111] | 電子性質、ML 與資料探索論文。 |
| 計算資料保存庫 | <https://dx.doi.org/10.17172/NOMAD/2021.10.10-1> [112] | PBE VASP input/output 保存位置。 |
| 資料集 DOI 紀錄 | <https://doi.org/10.17188/mpcontribs/1883597> [113] | MOF Explorer backend 資料集紀錄。 |

## Crystallography Open Database (COD)

- **ID／類型：** `crystallography-open-database-cod`；開放晶體結構資料庫。[114] [119]
- **必要註記：** COD 收錄金屬有機化合物，但不是 MOF 專用或已標註資料庫；MOF 覆蓋率、MOF 子集定義，以及去溶劑／活化狀態均未確認。不能把它作為已標準化的 MOF 孔隙、吸附、性質或合成資料庫。[114] [115] [116]
- **展示範圍：** 可呈現 COD 資料及資料庫本身為 CC0 1.0、提供 CIF、部分 HKL／Fobs、單筆與批次下載、匿名 SVN、rsync、唯讀 MySQL、REST 與 OPTIMADE。這項 CC0 證據不延伸至網站／工具程式碼，後者的獨立軟體授權未確認。[114] [115] [117] [122]
- **資料品質／操作註記：** API 可能含 warnings、errors、retracted 等品質／狀態欄位，應先依 status、duplicate／optimal、座標與實驗條件篩選。HTTP 整庫封存可能落後每日更新；OPTIMADE 端點可用，但原核實結果記錄供應者儀表板曾出現 timeout／格式驗證問題，批量用法應實測、重試並保留快照。[115] [116] [118]
- **訓練用途：** 就 COD 資料與資料庫的 CC0 而言，可作 ML 訓練、衍生、再散布及商業使用；仍應致謝原始結構資料作者，且不能把非 MOF 專用的結構庫直接當作 MOF 性質標註集。[114] [122]

### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般官方資料庫網站 | <https://www.crystallography.net/cod/> [114] | CC0、資料庫範圍、維護狀態與單筆資料入口。 |
| 一般官方取得指南 | <https://wiki.crystallography.net/howtoobtaincod/> [115] | SVN、rsync、快照與批次取得的界線。 |
| 一般官方查詢指南 | <https://wiki.crystallography.net/howtoquerycod/> [116] | 網頁、SQL／REST 與欄位／品質資訊。 |
| 一般官方搜尋頁 | <https://www.crystallography.net/cod/search.php> [117] | 檢索方式與子結構搜尋範圍。 |
| 官方結構 API | <https://www.crystallography.net/cod/optimade/v1/info> [118] | OPTIMADE `/info`、端點與版本。 |
| 原始論文（出版者） | <https://journals.iucr.org/j/issues/2009/04/00/kk5039/> [119] | COD 原始論文與 DOI。 |
| 平台論文（出版者） | <https://academic.oup.com/nar/article/40/D1/D420/2903497> [120] | 資料取得與平台描述。 |
| 驗證論文（出版者） | <https://journals.iucr.org/j/issues/2021/02/00/yr5065/> [121] | COD 驗證與品質脈絡。 |
| 授權法律文本 | <https://creativecommons.org/publicdomain/zero/1.0/> [122] | CC0 1.0 資料／資料庫權利說明。 |

---

# 三、排除

**無。** 題示的 15 筆原始核實結果只包含 `verified` 或 `verified_with_caveat`；本清冊不因其為軟體、非資料庫、維護有限或有已明示限制而額外杜撰「排除」結論。若日後某一來源的主要授權、可用性或資料完整性被新的核實結果否定，應重新審閱並以新證據更新此區。

---

# References

1. snurr-group/gRASPA，一般專案程式庫。<https://github.com/snurr-group/gRASPA>
2. gRASPA LICENSE，授權正文。<https://raw.githubusercontent.com/snurr-group/gRASPA/main/LICENSE>
3. gRASPA Releases，程式碼 release。<https://github.com/snurr-group/gRASPA/releases>
4. ACS JCTC，gRASPA 原始論文 DOI。<https://doi.org/10.1021/acs.jctc.4c01058>
5. OSTI，gRASPA 軟體紀錄。<https://www.osti.gov/biblio/code-172693>
6. gRASPA MkDocs，一般專案文件。<https://zhaoli2042.github.io/gRASPA-mkdoc/>
7. QEF/q-e，正式 GitLab 專案庫。<https://gitlab.com/QEF/q-e>
8. Quantum ESPRESSO qe-7.6，程式碼 release。<https://gitlab.com/QEF/q-e/-/releases/qe-7.6>
9. QUANTUM ESPRESSO 原始論文，IOP 出版者頁。<https://iopscience.iop.org/article/10.1088/0953-8984/21/39/395502>
10. Quantum ESPRESSO INPUT_PW，一般官方文件。<https://www.quantum-espresso.org/Doc/INPUT_PW.html>
11. QEF/q-e，GitHub 鏡像。<https://github.com/QEF/q-e>
12. M-MOF-74 Quantum ESPRESSO 實例，出版者頁。<https://www.sciencedirect.com/science/article/pii/S000926141731045X>
13. QMOF Database，Figshare 資料保存庫。<https://figshare.com/articles/dataset/QMOF_Database/13147324>
14. QMOF Figshare API，中繼資料。<https://api.figshare.com/v2/articles/13147324>
15. Andrew-S-Rosen/QMOF，一般專案程式庫。<https://github.com/Andrew-S-Rosen/QMOF>
16. QMOF LICENSE，授權正文。<https://github.com/Andrew-S-Rosen/QMOF/blob/main/LICENSE>
17. QMOF 原始論文，Matter 出版者頁。<https://www.sciencedirect.com/science/article/pii/S2590238521000709>
18. Materials Project，Downloading the Data 文件。<https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data>
19. MPContribs QMOF，資料服務／API 鏡像。<https://contribs.materialsproject.org/projects/qmof>
20. QMOF Database - PBE，NOMAD 計算資料保存庫。<https://doi.org/10.17172/NOMAD/2021.10.10-1>
21. RASPA，iRASPA 官方網站。<https://iraspa.org/raspa/>
22. iRASPA/RASPA2，一般專案程式庫。<https://github.com/iRASPA/RASPA2>
23. RASPA2 COPYING，授權正文。<https://raw.githubusercontent.com/iRASPA/RASPA2/master/COPYING>
24. RASPA2 commits，維護證據。<https://github.com/iRASPA/RASPA2/commits/master/>
25. RASPA2 latest release API，程式碼 release 中繼資料。<https://api.github.com/repos/iRASPA/RASPA2/releases/latest>
26. RASPA 原始論文，出版者頁。<https://www.tandfonline.com/doi/full/10.1080/08927022.2015.1010082>
27. iRASPA 官方網站。<https://iraspa.org/>
28. iRASPA 視覺化論文，出版者頁。<https://www.tandfonline.com/doi/full/10.1080/08927022.2018.1426855>
29. Zeo++ 官方網站。<https://www.zeoplusplus.org/>
30. Zeo++ 官方文件。<https://www.zeoplusplus.org/docs.html>
31. lsmo-epfl/zeopp-lsmo，一般專案程式庫。<https://github.com/lsmo-epfl/zeopp-lsmo>
32. Zeo++-LSMO LICENSE，授權正文。<https://github.com/lsmo-epfl/zeopp-lsmo/blob/master/LICENSE>
33. Zeo++-LSMO v0.4.7，程式碼 release。<https://github.com/lsmo-epfl/zeopp-lsmo/releases/tag/v0.4.7>
34. Zeo++-LSMO GitHub API，維護中繼資料。<https://api.github.com/repos/lsmo-epfl/zeopp-lsmo>
35. Zeo++ 原始論文，出版者頁。<https://www.sciencedirect.com/science/article/abs/pii/S1387181111003738>
36. Zeo++ Crossref，中繼資料。<https://api.crossref.org/works/10.1016%2Fj.micromeso.2011.08.020>
37. SarkisovGitHub/PoreBlazer，一般專案程式庫。<https://github.com/SarkisovGitHub/PoreBlazer>
38. PoreBlazer README，授權宣告。<https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/README.md>
39. PoreBlazer commits，維護證據。<https://github.com/SarkisovGitHub/PoreBlazer/commits/main>
40. PoreBlazer data/README，一般專案資料目錄。<https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/data/README.txt>
41. PoreBlazer 原始論文，出版者 DOI。<https://doi.org/10.1080/08927022.2011.592832>
42. PoreBlazer v4.0 方法論文，出版者 DOI。<https://doi.org/10.1021/acs.chemmater.0c03575>
43. PoreBlazer v4.0 出版者 SI 保存庫。<https://acs.figshare.com/articles/journal_contribution/Materials_Informatics_with_PoreBlazer_v4_0_and_the_CSD_MOF_Database/13296133>
44. PoreBlazer releases API。<https://api.github.com/repos/SarkisovGitHub/PoreBlazer/releases>
45. snurr-group/mofid，一般專案程式庫。<https://github.com/snurr-group/mofid>
46. MOFid LICENSE，授權正文。<https://github.com/snurr-group/mofid/blob/master/LICENSE>
47. MOFid 官方文件。<https://snurr-group.github.io/mofid/>
48. Web MOFid，一般網頁工具。<https://snurr-group.github.io/web-mofid/>
49. MOFid/MOFkey 原始論文，ACS 出版者頁。<https://pubs.acs.org/doi/10.1021/acs.cgd.9b01050>
50. MOFid/MOFkey 出版者 SI PDF。<https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_001.pdf>
51. MOFid/MOFkey 出版者 SI ZIP。<https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_002.zip>
52. MOFid v1.1.0，程式碼 release／容器。<https://github.com/snurr-group/mofid/releases/tag/v1.1.0>
53. Chung-Research-Group/CoRE-MOF-Tools，一般專案程式庫。<https://github.com/Chung-Research-Group/CoRE-MOF-Tools>
54. CoRE MOF Tools 一般官方文件。<https://core-mof-tools.readthedocs.io/en/latest/>
55. CoRE MOF Tools 功能文件。<https://core-mof-tools.readthedocs.io/en/latest/features.html>
56. CoRE MOF Tools LICENSE，授權正文。<https://raw.githubusercontent.com/Chung-Research-Group/CoRE-MOF-Tools/main/LICENSE>
57. coremof-tools，PyPI 程式套
件 release。<https://pypi.org/project/coremof-tools/>
58. CoRE MOF DB 關聯論文，Matter 出版者頁。<https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3>
59. CoRE MOF 2024 Dataset v1.1，Zenodo 資料保存庫。<https://zenodo.org/records/15055758>
60. Matter Data S2，出版者 SI。<https://www.cell.com/cms/10.1016/j.matt.2025.102140/attachment/8852f410-9050-4a67-8725-869f15b11d1d/mmc4.zip>
61. CoRE-MOF-Tools Releases，release 查核。<https://github.com/Chung-Research-Group/CoRE-MOF-Tools/releases>
62. Chung-Research-Group/PACMAN-charge，一般專案程式庫。<https://github.com/Chung-Research-Group/PACMAN-charge>
63. PACMAN-charge LICENSE，授權正文。<https://raw.githubusercontent.com/Chung-Research-Group/PACMAN-charge/main/LICENSE>
64. PACMAN-charge，PyPI 程式套件 release。<https://pypi.org/project/PACMAN-charge/>
65. PACMAN-charge Releases，程式碼 release。<https://github.com/Chung-Research-Group/PACMAN-charge/releases>
66. PACMAN 原始論文 Crossref，中繼資料。<https://api.crossref.org/works/10.1021/acs.jctc.4c00434>
67. PACMAN 出版者 SI 保存庫。<https://acs.figshare.com/articles/journal_contribution/PACMAN_A_Robust_Partial_Atomic_Charge_Predicter_for_Nanoporous_Materials_Based_on_Crystal_Graph_Convolution_Networks/25952558>
68. PACMAN／GCNCharge，Zenodo 資料／模型保存庫。<https://zenodo.org/records/10822403>
69. PACMAN-charge GitHub API，維護證據。<https://api.github.com/repos/Chung-Research-Group/PACMAN-charge>
70. lamalab-org/mofdscribe，一般專案程式庫。<https://github.com/lamalab-org/mofdscribe>
71. mofdscribe，一般官方文件。<https://mofdscribe.readthedocs.io/en/latest/>
72. mofdscribe LICENSE，授權正文。<https://raw.githubusercontent.com/lamalab-org/mofdscribe/main/LICENSE>
73. mofdscribe 原始論文，ACS 出版者頁。<https://pubs.acs.org/doi/10.1021/acscentsci.2c01177>
74. mofdscribe latest release API，程式碼 release。<https://api.github.com/repos/lamalab-org/mofdscribe/releases/latest>
75. mofdscribe commits API，維護證據。<https://api.github.com/repos/lamalab-org/mofdscribe/commits?per_page=1>
76. Gas adsorption and process performance data for MOFs，Materials Cloud 資料保存庫。<https://doi.org/10.24435/materialscloud:qt-cj>
77. MOF Explorer backend，MPContribs 資料服務／下載介面。<https://doi.org/10.17188/mpcontribs/1883597>
78. mofdscribe data - CoRE，Zenodo 專案資料保存庫。<https://zenodo.org/records/7032358>
79. microsoft/MOFDiff，一般專案程式庫。<https://github.com/microsoft/MOFDiff>
80. MOFDiff LICENSE，授權正文。<https://github.com/microsoft/MOFDiff/blob/main/LICENSE>
81. MOFDiff commits，維護證據。<https://github.com/microsoft/MOFDiff/commits/main/>
82. MOFDiff Releases，release 查核。<https://github.com/microsoft/MOFDiff/releases>
83. Microsoft Research，MOFDiff 一般官方專案頁。<https://www.microsoft.com/en-us/research/publication/mofdiff-coarse-grained-diffusion-for-metal-organic-framework-design/>
84. MOFDiff，ICLR 正式會議論文頁。<https://proceedings.iclr.cc/paper_files/paper/2024/hash/47547ee84e3fbbcbbbbad7c1fd9a973b-Abstract-Conference.html>
85. MOFDiff，arXiv 預印本紀錄。<https://arxiv.org/abs/2310.10732>
86. MOFDiff data and pretrained models，Zenodo 資料與模型保存庫。<https://zenodo.org/records/10806179>
87. BW-DB，Materials Cloud 上游資料保存庫。<https://archive.materialscloud.org/record/2018.0016/v3>
88. hspark1212/DAC-SIM，一般專案程式庫。<https://github.com/hspark1212/DAC-SIM>
89. DAC-SIM LICENSE，授權正文。<https://github.com/hspark1212/DAC-SIM/blob/main/LICENSE>
90. DAC-SIM introduction，一般官方文件。<https://hspark1212.github.io/DAC-SIM/0_introduction/introduction.html>
91. DAC-SIM Widom insertion，一般官方文件。<https://hspark1212.github.io/DAC-SIM/1_molecular_simulation/widom_insertion.html>
92. DAC-SIM 原始論文，Matter 出版者 DOI。<https://doi.org/10.1016/j.matt.2025.102203>
93. GoldDAC README，一般專案資料目錄。<https://github.com/hspark1212/DAC-SIM/blob/main/assets/GoldDAC/README.md>
94. MACE-DAC-1 README，一般專案模型目錄。<https://github.com/hspark1212/DAC-SIM/blob/main/dac_sim/models/README.md>
95. DAC-SIM commits，維護證據。<https://github.com/hspark1212/DAC-SIM/commits/main/>
96. DAC-SIM releases API，程式碼 release。<https://api.github.com/repos/hspark1212/DAC-SIM/releases>
97. dac-sim PyPI JSON，程式套件 release。<https://pypi.org/pypi/dac-sim/json>
98. DAC-SIM Matter Document S1，出版者 SI。<https://www.cell.com/cms/10.1016/j.matt.2025.102203/attachment/b7bcd583-b6ff-46cd-bc3b-450db116ec77/mmc1.pdf>
99. CoRE MOF DB，一般官方資料庫網站。<https://mof-db.pusan.ac.kr>
100. CoRE MOF 2025 Dataset，Zenodo 資料保存庫／版本化 public SI。<https://zenodo.org/records/15621349>
101. CoRE MOF DB 原始／關聯論文，Matter 出版者頁。<https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3>
102. CoRE MOF DB Crossref，書目中繼資料。<https://api.crossref.org/works/10.1016/j.matt.2025.102140>
103. CoRE-MOF-Tools，一般專案程式庫。<https://github.com/Chung-Research-Group/CoRE-MOF-Tools>
104. CC BY 4.0 法律文本。<https://creativecommons.org/licenses/by/4.0/legalcode>
105. Materials Project MOF Explorer，一般官方文件／入口說明。<https://docs.materialsproject.org/apps/explorer-apps/mof-explorer>
106. Materials Project MOF Explorer，引用文件。<https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/how-to-cite>
107. Materials Project MOF Explorer，下載文件。<https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data>
108. Materials Project MOF Explorer，結構來源文件。<https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/structure-details/structure-sources>
109. QMOF Database，Figshare 資料保存庫。<https://figshare.com/articles/dataset/QMOF_Database/13147324>
110. Andrew-S-Rosen/QMOF，一般專案程式庫。<https://github.com/Andrew-S-Rosen/QMOF>
111. MOF Explorer 關聯論文，Nature 出版者頁。<https://www.nature.com/articles/s41524-022-00796-6>
112. QMOF Database - PBE，NOMAD 計算資料保存庫。<https://dx.doi.org/10.17172/NOMAD/2021.10.10-1>
113. MOF Explorer backend，MPContribs 資料集 DOI 紀錄。<https://doi.org/10.17188/mpcontribs/1883597>
114. Crystallography Open Database，一般官方資料庫網站。<https://www.crystallography.net/cod/>
115. COD，官方取得指南。<https://wiki.crystallography.net/howtoobtaincod/>
116. COD，官方查詢指南。<https://wiki.crystallography.net/howtoquerycod/>
117. COD，一般官方搜尋頁。<https://www.crystallography.net/cod/search.php>
118. COD OPTIMADE API，官方結構 API。<https://www.crystallography.net/cod/optimade/v1/info>
119. COD 原始論文，IUCr 出版者頁。<https://journals.iucr.org/j/issues/2009/04/00/kk5039/>
120. COD 平台論文，OUP 出版者頁。<https://academic.oup.com/nar/article/40/D1/D420/2903497>
121. COD 驗證論文，IUCr 出版者頁。<https://journals.iucr.org/j/issues/2021/02/00/yr5065/>
122. CC0 1.0 法律文本。<https://creativecommons.org/publicdomain/zero/1.0/>
