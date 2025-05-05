---
layout: teaching
navigation : navigation_mlprojects24
title: IFT 3710/6759 - Materials discovery and property prediction
---

## Brief description

This project is about developing machine learning methods for predicting the properties of materials and generating materials with desirable properties. One example are electrocatalysts, materials that participate in electrochemical reactions and are key in a large variety of industrial applications, including, for instance, the process for storing renewable energy as hydrogen fuel. Discovering new electrocatalysts that improve the energy efficiency of relevant chemical reactions would likely contribute to the reduction of the carbon emissions associated to some industrial processes. Recent advances in deep learning constitute a promising avenue for accelerating the pipeline of scientific discoveries, such as electrocatalyst design.

Besides electrocatalysts, there are many other classes of materials that can have an impact in sustainability, such as ionic conductors for batteries or photovoltaics. This project description actually encompasses a broad range of options that are possible in the space of materials modelling and generation.

## Data

This project is inspired by the availability of a data set for electrocatalyst design with machine learning, the [Open Catalyst Project](https://opencatalystproject.org/). This data set contains representations of pairs of electrocatalyst and a molecule of interest (adsorbate), as well as results from the simulation of their interaction computed via Density Functional Theory (DFT), a computationally expensive model of quantum mechanics. The goal of a machine learning model using this data is to predict the outputs of DFT in a more efficient way. The Open Catalyst Project proposes three main tasks to be performed using this data: Structure to Energy and Forces (S2EF), Initial Structure to Relaxed Structure (IS2RS) and Initial Structure to Relaxed Energy (IS2RE).

While OCP is used as an example, there exist many other data sets, such as the [Materials Project](https://next-gen.materialsproject.org/) that are readily available for machine learning.

## Relevant machine learning methods

Teams working on this project may resort to using of graph neural networks (GNN), which are the currently best models to handle graph data, such as materials and molecules. However, the possiblites for modelling materials are diverse, since different representations and architectures can offer different inductive biases.

## Expectations

This is a challenging task because it requires a moderate understand of chemistry and materials science. However, there is considerable room for innovation and exploration. The OCP project involves the use of large data sets and large models. Therefore, teams working on this project will not be expected to develop models competitive with state of the art solutions, but rather experiment with simplified versions of the competition, perhaps extending available previous models.

## References

* [Open Catalyst Project](https://opencatalystproject.org/)
* [GitHub repository of the data set](https://github.com/Open-Catalyst-Project/ocp/blob/master/DATASET.md)
* [Paper: An introduction to electrocatalyst design using machine learning for renewable energy storage](https://arxiv.org/abs/2010.09435)
* [Crystal-GFN: ampling crystals with desirable properties and constraints (paper)](https://arxiv.org/abs/2310.04925)
* [Crystal-GFN code on github](https://github.com/alexhernandezgarcia/gflownet)
