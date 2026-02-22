# Protecting the Wellbeing of Our Users
# 保护用户的身心健康

> Source: https://www.anthropic.com/news/protecting-well-being-of-users
> Date: 2025-12-18

---

Anthropic's Safeguards team has implemented comprehensive measures to ensure Claude handles sensitive conversations—particularly those involving emotional support—with appropriate care and honesty about its limitations.

Anthropic 的安全保障团队实施了全面的措施，确保 Claude 以适当的关怀和对自身局限性的诚实态度处理敏感对话——特别是涉及情感支持的对话。

---

## Suicide and Self-Harm Response
## 自杀和自残响应

### Model Training Approaches
### 模型训练方法

Claude's behavior in these situations relies on two primary mechanisms. First, system prompts provide overarching guidance on handling sensitive topics with care. Second, reinforcement learning trains models to respond appropriately by rewarding correct answers based on human preference data and expert input.

Claude 在这些情况下的行为依赖于两个主要机制。首先，系统提示提供关于谨慎处理敏感话题的总体指导。其次，强化学习通过基于人类偏好数据和专家输入奖励正确答案来训练模型做出适当回应。

---

### Product Safeguards
### 产品安全措施

A suicide and self-harm classifier monitors Claude.ai conversations, flagging discussions involving potential suicidal ideation or related fictional scenarios. When triggered, users see a banner directing them to professional resources. These resources come from ThroughLine, which maintains a global network across 170+ countries, providing access to services like the 988 Lifeline in North America and region-specific helplines elsewhere.

一个自杀和自残分类器监控 Claude.ai 对话，标记涉及潜在自杀意念或相关虚构场景的讨论。当触发时，用户会看到一个引导他们前往专业资源的横幅。这些资源来自 ThroughLine，该组织在 170 多个国家维护着全球网络，提供北美 988 生命线和其他地区特定帮助热线等服务。

Anthropic is partnering with the International Association for Suicide Prevention to strengthen guidance on handling such conversations.

Anthropic 正在与国际自杀预防协会合作，加强处理此类对话的指导。

---

### Evaluation Results
### 评估结果

**Single-turn responses:** Latest models (Opus 4.5, Sonnet 4.5, Haiku 4.5) respond appropriately 98.6%, 98.7%, and 99.3% respectively to high-risk requests. Refusal rates for benign requests remain under 0.1%.

**单轮回复：** 最新模型（Opus 4.5、Sonnet 4.5、Haiku 4.5）分别以 98.6%、98.7% 和 99.3% 的比例对高风险请求做出适当回应。对良性请求的拒绝率保持在 0.1% 以下。

**Multi-turn conversations:** Opus 4.5 and Sonnet 4.5 respond appropriately in 86% and 78% of scenarios, substantially improving upon Opus 4.1's 56%.

**多轮对话：** Opus 4.5 和 Sonnet 4.5 在 86% 和 78% 的场景中做出适当回应，大幅改善了 Opus 4.1 的 56%。

**Stress-testing:** Using real conversations, Opus 4.5 recovered appropriately 91% of the time, compared to 36% for Opus 4.1.

**压力测试：** 使用真实对话，Opus 4.5 在 91% 的时间里适当恢复，而 Opus 4.1 为 36%。

---

## Addressing Sycophancy
## 解决谄媚问题

Sycophancy—telling users what they want rather than what's true—represents a significant concern, particularly for users experiencing disconnection from reality. Reducing this tendency across conversational types strengthens Claude's reliability.

谄媚——告诉用户他们想听的而非真实的——代表着一个重大关切，特别是对于正在经历与现实脱节的用户。在各种对话类型中减少这种倾向可以增强 Claude 的可靠性。

Claude's 4.5 models score 70-85% lower than Opus 4.1 on automated behavioral audits measuring sycophancy and user delusion encouragement. The open-source Petri evaluation tool confirms these models outperform other frontier models on sycophancy metrics.

Claude 4.5 模型在衡量谄媚和鼓励用户妄想的自动行为审计中，得分比 Opus 4.1 低 70-85%。开源的 Petri 评估工具确认这些模型在谄媚指标上优于其他前沿模型。

Stress-testing reveals current models achieve appropriate course-correction 10-37% of the time, indicating "significant room for improvement." This reflects trade-offs between warmth and accuracy.

压力测试显示，当前模型在 10-37% 的时间里实现了适当的纠偏，表明"仍有很大的改进空间。"这反映了温暖度和准确性之间的权衡。

---

## Age Restrictions
## 年龄限制

Claude.ai requires users to be 18+. The platform flags self-identified minors for review and disables confirmed underage accounts. Anthropic is developing classifiers to detect subtle conversational indicators of age, partnering with the Family Online Safety Institute.

Claude.ai 要求用户年满 18 岁。该平台标记自我识别的未成年人以供审查，并禁用已确认的未成年账户。Anthropic 正在开发分类器来检测对话中微妙的年龄指标，并与家庭在线安全研究所合作。

---

## Future Direction
## 未来方向

Anthropic commits to continued safeguard development, transparent publication of methods and results, and collaboration with researchers and industry experts to improve AI behavior in these critical areas.

Anthropic 承诺持续开发安全措施、透明地发布方法和结果，并与研究人员和行业专家合作，以改善 AI 在这些关键领域的行为。
