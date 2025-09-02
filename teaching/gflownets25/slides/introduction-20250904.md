---
layout: slides_warbler
title: IFT 6760B A25 - Introduction 
---

name: introduction-20250904
class: title, middle

## IFT 6760B A25
## Probabilistic inference with GFlowNets

#### .gray224[September 4th - Session 1]
### .gray224[Introduction]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/teaching/mlprojects24/slides/{{ name }}](https://alexhernandezgarcia.github.io/teaching/gflownets25/slides/{{ name }})
]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../../../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

???

- Self-introduction:
    - Assistant professor at DIRO since February 2025
    - Core academic member of Mila
    - Postdoc at the UdeM and at Mila with Prof. Yoshua Bengio
    - PhD in Berlin, at the intersection of machine learning, computational neuroscience and cognitive science
    - Now, my research is focused on machine learning research and applications for tackling climate and health challenges.
- Presentation des étudiants: name, studies, auditing or not, why taking the course...

---

## Objectives of this session

- Introduce the objectives of the course.
- Present the course outline and topics.
- Describe the timeline, structure and logistics of the sessions.
- Discuss the expectations and evaluation criteria.
- Discuss the expected prerequisites to successfully take this course.
- Introduce high level notions of GFlowNets to introduce the topic (second part).
- Get to know each other!

--

The goal is that at the end of the session:
- You will have an understanding of what to expect during the course.
- You will be in a better position to decide whether you indeed want to take this course.
- You can start thinking of what topics you would like to explore during the course.

---

## English or French?

This course is offered to graduate students, who make a large international crowd, which is why this course is taught in English.

However:

