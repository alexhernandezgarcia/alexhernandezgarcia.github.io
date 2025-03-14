---
layout: slides_mila_starling
title: "Machine learning for science: How generative and active learning can facilitate scientific discoveries"
---

name: mila-visit-day-mar25
class: title, middle

## Machine learning for science
### How generative and active learning can facilitate scientific discoveries

Alex Hernández-García (he/il/él)

.turquoise[Visit Day · Mila · March 14th 2025]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-white-v2.png" alt="Mila" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="width: 12em"></a>
]

.center[
<a href="https://institut-courtois.umontreal.ca/"><img src="../assets/images/slides/logos/institut-courtois.png" alt="Institut Courtois" style="height: 2.5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://ivado.ca/"><img src="../assets/images/slides/logos/ivado.png" alt="IVADO" style="height: 2.5em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]

.qrcode[![{{ name }}](../assets/images/slides/qrcodes/{{ name }}.png)]

---

count: false
name: title
class: title, middle

### Why scientific discoveries?

.center[![:scale 30%](../assets/images/slides/climatechange/demo.jpg)]

---

## Why scientific discoveries?

.context[Climate change is a major challenge for humanity.]

<br><br>

.center[
<figure>
	<img src="../assets/images/slides/climatechange/ipcc_warming.png" alt="Observed (1900–2020) and projected (2021–2100) changes in global surface temperature (relative to 1850–1900)" style="width: 100%">
  <figcaption>.smaller[Observed (1900–2020) and projected (2021–2100) changes in global surface temperature relative to 1850–1900 (adapted from: <a href="https://www.ipcc.ch/report/sixth-assessment-report-cycle/">IPCC Sixth Assessment Report</a>)]</figcaption>
</figure>
]

.conclusion["The evidence is clear: the time for action is now." .smaller[IPCC Report, 2022]]

---

## Why scientific discoveries?

.context[Climate change is a major challenge for humanity.]

.center[
<figure>
	<img src="../assets/images/slides/climatechange/who_climate_health.png" alt="Climate change presents a fundamental threat to human health." style="width: 100%">
  <figcaption>.smaller[Climate-sensitive health risks (adapted from: <a href="https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health">World Health Organization</a>)]</figcaption>
</figure>
]

.smaller[
* Environmental factors take the lives of around 13 million people _per year_.
* Climate change affects people’s mental and physical health, access to clean air, safe water, food and health care.
]

.full-width[
.conclusion["Climate change is the single biggest health threat facing humanity." .smaller[[WHO and WMO](https://climahealth.info/), 2024]]
]

---

## Machine Learning for Science

.center[![:scale 60%](../assets/images/slides/climatechange/climate_health_ai.png)]

.conclusion[Machine learning research has the potential to facilitate scientific discoveries to tackle climate and health challenges.]

---

count: false

## Machine Learning for Science and Science for Machine Learning

.center[![:scale 60%](../assets/images/slides/climatechange/climate_health_ai_cycle.png)]

.conclusion[Machine learning research has the potential to facilitate scientific discoveries to tackle climate and health challenges. Scientific challenges stimulate in turn machine learning research.]

---

count: false
name: mlforscience
class: title, middle

### Machine learning for scientific discoveries

.center[![:scale 30%](../assets/images/slides/scientific-discovery/laboratory.png)]

---

## Traditional discovery cycle

.context35[Climate and health challenges demand accelerating scientific discoveries.]

--

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_1.png)]]

.left-column-33[
<br>
The .highlight1[traditional cycle] for scientific discovery:
* relies on .highlight1[highly specialised human expertise],
* it is .highlight1[time-consuming] and
* .highlight1[financially and computationally expensive].
]

---

count: false

## _Active_ (machine) learning

.context35[The traditional scientific discovery loop is too slow for certain applications.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_2.png)]]

.left-column-33[
<br>
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
]

---

count: false

## _Active_ (machine) learning

