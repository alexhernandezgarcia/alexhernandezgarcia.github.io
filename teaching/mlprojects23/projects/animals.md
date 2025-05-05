---
layout: teaching
navigation : navigation_mlprojects23
title: IFT 3710/6759 - Animal classification and detection
---

## Brief description

This project proposes a set of general ideas and data sets all around the topic of animal classification and detection from photos. Images of animals are interesting because they constitute a valuable test bed and benchmark for computer vision models and, at the same time, improving the performance of such models on the task of animal classification and detection has the potential of facilitating the work of life scientists.

## Data

We propose three data sets:

* [Caltech Camera Traps (CCT)](https://beerys.github.io/CaltechCameraTraps/): images taken by motion- or heat-triggered cameras used by biologist to monitor animal populations and behaviour. Images contain challenging scenarios such as extreme light conditions, motion blur, occlusions, unusual perspectives, etc. Furthermore, the data set was designed as a benchmark for testing generalisation to unseen locations.
* [Moving Camouflaged Animals Dataset (MoCA)](https://www.robots.ox.ac.uk/~vgg/data/MoCA/): 141 videos (37K frames) of 67 animals that have mastered camouflage, annotated with the bounding box around the animals and motion type labels.
* [Animals with attributes 2](https://cvml.ist.ac.at/AwA2/): images of animals annotated with a set of attributes, especially designed for testing transfer learning between classes.

## Relevant machine learning methods

These data sets open the door for testing a wide range of machine learning algorithms. Primarily, convolutional neural networks are bound to be the main architecture for learning from images. However, there is room for multiple extensions and exploration of different algorithms:

* Methods for video data (MoCA data set).
* Generative adversarial networks, for instance to explore unsupervised domain adaptation.
* Transfer learning.
* Detection algorithms.

## Expectations

This is a highly explorative, open, research-like project. Teams may decide to focus on one of the data sets and stick to one of the pre-defined tasks, potentially reproducing a piece of previous work and extending. Alternatively, students are welcome to propose an original project based on these data sets. As an idea, it could be possible to combine work with more than one data set, for instance by exploring unsupervised domain adaptation or transfer learning from one data set to another.

## References

* [Caltech Camera Traps (CCT)](https://beerys.github.io/CaltechCameraTraps/)
* [Moving Camouflaged Animals Dataset (MoCA)](https://www.robots.ox.ac.uk/~vgg/data/MoCA/)
* [Animals with attributes 2](https://cvml.ist.ac.at/AwA2/)
* [Paper: Unsupervised domain adaptation in semantic segmentation: a review](https://arxiv.org/abs/2005.10876)

