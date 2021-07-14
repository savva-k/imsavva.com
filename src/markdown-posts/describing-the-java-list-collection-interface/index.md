---
title: "Describing the Java List collection interface"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "collections"
  - "Java"
  - "interview questions"
---

List is an ordered collection that can contain duplicates. In addition to the Collection interface methods, the List interface includes the following:

- Positional access: manipulating the elements by their index in the list. This includes methods such as: get, set, add, addAll, remove.

- Search: methods indexOf and lastIndexOf search for a specified object in the list and return its index.

- Iteration: extends Iterator semantics to take advantage of the list’s sequential nature. With ListIterator you can traverse the list in either direction, modify list during iteration and obtain the current position of the iterator. The listIterator methods provide this behavior.

- Range-view: the sublist method returns a sublist with a specified range of elements.

There are two general-purpose List implementations: ArrayList, which is based on an array, and which is usually the better-performing, and LinkedList, which offers better performance under certain circumstances.
