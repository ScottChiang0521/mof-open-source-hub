import { useEffect, useMemo, useRef, useState } from 'react';
import {
  APPLICATION_GUIDE,
  CATEGORY_LABELS,
  CURATION_TIER_LABELS,
  DATA_ACCESS_LABELS,
  ENTITY_TYPE_LABELS,
  type CurationTier,
  type EntityType,
  type MOFCategory,
  type MOFProject,
} from '../const';
import {
  APPLICATION_GUIDE_EN,
  CATEGORY_LABELS_EN,
  CURATION_TIER_LABELS_EN,
  ENTITY_TYPE_LABELS_EN,
  RESOURCE_TYPE_EN,
} from '../const.en';
import { ALL_PROJECTS as MOF_PROJECTS, ALL_PROJECTS_EN } from '../catalog';
import {
  AlertTriangle,
  ArrowRight,
  Atom,
  BadgeCheck,
  Binary,
  BookOpen,
  Box,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  Cpu,
  Database,
  ExternalLink,
  FileArchive,
  FileText,
  Filter,
  Flame,
  FolderGit2,
  Github,
  Layers,
  LibraryBig,
  Link2,
  Microscope,
  Scale,
  Search,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

type WorkflowKey = keyof typeof APPLICATION_GUIDE;

const categoryOrder: MOFCategory[] = ['gas', 'carbon', 'photo', 'structure', 'ml', 'md'];
const entityOrder: EntityType[] = ['software', 'database', 'portal'];

// English first, Chinese second. Used for short inline labels.
const bl = (en: string, zh: string) => `${en} / ${zh}`;

// English first, Chinese second, stacked. Used for sentences and list items.
function Bi({ en, zh, className = '' }: { en: string; zh: string; className?: string }) {
  return (
    <span className="block space-y-0.5">
      <span lang="en" className={`block ${className}`}>{en}</span>
      <span lang="zh-Hant" className={`block opacity-75 ${className}`}>{zh}</span>
    </span>
  );
}

function resourceIcon(type: MOFProject['supplementaryResources'][number]['resourceType']) {
  if (type === '原始論文' || type === '出版者 SI') return <FileText className="h-3.5 w-3.5" />;
  if (type === '程式碼 release') return <FolderGit2 className="h-3.5 w-3.5" />;
  if (type === '資料保存庫' || type === '專案資料目錄') return <FileArchive className="h-3.5 w-3.5" />;
  if (type === '資料服務／API') return <Database className="h-3.5 w-3.5" />;
  return <BookOpen className="h-3.5 w-3.5" />;
}

function dataAccessClass(access: MOFProject['dataAccess']) {
  if (access === 'open') return 'border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400';
  if (access === 'mixed') return 'border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300';
  if (access === 'limited') return 'border-orange-500/30 bg-orange-500/10 text-orange-700 dark:text-orange-300';
  return 'border-border bg-muted text-muted-foreground';
}

/**
 * Entry deep links: https://.../mof-open-source-hub/#<id>, where <id> is the catalog's
 * `id` field (for example #mofid-mofkey). A hash is used rather than a path because the
 * site is static hosting: a path like /entry/x would be answered with HTTP 404 (and the
 * copy of index.html in 404.html), which breaks link previews and crawlers. Section
 * anchors (#projects, #workflows, #about) are not entry ids and are left to the browser.
 */
function projectFromHash(): MOFProject | null {
  let id = window.location.hash.replace(/^#/, '');
  try {
    id = decodeURIComponent(id);
  } catch {
    return null;
  }
  return MOF_PROJECTS.find((project) => project.id === id) ?? null;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<MOFCategory | 'all'>('all');
  const [selectedEntity, setSelectedEntity] = useState<EntityType | 'all'>('all');
  const [selectedTier, setSelectedTier] = useState<CurationTier | 'all'>('all');
  const [selectedProject, setSelectedProject] = useState<MOFProject | null>(() => projectFromHash() ?? MOF_PROJECTS[0]);
  const [activeWorkflowTab, setActiveWorkflowTab] = useState<WorkflowKey>('gas');

  const filteredProjects = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return MOF_PROJECTS.filter((project) => {
      const en = ALL_PROJECTS_EN[project.id];
      const searchable = [
        project.name,
        project.description,
        project.categoryLabel,
        project.entityType,
        project.license,
        project.trainingUse,
        en.description,
        en.license,
        en.trainingUse,
        CATEGORY_LABELS_EN[project.category],
        ...project.capabilities,
        ...en.capabilities,
        ...project.languages,
        ...project.supplementaryResources.map((resource) => `${resource.label} ${resource.resourceType} ${resource.dataType}`),
        ...en.supplementaryResources.map((resource) => `${resource.label} ${resource.dataType}`),
      ].join(' ').toLowerCase();

      return (
        (!term || searchable.includes(term)) &&
        (selectedCategory === 'all' || project.category === selectedCategory) &&
        (selectedEntity === 'all' || project.entityType === selectedEntity) &&
        (selectedTier === 'all' || project.curationTier === selectedTier)
      );
    });
  }, [searchTerm, selectedCategory, selectedEntity, selectedTier]);

  const getCategoryIcon = (category: MOFCategory) => {
    switch (category) {
      case 'gas': return <Atom className="h-3.5 w-3.5" />;
      case 'carbon': return <Flame className="h-3.5 w-3.5" />;
      case 'photo': return <Zap className="h-3.5 w-3.5" />;
      case 'structure': return <Layers className="h-3.5 w-3.5" />;
      case 'ml': return <Cpu className="h-3.5 w-3.5" />;
      case 'md': return <Binary className="h-3.5 w-3.5" />;
      default: return <Database className="h-3.5 w-3.5" />;
    }
  };

  const detailRef = useRef<HTMLDivElement>(null);
  const selectProject = (project: MOFProject) => {
    setSelectedProject(project);
    // replaceState does not fire hashchange and does not add history entries, so the
    // address bar is always a shareable link to the entry on screen.
    window.history.replaceState(null, '', `#${project.id}`);
    if (window.matchMedia('(max-width: 1023px)').matches) {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Arriving on (or navigating to) a #<id> link: show that entry. Filters are cleared so
  // the entry cannot be hidden by one, then the page scrolls to it.
  useEffect(() => {
    const showEntryFromHash = () => {
      const project = projectFromHash();
      if (!project) return;
      setSearchTerm('');
      setSelectedCategory('all');
      setSelectedEntity('all');
      setSelectedTier('all');
      setSelectedProject(project);
      requestAnimationFrame(() => {
        const mobile = window.matchMedia('(max-width: 1023px)').matches;
        (mobile ? detailRef.current : document.getElementById('projects'))?.scrollIntoView({ block: 'start' });
      });
    };
    showEntryFromHash();
    window.addEventListener('hashchange', showEntryFromHash);
    return () => window.removeEventListener('hashchange', showEntryFromHash);
  }, []);

  const copyEntryLink = async (project: MOFProject) => {
    const { origin, pathname, search } = window.location;
    const url = `${origin}${pathname}${search}#${project.id}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success(bl('Link copied', '已複製連結'));
    } catch {
      toast(url); // clipboard unavailable (insecure context, denied permission): show it instead
    }
  };
  const sel = selectedProject && filteredProjects.some((project) => project.id === selectedProject.id) ? selectedProject : null;
  const selEn = sel ? ALL_PROJECTS_EN[sel.id] : null;
  const guide = APPLICATION_GUIDE[activeWorkflowTab];
  const guideEn = APPLICATION_GUIDE_EN[activeWorkflowTab];
  const total = MOF_PROJECTS.length;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-5 dark:opacity-10">
        <div
          className="absolute inset-0"
          style={{ backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)', backgroundSize: '24px 24px' }}
        />
      </div>

      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-primary font-bold text-primary-foreground">M</div>
            <span className="truncate font-sans text-lg font-bold tracking-tight">MOF Open Source Hub</span>
            <span className="hidden border border-primary/30 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary sm:inline">v3.0 verified / 核實版</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm font-medium lg:flex">
            <a href="#projects" className="transition-colors hover:text-primary">{bl('Catalog', '研究資料庫')}</a>
            <a href="#workflows" className="transition-colors hover:text-primary">{bl('Workflows', '研究工作流')}</a>
            <a href="#about" className="transition-colors hover:text-primary">{bl('Method', '資料方法')}</a>
          </nav>
          <Button variant="outline" size="sm" className="shrink-0 font-mono text-xs" asChild>
            <a href="https://github.com/topics/metal-organic-frameworks" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </header>

      <section className="relative border-b border-border bg-muted/30">
        <div className="metal-node left-12 top-12" />
        <div className="metal-node bottom-12 right-24" />
        <div className="container relative z-10 flex flex-col items-start py-20 md:py-28">
          <Badge variant="outline" className="mb-4 border-primary/50 px-3 py-1 font-mono text-primary">
            <ShieldCheck className="mr-1.5 h-3.5 w-3.5" />
            {bl('Official sources × papers × data-access status', '官方來源 × 論文 × 資料存取狀態')}
          </Badge>
          <h1 className="mb-6 max-w-4xl font-sans text-4xl font-bold leading-tight tracking-tight md:text-6xl">
            <span lang="en" className="block">Traceable open-source <span className="text-primary underline decoration-2 underline-offset-8">MOF</span> tools and research data</span>
            <span lang="zh-Hant" className="mt-3 block text-2xl font-semibold opacity-75 md:text-3xl">可追溯的 MOF 開源工具與研究資料</span>
          </h1>
          <p className="mb-8 max-w-2xl font-mono text-lg font-light leading-relaxed text-muted-foreground md:text-xl">
            <Bi
              en="A research guide for gas adsorption, carbon capture, and machine learning; photo- and electrocatalysis appear only as general-purpose DFT workflows, because no dedicated open-source MOF tool could be verified. Each entry states the code license, data availability, paper attachments, and required restrictions separately."
              zh="為氣體吸附、碳捕捉與機器學習設計的研究導覽；光電／電催化目前僅以通用 DFT 工作流程呈現，因為尚無可核實的 MOF 專用開源工具。每個條目分別標示程式碼授權、資料可用性、論文附件與必要限制。"
            />
          </p>
          <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <Button size="lg" className="font-mono" asChild>
              <a href="#projects">{bl('Browse the verified catalog', '瀏覽已核實資料庫')} <ArrowRight className="ml-2 h-4 w-4" /></a>
            </Button>
            <Button size="lg" variant="outline" className="font-mono" asChild>
              <a href="#about">{bl('Curation principles', '查看資料策展原則')}</a>
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-border bg-card">
        <div className="container py-16">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12">
            <div className="space-y-5 lg:col-span-5">
              <div className="inline-flex items-center gap-2 border border-border bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">
                <Microscope className="h-3.5 w-3.5 text-primary" />
                {bl('Data quality and method boundaries', '資料品質與方法界線')}
              </div>
              <h2 className="font-sans text-3xl font-bold">
                <Bi en="Separate rights from evidence before choosing a tool" zh="先辨別權利與證據，再選擇工具" />
              </h2>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <Bi
                  en={'"Open-source code", "publicly downloadable data" and "data usable for machine-learning training" are three different things. They are shown separately here so that the license of the code is not used to infer reuse rights for paper attachments, model files, or upstream structure data.'}
                  zh="「開源程式碼」、「公開可下載資料」與「可作機器學習訓練的資料」不是同一件事。本站將它們拆開呈現，避免由程式碼授權推論論文附件、模型檔或上游結構資料的再利用權。"
                />
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <Bi
                  en={'Every entry relies on official repositories or documentation, formal papers, or data archives as primary sources. "Ready to display" means the core use, license and source were verified; "Read the notes" means version differences, data subsets, restricted upstream sources, unconfirmed licenses, or limits on model applicability still apply.'}
                  zh="所有條目均以官方程式庫／文件、正式論文或資料保存庫為主來源。可立即展示代表核心用途、授權與來源已核實；「須閱讀註記」則表示仍有版本差異、資料子集、受限上游來源、授權未確認或模型適用範圍等必要界線。"
                />
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3 lg:col-span-7">
              <div className="border border-emerald-500/30 bg-emerald-500/5 p-5">
                <BadgeCheck className="mb-3 h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                <h3 className="mb-2 font-sans text-sm font-bold">{bl(CURATION_TIER_LABELS_EN.immediate, CURATION_TIER_LABELS.immediate)}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground"><Bi en="Official source, core use, and the main license and data access can all be matched unambiguously." zh="官方來源、核心用途與主要授權／資料存取均可明確對應。" /></p>
              </div>
              <div className="border border-amber-500/30 bg-amber-500/5 p-5">
                <AlertTriangle className="mb-3 h-5 w-5 text-amber-600 dark:text-amber-400" />
                <h3 className="mb-2 font-sans text-sm font-bold">{bl(CURATION_TIER_LABELS_EN.caveat, CURATION_TIER_LABELS.caveat)}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground"><Bi en="Usable, but data licensing, versions, sources, model applicability, or maintenance limits must be observed." zh="可使用，但必須注意資料授權、版本、來源、模型適用性或維護限制。" /></p>
              </div>
              <div className="border border-primary/30 bg-primary/5 p-5">
                <Scale className="mb-3 h-5 w-5 text-primary" />
                <h3 className="mb-2 font-sans text-sm font-bold">{bl('Citation and archiving', '引用與保存')}</h3>
                <p className="text-xs leading-relaxed text-muted-foreground"><Bi en="Each resource is classified as original paper, publisher SI, data archive, release, project data directory, or API." zh="每筆資源分為原始論文、出版者 SI、資料保存庫、release、專案資料目錄或 API。" /></p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="flex-1 border-b border-border">
        <div className="container py-16">
          <div className="mb-8 flex flex-col justify-between gap-5 border-b border-border pb-5 xl:flex-row xl:items-end">
            <div>
              <div className="mb-2 flex items-center gap-2 font-mono text-xs text-primary"><LibraryBig className="h-4 w-4" /> VERIFIED RESEARCH CATALOG</div>
              <h2 className="mb-2 font-sans text-3xl font-bold tracking-tight"><Bi en="MOF tools, databases and data portals" zh="MOF 工具、資料庫與資料入口" /></h2>
              <p className="max-w-2xl text-sm text-muted-foreground">
                <Bi
                  en={`Showing ${total} verified entries. Search by capability, data type or ML use, and cross-filter by entity type, application and curation tier.`}
                  zh={`顯示 ${total} 筆已核實項目；可搜尋能力、資料型態與 ML 用途，並依實體類型、應用與策展層級交叉篩選。`}
                />
              </p>
            </div>
            <div className="w-full xl:w-80">
              <label htmlFor="catalog-search" className="mb-1 block font-mono text-[11px] text-muted-foreground">{bl('Search the catalog', '搜尋目錄')}</label>
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <Input
                  id="catalog-search"
                  placeholder="Search tools, data types, ML tasks... / 搜尋工具、資料型態、ML 任務..."
                  className="pl-9 font-mono text-sm"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="mb-8 space-y-4 border border-border bg-muted/15 p-4">
            <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-muted-foreground"><Filter className="h-3.5 w-3.5" /> {bl('Filters', '篩選器')}</div>
            <div className="flex flex-wrap gap-2">
              <Button variant={selectedEntity === 'all' ? 'default' : 'outline'} aria-pressed={selectedEntity === 'all'} size="sm" className="font-mono text-xs" onClick={() => setSelectedEntity('all')}>{bl('All entities', '全部實體')} ({total})</Button>
              {entityOrder.map((entity) => {
                const count = MOF_PROJECTS.filter((project) => project.entityType === entity).length;
                return <Button key={entity} variant={selectedEntity === entity ? 'default' : 'outline'} aria-pressed={selectedEntity === entity} size="sm" className="font-mono text-xs" onClick={() => setSelectedEntity(entity)}>{bl(ENTITY_TYPE_LABELS_EN[entity], ENTITY_TYPE_LABELS[entity])} ({count})</Button>;
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant={selectedTier === 'all' ? 'default' : 'outline'} aria-pressed={selectedTier === 'all'} size="sm" className="font-mono text-xs" onClick={() => setSelectedTier('all')}>{bl('All verification statuses', '全部核實狀態')}</Button>
              {(Object.keys(CURATION_TIER_LABELS) as CurationTier[]).map((tier) => {
                const count = MOF_PROJECTS.filter((project) => project.curationTier === tier).length;
                return <Button key={tier} variant={selectedTier === tier ? 'default' : 'outline'} aria-pressed={selectedTier === tier} size="sm" className="font-mono text-xs" onClick={() => setSelectedTier(tier)}>{bl(CURATION_TIER_LABELS_EN[tier], CURATION_TIER_LABELS[tier])} ({count})</Button>;
              })}
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant={selectedCategory === 'all' ? 'default' : 'outline'} aria-pressed={selectedCategory === 'all'} size="sm" className="font-mono text-xs" onClick={() => setSelectedCategory('all')}>{bl('All applications', '全部應用')}</Button>
              {categoryOrder.filter((category) => MOF_PROJECTS.some((project) => project.category === category)).map((category) => {
                const count = MOF_PROJECTS.filter((project) => project.category === category).length;
                return (
                  <Button key={category} variant={selectedCategory === category ? 'default' : 'outline'} aria-pressed={selectedCategory === category} size="sm" className="flex items-center gap-1.5 font-mono text-xs" onClick={() => setSelectedCategory(category)}>
                    {getCategoryIcon(category)} {bl(CATEGORY_LABELS_EN[category], CATEGORY_LABELS[category])} ({count})
                  </Button>
                );
              })}
            </div>
          </div>

          <div className="mb-4 font-mono text-xs text-muted-foreground">{bl(`Showing ${filteredProjects.length} / ${total}`, `顯示 ${filteredProjects.length} / ${total} 筆`)}</div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="max-h-[780px] space-y-3 overflow-y-auto border-r border-border/50 pr-2 lg:col-span-5">
              {filteredProjects.length === 0 ? (
                <div className="border border-dashed border-border p-12 text-center">
                  <CircleHelp className="mx-auto mb-3 h-8 w-8 text-muted-foreground" />
                  <p className="font-mono text-sm text-muted-foreground"><Bi en="No verified entries match the current filters." zh="找不到符合條件的已核實項目。" /></p>
                </div>
              ) : filteredProjects.map((project) => {
                const en = ALL_PROJECTS_EN[project.id];
                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => selectProject(project)}
                    className={`relative w-full border p-5 text-left transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${sel?.id === project.id ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50 hover:bg-muted/30'}`}
                    aria-pressed={sel?.id === project.id}
                  >
                    {sel?.id === project.id && <><div className="metal-node left-0 top-0" /><div className="metal-node bottom-0 right-0" /></>}
                    <div className="mb-3 flex items-start justify-between gap-3">
                      <div>
                        <h3 className="font-sans text-lg font-bold transition-colors group-hover:text-primary">{project.name}</h3>
                        <p lang="en" className="mt-1 font-mono text-[10px] text-muted-foreground">{ENTITY_TYPE_LABELS_EN[project.entityType]} · {CATEGORY_LABELS_EN[project.category]}</p>
                        <p lang="zh-Hant" className="font-mono text-[10px] text-muted-foreground opacity-75">{ENTITY_TYPE_LABELS[project.entityType]} · {project.categoryLabel}</p>
                      </div>
                      {project.curationTier === 'immediate' ? <Badge className="shrink-0 rounded-none bg-emerald-600 text-[10px]">Verified / 已核實</Badge> : <Badge variant="outline" className="shrink-0 rounded-none border-amber-500/40 bg-amber-500/10 text-[10px] text-amber-700 dark:text-amber-300">Notes / 需註記</Badge>}
                    </div>
                    <p lang="en" className="mb-1 line-clamp-2 font-mono text-xs leading-relaxed text-muted-foreground">{en.description}</p>
                    <p lang="zh-Hant" className="mb-3 line-clamp-2 font-mono text-xs leading-relaxed text-muted-foreground opacity-75">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      <Badge variant="outline" className={`rounded-none text-[10px] ${dataAccessClass(project.dataAccess)}`}>{bl(en.dataAccessLabel, project.dataAccessLabel)}</Badge>
                      {en.capabilities.slice(0, 2).map((capability) => <Badge key={capability} variant="secondary" className="rounded-none text-[10px] font-mono">{capability}</Badge>)}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="lg:col-span-7" ref={detailRef}>
              {sel && selEn ? (
                <article className="relative min-h-[640px] border border-border bg-muted/10 p-6">
                  <div className="metal-node left-0 top-0" /><div className="metal-node right-0 top-0" /><div className="metal-node bottom-0 left-0" /><div className="metal-node bottom-0 right-0" />
                  <div className="space-y-6">
                    <header className="border-b border-border pb-5">
                      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                        <div>
                          <div className="mb-2 flex flex-wrap gap-1.5">
                            <Badge variant="outline" className="rounded-none font-mono text-[10px]">{bl(ENTITY_TYPE_LABELS_EN[sel.entityType], ENTITY_TYPE_LABELS[sel.entityType])}</Badge>
                            <Badge variant="outline" className={`rounded-none font-mono text-[10px] ${dataAccessClass(sel.dataAccess)}`}>{bl(selEn.dataAccessLabel, sel.dataAccessLabel)}</Badge>
                            {sel.curationTier === 'immediate' ? <Badge className="rounded-none bg-emerald-600 font-mono text-[10px]">{bl(CURATION_TIER_LABELS_EN.immediate, CURATION_TIER_LABELS.immediate)}</Badge> : <Badge variant="outline" className="rounded-none border-amber-500/40 bg-amber-500/10 font-mono text-[10px] text-amber-700 dark:text-amber-300">{bl(CURATION_TIER_LABELS_EN.caveat, CURATION_TIER_LABELS.caveat)}</Badge>}
                          </div>
                          <h3 className="font-sans text-2xl font-bold text-primary">{sel.name}</h3>
                          <p className="mt-1 font-mono text-xs text-muted-foreground">{bl('Maintainer / publisher', '維護／發布者')}: <span className="text-foreground">{sel.author}</span></p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Button size="sm" variant="outline" className="font-mono text-xs" onClick={() => copyEntryLink(sel)}><Link2 className="mr-1.5 h-3.5 w-3.5" />{bl('Copy link', '複製連結')}</Button>
                          {sel.githubUrl && <Button size="sm" variant="outline" className="font-mono text-xs" asChild><a href={sel.githubUrl} target="_blank" rel="noopener noreferrer"><Github className="mr-1.5 h-3.5 w-3.5" />{bl('Repository', '程式庫')}</a></Button>}
                          {sel.webUrl && <Button size="sm" variant="outline" className="font-mono text-xs" asChild><a href={sel.webUrl} target="_blank" rel="noopener noreferrer"><ExternalLink className="mr-1.5 h-3.5 w-3.5" />{bl('Official source', '官方來源')}</a></Button>}
                        </div>
                      </div>
                    </header>

                    <section className="space-y-2">
                      <h4 className="flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground"><BookOpen className="mr-1.5 h-3.5 w-3.5 text-primary" />{bl('Purpose and MOF applicability', '用途與 MOF 適用性')}</h4>
                      <p className="font-mono text-sm leading-relaxed"><Bi en={selEn.description} zh={sel.description} /></p>
                      <p className="border-l-2 border-primary pl-3 font-mono text-xs leading-relaxed text-muted-foreground"><Bi en={selEn.mofApplicability} zh={sel.mofApplicability} /></p>
                      <p className="font-mono text-[11px] leading-relaxed text-muted-foreground"><Bi en={selEn.sourceStatus} zh={sel.sourceStatus} /></p>
                    </section>

                    <section className="grid gap-3 md:grid-cols-2">
                      <div className="border border-border bg-card/60 p-3">
                        <div className="mb-1 font-mono text-[10px] uppercase text-muted-foreground">{bl('Code / data license', '程式碼／資料授權')}</div>
                        <a href={sel.licenseUrl || sel.primarySource.url} target="_blank" rel="noopener noreferrer" className="flex items-start gap-1.5 font-mono text-xs leading-relaxed text-primary hover:underline"><Scale className="mt-0.5 h-3.5 w-3.5 shrink-0" /><Bi en={selEn.license} zh={sel.license} /></a>
                      </div>
                      <div className="border border-border bg-card/60 p-3">
                        <div className="mb-1 font-mono text-[10px] uppercase text-muted-foreground">{bl('Maintenance / version signal', '維護／版本訊號')}</div>
                        <p className="font-mono text-xs leading-relaxed text-muted-foreground"><Bi en={selEn.maintenanceStatus} zh={sel.maintenanceStatus} /></p>
                      </div>
                    </section>

                    <section className="space-y-2">
                      <h4 className="flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground"><CheckCircle2 className="mr-1.5 h-3.5 w-3.5 text-emerald-500" />{bl('Research problems addressed', '可解決的研究問題')}</h4>
                      <ul className="space-y-2">
                        {sel.problemsSolved.map((problem, i) => <li key={problem} className="flex gap-2 font-mono text-xs leading-relaxed text-muted-foreground"><span className="text-primary">↳</span><Bi en={selEn.problemsSolved[i]} zh={problem} /></li>)}
                      </ul>
                    </section>

                    <section className="space-y-2">
                      <h4 className="flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground"><Layers className="mr-1.5 h-3.5 w-3.5 text-blue-500" />{bl('Verified features and data boundaries', '核實功能與資料邊界')}</h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        {sel.keyFeatures.map((feature, i) => <div key={feature} className="flex items-start gap-2 border border-border bg-muted/20 p-2.5 font-mono text-xs text-muted-foreground"><div className="mt-1 h-1.5 w-1.5 shrink-0 bg-primary" /><Bi en={selEn.keyFeatures[i]} zh={feature} /></div>)}
                      </div>
                    </section>

                    <section className="space-y-2 border-l-2 border-purple-500 pl-3">
                      <h4 className="flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground"><Cpu className="mr-1.5 h-3.5 w-3.5 text-purple-500" />{bl('ML training and reuse', 'ML 訓練與再利用')}</h4>
                      <p className="font-mono text-xs leading-relaxed text-muted-foreground"><Bi en={selEn.trainingUse} zh={sel.trainingUse} /></p>
                    </section>

                    {sel.paper && <section className="space-y-2">
                      <h4 className="flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground"><FileText className="mr-1.5 h-3.5 w-3.5 text-primary" />{bl('Original paper', '原始論文')}</h4>
                      <a href={sel.paper.url} target="_blank" rel="noopener noreferrer" className="flex items-start justify-between gap-3 border border-border bg-card/60 p-3 transition-colors hover:border-primary/50">
                        <span className="font-mono text-xs italic leading-relaxed text-muted-foreground">{sel.paper.title}</span>
                        <span className="shrink-0 font-mono text-[10px] text-primary">{sel.paper.doi ? `DOI: ${sel.paper.doi}` : 'Paper page / 論文頁'} <ChevronRight className="inline h-3 w-3" /></span>
                      </a>
                    </section>}

                    <section className="space-y-2">
                      <h4 className="flex items-center font-mono text-xs uppercase tracking-wider text-muted-foreground"><Box className="mr-1.5 h-3.5 w-3.5 text-primary" />{bl('Supplementary data and related resources', '補充資料與關聯資源')}</h4>
                      <div className="space-y-2">
                        {sel.supplementaryResources.map((resource, i) => {
                          const resEn = selEn.supplementaryResources[i];
                          return (
                            <a key={resource.url} href={resource.url} target="_blank" rel="noopener noreferrer" className="block border border-border bg-card/60 p-3 transition-colors hover:border-primary/50">
                              <div className="mb-1 flex items-start justify-between gap-3"><span className="flex items-center gap-1.5 font-mono text-xs font-semibold text-foreground">{resourceIcon(resource.resourceType)}{resEn.label}</span><ExternalLink className="h-3.5 w-3.5 shrink-0 text-primary" /></div>
                              <div className="font-mono text-[10px] text-primary">{RESOURCE_TYPE_EN[resource.resourceType]} · {resEn.access}</div>
                              <div className="font-mono text-[10px] text-primary opacity-75" lang="zh-Hant">{resource.resourceType} · {resource.access}</div>
                              <div className="mt-1 font-mono text-[10px] leading-relaxed text-muted-foreground"><Bi en={resEn.dataType} zh={resource.dataType} /></div>
                            </a>
                          );
                        })}
                      </div>
                    </section>

                    <section className="border border-amber-500/30 bg-amber-500/5 p-4">
                      <h4 className="mb-2 flex items-center font-mono text-xs uppercase tracking-wider text-amber-800 dark:text-amber-300"><AlertTriangle className="mr-1.5 h-3.5 w-3.5" />{bl('Required notes', '必要註記')}</h4>
                      <ul className="space-y-2">
                        {sel.caveats.map((caveat, i) => <li key={caveat} className="flex gap-2 font-mono text-xs leading-relaxed text-muted-foreground"><span className="text-amber-600 dark:text-amber-400">!</span><Bi en={selEn.caveats[i]} zh={caveat} /></li>)}
                      </ul>
                    </section>
                  </div>
                  <footer className="mt-6 flex flex-col justify-between gap-2 border-t border-border pt-4 font-mono text-[10px] text-muted-foreground sm:flex-row">
                    <span>{bl('Source verified', '來源核實日')}: {sel.lastVerified}</span>
                    <a href={sel.primarySource.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{bl('Primary source', '主要來源')}: {selEn.primarySourceLabel} / {sel.primarySource.label} <ExternalLink className="inline h-3 w-3" /></a>
                  </footer>
                </article>
              ) : (
                <div className="flex min-h-[640px] flex-col items-center justify-center border border-dashed border-border p-12 text-center"><Atom className="mb-4 h-12 w-12 text-muted-foreground" /><p className="font-mono text-sm text-muted-foreground"><Bi en="Select a verified resource from the list." zh="請從左側選擇一項已核實資源。" /></p></div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="workflows" className="relative border-b border-border bg-muted/10">
        <div className="metal-node left-12 top-12" /><div className="metal-node bottom-12 right-12" />
        <div className="container py-16">
          <div className="mb-12 max-w-3xl">
            <Badge variant="outline" className="mb-3 border-blue-500/50 font-mono text-blue-500">REPRODUCIBLE WORKFLOWS</Badge>
            <h2 className="mb-3 font-sans text-3xl font-bold tracking-tight"><Bi en="Design MOF research workflows within the limits of the evidence" zh="依證據界線設計 MOF 研究流程" /></h2>
            <p className="font-mono text-sm leading-relaxed text-muted-foreground"><Bi en="A workflow is not an automation guarantee. It asks researchers to keep a traceable record of the choices made at each structure, data, model, and simulation-setting node." zh="工作流不是自動化保證，而是要求研究者在每個結構、資料、模型與模擬條件節點保留可追溯的選擇紀錄。" /></p>
          </div>
          <div className="mb-8 grid grid-cols-1 border border-border md:grid-cols-3">
            {(Object.keys(APPLICATION_GUIDE) as WorkflowKey[]).map((key, index) => {
              const icons = [<Atom key="gas" className="h-4 w-4" />, <Flame key="carbon" className="h-4 w-4" />, <Zap key="photo" className="h-4 w-4" />];
              return <button key={key} type="button" aria-pressed={activeWorkflowTab === key} onClick={() => setActiveWorkflowTab(key)} className={`flex items-center justify-between border-b border-border p-4 text-left font-mono text-xs font-bold transition-all md:border-b-0 ${index < 2 ? 'md:border-r' : ''} ${activeWorkflowTab === key ? 'bg-primary text-primary-foreground' : 'hover:bg-muted/50'}`}><span className="flex items-center gap-2">{icons[index]}{index + 1}. {APPLICATION_GUIDE_EN[key].title.split(/[:：]/)[0]} / {APPLICATION_GUIDE[key].title.split('：')[0]}</span><ChevronRight className="h-4 w-4 opacity-50" /></button>;
            })}
          </div>
          <div className="relative border border-border bg-card p-6 md:p-8">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 font-sans text-xl font-bold text-primary"><Bi en={guideEn.title} zh={guide.title} /></h3>
                <p className="max-w-3xl font-mono text-xs leading-relaxed text-muted-foreground"><Bi en={guideEn.intro} zh={guide.intro} /></p>
              </div>
              <div className={`grid gap-4 ${guide.workflow.length === 3 ? 'md:grid-cols-3' : 'md:grid-cols-4'}`}>
                {guide.workflow.map((flow, index) => (
                  <div key={flow.step} className="relative flex flex-col justify-between space-y-4 border border-border bg-muted/20 p-5">
                    <div className="space-y-2">
                      <span className="border border-primary/20 bg-primary/10 px-2 py-0.5 font-mono text-[10px] text-primary">{guideEn.workflow[index].step} / {flow.step}</span>
                      <h4 className="pt-1 font-sans text-sm font-bold">{flow.tool}</h4>
                      <p className="font-mono text-[11px] leading-relaxed text-muted-foreground"><Bi en={guideEn.workflow[index].desc} zh={flow.desc} /></p>
                    </div>
                    {index < guide.workflow.length - 1 && <ChevronRight className="absolute -right-2 top-1/2 z-20 hidden h-4 w-4 -translate-y-1/2 text-primary md:block" />}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="mt-auto border-t border-border bg-card">
        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-12">
            <div className="space-y-4 md:col-span-5"><div className="flex items-center gap-3"><div className="flex h-6 w-6 items-center justify-center bg-primary text-xs font-bold text-primary-foreground">M</div><span className="font-sans text-sm font-bold tracking-tight">MOF Open Source Hub</span></div><p className="max-w-sm font-mono text-xs leading-relaxed text-muted-foreground"><Bi en="A traceable guide to tools for MOF design, simulation, and materials-data research. It does not replace the original papers, database terms, or project documentation." zh="面向 MOF 設計、模擬與材料資料研究的可追溯工具導覽。本站內容不取代原始論文、資料庫條款或專案文件。" /></p></div>
            <div className="space-y-3 md:col-span-4"><h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{bl('Current curation', '本次資料策展')}</h4><p className="font-mono text-xs leading-relaxed text-muted-foreground"><Bi en="Verified 2026-10-09 (original 15 entries) and 2026-10-14 (added entries). Code license, data license, SI, models, and upstream structure data are shown in separate fields; judge actual reuse rights by the terms of each original source." zh="核實日：2026-10-09（原 15 筆）與 2026-10-14（新增項目）。程式碼授權、資料授權、SI、模型與上游結構資料均以不同欄位呈現；請依各原始來源條款判斷實際重用權利。" /></p></div>
            <div className="space-y-3 md:col-span-3"><h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{bl('Further resources', '延伸資源')}</h4><div className="flex gap-3"><a href="https://github.com/topics/metal-organic-frameworks" target="_blank" rel="noopener noreferrer" aria-label="GitHub topic: metal-organic-frameworks" className="text-muted-foreground transition-colors hover:text-primary"><Github className="h-4 w-4" aria-hidden="true" /></a><a href="https://www.materialsproject.org/" target="_blank" rel="noopener noreferrer" aria-label="Materials Project" className="text-muted-foreground transition-colors hover:text-primary"><Database className="h-4 w-4" aria-hidden="true" /></a></div></div>
          </div>
          <div className="mt-8 flex flex-col items-center justify-between gap-2 border-t border-border pt-6 font-mono text-[10px] text-muted-foreground sm:flex-row"><span>© 2026 MOF Open Source Hub · Evidence-led research catalog</span><span>Designed for academic research / 學術研究用途</span></div>
        </div>
      </footer>
    </div>
  );
}
