---
layout: slides_finch
title: IFT 3710/6759 - Introduction
---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

### .gray224[Introduction]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]
<br><br>
Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

???

- Introduction of myself
- Introductions? Write in the chat
- Share link to slides
- Zoom chat, feel free to interrupt
- Cameras on are preferred
- Session will be recorded

---

## English or French?

This class is offered to both graduate (IFT 6759) and undergraduate students (IFT 3710). Graduate students make a large international crowd, which is why this class is taught in English.

However:

* Feel free to ask questions in French, if you prefer.
* Feel free to ask for a translation, if you don't understand something.
* Let me know (by email) if you prefer to do your assignments in French.

Note: French is not my mother tongue and I am not proficient in French, but my French should be good enough for most things. Otherwise, I am sure other folks in the cclass will be willing to help!

???

- Spanish, German

---

## Study programs

Students in this class may come from different study programs:

* Maîtrise en informatique
* D.E.S.S. en apprentissage automatique
* Baccalauréat en informatique
* Baccalauréat en mathématiques et informatique
* Other?

--

Let's see the distribution live! 

Go to [www.menti.com](https://www.menti.com) and use the code **7106 0196** or click on:

.center[[https://www.menti.com/wdw1o9dnbk](https://www.menti.com/wdw1o9dnbk)]

???

- Menti: https://www.mentimeter.com/s/5961baed47926bc582b7d7aedbca8111/821c861c09e0

---

## The class in a nutshell

.highlight1[Goal]: to prepare you to tackle real-world machine learning projects

.highlight1[Structure]:

* 4 weeks of introductory and review lectures: `git`, Linux, Python, machine learning, deep learning...
* 10 weeks of project work in teams, with office hours.

.highlight1[At the end of the course], we expect you to be able to:

* Code and train machine learning and deep learning models.
* Analyse the experimental results and draw conclusions.
* Communicate written and orally the main aspects of the project.

---

## Teaching assistants (TA)

.left-column[
<figure style="text-align: center">
	<img src="../../../assets/images/slides/people/victor.jpg" alt="Victor Schmidt" style="width: 60%">
  <figcaption style="text-align: center">Victor Schmidt</figcaption>
</figure>
]
.right-column[
<figure style="text-align: center">
	<img src="../../../assets/images/slides/people/melisande.jpg" alt="Mélisande Teng" style="width: 60%">
  <figcaption style="text-align: center">Mélisande Teng</figcaption>
</figure>
]

Roles:

* Projects proposal preparation
* Mentoring teams (office hours)

---

## Schedule and outline

.highlight1[Class schedule] (**online _at least_ until January 31th**):

* Wednesdays, 16:30-18:30 - [Zoom link](https://studium.umontreal.ca/mod/url/view.php?id=3932172)
* Fridays, 09:30-11:30 - [Zoom link](https://studium.umontreal.ca/mod/url/view.php?id=3932173)

.left-column[
**Week 1**
* Day 1: Introduction (today)
* Day 2: `git` and Github tutorial

**Week 2**
* Day 3: Python and Linux
* Day 4: HPC computing
]
.right-column[
**Week 3**
* Day 5: Machine learning review
* Day 6: Deep learning review

**Week 4**
* Day 7: PyTorch tutorial
* Day 8: DL tricks and Q&A
]

???

- Note that zoom links are different each day

---

count: false

## Schedule and outline

.highlight1[Class schedule] (**online _at least_ until January 31th**):

* Wednesdays, 16:30-18:30 - [Zoom link](https://studium.umontreal.ca/mod/url/view.php?id=3932172)
* Fridays, 09:30-11:30 - [Zoom link](https://studium.umontreal.ca/mod/url/view.php?id=3932173)

.left-column[
**Weeks 5 - 14**
* Work on projects in teams
* No front lectures
* Office hours during class time, or on request
* Additional tutorials may be scheduled for support
]

---

## Practical information

* .highlight1[Important announcements]: [StudiUM](https://studium.umontreal.ca/course/view.php?id=219252)
* .highlight1[Updated course materials]: [https://alexhernandezgarcia.github.io/mlprojects](https://alexhernandezgarcia.github.io/teaching/mlprojects/)
* .highlight1[Daily / informal communication]: Discord (email me if you cannot access)
* Feel free to reach the instructors by email

???

- Discord will be used mainly during project development

---

## Project guidelines
### What is a project?

For 10 weeks (week 5 to week 14), you will work on a project in teams. The projects of the course are aimed to resemble as much as possible what real-world machine learning projects look like in either industry or research.

--

Projects comprise the following stages:

1. Literature review
2. Planning
3. Development
4. Analysis of results
5. Written report
6. Oral presentation

---

## Project guidelines
### Working in teams

.highlight1[Important]: The projects will be developed in teams of 3-5 students. Working in teams of at least three students is a requirement of the course. Larger teams may be accepted too. 

???

- Explain why teamwork is mandatory.

--

Working in teams does not necessarily mean that every teammate contributes equally to every part of the project, but we do expect every student to engage in all stages of the project (literature review, planning, coding, analysis, writing, presentation, etc.).

--

Mechanisms to facilitate teamwork:

* Students are free to organise themselves and propose teams to work on specific projects.
* Otherwise, teams will be formed according to the preferences provided by the students.
* Team-wise meetings with the instructors, to assess both the progress and the functioning of the team.
* Questionnaire about the functioning of the team and the contributions at the end of the course.

---

class: tighter

## Project guidelines
### Outline of proposed projects

You may work on one of the proposed projects, or propose your own (see next slide). Tentative topics are:

* [Detection of extreme climate events](./extreme-climate-events)
* [Crop detection and classification](./cropharvest)
* [Downscaling climate models](./downscaling)
* [Electrocatalysts modelling and design](./electrocatalysts)
* [DNA aptamers modelling and design](./dna)
* [NLP for Indigenous languages](./indigenous-languages)
* [Photovoltaic power and solar radiation forecasting](./pv-solar)

???

- GANs
- Domain adaptation
- Image segmentation

--

Let's get a rough idea of your preferences! 

Go to [www.menti.com](https://www.menti.com) and use the code **8588 4252** or click on:

.center[[https://www.menti.com/wdw1o9dnbk](https://www.menti.com/84y1fvycn8)]


???

- Different projects are possible within each of these topics
- Note that those who have attended Fundamentals of machine learning will be familiar with the first two projects, but the projects will go a lot more in depth here.
- Menti: https://www.mentimeter.com/s/e270211fc2849b71f269100449e9ab20/170fbcc915be

---

## Project guidelines
### Proposing your own project

In order to foster creativity and allow you to work on projects of your interest, you are welcome to propose your own projects. Nonetheless, the project proposal must be accepted by the instructors and the decision will be based on the following criteria:

* The project must involve the use of advanced machine learning methods.
* Worked developed prior to this class will not be accepted.
* It must be feasible in terms of computational resources and time constraints.
* The data must be publicly available.
* The project should not raise serious ethical concerns.
* Projects that tackle real-world problems with a potentially positive impact will be favoured.

--

.highlight1[If you have a project in mind, speak with the instructors as soon as possible!]

---

## Project guidelines
### Evaluation criteria

The final grade will be based entirely on the project, following these criteria, all with equivalent weight: 

* .highlight1[Difficulty] of the project
* .highlight1[Quality and performance] of the developed algorithms: suitability of methods, technical rigour, results, etc.
* .highlight1[Written report] completeness, clarity, technical soundness, analysis, etc.
* .highlight1[Oral presentation] effectiveness, clarity of the presentation, etc.
* .highlight1[Code] clarity, documentation, modularity, extendability, etc.

The baseline evaluation will be the same for all team members. However, the individual grades may be adjusted if necessary in the case of participation imbalance.

--

.highlight1[Important note]: The evaluation criteria will be slightly relaxed for undergraduate students (IFT 3710), specifically regarding the _difficulty of the project_.

---

## Pre-requisites

.highlight1[Why pre-requisites?]: 

* This is not an _Introduction to machine learning_ course, but _(Advanced) machine learning projects_.
* All students must be able to contribute to the team.

.highlight1[Which are the pre-requisites?]: 

* Core **machine learning** concepts: there will be a review session.
* Basic **deep learning** concepts: there will be a review session.
* Familiarity with **Python**.
* Familiarity with **PyTorch**.
* Basic **Linux** commands: there will be a tutorial session.
* Familiarity with **`git` and GitHub**: there will be a tutorial session.

---

## Pre-requisites

.context[Machine learning, deep learning, Python, PyTorch, Linux, git and GitHub.]

<br>
.highlight1[Important]: there will be a pre-requisites assessment test/interview before taking part in the projects and before the deadline for dropping off the course (January 28th).

--

Let's gauge what the main needs are! 

Go to [www.menti.com](https://www.menti.com) and use the code **8588 4252** or click on:

.center[[https://www.menti.com/wdw1o9dnbk](https://www.menti.com/84y1fvycn8)]

--

.highlight1[Important]: if you believe you do not have enough experience with any of these skills, we suggest you to **make an effort to catch up during the first two weeks**. Contact the instructor for supporting material. We are here to help!

???

- Especially Python and PyTorch!
- Menti: https://www.mentimeter.com/s/e270211fc2849b71f269100449e9ab20/170fbcc915be

---

## Next session
### `git` and GitHub tutorial

.context[Friday 14th of January, 9:30-11:30]

.highlight1[Homework]: create a [Github](https://github.com/) account and get familiar with `git` and GitHub.

Suggested resources:

* [GitHub _Get started_](https://docs.github.com/en/get-started)
* [_Getting started_](https://git-scm.com/book/en/v2/Getting-Started-About-Version-Control) and [_Git Basics_](https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository) chapters of the [Pro Git book](https://git-scm.com/book/en/v2).

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

### .gray224[Introduction]

.bigger[.bigger[.highlight1[Questions, doubts, concerns, comments?]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alejandro.hernandez.garcia@umontreal.ca](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

???

Additional topics:

- Mention it is my first course at the UdeM
- Research vs industry projects
- Publications
- Milestones during the projects
