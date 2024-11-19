---
layout: page
title: Projects
permalink: /projects
---
{% assign projects = site.projects | sort: 'order' | reverse %}
{% for project in projects %}
  {% assign side = forloop.index0 | modulo: 2 %}
  {% if side == 0 %}
  {% include project-img-right.html %}
  {% else %}
  {% include project-img-left.html %}
  {% endif %}
{% endfor %}
  
