---
title: Image identification from brain activity
order: 15
image: imgid-maps.png
---
This was the project of my internship at the Spinoza Centre for Neuroimaging in Amsterdam in the Winter of 2018. I followed up on the [paper by Zuiderbaan et al. 2017](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5603170/), in which they used the [population receptive field model (pRF)](https://www.ncbi.nlm.nih.gov/pubmed/17977024) and contrast information from the images to identify the stimulus seen by participants in an fMRI scanner. During my internship, I studied the effectiveness of saliency maps compared to contrast on multiple visual cortical areas. We found that saliency maps provide higher predictive power than contrast in V1, V2 and V3, suggesting that saliency may contain richer information that better explains the measured fMRI responses.

In order to perform the identification of the stimulus seen by participants in the fMRI scanner, we measured the BOLD responses of subjects to 45 greyscale natural images from the [Berkeley Segmentation Dataset and Benchmark data set](https://ieeexplore.ieee.org/document/937655), as ground truth. Furthermore, we estimated the pRF properties of each cortical location, in visual areas V1, V2, V3, hV4, LO12 and V3AB.

For each of the images, we computed a contrast map and two saliency maps with two distinct saliency models: [Deep Gaze and ICF](https://ieeexplore.ieee.org/document/8237775). Deep Gaze is an artificial neural networks that uses pre-learnt deep features to model human visual fixations. ICF is also a neural network, but it is restricted to only low-level (intensity and contrast) features.

Then, we mathematically combined the pRF properties at each cortical location with the information from each feature map to make predictions of the activity at each voxel and compute the correlation with the ground truth measured responses. We found that saliency maps outperform contrast in identifying the presented stimulus, suggesting that saliency may contain more information about the brain activity on V1, V2 and V3. In turn, ICF seems to be a better predictor than Deep Gaze, probably because the latter may be too biased towards high-level information present in the stimuli.

I presented a [poster]({{ site.url }}/assets/pdf/vss19-poster.pdf) with the basic findings of this project at the annual meeting of the Visual Sciences Society (VSS) in May 2019 in St. Pete Beach, Florida (USA).
