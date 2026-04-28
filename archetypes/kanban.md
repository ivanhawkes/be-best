---
type: "kanban"
title: "{{ replace .Name "-" " " | title }}"
description: "No Description"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
lastmod:
author: ""
params:
  completed: null
  stage: story
  status: story
  sprint: null
  due:
  priority: 550
  allocatedtime: 1
  percent: 0
  depends-on: []
  references: []
---

Please provide a brief summary of the task.

<!--more-->
