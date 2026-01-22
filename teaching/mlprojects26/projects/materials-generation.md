---
layout: teaching
navigation : navigation_mlprojects26
title: IFT 3710/6759 - Crystal structure generation for materials discovery
---

## Brief description

This project is about developing machine learning methods for the generation of inorganic crystal structures with desirable properties. One of the relevant applications of materials discovery is electrocatalyst design. Electrocatalysts are materials that participate in electrochemical reactions and are key in a large variety of industrial applications, including, for instance, the process for storing renewable energy as hydrogen fuel. Discovering new electrocatalysts that improve the energy efficiency of relevant chemical reactions would likely contribute to the reduction of the carbon emissions associated to some industrial processes. Recent advances in deep learning constitute a promising avenue for accelerating the pipeline of scientific discoveries, such as electrocatalyst design. Besides electrocatalysts, there are many other classes of materials that can have an impact in sustainability, such as ionic conductors for batteries or photovoltaics.


## Data

In recent years, the materials science and machine learning communities have joined efforsts to make available to everyone relatively large data sets that are readily available to train machine learning models. A good example is the [Materials Project](https://next-gen.materialsproject.org/), which includes more than 35,000 molecules and more than 130,000 inorganic compounds. An example of how machine learning models can be trained for various tasks (for example, predicting various properties) is the [MatBench benchmark](https://matbench.materialsproject.org/).

Besides the available data sets, the task of crystal structure generation can be tackled with [GFlowNets](https://arxiv.org/abs/2310.04925), which instead of being trained on a data set, are trained through a reward function, like in reinforcement learning. This reward function may be another (predictive) machine learning model.

## Relevant machine learning methods

Teams working on this project may consider generative models such as GFlowNets and diffusion, which are used in many other tasks besides crystal structure generation.

## Expectations

This is a challenging task because it requires a moderate understand of chemistry and materials science, as well as advanced generative modelling. However, there is considerable room for innovation and exploration. These challenges will naturally be taken into account for the evaluation.

## References

* [Open Catalyst Project](https://opencatalystproject.org/)
* [GitHub repository of the data set](https://github.com/Open-Catalyst-Project/ocp/blob/master/DATASET.md)
* [Paper: An introduction to electrocatalyst design using machine learning for renewable energy storage](https://arxiv.org/abs/2010.09435)
* [Crystal-GFN: sampling crystals with desirable properties and constraints (paper)](https://arxiv.org/abs/2310.04925)
* [Crystal-GFN code on github](https://github.com/alexhernandezgarcia/gflownet)
