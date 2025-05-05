---
layout: teaching
navigation : navigation_mlprojects23
title: IFT 3710/6759 - Photovoltaic power and solar radiation forecasting
---

## Brief description

This projects tackles the problem of forecasting the solar radiation and the photovoltaic power output of solar panels from sky images. Photovoltaics is one of the main sources of renewable energy. However, the rapid variation of the solar irradiance (for example, cause by the movement of clouds) causes inefficiencies in the use of solar energy in the electrical grid. Accurate short-term prediction (_nowcasting_) of the output of photovoltaic panels can potentially improve the operation and management of the electrical grid, by better adjusting the production of energy by other sources. One potential solution for the nowcasting of the power output of photovoltaics is the use of sky images captured with a camera installed near the panels, combined with the predictive capabilities of computer vision methods.

## Data

Teams working on this project will make use of data sets of sky images captured with cameras installed near solar panels, as [Nie et al.](https://sci-hub.st/https://aip.scitation.org/doi/abs/10.1063/5.0014016). According to the paper, the data set contains over 100,000 sky images and the corresponding photovoltaic panel output.

## Relevant machine learning methods

Since this project will make use of image data, the main type of architecture to explore will be convolutional neural networks. Furthermore, this project may also explore the extension of the methods with recurrent neural networks, in order to exploit the temporal aspect of the data.

## Expectations

A successful project would first reproduce the results in the [original paper](https://sci-hub.st/https://aip.scitation.org/doi/abs/10.1063/5.0014016) and extend the methodology to improve the results. Data augmentation methods would also be an interesting extension to explore in this project.

## References

* [Paper: PV power output prediction from sky images using convolutional neural network](https://sci-hub.st/https://aip.scitation.org/doi/abs/10.1063/5.0014016)
