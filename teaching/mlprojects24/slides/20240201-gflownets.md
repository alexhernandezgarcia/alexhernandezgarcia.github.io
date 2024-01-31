---
layout: slides_finch
title: IFT 3710/6759 - GFlowNets
---

name: 20240201-gflownets
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

#### .gray224[1 février 2024 - Session 8]
### .gray224[Modèles génératifs pour la découverte scientifique]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/teaching/mlprojects24/slides/{{ name }}](https://alexhernandezgarcia.github.io/teaching/mlprojects24/slides/{{ name }})
]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../../../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

---

## Format of the class and objective

The first part of this class will be a lecture, the second part will be a live demo.

The .highlight1[goal] is that by the end of the class:

* You understand why generative models can have an impact on scientific discoveries and engineering design.
* You acquire an overview of the challenges for traditional generative models in practical applications.
* You understand how generative flow networks (GFlowNets) can tackle some of these challenges.
* You understand the fundamental intuitions and details of GFlowNets.
* You are able to start training and testing GFlowNets using existing codebases.

---

## Why generative machine learning for science?
### The potential of scientific discoveries

> "Limiting global warming will require major transitions in the energy sector. This will involve a substantial reduction in fossil fuel use, widespread electrification, .highlight1[improved energy efficiency, and use of alternative fuels (such as hydrogen)]." .cite[IPCC Sixth Assessment Report, 2022]

> "Net-zero CO2 emissions from the industrial sector are challenging but possible. Reducing industry emissions will entail coordinated action throughout value chains to promote all mitigation options, including demand management, .highlight1[energy and materials efficiency, circular material flows], as well as abatement technologies and transformational changes in production processes." .cite[IPCC Sixth Assessment Report, 2022]

--

<br>

.conclusion[Mitigation of the climate crisis requires transformational changes in the energy and materials efficiency.]

---

## Why generative machine learning for science?
### The potential of discovering new materials

* Improving material efficiency can reduce 0.93 ($\pm$ 0.23) GtCO₂-eq per year.
* Fuel switching can reduce 2.1 ($\pm$ 0.52) GtCO₂-eq per year, only in the industry sector. 
* Carbon capture and storage can reduce 0.54 ($\pm$ 0.27) GtCO₂-eq per year in the energy sector.

.right[.cite[IPCC Sixth Assessment Report (2022)]]

.smaller[.footnote[† Global anthropogenic emissions in 2019 were estimated in 59 ($\pm$ 6.6) GtCO₂-eq. The budget from 2020 to limit warming to 1.5°C is estimated in 510 ($\pm$ 180) GtCO₂-eq.]]

---

count: false

## Why generative machine learning for science?
### The potential of discovering new materials

* Improving material efficiency can reduce 0.93 ($\pm$ 0.23) GtCO₂-eq per year.
* Fuel switching can reduce 2.1 ($\pm$ 0.52) GtCO₂-eq per year, only in the industry sector. 
* Carbon capture and storage can reduce 0.54 ($\pm$ 0.27) GtCO₂-eq per year in the energy sector.

.right[.cite[IPCC Sixth Assessment Report (2022)]]

What are better, new materials needed for?

* Electrocatalysts for fuel cells, hydrogen storage, industrial chemical reactions, carbon capture, etc.
* Solid electrolytes for batteries.
* Thin film materials for photovoltaics.
* ...

.smaller[.footnote[† Global anthropogenic emissions in 2019 were estimated in 59 ($\pm$ 6.6) GtCO₂-eq. The budget from 2020 to limit warming to 1.5°C is estimated in 510 ($\pm$ 180) GtCO₂-eq.]]

---

## Why generative AI for science?
### Scientific discoveries in history

.context35[Material discovery is a key ingredient for climate change mitigation.]

--

Many notable scientific discoveries have occurred due to .highlight1[serendipity] or .highlight1[by accident]:

--

* **Dynamite** (Alfred Nobel, 1867)
* **X-rays** (Wilhelm C. Röntgen, 1895)
* **Radioactivity** (Henri Becquerel and Marie Skłodowska–Curie, 1896)
* **Penicillin** (Alexander Fleming, 1929)
* **Cyanoacrylate (superglue)** (Harry Coover, 1942)
* **Lysergic acid diethylamide (LSD)** (Albert Hofmann, 1943)

