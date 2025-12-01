---
layout: slides_mila_starling
title: "Multi-fidelity active learning and generative models for science"
---

name: eccc-mila-dec25
class: title, middle

## Multi-fidelity active learning and generative models for science

Alex Hernández-García (he/il/él)

.turquoise[ECCC and Mila bilateral consultations · December 1st 2025]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
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

.context35[The climate crisis demands accelerating scientific discoveries.]

--

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_1.png)]]

.left-column-33[
<br>
The .highlight1[traditional pipeline] for scientific discovery:
* relies on .highlight1[highly specialised human expertise],
* it is .highlight1[time-consuming] and
* .highlight1[financially and computationally expensive].
]

---

count: false

## Machine learning in the loop

.context35[The traditional scientific discovery loop is too slow for certain applications.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_2.png)]]

.left-column-33[
<br>
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
]

---

count: false

## Machine learning in the loop

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

## Machine learning in the loop

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

## _Generative_ machine learning in the loop

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

## _Generative_ machine learning in the loop

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

.full-width[.conclusion[Materials and drug discovery involve finding candidates with rare properties from combinatorially or infinitely many options.]]

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

--

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

--

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

## Machine learning for scientific discoveries
### Summary of main challenges

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

&rarr; Need for .highlight2[diverse candidates].

--

.conclusion[We want to discover diverse high-scoring candidates in very large, structured spaces.]

---

## ML for scientific discoveries
### Available methods

.context35[We want to discover diverse high-scoring candidates in very large, structured spaces.]

--

.center[What methods can address these challenges?]

--

- .highlight1[Reinforcement learning] excels at optimisation in complex spaces, but tends to lack diversity.
--

- .highlight1[Traditional sampling methods (MCMC)] provide diversity (sampling), but struggle at mode mixing in high dimensions.
--

- .highlight1[Diffusion] excels at learning from data at scale and sampling in continuous spaces, but is limited at leveraging compositional structure.

--

.conclusion[Generative flow networks (GFlowNets) combine multiple advantages: **sampling as sequential decision making**.]

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

name: tea-talk-feb25
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

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]

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

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_0.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_1.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_2.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_3.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_4.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_5.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_6.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_7.png)]

---

count: false

## Our active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_8.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_9.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_10.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_11.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_12.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_13.png)]

---

## Experiments
### Baselines

.context[This may be the .highlight1[first multi-fidelity active learning algorithm tested on biological sequence design and molecular design problems]. There did not exist baselines from the literature.]

--

<br>
* .highlight1[SF-GFN]: GFlowNet with highest fidelity oracle to establish a benchmark for performance without considering the cost-accuracy trade-offs.

--
* .highlight1[Random]: Quasi-random approach where the candidates and fidelities are picked randomly and the top $(x, m)$ pairs scored by the acquisition function are queried.

--
* .highlight1[Random fid. GFN]: GFlowNet with random fidelities, to investigate the benefit of deciding the fidelity with GFlowNets.

--
* .highlight1[MF-PPO]: Replacement of MF-GFN with a reinforcement learning algorithm to _optimise_ the acquisition function.

---

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

--

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_1.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_2.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_3.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_4.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_5.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_6.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_7.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic .highlight1[ionisation potential (IP)]. Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ip.png)]

---

## DNA aptamers

- GFlowNet adds one nucleobase (`A`, `T`, `C`, `G`) at a time up to length 30. This yields a design space of size $|\mathcal{X}| = 4^{30}$. 
- The objective function is the free energy estimated by a bioinformatics tool. 
- The (simulated) lower fidelity oracle is a transformer trained with 1 million sequences.

--

.center[![:scale 50%](../assets/images/slides/mfal/dna_6.png)]

---

count: false

## Antimicrobial peptides (AMP)

- Protein sequences (20 amino acids) with variable length (max. 50).
- The oracles are 3 ML models trained with different subsets of data.

--

.center[![:scale 60%](../assets/images/slides/mfal/amp.png)]

---

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid_3.png)]

---

count: false

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid_4.png)]

---

count: false

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid_5.png)]
