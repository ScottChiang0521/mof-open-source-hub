# MOF Open Source Hub: Source Manifest / 來源清冊

This file has two parts. **Part A is English; Part B (繁體中文) follows after it.** Both parts carry the same entries, in the same order, with the same reference numbers.
本檔分兩部分：**A 部分為英文，B 部分（繁體中文）接在其後。** 兩部分的條目、順序與參考文獻編號相同。

- [Part A: English](#part-a-english)
- [Part B: 繁體中文](#part-b-繁體中文)

---

<a id="part-a-english"></a>

# Part A: English

## MOF Open Source Hub: Source Manifest and Conservative Curation Decisions

**Manifest version:** 2026-10-14. The first 15 entries were compiled on 2026-10-09 from independent verification results provided in the brief; 24 entries were added on 2026-10-14.  
**Curation principle:** For the original 15 entries this manifest **does not add, infer, or re-verify** any fact. The 24 entries added on 2026-10-14 are different: each was checked directly against its primary source (LICENSE file, README, publisher or archive page; DOIs resolved through Crossref or DataCite), and facts that could not be confirmed are stated as unconfirmed. For all entries, display decisions are made only from each result's `verdict`, `evidenceSummary`, `caveats`, and the listed URLs. Items marked `verified` are listed as "Ready to display"; items marked `verified_with_caveat` are listed as "Display with caveats". No original-15 item was judged unusable by its verification conclusion. The added entries cite their URLs inline in the source blocks and are not numbered in the References list. Two Zenodo records appended to the original core-mof-db entry (CoRE MOF 2024 v1.1 and CoRE MOF 2019 v1.1.4) were checked on 2026-10-14; the rest of that entry keeps its 2026-10-09 verification.

> **Data quality and boundaries of use**
>
> 1. This manifest covers both **software/tools** and **databases/data portals**. The open-source license of software, the data license of a dataset, the right to obtain a paper's supplementary information (SI), and the terms of use of a model file must be presented separately; the right to reuse one must not be inferred from another.
> 2. "Ready to display" does not mean that all downstream data or every kind of application has been verified; it means only that the original verification conclusion was `verified`. The UI should still retain the data type, version, and scope of use.
> 3. The restrictions under "Display with caveats" are required content on display cards and detail pages, especially license conflicts/unconfirmed licenses, CSD-derived or restricted data, tools that are not databases, limited maintenance signals, the applicable scope of models, and differences between data subsets.
> 4. The **original paper** is used to identify the method and DOI; the **publisher SI** is supplementary files released with the paper and cannot be treated automatically as open training data; a **data repository** is the source of versioned data or model files; a **code release** is an archive of a specific software version; a **general project data directory** is the set of files shipped inside a code repository, which may have no separate data license.
> 5. For items involving CSD/CCDC, NOMAD, MPContribs, third-party force fields, or upstream data sources, this manifest states only the verified scope of access or licensing; unconfirmed redistribution, commercial use, and ML training rights are all marked as unconfirmed.

### Curation Summary

| Curation tier | Count | IDs |
|---|---:|---|
| **Ready to display** | 5 | `graspa`, `quantum-espresso`, `qmof-database`, `mofsimbench`, `pormake` |
| **Display with caveats** | 34 | `raspa2-iraspa`, `zeopp`, `poreblazer`, `mofid-mofkey`, `core-mof-tools`, `pacman-charge`, `mofdscribe`, `mofdiff`, `dac-sim`, `core-mof-db`, `materials-project-mof-explorer`, `crystallography-open-database-cod`, `raspa3`, `mosaec`, `mofchecker`, `autografs`, `tobacco-3`, `lammps-interface`, `mofstructure`, `moftransformer`, `moformer`, `mofsimplify`, `mofflow`, `chatmof`, `l2m3`, `ghp-mofassemble`, `synmof-literature-extraction`, `arc-mof`, `mofx-db`, `nist-arpa-e-adsorbent-db`, `materials-cloud-archive`, `odac25`, `nomad-repository`, `csd-cambridge-structural-database` |
| **Excluded** | 2 | `mosaec-db`, `jarvis-dft` (candidates examined 2026-10-14; see section 3) |

---

## 1. Ready to display

### gRASPA

- **ID / type:** `graspa`; GPU-accelerated Monte Carlo adsorption simulation software.[1] [4]
- **Display decision:** Ready to display. The original verification conclusion is `verified`; both the official repository and the formal paper support its use for molecular adsorption simulation in porous materials (including MOFs).[1] [4]
- **Suggested display content:** State that it is software and not a MOF structure/property database; present the MIT license, MOF applicability, and the verified uses such as GCMC / NVT / NVT-Gibbs / Widom / GC-TMMC. Do not describe its ability to integrate ML potentials as providing ML training data.[1] [2] [4]
- **License and status:** The repository LICENSE is MIT; the original verification result records the latest version on the release page and details of GPU compatibility. Link to the release and the documentation, and do not generalize any one hardware path to fully equivalent support.[2] [3] [6]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/snurr-group/gRASPA> [1] | Main code, features, and MOF positioning. |
| License text | <https://raw.githubusercontent.com/snurr-group/gRASPA/main/LICENSE> [2] | Evidence of the MIT code license. |
| Code release | <https://github.com/snurr-group/gRASPA/releases> [3] | Versions and release assets; not a dataset. |
| Original paper (publisher DOI) | <https://doi.org/10.1021/acs.jctc.4c01058> [4] | Method, MOF examples, and bibliographic identification. |
| Software record | <https://www.osti.gov/biblio/code-172693> [5] | Cross-check of the software/MIT record. |
| General project documentation | <https://zhaoli2042.github.io/gRASPA-mkdoc/> [6] | Build instructions and limitations of the different GPU paths. |

### Quantum ESPRESSO

- **ID / type:** `quantum-espresso`; periodic DFT calculation software platform.[7] [9]
- **Display decision:** Ready to display. The original verification conclusion is `verified`; the official QEF GitLab and the official documentation support its positioning as GPL-2.0-or-later periodic DFT software, and a published Quantum ESPRESSO example exists for M-MOF-74.[7] [9] [10] [12]
- **Suggested display content:** Present it as computational software, not a structure, property, or synthesis database; the verified capabilities such as electronic structure, relaxation, molecular dynamics, DFPT, and DFT+U may be listed. MOF results still depend on the structural model, functional, dispersion, pseudopotential, magnetic state, DFT+U, and convergence settings, and the quality of results for an arbitrary MOF cannot be guaranteed in advance.[9] [10] [12]
- **License and status:** The basis for official development and releases is the QEF GitLab; GitHub is a mirror and cannot be treated as the official entry point for issues/PRs.[7] [8] [11]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository / official development repository | <https://gitlab.com/QEF/q-e> [7] | Official development, GPL license, and maintenance signals. |
| Code release | <https://gitlab.com/QEF/q-e/-/releases/qe-7.6> [8] | QEF versioned source archive. |
| Original paper (publisher) | <https://iopscience.iop.org/article/10.1088/0953-8984/21/39/395502> [9] | Original software paper and DOI. |
| General official documentation | <https://www.quantum-espresso.org/Doc/INPUT_PW.html> [10] | Boundaries of PWscf periodic DFT features. |
| Code mirror | <https://github.com/QEF/q-e> [11] | Mirror; not the official issue/PR entry point. |
| MOF application paper (publisher) | <https://www.sciencedirect.com/science/article/pii/S000926141731045X> [12] | Evidence of periodic DFT use for M-MOF-74. |

### QMOF Database

- **ID / type:** `qmof-database`; high-throughput periodic DFT database of MOFs and related coordination polymers, with an auxiliary tools repository.[13] [15] [17]
- **Display decision:** Ready to display. The original verification conclusion is `verified`; the official Figshare data release, the QMOF repository, and the Matter paper together support its positioning as a public, MOF-specific DFT structure and property dataset.[13] [15] [17]
- **Suggested display content:** Present separately that the **data are CC BY 4.0** and that the **GitHub code and documentation are MIT**. The data scope may be shown as 20,000+ MOF/related structures, DFT-optimized structures, and the verified electronic/charge/magnetic and pore fields; for synthesis, present only the verified `synthesized` flag, the sources, and some DOIs/refcodes, and do not claim complete experimental recipes, reaction conditions, or yields.[13] [15] [16] [17]
- **Data quality note:** The structures include both synthesized and hypothetical structures, and also include MOF-like coordination polymers; filtering by `synthesized`, `source`, pore fields, and similar fields is needed. NOMAD entries may be newer than the current MOF Explorer; when using the raw calculation files, cross-check against the specific QMOF version.[18] [19] [20]
- **ML / download:** The CC BY 4.0 Figshare data may be used for training or derivative works, subject to attribution and indication of changes. MPContribs is a query/download mirror and NOMAD is the storage location of calculation inputs/outputs; neither is a synonym that can replace the versioned QMOF release.[13] [17] [18] [19] [20]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Data repository / versioned data release | <https://figshare.com/articles/dataset/QMOF_Database/13147324> [13] | Official QMOF data release, CC BY 4.0, and version history. |
| Data repository API | <https://api.figshare.com/v2/articles/13147324> [14] | Cross-check of file and version metadata. |
| General project repository | <https://github.com/Andrew-S-Rosen/QMOF> [15] | Auxiliary code, documentation, and data source description. |
| License text | <https://github.com/Andrew-S-Rosen/QMOF/blob/main/LICENSE> [16] | MIT license for the GitHub code; not a data license. |
| Original paper (publisher) | <https://www.sciencedirect.com/science/article/pii/S2590238521000709> [17] | Original QMOF paper, scope, and ML use. |
| General official documentation | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data> [18] | Data format, downloads, and external storage locations. |
| Data service / API mirror | <https://contribs.materialsproject.org/projects/qmof> [19] | MPContribs fields, downloads, and query mirror. |
| Calculation data repository | <https://doi.org/10.17172/NOMAD/2021.10.10-1> [20] | Storage location of the QMOF PBE calculation files. |

### MOFSimBench

- **ID / type:** `mofsimbench`; Software / Machine learning and data. A benchmark code for evaluating universal machine learning interatomic potentials (uMLIPs) on MOF molecular modeling tasks: structure optimization, molecular dynamics stability, bulk modulus and heat capacity.
- **Display decision:** Ready to display. The official repository, MIT license, npj Computational Materials paper and Figshare results were verified.
- **MOF applicability:** Directly applicable. The paper title and README both take MOFs as the object of evaluation. The QMOF energy comparison and GoldDAC interaction-energy tasks require external data to be downloaded separately.
- **License and status:** MIT License (code); the Figshare results record is CC BY 4.0. Last push 2025-12-17 (GitHub API); releases were not checked individually.
- **Required caveats:**
  - The NPT tasks need the MTKNPT driver, which is not in the PyPI release of ase and must be installed from the ase git repository.
  - The QMOF and GoldDAC comparison tasks require external data downloaded by the user; their terms are set by each source and were not checked individually here.
  - Benchmark scores depend on each model's D3 correction and precision settings and may change with different settings.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/AI4ChemS/mofsim-bench> | MOFSimBench official repository |
| Official source | <https://doi.org/10.6084/m9.figshare.30234010> | MOFSimBench official repository |
| License text | <https://raw.githubusercontent.com/AI4ChemS/mofsim-bench/main/LICENSE> | MIT License (code); the Figshare results record is CC BY 4.0 |
| Original paper (publisher DOI) | <https://doi.org/10.1038/s41524-025-01872-3> | MOFSimBench: evaluating universal machine learning interatomic potentials in metal-organic framework molecular modeling (DOI 10.1038/s41524-025-01872-3) |
| Data repository | <https://doi.org/10.6084/m9.figshare.30234010> | MOFSimBench simulation results (Figshare): Public, CC BY 4.0; results.zip, about 334 MB, for reproducing the paper figures |
| Original paper | <https://arxiv.org/abs/2507.11806> | arXiv preprint: Public; Preprint full text |


### PORMAKE

- **ID / type:** `pormake`; Software / Structure processing and pore analysis. A Python library that assembles porous materials (including MOFs) from topologies and building blocks, with an experimental module that extracts building blocks from existing MOFs.
- **Display decision:** Ready to display. The official repository, MIT LICENSE.md and the ACS AMI paper were verified.
- **MOF applicability:** Directly applicable. The original paper uses large-scale computational screening of MOFs as its example, and the README includes a module for extracting building blocks from MOFs.
- **License and status:** MIT License (code). Last push 2026-08-09 (GitHub API); the README documents version 0.2.3 with a CHANGELOG and ROADMAP.
- **Required caveats:**
  - Generated structures are not guaranteed to be synthesizable and have not been experimentally verified.
  - The paper is a large-scale generate-and-screen computational study; whether the README provides that screening dataset was not confirmed.
  - Native Windows is not supported by the pip install.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/Sangwon91/PORMAKE> | PORMAKE official repository |
| License text | <https://raw.githubusercontent.com/Sangwon91/PORMAKE/main/LICENSE.md> | MIT License (code) |
| Original paper (publisher DOI) | <https://doi.org/10.1021/acsami.1c02471> | Computational Screening of Trillions of Metal–Organic Frameworks for High-Performance Methane Storage (DOI 10.1021/acsami.1c02471) |
| Official documentation | <https://github.com/Sangwon91/PORMAKE> | PORMAKE CHANGELOG (GitHub): Public; Version history and examples described in the README |


---

## 2. Display with caveats

### RASPA2 (iRASPA ecosystem)

- **ID / type:** `raspa2-iraspa`; classical molecular simulation software.[21] [22] [26]
- **Required caveat:** The current official repository `COPYING` states MIT, but the official website and the 2016 paper once stated GPL; this manifest labels as MIT only the explicit license text of the current source repository, and for older versions or legal reuse the version-specific license must be confirmed with the copyright holder.[21] [23] [26]
- **Display scope:** RASPA2 is used for adsorption and diffusion in flexible nanoporous materials, and the README directly lists MOF and rigid/flexible MOF force field examples; iRASPA is an advanced visualization suite of the same ecosystem, and the visualization features of iRASPA must not be mistakenly listed as features of the RASPA2 simulation engine.[21] [22] [27] [28]
- **Operation / maintenance caveat:** The force fields, structures, and molecule files in the repository are illustrative examples only, and users must build and validate their own classical force fields. The original verification result also supports only public, non-archived status and limited commit/release evidence, and long-term support cannot be promised.[22] [24] [25]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General official website | <https://iraspa.org/raspa/> [21] | RASPA positioning and the historical license statement. |
| General project repository | <https://github.com/iRASPA/RASPA2> [22] | RASPA2 features, MOF examples, and boundaries of use. |
| License text | <https://raw.githubusercontent.com/iRASPA/RASPA2/master/COPYING> [23] | MIT text of the current repository. |
| Maintenance evidence | <https://github.com/iRASPA/RASPA2/commits/master/> [24] | Visible commit history. |
| Code release | <https://api.github.com/repos/iRASPA/RASPA2/releases/latest> [25] | Official release and binary asset metadata. |
| Original paper (publisher) | <https://www.tandfonline.com/doi/full/10.1080/08927022.2015.1010082> [26] | Original RASPA paper. |
| General official website (iRASPA) | <https://iraspa.org/> [27] | Positioning of the iRASPA ecosystem. |
| iRASPA paper (publisher) | <https://www.tandfonline.com/doi/full/10.1080/08927022.2018.1426855> [28] | Separate paper for the visualization suite. |

### Zeo++

- **ID / type:** `zeopp`; porous crystal geometry/topology analysis software.[29] [31] [35]
- **Required caveat:** This is software, not a database. The open-source and license basis of the original verification is the README/LICENSE of the EPFL LSMO fork; the official download page did not yield readable download text in this check, and the official Zeo++ 0.3 and LSMO v0.4.7 belong to different release contexts, so LSMO v0.4.7 cannot be asserted to be the canonical release of the original authors.[29] [30] [31] [32] [33]
- **Display scope:** The verified features may be presented: Voronoi decomposition, pore size, accessible surface area/volume, channel dimensionality, blocking spheres, open metal sites, and MOF/COF assembly; its applicability to MOFs is also supported by the publisher abstract.[29] [30] [35]
- **License / maintenance caveat:** The LICENSE is close to BSD 3-clause but contains an additional enhancement license paragraph, and the API reports `NOASSERTION`; keep the description "modified BSD / BSD 3-clause-like" and do not simplify it to the standard SPDX BSD-3-Clause. The verifiable fork release/push activity stops in 2022, and this should be displayed as no visible recent pushes.[31] [32] [33] [34]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General official website | <https://www.zeoplusplus.org/> [29] | Official features and description of MOF/COF applications. |
| General official documentation | <https://www.zeoplusplus.org/docs.html> [30] | Feature documentation and core citations. |
| General project repository (LSMO fork) | <https://github.com/lsmo-epfl/zeopp-lsmo> [31] | Readable code and fork positioning. |
| License text | <https://github.com/lsmo-epfl/zeopp-lsmo/blob/master/LICENSE> [32] | Modified BSD-like terms. |
| Code release | <https://github.com/lsmo-epfl/zeopp-lsmo/releases/tag/v0.4.7> [33] | LSMO v0.4.7 archive. |
| Maintenance evidence | <https://api.github.com/repos/lsmo-epfl/zeopp-lsmo> [34] | Fork's public, non-archived status and last-push metadata. |
| Original paper (publisher) | <https://www.sciencedirect.com/science/article/abs/pii/S1387181111003738> [35] | Zeo++ methodology and target MOF materials. |
| Bibliographic metadata | <https://api.crossref.org/works/10.1016%2Fj.micromeso.2011.08.020> [36] | Cross-check of DOI/title. |

### PoreBlazer

- **ID / type:** `poreblazer`; porous material geometry analysis tool, with a table of MOF properties.[37] [40] [42]
- **Required caveat:** The main item is software, not a database. The README declares GPL-3.0-or-later for the "project", but the repository has no separate LICENSE file recognizable by GitHub; the license evidence should be labeled as a README declaration, and the existence of a separate license file detected by GitHub must not be claimed.[37] [38]
- **Display scope:** The MOF geometry analysis features may be presented: PLD, LCD, connectivity dimension, accessible surface area, helium/geometric pore volume, and pore size distribution; direct applicability to MOFs is supported by the examples and the v4.0 paper.[37] [41] [42]
- **Data caveat:** `data/` is a **general project data directory** that ships PB4, Zeo++, and RASPA geometric property tables for the CSD MOF subset; PB4 has 12,081 entries, but independent reuse, CSD redistribution, and ML training permissions for these derived data are not confirmed. The GPL declaration of the program must not be extrapolated to the data tables.[40] [42]
- **Maintenance caveat:** The last visible commit on main is from 2020 and there is no GitHub release; it can be displayed but should be labeled as public with low maintenance signals.[39]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/SarkisovGitHub/PoreBlazer> [37] | Entry point to the program, examples, and data directory. |
| General project README / license declaration | <https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/README.md> [38] | Author's GPL-3.0-or-later declaration. |
| Maintenance evidence | <https://github.com/SarkisovGitHub/PoreBlazer/commits/main> [39] | Commit history. |
| General project data directory | <https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/data/README.txt> [40] | Shipped data tables, entry counts, and fields; not a separately licensed data release. |
| Original paper (publisher DOI) | <https://doi.org/10.1080/08927022.2011.592832> [41] | Original paper of the structure characterization tool. |
| Methodology paper (publisher DOI) | <https://doi.org/10.1021/acs.chemmater.0c03575> [42] | PoreBlazer v4.0 and application to the CSD MOF subset. |
| Publisher SI repository | <https://acs.figshare.com/articles/journal_contribution/Materials_Informatics_with_PoreBlazer_v4_0_and_the_CSD_MOF_Database/13296133> [43] | CC BY-NC 4.0 supplementary material of the paper; not equivalent to the license of the repository data tables. |
| Release API | <https://api.github.com/repos/SarkisovGitHub/PoreBlazer/releases> [44] | Source for checking that there is no official GitHub release. |

### MOFid / MOFkey

- **ID / type:** `mofid-mofkey`; MOF structure identification and cheminformatics tool.[45] [49]
- **Required caveat:** MOFid/MOFkey is an identifier system in the direction of an open standard, but the original paper states explicitly that the format has not yet converged; it must not be presented as a final standard formally adopted by IUPAC, CCDC, or the community.[45] [49]
- **Display scope:** The GPL-2.0 decomposition of 3D MOF CIFs, building-unit/topology output, and identifier string output may be presented. The front end should list the limitations prominently: 1D/2D MOFs are currently not supported; disorder, partial occupancy, complex solvents, or non-framework ions may make results inaccurate or cause failure; the topology assignment for some rod-like metal nodes must also be verified case by case.[45] [47] [48] [49]
- **Data / maintenance caveat:** The ACS SI ZIP contains identifiers, duplicate information, and polymorph family data for CoRE MOF 2019-ASR, but no separate data license has been verified, so it cannot be labeled directly as a free ML training set. The official release is v1.1.0 from 2022, while the main branch has later pushes; the two should be displayed separately.[49] [50] [51] [52]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/snurr-group/mofid> [45] | Source code, features, and README updates. |
| License text | <https://github.com/snurr-group/mofid/blob/master/LICENSE> [46] | GPL-2.0 code license. |
| General official documentation | <https://snurr-group.github.io/mofid/> [47] | Installation, output, and structural limitations. |
| General web tool | <https://snurr-group.github.io/web-mofid/> [48] | Entry point for local in-browser CIF analysis and scope of applicability. |
| Original paper (publisher) | <https://pubs.acs.org/doi/10.1021/acs.cgd.9b01050> [49] | Identifier system, limitations, and SI entry point. |
| Publisher SI (PDF) | <https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_001.pdf> [50] | Algorithm, validation, and database statistics. |
| Publisher SI (ZIP) | <https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_002.zip> [51] | CoRE MOF 2019-ASR identifiers; license not confirmed. |
| Code release / container | <https://github.com/snurr-group/mofid/releases/tag/v1.1.0> [52] | v1.1.0 Singularity release. |

### CoRE MOF Tools

- **ID / type:** `core-mof-tools`; Python cleaning, standardization, and validation workflow for CoRE MOF.[53] [54]
- **Required caveat:** This is a tool and not a standalone database. Its CC BY 4.0 is the license of the tool code and cannot be extrapolated to CoRE, CSD, or other data accessible through the tool; downloading CSD structures and MOSAEC require a licensed CSD installation and the Python API, and there are several optional external dependencies.[53] [55] [56]
- **Display scope:** The verified workflows may be presented: CIF preprocess/clean, structure validation, descriptors, database queries, and some pretrained property predictions.[53] [54]
- **Version caveat:** Read the Docs shows 0.3.1, PyPI has 0.3.5, and GitHub has no release; the UI should display the specific package version selected and the date consulted, to avoid treating the documentation version as a release version.[54] [57] [61]
- **Related data:** The Zenodo CoRE MOF 2024 v1.1 is a **data repository** with metadata of open / CC BY 4.0; Matter Data S2 is **publisher SI**; both should be labeled separately from the tool license.[58] [59] [60]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools> [53] | Tool code and positioning of the CoRE interface. |
| General official documentation | <https://core-mof-tools.readthedocs.io/en/latest/> [54] | Features and documentation version. |
| Feature documentation | <https://core-mof-tools.readthedocs.io/en/latest/features.html> [55] | Cleaning, validation, and external-dependency workflows. |
| License text | <https://raw.githubusercontent.com/Chung-Research-Group/CoRE-MOF-Tools/main/LICENSE> [56] | CC BY 4.0 for the tool code. |
| Package release | <https://pypi.org/project/coremof-tools/> [57] | Official PyPI package version. |
| Original / designated related paper (publisher) | <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3> [58] | Database/toolkit citation designated by the official repository. |
| Data repository | <https://zenodo.org/records/15055758> [59] | CoRE MOF 2024 Dataset v1.1. |
| Publisher SI (Data S2) | <https://www.cell.com/cms/10.1016/j.matt.2025.102140/attachment/8852f410-9050-4a67-8725-869f15b11d1d/mmc4.zip> [60] | Details of CR/NCR and list of non-CoRE structures. |
| Release check | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools/releases> [61] | Source for checking that GitHub has no releases. |

### PACMAN-charge

- **ID / type:** `pacman-charge`; software that predicts partial atomic charges with a crystal graph convolutional network.[62] [66]
- **Required caveat:** This is a prediction tool, not a database. Its MOF DDEC6/Bader/CM5/REPEAT outputs are ML predictions and do not equal a fresh DFT charge analysis run on a new structure.[62] [66]
- **Display scope:** The MIT license and the direct MOF use (CIF input, partial charge output) may be presented. The UI should present the verified limitations: the usable elements depend on the training data; the Bader model for Th-MOF has only two training points; the default `neutral=True` distributes excess charge evenly using the mean method to neutralize the system.[62] [63]
- **Version / data caveat:** PyPI is newer than the GitHub release, and the two should be displayed separately. The Zenodo link is provided by the README, but the record uses the earlier name GCNCharge, and the page also indicates that a newer version exists; its content must not be assumed to be fully identical to the current PACMAN-charge. Training data rights must be verified one by one against the upstream sources.[64] [65] [68] [69]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/Chung-Research-Group/PACMAN-charge> [62] | Features, model limitations, and operation. |
| License text | <https://raw.githubusercontent.com/Chung-Research-Group/PACMAN-charge/main/LICENSE> [63] | MIT code license. |
| Package release | <https://pypi.org/project/PACMAN-charge/> [64] | PyPI version. |
| Code release | <https://github.com/Chung-Research-Group/PACMAN-charge/releases> [65] | GitHub release version. |
| Original paper bibliographic metadata | <https://api.crossref.org/works/10.1021/acs.jctc.4c00434> [66] | Check of DOI/title. |
| Publisher SI repository | <https://acs.figshare.com/articles/journal_contribution/PACMAN_A_Robust_Partial_Atomic_Charge_Predicter_for_Nanoporous_Materials_Based_on_Crystal_Graph_Convolution_Networks/25952558> [67] | Public, CC BY-NC 4.0 supplementary material of the paper. |
| Data / model repository | <https://zenodo.org/records/10822403> [68] | GCNCharge archive; name and version must be treated conservatively. |
| Maintenance evidence | <https://api.github.com/repos/Chung-Research-Group/PACMAN-charge> [69] | Push and repository metadata. |

### mofdscribe

- **ID / type:** `mofdscribe`; MOF machine learning Python toolkit.[70] [73]
- **Required caveat:** This item is a toolkit, not a single database. It can wrap structure collections, features, labels, hashes, and metadata, but the scope and rights of each dataset must be checked in its own record.[70] [71] [73]
- **Display scope:** The MIT license and a MOF ML workflow with 40+ featurizers, data splitting, deduplication, validation, and benchmarks may be presented; its original paper is *An Ecosystem for Digital Reticular Chemistry*.[70] [72] [73]
- **Version / data caveat:** The installable official release and the GitHub release are 0.0.8, while the documentation shows 0.0.9-dev, and the latest visible commit is from 2024; do not label it as continuously officially released. The Materials Cloud adsorption data are CC BY 4.0; the reuse license of the MPContribs page was not confirmed in this check; the Zenodo CoRE subset, although CC BY 4.0, states explicitly "Not intended for direct use".[71] [74] [75] [76] [77] [78]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/lamalab-org/mofdscribe> [70] | Code and MOF ML positioning. |
| General official documentation | <https://mofdscribe.readthedocs.io/en/latest/> [71] | Features and the dev documentation version. |
| License text | <https://raw.githubusercontent.com/lamalab-org/mofdscribe/main/LICENSE> [72] | MIT code license. |
| Original paper (publisher) | <https://pubs.acs.org/doi/10.1021/acscentsci.2c01177> [73] | Original paper, data availability, and SI entry point. |
| Code release | <https://api.github.com/repos/lamalab-org/mofdscribe/releases/latest> [74] | v0.0.8 release metadata. |
| Maintenance evidence | <https://api.github.com/repos/lamalab-org/mofdscribe/commits?per_page=1> [75] | Last visible commit. |
| Data repository | <https://doi.org/10.24435/materialscloud:qt-cj> [76] | CC BY 4.0 adsorption/process data. |
| Data service / download interface | <https://doi.org/10.17188/mpcontribs/1883597> [77] | MOF Explorer backend; page reuse license not confirmed. |
| Project data repository | <https://zenodo.org/records/7032358> [78] | CoRE subset, hashes, and features; labeled as not suitable for direct use. |

### MOFDiff

- **ID / type:** `mofdiff`; coarse-grained diffusion generation and inverse design research tool for MOFs.[79] [84]
- **Required caveat:** This is research code, with no GitHub release, and the last visible main-branch commit is from 2024. Generated CG structures are not guaranteed to be realizable; the authors require assembly into all-atom structures and UFF relaxation, and whether the generated structures can be realized has not yet been verified experimentally.[79] [81] [82]
- **Display scope:** The MIT license, MOF CG generation, all-atom reconstruction, UFF relaxation, and the evaluation workflow exemplified by CO2 working capacity may be presented; it must not be described as an empirically validated predictor of synthetic feasibility.[79] [80] [84]
- **Data / model caveat:** The preprocessed BW-DB, pretrained models, and generated samples on Zenodo are a **data and model repository**, CC BY 4.0; the public pretrained model is limited to BW-DB, and training on other arbitrary MOF datasets has been tested only minimally. The ICLR ZIP is **supplementary material on the publisher/conference official paper page**, contains only the top-10 CIFs, and cannot be regarded as a complete training database.[84] [85] [86] [87]
- **Paper identification caveat:** The ICLR official page does not show a separate publisher DOI; this manifest uses the arXiv DataCite DOI only as the preprint record and does not describe it as an ICLR publisher DOI.[84] [85]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/microsoft/MOFDiff> [79] | Research code, limitations, and data/model links. |
| License text | <https://github.com/microsoft/MOFDiff/blob/main/LICENSE> [80] | MIT code license. |
| Maintenance evidence | <https://github.com/microsoft/MOFDiff/commits/main/> [81] | Last visible commit. |
| Release check | <https://github.com/microsoft/MOFDiff/releases> [82] | Source for checking that GitHub has no release. |
| General official project page | <https://www.microsoft.com/en-us/research/publication/mofdiff-coarse-grained-diffusion-for-metal-organic-framework-design/> [83] | Project positioning by the authors' institution. |
| Official conference paper | <https://proceedings.iclr.cc/paper_files/paper/2024/hash/47547ee84e3fbbcbbbbad7c1fd9a973b-Abstract-Conference.html> [84] | ICLR official page and supplementary material entry point. |
| Preprint record | <https://arxiv.org/abs/2310.10732> [85] | arXiv/DataCite DOI identification. |
| Data and model repository | <https://zenodo.org/records/10806179> [86] | BW-DB, pretrained models, and generated samples. |
| Upstream data repository | <https://archive.materialscloud.org/record/2018.0016/v3> [87] | Download source of the original BW-DB. |

### DAC-SIM

- **ID / type:** `dac-sim`; MACE-DAC-based molecular simulation tool for direct air capture in MOFs.[88] [90] [92]
- **Required caveat:** The MIT license explicitly covers only the code; no separate license was found for the GoldDAC data file and the MACE-DAC-1 model file, and the same redistribution or commercial-use rights as the code cannot be assumed.[88] [89] [93] [94]
- **Display scope:** Widom insertion, MD, and geometry optimization for CO2/H2O DAC, and their direct use for MOFs, may be presented. The verified validation scope is CO2/H2O in MOFs; do not extend it to other gases, all porous materials, or compositions outside the training distribution as equally applicable.[90] [92]
- **Data / maintenance caveat:** GoldDAC is an ASE-compatible XYZ file inside the **general project data directory**, containing energy and force labels and explicitly designed for MLFF fine-tuning, but without a separate license; MACE-DAC-1 is likewise a model file within the general project. The official release/PyPI is 0.0.3, the main branch has later commits, and there is no SLA or commitment to future versions.[93] [94] [95] [96] [97]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General project repository | <https://github.com/hspark1212/DAC-SIM> [88] | Entry point to the program, assets, and usage. |
| License text | <https://github.com/hspark1212/DAC-SIM/blob/main/LICENSE> [89] | MIT code license. |
| General official documentation | <https://hspark1212.github.io/DAC-SIM/0_introduction/introduction.html> [90] | Tool positioning and scope of MOF molecular simulation. |
| General official documentation (Widom) | <https://hspark1212.github.io/DAC-SIM/1_molecular_simulation/widom_insertion.html> [91] | Henry coefficient, interaction energy, and heat of adsorption workflow. |
| Original paper (publisher DOI) | <https://doi.org/10.1016/j.matt.2025.102203> [92] | Method of DAC-SIM/MACE-DAC and MOF screening. |
| General project data directory | <https://github.com/hspark1212/DAC-SIM/blob/main/assets/GoldDAC/README.md> [93] | GoldDAC splits and data fields; separate license not confirmed. |
| General project model directory | <https://github.com/hspark1212/DAC-SIM/blob/main/dac_sim/models/README.md> [94] | MACE-DAC-1 model card; separate terms not confirmed. |
| Maintenance evidence | <https://github.com/hspark1212/DAC-SIM/commits/main/> [95] | Last visible commit. |
| Code release | <https://api.github.com/repos/hspark1212/DAC-SIM/releases> [96] | Check of the v0.0.3 release. |
| Package release | <https://pypi.org/pypi/dac-sim/json> [97] | PyPI version metadata. |
| Publisher SI | <https://www.cell.com/cms/10.1016/j.matt.2025.102203/attachment/b7bcd583-b6ff-46cd-bc3b-450db116ec77/mmc1.pdf> [98] | Matter Document S1. |

### CoRE MOF DB

- **ID / type:** `core-mof-db`; computation-ready experimental MOF database.[99] [100] [101]
- **Required caveat:** The public CC BY 4.0 covers what Zenodo calls the 2025 public SI subset, which is not equivalent to the full CoRE MOF DB. In the full database the conditions for obtaining CSD modified/unmodified structures differ, and the unmodified CIFs explicitly require a CCDC license.[99] [100]
- **Display scope:** Experimentally reported MOF CIFs, CR/NCR, the ASR/FSR/Ion classification, and the verified fields for pores, topology, open metal sites, MOFid, RAC, PACMAN DDEC6, heat capacity, stability, and GEMC hydrophobicity classification may be presented; it must not be claimed to have public synthesis condition data or a REST API.[99] [100] [101]
- **Data quality caveat:** The official sources have different versions/cutoffs and counts: the 2024 full database and the 2025 Zenodo public SI cannot be mixed. ASR and FSR overlap, and the database also contains NCR and error flags; training or statistics require a fixed version, filtering rules, and a deduplication strategy.[99] [100]
- **Tool distinction:** CoRE MOF Tools is a separately licensed toolkit; its public code does not change the rights status of the individual data files and the restricted CSD structures.[103]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General official database website | <https://mof-db.pusan.ac.kr> [99] | Entry point to the full-database classification, scope, and data sources. |
| Data repository / versioned public SI | <https://zenodo.org/records/15621349> [100] | 2025 public SI, CC BY 4.0, files, and versions. |
| Original / related paper (publisher) | <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3> [101] | CoRE MOF DB paper and supplementary material entry point. |
| Bibliographic metadata | <https://api.crossref.org/works/10.1016/j.matt.2025.102140> [102] | Check of DOI/title. |
| General project repository | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools> [103] | Toolkit; not substitute evidence for the database license. |
| Legal text of the license | <https://creativecommons.org/licenses/by/4.0/legalcode> [104] | CC BY 4.0 terms labeled on the Zenodo public SI. |

### Materials Project MOF Explorer

- **ID / type:** `materials-project-mof-explorer`; QMOF-based MOF database search portal.[105] [109] [111]
- **Required caveat:** What has been verified is that the underlying QMOF data are CC BY 4.0 and the QMOF code is MIT; no official open-source repository for the MOF Explorer web front end itself was found, and the entire front end must not be described as MIT open source.[105] [109] [110]
- **Display scope:** It may be presented as an interactive search portal for QMOF, supporting exploration of structures, pores, and DFT properties, with links to download locations such as the MPContribs API/NOMAD/Globus. The structures include experimental and hypothetical MOFs and may also include entries better called coordination polymers; filtering must use the source and the `synthesized` flag.[105] [107] [108] [109]
- **Property / rerun caveat:** PBE band gaps typically underestimate experimental values, and HSE06 is available only for some QMOF structures; the two cannot be mixed under one quality label. A CC BY 4.0 data release does not mean that rerunning the calculations is entirely unrestricted: the formal paper points out that VASP is an exception to code availability.[105] [110] [111]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General official documentation / portal description | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer> [105] | Purpose and property description of the MOF Explorer. |
| General official documentation (citation) | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/how-to-cite> [106] | Suggested citations and data relationships. |
| General official documentation (download) | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data> [107] | Access instructions for QMOF, MPContribs, and NOMAD/Globus. |
| General official documentation (structure sources) | <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/structure-details/structure-sources> [108] | Boundary between experimental/hypothetical structures and structure sources. |
| Data repository | <https://figshare.com/articles/dataset/QMOF_Database/13147324> [109] | Underlying QMOF CC BY 4.0 data release. |
| General project repository | <https://github.com/Andrew-S-Rosen/QMOF> [110] | Underlying QMOF MIT code; not evidence of front-end source code. |
| Related paper (publisher) | <https://www.nature.com/articles/s41524-022-00796-6> [111] | Paper on electronic properties, ML, and data exploration. |
| Calculation data repository | <https://dx.doi.org/10.17172/NOMAD/2021.10.10-1> [112] | Storage location of the PBE VASP input/output. |
| Dataset DOI record | <https://doi.org/10.17188/mpcontribs/1883597> [113] | MOF Explorer backend dataset record. |

### Crystallography Open Database (COD)

- **ID / type:** `crystallography-open-database-cod`; open crystal structure database.[114] [119]
- **Required caveat:** COD includes metal-organic compounds, but it is not a MOF-specific or annotated database; MOF coverage, the definition of a MOF subset, and the desolvated/activated state are all unconfirmed. It cannot be used as a standardized MOF pore, adsorption, property, or synthesis database.[114] [115] [116]
- **Display scope:** It may be presented that the COD data and the database itself are CC0 1.0, and that it offers CIF, some HKL/Fobs, single-entry and batch downloads, anonymous SVN, rsync, read-only MySQL, REST, and OPTIMADE. This CC0 evidence does not extend to the website/tool code, whose separate software license is unconfirmed.[114] [115] [117] [122]
- **Data quality / operation caveat:** The API may contain quality/status fields such as warnings, errors, and retracted; filter first by status, duplicate/optimal, coordinates, and experimental conditions. The HTTP whole-database archive may lag behind the daily updates; the OPTIMADE endpoint is available, but the original verification result records that the provider dashboard once showed timeout/format validation problems, so bulk use should be tested, retried, and snapshots retained.[115] [116] [118]
- **Training use:** To the extent of the CC0 for the COD data and database, ML training, derivative works, redistribution, and commercial use are permitted; the authors of the original structure data should still be acknowledged, and a structure database that is not MOF-specific cannot be used directly as a MOF property-labeled set.[114] [122]

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| General official database website | <https://www.crystallography.net/cod/> [114] | CC0, database scope, maintenance status, and single-entry data entry point. |
| General official access guide | <https://wiki.crystallography.net/howtoobtaincod/> [115] | Boundaries of SVN, rsync, snapshots, and batch retrieval. |
| General official query guide | <https://wiki.crystallography.net/howtoquerycod/> [116] | Web, SQL/REST, and field/quality information. |
| General official search page | <https://www.crystallography.net/cod/search.php> [117] | Search methods and scope of substructure search. |
| Official structure API | <https://www.crystallography.net/cod/optimade/v1/info> [118] | OPTIMADE `/info`, endpoints, and version. |
| Original paper (publisher) | <https://journals.iucr.org/j/issues/2009/04/00/kk5039/> [119] | Original COD paper and DOI. |
| Platform paper (publisher) | <https://academic.oup.com/nar/article/40/D1/D420/2903497> [120] | Data access and platform description. |
| Validation paper (publisher) | <https://journals.iucr.org/j/issues/2021/02/00/yr5065/> [121] | COD validation and quality context. |
| Legal text of the license | <https://creativecommons.org/publicdomain/zero/1.0/> [122] | Statement of CC0 1.0 data/database rights. |

### RASPA3

- **ID / type:** `raspa3`; Software / Gas adsorption and separation. A classical molecular simulation code rewritten from scratch in C++23, using force-field Monte Carlo and molecular dynamics for adsorption and diffusion in nanoporous materials and for thermodynamic and transport properties of fluids. It succeeds RASPA2.
- **Display decision:** Display with caveats. The official repository, LICENSE.md (full MIT text) and the J. Chem. Phys. paper were verified. The README and abstract do not use the term MOF to define the target materials.
- **MOF applicability:** Indirectly confirmed only. The paper and README target nanoporous materials, and rigid frameworks and framework grids match MOF adsorption work, but neither the README nor the abstract uses the word MOF, and MOF examples in the project documentation were not confirmed.
- **License and status:** MIT License (code; LICENSE.md lists Dubbeldam, Calero, Vlugt and Snurr as copyright holders). Last push 2026-10-06 (GitHub API). The README shows a release-workflow badge; the release list itself was not checked.
- **Required caveats:**
  - The README and abstract do not name MOFs; check the source of force fields and framework charges yourself before using it for MOFs.
  - The README marks several features (flexible frameworks, reaction ensembles and others) as Experimental; treat them as immature.
  - The GitHub API reports NOASSERTION for the license field. The MIT text in LICENSE.md governs, and the paper abstract also states the code is released under the MIT license.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/iRASPA/RASPA3> | RASPA3 official repository |
| Official source | <https://iRASPA.github.io/RASPA3> | RASPA3 official repository |
| License text | <https://raw.githubusercontent.com/iRASPA/RASPA3/main/LICENSE.md> | MIT License (code; LICENSE.md lists Dubbeldam, Calero, Vlugt and Snurr as copyright holders) |
| Original paper (publisher DOI) | <https://doi.org/10.1063/5.0226249> | RASPA3: A Monte Carlo code for computing adsorption and diffusion in nanoporous materials and thermodynamics properties of fluids (DOI 10.1063/5.0226249) |
| Official documentation | <https://iRASPA.github.io/RASPA3> | RASPA3 documentation: Public; Usage notes and examples |
| Code release | <https://github.com/iRASPA/RASPA3/releases> | RASPA3 GitHub Releases: Public; Versioned source and build assets |


### MOSAEC

- **ID / type:** `mosaec`; Software / Structure processing and pore analysis. An algorithm that detects chemically invalid crystal structures (MOFs, coordination polymers and others) in CIF or MOL2 files by analyzing metal oxidation states, and outputs the oxidation state and error flags for each metal site.
- **Display decision:** Display with caveats. The official repository, GPL-3.0 LICENSE and JACS paper were verified. The code depends on the licensed CCDC CSD Python API.
- **MOF applicability:** Directly applicable. The README states validation was mainly performed on MOF structures; the method itself applies to metal-containing CIF or MOL2 files.
- **License and status:** GNU GPL v3.0 (code). Last push 2025-04-11 (GitHub API), about 18 months before the verification date; treat updates as slowing.
- **Required caveats:**
  - Requires a separately installed and licensed CSD Python API (CCDC); it cannot be run without that license.
  - GPL-3.0 is copyleft; distributing derivative works must follow that license.
  - Per the README, the electron-count output is experimental and not validated, and is not recommended for use.
  - The ChemRxiv preprint cited in the README has a different title from the published JACS paper; whether they are the same work was not checked item by item.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/uowoolab/MOSAEC> | MOSAEC official repository |
| License text | <https://raw.githubusercontent.com/uowoolab/MOSAEC/main/LICENSE> | GNU GPL v3.0 (code) |
| Original paper (publisher DOI) | <https://doi.org/10.1021/jacs.5c04914> | High Structural Error Rates in “Computation-Ready” MOF Databases Discovered by Checking Metal Oxidation States (DOI 10.1021/jacs.5c04914) |
| Original paper | <https://doi.org/10.1039/D4SC07438F> | MOSAEC-DB (Chemical Science): Publisher page; open-access status not confirmed; Paper on a database of experimental MOFs screened with MOSAEC |
| Original paper | <https://doi.org/10.26434/chemrxiv-2024-ftsv3> | ChemRxiv preprint (cited in the README): Preprint; Its title differs from the JACS version; the relationship between the two was not confirmed |


### MOFChecker (mofchecker)

- **ID / type:** `mofchecker`; Software / Structure processing and pore analysis. A Python package for quick sanity checks on MOF crystal structures: missing elements, overlapping atoms, overvalent atoms, likely missing hydrogens, unusual EQeq charges, floating molecules and structure-graph hashes.
- **Display decision:** Display with caveats. The official repository and MIT LICENSE were verified. No paper that can be confirmed to belong to this repository was found, so no paper is listed.
- **MOF applicability:** Directly applicable. The README states the purpose is quick sanity checks on MOF crystal structures and says it only weeds out clearly unreasonable structures.
- **License and status:** MIT License (code). Last push 2026-07-06 (GitHub API); the README provides a PyPI package and Read the Docs documentation.
- **Required caveats:**
  - The README describes the checks as "nothing too fancy"; passing them does not mean a structure is chemically correct.
  - No dedicated paper was confirmed. A Digital Discovery 2025 paper with the same name, "MOFChecker: a package for validating and correcting metal–organic framework (MOF) structures" (doi 10.1039/d5dd00109a), lists Jablonka among its Crossref authors, but it could not be confirmed that its code is this repository, so it is not listed as this project's paper.
  - The name is easy to confuse with other tools; confirm which repository and version you use before citing.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/lamalab-org/mofchecker> | mofchecker official repository |
| Official source | <https://mofchecker.readthedocs.io/en/latest/> | mofchecker official repository |
| License text | <https://raw.githubusercontent.com/lamalab-org/mofchecker/main/LICENSE> | MIT License (code) |
| Official documentation | <https://mofchecker.readthedocs.io/en/latest/> | mofchecker documentation: Public; Usage notes |
| Code release | <https://pypi.org/project/mofchecker> | PyPI package page: Public; Stable release package |


### AuToGraFS

- **ID / type:** `autografs`; Software / Structure processing and pore analysis. A Python tool that maps molecular building blocks (SBUs) onto topological blueprints (nets) to generate MOFs, COFs and other periodic frameworks, and that can run in reverse to deconstruct a structure into building blocks and identify its net.
- **Display decision:** Display with caveats. The official repository and the J. Phys. Chem. A paper were verified. The three license-related files in the repository are mutually inconsistent, so the license status cannot be reduced to one conclusion.
- **MOF applicability:** Directly applicable. The README and the paper both center on MOF generation and use MOF-5 as the example.
- **License and status:** License files disagree: the README says MIT; LICENSE.txt is an LGPL 2.1-or-later notice; COPYING is the full GPL v2 text; COPYING.LESSER is the full LGPL v2.1 text. Last push 2026-09-02 (GitHub API); the README describes version 3 as a ground-up rewrite, and the PyPI package is named AuToGraFS.
- **Required caveats:**
  - The license is inconsistent: the README and LICENSE.txt state different terms (MIT versus LGPL 2.1-or-later), and a full GPL v2 text is also present. This entry does not pick one; confirm with the authors before use or redistribution.
  - The GitHub API reports NOASSERTION for the license field.
  - The bundled building-block library is converted from PORMAKE (MIT); the repository also includes PORMAKE_LICENSE.md.
  - Generated structures are not guaranteed to be synthesizable.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/DCoupry/autografs> | AuToGraFS official repository |
| License text | <https://raw.githubusercontent.com/DCoupry/autografs/master/LICENSE.txt> | License files disagree: the README says MIT; LICENSE.txt is an LGPL 2.1-or-later notice; COPYING is the full GPL v2 text; COPYING.LESSER is the full LGPL v2.1 text |
| Original paper (publisher DOI) | <https://doi.org/10.1021/jp507643v> | AuToGraFS: Automatic Topological Generator for Framework Structures (DOI 10.1021/jp507643v) |
| Official documentation | <https://raw.githubusercontent.com/DCoupry/autografs/master/LICENSE.txt> | LICENSE.txt (LGPL notice): Public; License notice |
| Official documentation | <https://raw.githubusercontent.com/DCoupry/autografs/master/COPYING> | COPYING (GPL v2 full text): Public; Full license text |
| Official documentation | <https://raw.githubusercontent.com/DCoupry/autografs/master/COPYING.LESSER> | COPYING.LESSER (LGPL v2.1 full text): Public; Full license text |


### ToBaCCo 3.0

- **ID / type:** `tobacco-3`; Software / Structure processing and pore analysis. The Topologically Based Crystal Constructor: generates CIF files of porous crystals (including MOFs) from topologies and molecular building blocks, for molecular simulation or materials characterization.
- **Display decision:** Display with caveats. The official repository and GPL-3.0 LICENSE were verified. The README cites no paper; the paper listed is inferred from authors and content, not declared by the repository.
- **MOF applicability:** Directly applicable. The README and the listed paper both target MOF and porous crystal construction.
- **License and status:** GNU GPL v3.0 (code). Last push 2021-04-07 (GitHub API), more than five years without updates; the README environment was tested on Python 2.7 and 3.7 / 3.8.
- **Required caveats:**
  - About five years without updates; the README environment was tested only up to Python 3.7 / 3.8, and whether current dependencies work was not confirmed.
  - The README cites no paper; the paper listed is inferred from authors and subject.
  - GPL-3.0 is copyleft.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/tobacco-mofs/tobacco_3.0> | ToBaCCo 3.0 official repository |
| License text | <https://raw.githubusercontent.com/tobacco-mofs/tobacco_3.0/master/LICENSE> | GNU GPL v3.0 (code) |
| Original paper (publisher DOI) | <https://doi.org/10.1021/acs.cgd.7b00848> | Topologically Guided, Automated Construction of Metal–Organic Frameworks and Their Evaluation for Energy-Related Applications (DOI 10.1021/acs.cgd.7b00848) |
| Original paper | <https://doi.org/10.1039/c8ce01637b> | Increasing topological diversity during computational “synthesis” of porous crystals: how and why (CrystEngComm 2019): Publisher page; open-access status not confirmed; Topological-diversity paper by the same authors (Anderson, Gomez-Gualdron); whether it is the publication for version 3.0 was not confirmed |
| Official documentation | <https://github.com/tobacco-mofs/tobacco_3.0> | tobacco_3.0 GitHub (includes ToBaCCo_manual.pdf): Public; The README says a user manual PDF is included |


### lammps_interface

- **ID / type:** `lammps-interface`; Software / Molecular simulation and thermodynamics. A Python tool that converts CIF structures into LAMMPS simulation input files (UFF parameters by default) for molecular dynamics of MOFs.
- **Display decision:** Display with caveats. The official repository, MIT LICENSE and paper were verified. The README states the package is currently unmaintained.
- **MOF applicability:** Directly applicable. The repository description and the cited paper both take MOFs as the subject.
- **License and status:** MIT License (code). The README opens by stating the package is currently unmaintained (see issue #61 for a call for maintainers); last push 2023-05-24 (GitHub API).
- **Required caveats:**
  - Unmaintained; compatibility with current LAMMPS versions was not confirmed.
  - The default is the generic UFF force field, whose accuracy for a specific MOF must be verified by the user.
  - CIF files must first be converted to P1 symmetry.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/peteboyd/lammps_interface> | lammps_interface official repository |
| Official source | <https://lammps-interface.readthedocs.io/> | lammps_interface official repository |
| License text | <https://raw.githubusercontent.com/peteboyd/lammps_interface/master/LICENSE> | MIT License (code) |
| Original paper (publisher DOI) | <https://doi.org/10.1021/acs.jpclett.6b02532> | Force-Field Prediction of Materials Properties in Metal-Organic Frameworks (DOI 10.1021/acs.jpclett.6b02532) |
| Official documentation | <https://lammps-interface.readthedocs.io/> | lammps-interface documentation: Public; Usage notes |
| Official documentation | <https://github.com/peteboyd/lammps_interface/issues/61> | Call for maintainers, issue #61: Public; Maintenance status |


### mofstructure

- **ID / type:** `mofstructure`; Software / Structure processing and pore analysis. A Python package that deconstructs MOFs, COFs or cages into building units, computes porosity, removes unbound guests and outputs cheminformatics data for building units; the README also describes net identification.
- **Display decision:** Display with caveats. The official repository was verified. The LICENSE file contains two different license texts. The preprint the README designates for citation was not used as this tool's paper, so no paper is listed.
- **MOF applicability:** Directly applicable. The README centers on MOF deconstruction and porosity analysis.
- **License and status:** README and badge state MIT; but the LICENSE file contains the full MIT text (copyright 2023 bafgreat) followed by the full Apache License 2.0 text. Last push 2026-10-05 (GitHub API); active.
- **Required caveats:**
  - The license is not clear: the LICENSE file concatenates full MIT and Apache-2.0 texts while the README says only MIT; the GitHub API reports NOASSERTION. Confirm with the author before use or redistribution.
  - The README asks for citation of the FAIR-MOFs preprint (Research Square, doi 10.21203/rs.3.rs-8375247/v1), which is about inferring synthesis conditions from structure and is not this tool's methods paper; no dedicated paper was found.
  - Some functions are connectivity heuristics, and results need manual checking.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/bafgreat/mofstructure> | mofstructure official repository |
| License text | <https://raw.githubusercontent.com/bafgreat/mofstructure/main/LICENSE> | README and badge state MIT; but the LICENSE file contains the full MIT text (copyright 2023 bafgreat) followed by the full Apache License 2.0 text |
| Official documentation | <https://github.com/bafgreat/mofstructure> | mofstructure README: Public; Feature table and command examples |


### MOFTransformer / PMTransformer

- **ID / type:** `moftransformer`; Software / Machine learning and data. A multi-modal pretrained Transformer for transfer learning of porous-material properties. From version 2.0.0 the default pretrained model is PMTransformer (covering MOFs and other porous materials), and MOFTransformer is retained.
- **Display decision:** Display with caveats. The official repository, MIT license, Nature Machine Intelligence paper and the Figshare pretrained weights were verified.
- **MOF applicability:** Directly applicable. The paper title targets MOFs; PMTransformer also covers COFs, PPNs and zeolites.
- **License and status:** MIT License (code); the Figshare pretrained-weights record is labelled CC BY 4.0. Last push 2026-05-23 (GitHub API); the README documents version 2.2.0.
- **Required caveats:**
  - Each weights file is about 1 GB and must be downloaded separately.
  - The Figshare records carry different license labels (CC BY 4.0, MIT); cite and follow the terms of the specific record you reuse.
  - Hypothetical pretraining structures are not guaranteed to be synthesizable.
  - The README test environment is mainly Linux.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/hspark1212/MOFTransformer> | MOFTransformer official repository |
| Official source | <https://hspark1212.github.io/MOFTransformer/index.html> | MOFTransformer official repository |
| License text | <https://raw.githubusercontent.com/hspark1212/MOFTransformer/master/LICENSE> | MIT License (code); the Figshare pretrained-weights record is labelled CC BY 4.0 |
| Original paper (publisher DOI) | <https://doi.org/10.1038/s42256-023-00628-2> | A multi-modal pre-training transformer for universal transfer learning in metal–organic frameworks (DOI 10.1038/s42256-023-00628-2) |
| Data repository | <https://doi.org/10.6084/m9.figshare.22698655> | PMTransformer pretrained models (Figshare): Public, CC BY 4.0; pmtransformer.ckpt, moftransformer.ckpt (about 1 GB each) and jsons.zip |
| Data repository | <https://doi.org/10.6084/m9.figshare.21155506> | MOFTransformer data and fine-tuned weights (Figshare v2): Public; the record is labelled MIT; Downstream data such as CoRE MOF and QMOF, and fine-tuned checkpoints |
| Official documentation | <https://hspark1212.github.io/MOFTransformer/index.html> | MOFTransformer documentation: Public; Installation and training tutorials |


### MOFormer

- **ID / type:** `moformer`; Software / Machine learning and data. A self-supervised Transformer that takes MOFid strings as input, without three-dimensional structure, for MOF property prediction; it is pretrained jointly with a structure-based CGCNN in a Barlow Twins fashion.
- **Display decision:** Display with caveats. The official repository, Apache-2.0 license and JACS paper were verified. The data are aggregated from several third-party databases.
- **MOF applicability:** Directly applicable. The paper and README both target MOF property prediction.
- **License and status:** Apache License 2.0 (code); the Figshare pretraining-data record is labelled MIT. Last push 2026-07-02 (GitHub API); the README says the authors have graduated but monitor GitHub issues regularly.
- **Required caveats:**
  - The Figshare record is labelled MIT, yet its description also requires citing each original dataset; the actual reuse terms of the aggregated data were not confirmed.
  - Input is the MOFid; whether structures a MOFid cannot represent (for example some with guests or unusual connectivity) can be handled was not confirmed.
  - The authors have left the original institution, so maintenance depends on issue responses.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/zcao0420/MOFormer> | MOFormer official repository |
| License text | <https://raw.githubusercontent.com/zcao0420/MOFormer/main/LICENSE> | Apache License 2.0 (code); the Figshare pretraining-data record is labelled MIT |
| Original paper (publisher DOI) | <https://doi.org/10.1021/jacs.2c11420> | MOFormer: Self-Supervised Transformer Model for Metal–Organic Framework Property Prediction (DOI 10.1021/jacs.2c11420) |
| Data repository | <https://doi.org/10.6084/m9.figshare.23532918> | MOFormer pretraining data (Figshare): Public; the record is labelled MIT; cif.tar.xz, about 1.15 GB; the record description says it aggregates several public datasets and the original datasets must be cited |
| Original paper | <https://arxiv.org/abs/2210.14188> | arXiv preprint: Public; Preprint full text |


### MOFSimplify

- **ID / type:** `mofsimplify`; Software / Machine learning and data. A website, with its source code, that predicts MOF stability (activation and thermal stability) and related properties; the models are trained on stability data extracted from the literature.
- **Display decision:** Display with caveats. The official repository, MIT LICENSE and both papers were verified. The backend code connects to the authors' MongoDB when run locally; users without access must comment it out.
- **MOF applicability:** Directly applicable. Both papers address MOF stability prediction.
- **License and status:** MIT License (code). Last push 2025-10-24 (GitHub API); the README test environment is Python 3.8.5 and 2021 browser versions, and whether the website currently works was not tested.
- **Required caveats:**
  - Local runs connect to MongoDB; without access you must comment out that code, so the full functionality cannot be self-hosted.
  - The license and download location of the training data were not confirmed.
  - Licenses of dependencies such as molSimplify were not checked individually.
  - The quality of user-submitted feedback data was not confirmed.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/hjkgrp/MOFSimplify> | MOFSimplify official repository |
| Official source | <https://mofsimplify.mit.edu/> | MOFSimplify official repository |
| License text | <https://raw.githubusercontent.com/hjkgrp/MOFSimplify/main/LICENSE> | MIT License (code) |
| Original paper (publisher DOI) | <https://doi.org/10.1038/s41597-022-01181-0> | MOFSimplify, machine learning models with extracted stability data of three thousand metal–organic frameworks (DOI 10.1038/s41597-022-01181-0) |
| Original paper | <https://doi.org/10.1021/jacs.1c07217> | JACS 2021: Using Machine Learning and Data Mining to Leverage Community Knowledge for the Engineering of Stable Metal–Organic Frameworks: Publisher page; open-access status not confirmed; Detailed description of the models on the website |
| Data service / API | <https://mofsimplify.mit.edu/> | MOFSimplify website: Public website; Prediction and community feedback interface |


### MOFFlow

- **ID / type:** `mofflow`; Software / Machine learning and data. A generative model using flow matching for MOF structure prediction: given the building blocks, it predicts their arrangement in the unit cell.
- **Display decision:** Display with caveats. The official repository, MIT license and the Zenodo data / checkpoints (CC BY 4.0) were verified. The paper is an ICLR 2025 paper that Crossref does not index, so the DOI used is the arXiv DataCite record.
- **MOF applicability:** Directly applicable. The title and README both target MOF structure prediction.
- **License and status:** MIT License (code); the Zenodo data and checkpoints are CC BY 4.0. Last push 2025-08-28 (GitHub API); releases were not checked individually.
- **Required caveats:**
  - The DOI in this entry is the arXiv preprint, not an ICLR publisher DOI.
  - Research code; predicted structures have not been experimentally verified.
  - The paper's main experiments and the batch version recommended in the README are different implementations (timebatch versus batch); reproducing paper numbers requires switching branches.
  - MOFDiff and zeo++ must be installed separately.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/nayoung10/MOFFlow> | MOFFlow official repository |
| License text | <https://raw.githubusercontent.com/nayoung10/MOFFlow/main/LICENSE> | MIT License (code); the Zenodo data and checkpoints are CC BY 4.0 |
| Original paper (publisher DOI) | <https://arxiv.org/abs/2410.17270> | MOFFlow: Flow Matching for Structure Prediction of Metal-Organic Frameworks (DOI 10.48550/arXiv.2410.17270) |
| Data repository | <https://zenodo.org/records/15187230> | MOFFlow data and checkpoints (Zenodo): Public, CC BY 4.0; Processed train / val / test files and batch and timebatch checkpoints |
| Original paper | <https://openreview.net/forum?id=dNT3abOsLo> | ICLR 2025 paper page (OpenReview, cited in the README): Public; Conference paper page |


### ChatMOF

- **ID / type:** `chatmof`; Software / Machine learning and data. An AI system that uses large language models (the README lists GPT-4 and GPT-3.5-turbo variants) to extract requests from text and perform MOF data lookup, property prediction and structure generation.
- **Display decision:** Display with caveats. The official repository, MIT license, Nature Communications paper and Figshare database were verified. Running it requires the OpenAI API.
- **MOF applicability:** Directly applicable. The paper and README both target MOF prediction and generation.
- **License and status:** MIT License (code); the Figshare database and Zenodo release are labelled CC BY 4.0. Last push 2025-05-15 (GitHub API), about 17 months before the verification date; the README documents version 0.2.0.
- **Required caveats:**
  - Requires the OpenAI API (paid, external service); results vary with the model version and are not fully reproducible.
  - Mainly tested on Linux; a torch and moftransformer dependency conflict may require downgrading.
  - Language-model output can be wrong; verify predicted values with simulation or experiment.
  - The last push was about 17 months ago, so recent maintenance activity is limited.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/Yeonghun1675/ChatMOF> | ChatMOF official repository |
| License text | <https://raw.githubusercontent.com/Yeonghun1675/ChatMOF/master/LICENSE> | MIT License (code); the Figshare database and Zenodo release are labelled CC BY 4.0 |
| Original paper (publisher DOI) | <https://doi.org/10.1038/s41467-024-48998-4> | ChatMOF: an artificial intelligence system for predicting and generating metal-organic frameworks using large language models (DOI 10.1038/s41467-024-48998-4) |
| Data repository | <https://doi.org/10.6084/m9.figshare.24287731> | Database for ChatMOF (Figshare): Public, CC BY 4.0; tables.zip, coremof.zip, hMOF.zip (hMOF about 1.8 GB) |


### L2M3 (Large Language Models Material Miner)

- **ID / type:** `l2m3`; Software / Machine learning and data. Uses several language-model agents (categorization, inclusion, extraction) to extract experimental MOF data (properties and synthesis conditions) from the text and tables of the scientific literature, and outputs structured JSON.
- **Display decision:** Display with caveats. The official repository, MIT license, JACS paper and Figshare database were verified. Running it requires the OpenAI API, and the database is text-mined from publications.
- **MOF applicability:** Directly applicable. The README and paper both target collecting MOF data from the literature.
- **License and status:** MIT License (code); the Figshare database record is labelled MIT. Last push 2026-03-21 (GitHub API).
- **Required caveats:**
  - Requires your own OpenAI API key (paid, external service); extraction results vary with the model version.
  - The database is extracted from publications and the Figshare record is labelled MIT, but whether publishers' rights in the text affect reuse was not confirmed.
  - Extraction can contain errors and should be spot-checked before use; the error rate was not verified here.
  - Paper crawling must follow each publisher's terms.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/Yeonghun1675/L2M3> | L2M3 official repository |
| License text | <https://raw.githubusercontent.com/Yeonghun1675/L2M3/master/LICENSE> | MIT License (code); the Figshare database record is labelled MIT |
| Original paper (publisher DOI) | <https://doi.org/10.1021/jacs.4c11085> | Harnessing Large Language Models to Collect and Analyze Metal–Organic Framework Property Data Set (DOI 10.1021/jacs.4c11085) |
| Data repository | <https://doi.org/10.6084/m9.figshare.27187917> | L2M3 Database (Figshare): Public; the record is labelled MIT; Synthesis and application extraction JSON files split by publisher (ACS, Elsevier, RSC, Springer) |


### GHP-MOFassemble

- **ID / type:** `ghp-mofassemble`; Software / Carbon capture / DAC. A carbon-capture MOF design workflow combining a diffusion model (DiffLinker) for linker generation, assembly into pcu-topology MOFs, CGCNN prediction of CO2 capacity and molecular dynamics screening.
- **Display decision:** Display with caveats. The official repository and the Communications Chemistry paper were verified. The license file LICENSE-CC-BY is the full CC BY 4.0 text applied to code, which is an unusual license choice.
- **MOF applicability:** Directly applicable. The paper and README both target MOF design for carbon capture.
- **License and status:** CC BY 4.0 (the README says the framework is released under CC BY 4.0; the license file is LICENSE-CC-BY). Last push 2024-04-04 (GitHub API), about 2.5 years ago; treat as archival research code.
- **Required caveats:**
  - About 2.5 years without updates; dependencies are listed only in a notebook.
  - Creative Commons licenses are generally not recommended for software by Creative Commons itself; evaluate their implications for code (for example patent and trademark terms) yourself, and ask the authors if needed.
  - Predicted structures and capacities are computational results and have not been experimentally verified.
  - Crossref records the paper as published in 2024 (volume 7, article 21); the README says 2023, so the publisher record is used.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/hyunp2/ghp_mof> | GHP-MOFassemble official repository |
| License text | <https://raw.githubusercontent.com/hyunp2/ghp_mof/main/LICENSE-CC-BY> | CC BY 4.0 (the README says the framework is released under CC BY 4.0; the license file is LICENSE-CC-BY) |
| Original paper (publisher DOI) | <https://doi.org/10.1038/s42004-023-01090-2> | A generative artificial intelligence framework based on a molecular diffusion model for the design of metal-organic frameworks for carbon capture (DOI 10.1038/s42004-023-01090-2) |
| Official documentation | <https://raw.githubusercontent.com/hyunp2/ghp_mof/main/LICENSE-CC-BY> | LICENSE-CC-BY (full CC BY 4.0 text): Public; Full license text |


### MOF Literature Extraction (SynMOF)

- **ID / type:** `synmof-literature-extraction`; Software / Machine learning and data. Code that automatically extracts MOF synthesis information from the literature: Node.js handles publication downloading and Python handles literature extraction; the machine learning training code is in a separate repository.
- **Display decision:** Display with caveats. The official repository and MIT LICENSE were verified. The paper was confirmed by matching the title and authors listed in the README against Crossref.
- **MOF applicability:** Directly applicable. The paper title and README both target MOF synthesis prediction.
- **License and status:** MIT License (code). Last push 2021-08-03 (GitHub API), more than five years without updates.
- **Required caveats:**
  - About five years without updates; publisher website changes may break downloading and extraction, which was not tested.
  - The README is minimal and gives no installation requirements, dependencies or usage instructions.
  - The data derive from publications and their reuse terms are not stated.
  - The README gives no DOI for the paper; the paper was matched by title and authors through Crossref.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/Tsotsalas-Group/MOF_Literature_Extraction> | MOF Literature Extraction official repository |
| License text | <https://raw.githubusercontent.com/Tsotsalas-Group/MOF_Literature_Extraction/main/LICENSE> | MIT License (code) |
| Original paper (publisher DOI) | <https://doi.org/10.1002/anie.202200242> | MOF Synthesis Prediction Enabled by Automatic Data Mining and Machine Learning (DOI 10.1002/anie.202200242) |
| Code release | <https://github.com/aimat-lab/MOF_Synthesis_Prediction> | MOF_Synthesis_Prediction (machine learning model repository): Public; Per the README, training code for the synthesis prediction models; its license and contents were not checked |


### ARC-MOF

- **ID / type:** `arc-mof`; Database / Machine learning and data. A database of about 280,000 MOFs described on Zenodo as "experimentally characterized or computationally generated"; per the record, DFT-derived REPEAT charges, adsorption data and descriptors are provided for all MOFs.
- **Display decision:** Display with caveats. Zenodo record (v7, 2025-08), CC BY 4.0 and the Chem. Mater. paper are verified; license terms of the upstream structure sources are not itemized in the record.
- **MOF applicability:** Directly MOF-focused. The record says it spans all publicly available MOF databases and mixes experimental and computationally generated structures, which must be separated by the user.
- **License and status:** Data: CC BY 4.0 (as stated on the Zenodo record). The Zenodo version history runs v2 to v7 (v7 added dimensionality, published 2025-08); whether it is updated further is not confirmed.
- **Required caveats:**
  - The Zenodo concept DOI is 10.5281/zenodo.6908727; 10.5281/zenodo.16802743 is the version DOI of v7. Record the version when citing.
  - The record applies CC BY 4.0 as a whole but does not itemize redistribution terms of upstream structures (including any derived from the CSD); whether CSD-derived content is included is not confirmed.
  - Versions differ in content (v5 removed erroneous structures and corrected Sm charges; v6 removed m29 structures), so results across versions are not directly comparable.
  - The preprint and the journal paper carry different licenses, and a paper license is not a data license.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Official source | <https://doi.org/10.5281/zenodo.6908727> | ARC-MOF Zenodo record |
| License text | <https://creativecommons.org/licenses/by/4.0/legalcode> | Data: CC BY 4.0 (as stated on the Zenodo record) |
| Original paper (publisher DOI) | <https://doi.org/10.1021/acs.chemmater.2c02485> | ARC–MOF: A Diverse Database of Metal-Organic Frameworks with DFT-Derived Partial Atomic Charges and Descriptors for Machine Learning (DOI 10.1021/acs.chemmater.2c02485) |
| Data repository | <https://zenodo.org/records/16802743> | ARC-MOF Zenodo latest version (v7): Open, CC BY 4.0; automated fetch of the Zenodo API was blocked (403), so contents were checked from the web page; About 7.3 GB: CIF archives, charges, descriptors, adsorption and process CSV files |
| Data repository | <https://doi.org/10.5281/zenodo.6908727> | ARC-MOF Zenodo concept DOI: Open; always resolves to the latest version (automated fetch blocked with 403; checked via DataCite); DataCite lists 16802743 as one version under this concept |
| Original paper | <https://doi.org/10.26434/chemrxiv-2022-mvr06> | ChemRxiv preprint: Preprint; Crossref lists its license as CC BY-NC-ND 4.0; Earlier manuscript; Crossref records it as is-preprint-of the Chem. Mater. paper |


### MOFX-DB

- **ID / type:** `mofx-db`; Database / Gas adsorption and separation. An online database of computational adsorption data (CIFs and isotherms) for MOFs and other nanoporous materials; the site lets users view and download CoRE MOF 2014/2019, hMOF, IZA, PCOD-syn, Tobacco and other datasets.
- **Display decision:** Display with caveats. The official site, database download page, API page and the JCED paper are verified; the site states no data license.
- **MOF applicability:** Directly relevant: it hosts MOF datasets together with non-MOF collections such as IZA zeolites and PCOD-syn, so filtering by dataset is needed.
- **License and status:** No data license stated on the site; Python client mofdb-client: MIT (as labelled on GitHub). The site shows the current database version dc8a0295db and accepts a version code to view older data; the GitHub archive repository was last pushed in 2022-12 and the client in 2023-04.
- **Required caveats:**
  - The site and API pages carry no data license or terms of use (only a citation request and a CC BY 3.0 credit for one image); do not apply the MIT license of the client to the data.
  - hMOF is the hypothetical-MOF collection of Wilmer et al. (paper DOI 10.1038/nchem.1192), hosted here as a dataset; no standalone official landing page with a stated license was found, so it has no separate record.
  - The home page lists CSD as a dataset while the download page does not; whether it contains structures restricted by CCDC licensing is not confirmed.
  - The web results table shows only the first 100 entries; use the download page or the API for bulk retrieval.
  - The datasets contain simulated isotherms, not experimental measurements.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/snurr-group/mofdb-x-archive> | MOFX-DB official website |
| Official source | <https://mof.tech.northwestern.edu/> | MOFX-DB official website |
| License text | <https://github.com/n8ta/mofdb-client> | No data license stated on the site; Python client mofdb-client: MIT (as labelled on GitHub) |
| Original paper (publisher DOI) | <https://doi.org/10.1021/acs.jced.2c00583> | MOFX-DB: An Online Database of Computational Adsorption Data for Nanoporous Materials (DOI 10.1021/acs.jced.2c00583) |
| Project data directory | <https://mof.tech.northwestern.edu/databases> | MOFX-DB database download page: Public download; no license terms seen; Whole-dataset CIF and isotherm bundles, force fields and textural properties |
| Data service / API | <https://mof.tech.northwestern.edu/api> | MOFX-DB API documentation: Public; the page documents unit headers and the /mofs.json route; Paginated JSON API and mofdb_client package usage |
| Code release | <https://github.com/n8ta/mofdb-client> | mofdb-client (Python client): Public, MIT; Python wrapper for the API |
| Data repository | <https://github.com/snurr-group/mofdb-x-archive> | mofdb-x-archive (data version archive): Public; no license labelled on GitHub; Archive of database changes, meant for reproducing other results |
| Original paper | <https://doi.org/10.1038/nchem.1192> | hMOF: Large-scale screening of hypothetical metal-organic frameworks: Paper page; publisher terms of Nature Chemistry apply; Original paper (Wilmer et al.) of the hMOF hypothetical-MOF set |


### NIST/ARPA-E Database of Novel and Emerging Adsorbent Materials

- **ID / type:** `nist-arpa-e-adsorbent-db`; Database / Gas adsorption and separation. A NIST-compiled database of adsorption isotherms for novel and emerging adsorbent materials (site title: NIST/ARPA-E Database of Novel and Emerging Adsorbent Materials); the materials are not limited to MOFs.
- **Display decision:** Display with caveats. The official site and its copyright line are verified; the site states "all rights reserved", which is not an open license, and the scope of permitted reuse is not confirmed.
- **MOF applicability:** Partly relevant. MOF-type compound names appear among the materials, but the home page does not state the share or scope of MOFs, so filtering is needed.
- **License and status:** Site states "(c)2016 copyright by the U. S. Department of Commerce on behalf of the United States of America. All rights reserved."; no separate license terms. The site opens normally; the created and updated date fields on the home page were blank in this fetch, so update frequency is not confirmed.
- **Required caveats:**
  - The copyright line says all rights reserved while the NIST general policy treats unmarked material as public; how they apply to this database is not confirmed and needs to be checked with NIST.
  - The home page does not use the term ISODB; the URL path is /isodb/, so the name is inferred from the address.
  - The page says portions of the dataset were collected with financial support from SpringerMaterials; the rights status of the underlying literature data is not confirmed.
  - The JSON endpoints respond, but the home page has no API documentation or terms; endpoint counts change with updates and are not MOF-specific figures.
  - The site carries a NIST disclaimer and does not warrant accuracy.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Official source | <https://adsorption.nist.gov/isodb/> | NIST/ARPA-E adsorbent database website |
| License text | <https://www.nist.gov/copyrights-disclaimers> | Site states "(c)2016 copyright by the U. S. Department of Commerce on behalf of the United States of America. All rights reserved."; no separate license terms |
| Official documentation | <https://www.nist.gov/copyrights-disclaimers> | NIST copyrights and disclaimers: Public; the general rule is that NIST web information not marked as copyrighted is public information; General terms; sits alongside the all-rights-reserved line of the database pages, and how the two relate is not clarified |
| Data service / API | <https://adsorption.nist.gov/isodb/api/isotherms.json> | Isotherms JSON endpoint: Retrievable without login on 2026-10-14; the home page states no API terms; About 39,988 isotherms (as returned by the endpoint) |
| Data service / API | <https://adsorption.nist.gov/isodb/api/materials.json> | Materials JSON endpoint: Retrievable without login on 2026-10-14; the home page states no API terms; About 9,328 adsorbent materials (as returned by the endpoint) |


### Materials Cloud Archive

- **ID / type:** `materials-cloud-archive`; Data retrieval portal / Machine learning and data. A repository where the computational materials science community deposits data, scripts and supplementary material and obtains a DOI; it is not MOF-specific, and the two records below are MOF-related.
- **Display decision:** Display with caveats. The official Archive pages, policy pages and two MOF records are verified; the Archive has no default data license and licenses differ per record.
- **MOF applicability:** Partly relevant. The platform covers computational materials science and MOF data must be searched record by record; only the two records below were verified.
- **License and status:** No platform default; the uploader selects a license per record. Both MOF records verified here are CC BY 4.0; platform metadata is CC BY-SA 4.0 (except email addresses). Policy states records are retained for the lifetime of the repository and at least 10 years after deposition; the records below are v1 from 2021 and 2022.
- **Required caveats:**
  - The Archive has no default license; do not extend the license of one record to the whole platform.
  - The verified record numbers are materialscloud:2021.126 and 2022.101 (URLs records/et2ts-zxh44 and records/tet5j-6fd97); records/ URLs built from 972 and 1429 returned 404 when fetched.
  - Depositing requires a login; uploaders must affirm they have the right to publish, and no copyright is transferred to the platform.
  - Both records are v1 from 2021 and 2022; whether the contained structures or results still suit current needs is for the user to judge.
  - In DataCite, yn-de and qt-cj are each listed as a version of another DOI (10.24435/materialscloud:90-4r and 10.24435/materialscloud:yr-mp); state which version is cited.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Official source | <https://archive.materialscloud.org/> | Materials Cloud Archive |
| License text | <https://archive.materialscloud.org/information> | No platform default; the uploader selects a license per record. Both MOF records verified here are CC BY 4.0; platform metadata is CC BY-SA 4.0 (except email addresses) |
| Original paper (publisher DOI) | <https://doi.org/10.1038/s41597-020-00637-5> | Materials Cloud, a platform for open computational science (DOI 10.1038/s41597-020-00637-5) |
| Data repository | <https://archive.materialscloud.org/records/et2ts-zxh44> | Diversifying databases of MOFs (materialscloud:2021.126): Open, CC BY 4.0 (record page); About 20,000 hypothetical MOFs; mof_data.tar.gz about 149 MiB (DOI 10.24435/materialscloud:yn-de) |
| Data repository | <https://archive.materialscloud.org/records/tet5j-6fd97> | Gas adsorption and process performance data for MOFs (materialscloud:2022.101): Open, CC BY 4.0 (record page); About 9.4 GiB; CO2, CH4, H2, N2, O2 isotherms, Henry coefficients and parasitic energy estimates (DOI 10.24435/materialscloud:qt-cj) |
| Official documentation | <https://www.materialscloud.org/policies> | Materials Cloud policies: Public; Licenses must be chosen by the uploader; open licenses preferred (SPDX list) |
| Official documentation | <https://archive.materialscloud.org/information> | Archive information and moderation rules: Public; Moderation, retention, withdrawal and file-size limits |
| Original paper | <https://doi.org/10.1021/acsami.1c16220> | Diversifying Databases of Metal Organic Frameworks for High-Throughput Computational Screening (companion paper): Paper page; license set by the publisher; Companion paper of the yn-de record (DataCite: IsSupplementTo) |


### Open DAC 2025 (ODAC25)

- **ID / type:** `odac25`; Database / Carbon capture / DAC. A DFT single-point dataset for screening sorbents for direct air capture (DAC): adsorption of CO2, H2O, N2 and O2 in about 15,000 MOFs, labelled with total energies and atomic forces (PBE+D3, VASP) for training machine-learned interatomic potentials.
- **Display decision:** Display with caveats. The Hugging Face dataset card and the official fairchem documentation both state CC BY 4.0 for the data; access requires accepting conditions and giving personal details; the model files carry a different license.
- **MOF applicability:** Directly MOF-focused DAC adsorption; it includes functionalized MOFs, high-energy GCMC-derived placements and synthetically generated frameworks, which should be distinguished by source.
- **License and status:** Data: CC BY 4.0; model checkpoints: FAIR Chemistry License v1 (additional restrictions, not an open license); fairchem code: MIT. arXiv preprint v2 dated 2025-09-23; the fairchem documentation marks ODAC23 as deprecated and recommends ODAC25.
- **Required caveats:**
  - The stated size is inconsistent: the fairchem documentation says about 70 million calculations while the arXiv v2 abstract says nearly 60 million; confirm by counting after download.
  - The Hugging Face page asks users to accept conditions and give name, date of birth and organization, and says this cannot be edited after submission; this is an access condition alongside CC BY 4.0.
  - Automated fetch of the Hugging Face datasets/ path returned 401; the dataset card was checked via the facebook/ODAC25 page, and the DATASET.md that holds download instructions was not found in this check.
  - Model checkpoints use the FAIR Chemistry License v1; the page says it is not offered in comprehensively sanctioned jurisdictions or in China, Russia and Belarus, so it is not an open license.
  - No peer-reviewed journal version of ODAC25 was found; only the preprint can be cited at present.
  - ODAC23 is marked deprecated and the two generations use different calculation settings, so they should not be mixed directly.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Project repository | <https://github.com/facebookresearch/fairchem> | ODAC25 Hugging Face dataset card |
| Official source | <https://huggingface.co/facebook/ODAC25> | ODAC25 Hugging Face dataset card |
| License text | <https://creativecommons.org/licenses/by/4.0/legalcode> | Data: CC BY 4.0; model checkpoints: FAIR Chemistry License v1 (additional restrictions, not an open license); fairchem code: MIT |
| Data repository | <https://huggingface.co/facebook/ODAC25> | ODAC25 Hugging Face dataset card: Page is public; files need acceptance of conditions with name, date of birth and organization; automated fetch of the datasets/ path returned 401; Dataset description and eSEN checkpoints; the card states the data are CC-BY-4.0 |
| Official documentation | <https://github.com/facebookresearch/fairchem/blob/main/docs/dac/datasets/odac25.md> | fairchem ODAC25 documentation source: Public; Size, license (CC BY 4.0) and citation; format is aselmdb |
| Original paper | <https://arxiv.org/abs/2508.03162> | ODAC25 preprint: Public; DataCite lists CC BY 4.0; Description of dataset and models; no peer-reviewed journal version found |
| Official documentation | <https://github.com/facebookresearch/fairchem/blob/main/docs/dac/datasets/odac23.md> | ODAC23 documentation (marked deprecated): Public; download links are on dl.fbaipublicfiles.com; ODAC23 S2EF and IS2RE task data; the document states CC BY 4.0 |
| Original paper | <https://doi.org/10.1021/acscentsci.3c01629> | ODAC23 paper (ACS Central Science): Paper page; license set by the publisher; ODAC23 dataset and challenges; a 2025 Correspondence has also been published |


### NOMAD Repository

- **ID / type:** `nomad-repository`; Data retrieval portal / Machine learning and data. A general materials-science research data repository and search portal that stores inputs and outputs of DFT and other calculations and offers search and an API; the QMOF PBE calculation files linked from this catalog are hosted here.
- **Display decision:** Display with caveats. The official terms of use, FAQ and API endpoint are verified; NOMAD is not MOF-specific and the terms document is dated 2018.
- **MOF applicability:** Partly relevant. The platform covers materials science generally and no MOF-specific subset could be verified; MOF data must be found by search or through known entry DOIs.
- **License and status:** Open-access content: CC BY 4.0 (terms of use, sections 1 and 5.3); NOMAD metadata: CC0 unless otherwise specified. The API info endpoint responded on 2026-10-14; the terms page is dated 2018-07-17; the stated retention is at least 10 years.
- **Required caveats:**
  - This is a general materials database, not a MOF database; do not read platform statistics (the API returned 19,480,451 entries on 2026-10-14) as a MOF count.
  - The terms are dated 2018-07-17 and state that revised terms apply from their publication date; re-read the current version before citing.
  - The FAQ says only mainfiles and auxiliary files can be downloaded publicly, not every uploaded file.
  - Uploaders keep copyright and warrant they have the right to license; whether third-party derived uploads are license-compatible is not confirmed.
  - Embargoed entries show limited metadata only, and their content cannot be obtained until the embargo ends or is lifted.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Official source | <https://nomad-lab.eu/> | NOMAD terms of use |
| License text | <https://nomad-lab.eu/nomad-lab/terms.html> | Open-access content: CC BY 4.0 (terms of use, sections 1 and 5.3); NOMAD metadata: CC0 unless otherwise specified |
| Original paper (publisher DOI) | <https://doi.org/10.21105/joss.05388> | NOMAD: A distributed web-based platform for managing materials science research data (DOI 10.21105/joss.05388) |
| Official documentation | <https://nomad-lab.eu/nomad-lab/terms.html> | NOMAD terms of use: Public; License, embargo, retention and upload rules |
| Official documentation | <https://nomad-lab.eu/nomad-lab/faqs.html> | NOMAD FAQ: Public; Citation, embargo (up to 36 months) and what can be downloaded publicly |
| Data service / API | <https://nomad-lab.eu/prod/v1/api/v1/info> | NOMAD API info: Public JSON; the FAQ says exceeding rate limits can return 503; Platform statistics, parsers and version information |
| Data repository | <https://doi.org/10.17172/NOMAD/2021.10.10-1> | QMOF PBE on NOMAD: Public browsing; reuse terms of individual entries should be checked on the record; VASP DFT inputs and outputs of QMOF (already listed in the catalog QMOF record) |


### Cambridge Structural Database (CSD)

- **ID / type:** `csd-cambridge-structural-database`; Database / Structure processing and pore analysis. A curated database of experimental organic and metal-organic crystal structures. Most MOF datasets (for example CoRE MOF and the construction workflow of MOSAEC-DB) use its structures as upstream input; systematic search needs a CSD license, with a free service for individual structures.
- **Display decision:** Display with caveats. Official CCDC pages (CSD statistics, Access Structures terms) are verified; the CSD is a licensed commercial database, not open source or open data.
- **MOF applicability:** Directly related but not a MOF-specific database. It is the main upstream source of experimental MOF structures, but no CCDC page offering a MOF subset was verified (an earlier probe of a MOF subset URL returned a generic landing page, not a MOF page).
- **License and status:** Proprietary (institutional or individual CSD license); the free Access Structures service has its own terms of use. The statistics page reports over 1.4 million curated entries, generated weekly; exact release and date depend on the licensed distribution.
- **Required caveats:**
  - This is a licensed commercial database, not open source; it is listed because the upstream source of many open MOF datasets is the CSD.
  - Many MOF datasets (including the CoRE MOF record in this catalog) restrict unmodified CSD-derived structures to users with a CCDC license.
  - The MOSAEC-DB README says about 45k files could not be made public because of CSD licensing concerns, and its Zenodo record is no longer available (HTTP 410).
  - No official MOF-subset page was verified and the full license agreement was not read, so no particular use should be assumed to be allowed.
  - REFCODEs can change across CSD updates, so datasets built on different CSD versions should record the version used.

#### Source block

| Category | Traceable URL | Use and boundaries |
|---|---|---|
| Official source | <https://www.ccdc.cam.ac.uk/solutions/csd-core/components/csd/> | CCDC page for the CSD |
| License text | <https://www.ccdc.cam.ac.uk/access-structures-terms> | Proprietary (institutional or individual CSD license); the free Access Structures service has its own terms of use |
| Original paper (publisher DOI) | <https://doi.org/10.1107/S2052520616003954> | The Cambridge Structural Database (DOI 10.1107/S2052520616003954) |
| Data service / API | <https://www.ccdc.cam.ac.uk/structures/> | Access Structures service: Free, per structure; the form uses a CAPTCHA and terms checkbox, which automated fetch did not pass; Individual crystal structures and datasets (CIF) |
| Official documentation | <https://www.ccdc.cam.ac.uk/access-structures-terms> | Access Structures terms of use: Public; States no systematic download or redistribution and no programmatic access |
| Official documentation | <https://www.ccdc.cam.ac.uk/solutions/about-the-csd/csd-statistics/> | CSD statistics: Public; Entry counts and growth statistics |
| Official documentation | <https://www.ccdc.cam.ac.uk/solutions/csd-licence/> | CSD license information: Public; the full license text was not retrieved in this check; License models and FAIRE grant entry point (visible on the page) |


---

## 3. Excluded

Two candidates examined on 2026-10-14 were not added. Neither is a verdict that the resource is bad; each lacked a verifiable source or terms at the time of checking.

- **MOSAEC-DB** (database of more than 124k experimentally derived MOFs validated by oxidation state; paper Chem. Sci. 2025, doi 10.1039/D4SC07438F). The Zenodo record named in the project README, doi 10.5281/zenodo.14780807, returned HTTP 410 on 2026-10-14, DataCite had no record for that DOI, and the README (<https://github.com/uowoolab/MOSAEC-DB>) states that the Zenodo records "will be taken down pending confirmation/amendments to the licensing agreement pertaining to the enclosed crystallographic data". No alternative download location was found. The MOSAEC code repository is covered separately in its own entry.
- **JARVIS-DFT** (NIST). The home page shows no license text, the terms page could not be fetched, and no MOF count or MOF-specific subset was stated on a primary page, so neither the data license nor the MOF scope could be confirmed.

Not evaluated (pages unreachable on 2026-10-14, so nothing is claimed about them): RCSR (rcsr.net), OQMD (HTTP 502), and AFLOW (no usable content).

If a new verification result later confirms the license, availability, and MOF scope of an excluded or unevaluated source, re-review it and update this section with the new evidence.

---

## References

1. snurr-group/gRASPA, general project repository. <https://github.com/snurr-group/gRASPA>
2. gRASPA LICENSE, license text. <https://raw.githubusercontent.com/snurr-group/gRASPA/main/LICENSE>
3. gRASPA Releases, code release. <https://github.com/snurr-group/gRASPA/releases>
4. ACS JCTC, DOI of the original gRASPA paper. <https://doi.org/10.1021/acs.jctc.4c01058>
5. OSTI, gRASPA software record. <https://www.osti.gov/biblio/code-172693>
6. gRASPA MkDocs, general project documentation. <https://zhaoli2042.github.io/gRASPA-mkdoc/>
7. QEF/q-e, official GitLab repository. <https://gitlab.com/QEF/q-e>
8. Quantum ESPRESSO qe-7.6, code release. <https://gitlab.com/QEF/q-e/-/releases/qe-7.6>
9. QUANTUM ESPRESSO original paper, IOP publisher page. <https://iopscience.iop.org/article/10.1088/0953-8984/21/39/395502>
10. Quantum ESPRESSO INPUT_PW, general official documentation. <https://www.quantum-espresso.org/Doc/INPUT_PW.html>
11. QEF/q-e, GitHub mirror. <https://github.com/QEF/q-e>
12. M-MOF-74 Quantum ESPRESSO example, publisher page. <https://www.sciencedirect.com/science/article/pii/S000926141731045X>
13. QMOF Database, Figshare data repository. <https://figshare.com/articles/dataset/QMOF_Database/13147324>
14. QMOF Figshare API, metadata. <https://api.figshare.com/v2/articles/13147324>
15. Andrew-S-Rosen/QMOF, general project repository. <https://github.com/Andrew-S-Rosen/QMOF>
16. QMOF LICENSE, license text. <https://github.com/Andrew-S-Rosen/QMOF/blob/main/LICENSE>
17. QMOF original paper, Matter publisher page. <https://www.sciencedirect.com/science/article/pii/S2590238521000709>
18. Materials Project, Downloading the Data documentation. <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data>
19. MPContribs QMOF, data service / API mirror. <https://contribs.materialsproject.org/projects/qmof>
20. QMOF Database - PBE, NOMAD calculation data repository. <https://doi.org/10.17172/NOMAD/2021.10.10-1>
21. RASPA, iRASPA official website. <https://iraspa.org/raspa/>
22. iRASPA/RASPA2, general project repository. <https://github.com/iRASPA/RASPA2>
23. RASPA2 COPYING, license text. <https://raw.githubusercontent.com/iRASPA/RASPA2/master/COPYING>
24. RASPA2 commits, maintenance evidence. <https://github.com/iRASPA/RASPA2/commits/master/>
25. RASPA2 latest release API, code release metadata. <https://api.github.com/repos/iRASPA/RASPA2/releases/latest>
26. RASPA original paper, publisher page. <https://www.tandfonline.com/doi/full/10.1080/08927022.2015.1010082>
27. iRASPA official website. <https://iraspa.org/>
28. iRASPA visualization paper, publisher page. <https://www.tandfonline.com/doi/full/10.1080/08927022.2018.1426855>
29. Zeo++ official website. <https://www.zeoplusplus.org/>
30. Zeo++ official documentation. <https://www.zeoplusplus.org/docs.html>
31. lsmo-epfl/zeopp-lsmo, general project repository. <https://github.com/lsmo-epfl/zeopp-lsmo>
32. Zeo++-LSMO LICENSE, license text. <https://github.com/lsmo-epfl/zeopp-lsmo/blob/master/LICENSE>
33. Zeo++-LSMO v0.4.7, code release. <https://github.com/lsmo-epfl/zeopp-lsmo/releases/tag/v0.4.7>
34. Zeo++-LSMO GitHub API, maintenance metadata. <https://api.github.com/repos/lsmo-epfl/zeopp-lsmo>
35. Zeo++ original paper, publisher page. <https://www.sciencedirect.com/science/article/abs/pii/S1387181111003738>
36. Zeo++ Crossref, metadata. <https://api.crossref.org/works/10.1016%2Fj.micromeso.2011.08.020>
37. SarkisovGitHub/PoreBlazer, general project repository. <https://github.com/SarkisovGitHub/PoreBlazer>
38. PoreBlazer README, license declaration. <https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/README.md>
39. PoreBlazer commits, maintenance evidence. <https://github.com/SarkisovGitHub/PoreBlazer/commits/main>
40. PoreBlazer data/README, general project data directory. <https://raw.githubusercontent.com/SarkisovGitHub/PoreBlazer/main/data/README.txt>
41. PoreBlazer original paper, publisher DOI. <https://doi.org/10.1080/08927022.2011.592832>
42. PoreBlazer v4.0 methodology paper, publisher DOI. <https://doi.org/10.1021/acs.chemmater.0c03575>
43. PoreBlazer v4.0 publisher SI repository. <https://acs.figshare.com/articles/journal_contribution/Materials_Informatics_with_PoreBlazer_v4_0_and_the_CSD_MOF_Database/13296133>
44. PoreBlazer releases API. <https://api.github.com/repos/SarkisovGitHub/PoreBlazer/releases>
45. snurr-group/mofid, general project repository. <https://github.com/snurr-group/mofid>
46. MOFid LICENSE, license text. <https://github.com/snurr-group/mofid/blob/master/LICENSE>
47. MOFid official documentation. <https://snurr-group.github.io/mofid/>
48. Web MOFid, general web tool. <https://snurr-group.github.io/web-mofid/>
49. MOFid/MOFkey original paper, ACS publisher page. <https://pubs.acs.org/doi/10.1021/acs.cgd.9b01050>
50. MOFid/MOFkey publisher SI PDF. <https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_001.pdf>
51. MOFid/MOFkey publisher SI ZIP. <https://pubs.acs.org/doi/suppl/10.1021/acs.cgd.9b01050/suppl_file/cg9b01050_si_002.zip>
52. MOFid v1.1.0, code release / container. <https://github.com/snurr-group/mofid/releases/tag/v1.1.0>
53. Chung-Research-Group/CoRE-MOF-Tools, general project repository. <https://github.com/Chung-Research-Group/CoRE-MOF-Tools>
54. CoRE MOF Tools general official documentation. <https://core-mof-tools.readthedocs.io/en/latest/>
55. CoRE MOF Tools feature documentation. <https://core-mof-tools.readthedocs.io/en/latest/features.html>
56. CoRE MOF Tools LICENSE, license text. <https://raw.githubusercontent.com/Chung-Research-Group/CoRE-MOF-Tools/main/LICENSE>
57. coremof-tools, PyPI package release. <https://pypi.org/project/coremof-tools/>
58. CoRE MOF DB related paper, Matter publisher page. <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3>
59. CoRE MOF 2024 Dataset v1.1, Zenodo data repository. <https://zenodo.org/records/15055758>
60. Matter Data S2, publisher SI. <https://www.cell.com/cms/10.1016/j.matt.2025.102140/attachment/8852f410-9050-4a67-8725-869f15b11d1d/mmc4.zip>
61. CoRE-MOF-Tools Releases, release check. <https://github.com/Chung-Research-Group/CoRE-MOF-Tools/releases>
62. Chung-Research-Group/PACMAN-charge, general project repository. <https://github.com/Chung-Research-Group/PACMAN-charge>
63. PACMAN-charge LICENSE, license text. <https://raw.githubusercontent.com/Chung-Research-Group/PACMAN-charge/main/LICENSE>
64. PACMAN-charge, PyPI package release. <https://pypi.org/project/PACMAN-charge/>
65. PACMAN-charge Releases, code release. <https://github.com/Chung-Research-Group/PACMAN-charge/releases>
66. PACMAN original paper Crossref, metadata. <https://api.crossref.org/works/10.1021/acs.jctc.4c00434>
67. PACMAN publisher SI repository. <https://acs.figshare.com/articles/journal_contribution/PACMAN_A_Robust_Partial_Atomic_Charge_Predicter_for_Nanoporous_Materials_Based_on_Crystal_Graph_Convolution_Networks/25952558>
68. PACMAN/GCNCharge, Zenodo data/model repository. <https://zenodo.org/records/10822403>
69. PACMAN-charge GitHub API, maintenance evidence. <https://api.github.com/repos/Chung-Research-Group/PACMAN-charge>
70. lamalab-org/mofdscribe, general project repository. <https://github.com/lamalab-org/mofdscribe>
71. mofdscribe, general official documentation. <https://mofdscribe.readthedocs.io/en/latest/>
72. mofdscribe LICENSE, license text. <https://raw.githubusercontent.com/lamalab-org/mofdscribe/main/LICENSE>
73. mofdscribe original paper, ACS publisher page. <https://pubs.acs.org/doi/10.1021/acscentsci.2c01177>
74. mofdscribe latest release API, code release. <https://api.github.com/repos/lamalab-org/mofdscribe/releases/latest>
75. mofdscribe commits API, maintenance evidence. <https://api.github.com/repos/lamalab-org/mofdscribe/commits?per_page=1>
76. Gas adsorption and process performance data for MOFs, Materials Cloud data repository. <https://doi.org/10.24435/materialscloud:qt-cj>
77. MOF Explorer backend, MPContribs data service / download interface. <https://doi.org/10.17188/mpcontribs/1883597>
78. mofdscribe data - CoRE, Zenodo project data repository. <https://zenodo.org/records/7032358>
79. microsoft/MOFDiff, general project repository. <https://github.com/microsoft/MOFDiff>
80. MOFDiff LICENSE, license text. <https://github.com/microsoft/MOFDiff/blob/main/LICENSE>
81. MOFDiff commits, maintenance evidence. <https://github.com/microsoft/MOFDiff/commits/main/>
82. MOFDiff Releases, release check. <https://github.com/microsoft/MOFDiff/releases>
83. Microsoft Research, MOFDiff general official project page. <https://www.microsoft.com/en-us/research/publication/mofdiff-coarse-grained-diffusion-for-metal-organic-framework-design/>
84. MOFDiff, ICLR official conference paper page. <https://proceedings.iclr.cc/paper_files/paper/2024/hash/47547ee84e3fbbcbbbbad7c1fd9a973b-Abstract-Conference.html>
85. MOFDiff, arXiv preprint record. <https://arxiv.org/abs/2310.10732>
86. MOFDiff data and pretrained models, Zenodo data and model repository. <https://zenodo.org/records/10806179>
87. BW-DB, Materials Cloud upstream data repository. <https://archive.materialscloud.org/record/2018.0016/v3>
88. hspark1212/DAC-SIM, general project repository. <https://github.com/hspark1212/DAC-SIM>
89. DAC-SIM LICENSE, license text. <https://github.com/hspark1212/DAC-SIM/blob/main/LICENSE>
90. DAC-SIM introduction, general official documentation. <https://hspark1212.github.io/DAC-SIM/0_introduction/introduction.html>
91. DAC-SIM Widom insertion, general official documentation. <https://hspark1212.github.io/DAC-SIM/1_molecular_simulation/widom_insertion.html>
92. DAC-SIM original paper, Matter publisher DOI. <https://doi.org/10.1016/j.matt.2025.102203>
93. GoldDAC README, general project data directory. <https://github.com/hspark1212/DAC-SIM/blob/main/assets/GoldDAC/README.md>
94. MACE-DAC-1 README, general project model directory. <https://github.com/hspark1212/DAC-SIM/blob/main/dac_sim/models/README.md>
95. DAC-SIM commits, maintenance evidence. <https://github.com/hspark1212/DAC-SIM/commits/main/>
96. DAC-SIM releases API, code release. <https://api.github.com/repos/hspark1212/DAC-SIM/releases>
97. dac-sim PyPI JSON, package release. <https://pypi.org/pypi/dac-sim/json>
98. DAC-SIM Matter Document S1, publisher SI. <https://www.cell.com/cms/10.1016/j.matt.2025.102203/attachment/b7bcd583-b6ff-46cd-bc3b-450db116ec77/mmc1.pdf>
99. CoRE MOF DB, general official database website. <https://mof-db.pusan.ac.kr>
100. CoRE MOF 2025 Dataset, Zenodo data repository / versioned public SI. <https://zenodo.org/records/15621349>
101. CoRE MOF DB original / related paper, Matter publisher page. <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3>
102. CoRE MOF DB Crossref, bibliographic metadata. <https://api.crossref.org/works/10.1016/j.matt.2025.102140>
103. CoRE-MOF-Tools, general project repository. <https://github.com/Chung-Research-Group/CoRE-MOF-Tools>
104. CC BY 4.0 legal text. <https://creativecommons.org/licenses/by/4.0/legalcode>
105. Materials Project MOF Explorer, general official documentation / portal description. <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer>
106. Materials Project MOF Explorer, citation documentation. <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/how-to-cite>
107. Materials Project MOF Explorer, download documentation. <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/downloading-the-data>
108. Materials Project MOF Explorer, structure sources documentation. <https://docs.materialsproject.org/apps/explorer-apps/mof-explorer/structure-details/structure-sources>
109. QMOF Database, Figshare data repository. <https://figshare.com/articles/dataset/QMOF_Database/13147324>
110. Andrew-S-Rosen/QMOF, general project repository. <https://github.com/Andrew-S-Rosen/QMOF>
111. MOF Explorer related paper, Nature publisher page. <https://www.nature.com/articles/s41524-022-00796-6>
112. QMOF Database - PBE, NOMAD calculation data repository. <https://dx.doi.org/10.17172/NOMAD/2021.10.10-1>
113. MOF Explorer backend, MPContribs dataset DOI record. <https://doi.org/10.17188/mpcontribs/1883597>
114. Crystallography Open Database, general official database website. <https://www.crystallography.net/cod/>
115. COD, official access guide. <https://wiki.crystallography.net/howtoobtaincod/>
116. COD, official query guide. <https://wiki.crystallography.net/howtoquerycod/>
117. COD, general official search page. <https://www.crystallography.net/cod/search.php>
118. COD OPTIMADE API, official structure API. <https://www.crystallography.net/cod/optimade/v1/info>
119. COD original paper, IUCr publisher page. <https://journals.iucr.org/j/issues/2009/04/00/kk5039/>
120. COD platform paper, OUP publisher page. <https://academic.oup.com/nar/article/40/D1/D420/2903497>
121. COD validation paper, IUCr publisher page. <https://journals.iucr.org/j/issues/2021/02/00/yr5065/>
122. CC0 1.0 legal text. <https://creativecommons.org/publicdomain/zero/1.0/>

---

<a id="part-b-繁體中文"></a>

# Part B: 繁體中文

## MOF Open Source Hub：來源清冊與保守策展決定

**清冊版本：** 2026-10-14。前 15 筆於 2026-10-09 依題示的獨立核實結果整理；2026-10-14 新增 24 筆。  
**策展原則：** 對原 15 筆，本清冊**不新增、推斷或重新核實**任何事實；2026-10-14 新增的 24 筆則不同：每筆都直接對照其主要來源（LICENSE 檔、README、出版者或保存庫頁面；DOI 經 Crossref 或 DataCite 解析）核實，無法確認的事實一律標示為未確認。對所有條目，展示決定僅依每筆結果的 `verdict`、`evidenceSummary`、`caveats` 與所列 URL 作成。`verified` 項目列為「可立即展示」；`verified_with_caveat` 項目列為「可展示但須註記」。原 15 筆中沒有被原核實結論判為不可用的項目。新增條目的 URL 直接列於各自的來源區塊，未編入 References 編號。附加於原 core-mof-db 條目的兩筆 Zenodo 紀錄（CoRE MOF 2024 v1.1 與 2019 v1.1.4）於 2026-10-14 核實；該條目其餘部分維持 2026-10-09 的核實。

> **資料品質與使用邊界**
>
> 1. 此清冊同時涵蓋**軟體／工具**與**資料庫／資料入口**。軟體的開源授權、資料集的資料授權、論文補充資訊（SI）的取得權利，以及模型檔的使用條款必須分開呈現；不得由其中一項推論另一項的再利用權。
> 2. 「可立即展示」不等於所有下游資料或每一種應用均已驗證；其意義僅為原核實結論為 `verified`。仍應在 UI 保留資料類型、版本與用途範圍。
> 3. 「可展示但須註記」的限制是展示卡與詳情頁的必要內容，尤其是授權衝突／未確認、CSD 衍生或受限資料、非資料庫工具、維護訊號有限、模型適用範圍及資料子集差異。
> 4. **原始論文**用於辨識方法與 DOI；**出版者 SI**是隨論文發布的補充檔，不能自動當作開放訓練資料；**資料保存庫**是版本化資料或模型檔的來源；**程式碼 release**是特定版本的軟體封存；**一般專案資料目錄**則是程式庫內隨附檔案，可能沒有獨立資料授權。
> 5. 對含 CSD／CCDC、NOMAD、MPContribs、第三方力場或上游資料來源的項目，本清冊只陳述已核實的存取或授權範圍；未確認之再散布、商業使用與 ML 訓練權利一律標示為未確認。

### 策展摘要

| 策展層級 | 筆數 | IDs |
|---|---:|---|
| **可立即展示** | 5 | `graspa`、`quantum-espresso`、`qmof-database`、`mofsimbench`、`pormake` |
| **可展示但須註記** | 34 | `raspa2-iraspa`、`zeopp`、`poreblazer`、`mofid-mofkey`、`core-mof-tools`、`pacman-charge`、`mofdscribe`、`mofdiff`、`dac-sim`、`core-mof-db`、`materials-project-mof-explorer`、`crystallography-open-database-cod`、`raspa3`、`mosaec`、`mofchecker`、`autografs`、`tobacco-3`、`lammps-interface`、`mofstructure`、`moftransformer`、`moformer`、`mofsimplify`、`mofflow`、`chatmof`、`l2m3`、`ghp-mofassemble`、`synmof-literature-extraction`、`arc-mof`、`mofx-db`、`nist-arpa-e-adsorbent-db`、`materials-cloud-archive`、`odac25`、`nomad-repository`、`csd-cambridge-structural-database` |
| **排除** | 2 | `mosaec-db`、`jarvis-dft`（2026-10-14 檢視之候選；見第三節） |

---

## 一、可立即展示

### gRASPA

- **ID／類型：** `graspa`；GPU 加速 Monte Carlo 吸附模擬軟體。[1] [4]
- **展示判定：** 可立即展示。原核實結論為 `verified`；其官方程式庫與正式論文均支持其用於多孔材料（含 MOF）的分子吸附模擬。[1] [4]
- **建議展示內容：** 說明其為軟體、不是 MOF 結構／性質資料庫；呈現 MIT 授權、MOF 適用性、GCMC／NVT／NVT-Gibbs／Widom／GC-TMMC 等核實用途。不要把其整合 ML potentials 的能力表述為其提供了 ML 訓練資料。[1] [2] [4]
- **授權與狀態：** 程式庫 LICENSE 為 MIT；原核實結果記載 release 頁的最新版與 GPU 相容性細節，應連至 release 與文件，而非將任一硬體路徑泛化為完全等同支援。[2] [3] [6]

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫 | <https://github.com/snurr-group/gRASPA> [1] | 主程式碼、功能與 MOF 定位。 |
| 授權正文 | <https://raw.githubusercontent.com/snurr-group/gRASPA/main/LICENSE> [2] | MIT 程式碼授權證據。 |
| 程式碼 release | <https://github.com/snurr-group/gRASPA/releases> [3] | 版本與發行資產；不是資料集。 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acs.jctc.4c01058> [4] | 方法、MOF 實例與書目識別。 |
| 軟體紀錄 | <https://www.osti.gov/biblio/code-172693> [5] | 交叉核實軟體／MIT 記錄。 |
| 一般專案文件 | <https://zhaoli2042.github.io/gRASPA-mkdoc/> [6] | 建置與不同 GPU 路徑的限制。 |

### Quantum ESPRESSO

- **ID／類型：** `quantum-espresso`；週期性 DFT 計算軟體平台。[7] [9]
- **展示判定：** 可立即展示。原核實結論為 `verified`；正式 QEF GitLab 與官方文件支持 GPL-2.0-or-later 的週期性 DFT 軟體定位，且有 M-MOF-74 的已發表 Quantum ESPRESSO 實例。[7] [9] [10] [12]
- **建議展示內容：** 呈現其為計算軟體，不是結構、性質或合成資料庫；可列出電子結構、鬆弛、分子動力學、DFPT 與 DFT+U 等已核實能力。MOF 結果仍依結構模型、泛函、色散、贗勢、磁態、DFT+U 與收斂設定而定，不能預先保證任意 MOF 的結果品質。[9] [10] [12]
- **授權與狀態：** 正式開發與 release 的依據是 QEF GitLab；GitHub 是鏡像，不能當作 issue／PR 的正式開發入口。[7] [8] [11]

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般專案程式庫／正式開發庫 | <https://gitlab.com/QEF/q-e> [7] | 正式開發、GPL 授權與維護訊號。 |
| 程式碼 release | <https://gitlab.com/QEF/q-e/-/releases/qe-7.6> [8] | QEF 版本化原始碼封存。 |
| 原始論文（出版者） | <https://iopscience.iop.org/article/10.1088/0953-8984/21/39/395502> [9] | 軟體原始論文與 DOI。 |
| 一般官方文件 | <https://www.quantum-espresso.org/Doc/INPUT_PW.html> [10] | PWscf 週期性 DFT 功能界線。 |
| 程式碼鏡像 | <https://github.com/QEF/q-e> [11] | 鏡像；非正式 issue／PR 入口。 |
| MOF 應用論文（出版者） | <https://www.sciencedirect.com/science/article/pii/S000926141731045X> [12] | M-MOF-74 週期性 DFT 使用證據。 |

### QMOF Database

- **ID／類型：** `qmof-database`；MOF 與相關配位聚合物的高通量週期性 DFT 資料庫，附輔助工具程式庫。[13] [15] [17]
- **展示判定：** 可立即展示。原核實結論為 `verified`；正式 Figshare 資料發布、QMOF 程式庫與 Matter 論文共同支持其公開、直接面向 MOF 的 DFT 結構與性質資料定位。[13] [15] [17]
- **建議展示內容：** 明確分欄呈現**資料為 CC BY 4.0**、**GitHub 程式碼與文件為 MIT**。資料範圍可顯示為 20,000+ MOF／相關結構、DFT 最佳化結構與已核實的電子／電荷／磁性與孔隙欄位；合成部分只呈現已核實的 `synthesized` 旗標、來源與部分 DOI／refcode，不宣稱有完整實驗配方、反應條件或產率。[13] [15] [16] [17]
- **資料品質提示：** 結構同時含已合成與假想結構，並含 MOF-like coordination polymers；需按 `synthesized`、`source`、孔隙欄位等篩選。NOMAD 條目可能高於當前 MOF Explorer，使用原始計算檔時需與具體 QMOF 版本交叉核對。[18] [19] [20]
- **ML／下載：** CC BY 4.0 的 Figshare 資料可用於訓練或衍生，但需署名與標示變更。MPContribs 是查詢／下載鏡像，NOMAD 是計算輸入／輸出保存位置；兩者不是可取代 QMOF 版本化 release 的同義項。[13] [17] [18] [19] [20]

#### 來源區塊

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

### MOFSimBench

- **ID／類型：** `mofsimbench`；軟體／機器學習與資料。用於評測通用機器學習原子間勢（uMLIP）在 MOF 分子模型任務上表現的基準程式：結構最佳化、分子動力學穩定性、體積模數與熱容等。
- **展示判定：** 可立即展示。官方程式庫、MIT 授權、npj Comput. Mater. 論文與 Figshare 結果檔均已核實。
- **MOF 適用性：** 直接適用。論文標題與 README 均以 MOF 為評測對象；QMOF 能量比較與 GoldDAC 交互作用能任務需另行下載外部資料。
- **授權與狀態：** MIT License（程式碼）；Figshare 結果檔為 CC BY 4.0。最後推送 2025-12-17（GitHub API）；未逐項核對 release。
- **必要註記：**
  - NPT 任務需要尚未進入 PyPI 版 ase 的 MTKNPT driver，須由 ase git 安裝。
  - QMOF 與 GoldDAC 比較任務須自行下載外部資料，其授權由各資料來源決定，本次未逐一核對。
  - 基準分數取決於各模型的 D3 修正與精度設定，換設定結果可能改變。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/AI4ChemS/mofsim-bench> | MOFSimBench 官方程式庫 |
| 官方來源 | <https://doi.org/10.6084/m9.figshare.30234010> | MOFSimBench 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/AI4ChemS/mofsim-bench/main/LICENSE> | MIT License（程式碼）；Figshare 結果檔為 CC BY 4.0 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1038/s41524-025-01872-3> | MOFSimBench: evaluating universal machine learning interatomic potentials in metal-organic framework molecular modeling (DOI 10.1038/s41524-025-01872-3) |
| 資料保存庫 | <https://doi.org/10.6084/m9.figshare.30234010> | MOFSimBench 模擬結果檔（Figshare）: 公開，CC BY 4.0; results.zip，約 334 MB，供重現論文圖表 |
| 原始論文 | <https://arxiv.org/abs/2507.11806> | arXiv 預印本: 公開; 預印本全文 |


### PORMAKE

- **ID／類型：** `pormake`；軟體／結構處理與孔隙分析。以拓撲（topology）與建築區塊（building blocks）組裝多孔材料（含 MOF）的 Python 函式庫，並含從既有 MOF 抽取建築區塊的實驗性模組。
- **展示判定：** 可立即展示。官方程式庫、MIT LICENSE.md 與 ACS AMI 論文均已核實。
- **MOF 適用性：** 直接適用。原始論文以 MOF 的大規模計算篩選為例；README 另有從 MOF 抽取建築區塊的模組。
- **授權與狀態：** MIT License（程式碼）。最後推送 2026-08-09（GitHub API）；README 記載 0.2.3 版並附 CHANGELOG 與 ROADMAP。
- **必要註記：**
  - 生成結構不保證可合成，亦未經實驗驗證。
  - 論文為大規模生成並以計算篩選的研究；README 內是否附該篩選結果的資料集，本次未確認。
  - Windows 原生環境不受 pip 安裝支援。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/Sangwon91/PORMAKE> | PORMAKE 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/Sangwon91/PORMAKE/main/LICENSE.md> | MIT License（程式碼） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acsami.1c02471> | Computational Screening of Trillions of Metal–Organic Frameworks for High-Performance Methane Storage (DOI 10.1021/acsami.1c02471) |
| 官方文件 | <https://github.com/Sangwon91/PORMAKE> | PORMAKE CHANGELOG（GitHub）: 公開; 版本紀錄與 README 內的範例說明 |


---

## 二、可展示但須註記

### RASPA2（iRASPA 生態系）

- **ID／類型：** `raspa2-iraspa`；古典分子模擬軟體。[21] [22] [26]
- **必要註記：** 目前官方程式庫 `COPYING` 明載 MIT，但官方網站與 2016 論文曾稱 GPL；本清冊只將目前原始碼庫的明確授權正文標為 MIT，舊版或法務重用需向著作權人確認版本別授權。[21] [23] [26]
- **展示範圍：** RASPA2 用於柔性奈米多孔材料的吸附與擴散，README 直接列出 MOF 與 rigid／flexible MOF 力場範例；iRASPA 是同一生態系的進階可視化套件，不能把 iRASPA 的視覺化功能誤列為 RASPA2 模擬引擎功能。[21] [22] [27] [28]
- **操作／維護註記：** 儲存庫力場、結構與分子檔僅為說明範例，使用者須自行建構與驗證自己的古典力場。原核實結果也僅支持公開、未封存與有限的提交／release 證據，不能承諾長期支援。[22] [24] [25]

#### 來源區塊

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

### Zeo++

- **ID／類型：** `zeopp`；多孔晶體幾何／拓撲分析軟體。[29] [31] [35]
- **必要註記：** 此為軟體，不是資料庫。原核實的開源與授權依據是 EPFL LSMO fork 的 README／LICENSE；官方下載頁本次未能取得可讀下載文字，且官方 Zeo++ 0.3 與 LSMO v0.4.7 屬不同發布脈絡，不能把 LSMO v0.4.7 斷言為原作者 canonical release。[29] [30] [31] [32] [33]
- **展示範圍：** 可呈現 Voronoi 分割、孔徑、可及表面積／體積、通道維度、blocking spheres、開放金屬位點與 MOF／COF 組裝等已核實功能；其 MOF 適用性也由出版者摘要支持。[29] [30] [35]
- **授權／維護註記：** LICENSE 接近 BSD 3-clause，但含額外 enhancement 授權段落，且 API 為 `NOASSERTION`；應保留「修改版 BSD／BSD 3-clause-like」的描述，不簡化成標準 SPDX BSD-3-Clause。其可核實的 fork release／推送停在 2022，應顯示為近年無可見新推送。[31] [32] [33] [34]

#### 來源區塊

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

### PoreBlazer

- **ID／類型：** `poreblazer`；多孔材料幾何分析工具，附 MOF 性質表。[37] [40] [42]
- **必要註記：** 主項目是軟體，不是資料庫。README 對「project」宣告 GPL-3.0-or-later，但 repository 未有 GitHub 可辨識的獨立 LICENSE；應將授權證據標為 README 宣告，不宣稱有經 GitHub 偵測的獨立授權檔。[37] [38]
- **展示範圍：** 可呈現 PLD、LCD、連通維度、可及表面積、氦／幾何孔體積與孔徑分布等 MOF 幾何分析功能；MOF 直接適用性由案例與 v4.0 論文支持。[37] [41] [42]
- **資料註記：** `data/` 是**一般專案資料目錄**，隨附 CSD MOF subset 的 PB4、Zeo++、RASPA 幾何性質表；PB4 為 12,081 筆，但這些衍生資料的獨立再利用、CSD 再散布與 ML 訓練許可未確認。不可把程式 GPL 宣告外推至資料表。[40] [42]
- **維護註記：** main 的最後可見提交為 2020，且無 GitHub release；可展示但應標為公開、低維護訊號。[39]

#### 來源區塊

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

### MOFid / MOFkey

- **ID／類型：** `mofid-mofkey`；MOF 結構辨識與化學資訊工具。[45] [49]
- **必要註記：** MOFid／MOFkey 是開放標準方向的識別系統，但原始論文明示格式尚未收斂；不可呈現為 IUPAC、CCDC 或社群正式採納的最終標準。[45] [49]
- **展示範圍：** 可呈現 GPL-2.0 的 3D MOF CIF 分解、建構單元／拓撲與識別字串輸出。前端應醒目列出限制：目前不支援 1D／2D MOF；disorder、部分佔據、複雜溶劑或非框架離子可能令結果不準確或失敗；部分 rod-like metal nodes 的拓撲判定亦須個案驗證。[45] [47] [48] [49]
- **資料／維護註記：** ACS SI ZIP 含 CoRE MOF 2019-ASR 的 identifiers、重複資訊與多晶型家族資料，但未核實獨立資料授權，不能直接標成自由 ML 訓練集。正式 release 為 2022 v1.1.0，而主分支仍有較後推送，應分別顯示。[49] [50] [51] [52]

#### 來源區塊

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

### CoRE MOF Tools

- **ID／類型：** `core-mof-tools`；CoRE MOF 的 Python 清理、標準化與驗證工作流程。[53] [54]
- **必要註記：** 此為工具而非獨立資料庫。其 CC BY 4.0 是工具程式碼授權，不能外推至可經工具存取的 CoRE、CSD 或其他資料；CSD 結構下載與 MOSAEC 需要授權 CSD 安裝與 Python API，且有多個選用外部相依項。[53] [55] [56]
- **展示範圍：** 可呈現 CIF preprocess／clean、結構驗證、描述子、資料庫查詢與部分預訓練性質預測等已核實工作流程。[53] [54]
- **版本註記：** Read the Docs 顯示 0.3.1、PyPI 為 0.3.5，GitHub 無 release；UI 應顯示所選取的具體套件版本與查閱日期，避免把文件版視為發行版。[54] [57] [61]
- **相關資料：** Zenodo 的 CoRE MOF 2024 v1.1 是**資料保存庫**且 metadata 為 open／CC BY 4.0；Matter Data S2 是**出版者 SI**，兩者均應與工具授權分開標示。[58] [59] [60]

#### 來源區塊

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

### PACMAN-charge

- **ID／類型：** `pacman-charge`；以晶體圖卷積網路預測部分原子電荷的軟體。[62] [66]
- **必要註記：** 這是預測工具，不是資料庫。它的 MOF DDEC6／Bader／CM5／REPEAT 輸出是 ML 預測，不等於對新結構重新執行 DFT 電荷分析。[62] [66]
- **展示範圍：** 可呈現 MIT 授權與輸入 CIF、輸出部分電荷的 MOF 直接用途。UI 應呈現已核實限制：可用元素取決於訓練資料；Th-MOF 的 Bader 模型只有兩個訓練點；預設 `neutral=True` 會以 mean 方法平均分配多餘電荷以中性化系統。[62] [63]
- **版本／資料註記：** PyPI 新於 GitHub release，應分開顯示。Zenodo 連結由 README 提供，但記錄使用較早的 GCNCharge 名稱，頁面也提示有較新版；不可假定其內容與當前 PACMAN-charge 完全一致。訓練資料權利須逐一依上游來源核實。[64] [65] [68] [69]

#### 來源區塊

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

### mofdscribe

- **ID／類型：** `mofdscribe`；MOF 機器學習 Python 工具庫。[70] [73]
- **必要註記：** 本項目是工具庫，不是單一資料庫。它可包裝結構集合、特徵、標籤、雜湊與中介資料，但每個資料集的範圍與權利必須查看各自紀錄。[70] [71] [73]
- **展示範圍：** 可呈現 MIT 授權、40+ 特徵化器、資料切分、去重、驗證與基準的 MOF ML 工作流；其原始論文是 *An Ecosystem for Digital Reticular Chemistry*。[70] [72] [73]
- **版本／資料註記：** 可安裝正式版和 GitHub release 為 0.0.8，文件則顯示 0.0.9-dev，最近可見提交為 2024；不要標為持續正式發行。Materials Cloud 吸附資料為 CC BY 4.0；MPContribs 頁本次未確認再利用授權；Zenodo CoRE 子集雖 CC BY 4.0，但明示「Not intended for direct use」。[71] [74] [75] [76] [77] [78]

#### 來源區塊

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

### MOFDiff

- **ID／類型：** `mofdiff`；MOF 粗粒化擴散生成與逆向設計研究工具。[79] [84]
- **必要註記：** 此為研究程式碼，無 GitHub release，最後可見主分支提交為 2024。生成 CG 結構不保證可實現；作者要求組裝為全原子結構並 UFF 鬆弛，且尚未以實驗驗證生成結構是否可達成。[79] [81] [82]
- **展示範圍：** 可呈現 MIT 授權、MOF CG 生成、全原子重建、UFF 鬆弛與以 CO2 工作容量為例的評估流程；不得表述為已實證的合成可行性預測器。[79] [80] [84]
- **資料／模型註記：** Zenodo 的前處理 BW-DB、預訓練模型與生成樣本是**資料與模型保存庫**，CC BY 4.0；公開預訓練模型限定 BW-DB，其他任意 MOF 資料集訓練只做過最少測試。ICLR ZIP 是**出版者／會議正式論文頁的補充資料**，只含 top-10 CIF，不能視為完整訓練資料庫。[84] [85] [86] [87]
- **論文識別註記：** ICLR 正式頁未顯示獨立出版者 DOI；本清冊僅將 arXiv DataCite DOI 用作預印本記錄，不把它描述為 ICLR 出版者 DOI。[84] [85]

#### 來源區塊

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

### DAC-SIM

- **ID／類型：** `dac-sim`；以 MACE-DAC 為基礎的 MOF 直接空氣捕捉分子模擬工具。[88] [90] [92]
- **必要註記：** MIT 授權僅明確覆蓋程式碼；GoldDAC 資料檔與 MACE-DAC-1 模型檔未見獨立授權，不能假定與程式碼有相同再散布或商用權利。[88] [89] [93] [94]
- **展示範圍：** 可呈現 CO2／H2O DAC 的 Widom insertion、MD 與幾何最佳化，及其對 MOF 的直接用途。已核實驗證範圍是 MOF 中 CO2／H2O；不要延伸為其他氣體、所有多孔材料或超出訓練分布組成均同等適用。[90] [92]
- **資料／維護註記：** GoldDAC 是**一般專案資料目錄**內的 ASE-compatible XYZ 檔，包含能量與力標籤，明確設計為 MLFF fine-tuning，但無獨立授權；MACE-DAC-1 同為一般專案內模型檔。正式 release／PyPI 為 0.0.3，主分支有較後提交，沒有 SLA 或未來版本承諾。[93] [94] [95] [96] [97]

#### 來源區塊

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

### CoRE MOF DB

- **ID／類型：** `core-mof-db`；計算就緒實驗 MOF 資料庫。[99] [100] [101]
- **必要註記：** 公開 CC BY 4.0 覆蓋的是 Zenodo 所稱的 2025 public SI subset，不等同完整 CoRE MOF DB。完整庫內 CSD modified／unmodified 結構取得條件不同，未修改 CIF 明確需要 CCDC license。[99] [100]
- **展示範圍：** 可呈現實驗報導 MOF CIF、CR／NCR、ASR／FSR／Ion 分類，以及已核實的孔隙、拓撲、開放金屬位、MOFid、RAC、PACMAN DDEC6、熱容、穩定性與 GEMC 疏水分類等欄位；不得宣稱有公開的合成條件資料或 REST API。[99] [100] [101]
- **資料品質註記：** 官方來源有不同版本／截點與計數：2024 全庫與 2025 Zenodo public SI 不能混用。ASR 與 FSR 會重疊，資料庫也含 NCR 與錯誤旗標；訓練或統計需固定版本、篩選規則與去重策略。[99] [100]
- **工具區分：** CoRE MOF Tools 是另行授權的工具庫；其公開程式碼不改變各資料檔與受限 CSD 結構的權利狀態。[103]

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 一般官方資料庫網站 | <https://mof-db.pusan.ac.kr> [99] | 全庫分類、範圍與資料來源入口。 |
| 資料保存庫／版本化 public SI | <https://zenodo.org/records/15621349> [100] | 2025 公開 SI、CC BY 4.0、檔案與版本。 |
| 原始／關聯論文（出版者） | <https://www.cell.com/matter/fulltext/S2590-2385(25)00183-3> [101] | CoRE MOF DB 論文與補充資料入口。 |
| 書目中繼資料 | <https://api.crossref.org/works/10.1016/j.matt.2025.102140> [102] | DOI／題名核對。 |
| 一般專案程式庫 | <https://github.com/Chung-Research-Group/CoRE-MOF-Tools> [103] | 工具庫；不是資料庫授權的替代證據。 |
| 授權法律文本 | <https://creativecommons.org/licenses/by/4.0/legalcode> [104] | Zenodo public SI 所標 CC BY 4.0 條款。 |

### Materials Project MOF Explorer

- **ID／類型：** `materials-project-mof-explorer`；基於 QMOF 的 MOF 資料庫檢索入口。[105] [109] [111]
- **必要註記：** 已核實的是底層 QMOF 資料 CC BY 4.0 與 QMOF 程式碼 MIT；未找到 MOF Explorer 網頁前端本身的官方開源程式庫，不可將整個前端表述為 MIT 開源。[105] [109] [110]
- **展示範圍：** 可呈現它是 QMOF 的互動檢索入口，支持結構、孔隙與 DFT 性質探索，以及對 MPContribs API／NOMAD／Globus 等下載位置的連結。結構含實驗與假想 MOF，也可能含較適合稱 coordination polymers 的項目；篩選須使用來源與 `synthesized` 標記。[105] [107] [108] [109]
- **性質／重跑註記：** PBE 能隙通常低估實驗值，HSE06 僅在部分 QMOF 結構可用，不能混為同一品質標籤。資料發布 CC BY 4.0 不等於重跑計算完全無限制：正式論文指出 VASP 是程式碼可得性的例外。[105] [110] [111]

#### 來源區塊

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

### Crystallography Open Database (COD)

- **ID／類型：** `crystallography-open-database-cod`；開放晶體結構資料庫。[114] [119]
- **必要註記：** COD 收錄金屬有機化合物，但不是 MOF 專用或已標註資料庫；MOF 覆蓋率、MOF 子集定義，以及去溶劑／活化狀態均未確認。不能把它作為已標準化的 MOF 孔隙、吸附、性質或合成資料庫。[114] [115] [116]
- **展示範圍：** 可呈現 COD 資料及資料庫本身為 CC0 1.0、提供 CIF、部分 HKL／Fobs、單筆與批次下載、匿名 SVN、rsync、唯讀 MySQL、REST 與 OPTIMADE。這項 CC0 證據不延伸至網站／工具程式碼，後者的獨立軟體授權未確認。[114] [115] [117] [122]
- **資料品質／操作註記：** API 可能含 warnings、errors、retracted 等品質／狀態欄位，應先依 status、duplicate／optimal、座標與實驗條件篩選。HTTP 整庫封存可能落後每日更新；OPTIMADE 端點可用，但原核實結果記錄供應者儀表板曾出現 timeout／格式驗證問題，批量用法應實測、重試並保留快照。[115] [116] [118]
- **訓練用途：** 就 COD 資料與資料庫的 CC0 而言，可作 ML 訓練、衍生、再散布及商業使用；仍應致謝原始結構資料作者，且不能把非 MOF 專用的結構庫直接當作 MOF 性質標註集。[114] [122]

#### 來源區塊

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

### RASPA3

- **ID／類型：** `raspa3`；軟體／氣體吸附與分離。以 C++23 從頭重寫的古典分子模擬程式，採力場式 Monte Carlo／分子動力學，用於奈米多孔材料中的吸附與擴散，以及流體的熱力學與傳輸性質；為 RASPA2 的後繼版本。
- **展示判定：** 可展示但須註記。官方程式庫、LICENSE.md（MIT 全文）與 J. Chem. Phys. 論文均已核實；README 與論文摘要未以 MOF 一詞界定目標材料。
- **MOF 適用性：** 適用性為間接確認：論文與 README 的對象是「nanoporous materials」，剛性骨架與骨架格點等功能與 MOF 吸附模擬相符，但 README 與摘要未出現 MOF 一詞，專案文件中的 MOF 範例未確認。
- **授權與狀態：** MIT License（程式碼；LICENSE.md 版權人為 Dubbeldam、Calero、Vlugt、Snurr）。最後推送 2026-10-06（GitHub API）；README 列有 release 工作流程徽章，實際 release 清單未逐一核對。
- **必要註記：**
  - README 與論文摘要未明列 MOF；用於 MOF 前請自行核對力場與骨架電荷的來源。
  - README 將多項功能（彈性骨架、反應系綜等）標為 Experimental，應視為未成熟。
  - GitHub API 的授權欄位回報 NOASSERTION，實際授權以 LICENSE.md 的 MIT 全文為準；論文摘要亦稱程式碼以 MIT 授權發布。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/iRASPA/RASPA3> | RASPA3 官方程式庫 |
| 官方來源 | <https://iRASPA.github.io/RASPA3> | RASPA3 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/iRASPA/RASPA3/main/LICENSE.md> | MIT License（程式碼；LICENSE.md 版權人為 Dubbeldam、Calero、Vlugt、Snurr） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1063/5.0226249> | RASPA3: A Monte Carlo code for computing adsorption and diffusion in nanoporous materials and thermodynamics properties of fluids (DOI 10.1063/5.0226249) |
| 官方文件 | <https://iRASPA.github.io/RASPA3> | RASPA3 官方文件: 公開; 使用說明與範例 |
| 程式碼 release | <https://github.com/iRASPA/RASPA3/releases> | RASPA3 GitHub Releases: 公開; 版本化原始碼與建置資產 |


### MOSAEC

- **ID／類型：** `mosaec`；軟體／結構處理與孔隙分析。以金屬氧化態分析自動偵測 CIF 或 MOL2 中化學上不合理的晶體結構（MOF、配位聚合物等）的演算法，輸出每個金屬位點的氧化態與錯誤旗標。
- **展示判定：** 可展示但須註記。官方程式庫、GPL-3.0 LICENSE 與 JACS 論文均已核實；程式相依需授權的 CCDC CSD Python API。
- **MOF 適用性：** 直接適用。README 說明驗證主要在 MOF 結構上進行；方法本身可用於含金屬的 CIF／MOL2。
- **授權與狀態：** GNU GPL v3.0（程式碼）。最後推送 2025-04-11（GitHub API），距核實日約 18 個月；視為更新趨緩。
- **必要註記：**
  - 需另行安裝並取得授權的 CSD Python API（CCDC），沒有授權者無法執行。
  - GPL-3.0 為 copyleft，散布衍生作品須依該授權。
  - 電子數（electron count）輸出依 README 屬實驗性、未驗證，不建議使用。
  - README 引用的 ChemRxiv 預印本與正式 JACS 論文標題不同，二者是否為同一工作未逐項確認。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/uowoolab/MOSAEC> | MOSAEC 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/uowoolab/MOSAEC/main/LICENSE> | GNU GPL v3.0（程式碼） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/jacs.5c04914> | High Structural Error Rates in “Computation-Ready” MOF Databases Discovered by Checking Metal Oxidation States (DOI 10.1021/jacs.5c04914) |
| 原始論文 | <https://doi.org/10.1039/D4SC07438F> | MOSAEC-DB（Chemical Science）: 出版者頁；開放取用狀態未確認; 以 MOSAEC 篩選的實驗 MOF 資料庫論文 |
| 原始論文 | <https://doi.org/10.26434/chemrxiv-2024-ftsv3> | ChemRxiv 預印本（README 所引）: 預印本; 標題與正式 JACS 版不同，兩者對應關係未確認 |


### MOFChecker (mofchecker)

- **ID／類型：** `mofchecker`；軟體／結構處理與孔隙分析。對 MOF 晶體結構做快速合理性檢查的 Python 套件：偵測缺元素、原子重疊、價數過高、可能缺氫位置、異常 EQeq 電荷、浮動分子與結構圖雜湊等。
- **展示判定：** 可展示但須註記。官方程式庫與 MIT LICENSE 已核實；未找到可確認屬於此程式庫的專屬論文，故不列 paper。
- **MOF 適用性：** 直接適用。README 明言用途為 MOF 晶體結構的快速合理性檢查，並稱僅用於剔除明顯不合理的結構。
- **授權與狀態：** MIT License（程式碼）。最後推送 2026-07-06（GitHub API）；README 提供 PyPI 套件與 readthedocs 文件。
- **必要註記：**
  - README 自述檢查「nothing too fancy」，通過檢查不代表結構化學上正確。
  - 未確認專屬論文。Digital Discovery 2025 另有同名論文「MOFChecker: a package for validating and correcting metal–organic framework (MOF) structures」（doi 10.1039/d5dd00109a），Crossref 作者含 Jablonka，但本次未能確認其程式碼就是本程式庫，故未列為本專案論文。
  - 同名工具容易混淆，引用前請確認所用的是哪一個程式庫與版本。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/lamalab-org/mofchecker> | mofchecker 官方程式庫 |
| 官方來源 | <https://mofchecker.readthedocs.io/en/latest/> | mofchecker 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/lamalab-org/mofchecker/main/LICENSE> | MIT License（程式碼） |
| 官方文件 | <https://mofchecker.readthedocs.io/en/latest/> | mofchecker 文件: 公開; 使用說明 |
| 程式碼 release | <https://pypi.org/project/mofchecker> | PyPI 套件頁: 公開; 穩定版套件 |


### AuToGraFS

- **ID／類型：** `autografs`；軟體／結構處理與孔隙分析。將分子建築區塊（SBU）映射到拓撲藍圖（nets）以生成 MOF、COF 與其他週期性骨架的 Python 工具，也可反向把結構拆解為建築區塊並辨識其 net。
- **展示判定：** 可展示但須註記。官方程式庫與 J. Phys. Chem. A 論文已核實；程式庫內三份授權相關檔案內容彼此不一致，授權狀態未能簡化為單一結論。
- **MOF 適用性：** 直接適用。README 與論文均以 MOF 生成為核心，並以 MOF-5 為示例。
- **授權與狀態：** 授權檔案不一致：README 稱 MIT；LICENSE.txt 為 LGPL 2.1-or-later 聲明；COPYING 為 GPL v2 全文；COPYING.LESSER 為 LGPL v2.1 全文。最後推送 2026-09-02（GitHub API）；README 描述為第 3 版全面重寫，PyPI 套件名為 AuToGraFS。
- **必要註記：**
  - 授權不一致：README 與 LICENSE.txt 標示不同（MIT 對 LGPL 2.1-or-later），另有 GPL v2 全文。本條目不擇一，使用或再散布前須向作者確認。
  - GitHub API 授權欄位回報 NOASSERTION。
  - 內含的建築區塊庫轉自 PORMAKE（MIT），repo 另附 PORMAKE_LICENSE.md。
  - 生成結構不保證可合成。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/DCoupry/autografs> | AuToGraFS 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/DCoupry/autografs/master/LICENSE.txt> | 授權檔案不一致：README 稱 MIT；LICENSE.txt 為 LGPL 2.1-or-later 聲明；COPYING 為 GPL v2 全文；COPYING.LESSER 為 LGPL v2.1 全文 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/jp507643v> | AuToGraFS: Automatic Topological Generator for Framework Structures (DOI 10.1021/jp507643v) |
| 官方文件 | <https://raw.githubusercontent.com/DCoupry/autografs/master/LICENSE.txt> | LICENSE.txt（LGPL 聲明）: 公開; 授權聲明 |
| 官方文件 | <https://raw.githubusercontent.com/DCoupry/autografs/master/COPYING> | COPYING（GPL v2 全文）: 公開; 授權全文 |
| 官方文件 | <https://raw.githubusercontent.com/DCoupry/autografs/master/COPYING.LESSER> | COPYING.LESSER（LGPL v2.1 全文）: 公開; 授權全文 |


### ToBaCCo 3.0

- **ID／類型：** `tobacco-3`；軟體／結構處理與孔隙分析。Topologically Based Crystal Constructor：依拓撲與分子建築區塊產生多孔晶體（含 MOF）的 CIF，供分子模擬或材料表徵使用。
- **展示判定：** 可展示但須註記。官方程式庫與 GPL-3.0 LICENSE 已核實；README 未引用任何論文，論文對應為依作者與內容推定，並非程式庫自行聲明。
- **MOF 適用性：** 直接適用。README 與所列論文均以 MOF 與多孔晶體建構為目標。
- **授權與狀態：** GNU GPL v3.0（程式碼）。最後推送 2021-04-07（GitHub API），已逾五年未更新；README 測試版本為 Python 2.7 與 3.7／3.8。
- **必要註記：**
  - 約五年未更新，README 的環境僅測到 Python 3.7／3.8，新版相依能否運作未確認。
  - README 未引用論文；所列論文為依作者與主題推定。
  - GPL-3.0 為 copyleft。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/tobacco-mofs/tobacco_3.0> | ToBaCCo 3.0 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/tobacco-mofs/tobacco_3.0/master/LICENSE> | GNU GPL v3.0（程式碼） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acs.cgd.7b00848> | Topologically Guided, Automated Construction of Metal–Organic Frameworks and Their Evaluation for Energy-Related Applications (DOI 10.1021/acs.cgd.7b00848) |
| 原始論文 | <https://doi.org/10.1039/c8ce01637b> | Increasing topological diversity during computational “synthesis” of porous crystals: how and why（CrystEngComm 2019）: 出版者頁；開放取用狀態未確認; 同作者群（Anderson、Gómez-Gualdrón）之拓撲多樣性論文；是否為 3.0 版本的發表論文未確認 |
| 官方文件 | <https://github.com/tobacco-mofs/tobacco_3.0> | tobacco_3.0 GitHub（含 ToBaCCo_manual.pdf）: 公開; README 稱附使用手冊 PDF |


### lammps_interface

- **ID／類型：** `lammps-interface`；軟體／分子模擬與熱力學。把 CIF 結構自動轉成 LAMMPS 模擬輸入檔（預設 UFF 參數）的 Python 工具，用於 MOF 的分子動力學。
- **展示判定：** 可展示但須註記。官方程式庫、MIT LICENSE 與論文均已核實；README 明言目前無人維護。
- **MOF 適用性：** 直接適用。程式庫描述與所引論文均以 MOF 為對象。
- **授權與狀態：** MIT License（程式碼）。README 開頭聲明套件目前無人維護（徵求維護者見 issue #61）；最後推送 2023-05-24（GitHub API）。
- **必要註記：**
  - 無人維護，與新版 LAMMPS 的相容性未確認。
  - 預設為 UFF 通用力場，其對特定 MOF 的準確度需自行驗證。
  - CIF 需先轉為 P1 對稱。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/peteboyd/lammps_interface> | lammps_interface 官方程式庫 |
| 官方來源 | <https://lammps-interface.readthedocs.io/> | lammps_interface 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/peteboyd/lammps_interface/master/LICENSE> | MIT License（程式碼） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acs.jpclett.6b02532> | Force-Field Prediction of Materials Properties in Metal-Organic Frameworks (DOI 10.1021/acs.jpclett.6b02532) |
| 官方文件 | <https://lammps-interface.readthedocs.io/> | lammps-interface 文件: 公開; 使用說明 |
| 官方文件 | <https://github.com/peteboyd/lammps_interface/issues/61> | 徵求維護者 issue #61: 公開; 維護狀態說明 |


### mofstructure

- **ID／類型：** `mofstructure`；軟體／結構處理與孔隙分析。將 MOF、COF 或籠狀分子拆解為建築單元、計算孔隙、移除未鍵結客體並輸出建築單元化學資訊學資料的 Python 套件，README 另述 net 辨識。
- **展示判定：** 可展示但須註記。官方程式庫已核實；LICENSE 檔含兩份不同授權文字；未將其 README 指定的預印本當作本工具論文，故不列 paper。
- **MOF 適用性：** 直接適用。README 以 MOF 拆解與孔隙分析為主要功能。
- **授權與狀態：** README 與 badge 標示 MIT；但 LICENSE 檔先為 MIT 全文（版權 2023 bafgreat），其後接 Apache License 2.0 全文。最後推送 2026-10-05（GitHub API）；活躍。
- **必要註記：**
  - 授權不明確：LICENSE 檔串接 MIT 與 Apache-2.0 兩份全文，README 僅稱 MIT；GitHub API 授權欄位回報 NOASSERTION。使用或再散布前請向作者確認。
  - README 要求引用的是 FAIR-MOFs 預印本（Research Square，doi 10.21203/rs.3.rs-8375247/v1），主題為由結構推論合成條件，並非本工具的方法論文；本次未找到專屬論文。
  - 部分功能為連接性啟發式，結果需人工檢核。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/bafgreat/mofstructure> | mofstructure 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/bafgreat/mofstructure/main/LICENSE> | README 與 badge 標示 MIT；但 LICENSE 檔先為 MIT 全文（版權 2023 bafgreat），其後接 Apache License 2.0 全文 |
| 官方文件 | <https://github.com/bafgreat/mofstructure> | mofstructure README: 公開; 功能表與指令範例 |


### MOFTransformer / PMTransformer

- **ID／類型：** `moftransformer`；軟體／機器學習與資料。多模態預訓練 Transformer，用於多孔材料性質預測的遷移學習；2.0.0 起預設預訓練模型為 PMTransformer（涵蓋 MOF 及其他多孔材料），並保留 MOFTransformer。
- **展示判定：** 可展示但須註記。官方程式庫、MIT 授權、Nature Machine Intelligence 論文與 Figshare 預訓練權重均已核實。
- **MOF 適用性：** 直接適用。論文標題以 MOF 為對象；PMTransformer 另涵蓋 COF、PPN 與沸石。
- **授權與狀態：** MIT License（程式碼）；Figshare 預訓練權重頁標示 CC BY 4.0。最後推送 2026-05-23（GitHub API）；README 記載 2.2.0 版。
- **必要註記：**
  - 權重各約 1 GB，須另行下載。
  - 各 Figshare 記錄的授權標示不同（CC BY 4.0、MIT），再利用時需分別引用該記錄的條款。
  - 預訓練假想結構不保證可合成。
  - README 測試環境以 Linux 為主。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/hspark1212/MOFTransformer> | MOFTransformer 官方程式庫 |
| 官方來源 | <https://hspark1212.github.io/MOFTransformer/index.html> | MOFTransformer 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/hspark1212/MOFTransformer/master/LICENSE> | MIT License（程式碼）；Figshare 預訓練權重頁標示 CC BY 4.0 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1038/s42256-023-00628-2> | A multi-modal pre-training transformer for universal transfer learning in metal–organic frameworks (DOI 10.1038/s42256-023-00628-2) |
| 資料保存庫 | <https://doi.org/10.6084/m9.figshare.22698655> | PMTransformer 預訓練模型（Figshare）: 公開，CC BY 4.0; pmtransformer.ckpt、moftransformer.ckpt（各約 1 GB）與 jsons.zip |
| 資料保存庫 | <https://doi.org/10.6084/m9.figshare.21155506> | MOFTransformer 資料與微調權重（Figshare v2）: 公開；該記錄授權標示為 MIT; CoRE MOF、QMOF 等下游資料與微調 checkpoint |
| 官方文件 | <https://hspark1212.github.io/MOFTransformer/index.html> | MOFTransformer 官方文件: 公開; 安裝與訓練教學 |


### MOFormer

- **ID／類型：** `moformer`；軟體／機器學習與資料。以 MOFid 字串為輸入、無需三維結構的自監督 Transformer，用於 MOF 性質預測；與結構式 CGCNN 以 Barlow Twins 方式聯合預訓練。
- **展示判定：** 可展示但須註記。官方程式庫、Apache-2.0 授權與 JACS 論文均已核實；資料為彙整自多個第三方資料庫。
- **MOF 適用性：** 直接適用。論文與 README 均以 MOF 性質預測為目標。
- **授權與狀態：** Apache License 2.0（程式碼）；Figshare 預訓練資料記錄標示 MIT。最後推送 2026-07-02（GitHub API）；README 稱作者已畢業，但會定期查看 GitHub issue。
- **必要註記：**
  - Figshare 記錄標 MIT，但記錄描述同時要求引用各原始資料集；彙整資料的實際再利用條款未確認。
  - 以 MOFid 為輸入，MOFid 無法表示的結構（如部分含客體或特殊連接）能否處理未確認。
  - 作者已離開原機構，維護依賴 issue 回應。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/zcao0420/MOFormer> | MOFormer 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/zcao0420/MOFormer/main/LICENSE> | Apache License 2.0（程式碼）；Figshare 預訓練資料記錄標示 MIT |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/jacs.2c11420> | MOFormer: Self-Supervised Transformer Model for Metal–Organic Framework Property Prediction (DOI 10.1021/jacs.2c11420) |
| 資料保存庫 | <https://doi.org/10.6084/m9.figshare.23532918> | MOFormer 預訓練資料（Figshare）: 公開；該記錄授權標示為 MIT; cif.tar.xz，約 1.15 GB；記錄描述稱為多個公開資料集的彙整，使用時需引用原始資料集 |
| 原始論文 | <https://arxiv.org/abs/2210.14188> | arXiv 預印本: 公開; 預印本全文 |


### MOFSimplify

- **ID／類型：** `mofsimplify`；軟體／機器學習與資料。提供 MOF 穩定性（活化與熱穩定性）等性質預測的網站與其原始碼，模型以由文獻萃取的穩定性資料訓練。
- **展示判定：** 可展示但須註記。官方程式庫、MIT LICENSE 與兩篇論文均已核實；本機執行的後端程式碼會連到作者的 MongoDB，無權限者須自行註解。
- **MOF 適用性：** 直接適用。兩篇論文均以 MOF 穩定性預測為主題。
- **授權與狀態：** MIT License（程式碼）。最後推送 2025-10-24（GitHub API）；README 測試環境為 Python 3.8.5 與 2021 年的瀏覽器版本，網站目前是否可用未逐項測試。
- **必要註記：**
  - 本機執行會連 MongoDB，無權限者須註解相關程式碼，因此完整功能無法自建。
  - 訓練資料的授權與下載位置未確認。
  - 依賴的 molSimplify 等套件之授權未逐一核對。
  - 使用者提供的回饋資料品質未確認。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/hjkgrp/MOFSimplify> | MOFSimplify 官方程式庫 |
| 官方來源 | <https://mofsimplify.mit.edu/> | MOFSimplify 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/hjkgrp/MOFSimplify/main/LICENSE> | MIT License（程式碼） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1038/s41597-022-01181-0> | MOFSimplify, machine learning models with extracted stability data of three thousand metal–organic frameworks (DOI 10.1038/s41597-022-01181-0) |
| 原始論文 | <https://doi.org/10.1021/jacs.1c07217> | JACS 2021：Using Machine Learning and Data Mining to Leverage Community Knowledge for the Engineering of Stable Metal–Organic Frameworks: 出版者頁；開放取用狀態未確認; 網站上模型的詳細說明 |
| 資料服務／API | <https://mofsimplify.mit.edu/> | MOFSimplify 網站: 公開網站; 預測與社群回饋介面 |


### MOFFlow

- **ID／類型：** `mofflow`；軟體／機器學習與資料。以 flow matching 做 MOF 結構預測的生成模型：給定建築區塊，預測其在晶胞中的排列。
- **展示判定：** 可展示但須註記。官方程式庫、MIT 授權與 Zenodo 資料／checkpoint（CC BY 4.0）已核實；論文為 ICLR 2025，無法以 Crossref 查證，故 DOI 使用 arXiv 的 DataCite 記錄。
- **MOF 適用性：** 直接適用。標題與 README 均以 MOF 結構預測為對象。
- **授權與狀態：** MIT License（程式碼）；Zenodo 資料與 checkpoint 為 CC BY 4.0。最後推送 2025-08-28（GitHub API）；未逐項核對 release。
- **必要註記：**
  - 本條目的 DOI 是 arXiv 預印本，不是 ICLR 出版者 DOI。
  - 研究程式碼；預測結構未經實驗驗證。
  - 論文主實驗與 README 建議的 batch 版為不同實作（timebatch 與 batch），重現論文數字須切換分支。
  - 需另行安裝 MOFDiff 與 zeo++。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/nayoung10/MOFFlow> | MOFFlow 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/nayoung10/MOFFlow/main/LICENSE> | MIT License（程式碼）；Zenodo 資料與 checkpoint 為 CC BY 4.0 |
| 原始論文（出版者 DOI） | <https://arxiv.org/abs/2410.17270> | MOFFlow: Flow Matching for Structure Prediction of Metal-Organic Frameworks (DOI 10.48550/arXiv.2410.17270) |
| 資料保存庫 | <https://zenodo.org/records/15187230> | MOFFlow 資料與 checkpoint（Zenodo）: 公開，CC BY 4.0; 處理後的 train／val／test 檔與 batch、timebatch 兩種 checkpoint |
| 原始論文 | <https://openreview.net/forum?id=dNT3abOsLo> | ICLR 2025 論文頁（OpenReview，README 所引）: 公開; 會議論文頁 |


### ChatMOF

- **ID／類型：** `chatmof`；軟體／機器學習與資料。以大型語言模型（README 列 GPT-4、GPT-3.5-turbo 系列）從文字輸入萃取需求，進行 MOF 的資料查詢、性質預測與結構生成的 AI 系統。
- **展示判定：** 可展示但須註記。官方程式庫、MIT 授權、Nature Communications 論文與 Figshare 資料庫均已核實；執行須使用 OpenAI API。
- **MOF 適用性：** 直接適用。論文與 README 均以 MOF 預測與生成為目標。
- **授權與狀態：** MIT License（程式碼）；Figshare 資料庫與 Zenodo release 標示 CC BY 4.0。最後推送 2025-05-15（GitHub API），距核實日約 17 個月；README 記載 0.2.0 版。
- **必要註記：**
  - 必須使用 OpenAI API（付費、外部服務），結果隨所選模型版本變動，不可完全重現。
  - 以 Linux 為主要測試環境；torch 與 moftransformer 相依衝突時須降版。
  - 語言模型的輸出可能錯誤，預測值需以模擬或實驗核對。
  - 距最後推送已約 17 個月，近期維護活躍度有限。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/Yeonghun1675/ChatMOF> | ChatMOF 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/Yeonghun1675/ChatMOF/master/LICENSE> | MIT License（程式碼）；Figshare 資料庫與 Zenodo release 標示 CC BY 4.0 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1038/s41467-024-48998-4> | ChatMOF: an artificial intelligence system for predicting and generating metal-organic frameworks using large language models (DOI 10.1038/s41467-024-48998-4) |
| 資料保存庫 | <https://doi.org/10.6084/m9.figshare.24287731> | Database for ChatMOF（Figshare）: 公開，CC BY 4.0; tables.zip、coremof.zip、hMOF.zip（hMOF 約 1.8 GB） |


### L2M3 (Large Language Models Material Miner)

- **ID／類型：** `l2m3`；軟體／機器學習與資料。以多個語言模型代理（分類、納入、萃取）從科學文獻的文字與表格中萃取 MOF 實驗資料（性質與合成條件），輸出結構化 JSON。
- **展示判定：** 可展示但須註記。官方程式庫、MIT 授權、JACS 論文與 Figshare 資料庫均已核實；執行須使用 OpenAI API，資料庫為出版物文字萃取結果。
- **MOF 適用性：** 直接適用。README 與論文均以 MOF 文獻資料收集為目標。
- **授權與狀態：** MIT License（程式碼）；Figshare 資料庫記錄標示 MIT。最後推送 2026-03-21（GitHub API）。
- **必要註記：**
  - 須自備 OpenAI API 金鑰（付費、外部服務），萃取結果隨模型版本變動。
  - 資料庫由出版物萃取，Figshare 記錄標 MIT，但出版社對文字內容的權利是否影響再利用未確認。
  - 萃取結果可能有錯誤，使用前需抽樣核對；錯誤率本次未查證。
  - 論文爬取須遵守各出版社條款。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/Yeonghun1675/L2M3> | L2M3 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/Yeonghun1675/L2M3/master/LICENSE> | MIT License（程式碼）；Figshare 資料庫記錄標示 MIT |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/jacs.4c11085> | Harnessing Large Language Models to Collect and Analyze Metal–Organic Framework Property Data Set (DOI 10.1021/jacs.4c11085) |
| 資料保存庫 | <https://doi.org/10.6084/m9.figshare.27187917> | L2M3 Database（Figshare）: 公開；該記錄授權標示為 MIT; 依出版社（ACS、Elsevier、RSC、Springer）分檔的合成與應用萃取 JSON |


### GHP-MOFassemble

- **ID／類型：** `ghp-mofassemble`；軟體／碳捕捉／DAC。結合擴散模型（DiffLinker）生成 linker、組裝為 pcu 拓撲 MOF、CGCNN 預測 CO₂ 容量與分子動力學篩選的碳捕捉 MOF 設計流程。
- **展示判定：** 可展示但須註記。官方程式庫與 Communications Chemistry 論文已核實；授權檔 LICENSE-CC-BY 為 CC BY 4.0 全文，套用於程式碼，屬少見的授權選擇。
- **MOF 適用性：** 直接適用。論文與 README 均以 MOF 設計與碳捕捉為目標。
- **授權與狀態：** CC BY 4.0（README 稱框架以 CC BY 4.0 發布；授權檔為 LICENSE-CC-BY）。最後推送 2024-04-04（GitHub API），已約 2.5 年；視為封存性研究程式碼。
- **必要註記：**
  - 約 2.5 年未更新；相依清單僅在 notebook 中。
  - Creative Commons 授權通常不用於軟體（CC 官方不建議），其對程式碼的專利與商標條款等細節請自行評估，必要時詢問作者。
  - 預測結構與容量均為計算結果，未經實驗驗證。
  - Crossref 記載論文發表於 2024 年第 7 卷第 21 篇；README 另稱 2023，以出版者記錄為準。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/hyunp2/ghp_mof> | GHP-MOFassemble 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/hyunp2/ghp_mof/main/LICENSE-CC-BY> | CC BY 4.0（README 稱框架以 CC BY 4.0 發布；授權檔為 LICENSE-CC-BY） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1038/s42004-023-01090-2> | A generative artificial intelligence framework based on a molecular diffusion model for the design of metal-organic frameworks for carbon capture (DOI 10.1038/s42004-023-01090-2) |
| 官方文件 | <https://raw.githubusercontent.com/hyunp2/ghp_mof/main/LICENSE-CC-BY> | LICENSE-CC-BY（CC BY 4.0 全文）: 公開; 授權全文 |


### MOF Literature Extraction (SynMOF)

- **ID／類型：** `synmof-literature-extraction`；軟體／機器學習與資料。從文獻自動萃取 MOF 合成資訊的程式：Node.js 負責出版物下載，Python 負責文獻萃取；機器學習模型訓練程式碼在另一個程式庫。
- **展示判定：** 可展示但須註記。官方程式庫與 MIT LICENSE 已核實；論文由 README 列出的標題與作者，經 Crossref 比對後確認。
- **MOF 適用性：** 直接適用。論文標題與 README 均以 MOF 合成預測為目標。
- **授權與狀態：** MIT License（程式碼）。最後推送 2021-08-03（GitHub API），已逾五年未更新。
- **必要註記：**
  - 約五年未更新；出版社網站結構改變可能使下載與萃取失效，未測試。
  - README 極簡，未提供安裝需求、相依套件與使用說明。
  - 資料來自出版物，再利用條款未載明。
  - README 未給出論文 DOI；對應論文是依標題與作者經 Crossref 比對確認。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/Tsotsalas-Group/MOF_Literature_Extraction> | MOF Literature Extraction 官方程式庫 |
| 授權正文 | <https://raw.githubusercontent.com/Tsotsalas-Group/MOF_Literature_Extraction/main/LICENSE> | MIT License（程式碼） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1002/anie.202200242> | MOF Synthesis Prediction Enabled by Automatic Data Mining and Machine Learning (DOI 10.1002/anie.202200242) |
| 程式碼 release | <https://github.com/aimat-lab/MOF_Synthesis_Prediction> | MOF_Synthesis_Prediction（機器學習模型程式庫）: 公開; README 指為合成預測模型的訓練程式碼；授權與內容未核對 |


### ARC-MOF

- **ID／類型：** `arc-mof`；資料庫／機器學習與資料。收錄約 280,000 個「經實驗表徵或計算產生」的 MOF 結構之資料庫；依 Zenodo 說明，所有 MOF 皆附有 DFT 導出的 REPEAT 電荷、吸附資料與多種描述子。
- **展示判定：** 可展示但須註記。Zenodo 紀錄（v7，2025-08）、CC BY 4.0 與 Chem. Mater. 論文均已核實；上游結構來源的個別授權條件未在紀錄中逐項列出。
- **MOF 適用性：** 直接面向 MOF。紀錄稱涵蓋「所有公開 MOF 資料庫」，同時含實驗與計算產生的結構，需自行區分。
- **授權與狀態：** 資料：CC BY 4.0（Zenodo 紀錄所載）。Zenodo 有 v2 至 v7 的版本史（v7 加入維度資訊，2025-08 發布）；其後是否續更未確認。
- **必要註記：**
  - Zenodo 的 concept DOI 是 10.5281/zenodo.6908727；10.5281/zenodo.16802743 是 v7 的版本 DOI，引用時應記錄版本。
  - 紀錄以 CC BY 4.0 整體授權，但未逐項說明上游結構（含可能源自 CSD 者）的再散布條件；是否含 CSD 衍生內容未確認。
  - 版本間內容有增刪（v5 移除錯誤結構並修正 Sm 電荷、v6 移除 m29 結構），不同版本的結果不可直接比較。
  - 預印本與正式論文的授權不同，且論文授權不等同於資料授權。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 官方來源 | <https://doi.org/10.5281/zenodo.6908727> | ARC-MOF Zenodo 紀錄 |
| 授權正文 | <https://creativecommons.org/licenses/by/4.0/legalcode> | 資料：CC BY 4.0（Zenodo 紀錄所載） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acs.chemmater.2c02485> | ARC–MOF: A Diverse Database of Metal-Organic Frameworks with DFT-Derived Partial Atomic Charges and Descriptors for Machine Learning (DOI 10.1021/acs.chemmater.2c02485) |
| 資料保存庫 | <https://zenodo.org/records/16802743> | ARC-MOF Zenodo 最新版（v7）: 公開，CC BY 4.0；本次自動抓取 Zenodo API 遭 403，內容由網頁頁面核對; 約 7.3 GB：CIF 壓縮檔、電荷、描述子、吸附與程序 CSV |
| 資料保存庫 | <https://doi.org/10.5281/zenodo.6908727> | ARC-MOF Zenodo concept DOI: 公開；永遠指向最新版本（自動抓取遭 403，以 DataCite 核對）; DataCite 顯示 16802743 為其下一個版本 DOI |
| 原始論文 | <https://doi.org/10.26434/chemrxiv-2022-mvr06> | ChemRxiv 預印本: 預印本；Crossref 標示授權為 CC BY-NC-ND 4.0; 正式論文的前身稿，Crossref 記載其 is-preprint-of 該 Chem. Mater. 論文 |


### MOFX-DB

- **ID／類型：** `mofx-db`；資料庫／氣體吸附與分離。提供 MOF 與其他奈米多孔材料的計算吸附資料（CIF 與等溫線）的線上資料庫，網站可檢視並下載 CoRE MOF 2014／2019、hMOF、IZA、PCOD-syn、Tobacco 等資料集。
- **展示判定：** 可展示但須註記。官方網站、資料庫下載頁、API 頁與 JCED 論文均已核實；網站未載明資料授權。
- **MOF 適用性：** 直接相關：收錄 MOF 資料集，並含 IZA 沸石與 PCOD-syn 等非 MOF 集合，使用前需依資料集篩選。
- **授權與狀態：** 網站未載明資料授權；Python 用戶端 mofdb-client：MIT（GitHub 標示）。網站顯示目前資料庫版本 dc8a0295db 並可輸入版本代碼檢視舊版；GitHub 封存庫最後推送為 2022-12，用戶端為 2023-04。
- **必要註記：**
  - 網站與 API 頁沒有任何資料授權或使用條款（僅有引用請求與一張圖片的 CC BY 3.0 標示）；不得把 MIT 的用戶端授權套到資料上。
  - hMOF 是 Wilmer 等發表的假想 MOF 集合（論文 DOI 10.1038/nchem.1192），在此以資料集身分託管；本次未找到其獨立且載明授權的官方登陸頁，故不另立條目。
  - 首頁將 CSD 列為資料集，下載頁未列出；其內容是否含受 CCDC 授權限制的結構未確認。
  - 網頁查詢結果表只顯示前 100 筆，整批資料請用下載頁或 API。
  - 資料集含計算模擬等溫線，不等同實驗量測值。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/snurr-group/mofdb-x-archive> | MOFX-DB 官方網站 |
| 官方來源 | <https://mof.tech.northwestern.edu/> | MOFX-DB 官方網站 |
| 授權正文 | <https://github.com/n8ta/mofdb-client> | 網站未載明資料授權；Python 用戶端 mofdb-client：MIT（GitHub 標示） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1021/acs.jced.2c00583> | MOFX-DB: An Online Database of Computational Adsorption Data for Nanoporous Materials (DOI 10.1021/acs.jced.2c00583) |
| 專案資料目錄 | <https://mof.tech.northwestern.edu/databases> | MOFX-DB 資料庫下載頁: 公開下載；未見授權條款; 各資料集的 CIF 與等溫線整包、力場與 textural properties |
| 資料服務／API | <https://mof.tech.northwestern.edu/api> | MOFX-DB API 說明: 公開；頁面說明單位標頭與 /mofs.json 路由; 分頁 JSON API 與 mofdb_client 套件用法 |
| 程式碼 release | <https://github.com/n8ta/mofdb-client> | mofdb-client（Python 用戶端）: 公開，MIT; 存取 API 的 Python 封裝 |
| 資料保存庫 | <https://github.com/snurr-group/mofdb-x-archive> | mofdb-x-archive（資料版本封存）: 公開；GitHub 未標示授權; 資料庫變更封存，供重現他人結果 |
| 原始論文 | <https://doi.org/10.1038/nchem.1192> | hMOF：Large-scale screening of hypothetical metal–organic frameworks: 論文頁；出版者授權依 Nature Chemistry 條款; hMOF 假想 MOF 資料集的原始論文（Wilmer 等） |


### NIST/ARPA-E Database of Novel and Emerging Adsorbent Materials

- **ID／類型：** `nist-arpa-e-adsorbent-db`；資料庫／氣體吸附與分離。NIST 彙編的新興與新穎吸附材料之吸附等溫線資料庫（網站標題為 NIST/ARPA-E Database of Novel and Emerging Adsorbent Materials）；材料並非僅限 MOF。
- **展示判定：** 可展示但須註記。官方網站與版權聲明均已核實；網站標示 all rights reserved，不是開放授權，再利用範圍未確認。
- **MOF 適用性：** 部分相關。材料名稱中可見 MOF 類化合物，但首頁未說明 MOF 的比例或範圍，需自行篩選。
- **授權與狀態：** 網站標示「©2016 copyright by the U. S. Department of Commerce on behalf of the United States of America. All rights reserved.」；無獨立授權條款。網站可正常開啟；首頁的建立與更新日期欄位在本次抓取中為空白，更新頻率未確認。
- **必要註記：**
  - 版權行是 all rights reserved，與 NIST 通則「未標示版權者視為公開」並存；兩者如何適用於本資料庫未確認，須向 NIST 確認。
  - 首頁並未使用「ISODB」一詞；網址路徑為 /isodb/，名稱屬於由網址推得。
  - 首頁說明部分資料集由 SpringerMaterials 資助蒐集；其底層文獻資料的權利歸屬未確認。
  - JSON 端點可取用，但首頁沒有 API 文件或使用條款；端點回傳筆數會隨更新改變，亦非 MOF 專屬數字。
  - 網站有 NIST 免責聲明，不保證準確。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 官方來源 | <https://adsorption.nist.gov/isodb/> | NIST/ARPA-E 吸附資料庫官方網站 |
| 授權正文 | <https://www.nist.gov/copyrights-disclaimers> | 網站標示「©2016 copyright by the U. S. Department of Commerce on behalf of the United States of America. All rights reserved.」；無獨立授權條款 |
| 官方文件 | <https://www.nist.gov/copyrights-disclaimers> | NIST 版權與免責聲明: 公開；通則為「除標示為受版權保護者外視為公開資訊」; 一般條款；與資料庫頁面的 all rights reserved 並列，兩者關係未釐清 |
| 資料服務／API | <https://adsorption.nist.gov/isodb/api/isotherms.json> | 等溫線 JSON 端點: 2026-10-14 可無需登入取得；首頁未載明 API 使用條款; 約 39,988 筆等溫線（以端點回傳計） |
| 資料服務／API | <https://adsorption.nist.gov/isodb/api/materials.json> | 材料 JSON 端點: 2026-10-14 可無需登入取得；首頁未載明 API 使用條款; 約 9,328 筆吸附材料（以端點回傳計） |


### Materials Cloud Archive

- **ID／類型：** `materials-cloud-archive`；資料檢索入口／機器學習與資料。計算材料科學社群的資料保存庫，研究者可將資料、腳本與補充材料存放並取得 DOI；並非 MOF 專用，下列兩筆為 MOF 相關紀錄。
- **展示判定：** 可展示但須註記。官方 Archive 頁、政策頁與兩筆 MOF 紀錄均已核實；Archive 本身沒有預設資料授權，授權逐筆紀錄不同。
- **MOF 適用性：** 部分相關。平台涵蓋計算材料科學，MOF 資料需逐筆搜尋；本次僅核實下列兩筆。
- **授權與狀態：** 無平台預設授權；由上傳者逐筆選擇。本次核實的兩筆 MOF 紀錄皆為 CC BY 4.0；平台中繼資料為 CC BY-SA 4.0（電子郵件除外）。政策載明紀錄於 repository 存續期間內持續保存，且至少保存至存入後 10 年；下列紀錄為 2021、2022 年的 v1。
- **必要註記：**
  - Archive 沒有預設授權；不得把一筆紀錄的授權外推到整個平台。
  - 本次核實的紀錄編號為 materialscloud:2021.126 與 2022.101（網址為 records/et2ts-zxh44、records/tet5j-6fd97）；以 972、1429 組成的 records/ 網址在抓取時回傳 404。
  - 要存入資料需登入；上傳者須自行確認擁有發布權利，平台不轉移著作權。
  - 兩筆紀錄為 2021、2022 年的 v1，且內含結構或計算結果是否仍符合目前研究需求，需自行判斷。
  - yn-de 與 qt-cj 皆在 DataCite 記為另一個 DOI 的版本（10.24435/materialscloud:90-4r、10.24435/materialscloud:yr-mp），引用時請說明引用的版本。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 官方來源 | <https://archive.materialscloud.org/> | Materials Cloud Archive |
| 授權正文 | <https://archive.materialscloud.org/information> | 無平台預設授權；由上傳者逐筆選擇。本次核實的兩筆 MOF 紀錄皆為 CC BY 4.0；平台中繼資料為 CC BY-SA 4.0（電子郵件除外） |
| 原始論文（出版者 DOI） | <https://doi.org/10.1038/s41597-020-00637-5> | Materials Cloud, a platform for open computational science (DOI 10.1038/s41597-020-00637-5) |
| 資料保存庫 | <https://archive.materialscloud.org/records/et2ts-zxh44> | 多樣化假想 MOF 資料庫（materialscloud:2021.126）: 公開，CC BY 4.0（紀錄頁）; 約 20,000 個假想 MOF；mof_data.tar.gz 約 149 MiB（DOI 10.24435/materialscloud:yn-de） |
| 資料保存庫 | <https://archive.materialscloud.org/records/tet5j-6fd97> | MOF 氣體吸附與程序性能資料（materialscloud:2022.101）: 公開，CC BY 4.0（紀錄頁）; 約 9.4 GiB；CO₂、CH₄、H₂、N₂、O₂ 等溫線、Henry 係數與寄生能量估計（DOI 10.24435/materialscloud:qt-cj） |
| 官方文件 | <https://www.materialscloud.org/policies> | Materials Cloud 政策: 公開; 授權須由上傳者選擇，偏好開放授權（SPDX 清單） |
| 官方文件 | <https://archive.materialscloud.org/information> | Archive 資訊與審核規則: 公開; 審核、保存年限、撤回與檔案大小限制 |
| 原始論文 | <https://doi.org/10.1021/acsami.1c16220> | Diversifying Databases of Metal Organic Frameworks for High-Throughput Computational Screening（對應論文）: 論文頁；授權依出版者; yn-de 紀錄的對應論文（DataCite 記為 IsSupplementTo） |


### Open DAC 2025 (ODAC25)

- **ID／類型：** `odac25`；資料庫／碳捕捉／DAC。用於直接空氣捕碳（DAC）吸附劑篩選的 DFT 單點計算資料集：約 15,000 個 MOF 中 CO₂、H₂O、N₂、O₂ 的吸附，標籤為總能量與原子受力（PBE+D3，VASP），可用於訓練機器學習原子間勢能。
- **展示判定：** 可展示但須註記。Hugging Face 資料卡與 fairchem 官方文件均載明資料為 CC BY 4.0；取得需同意條件並提供個人資訊；模型檔授權不同。
- **MOF 適用性：** 直接針對 MOF 的 DAC 吸附；含功能化 MOF、GCMC 導出的高能放置與合成產生的框架，需區分來源。
- **授權與狀態：** 資料：CC BY 4.0；模型檔：FAIR Chemistry License v1（另有限制，非開放授權）；fairchem 程式碼：MIT。arXiv 預印本 v2 於 2025-09-23；fairchem 文件已將 ODAC23 標為 deprecated，建議改用 ODAC25。
- **必要註記：**
  - 資料規模說法不一致：fairchem 文件稱約 7,000 萬筆，arXiv v2 摘要稱近 6,000 萬筆；引用前請以下載後實測為準。
  - Hugging Face 頁面要求同意條件並提供姓名、生日與機構，且稱一旦送出不可更改；這是存取條件，與 CC BY 4.0 並存。
  - Hugging Face 網站在本次自動抓取回傳 401（datasets/ 路徑），資料卡內容由 facebook/ODAC25 頁面核對；下載說明所在的 DATASET.md 本次未找到。
  - 模型檢查點使用 FAIR Chemistry License v1；該頁說明不提供給受全面制裁地區及中國、俄羅斯、白俄羅斯，非開放授權。
  - 尚未找到 ODAC25 的同儕審查期刊版本，目前僅可引用預印本。
  - ODAC23 已被標為 deprecated；兩代資料的計算設定不同，不可直接混用。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 專案程式庫 | <https://github.com/facebookresearch/fairchem> | ODAC25 Hugging Face 資料卡 |
| 官方來源 | <https://huggingface.co/facebook/ODAC25> | ODAC25 Hugging Face 資料卡 |
| 授權正文 | <https://creativecommons.org/licenses/by/4.0/legalcode> | 資料：CC BY 4.0；模型檔：FAIR Chemistry License v1（另有限制，非開放授權）；fairchem 程式碼：MIT |
| 資料保存庫 | <https://huggingface.co/facebook/ODAC25> | ODAC25 Hugging Face 資料卡: 頁面公開，檔案需同意條件並提供姓名、生日與機構；自動抓取 datasets/ 路徑回傳 401; 資料集說明與 eSEN 模型檢查點；資料卡載明資料 CC-BY-4.0 |
| 官方文件 | <https://github.com/facebookresearch/fairchem/blob/main/docs/dac/datasets/odac25.md> | fairchem ODAC25 文件原始檔: 公開; 資料規模、授權（CC BY 4.0）與引用方式；格式為 aselmdb |
| 原始論文 | <https://arxiv.org/abs/2508.03162> | ODAC25 預印本: 公開；DataCite 標示 CC BY 4.0; 資料集與模型的說明；尚未找到正式期刊版本 |
| 官方文件 | <https://github.com/facebookresearch/fairchem/blob/main/docs/dac/datasets/odac23.md> | ODAC23 文件（已標為過時）: 公開；下載連結在 dl.fbaipublicfiles.com; ODAC23 的 S2EF 與 IS2RE 任務資料；文件載明 CC BY 4.0 |
| 原始論文 | <https://doi.org/10.1021/acscentsci.3c01629> | ODAC23 論文（ACS Central Science）: 論文頁；授權依出版者; ODAC23 資料集與挑戰；另有 2025 年的 Correspondence 刊出 |


### NOMAD Repository

- **ID／類型：** `nomad-repository`；資料檢索入口／機器學習與資料。通用的材料科學研究資料儲存庫與搜尋入口，保存 DFT 等計算的輸入輸出檔並提供檢索與 API；目前 catalog 中的 QMOF PBE 計算檔即連結於此。
- **展示判定：** 可展示但須註記。官方使用條款、FAQ 與 API 端點均已核實；NOMAD 不是 MOF 專用資料庫，且條款文件日期為 2018 年。
- **MOF 適用性：** 部分相關。平台涵蓋整體材料科學，沒有可核實的 MOF 專屬子集；MOF 資料需靠搜尋或已知條目 DOI 取得。
- **授權與狀態：** 開放存取內容：CC BY 4.0（使用條款第 1、5.3 節）；NOMAD 中繼資料：除另有規定外為 CC0。API info 端點於 2026-10-14 回應；條款頁日期為 2018-07-17；保存承諾為至少 10 年。
- **必要註記：**
  - 這是通用材料資料庫，不是 MOF 資料庫；不要把平台統計（API 於 2026-10-14 回傳 19,480,451 筆 entries）當成 MOF 數量。
  - 條款日期為 2018-07-17，且載明修訂版自公布日起適用；引用前請再讀最新版。
  - FAQ 稱只有 mainfile 與 auxiliary files 可公開下載，不是所有上傳檔案。
  - 上傳者保有著作權並保證有權授權；若上傳的是第三方衍生資料，其授權是否相容未確認。
  - 受禁運的資料只顯示部分中繼資料，在到期或解除前不能取得內容。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 官方來源 | <https://nomad-lab.eu/> | NOMAD 使用條款 |
| 授權正文 | <https://nomad-lab.eu/nomad-lab/terms.html> | 開放存取內容：CC BY 4.0（使用條款第 1、5.3 節）；NOMAD 中繼資料：除另有規定外為 CC0 |
| 原始論文（出版者 DOI） | <https://doi.org/10.21105/joss.05388> | NOMAD: A distributed web-based platform for managing materials science research data (DOI 10.21105/joss.05388) |
| 官方文件 | <https://nomad-lab.eu/nomad-lab/terms.html> | NOMAD 使用條款: 公開; 授權、禁運、保存與上傳規則 |
| 官方文件 | <https://nomad-lab.eu/nomad-lab/faqs.html> | NOMAD FAQ: 公開; 引用、禁運（最長 36 個月）與公開下載範圍說明 |
| 資料服務／API | <https://nomad-lab.eu/prod/v1/api/v1/info> | NOMAD API info: 公開 JSON；FAQ 提到超過速率限制會回 503; 平台統計、解析器與版本資訊 |
| 資料保存庫 | <https://doi.org/10.17172/NOMAD/2021.10.10-1> | QMOF PBE on NOMAD: 公開瀏覽；個別條目的再利用條件請查記錄; QMOF 的 VASP DFT 輸入輸出（catalog 的 QMOF 條目已列） |


### Cambridge Structural Database (CSD)

- **ID／類型：** `csd-cambridge-structural-database`；資料庫／結構處理與孔隙分析。收錄有機與金屬有機實驗晶體結構的精選資料庫。多數 MOF 資料集（如 CoRE MOF、MOSAEC-DB 的建置流程）以其結構為上游來源；系統性檢索需 CSD 授權，另有逐筆查詢的免費服務。
- **展示判定：** 可展示但須註記。CCDC 官方頁面（CSD 統計、Access Structures 條款）已核實；CSD 為授權制商用資料庫，不是開源或開放資料。
- **MOF 適用性：** 直接相關但非 MOF 專庫。實驗 MOF 結構的主要上游，但本次未核實 CCDC 網站上有可用的 MOF 子集頁面（先前探測的 MOF subset 網址回傳的是首頁式內容，不是 MOF 頁）。
- **授權與狀態：** 專有授權（機構／個人 CSD 授權）；免費 Access Structures 服務有獨立使用條款。統計頁稱 CSD 超過 140 萬筆精選條目，統計每週產生；具體版本與日期依授權發行。
- **必要註記：**
  - 這是授權制商用資料庫，不是開源；本條目列入是因為許多開放 MOF 資料集的上游來源為 CSD。
  - 許多 MOF 資料集（包含本 catalog 的 CoRE MOF 條目）把未修改的 CSD 衍生結構限制在需 CCDC 授權的範圍。
  - MOSAEC-DB 的 README 稱約 45k 檔因 CSD 授權疑慮未能公開，且其 Zenodo 紀錄已不可取用（HTTP 410）。
  - 本次未核實有 CSD 專屬 MOF 子集的官方頁面，亦未讀取完整授權契約，不應假設特定使用方式被允許。
  - REFCODE 可能隨 CSD 更新而變動，跨版本的資料集需記錄所用 CSD 版本。

#### 來源區塊

| 類別 | 可追溯 URL | 用途與界線 |
|---|---|---|
| 官方來源 | <https://www.ccdc.cam.ac.uk/solutions/csd-core/components/csd/> | CCDC 的 CSD 頁面 |
| 授權正文 | <https://www.ccdc.cam.ac.uk/access-structures-terms> | 專有授權（機構／個人 CSD 授權）；免費 Access Structures 服務有獨立使用條款 |
| 原始論文（出版者 DOI） | <https://doi.org/10.1107/S2052520616003954> | The Cambridge Structural Database (DOI 10.1107/S2052520616003954) |
| 資料服務／API | <https://www.ccdc.cam.ac.uk/structures/> | Access Structures 服務: 免費，逐筆；表單有驗證碼與條款勾選，自動抓取未通過; 個別晶體結構與資料集（CIF） |
| 官方文件 | <https://www.ccdc.cam.ac.uk/access-structures-terms> | Access Structures 使用條款: 公開; 載明不得系統性下載或再散布、不允許程式化存取 |
| 官方文件 | <https://www.ccdc.cam.ac.uk/solutions/about-the-csd/csd-statistics/> | CSD 統計: 公開; 條目數與成長統計 |
| 官方文件 | <https://www.ccdc.cam.ac.uk/solutions/csd-licence/> | CSD 授權說明: 公開；本次未取得完整條款文字; 授權模式與 FAIRE 補助入口（頁面可見） |


---

## 三、排除

2026-10-14 檢視的兩個候選未收錄。這不是對該資源的負面評價，而是檢查當下缺少可核實的來源或條款。

- **MOSAEC-DB**（依氧化態驗證的逾 12.4 萬筆實驗來源 MOF 資料庫；論文 Chem. Sci. 2025，doi 10.1039/D4SC07438F）。專案 README 所列的 Zenodo 紀錄 doi 10.5281/zenodo.14780807 於 2026-10-14 回應 HTTP 410，DataCite 查無該 DOI，且 README（<https://github.com/uowoolab/MOSAEC-DB>）聲明 Zenodo 紀錄「將於晶體學資料之授權協議確認／修訂前下架」。未找到其他下載位置。MOSAEC 程式碼庫另有獨立條目。
- **JARVIS-DFT**（NIST）。首頁未顯示授權文字，條款頁無法取得，主要來源頁面也未載明 MOF 數量或 MOF 專屬子集，因此資料授權與 MOF 範圍均無法確認。

未評估（2026-10-14 頁面無法連線，故不對其作任何陳述）：RCSR（rcsr.net）、OQMD（HTTP 502）、AFLOW（無可用內容）。

若日後有新的核實結果確認被排除或未評估來源的授權、可取得性與 MOF 範圍，應重新審查並以新證據更新本節。

---

## References

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
