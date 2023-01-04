---
layout: mlprojects
title: "IFT 3710/6759 - WILDS: Distribution shifts in the wild"
---

## Brief description

[WILDS](https://wilds.stanford.edu/) is a collection of benchmark datasets that represent distribution shifts faced in the wild, and span a diverse range of applications (animal species classification from camera trap images, tumor identification, wheat head detection for agricultural field management, toxic comments classification, land type classification from aerial imagery, poverty mapping from satellite imagery, etc.) 

Two types of distribution shift are represented: 

* In domain generalization: the training and test distributions comprise disjoint sets of domains, and the goal is to generalize to domains unseen during training, for example if we are looking at species classification from camera trap images, the domains are camera traps and we seek to learn models that generalize to photos taken from new camera deployments.
* Subpopulation shift: the training and test domains overlap, but their relative proportions differ. For example if we look at land classification, we might want to predict the same items (schools, malls, residential, etc.) in Africa and America but might find more malls in America and Africa. 

## Data

WILDS contains 10 diverse data sets. Therefore, this projects consists of a framework for exploring machine learning methods to tackle distribution shifts, rather than defining a task on a particular data set. Teams may focus on only one of the data sets.

## Relevant machine learning methods

Depending on the data set chosen, specific algorithms may be explored. For instance, convolutional neural networks will be used for image data, and graph neural networks for molecules. An interesting aspect of this project is the exploration of methods that improve generalisation to distribution shift, which is one of the most relevant machine learning challenges.

## Expectations

Teams may focus on only one of the data sets, or evaluate their methods on more than one data set. Given the popularity of the challenge, there exists previous work and code. Therefore, a reasonable minimal requirement will be the reproduction of a relevant method, and the subsequent extension and improvement. Another possible angle for this project is the analysis and comparison of several existing methods.

## References

* [WILDS benchmar website](https://wilds.stanford.edu/)
