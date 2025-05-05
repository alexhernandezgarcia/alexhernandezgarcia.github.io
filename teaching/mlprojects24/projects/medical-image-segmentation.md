---
layout: teaching
navigation : navigation_mlprojects24
title: IFT 3710/6759 - Medical image segmentation
---

## Brief description

This project is about the problem of segmenting 3D medical images, that is classifying the voxels of medical images into different categories. This project proposes to use the Medical Segmentation Decathlon, which contans 10 data sets with images of different modalities, such magnetic resonance imaging (MRI) or computed tomography (CT), from different parts of the human body. 

## Data

The source of the data for this project is clearly defined: the Medical Segmentation Decathlon. Nonetheless, this benchmark contains 10 different data sets and for the purposes of this project, it will be sufficient if only one of the data sets is used in the project.

## Relevant machine learning methods

This project deals with 3D images, therefore the main machine learning models to use will be computer vision algorithms such as CNNs. In particular, one specific architecture that has been successful for semantic segmentation is U-Net and the variant nnU-Net for medical image segmentation. Another interesting avenue to explore for this project are so-called self-supervised methods.

## Expectations

This can be a relatively challenging project due to the complexity of the task and the data (3D images). Therefore, the students will be expected to depart from existing models such as nnU-Net and be able to reproduce published results in one or a just a few data sets of the Medical Segmentation Decathlon. After reproducing previous work, this project offers multiple avenues including self-supervised learning.

## References

* [Medical Segmentation Decathlon](http://medicaldecathlon.com/)
* [Paper: nnU-Net: Self-adapting Framework for U-Net-Based Medical Image Segmentation](https://arxiv.org/abs/1809.10486)
