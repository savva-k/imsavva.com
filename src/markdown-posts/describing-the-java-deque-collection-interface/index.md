---
title: "Describing the Java Deque collection interface"
date: "2016-03-19"
categories: ["Coding"]
tags: ["interview questions", "collections", "Java"]
image: images/deque.png
---

A Deque is a double-ended-queue. It is a collection of elements that supports the insertion and removal of elements at both end points. It implements both Stack and Queue at the same time. This interface defines following methods:

- void addFirst(E e)
- void addLast(E e)
- boolean offerFirst(E e)
- boolean offerLast(E e)
- E removeFirst()
- E removeLast()
- E pollFirst()
- E pollLast()
- E getFirst()
- E getLast()
- E peekFirst()
- E peekLast()
- boolean removeFirstOccurence(Object o)
- boolean removeLastOccurence(Object o)
- \+ methods from Queue interface

Predefined Deque implementations: ArrayDeque, LinkedList

Insert

When the capacity of the Deque instance is restricted, it is better to use offerFirst and offerLast methods, because addFirst and addLast methods throw an exception if the deque is full.

Remove

Methods pollFirst and pollLast return null when the deque is empty, when removeFirst and removeLast throw an exception.

Retrieve

Methods getFirst, getLast, peekFirst and peekLast retrive a corresponding value, but don’t remove it.
