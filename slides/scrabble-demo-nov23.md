---
layout: slides_mila_owl
title: "Live coding of a GFlowNet environment: Scrabble"
---

name: title
class: title, middle

## Live coding of a GFlowNet environment
### Scrabble

Alex Hernández-García (he/il/él)

.turquoise[Mila GFlowNet Workshop · Montreal · November th 2023]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/scrabble-demo-nov23](https://alexhernandezgarcia.github.io/slides/scrabble-demo-nov23)
]]

---

## A Scrabble-inspired GFlowNet environment

Task: to sample English words (up to 7 letters) with high "Scrabble" score.

This is hard! Number of combinations: $\sim26^7 \approx 10^{10}$. Number of English words with up to 7 letters: $\sim10^5$

.left-column[
.center[![:scale 100%](../assets/images/slides/scrabble/tiles.jpg)]
]
--
.right-column[
.center[![:scale 50%](../assets/images/slides/scrabble/scrabble_free.jpg)]
.center[![:scale 50%](../assets/images/slides/scrabble/scrabble_hope.jpg)]
]

---

## Scrabble GFlowNet ~~DAG~~ Tree

Task: to sample English words (existing in a vocabulary) with high "Scrabble" score (reward).

--

.columns-3-left[
.center[![:scale 90%](../assets/images/slides/gfn-seq-design/flownet.gif)]
]
--
.columns-3-center[
.center[
State space, $\mathcal{S}$: all possible combinations of 0-7 letters

![:scale 50%](../assets/images/slides/scrabble/scrabble_free.jpg)
![:scale 50%](../assets/images/slides/scrabble/scrabble_hope.jpg)
]
]
--
.columns-3-center[
.center[
Action space, $\mathbb{A}$: adding each letter, plus the "stop" action.

![:scale 80%](../assets/images/slides/scrabble/action_space.png)
]
]

---

## States and action representation

We can represent each letter by an index. Simplified example:

```python
tokens_dict = {"A": 1, "E": 2, "I": 3, "L": 4, "M": 5, "O": 6, "_": 0}
```

--

And a state by a list of indices. For example, the word ~~MILA~~ Mila:

```python
mila = [5, 3, 4, 1, 0, 0, 0]
```

--

We can represent actions by a single-tuple element with the index of the letter:

```python
action_a: = (1, )
action_m: = (5, )
action_o: = (6, )
action_eos: = (-1, ) # EOS: end-of-sequence (stop)
```
---

## GFlowNet implementation

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

--

* A key design principle is the simplicity to create new environments.
* Current environments: hyper-grid, hyper-cube, hyper-torus, Tetris, crystals, molecules, DNA...
* Discrete and continuous support
* Hydra-based configuration
* WandB

--

Research articles supported by this GFlowNet package:
.references[
* Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. 
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). RealML, NeurIPS 2023.
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
* Volokhova, Koziarski et al. [Towards equilibrium molecular conformation generation with GFlowNets](https://arxiv.org/abs/2310.14782). AI4Mat, NeurIPS 2023.
]

---

## The core of a GFlowNet "environment"

Since most common functionality is implemented by the base [`GFlowNetEnv`](https://github.com/alexhernandezgarcia/gflownet/blob/main/gflownet/envs/base.py), the only methods that a new discrete environment must implement are:

--

* `__init__()`: defines attributes, EOS action, source state, etc.

--
* `get_action_space()`: constructs the list of possible actions (tuples).

--
* `step(action)`: given an action, update the environment's state.

--
* `get_parents(state)`: obtains the list of parents of a given state, and their corresponding actions.

--
* `get_mask_invalid_actions_forward(state)`: determines the invalid actions from a given state.

--
* State conversions: `states2proxy()`, `states2policy()`, `state2readable()`, `readable2state()`.

---

name: title
class: title, middle

# Let's code!

---

name: title
class: title, middle

![:scale 50%](../assets/images/slides/scrabble/tiles.jpg)

Alex Hernández-García (he/il/él)

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 3em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]


