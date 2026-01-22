---
layout: teaching
navigation : navigation_mlprojects26
title: IFT 3710/6759 - Improving the generalisation of downscaling climate models
---

## Brief description

The goal of this project is to improve the geographical transferability of machine-learning-based precipitation downscaling models. Access to high-resolution precipitation forecasts and observations is strongly limited in many regions around the globe. While neural networks can theoretically learn how to downscale global forecasts using available data, prior work demonstrates that these models fail to generalize to unseen geographic regions [1]. While geographical domain generalization remains an open challenge in weather downscaling, it has been extensively explored in the field of remote sensing [2, 3]. This project aims to transfer these proven methods to the meteorological domain, specifically for precipitation downscaling.

## Data

ML-based precipitation downscaling requires a training dataset with aligned low-resolution and high-resolution sources. Moreover, since the project’s focus is geographical transferability, a diverse set of geographical regions must be included. 

[RainShift](https://arxiv.org/abs/2507.04930) provides a ML-ready dataset of 18 regions with aligned high-resolution satellite precipitation estimates (IMERG) and low-resolution atmospheric reanalysis (ERA5), the former serving as target, and the latter as input. Additionally, RainShift establishes a benchmark for precipitation downscaling under geographic distribution shifts.
Relevant machine learning methods
Standard machine learning models used for precipitation downscaling include UNets, ViTs, GANs, and diffusion models. The choice of model architectures will depend on the constraints of the domain generalization method used to enhance transferability. A promising geographical generalization approach is to combine domain adaptation techniques with location encoders [3].

## Expectations

Students working on this project will be expected to reproduce the methods of [_Robustness to Geographic Distribution Shift Using Location Encoders_](https://arxiv.org/abs/2503.02036), and apply them to the RainShift benchmark. A successful project would additionally extend the proposed methods, or propose alternatives to improve the performance over the RainShift benchmark. 

Outputs of this project could contribute to an ongoing research project focusing on km-scale precipitation downscaling.

## References

1. [RainShift : A Benchmark for Precipitation Downscaling Across Geographies](https://arxiv.org/abs/2507.04930)
2. [SatCLIP : Global, General-Purpose Location Embeddings with Satellite Imagery](https://arxiv.org/abs/2311.17179)
3. [Robustness to Geographic Distribution Shift Using Location Encoders](https://arxiv.org/abs/2503.02036)
