---
title: "Java task. Fibonacci sequence."
date: "2016-03-21"
categories:
  - "Coding"
tags:
  - "Java"
  - "task"
---

Fibonacci numbers are a number sequence, where first two numbers are 1 and 1 or 0 and 1. Each subsequent number is the sum of previous two numbers. This task is often asked by interviewers (not only in Java). Let's solve it in two ways: using a loop and recursion.

```
public int getFibonacci(int number) {
    if (number == 1 || number == 2) {
        return 1;
    }

    int fibo1 = 1;
    int fibo2 = 1;
    int fibonacci = 1;

    for (int i = 3; i <= number; i++) {
        fibonacci = fibo1 + fibo2;
        fibo1 = fibo2;
        fibo2 = fibonacci;
    }

    return fibonacci;
}
```

To see a recursive solution of this task, click "read more".

The recursive solution looks better, isn't it?

```
public int getFebonacciRecursive(int number) {
    if (number == 1 || number == 2) {
        return 1;
    }

    return getFebonacciRecursive(number - 1) + getFebonacciRecursive(number - 2);
}
```

The whole program code with a main method to run:

```
package com.imsavva.test;

public class Fibonacci {

    public static void main(String[] args) {
        new Fibonacci().run();
    }

    public void run() {
        System.out.println("Fibonacci series with loop:");
        for (int i = 1; i <= 12; i++) {
            System.out.print(getFibonacci(i) + " ");
        }

        System.out.println();

        System.out.println("Fibonacci series with recursion:");
        for (int i = 1; i <= 12; i++) {
            System.out.print(getFebonacciRecursive(i) + " ");
        }
    }

    public int getFibonacci(int number) {
        if (number == 1 || number == 2) {
            return 1;
        }

        int fibo1 = 1;
        int fibo2 = 1;
        int fibonacci = 1;

        for (int i = 3; i <= number; i++) {
            fibonacci = fibo1 + fibo2;
            fibo1 = fibo2;
            fibo2 = fibonacci;
        }

        return fibonacci;
    }

    public int getFebonacciRecursive(int number) {
        if (number == 1 || number == 2) {
            return 1;
        }

        return getFebonacciRecursive(number - 1) + getFebonacciRecursive(number - 2);
    }
}
```
