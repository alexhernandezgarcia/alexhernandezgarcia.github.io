---
layout: slides_unserdialog
title: "ThisClimateDoesNotExist.com: Künstliche Intelligenz gegen Klimawandel"
---

name: title
class: title, middle

## [ThisClimateDoesNotExist.com](https://thisclimatedoesnotexist.com/):
### Erhöhung des Klimabewussteins durch KI-Flutprojektionen

.bigger[Alex Hernández-García (he/er/il/él)]

Victor Schmidt, Sasha Luccioni, Yoshua Bengio et al.

.turquoise[Unser Dialog · 29. Oktober 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 5em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

---

## Mitwirkende

<br>
![:scale 100%](../assets/images/slides/people/vicc-2.png)

Victor Schmidt, Alexandra Sasha Luccioni, Mélisande Teng, Tianyu Zhang, Alexia Reynaud, Sunand Raghupathi, Vahe Vardanyan, Yoshua Bengio, und viele weitere.

<br><br><br><br>
.conclusion[Die Arbeit, die in diesem Vortrag vorgestellt wird, ist die gemeinsame Anstrengung eines großen und interdisziplinären Teams.]

---

## Bildliche Auswirkungen des Klimawandels auf Straßenfotos

.center[
![:scale 90%](../assets/images/slides/vicc/flood_wide.jpg)
![:scale 90%](../assets/images/slides/vicc/fire_wide.jpg)
![:scale 90%](../assets/images/slides/vicc/smog_wide.jpg)
]

---

## Bildliche Auswirkungen des Klimawandels auf Straßenfotos
### Warum?

--

Es besteht ein Missverhältnis zwischen der Dringlichkeit und dem Ausmaß der Klimakrise und der Besorgnis der Menschen darüber.

.center[
<figure>
	<img src="../assets/images/slides/climatechange/concern_co2.png" alt="High CO2 emitters are less intensely concerned about climate change" style="width: 40%">
  .smaller[<figcaption>Stokes et al., <a href="https://www.pewresearch.org/global/2015/11/05/1-concern-about-climate-change-and-its-consequences/">Global concern about climate change, broad support for limiting emissions</a>. Pew Research, 2015</figcaption>]
</figure>
]

---

## Bildliche Auswirkungen des Klimawandels auf Straßenfotos
### Warum?

Es besteht ein Missverhältnis zwischen der Dringlichkeit und dem Ausmaß der Klimakrise und der Besorgnis der Menschen darüber. .highlight1[_Warum?_]

--

* .highlight1[Psychologische Distanz]: 
> "_People struggle to engage with climate change because they perceive it as distant: temporally, geographically and/or socially. _" .cite[Stoknes, 2016]

.references[
* Stoknes, P. E. [Why the human brain ignores climate change—and what to do about it](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A1ef80b88-177c-4e5d-b879-d6d3a059c694). Environmental Reality: Rethinking the Options, 2016.
]

---

count: false

## Bildliche Auswirkungen des Klimawandels auf Straßenfotos
### Warum?

Es besteht ein Missverhältnis zwischen der Dringlichkeit und dem Ausmaß der Klimakrise und der Besorgnis der Menschen darüber. .highlight1[_Warum?_]

* .highlight1[Psychologische Distanz]: 
> "_People struggle to engage with climate change because they perceive it as distant: temporally, geographically and/or socially. _" .cite[Stoknes, 2016]
* .highlight1[Schwarzmalerei und Müdigkeit bei klischeehaften Botschaften]:
> "_[C]lichéd images of climate change [...]—such as ‘smokestacks’, deforestation, and polar bears on melting ice—were positively received [but] also produced a muted emotional response and often prompted cynicism._" .cite[Chapman et al., 2016]

.references[
* Stoknes, P. E. [Why the human brain ignores climate change—and what to do about it](https://documentcloud.adobe.com/link/track?uri=urn%3Aaaid%3Ascds%3AUS%3A1ef80b88-177c-4e5d-b879-d6d3a059c694). Environmental Reality: Rethinking the Options, 2016.
* Chapman, D. A. et al. [Climate visuals: A mixed methods investigation of public perceptions of climate images in three countries](https://sci-hub.st/https://www.sciencedirect.com/science/article/abs/pii/S095937801630351X). GCE, 2016.
]

---

## Unser Ziel
### .alpha0[Placeholder]

.context[Die Menschen empfinden die Gefahren des Klimawandels als zeitlich, geografisch und gesellschaftlich weit entfernt.]

--

.center[.bigger[.highlight1[Könnten wir den Menschen helfen, die Auswirkungen des Klimawandels in ihrem eigenen Hinterhof zu visualisieren?]]]

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
  <figcaption>Berlin, Deutschland</figcaption>
</figure>
]

---

count: false

## Unser Ziel
### Flut

.context[Die Menschen empfinden die Gefahren des Klimawandels als zeitlich, geografisch und gesellschaftlich weit entfernt.]

.center[.bigger[.highlight1[Könnten wir den Menschen helfen, die Auswirkungen des Klimawandels in ihrem eigenen Hinterhof zu visualisieren?]]]

.left-column[
<figure>
	<img src="../assets/images/slides/vicc/rachel_flood.gif" alt="Montreal, original image" style="width: 80%">
  <figcaption>Montréal, Québec, Canada</figcaption>
</figure>
]
.right-column[
<figure>
	<img src="../assets/images/slides/vicc/oppelner_flood.gif" alt="Berlin, original image" style="width: 80%">
  <figcaption>Berlin, Deutschland</figcaption>
</figure>
]
.left[
]
.right[
]

---

count: false

## Unser Ziel
### Großbrände

.context[Die Menschen empfinden die Gefahren des Klimawandels als zeitlich, geografisch und gesellschaftlich weit entfernt.]

.center[.bigger[.highlight1[Könnten wir den Menschen helfen, die Auswirkungen des Klimawandels in ihrem eigenen Hinterhof zu visualisieren?]]]

.left-column[
<figure>
	<img src="../assets/images/slides/vicc/rachel_fire.jpg" alt="Montreal, original image" style="width: 80%">
  <figcaption>Montréal, Québec, Canada</figcaption>
</figure>
]
.right-column[
<figure>
	<img src="../assets/images/slides/vicc/oppelner_fire.jpg" alt="Berlin, original image" style="width: 80%">
  <figcaption>Berlin, Deutschland</figcaption>
</figure>
]
.left[
]
.right[
]

---

count: false

## Unser Ziel
### Smog

.context[Die Menschen empfinden die Gefahren des Klimawandels als zeitlich, geografisch und gesellschaftlich weit entfernt.]

.center[.bigger[.highlight1[Könnten wir den Menschen helfen, die Auswirkungen des Klimawandels in ihrem eigenen Hinterhof zu visualisieren?]]]

.left-column[
<figure>
	<img src="../assets/images/slides/vicc/rachel_smog.jpg" alt="Montreal, original image" style="width: 80%">
  <figcaption>Montréal, Québec, Canada</figcaption>
</figure>
]
.right-column[
<figure>
	<img src="../assets/images/slides/vicc/oppelner_smog.jpg" alt="Berlin, original image" style="width: 80%">
  <figcaption>Berlin, Deutschland</figcaption>
</figure>
]
.left[
]
.right[
]

---

## Unser Ziel
### Eine Website zur Förderung des Engagements und Bewusstseins für den Klimawandel

.smaller[.context55[Die Teilnehmer:innen können nach einer Adresse ihrer Wahl suchen.]]

.center[![:scale 90%](../assets/images/slides/vicc/website_snapshot_address_mila.png)]

---

count: false

## Unser Ziel
### Eine Website zur Förderung des Engagements und Bewusstseins für den Klimawandel

.smaller[.context55[Sie erhalten eine KI-generierte Visualisierung auf einem Straßenfoto.]]

.center[![:scale 60%](../assets/images/slides/vicc/website_snapshot_viz_mila.png)]

---

count: false

## Unser Ziel
### Eine Website zur Förderung des Engagements und Bewusstseins für den Klimawandel

.smaller[.context55[Info über den Klimawandel und die Engagementmöglichkeiten.]]

.center[![:scale 70%](../assets/images/slides/vicc/website_snapshot_whatnow.png)]

---

## Warum Fluten, Größbrände, Smog?

--

.columns-3-left[
* Bei Sturzfluten sterben jährlich **5.000** Menschen
* Der Meeresspiegel wird bis zum Ende des Jahrhunderts voraussichtlich um **2 Meter** ansteigen
* Der Anstieg des Meeresspiegels könnte bis Ende 2050 das Leben von **1 Milliarde Menschen** beeinträchtigen
]

--

.columns-3-center[
* Bis zu **40 % des Amazonaswaldes** sind bedroht
* Im Jahr 2015 haben Waldbrände ca. **980000 km2** der weltweiten Waldfläche gebrannt
* Waldbrände emittierten im Jahr 2019 ca. **1,8 Gt CO₂**
]

--

.columns-3-right[
* Die Luftverschmutzung ist für ca. **4,2 Millionen** vorzeitige Todesfälle pro Jahr verantwortlich
* Die Luftverschmutzung ist für ca. **6 % des Todes** weltweit verantwortlich
* **91% der Bevölkerung** lebt an Orten, an denen die Luftverschmutzung Sicherheitsgrenzen erreicht
]

--

.full-width[
.conclusion[Floods, wildires and smog are some of the worst environmental hazards for humanity, and we can communicate their impacts visually.]
]

???

Global anthropogenic emissions in 2019 were estimated in 59 (±6.6±6.6) GtCO₂-eq.


---

count: false

## Probieren wir es aus!

.center[
.bigger[.bigger[[ThisClimateDoesNotExist.com](https://thisclimatedoesnotexist.com)]]

.bigger[.bigger[[CeClimatNExistePas.com](https://ceclimatnexistepas.com)]]
]

.center[Leider gibt's kein _DiesesKlimaGibtEsNicht.com_]
.smaller[.center[404 Page not found :(]]

???

https://thisclimatedoesnotexist.com/en/share/56d8058c-23d5-4083-b1b4-4afe6a5b2fe9
---

## Methoden
### _ClimateGAN_

.context55[Der Algorithmus musste realistische Überflutungen auf jedem Foto von Google Street View erzeugen zu können.]

--

.left-column-66[
Wichtigste Herausforderungen:

* Die visuelle Wahrnehmung reagiert empfindlich auf unrealistische Szenen:
    * Wassertextur (Reflexionen, Leuchtkraft usw.)
    * Geometrie der Szene (Kanten, Objekte, usw.)
    * Physik (Neigung, Blickwinkel, usw.)
* Der Algoritmus musste _in the wild_ gut funktionieren, deshalb mit mit einer Vielzahl unterschiedlicher Fotos.
* Wir mussten den Mangel an Trainingsdaten überwinden: Es gibt keinen Datensatz mit Fotos von _vor und nach der Flut_.
]
.right-column-33[
.center[
![:scale 90%](../assets/images/slides/vicc/placedesarts_flood.gif)
]
]

---

## Methoden
### _ClimateGAN_

.context55[Die Generation von fotorealistischen Überflutungen ist eine Herausforderung, da unsere Wahrnehmung sehr empfindlich auf Fehler reagiert und es fehlen Daten.]

--

.right-column[
![:scale 100%](../assets/images/slides/vicc/climategan-overview.png)
]
.left-column[
Hauptmerkmale:

* Eine simulierte virtuelle Welt, um Trainingsdaten zu erzeugen
* _Domain adaptation_, um den Unterschied zwischen simulierten und realen Fotos zu bewältigen
* Two-stage flood generation: _Masker_ + _Painter_
]
* Kombination von Tiefen- und semantischer Segmentierung zur Verbesserung der Vorhersage von Wassermasken
* _Conditional image generation_, um realistisches Wasser auf die vorhergesagte Maske zu malen

---

## ClimateGAN
### Simulated data

.context[We collected 1,200 photos of real floods and 5,500+ _non-flooded_ scenes to train our model. However, _real_ photos lack geometry and segmentation labels.]

We simulated a $1.5~km^2$ virtual world and generated 20,000 images that mimic Google Street View.

.center[![:scale 70%](../assets/images/slides/vicc/simworld_bird_eye.png)]

---

count: false

## ClimateGAN
### Simulated data

.context[We collected 1,200 photos of real floods and 5,500+ _non-flooded_ scenes to train our model. However, _real_ photos lack geometry and segmentation labels.]

We simulated a $1.5~km^2$ virtual world and generated 20,000 images that mimic Google Street View.

.center[![:scale 70%](../assets/images/slides/vicc/simdata.png)]

---

## ClimateGAN
### Masker + Painter

.center[![:scale 80%](../assets/images/slides/vicc/masker_painter_examples.png)]

---

## Future directions and limitations

* [_ThisClimateDoesNotExist.com_](https://thisclimatedoesnotexist.com) is not an exerise of climate prediction. There is no correlation between the consequence chosen and the address entered. Our algorithm applies a systematic transformation regardless of the address.
    * While this is in part a limitation, this allows us to simulate the impacts of climate change, at any location, regardless of the specific risk.
    * Still, it would be interesting to integrate climate prediction and modelling into our simulations, for other applications.
--
* Our algorithm systematically simulates the same level of water (about 1 metre). It would be interesting to allow for more flexible simulations.
    * An interesting application would be to make the simulations reflect the impacts of various climate actions.
--
* We are currently writing a manuscript with Prof. Erick Lachapelle (UdeM) and Thomas Bergeron (UoT) on a study of the effect of such personalised imagery in climate communication and willingness to action.

---

## To know more

Visit the website: [ThisClimateDoesNotExist.com](https://thisclimatedoesnotexist.com)

.center[![:scale 50%](../assets/images/slides/vicc/website_snapshot_home.png)]
    
Check the paper (ICLR 2022): [ClimateGAN: Raising Climate Change Awareness by Generating Images of Floods](https://arxiv.org/abs/2110.02871v1)

.center[![:scale 70%](../assets/images/slides/vicc/climategan_arxiv.png)]
    
---

name: title
class: title, middle

## Thank you!

.bigger[Alex Hernández-García (he/il/él)]

Victor Schmidt, Sasha Luccioni, Yoshua Bengio et al.

.turquoise[Journées de l'Optimisation · HEC Montréal · May. 16-18th 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 5em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

---

name: title
class: title, middle
count: false

.center[![:scale 30%](../assets/images/slides/vicc/placedesarts_flood.gif)]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 6em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec) | [@alexhdezgcia](https://twitter.com/alexhdezgcia)] [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)

---

name: title
class: title, middle

## Back-up slides

.turquoise[Journées de l'Optimisation · HEC Montréal · May. 16-18th 2022]

---

## ClimateGAN
### Masker

.left-column[
* Trained with _real_ and _simulated_ images
* Domain adaptation with ADVENT
* Depth decoder
* Segmentation decoder
* Mask decoder conditioned on depth and segmentation using SPADE
* All decoders trained simultaneously (multi-task learning)
]
.right-column[
![:scale 100%](../assets/images/slides/vicc/climategan-overview.png)
]

---

counter: false

## ClimateGAN
### Masker

.left-column[
* Trained with _real_ and _simulated_ images
* Domain adaptation with ADVENT
* Depth decoder
* Segmentation decoder
* Mask decoder conditioned on depth and segmentation using SPADE
* All decoders trained simultaneously (multi-task learning)
]
.right-column[
![:scale 90%](../assets/images/slides/vicc/masker_examples.png)
]

.conclusion[The masker receives an input image and outputs a binary mask of the water location, making intermediate predictions of depth and semantic segmentation.]

---

## ClimateGAN
### Painter

.left-column[
* Trained with 1,200 real images of floods
* The painter has to generate flooding water conditioned on the context of the image: sky, buildings, etc.
* Conditional image generation with GauGAN
* Conditioned on the Masked image
* SPADE blocks
]
.right-column[
![:scale 100%](../assets/images/slides/vicc/climategan-overview.png)
]

---

counter: false

## ClimateGAN
### Painter

.left-column[
* Trained with 1,200 real images of floods
* The painter has to generate flooding water conditioned on the context of the image: sky, buildings, etc.
* Conditional image generation with GauGAN
* Conditioned on the Masked image
* SPADE blocks
]
.right-column[
![:scale 45%](../assets/images/slides/vicc/painter_examples.png)
]

.conclusion[The painter receives an input image and a mask prediction and outputs an image of a flood that we combine with the masked input.]

---

## ClimateGAN
### Masker + Painter

.center[![:scale 80%](../assets/images/slides/vicc/masker_painter_examples.png)]

---

## ClimateGAN
### Comparison with other methods

.center[![:scale 95%](../assets/images/slides/vicc/climategan_comparisons.png)]

---

## ClimateGAN
### Human evaluation

.context[We asked human participants to assess the visual quality of the output images, compared to alternative algorithms.]

_Which image looks more like an actual flood?_

.center[![:scale 90%](../assets/images/slides/vicc/human_evaluation.png)]

.conclusion[The images from our algorithm were consistently judged as more realistic than those from other methods.]

---

## ClimateGAN
### Ablation study

.context[We systematically evaluated the contribution of several components of the algorithm.]

* We annotated the pixels a set of _test_ images as _must be flooded_, _cannot be flooded_ or _may be flooded_.
* We proposed 3 metrics to best evaluate the quality of the water masks: error, F05 score and _edge coherence_.

.center[![:scale 30%](../assets/images/slides/vicc/labels_ex.png)]

---

count: false

## ClimateGAN
### Ablation study

.context[We systematically evaluated the contribution of several components of the algorithm.]

* We analysed each component according to the three proposed metrics.

.center[![:scale 80%](../assets/images/slides/vicc/bootstrap_summary.png)]

.conclusion[5 of the 6 proposed components for the architecture proved to positively contribute to the performance.]
