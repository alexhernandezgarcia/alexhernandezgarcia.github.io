---
layout: teaching
navigation: navigation_gflownets25
title : Probabilistic inference with GFlowNets - Bibliography
---

# Bibliography

This page is designed to contain a bibliography collection of scientific literature related to GFlowNets. The page is still work in progress though, so the current content is likely to miss important references and is not well organised yet. If you have suggestions to add to the list, please do get in touch.

---

{% assign publications = site.data.publications | sort: 'year' %}
{% for item in site.data.gfn-bibliography %}
  {% include publication-item-bib.html %}
{% endfor %}
