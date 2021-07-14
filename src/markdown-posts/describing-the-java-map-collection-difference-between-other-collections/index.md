---
title: "Describing the Java Map collection. Difference between other collections."
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "collections"
  - "Java"
  - "interview questions"
---

Map is a collection that stores key-value pairs. A map cannot contain duplicate keys.

What is the main difference between Map and other collections?

The main difference between Map and other collections is that it contains key and value. It doesn’t inherit from Collection interface.

The Map interface includes methods for basic operations (put, get, remove, containsKey, containsValue, size, empty), bulk operations (putAll, clear) and collection views (such as keySet, entrySet and values).

The general-purpose implementations are: HashMap, TreeMap and LinkedHashMap.

HashMap which is the best-performing implementation, stores its elements in a hash table. HashMap doesn’t care about ordering elements. If you need to order your elements in some order (for example, ascending, descending, etc), use TreeMap, which stores its elements in a red-black tree and uses comparators. However, if you want to store your key-value pairs in order they were inserted, consider using LinkedHashMap.
