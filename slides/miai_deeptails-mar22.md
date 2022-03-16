---
layout: slides_mila_owl
title: "GFlowNet: A theoretical introduction and application on biological sequences design"
---

name: title
class: title, middle

## GFlowNets
### A Friendly Introduction and Designing Biological Sequences


.bigger[Moksh Jain and Alex Hernández-García (he/il/él)]

.turquoise[[Deeptails Seminar](https://miai.univ-grenoble-alpes.fr/events-highlights/miai-seminars/) · MIAI Grenoble (virtual) · March 17th 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 6em"></a>
]

---

## Collaborators and publications
* Flow Network based Generative Models for Non-Iterative Diverse Candidate Generation
* GFlowNet Foundations
* Biological Sequence Design with GFlowNets
---

## Motivation
.context[Max is not all you need!]
* Scoring functions during search can be unreliable for in silico-search.
    * Capture only a single attribute.
    * Large errors due to approximations and assumptions
* 

.center[![:scale 50%](../assets/images/slides/gfn-seq-design/ddloop.png)]

---

## Don't we have methods to do that already?
### MCMC

---

## Don't we have methods to do that already?
### RL with Entropy Regularization
---

## Generative Flow Networks (GFlowNets)

---

## Flows

---

## Flow consistency

---

## Learning objective

---

## Application
### Active learning for sequence design

.context[The traditional pipeline]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

.left-column-33[
The .highlight1[traditional pipeline] for biological sequence design (as other domains of scientific discovery):
* relies on .highlight1[highly specialised human expertise],
* it is .highlight1[time-consuming] and
* .highlight1[financially and computationally expensive].
]

---

count: false

## Application
### Active learning for sequence design

.context[Machine learning in the loop]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries
]

---

count: false

## Application
### Active learning for sequence design

.context[Machine learning in the loop]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries

.conclusion[A machine learning model replacing real-world experiments can _only_ provide _linear_ gains.]
]

---

count: false

## Application
### Active learning for sequence design

.context[Can we do better than _linear_? An agent in the loop]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]
]

---

count: false

## Application
### Active learning for sequence design

.context[Can we do better than _linear_? An agent in the loop]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[A successful AL pipeline with an ML agent in the loop can provide _exponential_ gains.]
]

---

## Active learning improvements

---

## Results

---

## Looking forward

---

name: title
class: title, middle

## Thank you!

.bigger[Moksh Jain and Alex Hernández-García (he/il/él)]

.turquoise[[Deeptails Seminar](https://miai.univ-grenoble-alpes.fr/events-highlights/miai-seminars/) · MIAI Grenoble (virtual) · March 17th 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 6em"></a>
]

