---
layout: mlprojects23
title: IFT 3710/6759 - Experimental study of Generative Flow Networks (GFlowNets)
---

## Brief description

Generative Flow Networks (GFlowNets) are a recently proposed method for probabilistic modelling and amortized variational inference. GFlowNets present particularly promising benefits for accelerating scientific discovery, since they can naturally be used as samplers to efficiently explore large search spaces and discover multiple, diverse candidates with high expected reward. However, as new algorithms, we still have limited insights about the learning dynamics of GFlowNets, the conditions where they can be trained faster, etc.  This project is about exploring the capabilities of GFlowNets and studying their behaviour under different conditions. It can therefore be seen as an experimental research project that can potentially provide useful insights for ongoing projects using GFlowNets for material and drug discovery.

## Data

GFlowNets are generative methods and differ from the classical machine learning methods that directly depend on the availability of a data set. For this project, students will first experiment with synthetic environments such as a hypergrid or a hypertorus, where the goal is to learn to generate samples proportionally to a synthetic reward function defined over the state space, for instance a grid or the surface of a torus. 

In a second stage of the project, different directions could be pursued. One such direction is a sensitivity analysis of the various hyperparameters in the performance and dynamics of GFlowNets. Another direction is the development of new synthetic or practical environments to extend the empirical analysis and validation of the algorithm. As a recently proposed method, there are multiple ideas that have not be implemented yet and this project offers a great deal of possibilities.

## Expectations

While the students will be expected to use exisiting implementations of GFlowNets (see the references below), a successful project should also contribute new code, such as the implementation of new environments, the extension of training modalities, loss functions. If the students pursue the direction of studying the sensitivity of hyperparameters, a solid evaluation pipeline and analysis of results should be developed.

## References

* [Paper: Generative flow networks for discrete probabilistic modeling](https://arxiv.org/abs/2202.01361)
* [Blog post by Emmanuel Bengio](https://folinoid.com/w/gflownet/)
* [GFlowNet Tutorial](https://milayb.notion.site/The-GFlowNet-Tutorial-95434ef0e2d94c24aab90e69b30be9b3)
* [Paper: GFlowNets for AI-Driven Scientific Discovery](https://arxiv.org/abs/2302.00615)
* [GFlowNet implementation on GitHub](https://github.com/alexhernandezgarcia/gflownet)
