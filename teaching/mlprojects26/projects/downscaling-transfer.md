---
layout: teaching
navigation : navigation_mlprojects26
title: IFT 3710/6759 - Improving the generalisation of downscaling climate models
---

## Brief description

The goal of this project is to improve the geographical transferability of machine-learning-based precipitation downscaling models. Access to high-resolution precipitation forecasts and observations is strongly limited in many regions around the globe. While neural networks can theoretically learn how to downscale global forecasts using available data, prior work demonstrates that these models fail to generalize to unseen geographic regions [1]. Recent work claims to enhance climate downscaling performance by informing ML models with geographical neural representations and climatic frequency encodings [2]. This project aims to investigate whether these claims hold for precipitation downscaling, and can be used to improve geographical generalization.

## Data

ML-based precipitation downscaling requires a training dataset with aligned low-resolution and high-resolution sources. Moreover, since the project’s focus is geographical transferability, a diverse set of geographical regions must be included.

[RainShift](https://arxiv.org/abs/2507.04930) provides a ML-ready dataset of 18 regions with aligned high-resolution satellite precipitation estimates (IMERG) and low-resolution atmospheric reanalysis (ERA5), the former serving as target, and the latter as input. Additionally, RainShift establishes a benchmark for precipitation downscaling under geographic distribution shifts.

## Relevant machine learning methods

Standard machine learning models used for precipitation downscaling include UNets, ViTs, GANs, Fourier neural operators, and diffusion models. [2] follow a model-agnostic approach, (meaning their method can be applied to any architecture) and compare the performance of four baselines augmented with their method: UNet, [DSFNO](https://arxiv.org/abs/2305.14452), GAN, and ViT.

## Expectations

Students working on this project will be expected to reproduce the methods of [_GeoFAR: Geography-Informed Frequency-Aware Super-Resolution for Climate Data_](https://openreview.net/forum?id=0WHpOekph0), and apply them to the RainShift benchmark. Additional efforts to extend the proposed methods, or propose alternatives to improve the performance over the RainShift benchmark are welcomed.

Outputs of this project could contribute to an ongoing research project focusing on km-scale precipitation downscaling.

## References

1. [RainShift : A Benchmark for Precipitation Downscaling Across Geographies](https://arxiv.org/abs/2507.04930)
2. [GeoFAR : Geography-Informed Frequency-Aware Super-Resolution for Climate Data](https://openreview.net/forum?id=0WHpOekph0)
3. [Fourier Neural Operators for Arbitrary Resolution Climate Data Downscaling.](https://arxiv.org/abs/2305.14452)

