---
layout: page
title: Teaching
permalink: /teaching
---

Teaching is one of my favourite parts of my job, alongside research itself. Furthermore, I believe there is a strong symbiotic relationship between research and teaching.

From September to December 2025, I am teaching [_Probabilistic inference with GFlowNets_]({{ site.url }}/gflownets25) at the [Université de Montréal](https://www.umontreal.ca/). A (nearly complete) record of my main teaching activity is given below.

### Teaching activity

{% assign teaching = site.data.teaching | sort: 'year' | reverse %}
{% for item in site.data.teaching %}
  {% include teaching-item.html %}
{% endfor %}

