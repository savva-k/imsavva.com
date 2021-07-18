---
title: "Whas is a collection?"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "interview questions"
  - "Java"
---

Collection is an object that groups multiple elements into a single unit. Collections are used to store, retrieve and manipulate data. Live example: several Employee objects can be grouped into a collection:

```java
List<Employee> employees = new ArrayList<Employee>();
employees.add(new Employee(“John”));
employees.add(new Employee(“Mary”));
```

Java has a Java Collection Framework (JCF), which consists of:

- Interfaces - these are abstract data types that represent collections. Interfaces allow collections to be manipulated independently of the implementations. For example: List, Set, Map, etc...
- Implementations - these are concrete implementations of collections interfaces, for example, ArrayList, HashMap, TreeSet, etc...
- Utilities - these are methods that perform some useful actions on collections, such as sorting and sorting. These methods are polimorphic: they can be used on many different implementations of collections interfaces.
