---
date: 2019-06-14
title: Data Augmentation Invariance
layout: page
---
We have just uploaded to arXiv a new pre-print, ["Learning robust visual representations using data augmentation invariance"](https://arxiv.org/abs/1907.04547). We first demonstrate that typical CNNs are remarkably sensitive to the common transformations of data augmentation. Second, taking inspiration from the invariance of the visual cortex to identity-preserving transformations, we add a loss term to the objective function that successfully learns more robust features.

This is still work in progress, initiated during my internship at the Cognition and Brain Sciences Unit of the University of Cambridge with [Dr. Tim Kietzmann](http://www.timkietzmann.de/) a few months ago, but we are excited about these promising results.

Given the remarkable discriminative power of deep neural networks to perform object categorization, one would expect that the features they learn are robust to simple transformations such as rotation, zoom, change of lightness, contrast, etc. However, the mean squared distance between the activations of an image and the activations of its transformations is actually larger than at the pixel space.

This contrasts with what has been often observed in the primate visual cortex: neurons across the hierarchy of the ventral visual stream are increasingly invariant to identity-preserving transformations. Taking inspiration from this, we implement a very simple, yet effective and efficient mechanism to promote the similarity between the representations that correspond to the same image. With our mechanism, data augmentation invariance, the models seem to easily learn more robust features, as shown in the figure below. Check the details in our [paper](https://arxiv.org/abs/1907.04547)!

{% include image.html url="/assets/images/invariance.png" description="Distribution of the invariance score at each layer of the baseline model and the model trained with data augmentation invariance" %}
