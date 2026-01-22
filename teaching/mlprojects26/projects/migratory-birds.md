---
layout: teaching
navigation : navigation_mlprojects26
title: "IFT 3710/6759 - Classification of migratory vs non migratory birds using protein data"
---

## Brief description

Migration is an important phenomenon in the life of birds and in their species’ survival. Biological studies have identified a protein called cryptochrome4 (Cry4) located near the bird’s eye, to play a key role to migration of birds such as the European robin, Eurasian blackcap, and others [1]. Despite its importance, the role of cryptochrome in migration is still not well understood. Recent work has collected cryptochrome4 sequences from multiple bird species and annotated each species as migratory or non-migratory [2]. This annotated dataset [3] enables us to use ML methods to study this protein.

The goal of this project is to build a machine learning classifier that predicts whether a bird is migratory or non-migratory based on the protein sequence. This task is challenging because proteins are high-dimensional objects composed of long sequences of amino acids or 3D atomic structures. Also, the available dataset is relatively small and incomplete and the decision boundary between migratory and non-migratory species may be complex or difficult to learn just from the cryptochrome protein. Despite these, successfully trained models may provide valuable biological insights into the role of cryptochrome4 in bird migration.

Additionally, in molecular machine learning, there is an active work in explainable AI which uses attention-based GNNs to explain which parts of the input contribute positively to the classification [4]. An advanced extension of the project would be to apply explainable AI methods into the classifier which can add more knowledge in our understanding about bird migration. 

## Data

The main dataset comes from a paper that provides cryptochrome 4 sequences annotated by whether the corresponding bird is migratory or non-migratory [2]. The data consist of DNA sequences of the cryptochrome4 gene, which can be translated into amino acid sequences using rule-based codon translation methods. For example: the DNA codon "AGT" maps to the amino acid "serine" ([an example tool to translate](https://en.vectorbuilder.com/tool/dna-translation.html)). Amino acid sequence is a convenient input representation due to the existence of many LLMs trained on large databases of protein sequences.

Another option it to convert the sequences into 3D protein structures, which can be predicted using open-source tools such as AlphaFold2 and the server of [Alphafold3](https://alphafoldserver.com/). 

The structures may be simplified through coarse-graining techniques, such as retaining only C-alpha atoms, to reduce complexity. When using the 3D structure of the protein, care must be done to preserve invariant properties such as rotation and translation invariance. 

Students are also encouraged to explore additional biological databases if available.

## Relevant machine learning methods

Proteins can be represented in many ways which corresponds to different modeling strategies. Proteins can be represented as amino acid sequences which is a text-like data that allows the use of NLP models. You can start with simple NLP models, or train on top of language models such as BERT or use more complex LLMs. A common approach in literature is to use the trained weights of the Evoformer from Alphafold2 as an embedding layer and train a model on top of it. Evoformer creates an embedding of a protein based on how amino acid sequences commonly appear together in known proteins. Since it was trained on a large database of known proteins, this can lessen the challenges created by the small size of the available dataset. Another way of representation is using a 3D atomic or coarse-grained protein structures which can be modeled using GNNs. 

## Expectations

The main goal is to successfully train a machine learning model that can classify if the bird is migratory or non-migratory based on the protein sequence of their cryptochrome. However, since this is a challenging task, such that it may not be possible to create a decision boundary since the data contains a lot of features and the existing dataset is few and incomplete, the students are instead expected to explore ML models used in molecular biology and analyze the strengths and limitations of each model. 

## References
1. [Magnetic sensitivity of cryptochrome 4 from a migratory songbird](https://doi.org/10.1038/s41586-021-03618-9)
2. [Adaptive evolution and loss of a putative magnetoreceptor in passerines](https://doi.org/10.1098/rspb.2023.2308)
3. [Dataset of 363 bird genomes from adaptive evolution and loss of a putative magnetoreceptor in passerines](https://doi.org/10.6084/m9.figshare.c.7043142)
4. [Improving Counterfactual Truthfulness for Molecular Property Prediction through Uncertainty Quantification](https://arxiv.org/pdf/2504.02606 website: https://megan.aimat.science/)
