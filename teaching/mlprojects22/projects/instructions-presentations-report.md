---
layout: mlprojects22
title: IFT 3710/6759 - Instructions for the presentations and final report
---

The oral presentations, final reports and code of the projects are the main deliverables of this class. The final grade is entirely based on the work on the project and the presentation, report and source code constitute your main way to explain and show your work.

## Dates

Presentations will take place **in class** on the following days:

* **Wednesday 20th of April**, 16:30--18:30 (EST), 1140 Pav. André-Aisenstadt
* **Friday 22nd of April**, 09:30--11:30 (EST), Y-117 Pav. Roger-Gaudry

Final reports and the source code are due on **April 29th 2022** at 23:59 (EST).

## Presentations

Each team is expected to give a presentation in class on the aforementioned dates. The presentations should last about 10 minutes, excluding questions. Since there are 15 teams and 2 sessions of 120 minutes, there will be a maximum of (`120 * 2 - 15 * 10 =`) 90 minutes for questions and discussion for all teams. The presentation sessions will be organised in blocks of presentations with time for questions and discussion after each block. Teams will be assigned a slot by the instructors and all students are highly encouraged to attend the two presentation sessions. Participation and engagement in the presentation sessions will count towards the part of the grade corresponding to the presentations.

The main goal of the presentations is to explain the work you have done in your project and convey the most important results and conclusions. A good presentation will be one in which the rest of the class will learn something new. Therefore, make sure to provide enough context and prepare an effective presentation. Below are some relevant resources for preparing and giving effective presentations:

* [Ten simple rules for making good oral presentation](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.0030077&type=printable), by Philip E. Bourne, PLOS Computational Biology (2007)
* [Ten simple rules for short and swift presentations](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1005373&type=printable), by Christopher J. Lortie, PLOS Computational Biology (2017)
* [How the science of visual attention can help you make better presentations](https://www.youtube.com/watch?v=gOnSTEFJmoU), by  Aha, That Makes Sense, YouTube

## Final reports

The final report of your project is the main deliverable of this class, since it is the document where you can best demonstrate the work that you have done throughout the term. Final reports should include the following content:

* Title
* Team members
* Abstract
* Introduction: context, motivation and summary of the work.
* Literature review
* Methods
* Results
* Conclusions
* Contributions of each team member
* References

Whilst this structure is recommended, feel free to modify it if you have a good reason for it. Although the report may resemble a scientific publication, an important difference should be observed: **you are welcome and encouraged to include methods and results that _did not work_ as you had expected**, if they were a significant part of your work and/or you think we can learn from them. 

As you may see, the different parts closely match the deliverables that you have worked on during the course. Insofar as you produced near-final versions of the parts for the intermediate deliverables, you are welcome to reuse them for the final report.

### Format and template

The recommended length for the final reports is about 8 pages, with a minimum of 6 and a maximum of 10 pages, excluding the list of references. You may include supplementary material if you consider it important, but keep in mind that the evaluation will be chiefly based on the main body of the report. Please follow these formatting instructions for the report:

* Font size:
    * Main paragraphs: 10 points
    * First-level headings: 12 points, bold type
    * Lower-level headings: 10 points, bold type
* Vertical spacing: 11 point
* Paragraph separation: 5.5 points, no indentation
* Margins:
    * Left margin: 9 picas
    * Text width: 33 picas
    * Text height: 54 picas

The above instructions are inherited from the guidelines for [NeurIPS 2022](https://neurips.cc/Conferences/2022/PaperInformation/StyleFiles) submissions. If you have experience with LaTeX or are willing to learn, you are highly encouraged to use the NeurIPS 2022 LaTeX template, since it will allow you to focus on the content rather the format while producing a nicely formatted document. If you do not have much experience with LaTeX, you may find [Overleaf](https://www.overleaf.com/) handy.

### Tips on scientific writing

Not only the work done during the project development as reflected by the report, but also the quality of the report itself will be considered for the final grade. Therefore, make sure to follow common guidelines for writing good scientific papers or technical reports. Good papers usually follow a comprehensive story-telling structure:

1. Context: needed to understand the need (2)
2. Need: what is the ultimate motivation? Why is this important?
3. Task: overall objective
4. Object: particular objective of the present document
5. Findings
6. Conclusions
7. Perspective: future work

This follows a funnel-inverted funnel structure, that is it starts with the general context, progresses towards the details and ends with a general perspective again. With a closer look, points 1--4 are about _why?_ and 5--7 about _what?_. The more specialized the target audience, the more emphasis on the _what_ and less the _why_; the more general, the other way around. This structure is not only useful for organising a paper, but also the abstract.

Another more compact and effective rule of thumb for organising pieces of information (stories) is the context-content-conclusion (CCC) scheme. The rationale behind this structure is that every piece of content is more effectively conveyed if introduced by some context and wrapped up with a conclusion. This applies to a report as a whole, but also to a section and a paragraph. It is also a good scheme to follow when preparing slides.

A good and easy-read article about scientific writing is the following:

* [Ten simple rules for structuring papers](https://journals.plos.org/ploscompbiol/article/file?id=10.1371/journal.pcbi.1005619&type=printable), by Brett Mensh and Konrad Kording, PLOS Computational Biology (2017)

## Source Code

The source code of your project is also part of the evaluation. Please provide a link to a GitHub (or GitLab, or similar) repository with your source code alongside your final report. Good code should be easy to read and easy to run. Therefore, make sure to clean up the final version of your code: remove old or unnecessary pieces of code, add documentation, write a README with instructions on how to run the code and examples to reproduce your experiments, etc. In particular, consider explicitly indicating the following:

* Python version you used to run your experiments.
* Necessary libraries and their versions. If you used virtual environments, as was recommended, a simple way of indicating the library requirements is via a `requirements.txt` file. You can generate one by running in a shell with you environment activated the following command: `python -m pip freeze > requirements.txt`. With a `requirements.txt` available, it should be straightforward to reproduce the environment by running `python -m pip install -r requirements.txt`.

A good practice to ensure that you included all the necessary information to run your code is to follow your own instructions in a fresh new environment and checking that the code runs seamlessly.

Since your experiments may be computationally expensive, please consider preparing a lightweight configuration to _dry-run_ your code, for example with a subset of the data, a simpler architecture, a few epochs, etc.