--

<br>
.conclusion[Clearly, we should not rely on serendipity to fight climate change.]

???

Joke experience with some of them, like penicillin and superglue.

---

count: false

## Why generative machine learning for science?
### Scientific discoveries in history

.context35[Material discovery is a key ingredient for climate change mitigation.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_0.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
* Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Example of concrete: most prevalent human-made material on Earth, and the most consumed commodity after water. The annual consumption of concrete in the world has reached 35 billion tons, which is twice as much as that of all other building materials combined.

---

count: false

## Why generative machine learning for science?
### Scientific discoveries in history

.context35[Material discovery is a key ingredient for climate change mitigation.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_1.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
* Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: The properties and performance of concrete can be tailored to meet design requirements by varying the type and quantity of the mixture constituents (e.g., cement, water, aggregate, and admixtures). Traditional approaches for designing concrete mixtures often rely on trial-and-error, iterative proportioning, processing, and characterization until the target properties are achieved.

---

count: false

## Why generative machine learning for science?
### Scientific discoveries in history

.context35[Material discovery is a key ingredient for climate change mitigation.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_2.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
* Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: it is possible to optimize the compressive strength of concrete mixtures by adjusting the water/cement ratio, total aggregate/cement ratio, and coarse aggregate/total aggregate ratio6. Yet the practical application of this iterative refinement approach is limited by the exponential increase in the number of specimens and experiments when complex concrete mixtures are studied and several compositional parameters are simultaneously considered as combinatorial variables. As a result, materials development in concrete science involves time-consuming validation/development cycles from laboratory trials to field applications. Efforts to accelerate knowledge acquisition and materials design in concrete science are thus of paramount importance.

Beginning in the 1980s, the development of microstructural models of cement hydration has enabled a fundamental understanding of microstructure–property relationships in concrete7, which has marked the second paradigm. By applying basic laws of kinetics, thermodynamics, and mechanics, and providing analytical solutions to cement hydration. Successful demonstrations include the three-dimensional cement hydration and microstructure development model (CEMHYD3D)8,9; the hydration, morphology, and structural development model (HYMOSTRUC)10; the integrated particle kinetics model11; and the microstructural modeling platform (μic)

---

count: false

## Why generative machine learning for science?
### Scientific discoveries in history

.context35[Material discovery is a key ingredient for climate change mitigation.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_3.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
* Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: However, the complex nature of cement hydration makes it challenging to develop accurate and generalizable models, and these modeling approaches, to varying degrees, rely on thermochemical, physical, and structural data that must be obtained either from accurate experimental observations or from calculations at the atomistic and molecular scales.

In this context, the use of density-functional theory (DFT) and classical molecular dynamics (MD) simulations has been explored in concrete science since the 2000s owing to the ever-growing computing power16. This has given rise to the third paradigm (computational science; Fig. 1), where the first-principle models have been integrated and employed to further describe cementitious materials properties and improve understanding of cement hydration. Related simulation efforts have focused primarily on cementitious phases such as the calcium silicate hydrate (C-S-H) gel, the essential reaction product of cement hydration.

---

count: false

## Why generative machine learning for science?
### Scientific discoveries in history

.context35[Material discovery is a key ingredient for climate change mitigation.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_4.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
* Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: However, these computational techniques require considerable computational resources and thus come with significant challenges, such as their limited time scales and the relatively small number of atoms in a simulated system. In addition, it may be difficult to validate these simulations with experiments, given the small time and length scales and high-fidelity measurements required.

By leveraging existing datasets with data-driven models, ML can automatically learn implicit patterns and extract valuable information while accounting for the inherent complexity of concrete mixtures and their properties.

---

## Traditional scientific discovery loop

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

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries
]

---

count: false

## Machine learning in the loop

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

.context[Can we do better than _linear_?<br>An agent in the loop]

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

.context[Can we do better than _linear_?<br>An agent in the loop]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[A successful AL pipeline with an ML agent in the loop can provide _exponential_ gains.]
]

.references[
Jain et al.. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

## AI in the scientific discovery loop
### A new generative method: **GFlowNets**

.context35[AI can boost multiple components of the scientific dicovery pipeline.]

<br>
.center[![:scale 50%](../assets/images/slides/materials/activelearning_agent.png)]

.references[
Jain et al.. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

count: false

## AI in the scientific discovery loop
### A new generative method: **GFlowNets**

.context35[AI can boost multiple components of the scientific dicovery pipeline.]

<br>
.center[![:scale 50%](../assets/images/slides/materials/activelearning_hl-gfn.png)]

.references[
Jain et al.. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

## Machine learning for scientific discovery
### Challenges and limitations of existing methods

.highlight1[Challenge]: very large search spaces.

--

&rarr; Need for .highlight2[efficient search and generalisation] of underlying structure.

--

.highlight1[Challenge]: underspecification of objective functions or metrics.

--

&rarr; Need for .highlight2[diverse] candidates.

--

.highlight1[Limitation]: Reinforcement learning and MCMC methods are good at optimisation but bad at mode mixing.

--

&rarr; Need for .highlight2[multi-modal optimisation].

---

## An intuitive toy task

.context[Scientific discovery involves exploring in large, multi-modal search spaces.]

<br>
Task: find arrangements of Tetris pieces on the board that minimise the empty space.

.left-column[
.center[![:scale 20%](../assets/images/slides/tetris/board_empty.png)]
]

.right-column[
![:scale 15%](../assets/images/slides/tetris/piece_J.png) ![:scale 15%](../assets/images/slides/tetris/piece_L.png) ![:scale 15%](../assets/images/slides/tetris/piece_O.png)
]

--

.conclusion[This task resembles designing DNA sequences or molecules or materials via fragments, to optimise certain properties.]

---

## An intuitive toy task

.context[Scientific discovery involves exploring in large, multi-modal search spaces.]

<br>
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

## An intuitive toy task

.context[Scientific discovery involves exploring in large, multi-modal search spaces.]

<br>
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

## GFlowNet in a nutshell

.context[Existing ML methods struggle with large, multi-modal search spaces.]

<br>
Given a reward or objective function $R(x)$, GFlowNet can be seen a generative model trained to sample objects $x \in \cal X$ according to .highlight1[a sampling policy $\pi(x)$ proportional to the reward $R(x)$]: $\pi(x) \propto R(x)$


&rarr; Sampling proportionally to the reward function induces .highlight1[multi-modal search and diversity].

--

.left-column[
The policy $\pi_{\theta}(x)$ is modelled by a deep neural network, parameterised by $\theta$, thus providing .highlight1[amortised inference].

&rarr; Amortised inference can be thought of as _exploration with memory_, which induces .highlight1[systematic generalisation].
]

--

.right-column[
.center[![:scale 65%](../assets/images/slides/gflownet/mode_generalization.png)]
]

---

## GFlowNet in a nutshell

* Objects $x \in \cal X$ are constructed through a sequence of steps $\tau$ from an action space $\cal A$.
* At each step of the trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots \rightarrow s_f)$, we get a partially constructed object $s$ in state space $\cal S$.
* This induces a directed acyclic graph (DAG) $\mathcal{G}=(\mathcal{S},\mathcal{A})$, with all possible constructions in the domain.

.left-column[.center[![:scale 80%](../assets/images/slides/gflownet/flownet.png)]]

.right-column[.center[
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

## GFlowNet in a nutshell

.context[GFlowNet induces a DAG $\mathcal{G}=(\mathcal{S},\mathcal{A})$, with all possible constructions in the domain.]

<br>

.left-column[.center[
  <figure>
    <img src="../assets/images/slides/tetris/state_space.png" alt="State space" style="width: 80%">
    <figcaption>State space $\cal S$</figcaption>
  </figure>
]]

.right-column[.center[
  <figure>
    <img src="../assets/images/slides/tetris/action_space.png" alt="Action space" style="width: 60%">
    <figcaption>Action space $\cal A$</figcaption>
  </figure>
]]

.conclusion[This terminology is reminiscent of reinforcement learning.]

---

## Principle of conservation as a training objective

.right-column-33[.center[![:scale 100%](../assets/images/slides/gfn-seq-design/flownet.gif)]]

.left-column-66[
**Consistent Flow**:  Flow $F$ satisfies the _flow consistency equation_
$$\sum\_{s' \in \text{Parent}(s)} F\_\theta(s' \rightarrow s) = \sum\_{s'' \in \text{Child}(s)} F\_\theta(s \rightarrow s')$$

**Theorem**: For a consistent flow $F$ with terminal flow set as the reward $F(x\rightarrow s_f)=R(x)$, the forward policy samples $x$ proportionally to $R(x)$.
$$\pi(x)\propto R(x)$$

**Corollary**: The flow at $s_0$, $F(s_0)$ is the partition function $Z$! 
]

.references[
Bengio et al. [Flow network based generative models for non-iterative diverse candidate generation](https://arxiv.org/abs/2106.04399), NeurIPS, 2021. 
]

---

## Principle of conservation as a training objective

<p>
$$\sum\_{s' \in \text{Parent}(s)} F\_\theta(s' \rightarrow s) = \sum\_{s'' \in \text{Child}(s)} F\_\theta(s \rightarrow s')$$
</p>
* **Flow Matching Objective**: $$\mathcal{L}\_{FM}(s; \theta) = \left(\log \frac{\sum\_{s'\in \text{Parent}(s)} F\_\theta(s'{\rightarrow} s)}{\sum\_{s'' \in \text{Child}(s)}F\_\theta(s{\rightarrow} s'')}\right)^2$$
* **Trajectory Balance**: $$\mathcal{L}\_{TB} (\tau;\theta) = \left(\log \frac{Z\_\theta \prod\_{s{\rightarrow} s' \in \tau}P\_{F\_\theta}(s'|s)}{R(x)\prod\_{s\rightarrow s' \in \tau} P\_{B\_\theta}(s|s') }\right)^2$$

---

## Results
### Tetris GFlowNets

.context[If the model is sufficiently trained, the sampling policy $\pi(x)$ should be proportional to the reward $R(x)$: $\pi(x) \propto R(x)$]

<br>

.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode1.png" alt="Score 0/12" style="width: 30%">
    <figcaption>$\pi(x) = 8.12~\%$</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode2.png" alt="Score 4/12" style="width: 30%">
    <figcaption>$\pi(x) = 8.96~\%$</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode3.png" alt="Score 8/12" style="width: 30%">
    <figcaption>$\pi(x) = 8.61~\%$</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode4.png" alt="Score 12/12" style="width: 30%">
    <figcaption>$\pi(x) = 9.16~\%$</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode5.png" alt="Score 12/12" style="width: 30%">
    <figcaption>$\pi(x) = 8.39~\%$</figcaption>
  </figure>
  </div>
</div>
]

After training, GFlowNet samples a mode with probability 43.24 %.

.footnote[The energy function $\varepsilon(x)$ is the fraction of the board occupied by pieces and the reward function is $R(X) = \varepsilon(x)^4$ to disproportionally favour the discovery of modes.]

---

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_bgwhite.png)]

---

## DNA aptamers and antimicrobial peptides (AMP)

.highlight1[DNA]: GFlowNet adds one nucleobase (`A`, `T`, `C`, `G`) at a time up to length 30. This yields a design space of size $|\mathcal{X}| = 4^{30}$. The objective function is the free energy estimated by NUPACK. The (simulated) lower fidelity oracle is a transformer trained with 1 million sequences.

.highlight1[AMP]: Protein sequences with variable length (max. 50). The oracles are 3 ML models trained with different subsets of data.

.left-column[.center[
  <figure>
    <img src="../assets/images/slides/mfal/dna.png" alt="DNA" style="width: 90%">
    <figcaption>DNA task</figcaption>
  </figure>
]]

.right-column[.center[
  <figure>
    <img src="../assets/images/slides/mfal/amp.png" alt="AMP" style="width: 90%">
    <figcaption>AMP task</figcaption>
  </figure>
]]

---

## Small molecules

More realistic experiments, with oracles that correlate with experimental results as approximations of the scoring function. The costs reflect the computational demands of each oracle (1, 3, 7).

.left-column[.center[
  <figure>
    <img src="../assets/images/slides/mfal/molecules_ip.png" alt="Ionisation potential" style="width: 100%">
    <figcaption>Ionisation potential task</figcaption>
  </figure>
]]

.right-column[.center[
  <figure>
    <img src="../assets/images/slides/mfal/molecules_ea.png" alt="Electron affinity" style="width: 100%">
    <figcaption>Electron affinity task</figcaption>
  </figure>
]]

---

##  GFlowNet extensions and applications
### Multi-objective GFlowNets

We have extended GFlowNets to handle multi-objective optimisation and not only cover the Pareto front but also sample diverse objects at each pointin the Pareto front.

.center[
![:scale 30%](../assets/images/slides/gflownet/mogfn_pareto_front.png)
![:scale 30%](../assets/images/slides/gflownet/mogfn_al.png)]

.references[
Jain et al. [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765), arXiv 2210.12765, 2022. 
]

---

##  GFlowNet extensions and applications
### Molecular conformation

We have recently generalised the theory and implementation of GFlowNets to encompass both discrete and continuous or hybrid state spaces. 

.center[
![:scale 30%](../assets/images/slides/gflownet/kde_reward_molecule.png)
![:scale 30%](../assets/images/slides/gflownet/kde_gfn_molecule.png)]

.references[
Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), arXiv 2301.12594, 2023. 
]

---

##  GFlowNet extensions and applications
### Crystal-GFlowNet for crystal structure generation

Inspiration from theoretical crystallography to sample crystals with desirable properties and constraints.

.center[
![:scale 55%](../assets/images/slides/crystals/distributions_fe.png)
]

.references[
Mila AI4Science, Hernandez-Garcia et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925), arXiv 2310.04925, 2023. 
]

---

name: title
class: title, middle

## Summary and conclusions

.center[![:scale 30%](../assets/images/slides/misc/conclusion.png)]

---

## Summary and conclusions

* There is a mismatch between the magnitude of the climate crisis and the public's concern about it.
* We have used AI to generate .highlight1[personalised visualisations of extreme climate events].
* The climate crisis requires .highlight1[accelerating the pace of scientific discovery].
* AI-driven scientific demands .highlight1[efficiently exploring huge, highly-structured, high-dimensional spaces].
* .highlight1[GFlowNet] is a new generative method designed to tackle these challenges.
* GFlowNet has been proven successful in practically relevant and challenging tasks, such as .highlight1[biological sequence design], .highlight1[molecular conformation], .highlight1[crystal structure generation], etc.
* Multi-fidelity active learning for scientific discovery tackles "real-world" problems close the industry's!

.references[
* Schmidt et al. [ClimateGAN: Raising Climate Change Awareness by Generating Images of Floods](https://arxiv.org/abs/2110.02871v1), ICLR 2022.
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). arXiv 2306.11715, 2023.
* Jain et al.. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
]

--

.highlight2[Open source code]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

---

## Deep learning
### Definitions and terminology

We can consider .highlight1[deep learning] a class or family of machine learning methods that compute hierarchical .highlight1[representations] of the inputs. That is, the input data is transformed into new representations, which are the inputs to new representations, and so on. .highlight1[Deep learning is about learning representations].

<figure style="text-align: center">
	<img src="../../../assets/images/teaching/mlprojects/dl/deep_neural_network.png" alt="A conceptualisation of a neural network" style="width: 55%">
  <figcaption style="text-align: center; font-size: small">Adapted from https://cs231n.github.io</figcaption>
</figure>

???

* Mention the name of ICLR

---

count: false

## Deep learning
### Definitions and terminology

The simplest possible deep learning algorithm is a .highlight1[multi-layer] perceptron (MLP) .cite[(Rosenblatt, 1958)], a network of perceptrons.

The notion of a _network_ and the inspiration by biological _neurons_ yields the term .highlight1[artificial neural networks]. Today, this term is used to refer to both simple MLPs or generally more complex deep learning algorithms.

<figure style="text-align: center">
	<img src="../../../assets/images/teaching/mlprojects/dl/deep_neural_network.png" alt="A conceptualisation of a neural network" style="width: 55%">
  <figcaption style="text-align: center; font-size: small">Adapted from https://cs231n.github.io</figcaption>
</figure>

.references[Rosenblatt, F (1958). The Perceptron: a probabilistic model for information storage and organization in the brain. Psychological Review.]

---

## Deep learning
### Why deep?

The universal approximation theorem tells us that a single-layer MLP can approximate anything to arbitrary precision. Why do we need _depth_?

--

Though seemingly simple, the answer to this question is multifaceted. Some insights:

* Deeper MLPs can achieve the same precision with exponentially fewer neurons. 
* Depth allows for compositionality, a key aspect of human cognition.

---

## Deep learning
### Re-adjusting the promises

> "_\[.highlight1[Hand designing] good feature extractors, .highlight1[engineering skill] and .highlight1[domain expertise]\] **can all be avoided** if good features can be learned automatically using a general-purpose learning procedure. .highlight1[This is the key advantage of deep learning]._"
.right[.cite[LeCun, Bengio and Hinton. (2015)]]

.references[
LeCun, Bengio and Hinton (2015). Deep learning. Nature
]

--

Deep learning is an incredibly powerful tool, but:

* It does not provide a "general-purpose learning procedure", or so do other ML algorithms.
* Hand-design, engineering skill and domain expertise are typically required for successful deep learning applications.

---

## Deep learning
### The actual advantages

Shallow machine learning models have several limitations:

* They struggle with large quantities of data.
* They require good inputs.

--

Deep learning methods excel in some important aspects:

* Training neural networks .highlight[scales nicely with the amount of data].
* The fundamental ideas of deep learning are .highlight1[extremely flexible]:
* Good new representations can be learnt from a variety of raw inputs.
* Network architectures can be extended and adapted to incorporate a variety of .highlight1[inductive biases].

--

.smaller[.conclusion[The flexibility of deep learning has given rise to a large family of different methods and architectures, which incorporate different inductive biases about the data or tasks.]]

??? 

Mastering each method requires quite specific engineering skills and domain expertise.

---

## Convolutional neural networks (CNN)
### Image data

.right-column[
.center[<img src="../../../assets/images/teaching/mlprojects/dl/cnn.jpg" alt="CNN" style="width:100%"/>]
<figure style="text-align: center">
<img src="../../../assets/images/teaching/mlprojects/dl/depthcol.jpg" alt="Receptive field" style="width:60%"/>
  <figcaption style="text-align: center; font-size: small">Source: https://cs231n.github.io</figcaption>
</figure>
]

.left-column[
* Inductive bias: group equivariance over space.
* The same convolutional operation is valid on all parts of an image.
* This reduces the number of parameters and speeds up training.
* Internal representations can be thought as _feature maps_ (images).

.center[<img src="../../../assets/images/teaching/mlprojects/dl/featuremaps.jpg" alt="Feature maps" style="width:100%"/>]
]

???

* Mention the design parameters: kernel size, input channels, output channels, stride, padding, number of layers, etc.

---

## Convolutional neural networks (CNN)
### Popular architectures

* [AlexNet](https://proceedings.neurips.cc/paper/2012/file/c399862d3b9d6b76c8436e924a68c45b-Paper.pdf): relevant for historical reasons.
* [All-CNN](https://arxiv.org/abs/1412.6806): only convolutional layers, high parameter efficiency, great for prototyping.
* [VGG](https://arxiv.org/abs/1409.1556): very popular, but very large.
* [Inception](https://arxiv.org/abs/1512.00567): a convoluted convolutional neural network.
* [ResNet](https://arxiv.org/abs/1512.03385): residual blocks for training very deep networks, still very popular.
* [Wide ResNet](http://www.bmva.org/bmvc/2016/papers/paper087/index.html): rather wide than deep ResNet.
* [DenseNet](https://arxiv.org/abs/1608.06993): dense connection across layers.

---

## Convolutional neural networks
### Beyond image classification

.context[The ideas of deep learning are extremely flexible]

The same principle of convolutional layers can be applied to any tasks involving images, such as semantic segmentation, depth estimation, or even image-like data, such as sound spectrograms.

However, for good results, each task will require very specific techniques, tricks and engineering.

.center[<img src="../../../assets/images/teaching/mlprojects/dl/segdepthorig.png" alt="Orig" style="width:25%"/><img src="../../../assets/images/teaching/mlprojects/dl/seg.png" alt="Segmentation" style="width:25%"/><img src="../../../assets/images/teaching/mlprojects/dl/depth.png" alt="Depth" style="width:25%"/>]

.center[<img src="../../../assets/images/teaching/mlprojects/dl/spectrogram.png" alt="Spectrogram" style="width:35%"/>]

---

## Recurrent neural networks (RNN)
### Sequential data

* Inductive bias: equivariance across _time_.
* Neurons of a recurrent neural network implement recurrent connections.
* Inductive bias: memory matters.
* The values of previous (and later) parts of a sequence influence the current value.

<figure style="text-align: center">
<img src="../../../assets/images/teaching/mlprojects/dl/rnn1.png" alt="RNN" style="width:55%"/>
  <figcaption style="text-align: center; font-size: small">Adapted from: https://www.ibm.com/cloud/learn/recurrent-neural-networks</figcaption>
</figure>

---

## Recurrent neural networks (RNN)
### Variants

Vanilla RNNs are not stable, especially for longer sequences. In practice, more sophisticated versions are used:

.left-column[
.highlight1[Long short-term memory (LSTM)]

.center[<img src="../../../assets/images/teaching/mlprojects/dl/lstm.png" alt="LSTM" style="width:100%"/>]
]

.right-column[
.highlight1[Gated recurrent unit (GRU)]

.center[<img src="../../../assets/images/teaching/mlprojects/dl/gru.png" alt="GRU" style="width:100%"/>]
]

Both LSTMs and GRUs implement additional gates to regulate the flow of information and let long-term gradients flow unchanged.

???

Mention Transformers

---

## Transformers
### Sequential data

.left-column[
* Inductive bias: nearly _any_ past and future data influence the current input.
* Unlike RNNs, transformers process the whole input at once.
* A mechanism of **attention** determines the importance of each part of the input.
]
.right-column[
.center[<img src="../../../assets/images/teaching/mlprojects/dl/transformer.jpg" alt="Transformer" style="width:60%"/>]
]

.references[
* [Self-attention](https://arxiv.org/abs/1409.0473)
* [Transformers](https://arxiv.org/abs/1706.03762)
]

---

## Graph neural networks (GNN)
### Graph data

* GNNs are designed to process graph structures: complex topological structure and arbitrary size.
* Inductive bias: equivariance across entities and relations.
* Every node in the graph receives information about its neighbours.
* Every node in the implements a neural network to represent the structure of its neighbourhood. 
* Graph neural networks may be seen as a generalisation of convolutional networks.

<figure style="text-align: center">
<img src="../../../assets/images/teaching/mlprojects/dl/gnn.png" alt="GNN" style="width:55%"/>
  <figcaption style="text-align: center; font-size: small">Source: snap-stanford.github.io/cs224w-notes</figcaption>
</figure>

---

## Generative adversarial networks (GAN)

Generative adversarial networks are a good example of how the capabilities of deep neural networks can be combined to create new algorithms.

* GANs are generative models: meant to learn probability distribution of the data, rather than a conditional probability.
* GANs consist of two neural networks that context each other in a zero-sum game.
	* A discriminator is train to tell apart real or _fake_ data.
	* A generator aims to fool the discriminator with _fake_ data.

.center[<img src="../../../assets/images/teaching/mlprojects/dl/gan.png" alt="GAN" style="width:55%"/>]

---

## Generative Flow Networks (GFlowNets)
### A generative method to sample proportional rewards

.right-column-33[
.center[
![:scale 60%](../../../assets/images/slides/gfn-seq-design/lego_blocks.png)
![:scale 50%](../../../assets/images/slides/gflownet/mode_generalization.png)
]]

* A probabilistic modelling method.
* Objects $x \in \cal X$, can be constructed through a sequence of steps $\tau$ using a given set of actions.
* At each step of the trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots \rightarrow s_f)$, we get a partially constructed object $s\in \mathcal{S}$, including a starting empty state $s_0$ and a common final state $s_f$. 
* GFlowNets learn a policy $\pi$ to construct $x$ such that: $$\pi(x) \propto R(x)$$
* Computation is ammortized during training, hence sampling becomes "cheap".

---

name: title
class: title, middle


#### .gray224[1 février 2024 - Session 8]
### .gray224[Modèles génératifs pour la découverte scientifique]

.bigger[.bigger[.highlight1[Pause: 10 minutes]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../../../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

---

## Stochastic Gradient Descent (SGD)

Together with [backpropagation](https://en.wikipedia.org/wiki/Backpropagation), stochastic gradient descent (SGD) is the workhorse of deep learning: it is the optimisation algorithm that will enable learning.

In practice, in deep learning, we typically use a variant of .highlight1[mini-batch stochastic gradient descent], which is a generalisation of _stochastic gradient descent_, which is a particular case of _batch gradient descent_:

$$\theta^{t+1} = \theta^t - \lambda \cdot \nabla J(\theta; x^{i:i+B}, y^{i:i+B})$$

--

Two crucial parameters:

* $\lambda$: learning rate
* $B$: batch size

--

Variants and extensions of SGD: momentum, Nesterov, Adagrad, Adadelta, Adam, RMSProp...

.references[
Ruder, S. (2016). [An overview of gradient descent optimization algorithms](https://arxiv.org/abs/1609.04747). arXiv
]

---

## Deep learning in practice
### Regularisation

Definition from the previous class: any modification applied to a learning algorithm that helps the model generalise better.

With this definition, many techniques can be considered regularisation. It is worth considering a useful distinction:	

* .highlight1[Explicit regularization techniques] are those techniques which reduce the .highlight1[representational capacity] of the model class they are applied on.
* .highlight1[Implicit regularization] is the reduction of the generalization error or overfitting provided by means other than explicit regularization techniques.

.references[
Hernandez-Garcia and König (2018). [Data augmentation instead of explicit regularization](https://arxiv.org/abs/1806.03852). arXiv
]

???

* That is, given a model class H0, for instance a neural network architecture, the introduction of explicit regularization will span a new hypothesis set H1, which is a proper subset of the original set, that is H1 ( H0.
* Elements that provide implicit regularization do not reduce the representational capacity, but may affect the effective capacity of the model: the achievable set of hypotheses given the model, the optimization algorithm, hyperparameters, etc.  

---

## Explicit regularisation
### Dropout and weight decay

.highlight1[Weight decay]:

Weight decay is a classical parameter norm penalty, as used in traditional machine learning algorithms:

$$\hat{J}(\theta; X, y) = J(\theta; X, y) + \lambda\Omega(\theta)$$

.highlight1[Dropout]:

Dropout _turns off_ a random subset of neurons during training in order to prevent overfitting and improve robustness to noise.

--

Both weight decay and dropout are included in a majority of published models (but see next slide!)

---

## Data augmentation

Data augmentation refers to the techniques that synthetically and dynamically expand a data set by applying transformations on the existing examples, thus augmenting the amount and variability of the available data. 

.center[
<img src="../../../assets/images/slides/rethinksl/255011_light_imagenet.gif" style="width:19%"/>
<img src="../../../assets/images/slides/rethinksl/255011_heavier_imagenet.gif" style="width:19%"/>
<img src="../../../assets/images/slides/rethinksl/66016_light_imagenet.gif" style="width:19%"/>
<img src="../../../assets/images/slides/rethinksl/66016_heavier_imagenet.gif" style="width:19%"/>
]

--

Data augmentation is a good example of how the flexibility allows to efficiently incorporate inductive biases and domain knowledge via the data.

Data augmentation provides much larger generalisation gains than explicit regularisation, and often provides better results when used without weight decay and dropout.

.references[
Hernandez-Garcia and König (2018). [Data augmentation instead of explicit regularization](https://arxiv.org/abs/1806.03852). arXiv
]

---

## Monitoring during training

Always, **always** log at least the training and validation loss, and ideally other metrics. Monitoring the learning curves can save a lot of time and provide valuable insights.

.center[<img src="../../../assets/images/teaching/mlprojects/dl/loss-curves.png" alt="Loss curves" style="width:55%"/>]

---

## Interesting topics not covered

* Attention and Transformers
* Multi-task learning
* _Self-supervised_ learning
* Variational inference
* Reinforcement learning
* Deep active learning
* Transfer learning
* Continual learning
* Deep learning theory
* ...

---

name: title
class: title, middle

## IFT 3710/6759
## Projets (avancés) en apprentissage automatique

#### .gray224[1 février 2024 - Session 8]
### .gray224[Modèles génératifs pour la découverte scientifique]

.bigger[.bigger[.highlight1[Questions, doubts, concerns, comments?]]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../../../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../../../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]
