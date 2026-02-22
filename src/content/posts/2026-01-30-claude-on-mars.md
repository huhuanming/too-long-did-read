---
titleEn: "Claude AI Powers NASA's First AI-Planned Mars Rover Drive"
titleZh: "Claude AI 驱动 NASA 首次 AI 规划的火星漫游车行驶"
date: 2026-01-30
slug: claude-on-mars
originalUrl: https://www.anthropic.com/mars
---

## English

**FOUR HUNDRED METERS ON MARS — The first AI-planned drive on another planet.**

Exploring new planets means operating in the past. Signal transmission to Mars rovers takes approximately twenty minutes; by the time instructions arrive, the rover has already executed previous commands.

However, on December 8 and 10, 2025, commands sent to NASA's Perseverance Rover represented something unprecedented: they were written by artificial intelligence for the first time. Specifically, Anthropic's Claude model generated the instructions. Engineers at NASA's Jet Propulsion Laboratory (JPL) utilized Claude to plan a route for Perseverance to traverse approximately four hundred meters through a rocky Martian terrain.

Because signal delays prevent real-time rover management, operators must plan complete routes before transmission, then await results. Historically, human experts handled this planning exclusively. This mission marked Claude's involvement in the process.

Four hundred meters equals one running track lap—a modest distance but a significant milestone. Claude, the same AI system people use for drafting emails, developing software, and analyzing financial data, now assists humanity in exploring other worlds.

### Perseverance Rover Background

The Perseverance Rover, a car-sized robot equipped with cameras and scientific instruments, has operated on Mars since February 2021. Its mission involves characterizing planetary geology and climate history, collecting Martian rock and regolith samples, and preparing for human exploration. A key objective is astrobiological: the Jezero crater landing site was selected due to evidence of ancient water that potentially supported microbial life.

### Route Planning Challenges

Martian surface driving demands meticulous planning to prevent sliding, tipping, wheel spinning, or immobilization. Since landing, human operators have carefully established waypoints—called "breadcrumb trails"—using space-based imagery and onboard rover cameras. Plans are transmitted 362 million kilometers across space via NASA's Deep Space Network. In 2009, the Spirit rover became trapped in sand, never resuming operation.

### Claude's Role in Planning

JPL engineers tested whether Claude could reduce laborious planning work while maintaining human-operator accuracy. They established a Claude Code process to delegate waypoint-setting to the AI.

Claude required contextual information beyond a single prompt. JPL engineers compiled years of rover-driving data and experience, providing it to Claude Code. Claude then utilized coding capabilities to write commands in Rover Markup Language, the XML-based programming language developed for the Mars Exploration Rovers mission.

Analyzing overhead imagery, Claude planned Perseverance's waypoint trail point-by-point for sols 1707 and 1709 (Martian days equivalent to December 8 and 10). It assembled ten-meter segments into paths, iterating to refine waypoints through self-critique and revision suggestions.

### Validation and Results

AI outputs require verification. Claude's waypoints underwent simulation testing using Perseverance's daily confirmation system, modeling over 500,000 variables to verify rover positioning and predict route hazards.

JPL engineers found minimal required changes. Ground-level camera imagery revealed sand ripple details Claude hadn't seen; operators refined the route at one narrow corridor point. Otherwise, the planned route proved sound. The rover successfully completed the planned traverse.

### Efficiency Gains

Engineers estimate Claude usage will halve route-planning time and enhance journey consistency. Reduced manual planning and training time allows rover operators to conduct additional drives, gather more scientific data, and perform increased analysis.

### Future Applications

Claude's Perseverance role serves as preliminary testing for future applications. The autonomous capabilities Claude demonstrated—rapidly understanding novel situations, coding complex instrument operations, making intelligent decisions with minimal operator guidance—are valuable for longer, more ambitious space missions.

