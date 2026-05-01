---
type: "kanban"
title: "{{ replace .Name "-" " " | title }}"
description: "No Description"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
lastmod:
author: ""
params:
  sprint: null
  stage: design
  status: pending
  completed: null
  due:
  percent: 0
  estimatedtime: 1
  actualtime: 0
  priority: 550
  depends-on: null
  references: null
---

Please provide a brief summary of the task.

<!--more-->
