---
layout: mlprojects
title: IFT 3710/6759 - Downscaling climate models
---

## Brief description

The goal of this project will be to tackle the problem of _downscaling_ global climate models. The spatial resolution of the output of global climate models is typically not suitable for its application in local contexts, such as regional governments, while obtaining high-resolution predictions is in general computationally prohibitive. In order to address this limitation, the output of global climate models typically needs to be _upsampled_, that is _downscaled_ in the climate science jargon. While simple statistical methods such as interpolation provide reasonable results, machine learning methods may be able to achieve large improvement by learning from the regularities in available data. 

## Data

The data for this project will come from climate models. Climate models consist of sets of climate variables, such as humidity, temperature or wind, for each location (latitude, longitude) and time point. Typically, the goal is to _downscale_ the values of a _target variable_ of interest or _predictands_, such as surface temperature or precipitation. 

Typically, downscaling models are trained on _low-resolution_ data, for example coming from reanalysis data sets such as ERA-Interim or more recently [Era5](https://www.ecmwf.int/en/forecasts/datasets/reanalysis-datasets/era5), and evaluated on higher-resolution data.

## Relevant machine learning methods

This kind of data and tasks offers a wide range of possibilities for experimentation with machine learning methods. For example, the task resembles that of image super-resolution, a computer vision task whose objective is increasing the resolution of images. This involves the use of convolutional neural networks, but also generative methods such as GANs have been successfully used. The temporal aspect of the data also opens the door to recurrent neural networks and related algorithms. Additionally, since the use of deep learning methods is relatively recent on this task, there is considerable room for experimentation with novel ideas.

## Expectations

Teams working on this project will be expected to first reproduce the methods and result of existing previous work, such as the work by [Baño-Medina et al.](https://gmd.copernicus.org/articles/13/2109/2020/) or [Groenke et al.](https://arxiv.org/abs/2008.04679). A successful project will additionally extend the available methods or propose alternatives that are able to improve the existing previous work according to some relevant criteria, such as final performance, training speed, data efficiency.

## References

* [Paper: ClimAlign: Unsupervised statistical downscaling of climate variables via normalizing flows](https://arxiv.org/abs/2008.04679)
* [Paper: Configuration and intercomparison of deep learning neural models for statistical downscaling](https://gmd.copernicus.org/articles/13/2109/2020/) 
* [Paper: VALUE: A framework to validate downscaling approaches for climate change studies](https://agupubs.onlinelibrary.wiley.com/doi/full/10.1002/2014EF000259)
* [ERA5 data set](https://www.ecmwf.int/en/forecasts/datasets/reanalysis-datasets/era5)
* [Climate Data Store](https://cds.climate.copernicus.eu/#!/home)
* [Public data sets, ECMWF](https://apps.ecmwf.int/datasets/)

