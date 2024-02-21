---
layout: slides_mila_owl
title: "Machine learning for science: tackling climate and health challenges"
---

name: mlforscience-udem-feb24
class: title, middle

## Machine learning for science
### Tackling climate and health challenges

<hr>

## Apprentissage automatique pour les sciences
### S'attaquer à la crise climatique et aux défis en santé

Alex Hernández-García (he/il/él)

.center[
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]

---

## Outline

.bigger[
- About me
- Overview of machine learning to tackle climate and health challenges
- Machine learning for scientific discoveries
    - GFlowNets for materials discovery
    - Multi-fidelity active learning
- Challenges and perspectives
]

---

name: title
class: title, middle

## About me

.center[![:scale 30%](../assets/images/slides/misc/gaspesie.jpg)]

---

## About me
### My academic journey

--

* .highlight1[Bachelor's]: Image and Sound Engineering, University Carlos III of Madrid (2013)

--
* .highlight1[Bachelor's] (partial): Audiovisual Communication, University Carlos III of Madrid (2013)

--
* .highlight1[Master's]: Machine Learning and Computer Vision, University Carlos III of Madrid (2015)

--
* .highlight1[PhD]: Institute of Cognitive Science, Universität Osnabrück (2016–2020)
  * Based in Berlin
  * Marie Skłodowska Curie ITN fellow
  * Thesis topics: deep learning, visual perception and computational neuroscience
  * Internship at Spinoza Centre for Neuroimaging, Amsterdam, 2018
  * Internship at University of Cambridge, 2019

---

count: false

## About me
### My academic journey

* .highlight1[Bachelor's]: Image and Sound Engineering, University Carlos III of Madrid (2013)
* .highlight1[Bachelor's] (partial): Audiovisual Communication, University Carlos III of Madrid (2013)
* .highlight1[Master's]: Machine Learning and Computer Vision, University Carlos III of Madrid (2015)
* .highlight1[PhD]: Institute of Cognitive Science, Universität Osnabrück (2016–2020)
* .highlight1[Postdoc]: Mila and the Université de Montréal (2020–present)
    * Prof. Yoshua Bengio's group and Prof. David Rolnick's group as IVADO fellow.
    * Teaching assistant in _Fundamentals of machine learning_ (Prof. Ioannis Mitliagkas and Guillaume Rabusseau), 2021.
    * Main instructor of _Projets avancés en apprentissage automatique_ (English x1 and French x2), 2022-2024.
    * Mila Lab Representative (2021-2022), EDI Committee (2021-present), Sustainability Committee (2023-present)

---

## About me
### Alongside my academic journey...

---

count: false

## About me
### Alongside my academic journey...

.center[![:scale 60%](../assets/images/slides/misc/ouc3m.jpg)]

---

count: false

## About me
### Alongside my academic journey...

.center[![:scale 80%](../assets/images/slides/misc/osi_all.png)]

.center[![:scale 30%](../assets/images/slides/misc/osi_alex.png)]

.footnote[[Orchestre Symphonique de l'Isle](https://osimontreal.com/)]

---

count: false

## About me
### Alongside my academic journey...


.center[![:scale 60%](../assets/images/slides/misc/bjr1.jpg)]

.footnote[[BrokenJugRamblers.bandcamp.com](https://brokenjugramblers.bandcamp.com/)]

---

count: false

## About me
### Alongside my academic journey...

.center[![:scale 60%](../assets/images/slides/misc/lume.jpg)]

.footnote[[LumeDeBiqueira.es](https://www.lumedebiqueira.es/en/)]

---

name: mlforscience-udem-feb24
class: title, middle

## Machine learning for science
### Tackling climate _or_ health challenges

<hr>

## Apprentissage automatique pour les sciences
### S'attaquer à la crise climatique _ou_ aux défis en santé

---

count: false

name: mlforscience-udem-feb24
class: title, middle

## Machine learning for science
### Tackling climate .highlight2[and] health challenges

<hr>

## Apprentissage automatique pour les sciences
### S'attaquer à la crise climatique .highlight2[et] aux défis en santé

---

name: title
class: title, middle

### Motivation and overview

.center[![:scale 30%](../assets/images/slides/climatechange/demo.jpg)]

---

## Why climate and health?

.context[Climate change is a major challenge for humanity.]

.left-column-66[.center[
<figure>
	<img src="../assets/images/slides/climatechange/anthropogenic_temperature_rise.png" alt="Historical global average temperature and the influence of modern humans" style="width: 90%">
  <figcaption>.smaller[Modelled and observed global average temperatures in the last 2 millenia (source graphic: <a href="https://www.theguardian.com/science/2021/aug/09/humans-have-caused-unprecedented-and-irreversible-change-to-climate-scientists-warn">The Guardian</a>.)]</figcaption>
</figure>
]]

.right-column-33[
Direct consequences:
* Melting glaciers and polar ice
* Sea level rise
* Heatwaves
* Floods
* Droughts
* Wildfires
* ...
]

???

* Flash floods kill **5,000** people per year.
* Sea levels are expected to rise by **2 metres** by the end of the century
* Rising sea levels could disrupt the lives of **1 billion people** by the end of 2050.
* As much as **40% of the Amazon** forest is at risk of becoming a savanna.
* In 2015, forest fires claimed roughly **980 000 $km^2$** of the world’s forest.
* Forest fires emmitted **~1.8 Gt of CO2** in 2019.

---

## Why climate and health?

.context[Climate change is a major challenge for humanity.]

.left-column-66[.center[
<figure>
	<img src="../assets/images/slides/climatechange/who_climate_health.jpg" alt="Climate change presents a fundamental threat to human health." style="width: 100%">
  <figcaption>.smaller[Climate-sensitive health risks (source graphic: <a href="https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health">World Health Organization</a>.)]</figcaption>
</figure>
]]

.right-column-33[
* Environmental factors take the lives of around 13 million people _per year_.
* Climate change seriously affect people’s mental and physical health, access to clean air, safe water, food and health care.
]

--

.full-width[
.conclusion["Climate change is the single biggest health threat facing humanity." .smaller[[WHO and WMO](https://climahealth.info/), 2024]]
]

???

- https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health
- 


---

## Why climate and health?

.context[Climate change is a fundamental threat to human health.]

.center[
<figure>
	<img src="../assets/images/slides/climatechange/ipcc_scenarios.png" alt="IPCC 2022 - Scenarios" style="width: 60%">
  <figcaption>Median <em>future</em> global warming across modelled scenarios. Adapted from IPCC Report, 2022</figcaption>
</figure>
]

--

.conclusion["The evidence is clear: the time for action is now." .smaller[IPCC Report, 2022]]

???

* Category C1: scenarios that limit warming to 1.5°C in 2100 with a likelihood of greater than 50%, and reach or exceed warming of 1.5°C during the 21st century with a likelihood of 67% or less. 
* Category C2: same as C1 but exceed warming of 1.5°C during the 21st century with a likelihood of _greater_ than 67%.
* Category C3: scenarios that limit peak warming to 2°C throughout the 21st century with a likelihood of greater than 67%
* Category C8: scenarios that exceed warming of 4°C during the 21st century with a likelihood of 50% or greater.

---

## Why climate _and_ health?

.orange[Figure with a schematic of the relationship between climate change, health and ML research]

- Tackling climate change _is_ tackling a wide range of health challenges.
- Machine learning can have a wide range of positive impacts in tackling climate and health challenges. .cite[(Rolnick et al, 2022)]
- Advancing scientific discoveries with machine learning has great potential for both health and climate.

.references[
Rolnick et al. [Tackling Climate Change with Machine Learning](https://dl.acm.org/doi/10.1145/3485128), ACM Comput. Surv., 2022.
]

---

name: title
class: title, middle

### Machine learning for scientific discoveries

.center[![:scale 20%](../assets/images/slides/scientific-discovery/laboratory.png)]

---

## Why scientific discovery?
### The potential on sustainability

.context["The time for action is now"]

--

> "Limiting global warming will require major transitions in the energy sector. This will involve a substantial reduction in fossil fuel use, widespread electrification, .highlight1[improved energy efficiency, and use of alternative fuels (such as hydrogen)]." .cite[IPCC Sixth Assessment Report, 2022]

--

> "Reducing industry emissions will entail coordinated action throughout value chains to promote all mitigation options, including demand management, .highlight1[energy and materials efficiency, circular material flows]." .cite[IPCC Sixth Assessment Report, 2022]

--

<br>

.conclusion[Mitigation of the climate crisis requires transformational changes in the energy and materials efficiency.]

???

Antimicrobial resistance

- https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance
- https://www.who.int/news-room/feature-stories/detail/donors-making-a-difference--climate-change-and-its-impact-on-health
- https://www.who.int/news/item/31-10-2022-who-and-wmo-launch-a-new-knowledge-platform-for-climate-and-health
- https://www.who.int/news/item/08-02-2024-who-medically-important-antimicrobial-list-2024
- https://cdn.who.int/media/docs/default-source/gcp/who-mia-list-2024-lv.pdf?sfvrsn=3320dd3d_2
- https://www.who.int/publications/i/item/9789240047655

---

## Why scientific discovery?
### The potential of better materials

.context[The climate crisis demands more efficient materials.]

Anthropogenic emissions in 2019:
- Canada: 0.73 GtCO₂-eq
- Global: 59 ($\pm$ 6.6) GtCO₂-eq

--

Potential reduction impact of materials discovery:
- Improving material efficiency can reduce 0.93 ($\pm$ 0.23) GtCO₂-eq per year.
- Fuel switching can reduce 2.1 ($\pm$ 0.52) GtCO₂-eq per year, only in the industry sector. 
- Carbon capture and storage can reduce 0.54 ($\pm$ 0.27) GtCO₂-eq per year in the energy sector.

.right[.cite[IPCC Sixth Assessment Report (2022)]]

--

.conclusion[Materials discovery has the potential to reduce carbon emissions in multiple areas.] 

---

## Scientific discoveries in history
### .alpha0[Placeholder]

.context35[Materials discovery has the potential to reduce carbon emissions in multiple areas.]

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

---

count: false

## Scientific discoveries in history
### .alpha0[Placeholder]

.context35[Materials discovery has the potential to reduce carbon emissions in multiple areas.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_0.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Example of concrete: most prevalent human-made material on Earth, and the most consumed commodity after water. The annual consumption of concrete in the world has reached 35 billion tons, which is twice as much as that of all other building materials combined.

---

count: false

## Scientific discoveries in history
### .alpha0[Placeholder]

.context35[Materials discovery has the potential to reduce carbon emissions in multiple areas.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_1.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: The properties and performance of concrete can be tailored to meet design requirements by varying the type and quantity of the mixture constituents (e.g., cement, water, aggregate, and admixtures). Traditional approaches for designing concrete mixtures often rely on trial-and-error, iterative proportioning, processing, and characterization until the target properties are achieved.

---

count: false

## Scientific discoveries in history
### .alpha0[Placeholder]

.context35[Materials discovery has the potential to reduce carbon emissions in multiple areas.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_2.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: it is possible to optimize the compressive strength of concrete mixtures by adjusting the water/cement ratio, total aggregate/cement ratio, and coarse aggregate/total aggregate ratio6. Yet the practical application of this iterative refinement approach is limited by the exponential increase in the number of specimens and experiments when complex concrete mixtures are studied and several compositional parameters are simultaneously considered as combinatorial variables. As a result, materials development in concrete science involves time-consuming validation/development cycles from laboratory trials to field applications. Efforts to accelerate knowledge acquisition and materials design in concrete science are thus of paramount importance.

Beginning in the 1980s, the development of microstructural models of cement hydration has enabled a fundamental understanding of microstructure–property relationships in concrete7, which has marked the second paradigm. By applying basic laws of kinetics, thermodynamics, and mechanics, and providing analytical solutions to cement hydration. Successful demonstrations include the three-dimensional cement hydration and microstructure development model (CEMHYD3D)8,9; the hydration, morphology, and structural development model (HYMOSTRUC)10; the integrated particle kinetics model11; and the microstructural modeling platform (μic)

---

count: false

## Scientific discoveries in history
### .alpha0[Placeholder]

.context35[Materials discovery has the potential to reduce carbon emissions in multiple areas.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_3.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: However, the complex nature of cement hydration makes it challenging to develop accurate and generalizable models, and these modeling approaches, to varying degrees, rely on thermochemical, physical, and structural data that must be obtained either from accurate experimental observations or from calculations at the atomistic and molecular scales.

In this context, the use of density-functional theory (DFT) and classical molecular dynamics (MD) simulations has been explored in concrete science since the 2000s owing to the ever-growing computing power16. This has given rise to the third paradigm (computational science; Fig. 1), where the first-principle models have been integrated and employed to further describe cementitious materials properties and improve understanding of cement hydration. Related simulation efforts have focused primarily on cementitious phases such as the calcium silicate hydrate (C-S-H) gel, the essential reaction product of cement hydration.

---

count: false

## Scientific discoveries in history
### .alpha0[Placeholder]

.context35[Materials discovery has the potential to reduce carbon emissions in multiple areas.]

.center[
<figure>
	<img src="../assets/images/slides/materials/paradigms_scientific_discovery_4.png" alt="Four paradigms of concrete science: empirical, theoretical, computational, and data-driven." style="width: 65%">
  <figcaption>Four paradigms in scientific discovery. Source: <a href="https://www.nature.com/articles/s41524-022-00810-x">Li et al., 2022</a>. (<a href="https://creativecommons.org/licenses/by/4.0/">CC BY 4.0</a>)</figcaption>
</figure>
]

.references[
Li et al. [Machine learning in concrete science: applications, challenges, and best practices](https://www.nature.com/articles/s41524-022-00810-x). Nature  npj Computational Materials, 2022
]

???

Concrete: However, these computational techniques require considerable computational resources and thus come with significant challenges, such as their limited time scales and the relatively small number of atoms in a simulated system. In addition, it may be difficult to validate these simulations with experiments, given the small time and length scales and high-fidelity measurements required.

By leveraging existing datasets with data-driven models, ML can automatically learn implicit patterns and extract valuable information while accounting for the inherent complexity of concrete mixtures and their properties.

---

## Traditional discovery cycle

.context35[The climate crisis demands accelerating scientific discoveries.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_1.png)]]

.left-column-33[
<br>
The .highlight1[traditional pipeline] for scientific discovery (paradigms 1-3):
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

.conclusion[Is a linear speed-up enough to explore combinatorially large search spaces? ($10^{180}$ stable materials)]
]

---

count: false

## _Generative_ machine learning in the loop

.context[Can we do better than _linear_?<br>An agent in the loop.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_4.png)]]

.left-column-33[
<br>
A .highlight1[machine learning **agent**] could:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]
]

---

count: false

## _Generative_ machine learning in the loop

.context[Can we do better than _linear_?<br>An agent in the loop.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_4.png)]]

.left-column-33[
<br>
A .highlight1[machine learning **agent**] could:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[An active learning pipeline with generative machine learning could provide _exponential_ gains.]
]

---

count: false

## _Generative_ machine learning in the loop

.context[GFlowNet as generative model.]

.right-column-66[<br>.center[![:scale 80%](../assets/images/slides/scientific-discovery/loop_5.png)]]

.left-column-33[
<br>
A .highlight1[machine learning **agent**] could:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[An active learning pipeline with generative machine learning could provide _exponential_ gains.]
]

.references[
Jain et al. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
]

---

## Machine learning for scientific discovery
### Challenges and limitations of existing methods

--

.highlight1[Challenge]: very large search spaces.

--

&rarr; Need for .highlight2[efficient search and generalisation] of underlying structure.

--

.highlight1[Challenge]: underspecification of objective functions or metrics.

--

&rarr; Need for .highlight2[diverse] candidates.

--

.highlight1[Limitation]: Reinforcement learning and MCMC methods excel at optimisation but struggle at mode mixing.

--

&rarr; Need for .highlight2[_multi-modal_ optimisation].

---

name: title
class: title, middle

### A brief introduction to GFlowNets

.center[![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)]

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
  <img src="../assets/images/slides/tetris/mode1.png" alt="Score 12/12" style="width: 3%">
<figcaption>Score: 12/12</figcaption>
</figure>
]]

---

## An intuitive toy problem

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
      <img src="../assets/images/slides/tetris/mode1.png" alt="Score 12/12" style="width: 20%">
    <figcaption>12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode2.png" alt="Score 12/12" style="width: 20%">
    <figcaption>12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode3.png" alt="Score 12/12" style="width: 20%">
    <figcaption>12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode4.png" alt="Score 12/12" style="width: 20%">
    <figcaption>12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode5.png" alt="Score 12/12" style="width: 20%">
    <figcaption>12/12</figcaption>
  </figure>
  </div>
</div>
]]

---

## An intuitive ~~toy~~ hard problem

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

## An incredibly ~~intuitive toy~~ hard problem

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

## Why Tetris for scientific discovery?

.conclusion[This task resembles designing DNA sequences or molecules or materials via fragments, with the objective of optimising certain properties.]

---

## GFlowNets in a nutshell

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

## GFlowNets in a nutshell

* Objects $x \in \cal X$ are constructed through a sequence of steps $\tau$ from an action space $\cal A$.
* At each step of the trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots \rightarrow s_f)$, we get a partially constructed object $s$ in state space $\cal S$.
* This induces a directed acyclic graph (DAG) $\mathcal{G}=(\mathcal{S},\mathcal{A})$, with all possible constructions in the domain.

.center[![:scale 50%](../assets/images/slides/gflownet/flownet.png)]

--

.conclusion[This terminology is reminiscent of reinforcement learning, which was a major source of inspiration.]

---

## An intuitive toy example

Task: sample all or multiple arrangements of Tetris pieces on the board that minimise the empty space.

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

.context[Sample all or multiple arrangements of Tetris pieces on the board that minimise the empty space.]

<br>
GFlowNet generation process: drop one piece at a time.

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

.columns-3-right[
.center[
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
]
.center[Sample trajectory $\tau$]
]

- .highlight1[State space]: all possible arrangements of pieces on the board.
- .highlight1[Action space]: Cartesian product of piece identity, non-invariant rotation (and board column for larger boards), plus stop action.

---

## An intuitive toy example

.context[Sample all or multiple arrangements of Tetris pieces on the board that minimise the empty space.]

<br>
.highlight1[Reward]: we can define a score function as the fraction of cells occupied by pieces.

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

.context[Sample all or multiple arrangements of Tetris pieces on the board that minimise the empty space.]

<br>
.highlight1[Reward]: we can define a score function as the fraction of cells occupied by pieces.


.center[
<div style="display: flex">
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode1.png" alt="Score 12/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode2.png" alt="Score 12/12" style="width: 30%">
    <figcaption>Score: 12/12</figcaption>
  </figure>
  </div>
  <div style="flex: 20%;">
  <figure>
      <img src="../assets/images/slides/tetris/mode3.png" alt="Score 12/12" style="width: 30%">
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

## GFlowNet flows

.context[The edges or transitions in the DAG can be quantified by their _flow_.]

* Analogous to water-flow in pipes.
* Trajectory Flow $F(\tau)$ denotes probability mass assigned to trajectory $\tau$.
* State Flow $F(s)$ is the flow of all trajectories passing through the state $s$.
* Edge Flow $F(s\rightarrow s')$ is the flow through a particular edge $s\rightarrow s'$.
* Forward Policy $P_F$: $P\_F(s'|s) = \frac{F(s\rightarrow s')}{F(s)}$
* Backward Policy $P_B$: $P\_B(s|s') = \frac{F(s\rightarrow s')}{F(s')}$

.center[![:scale 30%](../assets/images/slides/gfn-seq-design/flownet.gif)]

.references[
Bengio et al. [Flow network based generative models for non-iterative diverse candidate generation](https://arxiv.org/abs/2106.04399), NeurIPS, 2021. 
]

???

Not to be confused with normalizing flows!

---

## Principle of conservation as a training objective

.right-column-33[.center[![:scale 100%](../assets/images/slides/gfn-seq-design/flownet.gif)]]

.left-column-66[
**Consistent Flow**:  Flow $F$ satisfies the _flow consistency equation_
$$\sum\_{s' \in \text{Parents}(s)} F\_\theta(s' \rightarrow s) = \sum\_{s'' \in \text{Children}(s)} F\_\theta(s \rightarrow s'')$$
]

.references[
Bengio et al. [Flow network based generative models for non-iterative diverse candidate generation](https://arxiv.org/abs/2106.04399), NeurIPS, 2021. 
]

--
.left-column-66[
**Theorem**: For a consistent flow $F$ with terminal flow set as the reward $F(x\rightarrow s_f)=R(x)$, the forward policy samples $x$ proportionally to $R(x)$:

$$\pi(x) = \frac{R(x)}{Z}\propto R(x)$$
]

---

## Principle of conservation as a training objective

<p>
$$\sum\_{s' \in \text{Parent}(s)} F\_\theta(s' \rightarrow s) = \sum\_{s'' \in \text{Child}(s)} F\_\theta(s \rightarrow s')$$
</p>
* **Flow Matching Objective**: $$\mathcal{L}\_{FM}(s; \theta) = \left(\log \frac{\sum\_{s'\in \text{Parent}(s)} F\_\theta(s'{\rightarrow} s)}{\sum\_{s'' \in \text{Child}(s)}F\_\theta(s{\rightarrow} s'')}\right)^2$$

--
* **Trajectory Balance** (better credit assignment): $$\mathcal{L}\_{TB} (\tau;\theta) = \left(\log \frac{Z\_\theta \prod\_{s{\rightarrow} s' \in \tau}P\_{F\_\theta}(s'|s)}{R(x)\prod\_{s\rightarrow s' \in \tau} P\_{B\_\theta}(s|s') }\right)^2$$

.references[
Malkin et al. [Trajectory balance: Improved credit assignment in GFlowNets](https://arxiv.org/abs/2201.13259), NeurIPS, 2022. 
]

---

## Results
### Tetris GFlowNets

.context[If the model is sufficiently well trained, the sampling policy $\pi(x)$ should be proportional to the reward $R(x)$: $\pi(x) \propto R(x)$]

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

After training, GFlowNet samples multiple (diverse) modes with high probability.

.footnote[In order to increase the probability of sampling the modes, I use the reward function $R(X) = \varepsilon(x)^4$, where $\varepsilon(x)$ is the score function.]

---

## Results
### Hyper-grid and molecule fragments

.context[GFlowNet has been successfully trained in other toy and practically relevant tasks. .cite[(Bengio et al., 2019)]]

.columns-3-left[
.highlight1[Hyper-grid]: The action space is in which dimension to move and the reward function has high reward in the corners.

.center[
![:scale 90%](../assets/images/slides/gflownet/hypergrid_states_visited.png)
]
]

--

.columns-3-center[
.highlight1[Small molecules]: The action space is molecular fragments and the reward function is the binding energy to a particular protein.

.center[
![:scale 80%](../assets/images/slides/gflownet/molecules_states_visited.png)
]
]

--

.columns-3-right[
.highlight1[Active learning with molecules]: Multi-round active learning with a limited oracle budget.

.center[
![:scale 90%](../assets/images/slides/gflownet/molecules_al_topkreward.png)
]
]

--

.conclusion[GFlowNet is able to efficiently explore the search space and generalise to unseen modes of the reward.]

---

##  GFlowNet extensions
### Multi-objective GFlowNets

We have extended GFlowNets to handle multi-objective optimisation and not only cover the Pareto front but also sample diverse objects at each pointin the Pareto front.

.center[
![:scale 30%](../assets/images/slides/gflownet/mogfn_pareto_front.png)
![:scale 30%](../assets/images/slides/gflownet/mogfn_al.png)]

.references[
Jain et al. [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765), ICML, 2023. 
]

---

##  GFlowNet extensions
### Continuous GFlowNets

We have generalised the theory and implementation of GFlowNets to encompass both discrete and continuous or hybrid state spaces. 

.center[
![:scale 30%](../assets/images/slides/gflownet/kde_reward_molecule.png)
![:scale 30%](../assets/images/slides/gflownet/kde_gfn_molecule.png)]

.references[
Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. 
]

---

name: title
class: title, middle

### Crystal-GFN: GFlowNets for materials discovery

.center[![:scale 20%](../assets/images/slides/materials/lithium_oxide_crystal.png)]

---

## What are crystals?

[Wikipedia](https://en.wikipedia.org/wiki/Crystal): A crystal or crystalline solid is a solid material whose constituents (such as atoms, molecules, or ions) are arranged in a .highlight1[highly ordered microscopic structure], forming .highlight1[a crystal lattice that extends in all directions].

.left-column[
.center[![:scale 70%](../assets/images/slides/crystals/crystals_polycrystalline_amorphous.png)]
]
.right-column[
.center[![:scale 30%](../assets/images/slides/materials/lithium_oxide_crystal.png)]
]

--

Here, we are concerned mainly with _inorganic crystals_, where the constituents are atoms or ions.

--

A crystal structure is characterized by its .highlight1[unit cell], a small imaginary box containing atoms in a specific spatial arrangement with certain symmetry. The unit cell repeats iself periodically in all directions.

---

## Crystal structure generation in the literature

Example: .highlight2[Crystal Diffusion Variational Autoencoder (CDVAE)]: a diffusion process that moves .highlight1[atomic coordinates] towards a lower energy state and updates atom types to satisfy bonding preferences between neighbors. The key idea is to learn the diffusion process from the data distribution of stable materials. .cite[(Xie et al., 2022)]

.center[![:scale 100%](../assets/images/slides/crystals/cdvae.png)]

.references[Xie et al. [Crystal diffusion variational autoencoder for periodic material generation](https://arxiv.org/abs/2110.06197). ICLR 2022] 

???

A: atom types
X: atom coordinates
L: perdiodic lattice: l1, l2, l3 (3x3)

---

count: false

## Crystal structure generation in the literature

Example: .highlight2[Physics Guided Crystal Generative Model (PGCGM)]: A GAN with the affine matrices of the symmetry operations and element properties as inputs, augmented with a distance loss between real and fake materials, and data augmentation on the atomic positions. .cite[(Zhao et al., 2023)]

.center[![:scale 70%](../assets/images/slides/crystals/pgcgm.png)]

.references[Zhao et al. [Physics guided deep learning for generative design of crystal materials with symmetry constraints](https://www.nature.com/articles/s41524-023-00987-9). npj computational materials 2023] 

---

count: false

## Crystal structure generation in the literature

Example: .highlight2[MatterGen]: An evolution of CDVAE that performs diffusion not only on atomic positions but also on the atom types and the lattice. .cite[(Zeni, Pinsler, Zügner, Fowler et al., 2023)]

.center[![:scale 90%](../assets/images/slides/crystals/mattergen.png)]

.references[Zeni, Pinsler, Zügner, Fowler et al. [MatterGen: a generative model for inorganic materials design](https://arxiv.org/abs/2312.03687). arXiv 2023] 

---

count: false

## Crystal structure generation in the literature

Example: .highlight2[UniMat]: A denoising diffusion model learns to move atoms from random locations back to their original locations. Atoms not present in the crystal are moved to the null location during the denoising process, allowing crystals with an arbitrary number of atoms to be generated.

.center[![:scale 90%](../assets/images/slides/crystals/unimat.png)]

.references[Yang et al. [Scalable Diffusion for Materials Generation](https://arxiv.org/abs/2311.09235). arXiv 2023] 

---

## Our approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.left-column[
.center[![:scale 65%](../assets/images/slides/crystals/crystal_systems_table.png)]
]
.right-column[
.center[![:scale 30%](../assets/images/slides/crystals/unit_cell.png)]
]

.conclusion[We sample materials in the space of space groups (230 groups), compositions (elements and number of atoms) and lattice parameters (6 parameters: $a, b, c, \alpha, \beta, \gamma$).]

---

## GFlowNet approach
### Advantages

.context[We generate materials in the lower-dimensional space of crystal structure parameters.]

* Constructing materials by their crystal structure parameters allows us to introduce .highlight1[physicochemical and geometric _hard_ constraints].

--
* .highlight1[Searching in the lower-dimensional space] of crystal structure parameters may be more efficient than in the space of atom coordinates. Particularly suitable in active learning .cite[(Hernandez-Garcia, Saxena et al., 2023)].
.references[
Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). arXiv 2306.11715, 2023 (RealML workshop at NeurIPS).
]

--
* Provided we have access to a predictive model of a material property, we can .highlight1[flexibly generate materials with desirable properties].

--
* We can .highlight1[flexibly sample materials with specific characteristics, such as composition or space group]. 

---

## Crystal-GFlowNet
### Main properties

* .highlight1[State space]: 
1. **Space group**: 230 groups, subdivided into crystal system, lattice system, point symmetry and space group (discrete)
2. **Composition**: how many atoms of which elements (discrete)
3. **Lattice parameters**: 6 parameters, $a, b, c, \alpha, \beta, \gamma$ (continuous)

--
* .highlight1[Action space]: discrete and continuous movements in the subspace of the state space, with constraints.

--
* .highlight1[Constraints]:
    * Charge neutrality of the composition.
    * Compatibility of composition and space group.
    * Hierarchical structure of the space group.
    * Compatibility of lattice parameters and lattice system.

---

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_init.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_sg.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_sg_output.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_comp.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_comp_output.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_lp.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_lp_output.png)]

---

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_all.png)]

---

## Crystal-GFlowNet
### Properties

We can train a Crystal-GFN with any reward function, provided it is computationally tractable. Therefore, we can use it to .highlight1[generate materials with different properties]. 
--
We have tested the following properties:

- Formation energy per atom [eV/atom], via a pre-trained machine learning model.
- Electronic band gap [eV] (squared distance to a target value, 1.34 eV), via a pre-trained machine learning model.
- Unit cell density [g/cm<sup>3</sup>], calculated _exactly_ from the GFN outputs.

---

## Crystal-GFlowNet
### Proxy ML models of the formation energy and the band gap

- MLP architecture
- Inputs:
    - Space group embedding
    - Composition embedding as in PhAST (Duval et al., 2022)
    - Standardised lattice parameters
- Trained on MatBench (Materials Project)
    - Mean absolute error: 
        - Formation energy: 0.10 eV/atom $\pm$ 0.005
        - Band gap: 0.321 eV $\pm$ 0.003
- Reward: $R(x) = \exp(-\frac{MLP(x)}{T})$

---

## Crystal-GFlowNet
### Experiments

- Space groups: all 113 space groups present in the MatBench data set.
- Compositions:
    - Up to 5 unique elements from the these 22 elements: ts: H, Li, B, C, N, O, F, Na, Mg, Al, Si, P, S, Cl, K, V, Mn, Fe, Co, Ni, Cu, Se. Th (22 most common elements in the training set). 
    - Up to 16 atoms per element (80 atoms in total)
- Lattice parameters:
    - Lengths: 0.9-100 angstroms.
    - Angles: 50-150°.
    - These ranges contain the bulk of the data set (excluding outliers).

---

## Results
### Density

What do we expect Crystal-GFN to sample?

- Small length lattice parameters (small volume): 
--
4.9 Å compared to 8.3 Å in the validation dataset. &#10004;
--

- Denser packing space group: 
--
We see a shift towards spacegroups from the cubic, tetragonal, and hexagonal lattices (81, 99, 115, 195, 200, 207, 215, 221). &#10004;
--

- Higher number of atoms (larger mass): 
--
58.8 atoms on average compared to 48.1 over the validation set. &#10004;
--

- Heavier elements (larger mass): 
--
Heavier such as Se, Cu, Ni are sampled the most often. &#10004;

---

## Results
### Density

.center[![:scale 80%](../assets/images/slides/crystals/density_elements.png)]

---

## Results
### Formation energy

.center[![:scale 70%](../assets/images/slides/crystals/distributions_fe_22.png)]

---

## Results
### Band gap

.center[![:scale 70%](../assets/images/slides/crystals/distributions_bg_22.png)]

---

## Results
### Restricted sampling

We restrict the sampling space at sampling time:

- A: The composition is restricted to only elements Fe and O, with a maximum of 10 atoms per element.
- B: We sample in the ternary space for Li-Mn-O, keeping the element count to maximum 16 atoms.
- C: We restrict the space groups to only cubic lattices.
- D: We restrict the range of the lattice parameters to lengths between 10 and 20 angstroms and angles between 75 and 135 degrees.

---

## Results
### Restricted sampling

.center[![:scale 70%](../assets/images/slides/crystals/distributions_restricted_sampling.png)]

---

## Results
### Diversity

.context[.highlight2[Diversity] is key in materials discovery.]

Analysis of 10,000 sampled crystals and the top-100 with lowest formation energy.

- All 10,000 samples are unique.
- All crystal systems, lattice systems and point symmetries found in the 10,000 samples.
    - 4 out of 8 crystal-lattice systems in the top-100.
    - 4 out of the 5 point symmetries in the top-100.
- All 22 elements found in the 10,000 samples.
    - 15 out of 22 elements in the top-100.
- 73 out of 113 space groups (65 %) found in the 10,000 samples
    - 19 out of 113 space groups in the top-100.

---

## Crystal-GFN
### Summary and conclusions

* Discovering new crystal structures with desirable properties can help mitigate the climate crisis.
* There are infinitely many conceivable crystals. Only a few are stable. Only a few stable crystals have interesting properties. This is a hard problem.
* Crystal-GFN introduces .highlight1[physicochemical and structural constraints], reducing the search space.
    * Crystal-GFN was trained in 30 hours in a CPU-only machine.
* Our results show that we can generate .highlight1[diverse, high scoring samples with the desired constraints].
* The .highlight1[framework can be flexibly extended] with more constraints, crystal structure descriptors (atomic positions) and other properties. 

.references[
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
]

---

name: title
class: title, middle

### Multi-fidelity active learning with GFlowNets

.center[![:scale 30%](../assets/images/slides/mfal/multiple_oracles.png)]

---

## Why multi-fidelity?

In many areas of scientific applications we have access to multiple approximations of the objective function.

For example, for material discovery:

* Synthesis of a material and characterisation of a property in the lab
* Density Functional Theory (DFT)
* An ensemble of large graph neural networks trained on DFT data
* An efficient, smaller neural network

--

However, current multi-fidelity methods struggle with .highlight1[structured, large, high-dimensional search spaces] and lack .highlight1[**diversity**].

---

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_0.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_1.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_2.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_3.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_4.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_5.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_6.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_7.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_8.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_9.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_10.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_11.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_12.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/mfal_13.png)]


---

## Multi-fidelity surrogate models

* Small (synthetic) tasks: exact Gaussian Processes
* Larger-scale, benchmark tasks: Deep Kernel Learning with stochastic variational Gaussian processes

Multi-fidelity kernel learning:

$$K(x, \tilde{x}, m, \tilde{m}) = K_1(x, \tilde{x}) \times K_2(m, \tilde{m})$$

* $K_1$: RBF kernel
* $K_2$: Downsampling kernel

.references[
* Wilson, Hu et al. [Deep Kernel Learning](https://arxiv.org/abs/1511.02222), AISTATS, 2016.
* Wu et al. [Practical multi-fidelity Bayesian optimization for hyperparameter tuning](https://arxiv.org/abs/1903.04703) , UAI, 2019.
]

---

## Multi-fidelity acquisition function
### Maximum Entropy Search (MES)

MES it aims to maximise the mutual information between .hihglight1[the value] of the objective function $f$ when choosing point *x* and the maximum of the objective function, $f^{\star}$ (instead of considering the `arg max`).

The multi-fidelity variant is designed to select the candidate $x$ and the fidelity $m$ that maximise the mutual information between $f_M^\star$ and the oracle at fidelity $m$, $f_m$ , weighted by the cost of the oracle $\lambda_m$.

$$\alpha(x, m) = \frac{1}{\lambda_{m}} I(f_M^\star; f_m | \mathcal{D})$$

.references[
* Moss et al. [GIBBON: General-purpose Information-Based Bayesian OptimisatioN](https://arxiv.org/abs/2102.03324), JMLR, 2021.
]

---

## Multi-fidelity GFlowNets (MF-GFN)

Given a baseline GFlowNet with state space $\mathcal{S}$ and action space $\mathcal{A}$, we augment the state space with a new dimension for the fidelity $\mathcal{M'} = \{0, 1, 2, \ldots, M\}$ (including $m = 0$, which corresponds to unset fidelity). 

--

The set of allowed transitions $\mathcal{A}_M$ is augmented such that a fidelity $m > 0$ of a trajectory must be selected once, and only once, from any intermediate state. This is meant to provide flexibility and improve generalisation.

--

Finished trajectories are the concatenation of an object $x$ and the fidelity $m$.

GFlowNet is trained with the acquisition function $\alpha(x, m)$ as reward function.

---

## Experiments
### Baselines

* .highlight1[SF-GFN]: GFlowNet with highest fidelity oracle to establish a benchmark for performance without considering the cost-accuracy trade-offs.
* .highlight1[Random fid. GFN]: GFlowNet with random fidelities, that is a variant of SF-GFN where the candidates are generated with the GFlowNet but the fidelities are picked randomly and a multi-fidelity acquisition function is used, to investigate the benefit of deciding the fidelity with GFlowNets.
* .highlight1[Random]: Quasi-random approach where the candidates and fidelities are picked randomly and the top $(x, m)$ pairs scored by the acquisition function are queried.
* .highlight1[MF-PPO]: Instantiation of multi-fidelity Bayesian optimisation where the acquisition function is optimised using proximal policy optimisation (reinforcement learning).

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

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid.png)]

---

## Multi-fidelity active learning with GFlowNets
### Summary and conclusions

* Current AI tools are not enough to truly utilize all the information and resources at our disposal.
* AI-driven scientific discovery demands learning methods that can .highlight1[efficiently discover diverse candidates in very large, multi-modal search spaces].
* .highlight1[GFlowNet] is a learning method for amortised inference that can sample proportionally to a reward function.
* .highlight1[Multi-fidelity active learning with GFlowNets] enables .highlight1[cost-effective exploration] of large, high-dimensional and structured spaces, and discovers multiple, diverse modes of black-box score functions.

.references[
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). arXiv 2306.11715, 2023.
* Jain et al. [GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615). Digital Discovery, Royal Society of Chemistry, 2023.
* Jain et al. [Biological Sequence Design with GFlowNets](https://arxiv.org/abs/2203.04115), ICML, 2022. 
]

---

name: title
class: title, middle

## Overall summary and conclusions

.center[![:scale 30%](../assets/images/slides/misc/conclusion.png)]

---

## Summary and conclusions

.orange[Here goes a nice summary of all the contributions]

.highlight2[Open source code]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

---

## Challenges and perspectives

.orange[Here go a few nice slides with a discussion of remaining challenges and my research plans.]

---

## Acknowledgements

.orange[Here goes a kind acknowledgement of my collaborators]

???

- Contrast between PhD (solo research) and postdoc (big team collaborations)

---

name: mlforscience-udem-feb24
class: title, middle

![:scale 40%](../assets/images/slides/mfal/mfal_bgwhite.png)

Alex Hernández-García (he/il/él)

.center[
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]

---

## Supplementary slides

---

## About me
### My academic journey

.context35[.highlight1[PhD] work on deep learning, visual perception and computational neuroscience.]

I studied the .highlight1[role of data augmentation in the generalisation] of deep neural networks, its connection to regularisation and the differences between .highlight1[implicit and explicit regularisation].

.center[
<img src="../assets/images/slides/rethinksl/255011_light_imagenet.gif" style="width:20%"/>
<img src="../assets/images/slides/rethinksl/255011_heavier_imagenet.gif" style="width:20%"/>
<img src="../assets/images/slides/rethinksl/66016_light_imagenet.gif" style="width:20%"/>
<img src="../assets/images/slides/rethinksl/66016_heavier_imagenet.gif" style="width:20%"/>
]

.references[
- Hernandez-Garcia and König. [Data augmentation instead of explicit regularization](https://arxiv.org/abs/1806.03852). arxiv:1806.03852, 2018.
- Hernandez-Garcia and König. [Do deep nets really need weight decay and dropout?](https://arxiv.org/abs/1802.07042). arxiv:1802.07042, 2018.
- Hernandez-Garcia. [Data augmentation and image understanding](https://arxiv.org/abs/2012.14185). arxiv:2012.14185, 2020.
]

---

count: false

## About me
### My academic journey

.context35[.highlight1[PhD] work on deep learning, visual perception and computational neuroscience.]

I compared the representations learnt by deep networks trained with various levels of .highlight1[data augmentation and the representations in fMRI] measurements in the human visual cortex.

.left-column-33[
.center[
<img src="../assets/images/slides/daug/visual_cortex.png" style="width:100%"/>
]]
.right-column-66[
.center[
<img src="../assets/images/slides/daug/rdms.png" style="width:90%"/>
]]

.references[
- Hernandez-Garcia et al. [Deep neural networks trained with heavier data augmentation learn features closer to representations in hIT](https://ccneuro.org/2018/proceedings/1046.pdf). CCN, 2018.
- Hernandez-Garcia. [Data augmentation and image understanding](https://arxiv.org/abs/2012.14185). arxiv:2012.14185, 2020.
]

---

count: false

## About me
### My academic journey

.context35[.highlight1[PhD] work on deep learning, visual perception and computational neuroscience.]

I proposed a .highlight1[brain-inspired unsupervised, contrastive training objective to encourage representational invariance] to perceptually plausible image transformations - .highlight2[_data augmentation invariance_]. Note: work prior to Google's SimCLR paper.

.left-column[
.center[
<img src="../assets/images/slides/daug/daug_inv_samples.png" style="width:100%"/>
]]
.right-column[
.center[
<img src="../assets/images/slides/daug/invariance_densenet.png" style="width:100%"/>
]]

.references[
- Hernandez-Garcia, König and Kietzmann. [Learning robust visual representations using data augmentation invariance](https://arxiv.org/abs/1806.03852). arxiv:1806.03852, 2018.
- Hernandez-Garcia. [Data augmentation and image understanding](https://arxiv.org/abs/2012.14185). arxiv:2012.14185, 2020.
]

---

name: title
class: title, middle

### Raising climate awareness with AI-generated visualisations

.center[![:scale 30%](../assets/images/slides/vicc/placedesarts_flood.gif)]

---

## The need to raise awareness

There is a mismatch between the magnitude of the climate crisis and the public's concern about it.

.center[
<figure>
	<img src="../assets/images/slides/climatechange/concern_co2.png" alt="High CO2 emitters are less intensely concerned about climate change" style="width: 50%">
  .smaller[<figcaption>Stokes et al., <a href="https://www.pewresearch.org/global/2015/11/05/1-concern-about-climate-change-and-its-consequences/">Global concern about climate change, broad support for limiting emissions</a>. Pew Research, 2015</figcaption>]
</figure>
]

---

## Our goal
### .alpha0[Placeholder]

.context[People perceive the threat of climate change as temporally, geographically and socially distant.]

--

.center[.bigger[.highlight1[Could we help people visualise the effects of climate change in _their own backyard_?]]]

--

.left-column[
<figure>
	<img src="../assets/images/slides/vicc/rachel_orig.jpg" alt="Montreal, original image" style="width: 80%">
  <figcaption>Montréal, Québec, Canada</figcaption>
</figure>
]
.right-column[
<figure>
	<img src="../assets/images/slides/vicc/oppelner_orig.jpg" alt="Berlin, original image" style="width: 80%">
  <figcaption>Berlin, Germany</figcaption>
</figure>
]
.left[
]
.right[
]

---

count: false

## Our goal
### .alpha0[Placeholder]

.context[People perceive the threat of climate change as temporally, geographically and socially distant.]

.center[.bigger[.highlight1[Could we help people visualise the effects of climate change in _their own backyard_?]]]

.left-column[
<figure>
	<img src="../assets/images/slides/vicc/rachel_flood.gif" alt="Montreal, original image" style="width: 80%">
  <figcaption>Montréal, Québec, Canada</figcaption>
</figure>
]
.right-column[
<figure>
	<img src="../assets/images/slides/vicc/oppelner_flood.gif" alt="Berlin, original image" style="width: 80%">
  <figcaption>Berlin, Germany</figcaption>
</figure>
]
.left[
]
.right[
]

---

## Our goal
### A website to encourage climate change awareness and action

.context[Users can look for an address of their choice.]

![:scale 100%](../assets/images/slides/vicc/website_snapshot_address_mila.png)

---

count: false

## Our goal
### A website to encourage climate change awareness and action

.context[Obtain an AI-generated visualisation on a street photo.]

.center[![:scale 70%](../assets/images/slides/vicc/website_snapshot_viz_mila.png)]

---

count: false

## Our goal
### A website to encourage climate change awareness and action

.context[Read more about climate change and the ways to act now.]

.center[![:scale 70%](../assets/images/slides/vicc/website_snapshot_whatnow.png)]

---

## Methods
### Key challenges

.context[The algorithm had to be able to generate realistic floods on any photo from Google Street View.]

--

.left-column-66[

* Visual perception is sensitive to unrealistic scenes:
    * Water texture (reflections, luminosity, etc.)
    * Geometry of the scene (edges, obstacles, etc.)
    * Physics (slope, view point, etc.)
* The algorithm was meant to be deployed _in the wild_ and should work with highly variant range of photos.
* We had to overcome the lack of training data: there is no data set of photos of _before and after_ the flood.
]
.right-column-33[
.center[
![:scale 90%](../assets/images/slides/vicc/placedesarts_flood.gif)
]
]


.full-width[
.references[
Schmidt et al. [ClimateGAN: Raising Climate Change Awareness by Generating Images of Floods](https://arxiv.org/abs/2110.02871v1), ICLR 2022.
]]

---

## Methods
### Key features

.context[Simulating photo-realistic floods is challenging because visual perception is very sensitive to unrealistic scenes and the lack of data.]

--

.left-column[

* Data from a .highlight1[simulated virtual word] to overcome the lack of training data
* .highlight1[Domain adaptation] to bridge the gap between simulated and real photos
* Two-stage flood generation: .highlight1[Masker] + .highlight1[Painter]
* Combination of .highlight1[depth and semantic segmentation] to improve water mask predictions
* .highlight1[Conditional image generation] to _paint_ realistic water on the predicted mask
]
.right-column[
![:scale 100%](../assets/images/slides/vicc/climategan-overview.png)
]

.full-width[
.references[
Schmidt et al. [ClimateGAN: Raising Climate Change Awareness by Generating Images of Floods](https://arxiv.org/abs/2110.02871v1), ICLR 2022.
]]

---

name: title
class: title, middle

### Increasing climate models resolution with hard-constrained deep learning

.center[![:scale 20%](../assets/images/slides/downscaling/gcm_sample2.png)]

---

## The importance of climate models

.highlight1[Definition]: Climate models simulate the interactions of factors the drive the climate via systems differential equations based on the basic laws of physics, fluid motion, and chemistry.

.left-column[
.center[![:scale 90%](../assets/images/slides/downscaling/gcm_sample.png)]
]

.right-column[
- Accurate modeling of weather and climate is critical for taking effective action to combat climate change.
- The resolution of climate models is too coarse to guide local and regional policy making.
- Deep learning can be used to increase climate models resolution (.highlight1[_downscaling_]), akin to image super-resolution.
]

.conclusion[Climate model downscaling with deep learning can facilitate the use of global climate models at local and regional level.]

---

## Hard-constrained _downscaling_
### .alpha0[Placeholder]

.context35[Deep learning can be used to increase the resolution of climate models.]

The direct application of .highlight1[image-super resolution] deep learning to climate model downscaling can result in the .highlight1[violation of fundamental physical relationships].

.center[![:scale 90%](../assets/images/slides/downscaling/image-super-resolution.png)]

---

count: false

## Hard-constrained _downscaling_
### .alpha0[Placeholder]

.context35[Deep learning can be used to increase the resolution of climate models.]

We proposed a procedure to enforce .highlight1[mass conservation] between the low-resolution input and the super-resolution prediction.

.center[![:scale 50%](../assets/images/slides/downscaling/model_hc.png)]

.references[
Harder et al. [Hard-constrained deep learning for climate downscaling](https://jmlr.org/papers/v24/23-0158.html), JMLR 2023.
]

---

count: false

## Hard-constrained _downscaling_
### .alpha0[Placeholder]

.context35[Deep learning can be used to increase the resolution of climate models.]

We proposed a procedure to enforce .highlight1[mass conservation] between the low-resolution input and the super-resolution prediction.

.center[![:scale 70%](../assets/images/slides/downscaling/wrf.png)]

.references[
Harder et al. [Hard-constrained deep learning for climate downscaling](https://jmlr.org/papers/v24/23-0158.html), JMLR 2023.
]

.conclusion[Hard constraints provide theoretical guarantees and even improved the performance.]

---

## Arbitrary resolution _downscaling_

.context35[Deep learning can be used to increase the resolution of climate models.]

<br>
Standard deep learning for climate downscaling is typically limited to the input and output resolutions specified at training time.

--

We proposed the use of [Fourier Neural Operators](https://arxiv.org/abs/2010.08895), which learn mappings in function spaces instead of Euclidean spaces, for arbitrary resolution climate downscaling: we train with mappings for a small upsampling factor, but the model can .highlight1[zero-shot downscale to arbitrary, unseen, higher resolutions].

.center[![:scale 50%](../assets/images/slides/downscaling/model_fno.png)]

.references[
Yang et al. [Fourier Neural Operators for arbitrary resolution climate data downscaling](https://arxiv.org/abs/2305.14452), arxiv:2305.14452, 2023.
]

