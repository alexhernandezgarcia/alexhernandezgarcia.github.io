---
layout: teaching
navigation : navigation_mlprojects26
title: IFT 3710/6759 - Materials property prediction for materials discovery
---

## Brief description

This project is about developing machine learning methods for predicting the properties of materials to facilitate materials discovery. One of the relevant applications of materials discovery is electrocatalyst design. Electrocatalysts are materials that participate in electrochemical reactions and are key in a large variety of industrial applications, including, for instance, the process for storing renewable energy as hydrogen fuel. Discovering new electrocatalysts that improve the energy efficiency of relevant chemical reactions would likely contribute to the reduction of the carbon emissions associated to some industrial processes. Recent advances in deep learning constitute a promising avenue for accelerating the pipeline of scientific discoveries, such as electrocatalyst design. Besides electrocatalysts, there are many other classes of materials that can have an impact in sustainability, such as ionic conductors for batteries or photovoltaics.

## Data

In recent years, the materials science and machine learning communities have joined efforsts to make available to everyone relatively large data sets that are readily available to train machine learning models. A good example is the [Materials Project](https://next-gen.materialsproject.org/), which includes more than 35,000 molecules and more than 130,000 inorganic compounds. An example of how machine learning models can be trained for various tasks (for example, predicting various properties) is the [MatBench benchmark](https://matbench.materialsproject.org/).

## Relevant machine learning methods

Many machine learning methods for molecular and materials property prediction resort to graph neural networks (GNN), which are the currently best models to handle graph data, such as materials and molecules. However, the possiblites for modelling materials are diverse, since different representations and architectures can offer different inductive biases.

This project, in particular, proposes to explore the potential of the **Transformer architecture** for material property prediction, as well as alternative representations, such as [geometry-based crystal descriptors](https://github.com/dwiddo/average-minimum-distance). The Transformer architecture is particularly flexible and would allow obtaining predictions from partially defined crystals, which is useful for multiple relevant applications.

## Expectations

This is relatively challenging task because it requires a moderate understanding of chemistry and materials science. However, there is considerable room for innovation and exploration, as well as the potential to contribute to an impactful project. This project has a strong research and exploratory component, which will be taken into account for the evaluation.

## References

* [Materials Project](https://next-gen.materialsproject.org/)
* [MatBench benchmark](https://matbench.materialsproject.org/)
* [Open Catalyst Project](https://opencatalystproject.org/)
* [OBELiX: A curated dataset of crystal structures and experimentally measured ionic conductivities for lithium solid-state electrolytes](https://arxiv.org/abs/2502.14234)
* [An introduction to electrocatalyst design using machine learning for renewable energy storage](https://arxiv.org/abs/2010.09435)
