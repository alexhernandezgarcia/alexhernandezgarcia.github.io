---
layout: slides_mila_stork
title: Deep active learning for DNA aptamer design
---

name: title
class: title, middle

## Deep active learning for DNA aptamer design

Alex Hernández-García (he/il/él)

.turquoise[Samsung-Mila-NYU Workshop · Online · Nov. 3rd 2021]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="http://wimlds.org/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="http://wimlds.org/"><img src="../assets/images/slides/logos/mcgill.png" alt="McGill" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

---

## Collaboration

.center[
![:scale 40%](../assets/images/slides/people/dna.png)
]

* .bigger[[Michael Kilgour](https://sites.google.com/view/michael-kilgour/home)] (**lead**), Postdoc at NYU, formerly McGill
* Danny Salem, University of Ottawa
* Tao Liu, McGill
* [Miroslava Cuperlovic-Culf](https://med.uottawa.ca/bmi/en/people/cuperlovic-culf-miroslava), University of Ottawa
* [Yoshua Bengio](https://yoshuabengio.org/), Professor at UdeM and Mila
* [Lena Simine](https://www.mcgill.ca/chemistry/faculty/lena-simine), Professor at McGill, Department of Chemistry

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="http://wimlds.org/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="http://wimlds.org/"><img src="../assets/images/slides/logos/mcgill.png" alt="McGill" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
]

---

## Motivation
### DNA aptamers

.context[What are DNA aptamers and why do we care?]

--

* DNA aptamers are short, single-stranded nucleotide (ssDNA) sequences.
--

* DNA aptamers have multiple applications as .highlight1[aptasensors] .cite[([Kilgour et al., 2021](https://chemrxiv.org/engage/chemrxiv/article-details/60cbcb1d461f5627524764ab))]:
  * Antibiotics .cite[([Mehlhorn et al., 2018](https://www.mdpi.com/2079-6374/8/2/54))]
  * Neurotransmitters .cite[([Sinha et al., 2020](https://sci-hub.st/https://link.springer.com/article/10.1007%2Fs12038-020-0017-x))]
  * Steroids .cite[([Ebrahimi et al., 2021](https://sci-hub.st/https://onlinelibrary.wiley.com/doi/epdf/10.1002/anie.202103440))]
  * Metals .cite[([Zhou et al., 2017](https://pubs.acs.org/doi/10.1021/acs.chemrev.7b00063))]
  * Proteins .cite[([Kirby et al., 2004](https://sci-hub.st/https://pubs.acs.org/doi/pdf/10.1021/ac049858n))]
  * Adenosine triphosphate .cite[([Huizenga et al., 1995](https://sci-hub.st/10.1021/bi00002a033))]
--

* Aptasensors are .highlight1[stable and selective] in crowded biochemical environments. 
--

* Designing aptamers that selectively and reliably bind a target analyte is highly non-trivial.

--

.conclusion[Improving the pipeline for DNA aptamers design can potentially impact a wide range of applications.]

---

## Motivation
### DNA aptamer design

.context[The traditional pipeline]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

.left-column-33[
The .highlight1[traditional pipeline] for DNA aptamer design (as other domains of scientific discovery):
* relies on .highlight1[highly specialised human expertise],
* it is .highlight1[time-consuming] and
* .highlight1[financially and computationally expensive].
]

---

count: false

## Motivation
### DNA aptamer design

.context[Machine learning in the loop]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries
]

---

count: false

## Motivation
### DNA aptamer design

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

## Motivation
### DNA aptamer design

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

## Motivation
### DNA aptamer design

.context[Can we do better than _linear_? An agent in the loop]

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[A successful active learning pipeline with an ML agent in the loop can provide _exponential_ gains.]
]