* [On est au Québec icitte !](https://www.youtube.com/watch?v=4oclkgHvgM8)
* Feel free to ask questions in French, if you prefer.
* Feel free to ask for a translation, if you don't understand something.
* Let me know if you prefer to do your assignments in French.

???

- Spanish, German

---

## Course structure

This is a seminar course consisting of three main blocks:

1. **Lectures** by the instructor and invited speakers
2. **Presentations** by students about relevant papers
3. **Project work** and **presentations** by students

--

.columns-3-left[
.center[**Lectures** by the instructor]
- Designed to introduce main topics.
- Including coding sessions.
- Probably invited lectures too.
]

--

.columns-3-center[
.center[Paper presentations]
- Designed to explore topics in depth.
- Everyone expected to participate in discussions.
]

--

.columns-3-right[
.center[Project work]
- Designed to acquire hands-on experience.
- Extending, analysing or reproducing theoretical or practical aspects of GFlowNets.
]

---

## Schedule and calendar overview

.left-column[
**Days and time of the sessions**:
- Monday, 10:30-12:30 - Mila
- Thursday, 10:30-12:30 - Mila

**Calendar**:
- First session: September 4th, 2025
- Last session: December 8th, 2025
- Days without class:
    - Monday, October 13th, 2025 (congé universitaire, action de grâce)
    - Monday, October 20th, 2025 (période d'activités libres)
    - Thursday, October 23rd, 2025 (période d'activités libres)
]

--

.right-column[
**Tentative plan**
- Lectures until mid-October
- Paper presentations after the _reading week_
- Project presentations during the last few sessions
- Details depend on pending confirmations by invited speakers and number of students and groups
]

---

## Evaluation criteria

- **Project work**: 40 %
    - Work in teams on research-like projects.
    - Focus on extending, analysing or reproducing theoretical or practical aspects of GFlowNets.
    - Evaluation based on a conference-like paper _and_ a presentation.
--
- **Paper presentations**: 30 %
    - Presentation of a relevant paper either individually or in small teams, followed by a discussion.
    - Evaluation based on both presentation as well as participation in the discussions.
    - Suggested readings provided in the [bibliography](https://alexhernandezgarcia.github.io/teaching/gflownets25/bibliography)
--
- **Quizzes**: 20 %
    - About the content of the lectures and suggested additional material.
    - To be completed in class, at the beginning of the Thursday lectures.
    - The evaluation will be the average over the 80 % best-graded quizzes.
--
- **Short literature review**: 10 %
    - A literature review on a particular GFlowNet aspect or related topic.
    - Evaluation based on a 1-2 pages report, which may be reused for the project paper too.
    - Basic literature provided in the [bibliography](https://alexhernandezgarcia.github.io/teaching/gflownets25/bibliography)

---

## Lectures content

- Introduction and motivation
- Brief review of requisite background
- Main concepts and theoretical results
- Continuous GFlowNets
- Relevant loss functions
- Training guidelines
- Evaluation guidelines
- Connections with diffusion models and variational inference
- Connections with reinforcement learning
- Multi-objective GFlowNets
- Conditional GFlowNets
- Active learning with GFlowNets
- Applications in drug discovery
- Applications in materials discovery

---

## Horaire et plan

.highlight1[Horaire des cours] :

* Les mardis, 10:30-12:30 - Y-117 Pav. Roger-Gaudry
* Les jeudis, 10:30-12:30 - Y-117 Pav. Roger-Gaudry

.left-column[
**Semaine 1**
* Séance 1 : Introduction (aujourd'hui)
* Séance 2 : Python et Linux

**Semaine 2**
* Séance 3 : `git` et tutoriel Github
* Séance 4 : Clusters HPC
]
.right-column[
**Semaine 3**
* Séance 5 : Revue de l'apprentissage automatique
* Séance 6 : Revue de l'apprentissage profond

**Semaine 4**
* Séance 7 : Revue de modèles génératifs
* Séance 8 : Tutoriel PyTorch
]

---

count: false

## Horaire et plan

.highlight1[Horaire des cours] :

* Les mardis, 10:30-12:30 - Salle à préciser
* Les jeudis, 10:30-12:30 - Salle à préciser

.left-column[
**Semaine 5**
* Séance 9 : Visualisation des données
* Séance 10 : Rédaction scientifique
]

.right-column[
**Semaines 5 - 14**
* Travail sur des projets en équipe.
* Pas de cours magistraux.
* Séances de mentorat ouvertes pendant les heures de cours, et privées sur demande.
* Vous devrez faire des mini-rapports périodiques.
]

???

- Explain open office hours

---

## Informations pratiques

* .highlight1[Annonces importantes] : [StudiUM](https://studium.umontreal.ca/course/view.php?id=292494)
* .highlight1[Matériel de cours mis à jour] : [alexhernandezgarcia.github.io/mlprojects](https://alexhernandezgarcia.github.io/teaching/mlprojects/)
* .highlight1[Communication avec l'instructeur] : courriel ([alejandro.hernandez.garcia@umontreal.ca](mailto:alejandro.hernandez.garcia@umontreal.ca))

--

.center[Aimeriez-vous disposer d'un canal Discord pour la communication entre les étudiants (et les instructeurs), notamment pendant la phase de développement du projet ?]

???

- Discord sera utilisé principalement pendant le développement du projet

---

## À propos des projects
### Qu'est-ce qu'un projet ?

Pendant 10 semaines (de la semaine 5 à la semaine 14), vous travaillerez en équipe sur un projet. Les projets du cours ont pour but de ressembler autant que possible aux projets d'apprentissage automatique du monde réel, que ce soit dans l'industrie ou dans la recherche.

--

Les projets comprennent les étapes suivantes :

1. Revue de la littérature
2. Planification
3. Développement
4. Analyse des résultats
5. Présentation orale
6. Rapport écrit

???

- Show plan in website, talk about deliverables and discuss dates (oral presentations, final report, etc.)

---

## À propos des projects
### Travail en équipe

.highlight1[Important] : Les projets seront développés en équipes de 3 à 5 personnes. Le travail en équipe d'au moins 3 personnes est une exigence du cours. Des équipes plus larges peuvent également être acceptées. 

???

- Expliquez pourquoi le travail en équipe est obligatoire.

--

Le travail en équipe ne signifie pas nécessairement que chaque coéquipier contribue de manière égale à chaque partie du projet, mais on attend que chaque personne s'engage dans toutes les étapes du projet (revue de la littérature, planification, programmation, analyse, rédaction, présentation, etc.)

--

Mécanismes pour faciliter le travail d'équipe :

* Vous êtes libres de vous organiser et de proposer des équipes pour travailler sur des projets spécifiques.
* Sinon, les équipes seront formées en fonction des vos préférences.
* Réunions avec les instructeurs, pour évaluer à la fois les progrès et le fonctionnement de l'équipe.
* Questionnaire sur le fonctionnement de l'équipe et les contributions à la fin du cours.

---

classe: tighter

## À propos des projects
### Schéma des projets proposés

Vous pouvez travailler sur l'un des projets proposés, ou proposer le vôtre (voir diapositive suivante). Quelques projects peuvent être sur :

* Détection d’événements climatiques extrêmes
* Détection et classification des cultures
* Réduction d’échelle des modèles climatiques
* Modélisation et conception des électrocatalyseurs
* Modélisation des aptamères d’ADN
* WILDS : Changements de distribution dans la nature
* eBird : Surveillance de la biodiversité
* Classification et détection des animaux
* Études expérimentale des GFlowNets, active learning, Bayesian optimisation...

???

- Demander si il y d'autres idées.
- They can start thinking about projects.
- Différents projets sont possibles dans chacun de ces thèmes
- Notez que ceux qui ont assisté à Fundamentals of machine learning seront familiers avec les deux premiers projets, mais les projets seront beaucoup plus approfondis ici.

---

## À propos des projects
### Proposer votre propre projet

Afin d'encourager la créativité et de vous permettre de travailler sur les projets qui vous intéressent, vous êtes invités à proposer vos propres projets. Néanmoins, la proposition de projet doit être acceptée par les instructeurs et la décision sera basée sur les critères suivants :

* Le projet doit impliquer l'utilisation de méthodes avancées d'apprentissage automatique.
* Les travaux développés avant ce cours ne seront pas acceptés.
* Il doit être réalisable en termes de ressources informatiques et de contraintes de temps.
* Les données doivent être accessibles au public.
* Le projet ne doit pas soulever des problèmes éthiques.
* Les projets avec un impact potentiellement positif seront favorisés.

--

.highlight1[Si vous avez un projet en tête, parlez-en aux instructeurs dès que possible !]

---

## À propos des projects
### Critères d'évaluation

La note finale sera entièrement basée sur le projet, selon les critères suivants, tous de poids équivalent : 

* .highlight1[Difficulté] du projet
* .highlight1[Qualité et performance] des algorithmes : adéquation des méthodes, rigueur technique, résultats, etc.
* .highlight1[Rapport écrit] : exhaustivité, clarté, solidité technique, analyse, etc.
* .highlight1[Présentation orale] : efficacité, clarté de la présentation, etc.
* .highlight1[Code] : clarté, documentation, modularité, extensibilité, etc.

L'évaluation de base sera la même pour tous les membres de l'équipe. Cependant, les notes individuelles pourront être ajustées si nécessaire en cas de déséquilibre de participation.

--

.highlight1[Note importante] : Les critères d'évaluation seront légèrement assouplis pour les étudiant·e·s de premier cycle (IFT 3710), notamment en ce qui concerne la _difficulté du projet_.

---

## Préalables

.highlight1[Pourquoi des préalables ?] : 

* Il ne s'agit pas d'un cours d'_Introduction à l'apprentissage automatique_, mais de _projets (avancés) d'apprentissage automatique_.
* Tous les étudiant·e·s doivent être en mesure de contribuer à l'équipe.

.highlight1[Quels sont les préalables ?]: 

* Concepts de base de **l'apprentissage automatique** : il y aura une session de révision.
* Concepts de base de **l'apprentissage profond** : il y aura une session de révision.
* Familiarité avec **Python**.
* Familiarité avec **PyTorch**.
* Commandes de base de **Linux** : il y aura une session de tutorat.
* Familiarité avec **`git` et GitHub** : il y aura une session de tutorat.

---

## Préalables

.context[Apprentissage automatique, apprentissage profond, Python, PyTorch, Linux, git et GitHub.]

<br>
.highlight1[Note importante] : Si vous n’êtes pas certain·e d’avoir suffisamment de connaissances sur les sujets ci-dessus pour pouvoir contribuer à une équipe et donc réussir le cours, contactez l’instructeur dès que possible pour évaluer vos connaissances et prendre une décision ensemble.

--

Voyons les principaux besoins ! 

Allez sur [www.menti.com](https://www.menti.com) et utilisez le code **5814 1320** ou cliquez sur :

.center[[https://www.menti.com/84y1fvycn8](https://www.menti.com/84y1fvycn8)]

???

- Surtout Python et PyTorch !
- Menti: https://www.mentimeter.com/app/presentation/e270211fc2849b71f269100449e9ab20

---

### Session suivante
### Python et Linux

.context[Jeudi 11 janvier, 10:30-12:30]

Ressources et homework suggérées :

* [The missing semester: The Shell](https://missing.csail.mit.edu/2020/course-shell/#topic-1-the-shell)
* [Python tutorial: An informal introduction to Python](https://docs.python.org/3/tutorial/introduction.html)

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

### .gray224[9 janvier 2024 - Session 1]
### .gray224[Introduction]

.bigger[.bigger[.highlight1[Questions, doutes, préoccupations, commentaires ?]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../../../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

???

Sujets supplémentaires :

- Mentionner que c'est mon premier cours en français à l'UdeM
- Projets de recherche vs projets industriels
- Publications
- Jalons pendant les projets

