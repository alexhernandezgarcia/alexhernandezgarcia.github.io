---
layout: page
title: Publications
permalink: /publications
---
{% assign publications = site.data.publications | sort: 'year' | reverse %}
{% for item in site.data.publications %}
  {% include publication-item.html %}
{% endfor %}
<h2>Talks</h2>
{% assign talks = site.data.talks | sort: 'year' | reverse %}
{% for item in talks %}
  {% include talk-item.html %}
{% endfor %}
<h2>In the media</h2>
{% assign media = site.data.media | sort: 'date' | reverse %}
{% for item in media %}
  {% include media-item.html %}
{% endfor %}
  
