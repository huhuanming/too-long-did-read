# 介绍 Claude Sonnet 4.6
# Introducing Claude Sonnet 4.6

> 原文链接: https://www.anthropic.com/news/claude-sonnet-4-6
> 日期: 2026-02-17

---

## English

Claude Sonnet 4.6 is our most capable Sonnet model yet. It represents a comprehensive upgrade across coding, computer use, long-context reasoning, agent planning, knowledge work, and design capabilities. The model features a 1M token context window currently in beta.

For Free and Pro plan users, Sonnet 4.6 serves as the default model in claude.ai and Claude Cowork. Pricing remains unchanged from Sonnet 4.5, starting at $3/$15 per million tokens.

Sonnet 4.6 delivers significantly improved coding abilities. Early developer access demonstrated a strong preference for this model over its predecessor, with many preferring it to Claude Opus 4.5 from November 2025.

The model achieves performance previously requiring Opus-class models, particularly on real-world office tasks. Computer use capabilities show major improvements compared to earlier Sonnet versions.

Safety evaluations confirm Sonnet 4.6 maintains safety standards equal to or exceeding other recent Claude models. Researchers noted "a broadly warm, honest, prosocial character" with strong safety behaviors.

### Computer Use

Organizations frequently operate legacy software lacking modern API interfaces. Previously, enabling AI interaction with such systems required custom connectors. A model capable of human-like computer use fundamentally changes this equation.

Anthropic introduced general-purpose computer-using models in October 2024, noting initial experimental limitations. OSWorld, the standard AI computer use benchmark, demonstrates substantial progress. The benchmark presents hundreds of tasks across real applications like Chrome, LibreOffice, and VS Code on simulated systems, without special APIs or connectors.

Over sixteen months, Sonnet models achieved consistent OSWorld improvements. Beyond benchmarks, early users report human-level capability on complex spreadsheet navigation and multi-step web forms across browser tabs.

While lagging behind highly skilled humans, the progress rate remains notable, making computer use increasingly practical for various work applications.

Computer use presents risks through prompt injection attacks, where malicious actors hide instructions on websites to hijack models. Anthropic improved prompt injection resistance, with Sonnet 4.6 showing major improvements over Sonnet 4.5 and comparable performance to Opus 4.6.

### Evaluations

Beyond computer use, Sonnet 4.6 improved across all benchmarks, approaching Opus-level intelligence at more practical pricing. The system card provides comprehensive capability and safety discussion.

In Claude Code testing, users preferred Sonnet 4.6 over Sonnet 4.5 approximately 70% of the time, citing better context reading and shared logic consolidation, reducing long-session frustration.

Users even favored Sonnet 4.6 over Opus 4.5 59% of the time, rating it significantly less prone to overengineering and more effective at instruction following, with fewer false success claims, fewer hallucinations, and more consistent multi-step execution.

Sonnet 4.6's 1M token context accommodates entire codebases, lengthy contracts, or dozens of research papers. Critically, it "reasons effectively" across all context, enabling superior long-horizon planning. The Vending-Bench Arena evaluation demonstrated this capability—Sonnet 4.6 invested heavily in early capacity, then pivoted sharply toward profitability in the final stretch, finishing ahead of competition.

Early customers reported broad improvements, with frontend code and financial analysis particularly strong. Visual outputs earned independent descriptions as notably more polished with superior layouts, animations, and design sensibility. Customers required fewer iteration rounds reaching production quality.

### Customer Testimonials

**Databricks (Hanlin Tang, CTO of Neural Networks):** "Claude Sonnet 4.6 matches Opus 4.6 performance on OfficeQA, measuring document comprehension across charts, PDFs, and tables."

**Replit (Michele Catasta, President):** "The performance-to-cost ratio is extraordinary. Sonnet 4.6 outperforms on orchestration evaluations and handles complex agentic workloads."

**Cursor (Michael Truell, Co-founder and CEO):** "Claude Sonnet 4.6 is a notable improvement across long-horizon tasks and difficult problems."

**GitHub (Joe Binder, VP of Product):** "Sonnet 4.6 excels at complex code fixes, especially searching large codebases, with strong resolution rates and developer consistency."

**Cognition (Scott Wu, CEO):** "Sonnet 4.6 closed the gap with Opus on bug detection, enabling parallel reviewers without cost increases."

**Windsurf (Jeff Wang, CEO):** "Sonnet brings frontier-level reasoning in cost-effective form—a viable Opus alternative."

**Hebbia (Aabhas Sharma, CTO):** "Sonnet 4.6 meaningfully improves answer retrieval with significant match rate jumps on Financial Services benchmarks."

**Box (Ben Kus, CTO):** "Demonstrated significant improvements in heavy reasoning Q&A—15 percentage points above Sonnet 4.5."

### Availability

Sonnet 4.6 is available across all Claude plans, Claude Cowork, Claude Code, the API, and major cloud platforms. Free tier now defaults to Sonnet 4.6, including file creation, connectors, skills, and compaction support. Developers can quickly begin using `claude-sonnet-4-6` via the Claude API.

