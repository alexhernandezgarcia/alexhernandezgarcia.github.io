---
layout: slides_warbler
title: IFT 6760B A25 - Implementation of GFlowNets
---

name: gflownets-intro-part2-20250915
class: title, middle

## Probabilistic inference with GFlowNets
### IFT 6760B A25

#### .gray224[September 18th - Session 5]
### .gray224[IFT 6760B A25 - Implementation of GFlowNets]

.smaller[.footer[
Slides: [alexhernandezgarcia.github.io/teaching/mlprojects24/slides/{{ name }}](https://alexhernandezgarcia.github.io/teaching/gflownets25/slides/{{ name }})
]]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="UdeM" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../../../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

---

## Objectives of this session

- Implement a minimal version of GFlowNets:
    - Flow Matching objective
    - Sampling trajectories
    - Training the GFlowNet policy
    - Basic evaluation

--

The goal is that at the end of the session:
- You will have a complete view of what a GFlowNet algorithm entails for a simple task.
- You will have a piece of code you understand to potentially study and experiment with more advanced aspects.
- You will have an intuition of what more complex tasks would entail.

---

## In the previous session...

.references[
Emmanuel Bengio, Moksh Jain, Maksym Korablyov, Doina Precup, Yoshua Bengio. [Flow network based generative models for non-iterative diverse candidate generation](https://arxiv.org/abs/2106.04399). NeurIPS, 2021.
]

- Introduced flow networks and proved how they can enable sampling in the general DAG case.
- Introduced the flow matching objective function to train GFlowNets.

.center[
![:scale 40%](../../../assets/images/slides/gfn-seq-design/flownet.gif)
]

---

## Results
### Hyper-grid

Experiments with a hyper-grid in 4D and length 8 ($8^4 = 4096$ states and samples), where trajectories start in a corner and increment each dimension one by one.


.left-column-33[.center[![:scale 100%](../../../assets/images/teaching/gflownets/gfn-intro/grid_reward.png)]]

--

.right-column-66[.center[![:scale 100%](../../../assets/images/teaching/gflownets/gfn-intro/grid_states_visited.png)]]

---

## Results
### Molecules

Experiments with a fragment-based molecular generation task, with a sample space of $10^16$ and between 100 and 2000 actions from each state. The reward $R(x)^{\beta}$ is the binding energy of the molecule with with a target protein.

.center[![:scale 80%](../../../assets/images/teaching/gflownets/gfn-intro/molecules_fragments.png)]

---

## Results
### Molecules

.left-column[.center[![:scale 100%](../../../assets/images/teaching/gflownets/gfn-intro/molecules_samples_visited.png)]]

--

.right-column[.center[![:scale 100%](../../../assets/images/teaching/gflownets/gfn-intro/mols_empirical_density_rewards.png)]]

--

.full-width[
.conclusion[GFlowNet samples more unique, high-scoring molecules than baseline MCMC and RL methods. The empirical reward density is higher than that of a reference data set.]
]

---

## Results
### Molecules

.center[![:scale 100%](../../../assets/images/teaching/gflownets/gfn-intro/molecules_modes_diversity.png)]

---

## Results
### Molecules

.center[![:scale 80%](../../../assets/images/teaching/gflownets/gfn-intro/molecules_training_curves.png)]

---

## Results
### 2D Grid

.center[![:scale 60%](../../../assets/images/teaching/gflownets/gfn-intro/grid_2d_density.gif)]

---

name: live-coding
class: title, middle
count: false

## Live coding!

---

## Flow Matching objective

$$
\footnotesize \tilde{\mathcal{L}}_{\theta}(\tau) = \sum^{s' \in \tau \neq s_0} \left( \log \left[\sum^{s,a:T(s,a)=s'} \exp F^{log}(s,a;\theta) \right] - \log \left[R(s') - \sum^{a' \in \mathcal{A}(s')} \exp F^{log}(s',a';\theta) \right] \right)^2
$$

---

name: title
class: title, middle
count: false

## Probabilistic inference with GFlowNets
### IFT 6760B A25

#### .gray224[September 18th - Session 5]
### .gray224[IFT 6760B A25 - Implementation of GFlowNets]

.center[
<a href="http://www.umontreal.ca/"><img src="../../../assets/images/slides/logos/udem-white.png" alt="Mila" style="height: 6em"></a>
]

Alex Hernández-García (he/il/él)

.footer[[alexhernandezgarcia.github.io](https://alexhernandezgarcia.github.io/) | [alex.hernandez-garcia@mila.quebec](mailto:alex.hernandez-garcia@mila.quebec)] | [alexhergar.bsky.social](https://bsky.app/profile/alexhergar.bsky.social) [![:scale 1em](../../../assets/images/slides/misc/bluesky.png)](https://bsky.app/profile/alexhergar.bsky.social)<br>

