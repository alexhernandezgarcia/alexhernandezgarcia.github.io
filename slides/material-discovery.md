---
layout: slides_mila_stork
title: Material discovery
---

name: materialdiscovery

## Accelerating material discovery with machine learning

<br><br>
.center[![:scale 80%](../assets/images/slides/materials/materials_sample.jpg)]

---

## Accelerating material discovery with machine learning
### Motivation

.center[
<figure>
	<img src="../assets/images/slides/materials/hydrogen_methane_storage.png" alt="Hydrogen and methane storage" style="width: 80%">
  <figcaption>.cite[(Lawrence Zitnick et al., 2020)]</figcaption>
</figure>
]

* Renewable energy can be used to transform water into hydrogen or methane and back to electricity
* However, current electrocatalysts are not sufficiently energy-efficient (35 % for round-trip AC to AC)

.references[
* Lawrenece Zitnick et al. [An introduction to electrocatalyst design using machine learning for renewable energy storage](https://arxiv.org/abs/2010.09435). arXiv:2010.09435, 2020.
]

---

## Why machine learning?
### Traditional electrocatalyst design

.context[Current electrocatalyst are only up to 35 % energy efficient]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

--

.left-column-33[
A _relaxation_ of propane (C3H8) on a copper (Cu) surface.
<br><br>
.center[![:scale 100%](../assets/images/slides/materials/relaxation_crop.gif)]
]

---

count: false

## Why machine learning?
### Traditional electrocatalyst design

.context[Current electrocatalyst are only up to 35 % energy efficient]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

.left-column-33[
* Density Functional Theory is used to estimate the energy of a catalyst-molecule structure
* DFT scales with $O(n^3)$ with the number of electrons
* The calculations for one structure take hours or days
* There are combinatorially many possible candidate materials
]

---

## Why machine learning?
### ML world model

.context[Physical models are computationally too expensive for fast discovery.]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

--

.left-column-33[
* Data from physical models can be used to train ML-based approximators
* ML models can be used to more rapidly evaluate candidate materials
]

--

Can we do better?

---

## Why machine learning?
### RL-based exploratory policy 

.context[Using ML to only score candidate materials provides only _linear_ gains.]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

--

.left-column-33[
* We can train ML models to more efficiently search the space of candidate materials
* An RL agent could exploit the structure of the search space
]

Promising results: [GFlowNet](https://alexhernandezgarcia.github.io/slides/salloc%20--gres=gpu:1%20-c%202%20--mem=24G%20-t%208:00:00%20--partition=unkillable) (Bengio et al., 2021)

---

## Accelerating scientific discovery
### Summary

.right-column[.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column[
* World model: graph neural networks (GNN), capable of incorporating invariances and equivariances that preserve physical properties
* Exploratory agent: RL-based algorithms capable of learning the structure of the _world_ to propose diverse, high-reward candidates
]

.full-width[
.conclusion[These principles have applications in material discovery, drug discovery, causal reasoning, etc. and have the potential of pushing the boundaries of machine learning research.]
]

