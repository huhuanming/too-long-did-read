---
titleEn: "How Scientists Are Using Claude to Accelerate Research and Discovery"
titleZh: "科学家如何使用 Claude 加速研究与发现"
date: 2026-01-15
slug: accelerating-scientific-research
originalUrl: https://www.anthropic.com/news/accelerating-scientific-research
---

## English

Last October Anthropic launched Claude for Life Sciences—a suite of connectors and skills enhancing Claude's capabilities as a scientific collaborator. Since then, the company has invested heavily in making Claude the most capable model for scientific work, with Opus 4.5 demonstrating significant improvements in figure interpretation, computational biology, and protein understanding benchmarks.

Anthropic has been working closely with scientists through its AI for Science program, which provides free API credits to leading researchers working on high-impact scientific projects worldwide.

These researchers have developed custom systems using Claude in ways extending far beyond literature reviews or coding assistance. In the labs studied, Claude functions as a collaborator across all research stages: making it easier and more cost-effective to understand which experiments to run, compressing projects typically requiring months into hours, and identifying patterns in massive datasets humans might overlook.

### Biomni: A General-Purpose Biomedical Agent

One research bottleneck involves tool fragmentation—hundreds of databases, software packages, and protocols exist, consuming substantial researcher time on selection and mastery. Biomni, an agentic AI platform from Stanford University, consolidates hundreds of tools, packages, and datasets into a single system navigable by a Claude-powered agent.

Consider a genome-wide association study (GWAS)—searching for genetic variants linked to traits or diseases. A single GWAS typically requires months. However, in Biomni's early trial, it required 20 minutes.

The Biomni team has validated the system through multiple case studies across different fields. In one, Biomni designed a molecular cloning experiment; blind evaluation showed the protocol matched a postdoc with over five years' experience. In another, Biomni analyzed over 450 wearable data files from 30 people in 35 minutes—a task estimated requiring three weeks from human experts.

### Cheeseman Lab: Automating Gene Knockout Interpretation

Understanding gene function involves removing genes from cells and observing failures. CRISPR enabled precise large-scale gene removal. However, interpreting gene grouping meaning still requires human experts combing through scientific literature gene-by-gene.

PhD student Matteo Di Bernardo built MozzareLLM, a Claude-powered system that takes gene clusters and performs expert-like analysis: identifying potentially shared biological processes, flagging well-understood versus poorly-studied genes, and highlighting promising follow-up candidates. Di Bernardo tested multiple AI models; Claude outperformed alternatives—in one case correctly identifying an RNA modification pathway other models dismissed as random noise.

### Lundberg Lab: AI-Led Hypothesis Generation for Gene Selection

The Lundberg Lab at Stanford uses Claude to reverse the conventional gene selection approach. Rather than asking "what guesses can we make from previously-studied research?" their system asks "what should be studied based on molecular properties?"

The team mapped every known cellular molecule and their relationships. Giving Claude targets, Claude navigates the map identifying candidate genes based on biological properties and relationships.

### Looking Forward

None of these systems are perfect, but they demonstrate how scientists have begun incorporating AI as research partners capable of far more than basic tasks. Two years ago, earlier models were limited to code writing or paper summarization; more powerful agents now slowly begin replicating the actual work those papers describe.

---

## 中文翻译

去年十月，Anthropic 推出了 Claude for Life Sciences——一套增强 Claude 作为科学合作者能力的连接器和技能。此后，公司大力投资使 Claude 成为科学工作中最有能力的模型，Opus 4.5 在图形解释、计算生物学和蛋白质理解基准测试中展示了显著改进。

Anthropic 一直通过其 AI for Science 项目与科学家密切合作，该项目为全球从事高影响力科学项目的领先研究人员提供免费 API 积分。

这些研究人员开发了使用 Claude 的定制系统，远远超出文献综述或编程辅助的范围。在研究的实验室中，Claude 作为所有研究阶段的合作者：使理解应该运行哪些实验更容易、成本更低，将通常需要数月的项目压缩到数小时，并识别人类可能忽视的大规模数据集中的模式。

### Biomni：通用生物医学智能体

一个研究瓶颈涉及工具碎片化——存在数百个数据库、软件包和协议，消耗研究人员大量的选择和掌握时间。Biomni 是斯坦福大学的一个智能体 AI 平台，将数百个工具、包和数据集整合到一个由 Claude 驱动的代理可导航的单一系统中。

以全基因组关联研究 (GWAS) 为例——搜索与特征或疾病相关的基因变异。单个 GWAS 通常需要数月。然而，在 Biomni 的早期试验中，只需要 20 分钟。

### Cheeseman 实验室：自动化基因敲除解释

理解基因功能涉及从细胞中去除基因并观察失败。CRISPR 实现了精确的大规模基因去除。然而，解释基因分组的含义仍然需要人类专家逐基因梳理科学文献。

博士生 Matteo Di Bernardo 构建了 MozzareLLM，一个由 Claude 驱动的系统，它接收基因簇并进行专家级分析。Di Bernardo 测试了多个 AI 模型；Claude 的表现优于替代方案——在一个案例中正确识别了其他模型误认为随机噪声的 RNA 修饰通路。

### Lundberg 实验室：AI 主导的基因选择假设生成

斯坦福的 Lundberg 实验室使用 Claude 来逆转传统的基因选择方法。他们的系统不是问"我们能从以前研究的研究中做出什么猜测？"，而是问"基于分子特性应该研究什么？"

团队绘制了每个已知的细胞分子及其关系图。给 Claude 目标后，Claude 根据生物特性和关系导航图谱识别候选基因。

### 展望未来

这些系统都不完美，但它们展示了科学家如何开始将 AI 作为研究伙伴，其能力远远超出基本任务。两年前，早期模型仅限于代码编写或论文摘要；现在更强大的代理开始慢慢复制这些论文所描述的实际工作。
