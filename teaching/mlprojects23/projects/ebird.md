---
layout: teaching
navigation : navigation_mlprojects23
title: "IFT 3710/6759 - eBird: Biodiversity monitoring"
---

This is a proposal related to Mélisande Teng's current research, so feel free to discuss further with her if this topic is of interest to you. There are many avenues to explore and you could even define your own research question with the data provided.

## Brief description 

Biodiversity is declining rapidly and beyond the value of all the different kinds of life, impacts ecosystem services including food, water security, human health and wellbeing.  In particular, one thing of interest in ecology is species distribution modelling. The goal is to use species observations and environmental data such as climate data to understand how environmental conditions influence the presence of species. Moreover, it is also important to understand the interactions between species, but most traditional models in ecology only focus on one species, in part because of the data available consisting in studies of one species only. We identify an opportunity in using citizen science data from eBird (see data section), to study birds. In this project, we will focus on 684 bird species in the USA (excluding Hawaii and Alaska). 

Here are some suggestions of tasks you could look at: 
* Species interaction: Predicting the presence of some species from another set of species. 
* Environmental conditions and species: Cluster species according to land cover (see the Deep Species Multi-embedding paper for a similar task)
* Species Distribution Modelling: Use satellite imagery (not traditionally done in ecology, but we believe that they contain rich information about species habitat) to predict the distribution of the species of your choice in a specific region (for example a US state). 

## Data

Species observations come from eBird, a citizen science database of bird sightings, which consist of reports of presence/absence of species. To restrict the problem, we will only consider species observations in the month of June. For each of the 12,000 locations where the species have been observed (hotspots), we can provide: 

* Landcover rasters
* Bioclimatic rasters
* Satellite imagery 

## Relevant machine learning methods

Depending on the questions you choose to tackle, you may touch upon clustering methods, computer vision techniques if you choose to work with satellite imagery, data augmentation and self-supervised techniques, etc. Because this is not a benchmark dataset, some of the work will consist in defining the question that you want to focus on. There will also be some work related to the preparation of the data for your research question, and for building baselines for your problem. Therefore we do not expect you to develop a fancy machine learning algorithm, but rather exploring such a new research question.

## References

The actual data has been prepared by Mélisande Teng, please contact her if you are interested in working on this project. 

* [eBird data for scientists](https://ebird.org/science)
* [Species distribution modeling for ML practitioners: a review](https://dl.acm.org/doi/pdf/10.1145/3460112.3471966)
* [Clustering species: Deep multi-species embeddings](https://arxiv.org/pdf/1609.09353.pdf)
