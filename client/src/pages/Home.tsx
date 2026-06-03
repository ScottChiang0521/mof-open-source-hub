import { useState, useMemo } from 'react';
import { 
  MOF_PROJECTS, 
  CATEGORY_LABELS, 
  APPLICATION_GUIDE, 
  MOFProject 
} from '../const';
import { 
  Atom, 
  Flame, 
  Cpu, 
  Binary, 
  Layers, 
  GraduationCap, 
  Github, 
  ExternalLink, 
  Search, 
  Database, 
  Filter, 
  ChevronRight, 
  CheckCircle2, 
  HelpCircle, 
  BookOpen, 
  ArrowRight,
  Sparkles,
  Zap,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Home() {
  const [searchTerm, setSearchString] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<MOFProject | null>(MOF_PROJECTS[0]);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<'gas' | 'carbon' | 'photo'>('gas');

  // 篩選專案
  const filteredProjects = useMemo(() => {
    return MOF_PROJECTS.filter(project => {
      const matchesSearch = 
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.capabilities.some(cap => cap.toLowerCase().includes(searchTerm.toLowerCase())) ||
        project.languages.some(lang => lang.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // 分類圖示對應
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'gas': return <Atom className="w-4 h-4 text-primary" />;
      case 'carbon': return <Flame className="w-4 h-4 text-orange-500" />;
      case 'photo': return <Zap className="w-4 h-4 text-yellow-500" />;
      case 'structure': return <Layers className="w-4 h-4 text-blue-500" />;
      case 'ml': return <Cpu className="w-4 h-4 text-purple-500" />;
      case 'md': return <Binary className="w-4 h-4 text-teal-500" />;
      case 'edu': return <GraduationCap className="w-4 h-4 text-emerald-500" />;
      default: return <Database className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* 裝飾性網格背景線 */}
      <div className="absolute inset-0 pointer-events-none opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* 頂部導航列 */}
      <header className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-md z-50">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-primary flex items-center justify-center text-primary-foreground font-bold">
              M
            </div>
            <span className="font-bold tracking-tight text-lg font-sans">MOF Open Source Hub</span>
            <span className="text-xs bg-muted text-muted-foreground px-2 py-0.5 border border-border">
              v1.0.0
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#projects" className="hover:text-primary transition-colors">開源專案庫</a>
            <a href="#workflows" className="hover:text-primary transition-colors">應用設計工作流</a>
            <a href="#about" className="hover:text-primary transition-colors">關於本站</a>
          </nav>
          <div className="flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="font-mono text-xs"
              onClick={() => window.open('https://github.com/topics/metal-organic-frameworks', '_blank')}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Topic
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-border bg-muted/30 relative">
        {/* 網格實驗室特色：金屬節點裝飾 */}
        <div className="metal-node left-12 top-12" />
        <div className="metal-node right-24 bottom-12" />
        
        <div className="container py-20 md:py-28 flex flex-col items-start relative z-10">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary font-mono px-3 py-1">
            <Sparkles className="w-3.5 h-3.5 mr-1.5 animate-pulse" />
            Reticular Chemistry × Open Source Software
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight max-w-4xl mb-6 font-sans leading-tight">
            探索金屬有機框架 <span className="text-primary underline decoration-2 underline-offset-8">MOFs</span> 的開源科學力量
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 font-mono font-light leading-relaxed">
            一個為化學工程、材料科學與環境工程研究人員量身打造的開源專案與工具導覽平台。專注於解決氣體捕捉、碳捕捉、以及光電催化產氫/產氧等關鍵淨零排放技術。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button size="lg" asChild className="font-mono">
              <a href="#projects">
                瀏覽開源專案庫
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="font-mono">
              <a href="#workflows">
                查看設計工作流
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 學術背景與應用痛點說明 (江博士的研究視野) */}
      <section id="about" className="border-b border-border bg-card">
        <div className="container py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-muted px-3 py-1 text-xs border border-border font-mono">
                <Info className="w-3.5 h-3.5 text-primary" />
                <span>學術背景與研究視野</span>
              </div>
              <h2 className="text-3xl font-bold font-sans">
                為什麼需要 AI 驅動與開源模擬？
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm">
                金屬有機框架 (MOFs) 具有近乎無限的拓撲結構組合與超高比表面積，是淨零碳排、綠色氫能與氣體分離的革命性材料。然而，傳統「試錯法」的實驗合成效率低下。
              </p>
              <p className="text-muted-foreground leading-relaxed text-sm">
                利用<strong>開源分子模擬</strong>、<strong>第一性原理 (DFT)</strong> 與<strong>機器學習生成模型</strong>，研究人員能在實驗前進行百萬級材料的高通量篩選與逆向設計，極大地加速實驗進程並降低研發成本。
              </p>
              <div className="border-l-2 border-primary pl-4 py-1">
                <p className="text-xs font-mono text-muted-foreground italic">
                  "機器學習輔助拓樸結構金屬有機架構物 (t-MOFs) 於淨零導向碳移除，以及人工智慧驅動多功能 MOFs 電催化劑設計，是邁向氫經濟與碳中和的智慧解決方案。"
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-border p-6 bg-muted/10 space-y-4">
                <div className="w-10 h-10 bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <Flame className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-bold font-sans text-base">碳捕捉 (CCUS / DAC)</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  解決在 400 ppm 極低濃度下，CO2 捕捉效率與 CO2/N2 選擇性預估的瓶頸，設計低再生能耗的固體吸附材料。
                </p>
              </div>

              <div className="border border-border p-6 bg-muted/10 space-y-4">
                <div className="w-10 h-10 bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-blue-500" />
                </div>
                <h3 className="font-bold font-sans text-base">光電化學產氫/產氧</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  利用第一性原理 (DFT) 預估 MOF 帶隙與費米能級，模擬 HER/OER 反應路徑與過電位，優化多功能電催化劑。
                </p>
              </div>

              <div className="border border-border p-6 bg-muted/10 space-y-4">
                <div className="w-10 h-10 bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="font-bold font-sans text-base">拓撲結構逆向設計</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  使用生成式 AI（如擴散模型）與機器學習描述符，突破傳統篩選限制，直接「逆向生成」最優性能的晶體結構。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 互動式開源專案庫 Section */}
      <section id="projects" className="border-b border-border flex-1">
        <div className="container py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-border">
            <div>
              <h2 className="text-3xl font-bold font-sans tracking-tight mb-2">MOF 開源專案與工具庫</h2>
              <p className="text-muted-foreground text-sm font-mono">
                精選目前活躍於學術界與開源社群的 MOF 專用模擬、設計與機器學習工具。
              </p>
            </div>
            <div className="mt-4 md:mt-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              {/* 搜尋框 */}
              <div className="relative w-full sm:w-64">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="搜尋名稱、功能或語言..."
                  className="pl-9 font-mono text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchString(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* 分類篩選 Tabs */}
          <div className="flex flex-wrap gap-2 mb-8">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('all')}
              className="font-mono text-xs"
            >
              全部專案 ({MOF_PROJECTS.length})
            </Button>
            {Object.entries(CATEGORY_LABELS).map(([key, label]) => {
              const count = MOF_PROJECTS.filter(p => p.category === key).length;
              return (
                <Button
                  key={key}
                  variant={selectedCategory === key ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setSelectedCategory(key)}
                  className="font-mono text-xs flex items-center space-x-1.5"
                >
                  {getCategoryIcon(key)}
                  <span>{label.split(' ')[0]} ({count})</span>
                </Button>
              );
            })}
          </div>

          {/* 專案展示主區域：左側列表，右側詳細資訊 */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* 左側：專案卡片列表 */}
            <div className="lg:col-span-5 space-y-4 max-h-[650px] overflow-y-auto pr-2 border-r border-border/50">
              {filteredProjects.length === 0 ? (
                <div className="border border-dashed border-border p-12 text-center">
                  <HelpCircle className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                  <p className="text-sm font-mono text-muted-foreground">找不到符合篩選條件的專案。</p>
                </div>
              ) : (
                filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className={`border p-5 cursor-pointer transition-all duration-150 relative group ${
                      selectedProject?.id === project.id
                        ? 'border-primary bg-primary/5'
                        : 'border-border hover:border-primary/50 hover:bg-muted/30'
                    }`}
                  >
                    {/* 金屬節點裝飾僅在選中時顯示 */}
                    {selectedProject?.id === project.id && (
                      <>
                        <div className="metal-node left-0 top-0" />
                        <div className="metal-node right-0 bottom-0" />
                      </>
                    )}
                    
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold font-sans text-lg group-hover:text-primary transition-colors">
                        {project.name}
                      </h3>
                      <div className="flex items-center space-x-2">
                        {project.stars !== undefined && (
                          <span className="text-xs bg-muted border border-border px-1.5 py-0.5 font-mono flex items-center">
                            ★ {project.stars}
                          </span>
                        )}
                        <span className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-1.5 py-0.5 font-mono">
                          {project.categoryLabel.split(' ')[0]}
                        </span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2 mb-3 font-mono">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.languages.map(lang => (
                        <Badge key={lang} variant="secondary" className="text-[10px] font-mono rounded-none">
                          {lang}
                        </Badge>
                      ))}
                      {project.capabilities.slice(0, 2).map(cap => (
                        <Badge key={cap} variant="outline" className="text-[10px] font-mono rounded-none border-border">
                          {cap}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* 右側：選中專案的詳細技術文檔面板 */}
            <div className="lg:col-span-7">
              {selectedProject ? (
                <div className="border border-border p-6 bg-muted/10 relative min-h-[500px] flex flex-col justify-between">
                  {/* 裝飾角 */}
                  <div className="metal-node left-0 top-0" />
                  <div className="metal-node right-0 top-0" />
                  <div className="metal-node left-0 bottom-0" />
                  <div className="metal-node right-0 bottom-0" />

                  <div className="space-y-6">
                    {/* 專案頭部 */}
                    <div className="border-b border-border pb-4">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-2">
                        <div>
                          <h3 className="text-2xl font-bold font-sans text-primary flex items-center">
                            {selectedProject.name}
                          </h3>
                          <p className="text-xs text-muted-foreground font-mono mt-1">
                            開發者/維護者：<span className="text-foreground">{selectedProject.author}</span>
                          </p>
                        </div>
                        <div className="flex gap-2">
                          {selectedProject.githubUrl && (
                            <Button size="sm" variant="outline" asChild className="font-mono text-xs">
                              <a href={selectedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="w-3.5 h-3.5 mr-1.5" />
                                原始碼
                              </a>
                            </Button>
                          )}
                          {selectedProject.webUrl && (
                            <Button size="sm" variant="outline" asChild className="font-mono text-xs">
                              <a href={selectedProject.webUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-3.5 h-3.5 mr-1.5" />
                                官方網站
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        <span className="text-xs bg-muted border border-border px-2 py-0.5 font-mono">
                          分類：{selectedProject.categoryLabel}
                        </span>
                        {selectedProject.languages.map(lang => (
                          <span key={lang} className="text-xs bg-secondary/10 text-secondary border border-secondary/20 px-2 py-0.5 font-mono">
                            {lang}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* 專案簡介 */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center">
                        <BookOpen className="w-3.5 h-3.5 mr-1.5 text-primary" />
                        專案簡介
                      </h4>
                      <p className="text-sm leading-relaxed font-mono">
                        {selectedProject.description}
                      </p>
                    </div>

                    {/* 能解決的學術/工程問題 */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 mr-1.5 text-emerald-500" />
                        解決的核心痛點
                      </h4>
                      <ul className="space-y-2">
                        {selectedProject.problemsSolved.map((prob, idx) => (
                          <li key={idx} className="text-xs font-mono flex items-start space-x-2">
                            <span className="text-primary mt-0.5">↳</span>
                            <span className="text-muted-foreground leading-relaxed">{prob}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* 核心功能特性 */}
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center">
                        <Layers className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                        核心功能特性
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {selectedProject.keyFeatures.map((feat, idx) => (
                          <div key={idx} className="border border-border bg-muted/20 p-2.5 text-xs font-mono flex items-center space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary" />
                            <span className="text-muted-foreground">{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* 學術引用與 DOI */}
                    {selectedProject.citations.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground flex items-center">
                          <ExternalLink className="w-3.5 h-3.5 mr-1.5 text-purple-500" />
                          學術文獻引用
                        </h4>
                        {selectedProject.citations.map((cite, idx) => (
                          <div key={idx} className="border border-border p-3 bg-muted/30 text-xs font-mono flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
                            <span className="text-muted-foreground font-semibold italic">"{cite.text}"</span>
                            <a 
                              href={`https://doi.org/${cite.doi}`} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-primary hover:underline flex items-center text-[10px]"
                            >
                              DOI: {cite.doi}
                              <ChevronRight className="w-3 h-3 ml-0.5" />
                            </a>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="border-t border-border pt-4 mt-6 flex justify-between items-center text-[10px] text-muted-foreground font-mono">
                    <span>* 本數據基於 2026 年最新開源社群及學術文獻整理</span>
                    <span>MOF Open Source Hub</span>
                  </div>
                </div>
              ) : (
                <div className="border border-dashed border-border p-12 text-center min-h-[500px] flex flex-col justify-center items-center">
                  <Atom className="w-12 h-12 text-muted-foreground animate-spin mb-4" />
                  <p className="text-sm font-mono text-muted-foreground">請從左側選擇一個開源專案以查看詳細技術文檔。</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 應用設計工作流 Section */}
      <section id="workflows" className="border-b border-border bg-muted/10 relative">
        {/* 裝飾角 */}
        <div className="metal-node left-12 top-12" />
        <div className="metal-node right-12 bottom-12" />

        <div className="container py-16">
          <div className="max-w-3xl mb-12">
            <Badge variant="outline" className="mb-3 border-blue-500/50 text-blue-500 font-mono">
              Practical Methodology
            </Badge>
            <h2 className="text-3xl font-bold font-sans tracking-tight mb-3">
              多場景 MOF 材料設計與模擬工作流
            </h2>
            <p className="text-muted-foreground text-sm font-mono leading-relaxed">
              如何將這些零散的開源專案串聯起來，解決實際的工程與學術設計問題？我們為您規劃了三大核心應用場景的標準化工作流。
            </p>
          </div>

          {/* 工作流切換 Tabs */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-border mb-8">
            <button
              onClick={() => setActiveWorkflowTab('gas')}
              className={`p-4 font-mono text-xs font-bold border-b md:border-b-0 md:border-r border-border transition-all text-left flex items-center justify-between ${
                activeWorkflowTab === 'gas' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <Atom className="w-4 h-4" />
                <span>1. 氣體捕捉與吸附設計</span>
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => setActiveWorkflowTab('carbon')}
              className={`p-4 font-mono text-xs font-bold border-b md:border-b-0 md:border-r border-border transition-all text-left flex items-center justify-between ${
                activeWorkflowTab === 'carbon' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <Flame className="w-4 h-4" />
                <span>2. 碳捕捉與直吸 (DAC)</span>
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
            <button
              onClick={() => setActiveWorkflowTab('photo')}
              className={`p-4 font-mono text-xs font-bold border-border transition-all text-left flex items-center justify-between ${
                activeWorkflowTab === 'photo' ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50'
              }`}
            >
              <span className="flex items-center space-x-2">
                <Zap className="w-4 h-4" />
                <span>3. 光電化學產氫/產氧</span>
              </span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </button>
          </div>

          {/* 工作流內容展示 */}
          <div className="border border-border p-6 md:p-8 bg-card relative">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold font-sans text-primary mb-2">
                  {APPLICATION_GUIDE[activeWorkflowTab].title}
                </h3>
                <p className="text-xs font-mono text-muted-foreground max-w-3xl leading-relaxed">
                  {APPLICATION_GUIDE[activeWorkflowTab].intro}
                </p>
              </div>

              {/* 步驟流程卡片 */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
                {APPLICATION_GUIDE[activeWorkflowTab].workflow.map((flow, idx) => (
                  <div key={idx} className="border border-border p-5 bg-muted/20 relative flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <span className="text-[10px] font-mono bg-primary/10 text-primary border border-primary/20 px-2 py-0.5">
                        {flow.step}
                      </span>
                      <h4 className="font-bold font-sans text-sm text-foreground pt-1">
                        {flow.tool}
                      </h4>
                      <p className="text-[11px] font-mono text-muted-foreground leading-relaxed">
                        {flow.desc}
                      </p>
                    </div>
                    {idx < 3 && (
                      <div className="hidden md:block absolute -right-2 top-1/2 -translate-y-1/2 z-20">
                        <ChevronRight className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="border-t border-border bg-card mt-auto">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-primary flex items-center justify-center text-primary-foreground font-bold text-xs">
                  M
                </div>
                <span className="font-bold tracking-tight text-sm font-sans">MOF Open Source Hub</span>
              </div>
              <p className="text-xs font-mono text-muted-foreground max-w-sm leading-relaxed">
                本網站致力於整理並推廣應用於金屬有機框架 (MOFs) 設計、模擬與材料基因組學的開源軟體與工具，助力全球綠色能源與環境永續研究。
              </p>
            </div>
            <div className="md:col-span-4 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">學術指導與致謝</h4>
              <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                感謝淡江大學化學工程與材料工程學系、明志科技大學化工系、以及各國開源材料科學社群（如 NMGC、snurr-group、Chung-Research-Group 等）提供的優秀軟體與數據支持。
              </p>
            </div>
            <div className="md:col-span-3 space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-muted-foreground">開源協議</h4>
              <p className="text-xs font-mono text-muted-foreground leading-relaxed">
                本站內容基於 MIT 協議開源。所列開源專案版權歸其各自原作者所有。
              </p>
              <div className="flex space-x-3 pt-1">
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center text-[10px] text-muted-foreground font-mono">
            <span>© 2026 MOF Open Source Hub. Designed for Academic Research & Green Tech.</span>
            <span className="mt-2 sm:mt-0">Powered by Manus AI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