NASA's Artemis campaign aims to return humans to the Moon and establish a US-led base on the lunar south pole. Even further ahead, autonomous AI systems could facilitate exploration of distant solar system regions—future probes might visit moons like Europa or Titan, descend through icy shells, and chart courses through dark oceans below.

---

## 中文翻译

**火星上的四百米——另一个星球上的首次 AI 规划行驶。**

探索新行星意味着在"过去"中操作。信号传输到火星漫游车大约需要二十分钟；当指令到达时，漫游车已经执行了之前的命令。

然而，在 2025 年 12 月 8 日和 10 日，发送给 NASA 毅力号漫游车的命令代表了前所未有的事情：它们是首次由人工智能编写的。具体来说，Anthropic 的 Claude 模型生成了这些指令。NASA 喷气推进实验室 (JPL) 的工程师利用 Claude 为毅力号规划了一条穿越约四百米岩石火星地形的路线。

由于信号延迟阻止了实时漫游车管理，操作员必须在传输前规划完整路线，然后等待结果。历史上，这项规划工作完全由人类专家处理。这次任务标志着 Claude 参与了这一过程。

四百米等于跑道一圈——距离不长但意义重大。Claude，人们用来起草电子邮件、开发软件和分析财务数据的同一个 AI 系统，现在正在协助人类探索其他星球。

### 毅力号漫游车背景

毅力号漫游车是一个配备摄像头和科学仪器的汽车大小的机器人，自 2021 年 2 月以来一直在火星上运行。其任务包括表征行星地质和气候历史、收集火星岩石和风化层样本，以及为人类探索做准备。一个关键目标是天体生物学：杰零陨石坑着陆点是因为有古代水体可能支持微生物生命的证据而被选中。

### 路线规划挑战

火星表面驾驶需要精心规划以防止滑动、倾覆、车轮空转或陷入困境。自着陆以来，人类操作员使用太空图像和车载漫游车摄像头仔细建立了航点——称为"面包屑路径"。计划通过 NASA 的深空网络跨越 3.62 亿公里的太空传输。2009 年，勇气号漫游车陷入沙中，再也没有恢复运行。

### Claude 在规划中的角色

JPL 工程师测试了 Claude 是否可以在保持人类操作员准确性的同时减少繁重的规划工作。他们建立了一个 Claude Code 流程来将航点设置委托给 AI。

JPL 工程师汇编了多年的漫游车驾驶数据和经验，提供给 Claude Code。Claude 然后利用编程能力用漫游车标记语言编写命令——这是为火星探索漫游车任务开发的基于 XML 的编程语言。

通过分析俯瞰图像，Claude 逐点规划了毅力号在第 1707 和 1709 个火星日（相当于 12 月 8 日和 10 日）的航点路径。它将十米段组装成路径，通过自我批评和修订建议迭代优化航点。

### 验证和结果

AI 输出需要验证。Claude 的航点使用毅力号的每日确认系统进行了模拟测试，建模了超过 50 万个变量以验证漫游车定位和预测路线危险。

JPL 工程师发现需要的修改很少。地面摄像头图像揭示了 Claude 未能看到的沙纹细节；操作员在一个狭窄走廊点改进了路线。除此之外，规划的路线被证明是可靠的。漫游车成功完成了规划的穿越。

### 效率提升

工程师估计使用 Claude 将使路线规划时间减半，并提高行程一致性。减少手动规划和培训时间使漫游车操作员能够进行更多驾驶，收集更多科学数据。

### 未来应用

Claude 在毅力号上的角色是未来应用的初步测试。Claude 展示的自主能力——快速理解新情况、编写复杂仪器操作代码、以最少的操作员指导做出智能决策——对更长、更雄心勃勃的太空任务很有价值。

NASA 的阿尔忒弥斯计划旨在让人类重返月球并在月球南极建立美国主导的基地。更远的未来，自主 AI 系统可以促进对遥远太阳系区域的探索——未来的探测器可能访问木卫二或土卫六等卫星，穿过冰壳下降，并在下方的黑暗海洋中绘制航线。
