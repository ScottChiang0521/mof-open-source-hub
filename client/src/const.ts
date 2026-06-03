export interface MOFProject {
  id: string;
  name: string;
  stars?: number;
  author: string;
  githubUrl?: string;
  webUrl?: string;
  description: string;
  capabilities: string[];
  languages: string[];
  category: 'gas' | 'carbon' | 'photo' | 'structure' | 'ml' | 'md' | 'edu';
  categoryLabel: string;
  citations: { text: string; doi: string }[];
  problemsSolved: string[];
  keyFeatures: string[];
}

export const CATEGORY_LABELS = {
  gas: '氣體捕捉與吸附 (Gas Adsorption)',
  carbon: '碳捕捉與直吸 (Carbon Capture / DAC)',
  photo: '光電催化與產氫 (Photo/Electrocatalysis)',
  structure: '結構分析與設計 (Structure Analysis)',
  ml: '機器學習與性質預測 (Machine Learning)',
  md: '分子動力學與熱力學 (Molecular Dynamics)',
  edu: '教育、可視化與遊戲 (Education & Viz)',
};

export const MOF_PROJECTS: MOFProject[] = [
  {
    id: 'dac-sim',
    name: 'DAC-SIM',
    author: 'hspark1212',
    githubUrl: 'https://github.com/hspark1212/DAC-SIM',
    description: '專門用於模擬金屬有機框架 (MOFs) 中直接空氣捕捉 (DAC) 二氧化碳的分子模擬工具包。利用 Widom 插入方法與分子動力學，精確預估極低濃度下的 CO2 吸附行為。',
    capabilities: ['碳捕捉', '直接空氣捕捉 (DAC)', '氣體吸附'],
    languages: ['Python'],
    category: 'carbon',
    categoryLabel: CATEGORY_LABELS.carbon,
    citations: [
      { text: 'Computational Study of MOFs for Direct Air Capture', doi: '10.1021/acsami.5c05529' }
    ],
    problemsSolved: [
      '解決低濃度 (400 ppm) 二氧化碳在多孔材料中吸附能難以精確計算的問題。',
      '解決高通量篩選 DAC 專用 MOF 時，傳統 GCMC 模擬效率低下的痛點。'
    ],
    keyFeatures: [
      '基於 Widom 插入法的高效化學勢計算',
      '專為低濃度 CO2 捕捉設計的力場參數優化',
      '自動化吸附等溫線生成與熱力學性質分析'
    ]
  },
  {
    id: 'graspa',
    name: 'gRASPA',
    stars: 89,
    author: 'snurr-group',
    githubUrl: 'https://github.com/snurr-group/gRASPA',
    description: '基於 GPU 加速的分子蒙特卡洛 (Monte Carlo) 模擬代碼，繼承並大幅加速了經典 RASPA 的計算效率。專為多孔材料中的氣體吸附與擴散設計。',
    capabilities: ['氣體捕捉', '高通量吸附模擬', 'GPU 加速'],
    languages: ['C++', 'CUDA', 'SYCL'],
    category: 'gas',
    categoryLabel: CATEGORY_LABELS.gas,
    citations: [
      { text: 'GPU-accelerated Monte Carlo simulations of adsorption', doi: '10.1002/wcms.1159' }
    ],
    problemsSolved: [
      '解決傳統 CPU 蒙特卡洛模擬在面對大型 MOF 超級晶胞或複雜混合氣體吸附時，計算時間長達數天甚至數周的問題。',
      '提供跨平台 GPU 支持（CUDA 與 SYCL），降低高性能計算的硬體門檻。'
    ],
    keyFeatures: [
      'GPU 加速的巨正則系綜蒙特卡洛 (GCMC) 模擬',
      '支持多組分氣體競爭性吸附計算',
      '內置機器學習勢能 (MLP) 接口，實現超越經典力場的精度'
    ]
  },
  {
    id: 'mcccs-mn',
    name: 'MCCCS-MN',
    author: 'Siepmann Group',
    webUrl: 'http://siepmann.chem.umn.edu/software',
    description: '自由開源的蒙特卡洛分子模擬軟體，專門針對使用 TraPPE 力場進行 Gibbs 系綜中的相平衡與吸附平衡模擬進行了深度優化。',
    capabilities: ['氣體吸附', '相平衡', '混合物分離'],
    languages: ['Fortran', 'MPI', 'OpenMP'],
    category: 'gas',
    categoryLabel: CATEGORY_LABELS.gas,
    citations: [
      { text: 'Discovery of optimal zeolites for challenging separations', doi: '10.1038/ncomms6912' }
    ],
    problemsSolved: [
      '解決複雜、多支鏈分子或多凝聚相系統在多孔介質中相平衡極難收斂的計算瓶頸。',
      '提供超高效率的並行計算架構，適合部署於國家級超算中心進行百萬級篩選。'
    ],
    keyFeatures: [
      '針對 TraPPE 力場的極致優化',
      '高效的 Gibbs 系綜與巨正則系綜算法',
      '支持混合 MPI/OpenMP 並行，極佳的弱伸縮性'
    ]
  },
  {
    id: 'mofid',
    name: 'MOFid / MOFkey',
    stars: 69,
    author: 'snurr-group',
    githubUrl: 'https://github.com/snurr-group/mofid',
    webUrl: 'https://snurr-group.github.io/web-mofid/sbu.html',
    description: '用於快速識別、解構與分析金屬有機框架的化學信息學工具。能自動將任意 MOF 結構拆解為其基礎的金屬節點 (SBU)、有機配體 (Linker) 與底層拓撲網絡。',
    capabilities: ['結構解構', '拓撲識別', '化學信息學'],
    languages: ['C++', 'Python'],
    category: 'structure',
    categoryLabel: CATEGORY_LABELS.structure,
    citations: [
      { text: 'MOFid: A System for Rapid Identification and Analysis of MOFs', doi: '10.1021/acscentsci.7b00572' }
    ],
    problemsSolved: [
      '解決不同實驗室合成的相同 MOF 結構因命名混亂、原子坐標微調而無法在資料庫中自動去重和比對的痛點。',
      '自動提取拓撲符號（如 pcu, fof），省去人工查表分析的繁瑣步驟。'
    ],
    keyFeatures: [
      '自動化金屬與有機次級構建單元 (SBU) 提取',
      '生成唯一且具化學意義的 MOFid 與 MOFkey 字符串標識符',
      '提供網頁版互動式解構工具，無需安裝即可使用'
    ]
  },
  {
    id: 'mofdscribe',
    name: 'mofdscribe',
    stars: 53,
    author: 'lamalab-org',
    githubUrl: 'https://github.com/lamalab-org/mofdscribe',
    description: '專為網狀化學 (Reticular Chemistry) 設計的數位生態系統。提供豐富的材料描述符 (Descriptors) 計算、機器學習模型特徵化、基準測試與數據分割工具。',
    capabilities: ['機器學習', '特徵工程', '描述符計算'],
    languages: ['Python'],
    category: 'ml',
    categoryLabel: CATEGORY_LABELS.ml,
    citations: [
      { text: 'mofdscribe: An ecosystem for digital reticular chemistry', doi: '10.26434/chemrxiv-2025-8h5q7' }
    ],
    problemsSolved: [
      '解決化學家在對 MOF 進行機器學習時，需要手動編寫特徵提取代碼、數據集分割不科學（如晶體結構高度相似導致數據洩漏）的問題。',
      '統一代碼接口，使不同研究組的機器學習模型性能具備可比性。'
    ],
    keyFeatures: [
      '支持 RACs、Voxel-based、Chemistry-informed 等數十種 MOF 專屬描述符計算',
      '內置針對多孔材料優化的數據集劃分算法（避免結構重疊洩漏）',
      '與 PyTorch、Scikit-learn 等主流 ML 框架無縫集成'
    ]
  },
  {
    id: 'pacman-charge',
    name: 'PACMAN-charge',
    stars: 33,
    author: 'Chung-Research-Group',
    githubUrl: 'https://github.com/Chung-Research-Group/PACMAN-charge',
    description: '基於圖卷積網絡 (GCN) 的快速部分原子電荷估計模型。能在數毫秒內預測出媲美高精度 DFT (如 DDEC06) 計算品質的部分原子電荷。',
    capabilities: ['靜電電荷預測', '圖神經網路', 'DFT 替代'],
    languages: ['Python'],
    category: 'ml',
    categoryLabel: CATEGORY_LABELS.ml,
    citations: [
      { text: 'A fast and accurate model to estimate DFT quality partial atomic charges', doi: '10.1039/C8SC05340E' }
    ],
    problemsSolved: [
      '解決在進行氣體吸附模擬前，必須先運行極其耗時的 DFT 計算來獲取靜電電荷（如 DDEC）的效率瓶頸（DFT 通常需數小時，PACMAN 僅需毫秒）。'
    ],
    keyFeatures: [
      '基於晶體結構的圖卷積網絡 (GCN) 架構',
      '預測精度與 DDEC06 和 CM5 高度一致',
      '支持週期性邊界條件，適合大規模 MOF 篩選前處理'
    ]
  },
  {
    id: 'core-mof-tools',
    name: 'CoRE-MOF-Tools',
    stars: 36,
    author: 'Chung-Research-Group',
    githubUrl: 'https://github.com/Chung-Research-Group/CoRE-MOF-Tools',
    description: '用於創建與維護「計算就緒 (Computation-Ready)」實驗 MOF 資料庫的自動化工作流。自動解決溶劑分子殘留、原子部分佔有率與結構無序等實驗晶體結構的常見問題。',
    capabilities: ['資料庫清洗', '結構優化', '高通量篩選'],
    languages: ['Python'],
    category: 'structure',
    categoryLabel: CATEGORY_LABELS.structure,
    citations: [
      { text: 'Computation-Ready Experimental Metal-Organic Framework Database', doi: '10.1021/acs.jcim.4c00065' }
    ],
    problemsSolved: [
      '解決直接從 CSD（劍橋結構資料庫）下載的 MOF 晶體結構因含有未除盡的溶劑分子、無序原子而無法直接用於分子模擬的痛點。'
    ],
    keyFeatures: [
      '自動化溶劑分子識別與剝離算法',
      '自動檢測並標註開放金屬位點 (OMS)',
      '無序晶體結構的自動對稱性恢復與去重'
    ]
  },
  {
    id: 'quantum-espresso',
    name: 'Quantum ESPRESSO',
    author: 'QE Foundation',
    webUrl: 'https://www.quantum-espresso.org/',
    description: '經典的自由開源第一性原理電子結構計算與材料模擬套件。在 MOF 研究中，被廣泛用於計算能帶結構、態密度 (DOS) 以及光電催化過程中的過渡態能壘（如 HER、OER 產氫產氧反應）。',
    capabilities: ['第一性原理 (DFT)', '能帶與態密度', '光電化學催化模擬'],
    languages: ['Fortran', 'C'],
    category: 'photo',
    categoryLabel: CATEGORY_LABELS.photo,
    citations: [
      { text: 'QUANTUM ESPRESSO: a modular and open-source software project for quantum simulations', doi: '10.1021/jacs.8b04599' }
    ],
    problemsSolved: [
      '解決 MOF 作為光電催化劑時，其半導體性質（帶隙、費米能級、電荷轉移路徑）無法用經典力場描述的限制。',
      '精確模擬析氫反應 (HER) 與析氧反應 (OER) 在金屬活性位點上的自由能變化（如吉布斯自由能 ΔG*H）。'
    ],
    keyFeatures: [
      '基於平面波超勢方法的密度泛函理論 (DFT) 計算',
      '支持自旋極化計算，適合過渡金屬系 MOF 催化劑',
      '強大的過渡態搜索 (NEB) 模塊，模擬電催化反應路徑'
    ]
  },
  {
    id: 'mof-diff',
    name: 'MOFDiff',
    author: 'Microsoft Research',
    githubUrl: 'https://github.com/microsoft/MOFDiff',
    description: '微軟研究院開發的基於粗粒度擴散模型 (Coarse-grained Diffusion) 的 MOF 結構生成 AI 工具。能夠實現真正意義上的「逆向設計 (Inverse Design)」，根據目標吸附性能直接生成全新的晶體結構。',
    capabilities: ['逆向設計', '生成式 AI', '擴散模型'],
    languages: ['Python', 'PyTorch'],
    category: 'ml',
    categoryLabel: CATEGORY_LABELS.ml,
    citations: [
      { text: 'MOFDiff: Coarse-grained Diffusion for Metal-Organic Framework Generation', doi: '10.26434/chemrxiv-2025-8h5q7' }
    ],
    problemsSolved: [
      '解決傳統「先合成/模擬，再評估」的順向篩選模式效率低下、設計空間受限於已知拓撲結構的瓶頸。',
      '實現直接給定碳捕捉性能指標，由 AI 自動「畫出」最優 MOF 結構的突破。'
    ],
    keyFeatures: [
      '創新的粗粒度節點與配體擴散生成算法',
      '保證生成結構在物理與幾何上的合理性（避免原子重疊）',
      '支持端到端的三維晶格結構解構與重構'
    ]
  },
  {
    id: 'mof-lab',
    name: 'MOF Lab',
    author: 'Mausdin Group',
    webUrl: 'https://mausdin.github.io/MOFsite/index.html',
    description: '專為教育與快速研究設計的在線網頁平台。提供直觀的 MOF 三維結構可視化、孔徑分布計算以及基礎物理性質的即時估算。',
    capabilities: ['三維可視化', '在線計算', '學術教育'],
    languages: ['JavaScript', 'HTML'],
    category: 'edu',
    categoryLabel: CATEGORY_LABELS.edu,
    citations: [
      { text: 'Interactive Visualization of Porous Materials', doi: '10.1038/s41524-021-00522-8' }
    ],
    problemsSolved: [
      '解決非計算背景的實驗化學家或學生難以快速、直觀地查看 MOF 晶體內部三維孔道結構與連通性的痛點。',
      '免除安裝複雜專業軟體（如 VESTA）的麻煩，打開瀏覽器即可交互。'
    ],
    keyFeatures: [
      '基於 WebGL 的流暢三維晶體格點渲染',
      '即時孔徑分布 (PSD) 與幾何表面積估算',
      '豐富的經典 MOF 結構庫（如 UiO-66, HKUST-1, ZIF-8）預載入'
    ]
  }
];

