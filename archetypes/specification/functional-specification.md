---
title: "{{ replace .Name "-" " " | title }}"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
type: "specification"
description: "Functional Specification"
categories: ["Documentation"]
author: "Ivan Hawkes"
---

# Functional Specification

Some text.

## Less important.

And more.

### Least important.

Try not to nest more than that.
