# Introducing Claude Sonnet 4.6
# 介绍 Claude Sonnet 4.6

> Source: https://www.anthropic.com/news/claude-sonnet-4-6
> Date: 2026-02-17

---

Claude Sonnet 4.6 represents the company's most capable Sonnet model to date. This release brings comprehensive improvements across coding, computer use, long-context reasoning, agent planning, knowledge work, and design capabilities. The model introduces a 1M token context window currently in beta.

Claude Sonnet 4.6 是该公司迄今为止能力最强的 Sonnet 模型。此次发布在编程、计算机使用、长上下文推理、代理规划、知识工作和设计能力方面带来了全面改进。该模型引入了目前处于测试阶段的 100 万 token 上下文窗口。

For Free and Pro plan subscribers, Sonnet 4.6 now serves as the default model in both claude.ai and Claude Cowork. The pricing structure remains consistent with Sonnet 4.5, starting at $3/$15 per million tokens.

对于免费版和 Pro 版订阅用户，Sonnet 4.6 现已成为 claude.ai 和 Claude Cowork 中的默认模型。定价结构与 Sonnet 4.5 保持一致，起价为每百万 token 3 美元/15 美元。

---

## Development and Improvements
## 开发与改进

Developers with early access demonstrated strong preference for Sonnet 4.6 over its predecessor by a substantial margin. Notably, they frequently chose it over Claude Opus 4.5, the company's November 2025 frontier model.

获得早期使用权限的开发者以显著优势偏好 Sonnet 4.6 而非其前代产品。值得注意的是，他们经常选择它而非 Claude Opus 4.5——该公司 2025 年 11 月发布的前沿模型。

The new model delivers performance previously requiring Opus-class capabilities, particularly on "economically valuable office tasks." Computer use skills show major improvements compared to earlier Sonnet versions.

新模型在以前需要 Opus 级别能力的任务上提供了出色表现，尤其是在"具有经济价值的办公任务"方面。与早期 Sonnet 版本相比，计算机使用技能显示出重大改进。

Safety evaluations confirm Sonnet 4.6 maintains equivalent or superior safety standards. Researchers concluded the model demonstrates "a broadly warm, honest, prosocial character, with very strong safety behaviors."

安全评估确认 Sonnet 4.6 保持了同等或更优越的安全标准。研究人员得出结论，该模型展现了"广泛的热情、诚实、亲社会的特质，以及非常强大的安全行为"。

---

## Computer Use Capabilities
## 计算机使用能力

The model can interact with software lacking modern APIs—a significant advancement for automating specialized legacy systems that previously required custom connectors.

该模型可以与缺乏现代 API 的软件进行交互——这对于自动化以前需要自定义连接器的专用遗留系统来说是一个重大进步。

Benchmark performance on OSWorld shows steady sixteen-month improvement. Early users report human-level capability on complex spreadsheet navigation and multi-step web form completion across browser tabs.

OSWorld 上的基准测试性能显示了持续十六个月的改进。早期用户报告在复杂的电子表格导航和跨浏览器标签页的多步骤网页表单填写方面达到了人类水平的能力。

However, the model still lags behind highly skilled human computer users. Nevertheless, progress remains remarkable for practical work applications.

然而，该模型仍然落后于高技能的人类计算机用户。尽管如此，在实际工作应用方面的进步仍然令人瞩目。

---

### Prompt Injection Concerns
### 提示注入问题

Computer use introduces risks from prompt injection attacks hiding instructions on websites. Safety evaluations demonstrate Sonnet 4.6 significantly outperforms Sonnet 4.5 in resistance, matching Opus 4.6 performance levels.

计算机使用引入了来自在网站上隐藏指令的提示注入攻击的风险。安全评估表明，Sonnet 4.6 在抵抗方面显著优于 Sonnet 4.5，达到了 Opus 4.6 的性能水平。

---

## Evaluation and Performance
## 评估与性能

Beyond computer use, Sonnet 4.6 improves across benchmarks broadly, approaching Opus-level intelligence at more practical pricing for diverse tasks.

除了计算机使用之外，Sonnet 4.6 在各项基准测试中都有广泛改进，在多样化任务中以更实惠的价格接近 Opus 级别的智能。

In Claude Code testing, users preferred Sonnet 4.6 over Sonnet 4.5 approximately 70% of the time. They reported superior context reading and code consolidation, reducing frustration during extended sessions.

