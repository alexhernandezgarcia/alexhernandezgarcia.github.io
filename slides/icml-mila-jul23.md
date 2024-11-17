---
layout: slides_mila_owl
title: "Generative and predictive models for scientific discovery with machine learning"
---

name: title
class: title, middle

### Generative and predictive models for scientific discovery with machine learning

Alex Hernández-García (he/il/él)

.turquoise[ICML at Mila · July 24th 2023]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/icml-mila-23](https://alexhernandezgarcia.github.io/slides/icml-mila-23)
]]

---

## A transversal summary of different but related papers

* [A theory of continuous generative flow networks](https://icml.cc/virtual/2023/poster/25220) .smaller[(Salem, Tristan, Pablo, Dinghuai, Sasha, Léna, Yoshua and Kolya)]
* [Multi-Objective GFlowNets](https://icml.cc/virtual/2023/poster/23924) .smaller[(Moksh, Sharath, Jarrid, Yoshua, Emmanuel et al.)]
* [FAENet: Frame Averaging Equivariant GNN for Materials Modeling](https://icml.cc/virtual/2023/poster/23593) .smaller[(Alexandre, Victor, Yoshua, David et al.)]

<br><br><br>
.conclusion[Common thread: Generative and predictive models for scientific discovery with machine learning]

---

name: title
class: title, middle

## Motivation: Why scientific discovery?
### Part 1

.center[![:scale 30%](../assets/images/slides/climatechange/demo.jpg)]

---

## Why scientific discovery?

.context[Climate change is a major challenge for humanity.]

.left-column-66[.center[
<figure>
	<img src="../assets/images/slides/climatechange/anthropogenic_temperature_rise.png" alt="Historical global average temperature and the influence of modern humans" style="width: 90%">
  <figcaption>.smaller[Modelled and observed global average temperatures in the last 2 millenia (source graphic: <a href="https://www.theguardian.com/science/2021/aug/09/humans-have-caused-unprecedented-and-irreversible-change-to-climate-scientists-warn">The Guardian</a>.)]</figcaption>
</figure>
]]

.right-column-33[
Consequences:
* Melting glaciers and polar ice
* Sea level rise
* Heatwaves
* Floods
* Droughts
* Wildfires
* ...
]

--

.conclusion[But [global warming will stop](https://www.carbonbrief.org/explainer-will-global-warming-stop-as-soon-as-net-zero-emissions-are-reached/) if we stop GHG emissions!]

???

* Flash floods kill **5,000** people per year.
* Sea levels are expected to rise by **2 metres** by the end of the century
* Rising sea levels could disrupt the lives of **1 billion people** by the end of 2050.
* As much as **40% of the Amazon** forest is at risk of becoming a savanna.
* In 2015, forest fires claimed roughly **980 000 $km^2$** of the world’s forest.
* Forest fires emmitted **~1.8 Gt of CO2** in 2019.

---

## Why scientific discovery?

.context["The time for action is now"]

> "Limiting global warming will require major transitions in the energy sector. This will involve a substantial reduction in fossil fuel use, widespread electrification, .highlight1[improved energy efficiency, and use of alternative fuels (such as hydrogen)]." .cite[IPCC Sixth Assessment Report, 2022]

> "Net-zero CO2 emissions from the industrial sector are challenging but possible. Reducing industry emissions will entail coordinated action throughout value chains to promote all mitigation options, including demand management, .highlight1[energy and materials efficiency, circular material flows], as well as abatement technologies and transformational changes in production processes." .cite[IPCC Sixth Assessment Report, 2022]

--

<br>

.conclusion[Mitigation of the climate crisis requires transformational changes in the energy and materials efficiency.]

---

## Traditional scientific discovery loop

.context35[The climate crisis demands accelerating scientific discoveries.]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

.left-column-33[
The .highlight1[traditional pipeline] for scientific discovery (paradigms 1-3):
* relies on .highlight1[highly specialised human expertise],
* it is .highlight1[time-consuming] and
* .highlight1[financially and computationally expensive].
]

---

count: false

## Machine learning in the loop

.context35[The traditional scientific discovery loop is too slow.]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries
]

---

count: false

## Machine learning in the loop

.context35[The traditional scientific discovery loop is too slow.]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries

.conclusion[A machine learning model replacing real-world experiments can _only_ provide _linear_ gains.]

.conclusion[Not enough if the search space is very large ($10^{180}$ stable materials)]
]

---

count: false

## _Generative_ machine learning in the loop

.context[Can we do better than _linear_?<br>An agent in the loop.]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]
]

---

count: false

## _Generative_ machine learning in the loop

.context[Can we do better than _linear_?<br>An agent in the loop.]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop could (ideally):
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[A successful AL pipeline with an ML agent in the loop can provide _exponential_ gains.]
]

---

count: false

## _Generative_ machine learning in the loop

