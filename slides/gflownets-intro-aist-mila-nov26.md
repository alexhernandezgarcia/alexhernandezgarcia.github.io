---
layout: slides_mila_parrot
title: "GFlowNets: a brief introduction"
---

name: gflownets-intro-aist-mila-nov26
class: title, middle, hide-slide-number

## GFlowNets: a brief introduction

Alex Hernández-García (he/il/él)

.turquoise[AIST Visit at Mila · Montréal · November 16th 2026]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-white-v2.png" alt="Mila" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="width: 12em"></a>
]

.center[
<a href="https://www.obvia.ca/"><img src="../assets/images/slides/logos/obvia_gray.png" alt="Obvia - Observatoire international sur les impacts sociétaux de l'IA et du numérique" style="height: 2.5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://ivado.ca/"><img src="../assets/images/slides/logos/ivado.png" alt="IVADO" style="height: 2.5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://institut-courtois.umontreal.ca/"><img src="../assets/images/slides/logos/institut-courtois.png" alt="Institut Courtois" style="height: 2.5em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.com/slides/{{ name }}](https://alexhernandezgarcia.com/slides/{{ name }})
]]

---

## An intuitive trivial problem

.highlight1[Problem]: find one arrangement of Tetris pieces on the board that minimise the empty space.

.left-column-33[
.center[![:scale 30%](../../../assets/images/slides/tetris/board_empty.png)]
]

.right-column-66[
.center[![:scale 40%](../../../assets/images/slides/tetris/action_space_minimal.png)]
]

--

.full-width[.center[
<figure>
  <img src="../../../assets/images/slides/tetris/mode1.png" alt="Score 12" style="width: 3%">
<figcaption>Score: 12</figcaption>
</figure>
]]

---

count: false

## An intuitive ~~trivial~~ easy problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that minimise the empty space.

.left-column-33[
.center[![:scale 30%](../../../assets/images/slides/tetris/board_empty.png)]
]

.right-column-66[
.center[![:scale 40%](../../../assets/images/slides/tetris/action_space_minimal.png)]
]

--

.full-width[.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/mode1.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/mode2.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/mode3.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/mode4.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/mode5.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
</div>
]]

---

count: false

## An intuitive ~~easy~~ hard problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that minimise the empty space.

.left-column-33[
.center[![:scale 40%](../../../assets/images/slides/tetris/10x20/board_empty.png)]
]

.right-column-66[
.center[![:scale 80%](../../../assets/images/slides/tetris/10x20/action_space_all_pieces.png)]
]

--

.full-width[.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/mode1.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/mode2.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/mode3.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/mode4.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/mode5.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
</div>
]]

---

count: false

## An incredibly ~~intuitive easy~~ hard problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that .highlight2[optimise an unknown function].

.left-column-33[
.center[![:scale 40%](../../../assets/images/slides/tetris/10x20/board_empty.png)]
]

.right-column-66[
.center[![:scale 80%](../../../assets/images/slides/tetris/10x20/action_space_all_pieces.png)]
]

--

.full-width[.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/random_434.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/random_800.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/random_815.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/random_849.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../../../assets/images/slides/tetris/10x20/random_905.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
</div>
]]

---

count: false

## An incredibly ~~intuitive easy~~ hard problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that .highlight2[optimise an unknown function].

.left-column-33[
.center[![:scale 40%](../../../assets/images/slides/tetris/10x20/board_empty.png)]
]

.right-column-66[
.center[![:scale 80%](../../../assets/images/slides/tetris/10x20/action_space_all_pieces.png)]
]

.full-width[.conclusion[Scientific discovery and other problems involve finding candidates or solutions with rare properties from combinatorially or infinitely many options.]]

---

## ML for scientific discoveries
### Summary of main challenges

.context30[Challenges likely shared by other applications, such as robotics.]

--

.highlight1[Challenge]: very large and high-dimensional search spaces.

--

&rarr; Need for .highlight2[efficient search and generalisation] of underlying structure.

--

.highlight1[Challenge]: highly structured, discrete and continuous objects

--

&rarr; Need for .highlight2[generators or samplers designed] for structured data.

--

.highlight1[Challenge]: underspecification of objective functions or metrics.

--

&rarr; Need for .highlight2[diverse solutions].

--

.conclusion[We want to discover diverse high-scoring solutions in very large, structured spaces.]

---

## ML for scientific discoveries
### Available methods

.context35[We want to discover diverse high-scoring solutions in very large, structured spaces.]

--

.center[What methods can address these challenges?]

--

- .highlight1[Reinforcement learning] excels at optimisation in complex spaces, but tends to lack diversity.
--

- .highlight1[Traditional sampling methods (MCMC)] provide diversity, but struggle at mode mixing in high dimensions.
--