export const APPLICATION_GUIDE = {
  gas: {
    title: '氣體捕捉與吸附設計',
    intro: '在氣體分離、天然氣儲存等領域，開源專案主要解決「多組分競爭吸附」與「高通量結構篩選」的問題。',
    workflow: [
      { step: '1. 結構獲取', tool: 'CoRE-MOF-Tools / MOFid', desc: '從實驗資料庫提取並清洗結構，確保計算就緒，並獲得其拓撲結構。' },
      { step: '2. 電荷預估', tool: 'PACMAN-charge', desc: '利用圖神經網絡，在數毫秒內快速估算結構的靜電電荷，為吸附模擬做準備。' },
      { step: '3. 分子模擬', tool: 'gRASPA / MCCCS-MN', desc: '運行巨正則蒙特卡洛 (GCMC) 模擬，獲得不同溫度與壓力下的單組分/多組分吸附等溫線。' },
      { step: '4. 過程模擬', tool: 'AIM (Adsorption Integrated Modules)', desc: '將分子尺度的吸附數據導入固定床模型，評估實際工業分離過程中的穿透曲線 (Breakthrough)。' }
    ]
  },
  carbon: {
    title: '碳捕捉與直吸 (CCUS / DAC)',
    intro: '碳捕捉（特別是直接空氣捕捉 DAC）要求在極低分壓 (400 ppm) 下具有超高的選擇性。開源專案專注於優化極低濃度下的吸附精準度與逆向材料設計。',
    workflow: [
      { step: '1. 目標定義', tool: '逆向性能指標', desc: '定義目標二氧化碳捕捉量、CO2/N2 選擇性與再生能耗。' },
      { step: '2. 結構生成', tool: 'MOFDiff', desc: '利用生成式 AI 擴散模型，根據目標性能逆向生成可能具備超高碳捕捉活性的全新 MOF 晶格。' },
      { step: '3. 專用模擬', tool: 'DAC-SIM', desc: '使用 Widom 插入法與分子動力學，專門模擬在 400 ppm 極低 CO2 濃度下的化學勢與吸附等溫線。' },
      { step: '4. 特徵評估', tool: 'mofdscribe', desc: '提取生成結構的幾何與化學描述符，通過機器學習模型二次驗證其結構穩定性與熱力學可行性。' }
    ]
  },
  photo: {
    title: '光電化學產氫/產氧 (Water Splitting)',
    intro: '光電催化（析氫 HER / 析氧 OER）涉及複雜的電子躍遷、激子傳輸與表面化學反應。這類問題無法用經典力場解決，必須依賴開源量子化學與第一性原理工具。',
    workflow: [
      { step: '1. 帶隙篩選', tool: 'Quantum ESPRESSO', desc: '計算 MOF 的能帶結構與態密度 (DOS)，評估其帶隙 (Band Gap) 是否與太陽光光譜匹配，費米能級是否跨越水的還原/氧化電位。' },
      { step: '2. 活性位點分析', tool: 'Quantum ESPRESSO (NEB)', desc: '在金屬節點 (SBU) 或修飾的單原子活性位點上，模擬水分子吸附、質子耦合電子轉移 (PCET) 過程。' },
      { step: '3. 自由能計算', tool: '第一性原理熱力學', desc: '計算各反應步驟（如 H* 吸附、OOH* 生成）的吉布斯自由能變化 (ΔG)，繪製反應路徑能壘圖，尋找過電位最低的 MOF 催化結構。' }
    ]
  }
};
