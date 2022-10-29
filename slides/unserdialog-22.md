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

.brightblue[Unser Dialog · 29. Oktober 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 5em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 5em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

???

Wo wird AI im Klimabereich eingesetzt?". Was kann man damit machen, was nicht, schadet KI dem Klima?

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
.conclusion[Fluten, Waldbrände und Smog sind einige der schlimmsten Umweltgefahren für die Menschheit. Wir können ihre Auswirkungen verbildlichen.]
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
### Simulierte Daten

.context[Wir haben 1.200 Fotos von echten Fluten und über 5.500 nicht geflutete Szenen gesammelt. Allerdings fehlen bei echten Fotos Geometrie- und Segmentierungs_labels_.]

<br>
Wir haben eine $1.5~km^2$ virtuelle Welt simuliert und 20.000 Bilder generiert, die Google Street View imitieren.

.center[![:scale 60%](../assets/images/slides/vicc/simworld_bird_eye.png)]

---

count: false

## ClimateGAN
### Simulierte Daten

.context[Wir haben 1.200 Fotos von echten Fluten und über 5.500 nicht geflutete Szenen gesammelt. Allerdings fehlen bei echten Fotos Geometrie- und Segmentierungs_labels_.]

<br>
Wir haben eine $1.5~km^2$ virtuelle Welt simuliert und 20.000 Bilder generiert, die Google Street View imitieren.

.center[![:scale 60%](../assets/images/slides/vicc/simdata.png)]

---

## ClimateGAN
### Masker + Painter

.center[![:scale 80%](../assets/images/slides/vicc/masker_painter_examples.png)]

---

## Future directions and limitations

* [_ThisClimateDoesNotExist.com_](https://thisclimatedoesnotexist.com) macht keine Klimavorhersage. Es gibt keine Korrelation zwischen der gewählten Auswirkung und der eingegebenen Adresse. Unser Algorithmus wendet unabhängig von der Adresse eine systematische Transformation an.
    * Dies ist zwar zum Teil eine Einschränkung, ermöglicht es uns aber, die Auswirkungen des Klimawandels an jedem beliebigen Ort zu simulieren, unabhängig vom spezifischen Risiko.
    * Dennoch wäre es für andere Anwendungen interessant, Klimaprognosen und -modelle in unsere Simulationen zu integrieren.
--
* Unser Algorithmus simuliert systematisch denselben Wasserstand (etwa 1 Meter). Es wäre interessant, flexiblere Simulationen zu ermöglichen.
    * Eine interessante Anwendung wäre es, in den Simulationen die Auswirkungen verschiedener Klimamaßnahmen zu berücksichtigen.
--
* Derzeit schreiben wir zusammen mit Prof. Erick Lachapelle (UdeM) und Thomas Bergeron (UoT) ein Artikel über eine Forchung zur Wirkung solcher personalisierten Bilder auf die Klimakommunikation und das Engagement.

---

## To know more

Die Website: [ThisClimateDoesNotExist.com](https://thisclimatedoesnotexist.com)

.center[![:scale 50%](../assets/images/slides/vicc/website_snapshot_home.png)]
    
Das Artikel: [ClimateGAN: Raising Climate Change Awareness by Generating Images of Floods](https://arxiv.org/abs/2110.02871v1) (ICLR 2022)

.center[![:scale 70%](../assets/images/slides/vicc/climategan_arxiv.png)]
    
---

name: title
class: title, middle

## Dankeschön!

.bigger[Alex Hernández-García (he/il/él)]

Victor Schmidt, Sasha Luccioni, Yoshua Bengio et al.

.brightblue[Unser Dialog · 29. Oktober 2022]

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

.brightblue[Unser Dialog · 29. Oktober 2022]

---

name: title
class: title, middle

## Künstliche Intelligenz für die Wissenschaftliche Entdeckung

.brightblue[Unser Dialog · 29. Oktober 2022]

---

## Motivation

.context["The time for action is now"]

> "Limiting global warming will require major transitions in the energy sector. This will involve a substantial reduction in fossil fuel use, widespread electrification, .highlight1[improved energy efficiency, and use of alternative fuels (such as hydrogen)]." .cite[IPCC Sixth Assessment Report, 2022]

> "Net-zero CO2 emissions from the industrial sector are challenging but possible. Reducing industry emissions will entail coordinated action throughout value chains to promote all mitigation options, including demand management, .highlight1[energy and materials efficiency, circular material flows], as well as abatement technologies and transformational changes in production processes." .cite[IPCC Sixth Assessment Report, 2022]

--

<br>

.conclusion[Mitigation of the climate crisis requires transformational changes in the energy and materials efficiency.]

---

## Motivation
### The potential of better materials

.smaller[.context55[The climate crisis demands more efficient materials.]]

According to the IPCC Sixth Assessment Report (2022), improving material efficiency can reduce 0.93 ($\pm 0.23$) GtCO₂-eq per year and fuel switching 2.1 ($\pm 0.52$) GtCO₂-eq per year, only in the industry sector. Carbon capture and storage can reduce 0.54 ($\pm 0.27$) GtCO₂-eq per year in the energy sector. †

.footnote[† Global anthropogenic emissions in 2019 were estimated in 59 ($\pm 6.6$) GtCO₂-eq.]

---

count: false

## Motivation
### The potential of better materials

.smaller[.context55[The climate crisis demands more efficient materials.]]

According to the IPCC Sixth Assessment Report (2022), improving material efficiency can reduce 0.93 ($\pm 0.23$) GtCO₂-eq per year and fuel switching 2.1 ($\pm 0.52$) GtCO₂-eq per year, only in the industry sector. Carbon capture and storage can reduce 0.54 ($\pm 0.27$) GtCO₂-eq per year in the energy sector. †

What are better, new materials needed for?

* Electrocatalysts for fuel cells, hydrogen storage, industrial chemical reactions, etc.
* Electrocatalysts for carbon capture.
* Solid electrolytes for batteries.
* Thin film materials for photovoltaics.
* Nanomaterials and electronics for healthcare.
* ...

.footnote[† Global anthropogenic emissions in 2019 were estimated in 59 ($\pm 6.6$) GtCO₂-eq.]

---

## Motivation
### Scientific discoveries in history

.smaller[.context55[Material discovery is a key ingredient for climate change mitigation.]]

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

## Motivation
### Scientific discoveries in history

.smaller[.context55[Material discovery is a key ingredient for climate change mitigation.]]

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

## Motivation
### Scientific discoveries in history

.smaller[.context55[Material discovery is a key ingredient for climate change mitigation.]]

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

## Motivation
### Scientific discoveries in history

.smaller[.context55[Material discovery is a key ingredient for climate change mitigation.]]

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

## Motivation
### Scientific discoveries in history

.smaller[.context55[Material discovery is a key ingredient for climate change mitigation.]]

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

## Motivation
### Scientific discoveries in history

.smaller[.context55[Material discovery is a key ingredient for climate change mitigation.]]

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

## AI for scientific discovery

.context[The traditional pipeline (no ML)]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_noml.png)]]

.left-column-33[
The .highlight1[traditional pipeline] for scientific discovery (paradigms 1--3):
* relies on .highlight1[highly specialised human expertise],
* it is .highlight1[time-consuming] and
* .highlight1[financially and computationally expensive].
]

---

count: false

## AI for scientific discovery

.context[Machine learning in the loop]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries
]

---

count: false

## AI for scientific discovery

.context[Machine learning in the loop]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_ml.png)]]

.left-column-33[
A .highlight1[machine learning model] can be:
* trained with data from _real-world_ experiments and
* used to quickly and cheaply evaluate queries

.conclusion[A machine learning model replacing real-world experiments can _only_ provide _linear_ gains.]
]

---

count: false

## AI for scientific discovery

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

## AI for scientific discovery

.context[Can we do better than _linear_?<br>An agent in the loop]

.right-column-66[<br>.center[![:scale 90%](../assets/images/slides/materials/activelearning_agent.png)]]

.left-column-33[
A .highlight1[machine learning **agent**] in the loop can:
* .highlight1[learn structure] from the available data,
* .highlight1[generalise] to unexplored regions of the search space and
* .highlight1[build better queries]

.conclusion[A successful AL pipeline with an ML agent in the loop can provide _exponential_ gains.]
]

---

name: title
class: title, middle

## ClimateGAN details

.brightblue[Unser Dialog · 29. Oktober 2022]

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
