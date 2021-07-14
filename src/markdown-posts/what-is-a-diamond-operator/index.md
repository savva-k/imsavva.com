---
title: "What is a diamond operator?"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "interview questions"
  - "Java"
image: images/main.jpg
---

This is an improvement appeared in Java 7. Consider you have a class with a long name and you need to create a HashMap of Strings and Lists of your class instances. You code will look like this:

```
Map<String, List<MyClassWithLongLongName>> myMap = new HashMap<String, List<MyClassWithLongLongName>>();
```

In Java 7 you can write less code using the diamond operator(<\>):

```
Map<String, List<MyClassWithLongLongName>> myMap = new HashMap<>();
```
