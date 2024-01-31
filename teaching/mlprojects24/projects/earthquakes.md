---
layout: mlprojects23
title: IFT 3710/6759 - Earthquake early prediction
---

## Brief description

Despite the important threat that earthquakes pose to human populations, current earthquake detection systems are generally not able to predict seismic activity early enough to provide significant protection for the population. It is unclear whether the lack of predictability lies in the collected signals by seismograph stations or in the predictive models. If the latter, it is plausible that machine learning systems may be able to unearth predictive information from collected seismic data sets and improve our capabilities for earthquake early warnings. 

The goal of this project is to tackle the problem of earthquake early prediction, a largely unexplored area from the point of view of machine learning.

## Data

Unfortunately, a major challenge for the successful application of machine learning for this problem is the lack of large databases. However, the recent data set [INSTANCE](https://data.ingv.it/en/dataset/471#related-doc) has been specifically curated for its use by machine learning models. Therefore, this data set can serve as the starting point for this project, but students are encouraged to incorporate additional sources of data, which could make a significant contribution to this largely unexplored area in machine learning.

## Relevant machine learning methods

Given the temporal aspect of seismic signals, this project would largely deal with machine learning models for sequential data, such as RNNs, LSTMs, GRUs and Transformers. However, CNNs have also been successfully used with speech and music data transformed into the frequency domain.

## Expectations

A baseline project could aim at reproducing the baselines from previous work and establish new baselines. In an ideal scenario, the state-of-the art could be improved, being able to detect earthquakes with more anticipation, which could lead to a publication.

## References

* [INSTANCE data set](https://data.ingv.it/en/dataset/471#related-doc)
* [INSTANCE – the Italian seismic dataset for machine learning (paper)](https://essd.copernicus.org/articles/13/5509/2021/)
* [Leveraging AI for Natural Disaster Management : Takeaways From The Moroccan Earthquake](https://arxiv.org/abs/2311.08999), see especially Section 4.6
