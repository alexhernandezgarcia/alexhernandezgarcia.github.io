---
layout: mlprojects
title: "IFT 3710/6759 - GeoLifeCLEF: Location-based species presence prediction"
---

## Brief description

This project is based on the GeoLifeCLEF challenge, which focuses on predicting the list of species most likely to be observed at a given location. This task has practical applications for biodiversity management and conservation. The goal for machine learning models trained for this task is to predict the most likely species to be found at a given location. 

While the 2022 edition has not been launched officially yet, the data set and evaluation method should not differ too much from the 2021 edition, so teams working on this project might be able to submit their work to the competition. The competition started in 2018, so there is room for improvement and exploration of machine learning techniques. 

## Data

The labels consist of plant species in France and animal species in the US, and the predictions are based on high resolution (1 m per pixel) remote sensing data and environmental variables (land cover data and bio-climatic data, including climate and soil data). 1.9 M geo-localized observations from France and the US of 31,000 species are provided.

## Relevant machine learning methods

This project will likely explore convolutional neural networks for satellite images and computer vision algorithms in general. Data augmentation, so-called self-supervised learning and multi-task learning are likely candidates to be explored in this project.

## Expectations

Given the availability of papers and code from previous editions of the competition, a minimal first requirement will be to reproduce one existing method. A sucessful project will extend previous work and improve on some relevant criteria, such as prediction peformance, data efficiency, training speed, etc.

## References

* [Kaggle competition](https://www.kaggle.com/c/geolifeclef-2021/)
* [Data set paper](https://arxiv.org/abs/2004.04192)
* [2020 participation paper](http://ceur-ws.org/Vol-2696/paper_192.pdf)
* [2021 winning submission](http://ceur-ws.org/Vol-2936/paper-140.pdf)
