# Making Frontier Cybersecurity Capabilities Available to Defenders
# 将前沿网络安全能力提供给防御者

> Source: https://www.anthropic.com/news/claude-code-security
> Date: 2026-02-20

---

Anthropic announced Claude Code Security, a new capability integrated into Claude Code on the web, now available as a limited research preview. This tool scans codebases for security vulnerabilities and recommends targeted software patches for human review.

Anthropic 发布了 Claude Code Security，这是一项集成到网页版 Claude Code 中的新功能，目前作为限定研究预览版提供。该工具可以扫描代码库中的安全漏洞，并为人工审查推荐有针对性的软件补丁。

---

## The Problem
## 问题所在

Security teams face mounting challenges: "too many software vulnerabilities and not enough people to address them." Traditional analysis tools have limitations, typically matching code against known vulnerability patterns while missing complex, context-dependent weaknesses that attackers exploit. Skilled security researchers struggle with ever-expanding backlogs of potential issues.

安全团队面临日益严峻的挑战："软件漏洞太多，而应对的人手不足。"传统的分析工具存在局限性，通常只是将代码与已知的漏洞模式进行匹配，而忽略了攻击者利用的复杂、依赖上下文的弱点。技术精湛的安全研究人员也难以应对不断扩大的潜在问题积压。

---

## How It Works
## 工作原理

Rather than pattern-matching, Claude Code Security analyzes code similarly to how human researchers would—understanding component interactions and tracing data flow throughout applications. Every finding undergoes multi-stage verification before reaching analysts. Claude re-examines its own results to minimize false positives and assigns severity ratings. All findings appear in a dashboard where developers can review, inspect suggested patches, and approve fixes. Critically, nothing gets applied without human approval.

与模式匹配不同，Claude Code Security 以类似于人类研究人员的方式分析代码——理解组件之间的交互并追踪整个应用程序中的数据流。每个发现在到达分析人员之前都会经过多阶段验证。Claude 会重新检查自己的结果以最大限度地减少误报，并分配严重性等级。所有发现都会显示在仪表板上，开发人员可以在其中审查、检查建议的补丁并批准修复。至关重要的是，未经人工批准，任何修复都不会被应用。

---

## Research Foundation
## 研究基础

Claude Code Security builds on extensive cybersecurity research. Anthropic's Frontier Red Team has systematically tested these capabilities through competitive exercises, partnerships with Pacific Northwest National Laboratory on critical infrastructure defense, and vulnerability research. Using Claude Opus 4.6, the team "found over 500 vulnerabilities" in production open-source codebases that had gone undetected for decades.

Claude Code Security 建立在广泛的网络安全研究基础之上。Anthropic 的前沿红队通过竞争性演练、与太平洋西北国家实验室在关键基础设施防御方面的合作以及漏洞研究，系统性地测试了这些能力。使用 Claude Opus 4.6，该团队在生产环境的开源代码库中"发现了超过 500 个漏洞"，这些漏洞数十年来一直未被检测到。

---

## Broader Implications
## 更广泛的影响

As AI becomes increasingly effective at discovering hidden security issues, both defenders and attackers will leverage these capabilities. Claude Code Security represents progress toward more secure codebases and "a higher security baseline across the industry."

随着 AI 在发现隐藏的安全问题方面变得越来越有效，防御者和攻击者都将利用这些能力。Claude Code Security 代表着朝着更安全的代码库和"全行业更高的安全基线"迈进的进步。

---

## Access
## 使用方式

The limited research preview is open to Enterprise and Team customers, with expedited access available for open-source maintainers. Interested parties can apply at claude.com/contact-sales/security.

该限定研究预览版面向企业版和团队版客户开放，开源项目维护者可获得优先使用权限。有意者可在 claude.com/contact-sales/security 申请。
