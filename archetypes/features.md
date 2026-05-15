---
type: 'kanban'
title: "{{ replace .Name "-" " " | title }}"
description: 'Limit to 50 characters'
date: '{{ time.Now.Format $.Site.Params.dateFormat }}'
lastmod: null
author: null
categories: null
tags: null
params:
  sprint: null
  stage: design
  status: pending
  completed: null
  due: null
  percent: 0
  estimatedtime: 1
  actualtime: 0
  priority: 350
  dependencies: null
  references: null
---

A brief description. Limit to 100 characters or less.

<!--more-->

A complete description of the feature, including any constraints and
assumptions.

# {{ replace .Name "-" " " | title }}

**Goals**

  - Steps

**Acceptance Criteria**

  - Criteria
