---
title: "What data can be stored in a collection?"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "collections"
  - "Java"
  - "interview questions"
---

You can store anything but primitives. To store primitives consider using wrappers (Integer for int, Double for double, etc…). For example, you can store your own classes:

```java
List<MyClass> myClassObjects = new LinkedList<MyClass>();
```

To store primitives:

```java
Set<Integer> ints = new TreeSet<Integer>();
```

Notice, that you can add primitives, since it will be wrapped automatically:

```java
ints.add(1); // Correct
```
