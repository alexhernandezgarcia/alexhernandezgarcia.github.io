---
layout: slides_mila_owl
title: "Multi-fidelity active learning with GFlowNets"
---

name: mfgfn-tmlr
class: title, middle

##  Multi-fidelity active learning with GFlowNets

**Alex Hernández-García$^{\text{†}}$**, **Nikita Saxena$^{\text{†}}$**, Moksh Jain, Chenghao Liu and Yoshua Bengio

Transactions on Machine Learning Research (TMLR), 2024

.smaller[.smaller[$^{\text{†}}$ equivalent contribution]]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/mcgill.png" alt="McGill" style="width: 12em"></a>
]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]

---

## Contribution

- An .highlight1[active learning] algorithm to leverage the availability of .highlight1[multiple oracles at different fidelities and costs].

--
- Suited for exploring very large, structured (discrete and continuous), high-dimensional spaces.

--
- The goal is two-fold:
    1. Find high-scoring candidates
    2. Candidates must be diverse
--
- Experimental evaluation with .highlight1[biological sequences and molecules]:
    - DNA
    - Antimicrobial peptides
    - Small molecules
    - Classical multi-fidelity toy functions (Branin and Hartmann)

--

.conclusion[Likely the first multi-fidelity active learning method for biological sequences and molecules.]

---

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_0.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_1.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_2.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_3.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_4.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_5.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_6.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_7.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_8.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_9.png)]

---

count: false

## Multi-fidelity active learning with GFlowNets

.center[![:scale 100%](../assets/images/slides/mfal/seq_mf_only/mfgfn_10.png)]

---

## Experiments
### Baselines

.context[To our knowledge, .highlight1[the first multi-fidelity active learning algorithm tested on biological sequence design and molecular design problems]. There did not exist baselines from the literature.]

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

count: false

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

count: false

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

.center[![:scale 50%](../assets/images/slides/mfal/dna_6.png)]

---

count: false

## Antimicrobial peptides (AMP)

- Protein sequences (20 amino acids) with variable length (max. 50).
- The oracles are 3 ML models trained with different subsets of data.

.center[![:scale 60%](../assets/images/slides/mfal/amp.png)]

---

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid_3.png)]

---

count: false

## How does multi-fidelity help?

.context[Visualisation on the synthetic 2D Branin function task.]

.center[![:scale 50%](../assets/images/slides/mfal/branin_samples_per_fid_6.png)]

---

## Summary and conclusions

.references[
* Hernandez-Garcia, Saxena et al. [Multi-fidelity active learning with GFlowNets](https://openreview.net/forum?id=dLaazW9zuF). TMLR 2024.
]

* AI-driven scientific discovery demands learning methods that can .highlight1[efficiently discover diverse candidates in combinatorially large, high-dimensional search spaces].

--
* .highlight1[Multi-fidelity active learning with GFlowNets] enables .highlight1[cost-effective exploration] of large, high-dimensional and structured spaces, and discovers multiple, diverse modes of black-box score functions.

--
* This is to our knowledge the first algorithm capable of effectively leveraging multi-fidelity oracles to discover diverse biological sequences and molecules.

---

name: mfgfn-tmlr
class: title, middle

##  Multi-fidelity active learning with GFlowNets

**Alex Hernández-García$^{\text{†}}$**, **Nikita Saxena$^{\text{†}}$**, Moksh Jain, Chenghao Liu and Yoshua Bengio

OpenReview: [https://openreview.net/forum?id=dLaazW9zuF](https://openreview.net/forum?id=dLaazW9zuF)

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/udem-white.png" alt="UdeM" style="width: 12em"></a>
&nbsp&nbsp&nbsp&nbsp
<a href="https://www.umontreal.ca/"><img src="../assets/images/slides/logos/mcgill.png" alt="McGill" style="width: 12em"></a>
]

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)]<br>
.footer[[@alexhg@scholar.social](https://scholar.social/@alexhg) [![:scale 1em](../assets/images/slides/misc/mastodon.png)](https://scholar.social/@alexhg) | [@alexhdezgcia](https://twitter.com/alexhdezgcia) [![:scale 1em](../assets/images/slides/misc/twitter.png)](https://twitter.com/alexhdezgcia)]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/slides/{{ name }}](https://alexhernandezgarcia.github.io/slides/{{ name }})
]]
