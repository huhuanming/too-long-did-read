# 保护用户的身心健康
# Protecting the Wellbeing of Our Users

> 原文链接: https://www.anthropic.com/news/protecting-well-being-of-users
> 日期: 2025-12-18

---

## English

Anthropic's Safeguards team has implemented measures to ensure Claude handles sensitive conversations appropriately. The company focuses on two main areas: managing discussions about suicide and self-harm, and reducing "sycophancy"—when AI models prioritize user preferences over truthfulness.

### Suicide and Self-Harm Response

Claude is not positioned as a substitute for professional mental health care. When users express suicidal or self-harm thoughts, the system responds with empathy while directing users to human support resources.

**Model Training Approach:** The team shapes Claude's behavior through system prompts containing guidance on sensitive conversations and reinforcement learning, where models are rewarded for appropriate responses based on human feedback and expert input.

**Product Safeguards:** A classifier detects conversations involving suicide or self-harm risk and displays banners directing users to crisis resources. ThroughLine provides access to helplines across 170+ countries.

**Performance Metrics:**
- Single-turn responses: Claude Opus 4.5 responds appropriately 98.6% of the time on high-risk requests
- Multi-turn conversations: Opus 4.5 achieves 86% appropriate responses (up from 56% in previous versions)
- Real conversation stress-testing: Opus 4.5 course-corrects 91% of the time

### Sycophancy Reduction

Sycophancy—telling users what they want rather than what's true—poses particular risks for users experiencing disconnection from reality.

**Evaluation Methods:** Automated behavioral audits use one Claude model as an "auditor" and another as a "judge" to assess responses across dozens of exchanges. The 4.5 model family scores 70-85% lower on sycophancy measures compared to Opus 4.1.

**Open-Source Tool:** Anthropic released Petri, an open-source auditing tool allowing public model comparison. Their 4.5 models outperform competing frontier models on sycophancy evaluation.

### Age Restrictions

Claude.ai requires users to be 18+ due to heightened risks for younger users. The platform disables accounts confirmed to belong to minors and is developing classifiers to detect underage users through conversational patterns. Anthropic joined the Family Online Safety Institute to strengthen child safety practices.

### Looking Forward

The company commits to transparent publication of methods and results while collaborating with researchers and industry experts. Users can provide feedback at usersafety@anthropic.com.

---

## 中文翻译

Anthropic 的保障团队已实施措施确保 Claude 适当处理敏感对话。公司专注于两个主要领域：管理关于自杀和自我伤害的讨论，以及减少"迎合性"——即 AI 模型将用户偏好置于真实性之上。

### 自杀和自我伤害响应

Claude 不被定位为专业心理健康护理的替代品。当用户表达自杀或自我伤害的想法时，系统以同理心回应，同时引导用户到人工支持资源。

**模型训练方法：** 团队通过包含敏感对话指导的系统提示和强化学习来塑造 Claude 的行为，根据人类反馈和专家意见奖励适当的回应。

**产品保障：** 分类器检测涉及自杀或自我伤害风险的对话，并显示横幅引导用户到危机资源。ThroughLine 提供 170 多个国家的帮助热线访问。

**性能指标：**
- 单轮回复：Claude Opus 4.5 在高风险请求上 98.6% 的时间做出适当回应
- 多轮对话：Opus 4.5 达到 86% 的适当回复率（之前版本为 56%）
- 真实对话压力测试：Opus 4.5 在 91% 的时间能够纠正方向

### 减少迎合性

迎合性——告诉用户他们想听的而非真实的——对于与现实脱节的用户构成特殊风险。

**评估方法：** 自动化行为审计使用一个 Claude 模型作为"审计员"，另一个作为"评判"来评估数十次交流中的回应。与 Opus 4.1 相比，4.5 模型系列在迎合性指标上降低了 70-85%。

**开源工具：** Anthropic 发布了 Petri，一个允许公开模型比较的开源审计工具。他们的 4.5 模型在迎合性评估上优于竞争的前沿模型。

### 年龄限制

由于对年轻用户的风险更高，Claude.ai 要求用户年满 18 岁。该平台禁用被确认属于未成年人的账户，并正在开发通过对话模式检测未成年用户的分类器。Anthropic 加入了家庭在线安全研究所以加强儿童安全实践。

### 展望未来

公司承诺透明地发布方法和结果，同时与研究人员和行业专家合作。
