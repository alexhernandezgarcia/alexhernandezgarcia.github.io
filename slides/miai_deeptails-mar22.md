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

## Experiments
### Anti-microbial peptide design

* Peptides are short chains of amino acids (proteins) .cite[(Pirtskhalava et al., 2021)]
* The goal is to find peptides with anti-microbial properties
* We consider chains of length 50, with a vocabulary of 20 aminoacids ($>10^{65}$)
* Active learning hyper-parameters:
    * Initial data set $|\mathcal{D_0}| = 7830$ (3219 + 4611)
    * 10 rounds
    * Batch size $b = 10$

.references[
Pirtskhalava et al. DBAASP V3: Database of antimicrobial/cytotoxic activity and structure of peptides as a resource for development of new therapeutics. Nucleic Acids Research, 2021.
]

---

## Experiments
### Desiderata for candidates

.context[We look for a .highlight[diverse] set of .highlight[good] candidates]

The set of top $k$ candidates: $\mathcal{D}_{Best} = TopK(\mathcal{D}_K \backslash \mathcal{D}_0)$

* Performance / usefulness score: mean score of $\mathcal{D}_{Best}$
* Diversity: mean distance within $\mathcal{D}_{Best}$
* Novelty: mean distance with between $\mathcal{D}_{Best}$ and $\mathcal{D}_0$

--

&nbsp
&nbsp

.conclusion[A set of candidates should be evaluated holistically, considering all three metrics.]

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

