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

count: false

name: title
class: title, middle

## About me

.center[![:scale 30%](../assets/images/slides/misc/gaspesie.jpg)]

---

## About me
### My academic journey

--

* .highlight1[Bachelor's and Master's]: University Carlos III of Madrid (2009-2105)

--
* .highlight1[PhD]: Institute of Cognitive Science, Universität Osnabrück (2016–2020)
  * Based in Berlin
  * Marie Skłodowska Curie ITN fellow
  * Thesis topics: deep learning, visual perception and computational neuroscience
  * Internship at Spinoza Centre for Neuroimaging, Amsterdam, 2018
  * Internship at University of Cambridge, 2019

--
* .highlight1[Postdoc]: Mila and the Université de Montréal (2020–present)
    * Prof. Yoshua Bengio's group and Prof. David Rolnick's group as IVADO fellow.
    * Teaching assistant in _Fundamentals of machine learning_, 2021.
    * Main instructor of _Projets avancés en apprentissage automatique_ (EN x1 and FR x2), 2022-2024.
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
### Tackling climate and health challenges

<hr>

## Apprentissage automatique pour les sciences
### S'attaquer à la crise climatique et aux défis en santé

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

count: false
name: title
class: title, middle

### Why climate and health?

.center[![:scale 30%](../assets/images/slides/climatechange/demo.jpg)]

---

## Why climate and health?

.context[Climate change is a major challenge for humanity.]

.center[
<figure>
	<img src="../assets/images/slides/climatechange/anthropogenic_temperature_rise.png" alt="Historical global average temperature and the influence of modern humans" style="width: 60%">
  <figcaption>.smaller[Modelled and observed global average temperatures in the last 2 millenia (source graphic: <a href="https://www.theguardian.com/science/2021/aug/09/humans-have-caused-unprecedented-and-irreversible-change-to-climate-scientists-warn">The Guardian</a>.)]</figcaption>
</figure>
]

.conclusion["The evidence is clear: the time for action is now." .smaller[IPCC Report, 2022]]

---

## Why climate and health?

.context[Climate change is a major challenge for humanity.]

.center[
<figure>
	<img src="../assets/images/slides/climatechange/who_climate_health.png" alt="Climate change presents a fundamental threat to human health." style="width: 100%">
  <figcaption>.smaller[Climate-sensitive health risks (Adapted from: <a href="https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health">World Health Organization</a>.)]</figcaption>
</figure>
]

.smaller[
* Environmental factors take the lives of around 13 million people _per year_.
* Climate change affects people’s mental and physical health, access to clean air, safe water, food and health care.
]

--

