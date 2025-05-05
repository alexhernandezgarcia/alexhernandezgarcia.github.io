---
layout: teaching
navigation : navigation_mlprojects23
title: IFT 3710/6759 - NLP for Indigenous languages
---

This is a project proposal with a less concrete plan than other projects, therefore more risky and uncertain. Students are welcome to explore the ideas in this project, but these challenges must be well understood.

## Brief description

This project aims at exploring the application of natural language processing (NLP) techniques on corpora of Indigenous languages, which have received very little attention by the community in the past. The main challenge of this task lies on the comparably small amount of available data for either acoustic and language models. Another challenge is that some Indigenous languages, such as Inuktitut, are highly [polysynthetic](https://en.wikipedia.org/wiki/Polysynthetic_language), that is words are composed of many morphemes with independent meaning that may not even appear in isolation otherwise. Given these challenges, we propose this project with a word of caution noting that it is a highly underexplored topic, though very interesting. The goal of the project will be to reproduce prior existing work and explore techniques of transfer learning and low-resource learning.

## Data

As mentioned above, there exist little annotated data of Indigenous languages, compared to languages that have received the most attention by the NLP community, such as English, French or Chinese. Nonetheless, there are available data sets, such as [transcriptions from parliament proceedings and oral stories](https://nrc.canada.ca/fr/recherche-developpement/recherche-collaboration/programmes/segmentation-indexation-enregistrements-audio-langues-autochtones), as well as previous work that has used these data (see below).

Teams interested in working in this project should understand that the data sets will not be as processed and ready to be used as highly benchmarked data sets for NLP on, for instance, English or French. One early step should be to contact the researchers who have published prior work to obtain recommendations and potential help.

## Relevant machine learning methods

The main machine learning models for this project will be those designed for textual and/or speech data, that is models typically developed by the natural language processing community. Furthermore, given the low-resource state of Indigenous languages, an interesting avenue to explore will be techniques such as data augmentation and transfer learning.

## Expectations

As mentioned, this is a challenging project. Therefore, a reasonable goal will be to reproduce prior existing work and set up the foundations for potential future work extending the application of NLP for Indigenous languages, potentially benefiting from transfer learning techniques.

## References

* [Toward automatic speech recognition in audio recordings of Indigenous languages, NRC](https://nrc.canada.ca/en/research-development/research-collaboration/programs/project-segment-index-audio-recordings-indigenous-languages)
* [Paper: Automatic transcription challenges for inuktitut, a low-resource polysynthetic language](https://aclanthology.org/2020.lrec-1.307.pdf)
* [Paper: Speech transcription challenges for resource constrained indigenous language cree](https://aclanthology.org/2020.sltu-1.51.pdf)
