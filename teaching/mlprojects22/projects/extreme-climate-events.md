---
layout: teaching
navigation : navigation_mlprojects22
title: IFT 3710/6759 - Detection of extreme cimate events
---

## Brief description

The goal of this project will be to build a machine learning algorithm to detect extreme weather events (tropical cyclones and atmospheric rivers) from atmospherical data. Models that are capable of accurately detecting such events are crucial for our understanding of how they may evolve under various climate change scenarios. A simplified version of this project was designed as the first Kaggle competition for IFT 3395/6390 - Fundamentals of machine learning in Fall 2021.

## Data

This project is inspired by the availability of a benchmark data set for the detection extreme weather events, [ClimateNet](https://portal.nersc.gov/project/ClimateNet/). ClimateNet contains time series of climate variables from nearly 900,000 locations (latitude and longitude) around the world, each labelled according to one of three classes:

* Standard background conditions
* [Tropical cyclone](https://en.wikipedia.org/wiki/Tropical_cyclone)
* [Atmospheric river](https://en.wikipedia.org/wiki/Atmospheric_river)

The number of data points per class is not balanced, as the _standard background conditions_ represents the majority class. This turns the task a _detection_ problem. The data set consists of 16 atmospheric variables such as pressure, temperature and humidity, besides the latitude, longitude and time. The complete data set amounts for about 30 GB.

## Relevant machine learning methods

Teams working on this project will likely look into detection algorithms, methods for time series data (such as recurrent neural networks) and for spatial data (such as convolutional networks). Methods developed to deal specifically with climate data are likely to be relevant too.

## Expectations

A reasonable minimum requirement will be for the teams to reproduce the [original results](https://ai4earthscience.github.io/neurips-2020-workshop/papers/ai4earth_neurips_2020_55.pdf), possibly making use of the [available open-sourced code](https://github.com/andregraubner/ClimateNet) by the authors of the data set, and ideally other follow-up of work tackling this benchmark. 

A successful project will additionally extend the available methods or propose alternatives that are able to improve the existing previous work according to some relevant criteria, such as final performance, training speed, data efficiency, etc.

## References

* [ClimateNet data set page](https://portal.nersc.gov/project/ClimateNet/)
* [GitHub repository](https://github.com/andregraubner/ClimateNet)
* [Paper: Spatio-temporal segmentation and tracking of weather patterns with light-weight Neural Networks](https://ai4earthscience.github.io/neurips-2020-workshop/papers/ai4earth_neurips_2020_55.pdf)
