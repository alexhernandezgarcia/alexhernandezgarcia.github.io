---
layout : teaching
navigation: navigation_gflownets25
title : Probabilistic inference with GFlowNets - IFT 6760B A25
redirect_from :
  - /gflownets
  - /gflownets25
  - /ift6760a25.html
  - /ift6760a25
  - /ift6760ba25.html
  - /ift6760ba25
---

# Course description

Generative flow networks, also known as GFlowNets or simply GFN, are a class of generative machine learning models that perform amortised probabilistic inference. This course will cover the fundamental aspects of GFlowNets, starting from a motivation and introduction to the method, and progressing towards more advanced concepts and applications, as well as the connection to other generative models, reinforcement learning and probabilistic inference methods. The course will combine theory with project work, with a special emphasis on the application of GFlowNets for scientific discovery.

---

Les réseaux de flux génératifs, également connus sous le nom de GFlowNets ou simplement GFN, sont une classe de modèles d'apprentissage automatique génératifs qui effectuent une inférence probabiliste amortie. Ce cours couvrira les aspects fondamentaux de GFlowNets, à partir d'une motivation et d'une introduction à la méthode, en progressant vers des concepts et applications plus avancés, ainsi que le lien avec d'autres modèles génératifs, apprentissage par renforcement et méthodes d'inférence probabiliste. Le cours combinera la théorie avec le travail de projet, avec un accent particulier sur l'application des GFlowNets pour la découverte scientifique.


# Course outline

This seminar course consists of three blocks:

1. **Lectures** by the instructor and invited speakers
2. **Presentations** by students about relevant papers
3. **Project work** and **paper presentations** by students

The lectures will cover the following topics:

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

# Evaluation criteria

The evaluation will be based on three aspects:

- **Project work**: 40 %
    - Students will form teams and work on research-like projects.
    - Projects may focus on extending, analysing or reproducing theoretical or practical aspects of GFlowNets.
    - Projects will be evaluated based on a conference-like paper and a presentation.
- **Paper presentations**: 30 %
    - Students will select a relevant paper and present it for the rest of the group either individually or in small teams.
    - Presentations will be followed by a discussion in which everyone can participate.
    - The evaluation will consider both the presentation as well as the participation in the discussions.
- **Quizzes**: 20 %
    - A few quizzes will have to be completed by students throughout the lectures block of the course.
    - The quizzes will be based on the content of the lectures and suggested additional material.

# Prerequisites

As a prerequisite to register for this course, students must have successfully completed the following courses:

- [Introduction à la science des données](https://admission.umontreal.ca/cours-et-horaires/cours/ift-3700/) (IFT 3700)
- [Fundamentals of machine learning](https://admission.umontreal.ca/cours-et-horaires/cours/ift-3395/) (IFT 3395/6390).

Additionally, it is recommended to have taken (or take in parallel) the following courses:

- [Representation learning](https://admission.umontreal.ca/cours-et-horaires/cours/ift-6135/) (IFT 6135)
- [Probabilistic graphical models](https://admission.umontreal.ca/cours-et-horaires/cours/ift-6269/) (IFT 6269)

---

Comme exigences d'inscription à ce cours, les étudiant.e.s doivent avoir réussi : 

- [Introduction à la science des données](https://admission.umontreal.ca/cours-et-horaires/cours/ift-3700/) (IFT 3700)
- [Fondements de l'apprentissage machine](https://admission.umontreal.ca/cours-et-horaires/cours/ift-3395/) (IFT 3395/6390).

En outre, il est recommandé d’avoir suivi (ou de suivre en parallèle) les cours suivants :

- [Apprentissage de représentations](https://admission.umontreal.ca/cours-et-horaires/cours/ift-6135/) (IFT 6135)
- [Modèles graphiques probabilistes et apprentissage](https://admission.umontreal.ca/cours-et-horaires/cours/ift-6269/) (IFT 6269)


## Why such prerequisites?

In order to cover the specifics of generative flow networks (GFlowNets), we have to depart from a position of familiarity with the fundamental concepts of machine learning as well as deep learning. Additionally, we will be using the language of probability, statistics, linear algebra and calculus. A good reference for the contents that are expected to be familiar with is Part I of the [Deep Learning book](https://www.deeplearningbook.org/), by Goodfellow, Bengio and Courville. Finally, the course includes project work, which requires familiarity with Python and the typical machine learning libraries, such numpy, pandas, PyTorch, etc. You can check the [resources section](#resources) below for additional references.

# Useful links

* [StudiUM page](https://studium.umontreal.ca/course/view.php?id=332667)
* [Link to public admission page of IFT 6760B](https://admission.umontreal.ca/cours-et-horaires/cours/ift-6760b/)
* [University calendar](https://registraire.umontreal.ca/dates-importantes/calendriers-universitaires/#calendrier-universitaire-2025-2026)

# Session d'automne 2025

Les cours ont lieu :

* Les lundis, 10h30--12h30 (ET)
* Les jeudis, 10h30--12h30 (ET)

# Resources

## Introduction to GFlowNets
* Bengio et al. (2021). [Flow network based generative models for non-iterative diverse candidate generation](https://papers.nips.cc/paper/2021/hash/e614f646836aaed9f89ce58e837e2310-Abstract.html). NeurIPS 2021.
* Jain, et al. (2023). [GFlowNets for AI-driven scientific discovery](https://pubs.rsc.org/en/content/articlelanding/2023/dd/d3dd00002h). Digital Discovery.
* [Mila GFlowNet Workshop 2023](https://www.gflownet.org/).
* [gflownet Python library](https://github.com/alexhernandezgarcia/gflownet).

## Machine learning and deep learning review
* Abu-Mostafa, Y. S., Magdon-Ismail, M., & Lin, H. T. (2012). [Learning from data](https://work.caltech.edu/textbook.html). AMLBook.
* Goodfellow, I., Bengio, Y., & Courville, A. (2016). [Deep learning](https://www.deeplearningbook.org/). MIT press.
* [Deep Learning Tutorials](https://deeplearning.neuromatch.io/tutorials/intro.html). Neuromatch Deep Learning course.

## Machine learning in practice
* Anish, Jose, Jon (last visit on May 5th, 2025). [The Missing Semester of Your CS Education](https://missing.csail.mit.edu/). CSAIL MIT.
* [Linux introduction for Windows and Mac users](https://docs.computecanada.ca/wiki/Linux_introduction). Compute Canada wiki.
* [Python tutorial: An informal introduction to Python](https://docs.python.org/3/tutorial/introduction.html). [www.python.org](https://www.python.org/).
* [PyTorch tutorials](https://pytorch.org/tutorials/). [pytorch.org](https://pytorch.org).
* [Projets (avancés) en apprentissage automatique - IFT 3710/6759 H24](https://alexhernandezgarcia.github.io/teaching/mlprojects24/).
