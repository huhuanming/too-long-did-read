---
titleEn: "Apple's Xcode Now Supports the Claude Agent SDK"
titleZh: "Apple Xcode 现已支持 Claude Agent SDK"
date: 2026-02-03
slug: apple-xcode-claude-agent-sdk
originalUrl: https://www.anthropic.com/news/apple-xcode-claude-agent-sdk
---

## English

Apple's Xcode is where developers build, test, and distribute apps for Apple platforms, including iPhone, iPad, Mac, Apple Watch, Apple Vision Pro, and Apple TV.

In September, we announced that developers would have access to Claude Sonnet 4 in Xcode 26. Claude could be used to write code, debug, and generate documentation—but it was limited to helping with individual, turn-by-turn requests.

Now, Xcode 26.3 introduces a native integration with the Claude Agent SDK, the same underlying harness that powers Claude Code. Developers get the full power of Claude Code directly in Xcode—including subagents, background tasks, and plugins—all without leaving the IDE.

### Using Claude for Long-Running, Autonomous Work in Xcode

With the Claude Agent SDK, Claude can now work autonomously on much more sophisticated, long-running coding tasks inside Xcode. Specifically, this integration supports:

**Visual verification with Previews.** Claude can now capture Xcode Previews to see what interfaces look like in practice, identify issues, and iterate. This proves particularly useful for SwiftUI views where visual output matters most. Claude can close implementation loops independently, building higher-quality interfaces closer to design intent on the first try.

**Reasoning across projects.** Building for Apple platforms requires working with SwiftUI, UIKit, Swift Data, and other frameworks. Claude explores full file structures, understands how pieces connect, and identifies necessary changes before writing code. It works with understanding of whole apps and architectures—not just open files.

**Autonomous task execution.** Claude accepts goals rather than specific instructions. It breaks tasks down, decides which files to modify, makes changes, and iterates if needed. When understanding Apple APIs or frameworks is required, it can search Apple's documentation directly and continue until completion or user input is needed.

**Interface through the Model Context Protocol.** Xcode 26.3 makes capabilities available through the Model Context Protocol. Developers using Claude Code can integrate with Xcode over MCP and capture visual Previews without leaving the CLI.

### Availability

Xcode 26.3 is available as a release candidate for Apple Developer Program members starting now, with an App Store release coming soon.

---

## 中文翻译

Apple 的 Xcode 是开发者为 Apple 平台构建、测试和分发应用的地方，包括 iPhone、iPad、Mac、Apple Watch、Apple Vision Pro 和 Apple TV。

9 月，我们宣布开发者可以在 Xcode 26 中使用 Claude Sonnet 4。Claude 可以用来编写代码、调试和生成文档——但它仅限于帮助处理单个的逐步请求。

现在，Xcode 26.3 引入了与 Claude Agent SDK 的原生集成——这是驱动 Claude Code 的同一底层框架。开发者直接在 Xcode 中获得 Claude Code 的全部能力——包括子代理、后台任务和插件——所有这些都无需离开 IDE。

### 在 Xcode 中使用 Claude 进行长时间自主工作

借助 Claude Agent SDK，Claude 现在可以在 Xcode 内部自主处理更复杂的长时间编程任务。具体而言，此集成支持：

**通过预览进行视觉验证。** Claude 现在可以捕获 Xcode 预览来查看界面在实际中的外观，识别问题并迭代。这对于视觉输出最重要的 SwiftUI 视图特别有用。Claude 可以独立完成实现循环，在第一次尝试时构建更高质量、更接近设计意图的界面。

**跨项目推理。** 为 Apple 平台构建需要使用 SwiftUI、UIKit、Swift Data 和其他框架。Claude 探索完整的文件结构，理解各部分如何连接，并在编写代码之前确定必要的更改。它理解整个应用和架构——而不仅仅是打开的文件。

**自主任务执行。** Claude 接受目标而非具体指令。它分解任务，决定修改哪些文件，进行更改，并在需要时迭代。当需要理解 Apple API 或框架时，它可以直接搜索 Apple 的文档并继续工作直到完成或需要用户输入。

**通过模型上下文协议接口。** Xcode 26.3 通过模型上下文协议提供功能。使用 Claude Code 的开发者可以通过 MCP 与 Xcode 集成，并在不离开命令行的情况下捕获视觉预览。

### 可用性

Xcode 26.3 现已作为候选发布版本向 Apple 开发者计划成员提供，App Store 发布即将到来。
