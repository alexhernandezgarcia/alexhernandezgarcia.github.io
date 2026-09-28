---
layout: slides_parrot
title: IFT 6760B A26 - Active learning with GFlowNets
---

name: paper-presentations-20251027
class: title, middle

## GFlowNets: Sampling as sequential decision making
### IFT 6760B A26

#### .gray224[September 28th]
### .gray224[Information and guidelines about the course assignments]

.smaller[.footer[
Slides: [alexhernandezgarcia.com/teaching/gflownets26/slides/{{ name }}](https://alexhernandezgarcia.com/teaching/gflownets26/slides/{{ name }})
]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.com](https://alexhernandezgarcia.com/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alejandro.hernandez.garcia@umontreal.ca)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../../../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

---

## Evaluation criteria

- **Quizzes**: 30 %
    - About the content of the lectures and suggested additional material.
    - To be completed in class, at the beginning of some lectures (about 5 quizzes in total).
    - The evaluation will be the average over the best-graded quizzes (two will be discarded).
--
- **Short literature review**: 10 %
    - A literature review on a particular GFlowNet aspect or related topic.
    - Evaluation based on a 1-1.5 pages report, which may be reused for the project paper too.
    - Basic literature provided in the [bibliography](https://alexhernandezgarcia.com/teaching/gflownets26/bibliography)
--
- **Paper presentations**: 30 %
    - Presentation of a relevant paper either individually or in small teams, followed by a discussion.
    - Evaluation based on both presentation as well as participation in the discussions.
    - Suggested readings provided in the [bibliography](https://alexhernandezgarcia.com/teaching/gflownets26/bibliography)
--
- **Project work**: 30 %
    - Work in teams on research-like projects.
    - Focus on extending, analysing or reproducing theoretical or practical aspects of GFlowNets.
    - Evaluation based on a conference-like paper, presentation _and_ personal or group interviews.

???

There may be optional coding assignments to gain extra points.

---

## Literature review

A literature review on a particular GFlowNet aspect or related topic.

- 10 % of the total grade.
- Individual work.
- 1-1.5 pages document in conference paper format.
- The literature review should read like a typical "Related work" section of a paper: a discussion of papers published about a topic related to GFlowNets in some meaningful way.
- The goal of this assignment is to give you the opportunity to read a number of papers related to the topic in limited depth, as opposed to studying one paper in full depth.

--

Evaluation criteria:

- Relevance of the topic.
- Depth of the analysis: critical assessment of the published work, as opposed to merely listing related papers.
- Quality and clarity of the writing.

---

## Literature review
### Examples of topics

- The application of GFlowNets on `_______`
    - Combinatorial optimisation problems
    - Molecular generation
    - Materials discovery
    - ...
- Training objectives for GFlowNets
- Connection of GFlowNets to other methods (RL, diffusion, etc.)
- Approaches for multi-objective GFlowNets
- ...

--

**How to select a topic?**

Between this week and next week, think of what you are interested and feel free to run your ideas by me. By the end of next week (October 9th), you are expected to have selected and shared your topic with me for confirmation.

---

## Paper presentations

- 30 % of the total grade.
- Individually or in pairs (two people max.).
- 20-minute presentation of one paper in class.
- The selected paper should be a paper not covered in class, but still related to GFlowNets and ideally relevant for most of the rest of the class.
- The goal of this assignment is to study in depth one paper, try to understand most of the details, and distill them into a presentation so that others can learn about it.

---

## Paper presentations
### Evaluation

.context[Paper presentations represent 30 % of the total grade.]

The evaluation will take into account three main aspects:

- Technical understanding and critical analysis of the presented paper.
- Clarity and effectiveness of the presentation.
- Participation in the discussions.

---

count: false

## Paper presentations
### Evaluation

.context[Paper presentations represent 30 % of the total grade.]

The evaluation will take into account three main aspects:

- Technical understanding and critical analysis of the presented paper.
    - Good presentations should identify the main ideas from the paper and explain them correctly.
    - Good presentations should also identify the main weaknesses and strengths of the paper.
    - Excellent presentations should also offer interesting insights beyond what is in the paper.
- Clarity and effectiveness of the presentation.
    - Good presentations should allow the audience to understand the main ideas from the paper.
    - Excellent presentations are also interesting and memorable.
- Participation in the discussions.
    - Effective participation in the discussion should help others clarify doubts and expand our understanding of the topic.

---

## Paper presentations
### Logistics

- Duration:
    - 20 minutes of presentation.
    - Up to 10 minutes of discussion.
- Three presentations per session.

--

.left-column[
### What to include?

- The structure, format and style are free, but all presentations should explicitly include the following:
    - Main strengths of the paper.
    - Main weaknesses of the paper.
    - 1 or 2 ideas for potential follow up work that are not discussed in the paper.
]

--

.right-column[
### Suggestions for the structure

- Include sufficient background and context.
- Focus on the main ideas or results and exclude secondary details if necessary.
- _Consider_ alternative structures to the one followed in the paper.
- Include your own analysis and conclusions.
]

---

## Paper presentations
### Example of topics

- [Avoid what you know: Divergent trajectory balance for GFlowNets](https://arxiv.org/abs/2602.17827)
- [A theory of non-acyclic generative flow networks](https://arxiv.org/abs/2312.15246)
- [Learning GFlowNets from partial episodes for improved convergence and stability](https://arxiv.org/abs/2209.12782)
- [Better training of GFlowNets with local credit and incomplete trajectories](https://arxiv.org/abs/2302.01687)
- [GFlowNets and variational inference](https://arxiv.org/abs/2210.00580)
- [Unifying generative models with GFlowNets and beyond](https://arxiv.org/abs/2209.02606)
- [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765)
- [Learning to scale logits for temperature-conditional GFlowNets](https://arxiv.org/abs/2310.02823)
- [Robust Scheduling with GFlowNets](https://arxiv.org/abs/2302.05446)
- [Secrets of GFlowNets' learning behavior: A theoretical study](https://arxiv.org/abs/2505.02035)
- ...

.references[[alexhernandezgarcia.com/teaching/gflownets26/bibliography](https://alexhernandezgarcia.com/teaching/gflownets26/bibliography)]

---

## Paper presentations
### Tips to make better presentations

- Plan a clear story
- Design to avoid cognitive overload
- Limit use of text 
- Adapt the content to the context and the audience
- Practice and time your presentation

.references[
* Bourne, [Ten simple rules for making good oral presentations](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.0030077). PLOS Computational Biology, 2007.
* Lortie, [Ten simple rules for short and swift presentations](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1005373). PLOS Computational Biology, 2017.
* Naegle, [Ten simple rules for effective presentation slides](https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1009554). PLOS Computational Biology, 2021.
]

---

## Policy about the use of AI agents and chatbots

The use of AI agents, assistants and chatbots is generally discouraged for the development of the course work, and it is explicitly **not allowed for certain tasks such as generating the text of the written assignments and non-negligible amounts of code**.

.references[[Details of the policy on the course website](https://alexhernandezgarcia.com/teaching/gflownets26/ai-policy)]

--

- The use of LLM chatbots, AI agents and coding assistants is generally _discouraged_ in this course, as it may be detrimental to the learning objectives.
- For all the writing assignments, especially the final report, it is explicitly _not allowed_ to generate text with LLM chatbots or AI agents. All the text must be written by you. Spell-checking tools are allowed.
- For coding assignments, especially the final project, it is _not allowed_ to use coding agents and the generation of large amounts of code from scratch. The use of chatbots is allowed as support and for the generation of small pieces of code.
- The use of chatbots for the generation of new ideas and brainstorming is explicitly discouraged.
- All uses of LLM chatbots, AI agents, and coding assistants must be disclosed and described in the final report, in a separate section titled "Disclosure of the use of AI-based tools".
- The violation of this policy may imply failing the course.