- .highlight1[Diffusion] excels at learning from data at scale and sampling in continuous spaces, but is limited at leveraging compositional structure.

--

.conclusion[Generative flow networks (GFlowNets) combine multiple advantages of different methods: **sampling as sequential decision making**.]

---

count: false
name: gflownets
class: title, middle

### A brief introduction to GFlowNets

.center[![:scale 30%](../../../assets/images/slides/gfn-seq-design/flownet.gif)]

---

## GFlowNets for science
### 3 key ingredients

.context[Scientific discovery involves .highlight1[sampling from unknown distributions] in .highlight1[discrete or mixed, high-dimensional, combinatorially large spaces.]]

--

<br><br>

1. .highlight1[Diversity] as an objective.

--
    - Given a score or reward function $R(x)$, learn to _sample proportionally to the reward_.
--
2. .highlight1[Compositionality] in the sample generation.

--
    - A meaningful decomposition of samples $x$ into multiple sub-states $s_0\rightarrow s_1 \rightarrow \dots \rightarrow x$ can yield generalisable patterns.
--
3. .highlight1[Deep learning] to learn from the generated samples.

--
    - A machine learning model can learn the transition function $F(s\rightarrow s')$ and generalise the patterns.

---

## 1. Diversity as an objective

.context[Many existing approaches treat scientific discovery as an _optimisation_ problem.]

<br>
Given a reward or objective function $R(x)$, GFlowNet can be seen a generative model trained to sample objects $x \in \cal X$ according to .highlight1[a sampling policy $\pi(x)$ proportional to the reward $R(x)$]: 

--

.left-column[
$$\pi(x) = \frac{R(x)}{Z} \propto R(x)$$
]

--

.right-column[
$$Z = \sum_{x' \in \cal X} R(x')$$
]

--

.full-width[
.center[
![:scale 2.5%](../../../assets/images/slides/tetris/unique_0.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_1.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_2.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_3.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_4.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_5.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_6.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_7.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_8.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_9.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_10.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_11.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_12.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_13.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_14.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_15.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_16.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_17.png)

![:scale 2.5%](../../../assets/images/slides/tetris/unique_18.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_19.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_20.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_21.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_22.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_23.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_24.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_25.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_26.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_27.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_28.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_29.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_30.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_31.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_32.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_33.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_34.png)
![:scale 2.5%](../../../assets/images/slides/tetris/unique_35.png)
]]

---

count: false

## 1. Diversity as an objective

.context[Many existing approaches treat scientific discovery as an _optimisation_ problem.]

<br>
Given a reward or objective function $R(x)$, GFlowNet can be seen a generative model trained to sample objects $x \in \cal X$ according to .highlight1[a sampling policy $\pi(x)$ proportional to the reward $R(x)$]: 

.left-column[
$$\pi(x) = \frac{R(x)}{Z} \propto R(x)$$
]

.right-column[
$$Z = \sum_{x' \in \cal X} R(x')$$
]

.full-width[
&rarr; Sampling proportionally to the reward function enables finding .highlight1[multiple modes], hence .highlight1[diversity].

.center[![:scale 22%](../../../assets/images/slides/gflownet/reward_landscape.png)]
]

---

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

The principle of compositionality is fundamental in semantics, linguistics, mathematical logic and is thought to be a cornerstone of human reasoning.

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

--

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_0.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_1.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_2.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_3.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_4.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_5.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_6.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_7.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_8.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_9.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_10.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_11.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_12.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_13.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_14.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_15.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_16.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_17.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_18.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_19.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_20.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_21.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_22.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_23.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_24.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_24.png)]]

.right-column[
<br><br>
.conclusion-float[The decomposition of the sampling process into meaningful steps yields patterns that may be correlated with the reward function and facilitates learning complex distributions.]
]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../../../assets/images/slides/tetris/tree/tree_24.png)]]

.right-column[
Objects $x \in \cal X$ are constructed through a sequence of actions from an .highlight1[action space $\cal A$].
]

.right-column[
At each step of the .highlight1[trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots \rightarrow s_f)$], we get a partially constructed object $s$ in .highlight1[state space $\cal S$].
]

--

.right-column[
.conclusion-float[These ideas and terminology is reminiscent of reinforcement learning (RL).]
]

---

## 3. Deep learning policy

.context35[GFlowNets learn a sampling policy $\pi\_{\theta}(x)$ proportional to the reward $R(x)$.]

--

.left-column[
.center[![:scale 90%](../../../assets/images/slides/tetris/flows.png)]
]

---

count: false

## 3. Deep learning policy

.context35[GFlowNets learn a sampling policy $\pi\_{\theta}(x)$ proportional to the reward $R(x)$.]

.left-column[
.center[![:scale 90%](../../../assets/images/slides/tetris/flows_math.png)]
]