在 Claude Code 测试中，用户大约 70% 的时间偏好 Sonnet 4.6 而非 Sonnet 4.5。他们报告了更优越的上下文阅读和代码整合能力，减少了长时间会话中的挫败感。

Users even favored Sonnet 4.6 over Opus 4.5 in 59% of comparisons, rating it significantly less prone to overengineering and "laziness" with meaningfully improved instruction following. Reports indicate fewer false success claims, fewer hallucinations, and more consistent multi-step task completion.

用户甚至在 59% 的比较中偏好 Sonnet 4.6 而非 Opus 4.5，认为它明显不太容易过度工程化和"偷懒"，指令遵循能力有了显著改进。报告显示虚假成功声明更少、幻觉更少，多步骤任务完成更加一致。

---

## Context Window and Long-Horizon Planning
## 上下文窗口与长期规划

The 1M token context window accommodates entire codebases, lengthy contracts, or dozens of research papers in single requests. Critically, Sonnet 4.6 reasons effectively across all that context, substantially improving long-horizon planning abilities.

100 万 token 的上下文窗口可以在单次请求中容纳整个代码库、冗长的合同或数十篇研究论文。至关重要的是，Sonnet 4.6 能够在所有这些上下文中进行有效推理，大幅提升了长期规划能力。

The Vending-Bench Arena evaluation, which simulates business operations with competitive AI models, illustrated this capability. Sonnet 4.6 adopted an interesting strategy: investing heavily in capacity during the initial ten simulated months while spending significantly more than competitors, then pivoting sharply toward profitability in the final stretch—timing that resulted in superior performance.

模拟与竞争性 AI 模型进行商业运营的 Vending-Bench Arena 评估展示了这一能力。Sonnet 4.6 采用了一种有趣的策略：在前十个模拟月份大量投资产能，支出远超竞争对手，然后在最后阶段急剧转向盈利——这种时机把握带来了卓越的表现。

---

## Customer Feedback
## 客户反馈

Early customers reported broad improvements, with frontend code and financial analysis particularly noteworthy. Visual outputs from Sonnet 4.6 are independently described as notably more polished, featuring better layouts, animations, and design sensibility than previous versions. Customers needed fewer iteration rounds to reach production-quality results.

早期客户报告了广泛的改进，其中前端代码和金融分析尤其值得关注。Sonnet 4.6 的视觉输出被独立评价为明显更加精致，在布局、动画和设计感方面优于以前的版本。客户需要更少的迭代轮次即可达到生产质量的结果。

---

## Platform Updates
## 平台更新

On the Claude Developer Platform, Sonnet 4.6 supports both adaptive thinking and extended thinking, plus context compaction in beta—automatically summarizing older context as conversations approach limits.

在 Claude 开发者平台上，Sonnet 4.6 支持自适应思维和扩展思维，以及测试版的上下文压缩——在对话接近限制时自动总结较早的上下文。

The API now features web search and fetch tools that automatically write and execute code filtering and processing results, keeping only relevant content while improving response quality and token efficiency. Code execution, memory, programmatic tool calling, tool search, and tool use examples are now generally available.

API 现在配备了网络搜索和获取工具，可以自动编写和执行代码来过滤和处理结果，仅保留相关内容，同时提高响应质量和 token 效率。代码执行、记忆、程序化工具调用、工具搜索和工具使用示例现已全面可用。

For Claude in Excel users, the add-in now supports MCP connectors, enabling work with external tools like S&P Global, LSEG, Daloopa, PitchBook, Moody's, and FactSet without leaving Excel.

对于 Excel 中的 Claude 用户，该插件现在支持 MCP 连接器，可以在不离开 Excel 的情况下使用 S&P Global、LSEG、Daloopa、PitchBook、Moody's 和 FactSet 等外部工具。

---

## Availability
## 可用性

Claude Sonnet 4.6 is available across all Claude plans, Claude Cowork, Claude Code, the API, and major cloud platforms. The free tier now defaults to Sonnet 4.6, including file creation, connectors, skills, and compaction features.

Claude Sonnet 4.6 可在所有 Claude 计划、Claude Cowork、Claude Code、API 和主要云平台上使用。免费版现在默认使用 Sonnet 4.6，包括文件创建、连接器、技能和压缩功能。

Developers can begin immediately using `claude-sonnet-4-6` via the Claude API.

开发者可以立即通过 Claude API 使用 `claude-sonnet-4-6`。