.context[GFlowNet as the agent.]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_hl-gfn.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop could (ideally):
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[A successful AL pipeline with an ML agent in the loop can provide _exponential_ gains.]
]

.references[
Jain et al. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

## Machine learning for scientific discovery
### Challenges and limitations of existing methods

.highlight1[Challenge]: very large search spaces.

--

&rarr; Need for .highlight2[efficient modelling, search and generalisation] of underlying structure.

--

.highlight1[Challenge]: underspecification of objective functions or metrics.

--

&rarr; Need for .highlight2[diverse] candidates.

--

.highlight1[Limitation]: Reinforcement learning and MCMC methods are good at optimisation but poor at mode mixing.

--

&rarr; Need for .highlight2[_multi-modal_ optimisation].

---

name: title
class: title, middle

## A flash introduction to GFlowNets
### Part 2

.center[![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)]

---

## GFlowNet in a nutshell

<br>
Given a reward or objective function $R(x)$, GFlowNet can be seen a generative model trained to sample objects $x \in \cal X$ according to .highlight1[a sampling policy $\pi(x)$ proportional to the reward $R(x)$]: $\pi(x) \propto R(x)$

--

&rarr; Sampling proportionally to the reward function induces .highlight1[multi-modal search and diversity].

--

.left-column[
The policy $\pi_{\theta}(x)$ is modelled by a deep neural network, parameterised by $\theta$, thus providing .highlight1[amortised inference].

&rarr; Amortised inference can be thought of as _exploration with memory_, which induces .highlight1[systematic generalisation].
]

.right-column[
.center[![:scale 65%](../assets/images/slides/gflownet/mode_generalization.png)]
]

---

## GFlowNet in a nutshell

* Objects $x \in \cal X$ are constructed through a sequence of steps $\tau$ from an action space $\cal A$.
* At each step of the trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots \rightarrow s_f)$, we get a partially constructed object $s$ in state space $\cal S$.
* This induces a directed acyclic graph (DAG) $\mathcal{G}=(\mathcal{S},\mathcal{A})$, with all possible constructions in the domain.

.center[![:scale 50%](../assets/images/slides/gflownet/flownet.png)]

--

.conclusion[This terminology is reminiscent of reinforcement learning.]

---

## An intuitive toy example

Task: find arrangements of Tetris pieces on the board that minimise the empty space.

.left-column[
.center[![:scale 20%](../assets/images/slides/tetris/board_empty.png)]
]

.right-column[
![:scale 15%](../assets/images/slides/tetris/piece_J.png) ![:scale 15%](../assets/images/slides/tetris/piece_L.png) ![:scale 15%](../assets/images/slides/tetris/piece_O.png)
]

--

.conclusion[This task resembles designing DNA sequences or molecules or materials via fragments, with the objective of optimising certain properties.]

---

## An intuitive toy example

Task: find arrangements of Tetris pieces on the board that minimise the empty space.

.columns-3-left[.center[
  <figure>
    <img src="../assets/images/slides/tetris/state_space.png" alt="State space" style="width: 100%">
    <figcaption>State space $\cal S$</figcaption>
  </figure>
]]

.columns-3-center[.center[
  <figure>
    <img src="../assets/images/slides/tetris/action_space.png" alt="Action space" style="width: 90%">
    <figcaption>Action space $\cal A$</figcaption>
  </figure>
]]

.columns-3-right[.center[
<div style="display: flex">
  <div style="flex: 30%;">
  <figure>
      <img src="../assets/images/slides/tetris/s0.png" alt="s0" style="width: 100%">
    <figcaption>$s_0$</figcaption>
  </figure>
  </div>
  <div style="flex: 0.5%; padding: 40pt 0">
  $\rightarrow$
  </div>
  <div style="flex: 30%;">
  <figure>
      <img src="../assets/images/slides/tetris/s1.png" alt="s1" style="width: 100%">
    <figcaption>$s_1$</figcaption>
  </figure>
  </div>
  <div style="flex: 0.5%; padding: 40pt 0">
  $\rightarrow$
  </div>
  <div style="flex: 30%;">
  <figure>
      <img src="../assets/images/slides/tetris/s2.png" alt="s2" style="width: 100%">
    <figcaption>$s_2$</figcaption>
  </figure>
  </div>
</div>
]]

---

## An intuitive toy example

Task: find arrangements of Tetris pieces on the board that minimise the empty space.

.center[
<div style="display: flex">
  <div style="flex: 25%;">
  <figure>
      <img src="../assets/images/slides/tetris/board_empty.png" alt="Score 0/12" style="width: 30%">
    <figcaption>Score: 0/12</figcaption>
  </figure>
  </div>
  <div style="flex: 25%;">
  <figure>
      <img src="../assets/images/slides/tetris/board_score_4.png" alt="Score 4/12" style="width: 30%">
    <figcaption>Score: 4/12</figcaption>
  </figure>
  </div>
  <div style="flex: 25%;">
  <figure>
      <img src="../assets/images/slides/tetris/board_score_8.png" alt="Score 8/12" style="width: 30%">
    <figcaption>Score: 8/12</figcaption>
  </figure>
  </div>
  <div style="flex: 25%;">
  <figure>
      <img src="../assets/images/slides/tetris/board_score_12.png" alt="Score 12/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
</div>
]