.context35[The traditional scientific discovery loop is too slow for certain applications.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_3.png)]]

.left-column-33[
<br>
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries
]

---

count: false

## _Active_ (machine) learning

.context35[The traditional scientific discovery loop is too slow for certain applications.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_3.png)]]

.left-column-33[
<br>
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries

.conclusion[There are infinitely many conceivable materials, $10^{180}$ potentially stable and $10^{60}$ drug molecules. Are predictive models enough?]
]

---

count: false

## Active and _generative_ machine learning

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_4.png)]]

.left-column-33[
<br>
.highlight1[Generative machine learning] can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]
]

---

count: false

## Active and _generative_ machine learning

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_4.png)]]

.left-column-33[
<br>
.highlight1[Generative machine learning] can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[Active learning with generative machine learning can in theory more efficiently explore the candidate space.]
]

---

count: false
name: title
class: title, middle

### The challenges of scientific discoveries

.center[![:scale 15%](../assets/images/slides/materials/lithium_oxide_crystal.png)]
.center[![:scale 30%](../assets/images/slides/dna/dna_helix.png)]

---

## An intuitive trivial problem

.highlight1[Problem]: find one arrangement of Tetris pieces on the board that minimise the empty space.

.left-column-33[
.center[![:scale 30%](../assets/images/slides/tetris/board_empty.png)]
]

.right-column-66[
.center[![:scale 40%](../assets/images/slides/tetris/action_space_minimal.png)]
]

--

.full-width[.center[
<figure>
  <img src="../assets/images/slides/tetris/mode1.png" alt="Score 12" style="width: 3%">
<figcaption>Score: 12</figcaption>
</figure>
]]

---

count: false

## An intuitive ~~trivial~~ easy problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that minimise the empty space.

.left-column-33[
.center[![:scale 30%](../assets/images/slides/tetris/board_empty.png)]
]

.right-column-66[
.center[![:scale 40%](../assets/images/slides/tetris/action_space_minimal.png)]
]

--

.full-width[.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode1.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode2.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode3.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode4.png" alt="Score 12" style="width: 20%">
    <figcaption>12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode5.png" alt="Score 12" style="width: 20%">
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
.center[![:scale 40%](../assets/images/slides/tetris/10x20/board_empty.png)]
]

.right-column-66[
.center[![:scale 80%](../assets/images/slides/tetris/10x20/action_space_all_pieces.png)]
]

--

.full-width[.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/mode1.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/mode2.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/mode3.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/mode4.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/mode5.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
</div>
]]

---

count: false

## An incredibly ~~intuitive easy~~ hard problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that .highlight2[optimise an unknown function].

.left-column-33[
.center[![:scale 40%](../assets/images/slides/tetris/10x20/board_empty.png)]
]

.right-column-66[
.center[![:scale 80%](../assets/images/slides/tetris/10x20/action_space_all_pieces.png)]
]

--

.full-width[.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_434.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_800.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_815.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_849.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_905.png" alt="Random board" style="width: 40%">
  </figure>
  </div>
</div>
]]

---

count: false

## An incredibly ~~intuitive easy~~ hard problem

.highlight1[Problem]: find .highlight2[all] the arrangements of Tetris pieces on the board that .highlight2[optimise an unknown function].

.left-column-33[
.center[![:scale 40%](../assets/images/slides/tetris/10x20/board_empty.png)]
]

.right-column-66[
.center[![:scale 80%](../assets/images/slides/tetris/10x20/action_space_all_pieces.png)]
]

.full-width[.conclusion[Materials and drug discovery involve finding **diverse** candidates in **combinatorially or infinitely large search spaces**, with **rare properties** that are **expensive to evaluate**.]]

---

## Why Tetris for scientific discovery?

.context35[The "Tetris problem" involves .highlight1[sampling from an unknown distribution] in a .highlight1[discrete, high-dimensional, combinatorially large space].]

---

