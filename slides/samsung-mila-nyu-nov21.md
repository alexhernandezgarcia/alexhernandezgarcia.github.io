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

* [Michael Kilgour](https://sites.google.com/view/michael-kilgour/home), Postdoc at NYU, formerly McGill
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

* DNA aptamers are short, single-stranded nucleotide (ssDNA) sequences.
* DNA aptamers have multiple applications as _aptasensors_ .cite[(Kilgour et al., 2021)]:
    * Antibiotics (Mehlhorn et al., 2018)
    * Neurotransmitters (Sinha et al., 2020)
    * Steroids (Ebrahimi et al., 2021)
    * Metals (Ebrahimi et al., 2017)
    * Proteins (Kirby et al., 2004)
    * Adenosine triphosphate (Huizenga et al., 2004)

---

## Motivation
### DNA aptamers

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

---

count: false

## Motivation
### DNA aptamers

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

---

count: false

## Motivation
### DNA aptamers

.right-column-66[.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

