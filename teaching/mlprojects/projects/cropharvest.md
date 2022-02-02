---
layout: mlprojects
title: IFT 3710/6759 - Crop detection and classification
---

## Brief description

The goal of this project will be to build machine learning algorithms for the classification and detection of agricultural land use from remote sensing data. Automatic classification of crop lands offers an opportunity to improve the reaction to challenges such as climate change, agriculture and food security. A simplified version of this project was designed as the second Kaggle competition for IFT 3395/6390 - Fundamentals of machine learning in Fall 2021.

## Data

This project is inspired by the availability of a family of benchmark data sets, [CropHarvest](https://github.com/nasaharvest/cropharvest), with satellite data set and labels related to agricultural land use. The data set consists of monthly data containing multispectral imagery from satellites (Sentinel-1 and Sentinel-2), meteorological data (temperature and precipiation), topographical data (elevation and slope) and vegetation health indicators.

The data set is organised into several benchmark tasks. For instance, one of the simplest tasks is the classification locations into _crop_ or _non-crop_ land. Another possible task is to classify each location into a type of crop, and intermediate tasks are the binary classification of one type of crop versus the rest.

## Relevant machine learning methods

Teams working on this project will likely look into computer vision methods tailored for remote sensing and multispectral imagery, as well as methods for sequence data to deal with the temporal aspect of the data. Students may use this data set to explore multi-task, transfer learning and meta-learning methods, to explore how models pre-trained on one task may generalise to other tasks or locations.

## Expectations

A reasonable minimum requirement will be for the teams to reproduce the [original results](https://openreview.net/pdf?id=JtjzUXPEaCu), possibly making use of the [available open-sourced code](https://github.com/nasaharvest/cropharvest) by the authors of the data set, and ideally other follow-up of work tackling this benchmark. 

A successful project will additionally extend the available methods or propose alternatives that are able to improve the existing previous work according to some relevant criteria, such as final performance, transfer learning capabilities, data efficiency, generalisation to multiple tasks, etc.

## References

* [Original paper: CropHarvest: a global satellite dataset for crop type classification](https://openreview.net/pdf?id=JtjzUXPEaCu)
* [GitHub repository](https://github.com/nasaharvest/cropharvest)