.full-width[
.conclusion["Climate change is the single biggest health threat facing humanity." .smaller[[WHO and WMO](https://climahealth.info/), 2024]]
]

???

- https://www.who.int/news-room/fact-sheets/detail/climate-change-and-health
- 


---

## Why climate _and_ health?

.center[![:scale 60%](../assets/images/slides/climatechange/climate_health.png)]

---

count: false

## Why climate _and_ health?

.center[![:scale 60%](../assets/images/slides/climatechange/climate_health_ai.png)]

--

.conclusion[Tackling climate change has a direct positive impact on global health. There is a strong synergy between machine learning research for science and health.]

---

### Overview of my recent work

.columns-3-left[.center[.milapaleblue[.smaller[Materials discovery for sustainability]]]]
.columns-3-center[.center[.milapalered[.smaller[Drugs discovery / Health]]]]
.columns-3-right[.center[.milapalegreen[.smaller[Climate]]]]

.smaller70[
- .milapalegreen[ClimateGAN: Raising climate change awareness by generating images of floods]. ICLR (2022)
- .milapalered[Benchmark of ... for gut microbiome-based diagnosis of inflammatory bowel disease]. Frontiers in Genetics (2022)
- .milapalered[Biological sequence design with GFlowNets]. ICML (2022)
- .milapalered[Diversifying Design of Nucleic Acid Aptamers Using Unsupervised Machine Learning]. Journal of Physical Chemistry B (2022)
- .milapaleblue[PhAST: Physics-Aware, Scalable, and Task-specific GNNs for accelerated catalyst design]. Under review
- .milapalegreen[Hard-constrained deep learning for climate downscaling]. JMLR (2023)
- .milapaleblue[GFlowNets for AI-driven] .milapalered[scientific discovery]. Digital Discovery (2023)
- .milapalegreen[Multi-variable hard physical constraints for climate model downscaling]. AAAI FSS (2023)
- .milapalegreen[Counting carbon: a survey of factors influencing the emissions of machine learning]. arXiv preprint (2023)
- .milapalegreen[Fourier neural operators for arbitrary resolution climate data downscaling]. Under review
- .milapalered[Multi-objective GFlowNets]. ICML (2023)
- .milapaleblue[A theory of continuous] .milapalered[generative flow networks]. ICML (2023)
- .milapaleblue[FAENet: Frame averaging equivariant GNN for materials modeling]. ICML (2023)
- .milapaleblue[On the importance of catalyst-adsorbate 3D interactions for relaxed energy predictions]. AI4Mat Workshop NeurIPS (2023)
- .milapalered[Towards equilibrium molecular conformation generation with GFlowNets]. Digital Discovery (2023)
- .milapaleblue[Crystal-GFN: sampling crystals with desirable properties and constraints]. AI4Mat Workshop NeurIPS (2023)
- .milapalered[Multi-fidelity active learning] .milapaleblue[with GFlowNets]. RealML Workshop NeurIPS (2023)
]

---

count: false

### Overview of my recent work

.center[![:scale 70%](../assets/images/slides/misc/wordcloud_papers.png)]

---

count: false

### Overview of my recent work

.columns-3-left[.center[.milapaleblue[.smaller[Materials discovery for sustainability]]]]
.columns-3-center[.center[.milapalered[.smaller[Drugs discovery / Health]]]]
.columns-3-right[.center[.milapalegreen[.smaller[Climate]]]]

.smaller70[
- .milapalegreen[ClimateGAN: Raising climate change awareness by generating images of floods]. ICLR (2022)
- .milapalered[Benchmark of ... for gut microbiome-based diagnosis of inflammatory bowel disease]. Frontiers in Genetics (2022)
- .milapalered[Biological sequence design with GFlowNets]. ICML (2022)
- .milapalered[Diversifying Design of Nucleic Acid Aptamers Using Unsupervised Machine Learning]. Journal of Physical Chemistry B (2022)
- .milapaleblue[PhAST: Physics-Aware, Scalable, and Task-specific GNNs for accelerated catalyst design]. Under review
- .milapalegreen[Hard-constrained deep learning for climate downscaling]. JMLR (2023)
- .milapaleblue[GFlowNets for AI-driven] .milapalered[scientific discovery]. Digital Discovery (2023)
- .milapalegreen[Multi-variable hard physical constraints for climate model downscaling]. AAAI FSS (2023)
- .milapalegreen[Counting carbon: a survey of factors influencing the emissions of machine learning]. arXiv preprint (2023)
- .milapalegreen[Fourier neural operators for arbitrary resolution climate data downscaling]. Under review
- .milapalered[Multi-objective GFlowNets]. ICML (2023)
- .milapaleblue[A theory of continuous] .milapalered[generative flow networks]. ICML (2023)
- .milapaleblue[FAENet: Frame averaging equivariant GNN for materials modeling]. ICML (2023)
- .milapaleblue[On the importance of catalyst-adsorbate 3D interactions for relaxed energy predictions]. AI4Mat Workshop NeurIPS (2023)
- .milapalered[Towards equilibrium molecular conformation generation with GFlowNets]. Digital Discovery (2023)
- .milapaleblue[Crystal-GFN: sampling crystals with desirable properties and constraints]. AI4Mat Workshop NeurIPS (2023)
- .milapalered[Multi-fidelity active learning] .milapaleblue[with GFlowNets]. RealML Workshop NeurIPS (2023)
]

---

count: false

### Overview of my recent work

.columns-3-left[.center[.milapaleblue[.smaller[Materials discovery for sustainability]]]]
.columns-3-center[.center[.milapalered[.smaller[Drugs discovery / Health]]]]
.columns-3-right[.center[.milapalegreen[.smaller[Climate]]]]

.smaller70[
- .alpha50[.milapalegreen[ClimateGAN: Raising climate change awareness by generating images of floods]. ICLR (2022)]
- .alpha50[.milapalered[Benchmark of ... for gut microbiome-based diagnosis of inflammatory bowel disease]. Frontiers in Genetics (2022)]
- .alpha50[.milapalered[Biological sequence design with GFlowNets]. ICML (2022)]
- .alpha50[.milapalered[Diversifying Design of Nucleic Acid Aptamers Using Unsupervised Machine Learning]. Journal of Physical Chemistry B (2022)]
- .alpha50[.milapaleblue[PhAST: Physics-Aware, Scalable, and Task-specific GNNs for accelerated catalyst design]. Under review]
- .alpha50[.milapalegreen[Hard-constrained deep learning for climate downscaling]. JMLR (2023)]
- .alpha50[.milapaleblue[GFlowNets for AI-driven] .milapalered[scientific discovery]. Digital Discovery (2023)]
- .alpha50[.milapalegreen[Multi-variable hard physical constraints for climate model downscaling]. AAAI FSS (2023)]
- .alpha50[.milapalegreen[Counting carbon: a survey of factors influencing the emissions of machine learning]. arXiv preprint (2023)]
- .alpha50[.milapalegreen[Fourier neural operators for arbitrary resolution climate data downscaling]. Under review]
- .alpha50[.milapalered[Multi-objective GFlowNets]. ICML (2023)]
- .alpha50[.milapaleblue[A theory of continuous] .milapalered[generative flow networks]. ICML (2023)]
- .alpha50[.milapaleblue[FAENet: Frame averaging equivariant GNN for materials modeling]. ICML (2023)]
- .alpha50[.milapaleblue[On the importance of catalyst-adsorbate 3D interactions for relaxed energy predictions]. AI4Mat Workshop NeurIPS (2023)]
- .alpha50[.milapalered[Towards equilibrium molecular conformation generation with GFlowNets]. Digital Discovery (2023)]
- .milapaleblue[Crystal-GFN: sampling crystals with desirable properties and constraints]. AI4Mat Workshop NeurIPS (2023)
- .milapalered[Multi-fidelity active learning] .milapaleblue[with GFlowNets]. RealML Workshop NeurIPS (2023)
]

---

## Outline

--

- Machine learning for scientific discoveries to tackle climate and health challenges

--
- Gentle introduction to GFlowNets and overview of contributions

--
- Crystal-GFN: materials discovery

--
- Multi-fidelity active learning: drug and materials discovery

--
- Challenges and perspectives

---

count: false
name: title
class: title, middle

### Machine learning for scientific discoveries

.center[![:scale 30%](../assets/images/slides/scientific-discovery/laboratory.png)]

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
### The potential on health

.context[Drug discovery and vaccine development play a crucial role in modern healthcare systems.]

.right-column-33[
.center[![:scale 100%](../assets/images/slides/drugs/who_amr.png)]
]

--

.left-column-66[
.highlight1[Bacterial antimicrobial resistance] contributed to 4.95 million deaths in 2019. .cite[World Health Organisation (WHO), 2023]
]

???

Antimicrobial resistance

- https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance
- https://www.who.int/news-room/feature-stories/detail/donors-making-a-difference--climate-change-and-its-impact-on-health
- https://www.who.int/news/item/31-10-2022-who-and-wmo-launch-a-new-knowledge-platform-for-climate-and-health
- https://www.who.int/news/item/08-02-2024-who-medically-important-antimicrobial-list-2024
- https://cdn.who.int/media/docs/default-source/gcp/who-mia-list-2024-lv.pdf?sfvrsn=3320dd3d_2
- https://www.who.int/publications/i/item/9789240047655

---

count: false

## Why scientific discovery?
### The potential on health

.context[Drug discovery and vaccine development play a crucial role in modern healthcare systems.]

.right-column-33[
.center[![:scale 100%](../assets/images/slides/drugs/who_amr.png)]
]

.left-column-66[
.highlight1[Bacterial antimicrobial resistance] contributed to 4.95 million deaths in 2019. .cite[World Health Organisation (WHO), 2023]

The World Bank estimates that antimicrobial resistance could result in .highlight1[one _trillion_ USD additional healthcare costs] by 2050.
]

---

count: false

## Why scientific discovery?
### The potential on health

.context[Drug discovery and vaccine development play a crucial role in modern healthcare systems.]

.right-column-33[
.center[![:scale 100%](../assets/images/slides/drugs/who_amr.png)]
]

.left-column-66[
.highlight1[Bacterial antimicrobial resistance] contributed to 4.95 million deaths in 2019. .cite[World Health Organisation (WHO), 2023]

The World Bank estimates that antimicrobial resistance could result in .highlight1[one _trillion_ USD additional healthcare costs] by 2050.

WHO's latest annual review identified 27 antibiotics in clinical development that address WHO bacterial priority pathogens, of which .highlight1[only 6 were classified as innovative].
]

---

count: false

## Why scientific discovery?
### The potential on health

.context[Drug discovery and vaccine development play a crucial role in modern healthcare systems.]

.right-column-33[
.center[
<figure>
	<img src="../assets/images/slides/drugs/who_notimetowait.png" alt="No time to wait" style="width: 55%">
  <figcaption><small>"No time to wait". Source: <a href="https://www.who.int/docs/default-source/documents/no-time-to-wait-securing-the-future-from-drug-resistant-infections-en.pdf">WHO</a>.</small></figcaption>
</figure>
]
]

.left-column-66[
.highlight1[Bacterial antimicrobial resistance] contributed to 4.95 million deaths in 2019. .cite[World Health Organisation (WHO), 2023]

The World Bank estimates that antimicrobial resistance could result in .highlight1[one _trillion_ USD additional healthcare costs] by 2050.

WHO's latest annual review identified 27 antibiotics in clinical development that address WHO bacterial priority pathogens, of which .highlight1[only 6 were classified as innovative].
]

.full-width[
.conclusion["No time to wait". Alongside other necessary actions, drug discovery plays a key role in tackling the antimicrobial resistance global threat.]
]

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

.conclusion[An active learning pipeline with generative machine learning could provide _exponential_ gains.]
]

---

count: false
name: title
class: title, middle

### The challenge of scientific discoveries

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

## Machine learning for scientific discovery
### Challenges and limitations of existing methods

--

.highlight1[Challenge]: very large and high-dimensional search spaces.

--

&rarr; Need for .highlight2[efficient search and generalisation] of underlying structure.

--

.highlight1[Challenge]: underspecification of objective functions or metrics.

--

&rarr; Need for .highlight2[diverse] candidates.

--

.highlight1[Limitation]: Reinforcement learning excels at optimisation in complex spaces but tends to lack diversity.

--
.highlight1[Limitation]: Markov chain Monte Carlo (MCMC) can _sample_ from a distribution (diversity) but struggles at mode mixing in high dimensions.

--

&rarr; Need to .highlight2[combine all of the above]: sampling from complex, high-dimensional distributions.

--

.conclusion[Generative flow networks (GFlowNets) address these challenges.]

---

count: false
name: title
class: title, middle

### A gentle introduction to GFlowNets

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

.center[![:scale 22%](../assets/images/slides/gflownet/reward_landscape.png)]
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

count: false

## 2. Compositionality
### Sample generation process

.context35[Sampling _directly_ from a complex, high-dimensional distribution is difficult.]

For the Tetris problem, a meaningful decomposition of the samples is .highlight1[adding one piece to the board at a time].

.left-column[.center[![:scale 85%](../assets/images/slides/tetris/tree/tree_24.png)]]

.right-column[
Objects $x \in \cal X$ are constructed through a sequence of steps $\tau$ from an .highlight1[action space $\cal A$].
]

--

.right-column[
At each step of the .highlight1[trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots \rightarrow s_f)$], we get a partially constructed object $s$ in .highlight1[state space $\cal S$].
]

--

.right-column[
.conclusion[These ideas and terminology is reminiscent of reinforcement learning (RL).]
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

## GFlowNets
### Systematic generalisation

.context[We have hypothesised that thanks to compositionality and deep learning, GFlowNets may generalise seen patterns to unseen regions of the sample space.]

<br>
.center[![:scale 35%](../assets/images/slides/gflownet/mode_generalization.png)]

---

count: false

## Results
### Systematic generalisation

.context[We have hypothesised that thanks to compositionality and deep learning, GFlowNets may generalise seen patterns to unseen regions of the sample space.]

A Tetris GFlowNet is trained by excluding samples with pieces in the upper half from the training batches.

.left-column[
.center[![:scale 75%](../assets/images/slides/tetris/4x8_notophalf_bottomhalf.png)

Training samples
]
]

--

.right-column[
.center[![:scale 75%](../assets/images/slides/tetris/4x8_notophalf_best.png)

GFN samples post-training
]
]

.references[
Manuscript in preparation.
]

---

##  Contributions to GFlowNets extensions and applications
### Multi-objective GFlowNets

Extension of GFlowNets to handle multi-objective optimisation and not only cover the Pareto front but also sample diverse objects at each point in the Pareto front.

.center[![:scale 30%](../assets/images/slides/gflownet/mogfn_pareto_front.png)]

.references[
Jain et al. [Multi-Objective GFlowNets](https://arxiv.org/abs/2210.12765), ICML, 2023. .highlight2[(co-authored)]
]

---

##  Contributions to GFlowNets extensions and applications
### Continuous GFlowNets

Generalisation of the theory and implementation of GFlowNets to encompass both discrete and continuous or hybrid state spaces. 

.center[![:scale 40%](../assets/images/slides/gflownet/cube2d/allvalid.gif)]

.references[
Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. .highlight2[(co-authored)]
]

---

##  Contributions to GFlowNets extensions and applications
### Molecular conformation generation

A continuous GFlowNets algorithm for sampling conformations of small molecules from the Boltzmann distribution, as determined by the molecule’s energy.

.references[
Volokhova, Koziarski et al. [Towards equilibrium molecular conformation generation with GFlowNets](https://arxiv.org/abs/2310.14782), Digital Discovery, 2024. .highlight2[(co-authored)]
]

.center[![:scale 100%](../assets/images/slides/conformers/schematic.png)]

---

count: false

##  Contributions to GFlowNets extensions and applications
### Molecular conformation generation

We have proposed a continuous GFlowNets algorithm for sampling conformations of small molecules from the Boltzmann distribution, as determined by the molecule’s energy.

.references[
Volokhova, Koziarski et al. [Towards equilibrium molecular conformation generation with GFlowNets](https://arxiv.org/abs/2310.14782), Digital Discovery, 2024. .highlight2[(co-authored)]
]

.left-column[.center[
  <figure>
    <img src="../assets/images/slides/gflownet/kde_reward_molecule.png" alt="Alanine dipeptide's energy landscape (KDE)" style="width: 60%">
    <figcaption>Alanine dipeptide's energy landscape (KDE)</figcaption>
  </figure>
]]

--

.right-column[.center[
  <figure>
    <img src="../assets/images/slides/gflownet/kde_gfn_molecule.png" alt="GFlowNet's learnt distribution (KDE)" style="width: 60%">
    <figcaption>GFlowNet's learnt distribution (KDE)</figcaption>
  </figure>
]]

---

##  Contributions to GFlowNets extensions and applications
### Biological sequence design

An active learning algorithm with GFlowNets as a sampler of biological sequence design (DNA, antimicrobial peptides, proteins) with desirable properties.

.center[![:scale 45%](../assets/images/slides/dna/dna_helix_annotated.png)]

.left-column-66[
.dnag[`G`].dnaa[`A`].dnag[`G`].dnag[`G`].dnag[`G`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnag[`G`].dnag[`G`].dnat[`T`].dnaa[`A`].dnac[`C`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`]<br>
.dnat[`T`].dnac[`C`].dnaa[`A`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnac[`C`].dnag[`G`].dnaa[`A`].dnag[`G`].dnac[`C`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnat[`T`].dnag[`G`].dnat[`T`].dnaa[`A`].dnag[`G`].dnag[`G`].dnac[`C`].dnaa[`A`].dnag[`G`].dnac[`C`].dnag[`G`].dnat[`T`].dnac[`C`].dnac[`C`].dnat[`T`].dnaa[`A`].dnac[`C`].dnac[`C`].dnag[`G`].dnat[`T`].dnat[`T`].dnac[`C`].dnag[`G`]<br>
.dnac[`C`].dnat[`T`].dnaa[`A`].dnac[`C`].dnag[`G`].dnac[`C`].dnag[`G`].dnat[`T`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnat[`T`].dnat[`T`].dnac[`C`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`]<br>
.dnat[`T`].dnat[`T`].dnag[`G`].dnac[`C`].dnaa[`A`].dnag[`G`].dnaa[`A`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnag[`G`].dnac[`C`].dnag[`G`].dnac[`C`].dnaa[`A`].dnat[`T`].dnag[`G`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnat[`T`].dnag[`G`].dnag[`G`].dnag[`G`].dnag[`G`].dnat[`T`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnaa[`A`].dnag[`G`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnat[`T`].dnat[`T`].dnag[`G`].dnaa[`A`].dnat[`T`].dnaa[`A`].dnaa[`A`].dnaa[`A`].dnac[`C`].dnaa[`A`]<br>
.dnag[`G`].dnac[`C`].dnat[`T`].dnac[`C`].dnag[`G`].dnac[`C`].dnat[`T`].dnat[`T`].dnaa[`A`].dnag[`G`].dnag[`G`].dnag[`G`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnac[`C`].dnat[`T`].dnac[`C`].dnac[`C`].dnat[`T`].dnac[`C`].dnat[`T`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnat[`T`].dnag[`G`].dnat[`T`].dnat[`T`].dnac[`C`].dnaa[`A`].dnat[`T`].dnac[`C`].dnag[`G`].dnaa[`A`].dnaa[`A`].dnat[`T`].dnag[`G`].dnag[`G`].dnaa[`A`].dnag[`G`].dnat[`T`].dnag[`G`]<br>
]

.references[
Jain et al. [Biological Sequence Design with GFlowNets](https://arxiv.org/abs/2203.04115), ICML, 2022. .highlight2[(co-authored)]
]

---

##  Contributions to GFlowNets extensions and applications
### Review paper

A review of the potential of GFlowNets for AI-driven scientific discoveries.

.center[![:scale 60%](../assets/images/slides/drugs/gfn_molecules.png)]

.references[
Jain et al. [GFlowNets for AI-Driven Scientific Discovery](https://pubs.rsc.org/en/content/articlelanding/2023/dd/d3dd00002h). Digital Discovery, Royal Society of Chemistry, 2023. .highlight2[(co-authored)]
]

---

## GFlowNet Python package

I have led the development of an open sourced GFlowNet package, together with Mila collaborators: Nikita Saxena, Alexandra Volokhova, Michał Koziarski, Divya Sharma, Pierre Luc Carrier, Victor Schmidt, Joseph Viviano.

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

--

* A key design principle is the simplicity to create new environments.
* Current environments: Tetris, hyper-grid, hyper-cube, hyper-torus, scrabble, crystals, molecules, DNA...
* Discrete and continuous environments, multiple loss functions, etc.
* Visualisation of results on WandDB

---

count: false

## GFlowNet Python package

I have led the development of an open sourced GFlowNet package, together with Mila collaborators: Nikita Saxena, Alexandra Volokhova, Michał Koziarski, Divya Sharma, Pierre Luc Carrier Victor Schmidt, Joseph Viviano.

.highlight2[Open source GFlowNet implementation]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

Research articles supported by this GFlowNet package:

.smaller[
* Lahlou et al. [A Theory of Continuous Generative Flow Networks](https://arxiv.org/abs/2301.12594), ICML, 2023. 
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). RealML, NeurIPS 2023.
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
* Volokhova, Koziarski et al. [Towards equilibrium molecular conformation generation with GFlowNets](https://arxiv.org/abs/2310.14782). Digital Discovery, NeurIPS 2023.
* Several other ongoing projects...
]

---

count: false
name: title
class: title, middle

## Crystal-GFN: GFlowNets for materials discovery

Mila AI4Science: Alex Hernandez-Garcia, Alexandre Duval, Alexandra Volokhova, Yoshua Bengio, Divya Sharma, Pierre Luc Carrier, Yasmine Benabed, Michał Koziarski, Victor Schmidt, Pierre-Paul De Breuck

.smaller70[Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight) / under review.]

.center[![:scale 20%](../assets/images/slides/materials/lithium_oxide_crystal.png)]


---

## What are crystals?

Definition: A crystal or crystalline solid is a solid material whose constituents (such as atoms, molecules, or ions) are arranged in a .highlight1[highly ordered microscopic structure], forming .highlight1[a crystal lattice that extends in all directions].

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

## Why do we care about crystals?

.context35[Materials discovery can help reduce greenhouse gas emissions in multiple sectors.]

--

<br>
Many solid state materials are crystal structures and they are a core component of:

* Electrocatalysts for fuel cells, hydrogen storage, industrial chemical reactions, carbon capture, etc.
* Solid electrolytes for batteries.
* Thin film materials for photovoltaics.
* ...

--

However, .highlight1[material modelling is very challenging]:
* Limited data: only about 200 K known inorganic materials, but potentially $10^{180}$ possible stable materials (for reference: more than a billion molecules are known)
* Sparsity: .highlight2[stable materials] only exist in a low-dimensional subspace of all possible 3D arrangements.

--

.conclusion[There is a need for efficient generative models of crystal structures.]

---

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

--

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

--

.highlight2[Space group]: symmetry operations of a repeating pattern in space that leave the pattern unchanged.

--

.center[![:scale 20%](../assets/images/slides/crystals/spacegroups/p1.jpg)]

---

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.highlight2[Space group]: symmetry operations of a repeating pattern in space that leave the pattern unchanged.

.center[![:scale 30%](../assets/images/slides/crystals/spacegroups/p2.jpg)]

---

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.highlight2[Space group]: symmetry operations of a repeating pattern in space that leave the pattern unchanged.

.center[![:scale 30%](../assets/images/slides/crystals/spacegroups/cm.jpg)]

---

count: false

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.highlight2[Space group]: symmetry operations of a repeating pattern in space that leave the pattern unchanged.

.center[![:scale 30%](../assets/images/slides/crystals/spacegroups/p6m.png)]

---

count: false

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.highlight2[Space group]: symmetry operations of a repeating pattern in space that leave the pattern unchanged.

- There are 17 symmetry groups in 2 dimensions (wallpaper groups).
- There are 230 space groups in 3 dimensions.

---

count: false

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.highlight2[Lattice system]: all 230 space groups can be classified into one of the 7 lattices.

.center[
<div style="display: flex">
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/triclinic.png" alt="Triclinic" style="width: 100%">
    <figcaption><small>Triclinic</small></figcaption>
  </figure>
  </div>
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/monoclinic.png" alt="Monoclinic" style="width: 100%">
    <figcaption><small>Monoclinic</small></figcaption>
  </figure>
  </div>
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/orthorhombic.png" alt="Orthorhombic" style="width: 100%">
    <figcaption><small>Orthorhombic</small></figcaption>
  </figure>
  </div>
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/tetragonal.png" alt="Tetragonal" style="width: 100%">
    <figcaption><small>Tetragonal</small></figcaption>
  </figure>
  </div>
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/rhombohedral.png" alt="Rhombohedral" style="width: 100%">
    <figcaption><small>Rhombohedral</small></figcaption>
  </figure>
  </div>
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/hexagonal.png" alt="Hexagonal" style="width: 100%">
    <figcaption><small>Hexagonal</small></figcaption>
  </figure>
  </div>
  <div style="flex: 14%;">
  <figure>
      <img src="../assets/images/slides/crystals/lattices/cubic.png" alt="Cubic" style="width: 100%">
    <figcaption><small>Cubic</small></figcaption>
  </figure>
  </div>
</div>
]

---

count: false

## A domain-inspired approach
### Crystal structure parameters

.context[Most previous works tackle crystal structure generation in the space of atomic coordinates.]

Instead of optimising the atom positions by learning from a small data set, we draw .highlight1[inspiration from theoretical crystallography to sample crystals in a lower-dimensional space of crystal structure parameters].

.highlight2[Lattice parameters]: The lattice's size and shape is characterised by 6 parameters: .highlight1[$a, b, c, \alpha, \beta, \gamma$].

.center[![:scale 25%](../assets/images/slides/crystals/unit_cell.png)]

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

count: false

## Crystal-GFlowNet
### Schematic

.center[![:scale 100%](../assets/images/slides/crystals/crystalgfn_all.png)]

.conclusion[Crystal-GFN binds multiple spaces representing crystallographic and material properties, setting intra- and inter-space hard constraints in the generation process.]

---

## Crystal-GFlowNet
### Material properties

We can train a Crystal-GFN with any reward function, provided it is computationally tractable. Therefore, we can use it to .highlight1[generate materials with different properties]. 
--
We have tested the following properties:

- .highlight2[Formation energy] per atom [eV/atom], via a pre-trained machine learning model: indicative of the material's stability.

--
- .highlight2[Electronic band gap] [eV] (squared distance to a target value, 1.34 eV), via a pre-trained machine learning model: relevant in photovoltaics, for instance.

--
- Unit cell .highlight2[density] [g/cm<sup>3</sup>]: convenient as a proof of concept because we can calculate it _exactly_ from the GFN outputs.

---

## Results
### Formation energy

.context35[The formation energy correlates with stability. The lower, the better.]

.center[![:scale 70%](../assets/images/slides/crystals/eform_distr_1.png)]

---

count: false

## Results
### Formation energy

.context35[The formation energy correlates with stability. The lower, the better.]

.center[![:scale 70%](../assets/images/slides/crystals/eform_distr_2.png)]

---

count: false

## Results
### Formation energy

.context35[The formation energy correlates with stability. The lower, the better.]

.center[![:scale 70%](../assets/images/slides/crystals/eform_distr_3.png)]

---

count: false

## Results
### Formation energy

.context35[The formation energy correlates with stability. The lower, the better.]

.center[![:scale 70%](../assets/images/slides/crystals/eform_distr_4.png)]

---

count: false

## Results
### Formation energy

.context[.highlight1[After training, Crystal-GFN samples structures with even lower formation energy [eV/atom] than the validation set.]]

.center[![:scale 70%](../assets/images/slides/crystals/eform_distr_4.png)]

---

## Results
### Band gap

.context35[We aimed at sampling structures with band gap close to 1.34 eV.]

.center[![:scale 70%](../assets/images/slides/crystals/bg_distr_1.png)]

---

count: false

## Results
### Band gap

.context35[We aimed at sampling structures with band gap close to 1.34 eV.]

.center[![:scale 70%](../assets/images/slides/crystals/bg_distr_2.png)]

---

count: false

## Results
### Band gap

.context35[We aimed at sampling structures with band gap close to 1.34 eV.]

.center[![:scale 70%](../assets/images/slides/crystals/bg_distr_3.png)]

---

count: false

## Results
### Band gap

.context35[We aimed at sampling structures with band gap close to 1.34 eV.]

.center[![:scale 70%](../assets/images/slides/crystals/bg_distr_4.png)]

---

count: false

## Results
### Band gap

.context[.highlight1[After training, Crystal-GFN samples structures with band gap [eV] around the target value.]]

.center[![:scale 70%](../assets/images/slides/crystals/bg_distr_4.png)]

---

## Results
### Diversity

.context[.highlight2[Diversity] is key in materials discovery.]

Analysis of 10,000 sampled crystals and the top-100 with lowest formation energy.

--

- All 10,000 samples are unique.

--
- All crystal systems, lattice systems and point symmetries found in the 10,000 samples.
    - 4 out of 8 crystal-lattice systems in the top-100.
    - 4 out of the 5 point symmetries in the top-100.
--
- All 22 elements found in the 10,000 samples.
    - 15 out of 22 elements in the top-100.
--
- 73 out of 113 space groups (65 %) found in the 10,000 samples
    - 19 out of 113 space groups in the top-100.

---

## Crystal-GFN
### Summary and conclusions

.references[
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
]

* Discovering new crystal structures with desirable properties can help mitigate the climate crisis.

--
* There are infinitely many conceivable crystals. Only a few are stable. Only a few stable crystals have interesting properties. This is a really hard problem.

--
* Crystal-GFN introduces .highlight1[physicochemical and structural constraints], reducing the search space.
    * Crystal-GFN was trained in 30 hours in a CPU-only machine.
--
* Our results show that we can generate .highlight1[diverse, high scoring samples with the desired constraints].

--
* The .highlight1[framework can be flexibly extended] with more constraints, crystal structure descriptors (atomic positions) and other properties. 

---

## FAENet

.orange[Slide about FAENet]

- Efficient proxy for electrocatalyst
- Show scientific discovery loop figure to illustrate present and future work and as a bridge to multi-fidelity.

---

name: title
class: title, middle

## Multi-fidelity active learning

Nikita Saxena, Moksh Jain, Cheng-Hao Liu, Yoshua Bengio

.smaller[[Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). RealML, NeurIPS 2023 / under review.]

.center[![:scale 30%](../assets/images/slides/mfal/multiple_oracles.png)]

---

## Why multi-fidelity?

.context35[We had described the scientific discovery loop as a cycle with one single oracle.]

<br><br>
.center[![:scale 50%](../assets/images/slides/scientific-discovery/loop_4.png)]

---

count: false

## Why multi-fidelity?

.context35[However, in practice, multiple oracles (models) of different fidelity and cost are available in scientific applications.]

<br><br>
.center[![:scale 60%](../assets/images/slides/scientific-discovery/loop_4_mf.png)]

---

count: false

## Why multi-fidelity?

.context[In many scientific applications we have access to multiple approximations of the objective function.]

.left-column[
.center[![:scale 90%](../assets/images/slides/scientific-discovery/loop_4_mf.png)]
]

.right-column[
For example, in .highlight1[material discovery]:

* .highlight1[Synthesis] of a material and characterisation of a property in the lab
* Quantum mechanic .highlight1[simulations] to estimate the property
* .highlight1[Machine learning] models trained to predict the property
]

--

.conclusion[However, current machine learning methods cannot efficiently leverage the availability of multiple oracles and multi-fidelity data. Especially with .highlight1[structured, large, high-dimensional search spaces].]

---

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_0.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_1.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_2.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_3.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_4.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_5.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_6.png)]

---

count: false

## Our multi-fidelity active learning algorithm

.center[![:scale 100%](../assets/images/slides/mfal/mfal_7.png)]

---

count: false

## Our multi-fidelity active learning algorithm

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

## Multi-fidelity components
### Surrogate models

.context[A multi-fidelity active learning algorithm consists of multiple components that need to be adapted.]

--

* Small (synthetic) tasks: exact Gaussian Processes

--
* Larger-scale, benchmark tasks: .highlight1[Deep Kernel Learning with stochastic variational Gaussian processes]

.references[
* Wilson, Hu et al. [Deep Kernel Learning](https://arxiv.org/abs/1511.02222), AISTATS, 2016.
* Wu et al. [Practical multi-fidelity Bayesian optimization for hyperparameter tuning](https://arxiv.org/abs/1903.04703) , UAI, 2019.
]

--

Multi-fidelity kernel learning:

$$K(x, \tilde{x}, m, \tilde{m}) = K_1(x, \tilde{x}) \times K_2(m, \tilde{m})$$

* $K_1$: Gaussian kernel
* $K_2$: Downsampling kernel

---

## Multi-fidelity components
### Aquisition function

.context[A multi-fidelity active learning algorithm consists of multiple components that need to be adapted.]

--

#### Maximum Entropy Search (MES)

--

MES it aims to maximise the .highlight1[mutual information] between .highlight1[the value of the objective function $f$] when choosing point *x* and the .highlight1[maximum of the objective function, $f^{\star}$] (instead of considering the `arg max`).

--

The multi-fidelity variant is designed to select the .highlight1[candidate $x$ and the fidelity $m$ that maximise the mutual information] between $f_M^\star$ and the oracle at fidelity $m$, $f_m$ , weighted by the cost of the oracle $\lambda_m$.

$$\alpha(x, m) = \frac{1}{\lambda_{m}} I(f_M^\star; f_m | \mathcal{D})$$

.references[
* Moss et al. [GIBBON: General-purpose Information-Based Bayesian OptimisatioN](https://arxiv.org/abs/2102.03324), JMLR, 2021.
]

---

## Multi-fidelity components
## MF-GFlowNets

.context[A multi-fidelity active learning algorithm consists of multiple components that need to be adapted.]

--

Given a baseline GFlowNet with state space $\mathcal{S}$ and action space $\mathcal{A}$, .highlight1[we augment the state space with a new dimension for the fidelity] $\mathcal{M'} = \{0, 1, 2, \ldots, M\}$ (including $m = 0$, which corresponds to unset fidelity). 

--

The set of allowed transitions $\mathcal{A}_M$ is augmented such that a fidelity $m > 0$ of a trajectory (sample) must be selected once, and only once, from any intermediate state. This is meant to provide flexibility and improve generalisation.

--

Finished trajectories are the concatenation of an object $x$ and the fidelity $m$.

--

GFlowNet is trained with the acquisition function as reward: $R(x) = g(\alpha(x, m))$.

---

## Experiments
### Baselines

.context[This is the .highlight1[first multi-fidelity active learning algorithm tested on biological sequence design and molecular design problems]. There did not exist baselines from the literature.]

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

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

--

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_1.png)]

---

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_2.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_3.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_4.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_5.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_6.png)]

---

count: false

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
- GFlowNet adds one SELFIES token (out of 26) at a time with variable length up to 64 ($|\mathcal{X}| > 26^{64}$). 
- Property: Adiabatic electron affinity (EA). Relevant in organic semiconductors, photoredox catalysis and organometallic synthesis.

.center[![:scale 50%](../assets/images/slides/mfal/molecules_ea_7.png)]

---

## Small molecules

- Realistic experiments with experimental oracles and costs that reflect the computational demands (1, 3, 7).
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

---

count: false

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid_6.png)]

---

## Multi-fidelity active learning with GFlowNets
### Summary and conclusions

.references[
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://arxiv.org/abs/2306.11715). RealML, NeurIPS 2023.
]

* Current AI tools are not enough to truly utilize all the information and resources at our disposal.

--
* AI-driven scientific discovery demands learning methods that can .highlight1[efficiently discover diverse candidates in combinatorially large, high-dimensional search spaces].

--
* .highlight1[Multi-fidelity active learning with GFlowNets] enables .highlight1[cost-effective exploration] of large, high-dimensional and structured spaces, and discovers multiple, diverse modes of black-box score functions.

--
* This is to our knowledge the first algorithm capable of effectively leveraging multi-fidelity oracles to discover diverse biological sequences and molecules.

---

name: title
class: title, middle

## Overall summary and conclusions

.center[![:scale 30%](../assets/images/slides/misc/conclusion.png)]

---

## Summary and conclusions

- Tackling the climate crisis _is_ tackling health challenges.

--
- Machine learning has great potential to accelerate scientific discoveries. There are strong synergies between materials discovery and drug discovery methods.

--
- With GFlowNets, we are able to address some important challenges: discover diverse candidates in very large, complex search spaces.

--
- Crystal-GFN rethinks crystal structure generation by introducing domain knowledge and hard constraints to discover materials with desirable properties.

--
- Our multi-fidelity active learning algorithm effectively leverages the availability of multiple oracles for the first time for certain scientific discovery problems.

--
- Machine learning has a diversity of other applications for health and climate: raising awareness, climate modelling...

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