.right-column[
<br>
Deep neural networks are trained to learn the transitions (flows) policy: $F\_{\theta}(s\_t\rightarrow s\_{t+1})$.
]

--

.right-column[
Consistent flow theorem (informal): if the sum of the flows into state $s$ is equal to the sum of the flows out, then $\pi(x) \propto R(x)$.
]

.references[
Bengio et al. [Flow network based generative models for non-iterative diverse candidate generation](https://arxiv.org/abs/2106.04399), NeurIPS, 2021.
]

--

.right-column[
.conclusion-float[GFlowNets can be trained with deep learning methods to learn a sampling policy $\pi\_{\theta}$ proportional to a reward $R(x)$.]
]

---

##  GFlowNets extensions and applications

---

count: false

##  GFlowNets extensions and applications
### Multi-objective GFlowNets

Extension of GFlowNets to handle multi-objective optimisation and not only cover the Pareto front but also sample diverse objects at each point in the Pareto front.

.center[![:scale 30%](../../../assets/images/slides/gflownet/mogfn_pareto_front.png)]

.references[
Jain et al. [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765), ICML, 2023.
]

---

##  GFlowNets extensions and applications
### Continuous GFlowNets

Generalisation of the theory and implementation of GFlowNets to encompass both discrete and continuous or hybrid state spaces. 

.center[![:scale 40%](../../../assets/images/slides/gflownet/cube2d/allvalid.gif)]

.references[
Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023.
]

---

##  GFlowNets extensions and applications
### Molecular conformation generation

A continuous GFlowNets algorithm for sampling conformations of small molecules from the Boltzmann distribution, as determined by the molecule’s energy.

.references[
Volokhova, Koziarski et al. [Towards equilibrium molecular conformation generation with GFlowNets](https://arxiv.org/abs/2310.14782), Digital Discovery, 2024.
]

.center[![:scale 100%](../../../assets/images/slides/conformers/schematic.png)]

---

##  GFlowNets extensions and applications
### Biological sequence design

An active learning algorithm with GFlowNets as a sampler of biological sequence design (DNA, antimicrobial peptides, proteins) with desirable properties.

.center[![:scale 45%](../../../assets/images/slides/dna/dna_helix_annotated.png)]

.left-column-66[
.dnag[`G`].dnaa[`A`].dnag[`G`].dnag[`G`].dnag[`G`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnag[`G`].dnag[`G`].dnat[`T`].dnaa[`A`].dnac[`C`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`]<br>
.dnat[`T`].dnac[`C`].dnaa[`A`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnac[`C`].dnag[`G`].dnaa[`A`].dnag[`G`].dnac[`C`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnat[`T`].dnag[`G`].dnat[`T`].dnaa[`A`].dnag[`G`].dnag[`G`].dnac[`C`].dnaa[`A`].dnag[`G`].dnac[`C`].dnag[`G`].dnat[`T`].dnac[`C`].dnac[`C`].dnat[`T`].dnaa[`A`].dnac[`C`].dnac[`C`].dnag[`G`].dnat[`T`].dnat[`T`].dnac[`C`].dnag[`G`]<br>
.dnac[`C`].dnat[`T`].dnaa[`A`].dnac[`C`].dnag[`G`].dnac[`C`].dnag[`G`].dnat[`T`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnat[`T`].dnat[`T`].dnac[`C`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`]<br>
.dnat[`T`].dnat[`T`].dnag[`G`].dnac[`C`].dnaa[`A`].dnag[`G`].dnaa[`A`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnag[`G`].dnac[`C`].dnag[`G`].dnac[`C`].dnaa[`A`].dnat[`T`].dnag[`G`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnat[`T`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnat[`T`].dnat[`T`].dnag[`G`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnaa[`A`]<br>
.dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnag[`G`].dnac[`C`].dnat[`T`].dnat[`T`].dnaa[`A`].dnag[`G`].dnag[`G`].dnag[`G`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnat[`T`].dnag[`G`].dnat[`T`].dnat[`T`].dnac[`C`].dnaa[`A`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnat[`T`].dnag[`G`]<br>
]

.references[
Jain et al. [Biological Sequence Design with GFlowNets](https://arxiv.org/abs/2203.04115), ICML, 2022.
]

---

##  GFlowNets extensions and applications
### Synthesizable molecules through soft constraints

A contrastive learning loss to effectively induce constraints such as synthesizability for molecules

.center[![:scale 100%](../../../assets/images/slides/antibiotics/s3gfn_core.png)]

.references[
Kim et al. [Synthesizable molecular generation via soft-constrained GFlowNets with rich chemical priors](https://arxiv.org/abs/2602.04119), ICML, 2026.
]

---

##  GFlowNets extensions and applications
### Crystal structure generation

A GFlowNet adapted to sample crystal structures by sequentially selecting its physicochemical and symmetry properties, with hard constraints and high flexibility.

.center[![:scale 50%](../../../assets/images/slides/crystals/eform_distr_4.png)]

.references[
Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight)
]

---

##  GFlowNets extensions and applications
### Multi-fidelity active learning with GFlowNets

GFlowNet can play a key role in multi-fidelity active learning, as the sampler that selects both the candidates and their corresponding oracle, building diverse candidate batches

.center[![:scale 75%](../../../assets/images/slides/mfal/mfal_13.png)]

.references[
Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://openreview.net/forum?id=dLaazW9zuF). TMLR 2024.
]

---

##  GFlowNets extensions and applications
### Review paper

A review of the potential of GFlowNets for AI-driven scientific discoveries.

.center[![:scale 60%](../../../assets/images/slides/drugs/gfn_molecules.png)]

.references[
Jain et al. [GFlowNets for AI-Driven Scientific Discovery](https://pubs.rsc.org/en/content/articlelanding/2023/dd/d3dd00002h). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

class: hide-slide-number

## GFlowNet Python package

Open sourced GFlowNet package, together with Mila collaborators: Nikita Saxena, Alexandra Volokhova, Michał Koziarski, Divya Sharma, Pierre Luc Carrier, Victor Schmidt, Joseph Viviano, Jama Hussein, Pedro Ferraz, Dounia Shaaban Kabakibo, Dionessa Biton, Tim Arni, Mohan Guo, Hyeonah Kim, Jacopo Ghirri...

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

.qrcode[![{{ name }}](../assets/images/slides/qrcodes/gflownet-repo.png)]

.center[![:scale 60%](https://opengraph.githubassets.com/1/alexhernandezgarcia/gflownet)]

---

class: hide-slide-number
count: false

## GFlowNet Python package

Open sourced GFlowNet package, together with Mila collaborators: Nikita Saxena, Alexandra Volokhova, Michał Koziarski, Divya Sharma, Pierre Luc Carrier, Victor Schmidt, Joseph Viviano, Jama Hussein, Pedro Ferraz, Dounia Shaaban Kabakibo, Dionessa Biton, Tim Arni, Mohan Guo, Hyeonah Kim, Jacopo Ghirri...

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

.qrcode[![{{ name }}](../assets/images/slides/qrcodes/gflownet-repo.png)]

* A key design principle is the simplicity to create new environments, new applications.
* Current environments: Tetris, hyper-grid, hyper-cube, hyper-torus, scrabble, crystals, molecules, DNA, decision trees...
* Discrete and continuous environments, multiple loss functions, etc.
* Visualisation of results on WandDB

---

count: false
class: hide-slide-number

## GFlowNet Python package

Open sourced GFlowNet package, together with Mila collaborators: Nikita Saxena, Alexandra Volokhova, Michał Koziarski, Divya Sharma, Pierre Luc Carrier, Victor Schmidt, Joseph Viviano, Jama Hussein, Pedro Ferraz, Dounia Shaaban Kabakibo, Dionessa Biton, Tim Arni, Mohan Guo, Hyeonah Kim, Jacopo Ghirri...

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

Research articles supported by this GFlowNet package:

.smaller[
* Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. 
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). RealML, NeurIPS 2023.
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
* Volokhova, Koziarski et al. [Towards equilibrium molecular conformation generation with GFlowNets](https://arxiv.org/abs/2310.14782). Digital Discovery, NeurIPS 2023.
* Mahfoud et al. [Learning Decision Trees as Amortized Structure Inference](https://arxiv.org/abs/2503.06985). arXiv, 2025.
* Podina and Humer et al. [Catalyst GFlowNet for electrocatalyst design: A hydrogen evolution reaction case study](https://arxiv.org/abs/2510.02142). AI4Mat, NeurIPS 2025.
* Several other ongoing projects...
]

.qrcode[![{{ name }}](../assets/images/slides/qrcodes/gflownet-repo.png)]

---

name: gflownets-intro-aist-mila-nov26
class: title, middle, hide-slide-number

## GFlowNets: a brief introduction

Alex Hernández-García (he/il/él)

.turquoise[AIST Visit at Mila · Montréal · November 16th 2026]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-white-v2.png" alt="Mila" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="width: 12em"></a>
]

.center[
<a href="https://www.obvia.ca/"><img src="../assets/images/slides/logos/obvia_gray.png" alt="Obvia - Observatoire international sur les impacts sociétaux de l'IA et du numérique" style="height: 2.5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://ivado.ca/"><img src="../assets/images/slides/logos/ivado.png" alt="IVADO" style="height: 2.5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://institut-courtois.umontreal.ca/"><img src="../assets/images/slides/logos/institut-courtois.png" alt="Institut Courtois" style="height: 2.5em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.com/slides/{{ name }}](https://alexhernandezgarcia.com/slides/{{ name }})
]]

