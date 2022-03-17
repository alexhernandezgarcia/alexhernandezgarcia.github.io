---
layout: slides_mila_owl
title: "GFlowNet: A theoretical introduction and application on biological sequences design"
---

name: title
class: title, middle

## GFlowNets
### A Friendly Introduction and Designing Biological Sequences


.bigger[Moksh Jain and Alex Hernández-García (he/il/él)]

.turquoise[[Deeptails Seminar](https://miai.univ-grenoble-alpes.fr/events-highlights/miai-seminars/) · MIAI Grenoble (virtual) · March 17th 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 6em"></a>
]

---

## Collaborators and publications
* **Flow Network based Generative Models for Non-Iterative Diverse Candidate Generation**
    - _Emmanuel Bengio, Moksh Jain, Maksym Korablyov, Doina Precup, Yoshua Bengio. 2021._
* **GFlowNet Foundations**
    - _Yoshua Bengio, Tristan Deleu, Edward J. Hu, Salem Lahlou, Mo Tiwari, Emmanuel Bengio. 2021._
* **Trajectory Balance: Improved Credit Assignment in GFlowNets**
    - _Nikolay Malkin, Moksh Jain, Emmanuel Bengio, Chen Sun, Yoshua Bengio. 2022._
* **Biological Sequence Design with GFlowNets**
    - _Moksh Jain, Emmanuel Bengio, Alex Hernandez-Garcia, Jarrid Rector-Brooks, Bonaventure Dossou, Chanakya Ekbote, Jie Fu, Tianyu Zhang, Micheal Kilgour, Dinghuai Zhang, Yelena Simine, Payel Das, and Yoshua Bengio. 2022._
---

## Motivation
.context[The maximum is not all you need!]
* Scoring functions used for in-silico evaluation can be unreliable.
    * Cannot capture all desired properties.
    * Large errors due to approximations and assumptions.
* Instead of search for a single candidate maximizing the scoring function, we need to look for _modes_ of the reward function
    * Diverse batches covering modes of the scoring function are more likely to result in useful candidates.
    * Diversity in candidate generation is also critical to accomodate the diversity in the target mechanisms.

.center[![:scale 50%](../assets/images/slides/gfn-seq-design/ddloop.png)]

---

## Don't we have methods to do that already?
### Markov Chain Monte Carlo
.center[![:scale 50%](../assets/images/slides/gfn-seq-design/mcmc-mixing.png)]

* Traditional ML workhorse for sampling from a target distribution.
* Mixing time can be exponential for well separated modes in high-dimensional distributions.
* Sampling large number of data points can be slow, as computation happens during sampling. 
---

## Don't we have methods to do that already?
### Reinforcement Learning with Exploration
* Captures only the _highest_ mode of the reward.
* Places higher values for states with more trajectories leading up to them.
* Efficient exploration in large state spaces, with function approximation is still an open research problem.
---

## Generative Flow Networks 
### Generate Samples Proportional To Their Rewards!
.context[GFlowNets]

.right-column-33[.center[![:scale 80%](../assets/images/slides/gfn-seq-design/lego_blocks.png)]]

* Discrete objects $x \in \cal X$, can be constructed through a sequence of steps $\tau$ using a given set of actions.
* At each step of the trajectory $\tau=(s_0\rightarrow s_1 \rightarrow \dots x \rightarrow s_f)$, we get a partially constructed object $s\in \mathcal{S}$, including a starting empty state $s_0$ and a common final state $s_f$. 
* Induces a directed graph $\mathcal{G}=(\mathcal{S},\mathcal{E})$, denoting all possible constructions in the domain (DAG).
* GFlowNets learn a policy $\pi$ to construct $x$ such that $\pi(x) \propto R(x)$
* Computation is ammortized during training, sampling is cheap!
---

## Flows
.context[Not Normalizing Flows!]
.right-column-33[.center[![:scale 100%](../assets/images/slides/gfn-seq-design/flownet.gif)]]
* Analogous to water-flow in pipes.
* Trajectory Flow $F(\tau)$ denotes probability mass assigned to trajectory $\tau$.
* State Flow $F(s)$ is the flow of all trajectories passing through the state $s$.
* Edge Flow $F(s\rightarrow s')$ is the flow through a particular edge $s\rightarrow s'$.
* Forward Policy $P_F$ acts based on the flow at each state $P\_F(s'|s) = \frac{F(s\rightarrow s')}{F(s)}$
* Backward Policy $P_F$ acts based on the flow at each state $P\_B(s|s') = \frac{F(s\rightarrow s')}{F(s')}$
---

## Flow Consistency
.context[Principle of Conservation]
.right-column-33[.center[![:scale 100%](../assets/images/slides/gfn-seq-design/flownet.gif)]]

**Consistent Flow**:  Flow $F$ satisfies the _flow consistency equation_
$$\sum\_{s' \in \text{Parent}(s)} F\_\theta(s' \rightarrow s) = \sum\_{s'' \in \text{Child}(s)} F\_\theta(s \rightarrow s')$$
<br>
<br>
<br>
**Theorem**: For a consistent flow $F$ with terminal flow set as the reward $F(x\rightarrow s_f)=R(x)$, the forward policy samples $x$ proportionally to $R(x)$.
$$\pi(x)\propto R(x)$$

**Corollary**: The flow at $s_0$, $F(s_0)$ is the partition function $Z$! 
---

## Learning GFlowNets

<p>
$$\sum\_{s' \in \text{Parent}(s)} F\_\theta(s' \rightarrow s) = \sum\_{s'' \in \text{Child}(s)} F\_\theta(s \rightarrow s')$$
</p>
* **Flow Matching Objective**: $$\mathcal{L}\_{FM}(s; \theta) = \left(\log \frac{\sum\_{s'\in \text{Parent}(s)} F\_\theta(s'{\rightarrow} s)}{\sum\_{s'' \in \text{Child}(s)}F\_\theta(s{\rightarrow} s'')}\right)^2$$
* **Trajectory Balance**: $$\mathcal{L}\_{TB} (\tau;\theta) = \left(\log \frac{Z\_\theta \prod\_{s{\rightarrow} s' \in \tau}P\_{F\_\theta}(s'|s)}{R(x)\prod\_{s\rightarrow s' \in \tau} P\_{B\_\theta}(s|s') }\right)^2$$
---

## Application
### Active learning for sequence design

---

## Active learning improvements

---

## Results

---

## Looking forward

---

name: title
class: title, middle

## Thank you!

.bigger[Moksh Jain and Alex Hernández-García (he/il/él)]

.turquoise[[Deeptails Seminar](https://miai.univ-grenoble-alpes.fr/events-highlights/miai-seminars/) · MIAI Grenoble (virtual) · March 17th 2022]

.center[
<a href="https://mila.quebec/"><img src="../assets/images/slides/logos/mila-beige.png" alt="Mila" style="height: 6em"></a>
]

