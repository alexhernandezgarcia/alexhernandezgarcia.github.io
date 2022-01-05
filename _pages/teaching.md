---
layout: page
title: Teaching
permalink: /teaching
---

Teaching is one of my favourite parts of my job, alongside research itself. Furthermore, I believe there is a strong symbiotic relationship between research and teaching.

Currently, I am teaching [_Projets avancés en apprentissage automatique_]({{ site.url }}/mlprojects) / _Advanced machine learning projects_ at the [Université de Montréal](https://www.umontreal.ca/). A non-exhaustive record of my teaching activity is given below.

### Teaching activity

{% assign teaching = site.data.teaching | sort: 'year' | reverse %}
{% for item in site.data.teaching %}
  {% include teaching-item.html %}
{% endfor %}