---

## An intuitive toy example

Task: find arrangements of Tetris pieces on the board that minimise the empty space.

.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode1.png" alt="Score 0/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode2.png" alt="Score 4/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode3.png" alt="Score 8/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode4.png" alt="Score 12/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode5.png" alt="Score 12/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
</div>
]

.conclusion[The _reward function_ of this task has multiple modes. With a larger board and more pieces, the number of combinations and modes grow exponentially and the task of efficiently finding them is non-trivial for machine learning models.]

---

name: title
class: title, middle

## A theory of continuous generative flow networks

.references[
Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. 
]

---

## Continuous GFlowNets

We have generalised the theory and implementation of GFlowNets to encompass both discrete and continuous or hybrid state spaces.

.center[
![:scale 30%](../assets/images/slides/gflownet/kde_reward_molecule.png)
![:scale 30%](../assets/images/slides/gflownet/kde_gfn_molecule.png)]

.conclusion[Continuous GFlowNets are allowing us to progress in our efforts to generate molecular conformations and crystal structure to accelerate scientific discoveries.]

---

name: title
class: title, middle

## Multi-Objective GFlowNets

.references[
Jain et al. [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765), ICML, 2023. 
]

---

## Multi-objective GFlowNets (MOGFN)

We have extended GFlowNets to handle multi-objective optimisation and not only cover the Pareto front but also sample diverse objects at each pointin the Pareto front.

.center[
![:scale 30%](../assets/images/slides/gflownet/mogfn_pareto_front.png)
![:scale 30%](../assets/images/slides/gflownet/mogfn_al.png)]

.conclusion[Multi-objective GFlowNets allow us to generate diverse candidates with high scores of multiple properties, reducing the impact of the critical problem of underspecification in scientific discovery.]

---

name: title
class: title, middle

## FAENet: Frame Averaging Equivariant GNN for Materials Modeling

.references[
Duval, Schmidt et al. [FAENet: Frame Averaging Equivariant GNN for Materials Modeling](https://arxiv.org/abs/2305.05577), ICML, 2023. 
]

---

## FAENet

We have presented a flexible framework for data-driven equivariance of GNNs and an architecture (FAENet) that is simple, fast at inference and expressive. 

.center[
![:scale 60%](../assets/images/slides/ocp/frame_averaging.png)
]

.conclusion[FAENet will allow us to efficiently and effectively train GFlowNets in a multi-fidelity active learning pipeline.]

---

## FAENet

We have presented a flexible framework for data-driven equivariance of GNNs and an architecture (FAENet) that is simple, fast at inference and expressive. 

.center[
![:scale 50%](../assets/images/slides/ocp/faenet_is2re_pareto.png)
]

.conclusion[FAENet will allow us to efficiently and effectively train GFlowNets in a multi-fidelity active learning pipeline.]

---

name: title
class: title, middle

## Summary and conclusions

.center[![:scale 30%](../assets/images/slides/misc/conclusion.png)]

---

## Summary and conclusions

* Tackling the most pressing problems for humanity, such as the climate crisis and the threat of global pandemics, requires .highlight1[accelerating the pace of scientific discovery].
* AI-driven scientific discovery demands learning methods that can .highlight1[efficiently model and discover diverse candidates in very large, multi-modal search spaces].
* .highlight1[GFlowNet] is a suitable method for diverse sampling.
* .highlight1[Continuous GFlowNets] enable search in continuous spaces.
* .highlight1[Multi-objective GFlowNets] enable multi-objective optimisation.
* .highlight1[FAENet] provides efficient and effective modelling of materials to train GFlowNets.

.references[
* Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. 
* Jain et al. [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765), ICML, 2023. 
* Duval, Schmidt et al. [FAENet: Frame Averaging Equivariant GNN for Materials Modeling](https://arxiv.org/abs/2305.05577), ICML, 2023. 
]

--

.highlight2[Open source code]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

---

## Acknowledgements

.left-column[
* Salem
* Tristan
* Sasha
* Kolya
* Pablo
* Moksh
* Sharath
* Emmanuel
* Alexandre
* Victor
]

.right-column[
* Yoshua
* David
* Santiago
* IVADO
* CIFAR
* ...
]


---

name: title
class: title, middle

## Thanks! Questions? 

![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)

Alex Hernández-García (he/il/él)

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 3em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/icml-mila-23](https://alexhernandezgarcia.github.io/slides/icml-mila-23)
]]


