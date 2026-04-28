---
title: "{{ replace .Name "-" " " | title }}"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
type: "specification"
description: "Design Specification"
categories: ["Documentation"]
tags: []
author: "Ivan Hawkes"
---

# Design Specification

Some text.

## Less important.

And more.

### Least important.

Try not to nest more than that.
