---
title: Data augmentation instead of explicit regularization
order: 40
---
This is the main project of my PhD. I came up with the idea after linking several observations: 1) Data augmentation seemed to provide much larger generalization gains than weight decay or dropout. 2) Weight decay and dropout are very sensitive to tuning their hyperparameters. 3) The deep learning literature lacked a systematic analysis of how these techniques interact with each other. The main conclusion is that [weight decay and dropout seem unnecessary](https://arxiv.org/abs/1802.07042) and they can be safely replaced by [data augmentation](https://arxiv.org/abs/1806.03852).

In order to contrast data augmentation and explicit regularization (weight decay and dropout), we trained different network architectures on several benchmark data sets for image object recognition, turning on and off the regularizers and with different data augmentation schemes. Besides, we vary the amount of available training data and the depth of the architectures.

In general, we find that [data augmentation has many advantages](https://link.springer.com/chapter/10.1007/978-3-030-01418-6_10) over explicit regularization: first, in the vast majority of the experiments, training with only data augmentation outperforms training with both explicit regularization and data augmentation, as opposed to the common practice in deep learning. Critically, the superiority of data augmentation becomes much larger if the available training data is scarce or if the architecture changes, because the hyperparameters of weight decay and dropout are very sensitive to such changes.

Furthermore, we have recently shown that deep neural networks trained with [heavier data augmentation](https://ccneuro.org/Papers/ViewPapers.asp?PaperNum=1046) seem to learn representations that more closely resemble those in the inferior temporal (IT) cortex of the human visual cortex, that is the highest-level region in the object recognition network in the brain.

