---
layout: slides_mila_owl
title: "Crystal-GFN"
---

name: crystal-gfn-ai4mat23
class: title, middle

## Crystal-GFN
### Sampling crystals with desirable properties and constraints

Presenting: Alex Hernández-García (he/il/él)

.smaller[Divya Sharma, Michał Koziarski, Alexandra Volokhova, Victor Schmidt,]<br>
.smaller[Alexandre Duval, Yasmine Benabed, Pierre Luc Carrier, Yoshua Bengio]

.turquoise[[AI4Mat](https://sites.google.com/view/ai4mat/home), NeurIPS 2023 · New Orleans · December 15th 2023]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 4em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://sites.google.com/view/ai4mat/home"><img src="../assets/images/slides/logos/ai4mat.png" alt="AI4Mat" style="height: 4em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]

---

## What are crystals?

[Wikipedia](https://en.wikipedia.org/wiki/Crystal): A crystal or crystalline solid is a solid material whose constituents (such as atoms, molecules, or ions) are arranged in a .highlight1[highly ordered microscopic structure], forming .highlight1[a crystal lattice that extends in all directions].

.left-column[
.center[![:scale 70%](../assets/images/slides/crystals/crystals_polycrystalline_amorphous.png)]
]
.right-column[
.center[![:scale 40%](../assets/images/slides/crystals/Li2O.png)]
]

--

Here, we are concerned mainly with _inorganic crystals_, where the constituents are atoms or ions.

--

A crystal structure is characterized by its .highlight1[unit cell], a small imaginary box containing atoms in a specific spatial arrangement with certain symmetry. The unit cell repeats itself periodically in all directions.

---

## Why do we care about crystals?

Many solid state materials are crystal structures and they are a core component of .highlight1[solar cells, batteries, electrocatalysts], etc.

--

Accelerating .highlight1[material discovery is key in the climate crisis]. From the IPCC Sixth Assessment Report, 2022:  
* Improving material efficiency can reduce 0.93 ($\pm$ 0.23) GtCO₂-eq per year.
* Fuel switching can reduce 2.1 ($\pm$ 0.52) GtCO₂-eq per year, only in the industry sector. 
* Carbon capture and storage can reduce 0.54 ($\pm$ 0.27) GtCO₂-eq per year in the energy sector.

.smaller[.footnote[Global anthropogenic emissions in 2019 were estimated in 59 ($\pm$6.6) GtCO₂-eq.]]

--

However, .highlight1[material modelling is very challenging]:
* Limited data: only about 200k known inorganic materials, but potentially $10^{180}$ possible stable materials (for reference: more than a billion molecules are known)
* Sparsity: .highlight2[stable materials] only exist in a low-dimensional subspace of all possible 3D arrangements.

---

## Related work

Example: .highlight2[Crystal Diffusion Variational Autoencoder (CDVAE)]: a diffusion process that moves .highlight1[atomic coordinates] towards a lower energy state and updates atom types to satisfy bonding preferences between neighbors. The key idea is to learn the diffusion process from the data distribution of stable materials. .cite[(Xie et al., 2022)]

.center[![:scale 100%](../assets/images/slides/crystals/cdvae.png)]

.references[Xie et al. [Crystal diffusion variational autoencoder for periodic material generation](https://arxiv.org/abs/2110.06197). ICLR 2022] 

???

A: atom types
X: atom coordinates
L: perdiodic lattice: l1, l2, l3 (3x3)

---

count: false

## Related work

Example: .highlight2[Physics Guided Crystal Generative Model (PGCGM)]: A GAN with the affine matrices of the symmetry operations and element properties as inputs, augmented with a distance loss between real and fake materials, and data augmentation on the atomic positions. .cite[(Zhao et al., 2023)]

.center[![:scale 70%](../assets/images/slides/crystals/pgcgm.png)]

.references[Zhao et al. [Physics guided deep learning for generative design of crystal materials with symmetry constraints](https://www.nature.com/articles/s41524-023-00987-9). npj computational materials 2023] 

---

count: false

## Related work

Example: .highlight2[MatterGen]: An evolution of CDVAE that performs diffusion not only on atomic positions but also on the atom types and the lattice. .cite[(Zeni, Pinsler, Zügner, Fowler et al., 2023)]

.center[![:scale 90%](../assets/images/slides/crystals/mattergen.png)]

.references[Zeni, Pinsler, Zügner, Fowler et al. [MatterGen: a generative model for inorganic materials design](https://arxiv.org/abs/2312.03687). arXiv 2023] 

---

## Our approach
### Crystal structure parameters

.context[CDVAE and other works tackle crystal structure generation in the space of atom coordinates.]

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
### Proxy model

- MLP architecture
- Inputs:
    - Space group embedding
    - Composition embedding as in PhAST (Duval et al. (2022))
    - Standardised lattice parameters
- Trained on MatBench (Materials Project)
    - Mean absolute error: 0.10 eV/atom (0.005)
- Reward: $R(x) = \exp(-\frac{MLP(x)}{T})$

---

## Crystal-GFlowNet
### Experiments

- Space groups: all 113 space groups present in the MatBench data set.
- Compositions:
    - Up to 5 unique elements from the these 12 elements: H, Li, C, N, O, F, Mg, Si, P, S, Cl and Fe (12 most common elements in the training set). 
    - Up to 16 atoms per element.
    - Up to 50 atoms in total.
- Lattice parameters:
    - Lengths: 0.9-100 angstroms.
    - Angles: 50-150°.
    - These ranges contain the bulk of the data set (excluding outliers).

---

## Results

.center[![:scale 80%](../assets/images/slides/crystals/distributions_fe_empty.png)]

---

count: false

## Results

.center[![:scale 80%](../assets/images/slides/crystals/distributions_fe_val.png)]

---

count: false

## Results

.context[10,000 crystals sampled from an untrained Crystal-GFN.]

.center[![:scale 80%](../assets/images/slides/crystals/distributions_fe_val_rand.png)]

---

count: false

## Results

.context[10,000 crystals sampled from a trained GFlowNet.]

.center[![:scale 80%](../assets/images/slides/crystals/distributions_fe_val_rand_crystalgfn.png)]

---

## Results
### Diversity

.context[.highlight2[Diversity] is key in materials discovery.]

Analysis of 10,000 sampled crystals and the top-100 with lowest formation energy.

- All 10,000 samples are unique.
- All crystal systems, lattice systems and point symmetries found in the 10,000 samples.
    - 5 out of 8 crystal-lattice systems in the top-100.
    - All 5 point symmetries in the top-100.
- All 12 elements found in the 10,000 samples.
    - 10 out of 12 elements in the top-100.
- 80 out of 113 space groups (70 %) found in the 10,000 samples
    - 19 out of 113 space groups in the top-100.

---

name: title
class: title, middle

## Summary and conclusions

.center[![:scale 30%](../assets/images/slides/misc/conclusion.png)]

---

## Summary and conclusions

* Discovering new crystal structures with desirable properties can help mitigate the climate crisis.
* There are infinitely many conceivable crystals. Only a few are stable. Only a few stable crystals have interesting properties. This is a hard problem.
* Crystal-GFN introduces .highlight1[physicochemical and structural constraints], reducing the search space.
    * Crystal-GFN was trained in 12 hours in a CPU-only machine.
* Our results show that we can generate .highlight1[diverse, high scoring samples with the desired constraints].
* The .highlight1[framework can be flexibly extended] with more constraints, crystal structure descriptors (atomic positions) and other properties. 

.references[
* Mila AI4Science et al. [Crystal-GFN: sampling crystals with desirable properties and constraints](https://arxiv.org/abs/2310.04925). AI4Mat, NeurIPS 2023 (spotlight).
]

.highlight2[Open source code]: [github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

---

## Acknowledgements
### Amazing co-authors and friends

.left-column[
* Alexandre Duval
* Alexandra Volokhova
* Pierre Luc Carrier
* Divya Sharma
* Victor Schmidt
* Yasmine Benabed
* Michał Koziarski
* Yoshua Bengio
]

---

name: title
class: title, middle

![:scale 50%](../assets/images/slides/materials/crystals.png)

Alex Hernández-García (he/il/él)

.smaller[Divya Sharma, Michał Koziarski, Alexandra Volokhova, Victor Schmidt,]<br>
.smaller[Alexandre Duval, Yasmine Benabed, Pierre Luc Carrier, Yoshua Bengio]

[github.com/alexhernandezgarcia/gflownet](https://github.com/alexhernandezgarcia/gflownet)

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 3em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 3em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]


