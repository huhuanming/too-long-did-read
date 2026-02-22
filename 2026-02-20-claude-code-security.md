# 将前沿网络安全能力提供给防御者
# Making Frontier Cybersecurity Capabilities Available to Defenders

> 原文链接: https://www.anthropic.com/news/claude-code-security
> 日期: 2026-02-20

---

## English

**Claude Code Security**, a new capability built into Claude Code on the web, is now available in a limited research preview. It scans codebases for security vulnerabilities and suggests targeted software patches for human review, allowing teams to find and fix security issues that traditional methods often miss.

Security teams face a common challenge: too many software vulnerabilities and not enough people to address them. Existing analysis tools help, but only to a point, as they usually look for known patterns. Finding the subtle, context-dependent vulnerabilities that are often exploited by attackers requires skilled human researchers, who are dealing with ever-expanding backlogs.

AI is beginning to change that calculus. Anthropic has recently shown that Claude can detect novel, high-severity vulnerabilities. However, the same capabilities that help defenders find and fix vulnerabilities could help attackers exploit them.

Claude Code Security is intended to put this power squarely in the hands of defenders and protect code against this new category of AI-enabled attack. The company is releasing it as a limited research preview to Enterprise and Team customers, with expedited access for maintainers of open-source repositories, so they can work together to refine its capabilities and ensure it is deployed responsibly.

### How Claude Code Security Works

Static analysis—a widely deployed form of automated security testing—is typically rule-based, meaning it matches code against known vulnerability patterns. That catches common issues, like exposed passwords or outdated encryption, but often misses more complex vulnerabilities, like flaws in business logic or broken access control.

Rather than scanning for known patterns, Claude Code Security reads and reasons about code the way a human security researcher would: understanding how components interact, tracing how data moves through applications, and catching complex vulnerabilities that rule-based tools miss.

Every finding goes through a multi-stage verification process before it reaches an analyst. Claude re-examines each result, attempting to prove or disprove its own findings and filter out false positives. Findings are also assigned severity ratings so teams can focus on the most important fixes first.

Validated findings appear in the Claude Code Security dashboard, where teams can review them, inspect the suggested patches, and approve fixes. Because these issues often involve nuances that are difficult to assess from source code alone, Claude also provides a confidence rating for each finding. Nothing is applied without human approval: Claude Code Security identifies problems and suggests solutions, but developers always make the call.

### Using Claude for Cybersecurity

Claude Code Security builds on more than a year of research into Claude's cybersecurity capabilities. Anthropic's Frontier Red Team has been stress-testing these abilities systematically: entering Claude in competitive Capture-the-Flag events, partnering with Pacific Northwest National Laboratory to experiment with using AI to defend critical infrastructure, and refining Claude's ability to find and patch real vulnerabilities in code.

Claude's cyberdefensive abilities have improved substantially as a result. Using Claude Opus 4.6, released earlier this month, Anthropic's team found over 500 vulnerabilities in production open-source codebases—bugs that had gone undetected for decades, despite years of expert review. The company is working through triage and responsible disclosure with maintainers now, and plans to expand its security work with the open-source community.

Anthropic also uses Claude to review its own code, and has found it to be extremely effective at securing its systems. The company built Claude Code Security to make those same defensive capabilities more widely available. Since it's built on Claude Code, teams can review findings and iterate on fixes within the tools they already use.

### The Road Ahead

This is a pivotal time for cybersecurity. Anthropic expects that a significant share of the world's code will be scanned by AI in the near future, given how effective models have become at finding long-hidden bugs and security issues.

Attackers will use AI to find exploitable weaknesses faster than ever. But defenders who move quickly can find those same weaknesses, patch them, and reduce the risk of an attack. Claude Code Security is one step towards the goal of more secure codebases and a higher security baseline across the industry.

### Getting Started

Anthropic is opening a limited research preview of Claude Code Security to Enterprise and Team customers. Participants will get early access and collaborate directly with the team to hone the tool's capabilities. Open-source maintainers are encouraged to apply for free, expedited access.

---

## 中文翻译

