---
title: "Describing the Java Set collection interface"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "collections"
  - "Java"
  - "interview questions"
---

A Set is a Collection that cannot contain duplicates. The Set interface extends Collection interface but has no specific methods. It adds the restriction that duplicates are prohibited. This interface also adds a stronger contract on the behavior of the equals and the hashcode methods, allowing Set instances to be compared meaningfully even if their implementation types differ. The two Set instances are equal if they contain the same elements.

JCF contains three general-purpose Set implementations: HashSet, LinkedHashSet and TreeSet. They are all based on HashMap, LinkedHashMap and TreeMap correspondly. When you add an element, it stores as a “key” of inner Map, and the value is always a dummy object.

HashSet which is the best-performing implementation, stores its elements in a hash table. HashSet doesn’t care about ordering elements. If you need to order your elements, consider using use TreeSet, which stores its elements in a red-black tree and uses comparators. However, if you want to store your elements in order they were inserted, consider using LinkedHashSet.
