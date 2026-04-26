---
title: "{{ replace .Name "-" " " | title }}"
date: '{{ time.Now.Format "2006-01-02" }}'
completed:
type: "kanban"
description: ""
summary: ""
categories: []
tags: []
author: "Ivan Hawkes"
params:
    updated:
    due:
    subtasks: []
    priority: 300
    dependencies: []
    allocatedtime: 4
    percent: 0
---