**Claude Code Security** 是内置于网页版 Claude Code 中的一项新功能，现已开放限量研究预览。它可以扫描代码库中的安全漏洞，并为人工审查提供有针对性的软件补丁建议，使团队能够发现和修复传统方法经常遗漏的安全问题。

安全团队面临着一个共同的挑战：软件漏洞太多，但人手不足。现有的分析工具有所帮助，但作用有限，因为它们通常只查找已知模式。发现那些微妙的、依赖上下文的漏洞——这些漏洞往往被攻击者利用——需要熟练的人类研究员，而他们正面临着不断增长的积压工作。

AI 正在开始改变这一格局。Anthropic 最近展示了 Claude 可以检测新颖的高严重性漏洞。然而，帮助防御者发现和修复漏洞的同样能力也可能帮助攻击者利用它们。

Claude Code Security 旨在将这种能力牢牢掌握在防御者手中，保护代码免受这一新类别的 AI 驱动攻击。公司正以限量研究预览的形式向企业版和团队版客户发布，同时为开源仓库维护者提供快速访问通道，以便他们共同完善其功能并确保负责任地部署。

### Claude Code Security 的工作原理

静态分析——一种广泛部署的自动化安全测试形式——通常是基于规则的，即将代码与已知漏洞模式进行匹配。这可以捕获常见问题，如暴露的密码或过时的加密，但经常会遗漏更复杂的漏洞，如业务逻辑缺陷或损坏的访问控制。

Claude Code Security 不是扫描已知模式，而是像人类安全研究员那样阅读和推理代码：理解组件之间的交互方式，追踪数据在应用程序中的流动方式，并捕获基于规则的工具遗漏的复杂漏洞。

每个发现在到达分析师之前都会经过多阶段验证过程。Claude 会重新检查每个结果，尝试证明或反驳自己的发现并过滤误报。发现还会被分配严重性评级，以便团队能够首先关注最重要的修复。

经过验证的发现会出现在 Claude Code Security 仪表板中，团队可以在其中审查它们、检查建议的补丁并批准修复。由于这些问题通常涉及仅从源代码难以评估的细微差别，Claude 还为每个发现提供置信度评级。未经人工批准不会应用任何内容：Claude Code Security 识别问题并建议解决方案，但始终由开发人员做出决定。

### 将 Claude 用于网络安全

Claude Code Security 建立在 Claude 网络安全能力超过一年的研究基础上。Anthropic 的前沿红队一直在系统地压力测试这些能力：让 Claude 参加竞争性的夺旗赛事、与太平洋西北国家实验室合作试验使用 AI 保护关键基础设施，以及完善 Claude 在代码中发现和修补真实漏洞的能力。

Claude 的网络防御能力因此得到了大幅提升。使用本月早些时候发布的 Claude Opus 4.6，Anthropic 的团队在生产级开源代码库中发现了超过 500 个漏洞——这些漏洞在数十年的专家审查中一直未被发现。公司目前正与维护者一起进行分类和负责任的披露，并计划扩大与开源社区的安全合作。

Anthropic 还使用 Claude 审查自己的代码，发现它在保护系统安全方面极为有效。公司构建 Claude Code Security 是为了让这些相同的防御能力更广泛地可用。由于它建立在 Claude Code 之上，团队可以在他们已经使用的工具中审查发现并迭代修复。

### 前方的道路

这是网络安全的关键时期。Anthropic 预计，鉴于模型在发现长期隐藏的漏洞和安全问题方面已变得多么有效，在不久的将来，世界上相当大份额的代码将由 AI 进行扫描。

攻击者将比以往更快地使用 AI 寻找可利用的弱点。但快速行动的防御者可以找到同样的弱点，修补它们，并降低攻击风险。Claude Code Security 是朝着更安全的代码库和行业更高安全基线目标迈出的一步。

### 开始使用

Anthropic 正在向企业版和团队版客户开放 Claude Code Security 的限量研究预览。参与者将获得早期访问权限，并直接与团队合作完善工具的功能。鼓励开源维护者申请免费的快速访问。
