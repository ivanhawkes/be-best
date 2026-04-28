---
title: "{{ replace .Name "-" " " | title }}"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
type: "specification"
description: "Technical Specification"
categories: ["Documentation"]
author: "Ivan Hawkes"
---

# Technical Specification

Some text.

## Less important.

And more.

### Least important.

Try not to nest more than that.
