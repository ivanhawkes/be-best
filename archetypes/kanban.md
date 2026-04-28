---
type: "kanban"
title: "{{ replace .Name "-" " " | title }}"
description: "No Description"
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
lastmod:
completed:
categories: []
tags: []
author: ""
params:
    stage: story
    status: pending
    sprint: 
    due:
    priority: 550
    allocatedtime: 1
    percent: 0
    depends-on: []
    references: []
---

Please provide a brief summary of the task.

<!--more-->