---

## 中文翻译

Claude Sonnet 4.6 是我们迄今为止最强大的 Sonnet 模型。它在编程、计算机使用、长上下文推理、智能体规划、知识工作和设计能力方面进行了全面升级。该模型具有目前处于测试阶段的 100 万 token 上下文窗口。

对于免费版和 Pro 版用户，Sonnet 4.6 是 claude.ai 和 Claude Cowork 的默认模型。定价与 Sonnet 4.5 保持不变，起价为每百万 token 3 美元/15 美元。

Sonnet 4.6 提供了显著改进的编程能力。早期开发者访问表明，用户对该模型的偏好明显强于其前身，许多人甚至更喜欢它而非 2025 年 11 月的 Claude Opus 4.5。

该模型实现了以前需要 Opus 级别模型才能达到的性能，特别是在真实世界的办公任务上。与早期 Sonnet 版本相比，计算机使用能力有了重大改进。

安全评估确认 Sonnet 4.6 保持着与其他最新 Claude 模型同等或更高的安全标准。研究人员指出其具有"广泛温暖、诚实、亲社会的特质"和强大的安全行为。

### 计算机使用

组织经常运行缺乏现代 API 接口的遗留软件。以前，要让 AI 与此类系统交互需要自定义连接器。具备类人计算机使用能力的模型从根本上改变了这一等式。

Anthropic 在 2024 年 10 月推出了通用计算机使用模型，并注意到初期的实验性限制。OSWorld——标准的 AI 计算机使用基准测试——展示了巨大的进步。该基准测试在模拟系统上跨真实应用程序（如 Chrome、LibreOffice 和 VS Code）呈现数百个任务，无需特殊 API 或连接器。

在十六个月内，Sonnet 模型实现了持续的 OSWorld 改进。除了基准测试之外，早期用户报告称在复杂的电子表格导航和跨浏览器标签的多步骤网页表单上达到了人类水平的能力。

虽然落后于高技能人类，但进步速度仍然值得注意，使计算机使用在各种工作应用中越来越实用。

计算机使用通过提示注入攻击带来风险，恶意行为者在网站上隐藏指令以劫持模型。Anthropic 改善了提示注入抵抗能力，Sonnet 4.6 相比 Sonnet 4.5 有了重大改进，性能与 Opus 4.6 相当。

### 评估

除了计算机使用之外，Sonnet 4.6 在所有基准测试中都有所改进，以更实惠的价格接近 Opus 级别的智能。系统卡提供了全面的能力和安全讨论。

在 Claude Code 测试中，用户约 70% 的时间偏好 Sonnet 4.6 而非 Sonnet 4.5，理由是更好的上下文阅读和共享逻辑整合，减少了长时间会话的挫败感。

用户甚至 59% 的时间偏好 Sonnet 4.6 而非 Opus 4.5，认为它明显不太容易过度工程化，在指令遵循方面更有效，虚假成功声明更少，幻觉更少，多步骤执行更一致。

Sonnet 4.6 的 100 万 token 上下文可以容纳整个代码库、冗长的合同或数十篇研究论文。关键的是，它能在所有上下文中"有效推理"，实现卓越的长期规划。Vending-Bench Arena 评估展示了这一能力——Sonnet 4.6 在早期大量投资于产能，然后在最后阶段急剧转向盈利，领先于竞争对手。

早期客户报告了广泛的改进，前端代码和财务分析尤为突出。视觉输出被独立描述为明显更精致，具有卓越的布局、动画和设计感。客户达到生产质量所需的迭代轮次更少。

### 客户评价

**Databricks（Hanlin Tang，神经网络 CTO）：** "Claude Sonnet 4.6 在 OfficeQA 上的性能与 Opus 4.6 相当，衡量了跨图表、PDF 和表格的文档理解能力。"

**Replit（Michele Catasta，总裁）：** "性能成本比非常出色。Sonnet 4.6 在编排评估中表现优异，可处理复杂的智能体工作负载。"

**Cursor（Michael Truell，联合创始人兼 CEO）：** "Claude Sonnet 4.6 在长期任务和困难问题上有显著改进。"

**GitHub（Joe Binder，产品副总裁）：** "Sonnet 4.6 在复杂代码修复方面表现出色，特别是搜索大型代码库，具有强大的解决率和开发者一致性。"

**Cognition（Scott Wu，CEO）：** "Sonnet 4.6 在 bug 检测方面缩小了与 Opus 的差距，无需增加成本即可实现并行审查。"

**Windsurf（Jeff Wang，CEO）：** "Sonnet 以经济实惠的形式带来了前沿级推理——一个可行的 Opus 替代方案。"

### 可用性

Sonnet 4.6 可在所有 Claude 计划、Claude Cowork、Claude Code、API 和主要云平台上使用。免费层现在默认为 Sonnet 4.6，包括文件创建、连接器、技能和压缩支持。开发者可以通过 Claude API 快速开始使用 `claude-sonnet-4-6`。
