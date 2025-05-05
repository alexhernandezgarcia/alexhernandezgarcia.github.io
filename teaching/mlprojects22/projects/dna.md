---
layout: teaching
navigation : navigation_mlprojects22
title: IFT 3710/6759 - DNA aptamers modelling
---

## Brief description

This project is about developing machine learning methods for modelling DNA aptamer sequences. DNA aptamers are short, single-stranded nucleotide (ssDNA) sequences that have multiple applications as biosensors. Machine learning methods can be used to improve the modelling of relevant properties of DNA sequences and in turn accelerate the design of aptasensors.

## Data

This project relies on [NUPACK](http://www.nupack.org/), a Python package for the analysis of the minimum free-energy structure of DNA and RNA sequences. DNA aptamers can be represented as sequences as of four [nucleobases](https://en.wikipedia.org/wiki/Nucleobase): adenine (A), cytosine (C), guanine (G) and thymine (T). For instance, one possible sequence is `TATGCATGTGGGCGACGCAGTGCCCGTGGGATTTACTTGCAC`. Then, NUPACK can be used to simulate properties of the 2D structure of such sequences, such as the minimum free-energy or the number of _hair pins_. The goal of this project is to explore machine learning algorithms to model such sequences and predict their properties.

While the use of existing experimental data may be considered, a baseline setup of this project will rely on simulated sequences from the combinatorially large set of possible sequences, and the properties predicted with NUPACK.

## Relevant machine learning methods

Teams working on this project will largely explore machine learning algorithms suited to deal with sequence data, such as recurrent neural networks and transformers. Since NUPACK provides multiple properties about the sequence, an interesting aspect to explore will be a multi-task learning scenario, where several properties are predicted from the sequences.

## Expectations

A baseline project should construct and evaluate a machine learning model that can accurately predict the free-energy of DNA aptamer sequences as simulated by NUPACK. A successful project will also consider other outputs of NUPACK, such as the number of hair pins, and compare the performance of several machine learning algorithms. Additional aspects to explore are the generalisation capabilities using reduced amounts of data, or generalisation to varying lengths of the sequences.

## References

* [NUPACK Python package](http://www.nupack.org/)
* [GitHub repository with relevant functionality](https://github.com/alexhernandezgarcia/activelearningpipeline)
* [Paper: E2EDNA: Simulation protocol for DNA aptamers with ligands](https://chemrxiv.org/engage/chemrxiv/article-details/60cbcb1d461f5627524764ab)
