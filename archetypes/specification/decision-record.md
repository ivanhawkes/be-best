---
title: "{{ replace .Name "-" " " | title }}"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
type: specification
description: "Decision Record"
categories: ["Documentation"]
author: "Ivan Hawkes"
---

# Decision Record

This document holds a list of all the decisions made for this project.
