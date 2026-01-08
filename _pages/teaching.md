---
layout: page
title: Teaching
permalink: /teaching
---

Teaching is one of my favourite parts of my job, alongside research itself. Furthermore, I believe there is a strong symbiotic relationship between research and teaching.

From January to May 2026, I am teaching [_Advanced machine learning projects_]({{ site.url }}/mlprojects) at the [Université de Montréal](https://www.umontreal.ca/). A (nearly complete) record of my main teaching activity is given below.

### Teaching activity

{% assign teaching = site.data.teaching | sort: 'year' | reverse %}
{% for item in site.data.teaching %}
  {% include teaching-item.html %}
{% endfor %}

