# MOF 開源專案資訊網設計提案 (Design Brainstorming)

我們為「MOF Open Source Hub」規劃了三種截然不同的視覺風格與設計哲學，旨在為化學、材料科學及環境工程領域的研究人員提供一個兼具專業性、啟發性與高質感的數位平台。

<response>
<text>
## 方案一：網格實驗室 (The Reticular Grid)

### 設計運動 (Design Movement)
**瑞士平面設計 (Swiss Design / International Typographic Style)** 融合現代數位網格系統。將金屬有機框架 (MOFs) 的「孔隙與框架」物理特性，具象化為網站的結構骨架。

### 核心原則 (Core Principles)
1. **結構透明性**：將網格線條顯性化，模擬 MOF 晶體的拓撲骨架。
2. **絕對的秩序感**：利用嚴謹的對齊與比例，呈現學術研究的嚴謹與精確。
3. **資訊高密度**：以模組化卡片呈現大量開源專案的技術參數，不顯擁擠。
4. **無襯線現代感**：摒棄多餘裝飾，專注於材料結構本身的幾何美學。

### 色彩哲學 (Color Philosophy)
以**深碳灰 (Carbon, #1E2022)** 與**純白 (Pure White)** 作為基調，搭配**高亮霓虹綠 (Neon Catalyst, #10B981)** 代表綠色化學與催化活性，以及**深邃藍 (Quantum Blue, #2563EB)** 代表計算科學。高對比的色彩搭配，能瞬間聚焦研究者的視線。

### 版面範式 (Layout Paradigm)
採用**不對稱的模組化網格 (Asymmetric Modular Grid)**。打破傳統對稱的三欄佈局，使用寬窄不一的縱向網格線分割畫面，模擬 t-MOFs（拓撲結構金屬有機框架）的不規則孔隙結構。

### 特色視覺元素 (Signature Elements)
- **顯性網格線 (Exposed Gridlines)**：網頁區塊間以 1px 的細實線分割，並在交叉點加上微小的「金屬節點」裝飾。
- **晶體拓撲背景 (Reticular Background)**：使用動態 SVG 繪製微弱的拓撲網格，隨滑鼠移動產生輕微的透視形變。

### 互動哲學 (Interaction Philosophy)
強調**物理感與即時反饋**。卡片在 Hover 時，其邊框會從灰色變為高亮霓虹綠，並伴隨輕微的「卡入 (Snap-in)」位移，模擬分子配體與金屬節點結合的過程。

### 動態效果 (Animation)
採用 snappy (快速且具物理感) 的過渡效果。展開抽屜 (Drawers) 或模組時，動畫時間控制在 **180ms** 內，使用自定義的 `cubic-bezier(0.23, 1, 0.32, 1)`，絕不拖泥帶水。

### 字型系統 (Typography System)
- **大標題**：`Space Grotesk` (700 Weight)，展現強烈的幾何感與科技感。
- **內文與數據**：`JetBrains Mono` 或 `DM Mono`，強化代碼、開源與計算科學的學術氛圍。
</text>
<probability>0.08</probability>
</response>

<response>
<text>
## 方案二：永續催化劑 (Sustainable Catalyst)

### 設計運動 (Design Movement)
**溫暖極簡主義 (Warm Minimalism)** 結合**生態科技美學 (Eco-Tech)**。專為專注於碳捕捉 (CCUS)、環境永續與綠色氫能的研究者設計，傳遞人文關懷與地球永續的溫度。

### 核心原則 (Core Principles)
1. **自然有機感**：使用柔和的圓角與自然的陰影，打破化學冰冷的刻板印象。
2. **空氣感留白**：寬闊的間距與呼吸感，呼應 MOF 材料「超高比表面積」與「多孔捕捉」的物理特性。
3. **直覺式對比**：將複雜的開源工具分為「捕捉」與「轉換」兩大直覺維度。

### 色彩哲學 (Color Philosophy)
底色採用**象牙暖白 (Ivory, #FDFBF7)**，主色為深邃的**森林綠 (Forest Green, #1B4332)** 代表碳移除與永續，點綴以溫暖的**陽極銅 (Copper Catalyst, #D97706)** 代表金屬配位節點。整體色調溫和、護眼，適合長時間閱讀文獻。

### 版面範式 (Layout Paradigm)
採用**流動性非對稱單欄與雙欄佈局 (Fluid Asymmetric Layout)**。內容區塊像多孔材料中的氣流一樣自然流動，避免生硬的硬邊界，利用大面積留白與柔和的卡片陰影區分層級。

### 特色視覺元素 (Signature Elements)
- **多孔有機遮罩 (Porous Organic Mask)**：網頁插圖與圖片採用微圓角的有機形狀（Organic Shapes）進行遮罩裁切。
- **溫暖微影 (Soft Depth)**：卡片使用超大半徑、極低飽和度的擴散陰影，營造懸浮於空氣中的輕盈感。

### 互動哲學 (Interaction Philosophy)
強調**流暢與優雅**。滑鼠懸停時，按鈕與卡片會產生溫和的色彩漸變與微幅的上浮，帶有液體流動般的平滑感。

### 動態效果 (Animation)
過渡動畫時間稍長（**250ms - 350ms**），使用平滑的 `cubic-bezier(0.4, 0, 0.2, 1)`。卡片入場時採用微幅的位移與漸顯，營造氣體被緩慢吸附捕捉的視覺意象。

### 字型系統 (Typography System)
- **大標題**：`Playfair Display` 或 `Lora` (襯線體)，展現經典的學術厚重感與人文氣質。
- **內文**：`Plus Jakarta Sans` (無襯線體)，提供極佳的屏幕閱讀體驗。
</text>
<probability>0.06</probability>
</response>

<response>
<text>
## 方案三：量子光電 (Quantum Photonic)

### 設計運動 (Design Movement)
**暗黑未來主義 (Dark Cyberpunk / Sci-Fi Academic)**。專為光電化學產氫/產氧、人工智慧驅動材料設計等前沿交叉學科設計，展現極致的科技感與未來感。

### 核心原則 (Core Principles)
1. **沉浸式暗黑**：深色背景減少屏幕藍光，讓發光元件與數據圖表更加奪目。
2. **光電感應**：利用漸變光暈與發光邊框，模擬光催化與電催化中的「激子躍遷」與「電子轉移」。
3. **玻璃擬態**：利用半透明材質與模糊背景，呈現多孔材料的層次感與深度。

### 色彩哲學 (Color Philosophy)
以**深邃太空藍 (Deep Space, #0B0F19)** 為底色，搭配**太陽金 (Solar Gold, #F59E0B)** 代表光電催化，以及**氫氣藍 (Hydrogen Glow, #06B6D4)** 代表清潔能源。

### 版面範式 (Layout Paradigm)
採用**多維重疊版面 (Multi-dimensional Overlapping Layout)**。卡片與卡片之間有局部的重疊，利用 `backdrop-blur` 玻璃效果，展現出如同 MOF 晶體晶格堆疊的空間立體感。

### 特色視覺元素 (Signature Elements)
- **玻璃卡片 (Glassmorphic Cards)**：半透明背景配合 1px 的發光漸變微邊框。
- **動態光暈 (Glow Aura)**：在重要區塊後方放置緩慢漂浮、旋轉的漸變光暈，模擬激發態的能量分佈。

### 互動哲學 (Interaction Philosophy)
強調**能量激發**。點擊按鈕或卡片時，會產生向外擴散的微弱光漣漪 (Glow Ripple)，Hover 時卡片內部的發光強度增強。

### 動態效果 (Animation)
動態效果極具科技感，結合了微縮放與光暈變化。動畫時間控制在 **200ms - 300ms**，使用 `cubic-bezier(0.25, 1, 0.5, 1)`。

### 字型系統 (Typography System)
- **大標題**：`Syne` 或 `Clash Display`，極具未來感的寬體無襯線字型。
- **內文**：`Satoshi` 或 `Inter`，確保高科技感下的可讀性。
</text>
<probability>0.07</probability>
</response>

# 最終選擇：方案一：網格實驗室 (The Reticular Grid)

我們選擇了**方案一：網格實驗室 (The Reticular Grid)** 作為本專案的設計主軸。

### 選擇理由
1. **物理呼應**：MOF（金屬有機框架）本質上就是一種高度有序的結晶多孔「網格」結構。使用「網格實驗室」設計風格，能將材料的物理本質（金屬節點與有機配體的配位）與網頁的視覺骨架完美融合，達到「形神合一」的境地。
2. **學術與開源的交彙**：高對比的碳灰背景、顯性網格與等寬字型 (Monospace) 的搭配，既符合「開源軟體/代碼」的科技感，又保留了「學術資料庫」的嚴謹性，非常契合江博士（大學教授、專注於 AI 輔助 t-MOFs 設計）的專業背景。
3. **高效的資訊呈現**：顯性網格與模組化佈局極度適合展示多維度的開源專案參數（如：解決問題、適用領域、代碼語言、GitHub 星數等），便於研究人員快速篩選與比較。

接下來，我們將嚴格遵守「網格實驗室」的設計規範，建立本專案的 CSS 樣式、組件與頁面。
