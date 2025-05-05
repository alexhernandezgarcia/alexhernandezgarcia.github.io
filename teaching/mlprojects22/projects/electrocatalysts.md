---
layout: teaching
navigation : navigation_mlprojects22
title: IFT 3710/6759 - Electrocatalysts modelling and design
---

## Brief description

This project is about developing machine learning methods for modelling electrocatalysts. Electrocatalysts are materials that participate in electrochemical reactions and are key in a large variety of industrial applications, including, for instance, the process for storing renewable energy as hydrogen fuel. Discovering new electrocatalysts that improve the energy efficiency of relevant chemical reactions would likely contribute to the reduction of the carbon emissions associated to some industrial processes. Recent advances in deep learning constitute a promising avenue for accelerating the pipeline of scientific discoveries, such as electrocatalyst design.

## Data

This project is inspired by the availability of a data set for electrocatalyst design with machine learning, the [Open Catalyst Project](https://opencatalystproject.org/). This data set contains representations of pairs of electrocatalyst and a molecule of interest (adsorbate), as well as results from the simulation of their interaction computed via Density Functional Theory (DFT), a computationally expensive model of quantum mechanics. The goal of a machine learning model using this data is to predict the outputs of DFT in a more efficient way. The Open Catalyst Project proposes three main tasks to be performed using this data: Structure to Energy and Forces (S2EF), Initial Structure to Relaxed Structure (IS2RS) and Initial Structure to Relaxed Energy (IS2RE).

## Relevant machine learning methods

Teams working on this project will likely make use of graph neural networks (GNN), which are the currently best models to handle graph data, such as materials and molecules.

## Expectations

This is a challenging task which also involves the use of large data sets and large models. Therefore, teams working on this project will not be expected to develop models competitive with state of the art solutions, but rather experiment with simplified versions of the competition, perhaps extending available previous models.

## References

* [Open Catalyst Project](https://opencatalystproject.org/)
* [GitHub repository of the data set](https://github.com/Open-Catalyst-Project/ocp/blob/master/DATASET.md)
* [Paper: An introduction to electrocatalyst design using machine learning for renewable energy storage](https://arxiv.org/abs/2010.09435)
