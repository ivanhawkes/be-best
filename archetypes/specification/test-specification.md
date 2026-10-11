---
title: "{{ replace .Name "-" " " | title }}"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
layout: specification
description: "Test Specification"
categories: ["Documentation"]
author: "Ivan Hawkes"
---

# Test Specification

Some text.

## Less important.

And more.

### Least important.

Try not to nest more than that.