count: false

## Why Tetris for scientific discovery?
### Biological sequence design

<br>
Proteins, antimicrobial peptides (AMP) and DNA can be represented as sequences of amino acids or nucleobases. There are $22^{100} \approx 10^{134}$ protein sequences with 100 amino acids.

.context35[The "Tetris problem" involves sampling from an unknown distribution in a discrete, high-dimensional, combinatorially large space]

.center[![:scale 45%](../assets/images/slides/dna/dna_helix_annotated.png)]

.left-column-66[
.dnag[`G`].dnaa[`A`].dnag[`G`].dnag[`G`].dnag[`G`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnag[`G`].dnag[`G`].dnat[`T`].dnaa[`A`].dnac[`C`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`]<br>
.dnat[`T`].dnac[`C`].dnaa[`A`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnac[`C`].dnag[`G`].dnaa[`A`].dnag[`G`].dnac[`C`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnat[`T`].dnag[`G`].dnat[`T`].dnaa[`A`].dnag[`G`].dnag[`G`].dnac[`C`].dnaa[`A`].dnag[`G`].dnac[`C`].dnag[`G`].dnat[`T`].dnac[`C`].dnac[`C`].dnat[`T`].dnaa[`A`].dnac[`C`].dnac[`C`].dnag[`G`].dnat[`T`].dnat[`T`].dnac[`C`].dnag[`G`]<br>
.dnac[`C`].dnat[`T`].dnaa[`A`].dnac[`C`].dnag[`G`].dnac[`C`].dnag[`G`].dnat[`T`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnat[`T`].dnat[`T`].dnac[`C`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`]<br>
.dnat[`T`].dnat[`T`].dnag[`G`].dnac[`C`].dnaa[`A`].dnag[`G`].dnaa[`A`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnag[`G`].dnac[`C`].dnag[`G`].dnac[`C`].dnaa[`A`].dnat[`T`].dnag[`G`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnat[`T`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnat[`T`].dnat[`T`].dnag[`G`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnaa[`A`]<br>
.dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnag[`G`].dnac[`C`].dnat[`T`].dnat[`T`].dnaa[`A`].dnag[`G`].dnag[`G`].dnag[`G`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnat[`T`].dnag[`G`].dnat[`T`].dnat[`T`].dnac[`C`].dnaa[`A`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnat[`T`].dnag[`G`]<br>
]

---

## Why Tetris for scientific discovery?
### Molecular generation

.context35[The "Tetris problem" involves sampling from an unknown distribution in a discrete, high-dimensional, combinatorially large space]

<br>
Small molecules can also be represented as sequences or by a combination of of higher-level fragments. There may be about $10^{60}$ drug-like molecules.

.columns-3-left[
.center[
![:scale 90%](../assets/images/slides/drugs/melatonin.png)

`CC(=O)NCCC1=CNc2c1cc(OC)cc2
CC(=O)NCCc1c[nH]c2ccc(OC)cc12`
]]

.columns-3-center[
.center[
![:scale 90%](../assets/images/slides/drugs/thiamine.png)

`OCCc1c(C)[n+](cs1)Cc2cnc(C)nc2N`
]]

.columns-3-right[
.center[
![:scale 60%](../assets/images/slides/drugs/nicotine.png)

`CN1CCC[C@H]1c2cccnc2`
]]

---

## Why Tetris for scientific discovery?
### Crystal structure generation

.context35[The "Tetris problem" involves sampling from an unknown distribution in a discrete, high-dimensional, combinatorially large space]

<br>
Crystal structures can be described by their chemical composition, the symmetry group and the lattice parameters (and more generally by atomic positions).

.left-column[
.center[![:scale 60%](../assets/images/slides/materials/lithium_oxide_crystal.png)]
]

.right-column[
.center[![:scale 50%](../assets/images/slides/crystals/unit_cell.png)]
]

.references[
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
]

---

count: false
name: gflownets
class: title, middle

### A gentle introduction to Generative Flow Networks (GFlowNets)

.center[![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)]

---

count: false
name: gflownets
class: title, middle

### A brief ~~gentle~~ introduction to Generative Flow Networks (GFlowNets)

.center[![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)]

---

count: false
name: gflownets
class: title, middle

### A lightning ~~brief gentle~~ introduction to Generative Flow Networks (GFlowNets)

.center[![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)]

---

## GFlowNets for science
### 3 key ingredients

.context[Materials and drug discovery involve .highlight1[sampling from unknown distributions] in .highlight1[discrete or mixed, high-dimensional, combinatorially large spaces.]]

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

--

.references[
- [Skip to multi-fidelity active learning](#mfal)
]

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
![:scale 2.5%](../assets/images/slides/tetris/unique_0.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_1.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_2.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_3.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_4.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_5.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_6.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_7.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_8.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_9.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_10.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_11.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_12.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_13.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_14.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_15.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_16.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_17.png)

![:scale 2.5%](../assets/images/slides/tetris/unique_18.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_19.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_20.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_21.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_22.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_23.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_24.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_25.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_26.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_27.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_28.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_29.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_30.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_31.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_32.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_33.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_34.png)
![:scale 2.5%](../assets/images/slides/tetris/unique_35.png)
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

.center[![:scale 20%](../assets/images/slides/gflownet/reward_landscape.png)]
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

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_0.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_1.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_2.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_3.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_4.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_5.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_6.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_7.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_8.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_9.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_10.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_11.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_12.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_13.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_14.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_15.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_16.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_17.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_18.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_19.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_20.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_21.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_22.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_23.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_24.png)]]

---

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_24.png)]]

.right-column[
<br><br>
.conclusion[The decomposition of the sampling process into meaningful steps yields patterns that may be correlated with the reward function and facilitates learning complex distributions.]
]

---

## 3. Deep learning policy

.context35[GFlowNets learn a sampling policy $\pi\_{\theta}(x)$ proportional to the reward $R(x)$.]

--

.left-column[
.center[![:scale 90%](../assets/images/slides/tetris/flows.png)]
]

---

count: false

## 3. Deep learning policy

.context35[GFlowNets learn a sampling policy $\pi\_{\theta}(x)$ proportional to the reward $R(x)$.]

.left-column[
.center[![:scale 90%](../assets/images/slides/tetris/flows_math.png)]
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
Bengio et al. [Flow network based generative models for non-iterative diverse candidate generation](https://arxiv.org/abs/2106.04399), NeurIPS, 2021. (_not_ co-authored)
]

--

.right-column[
.conclusion[GFlowNets can be trained with deep learning methods to learn a sampling policy $\pi\_{\theta}$ proportional to a reward $R(x)$.]
]

---

##  GFlowNets review paper

A review of the potential of GFlowNets for AI-driven scientific discoveries.

.center[![:scale 60%](../assets/images/slides/drugs/gfn_molecules.png)]

.references[
Jain et al. [GFlowNets for AI-Driven Scientific Discovery](https://pubs.rsc.org/en/content/articlelanding/2023/dd/d3dd00002h). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

## GFlowNet Python package

Open sourced GFlowNet package, together with Mila collaborators: Nikita Saxena, Alexandra Volokhova, Michał Koziarski, Divya Sharma, Pierre Luc Carrier, Victor Schmidt, Joseph Viviano.

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

---

count: false

name: mfal
class: title, middle

## Multi-fidelity active learning

Nikita Saxena, Moksh Jain, Cheng-Hao Liu, Yoshua Bengio

.smaller[[Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). Transactions on Machine Learning Research (TMLR). 2024.]

.center[![:scale 30%](../assets/images/slides/mfal/multiple_oracles.png)]

---

## Why multi-fidelity?

.context35[We had described the scientific discovery loop as a cycle with one single oracle.]

<br><br>
.right-column[
.center[![:scale 90%](../assets/images/slides/scientific-discovery/loop_4.png)]
]

--

.left-column[
Example: "incredibly hard" Tetris problem: find arrangements of Tetris pieces that optimise an .highlight2[unknown function $f$].
- $f$: Oracle, cost per evaluation 1000 CAD.

.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_434.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_800.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_815.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_849.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_905.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
</div>
]
]

---

count: false

## Why multi-fidelity?

.context35[However, in practice, multiple oracles (models) of different fidelity and cost are available in scientific applications.]

<br><br>
.right-column[
.center[![:scale 95%](../assets/images/slides/scientific-discovery/loop_4_mf.png)]
]

.left-column[
Example: "incredibly hard" Tetris problem: find arrangements of Tetris pieces that optimise an .highlight2[unknown function $f$].
- $f$: Oracle, cost per evaluation 1000 CAD.

.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_434.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_800.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_815.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_849.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_905.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
</div>
]
]

---

count: false

## Why multi-fidelity?

.context35[However, in practice, multiple oracles (models) of different fidelity and cost are available in scientific applications.]

<br><br>
.right-column[
.center[![:scale 95%](../assets/images/slides/scientific-discovery/loop_4_mf.png)]
]

.left-column[
Example: "incredibly hard" Tetris problem: find arrangements of Tetris pieces that optimise an .highlight2[unknown function $f$].
- $f$: Oracle, cost per evaluation 1000 CAD.
- $f\_1$: Slightly inaccurate oracle, cost 100 CAD.
- $f\_2$: Noisy but informative oracle, cost 1 CAD.

.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_434.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_800.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_815.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_849.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/10x20/random_905.png" alt="Random board" style="width: 200%">
  </figure>
  </div>
</div>
]
]

---

count: false

## Why multi-fidelity?

.context[In many scientific applications we have access to multiple approximations of the objective function.]

.left-column[
For example, in .highlight1[material discovery]:

* .highlight1[Synthesis] of a material and characterisation of a property in the lab
* Molecular dynamic .highlight1[simulations] to estimate the property
* .highlight1[Machine learning] models trained to predict the property
]

.right-column[
.center[![:scale 90%](../assets/images/slides/scientific-discovery/loop_4_mf.png)]
]

--

.conclusion[However, current machine learning methods cannot efficiently leverage the availability of multiple oracles and multi-fidelity data. Especially with .highlight1[structured, large, high-dimensional search spaces].]

---

## Contribution

- An .highlight1[active learning] algorithm to leverage the availability of .highlight1[multiple oracles at different fidelities and costs].

--
- The goal is two-fold:
    1. Find high-scoring candidates
    2. Candidates must be diverse
--
- Experimental evaluation with .highlight1[biological sequences and molecules]:
    - DNA
    - Antimicrobial peptides
    - Small molecules
    - Classical multi-fidelity toy functions (Branin and Hartmann)

--

.conclusion[Likely the first multi-fidelity active learning method for biological sequences and molecules.]

---

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_13.png)]

---

## Applications
### Ongoing, planned and potential

* Discovering materials with high ionic conductivity for solid-state electrolyte batteries. 

* Discovering novel antibiotics through a lab-in-the-loop approach.

* Designing electrocatalysts for sustainability purposes.

* Designing DNA aptamers and proteins that can bind to specific targets.

* `<your application here>`

---

name: mila-visit-day-mar25
class: title, middle

![:scale 40%](../assets/images/slides/climatechange/climate_health_ai_cycle.png)

Alex Hernández-García (he/il/él)

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://institut-courtois.umontreal.ca/"><img src="../assets/images/slides/logos/institut-courtois.png" alt="Institut Courtois" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://ivado.ca/"><img src="../assets/images/slides/logos/ivado.png" alt="IVADO" style="height: 3em"></a>
]

.highlight2[We are looking for students and collaborators to work on multi-fidelity active learning!]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]
