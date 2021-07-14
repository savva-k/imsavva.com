---
title: "Java exceptions handling order"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "exceptions"
  - "Java"
  - "interview questions"
---

Consider there is a method which can throw IOException and FileNotFoundException. Is there a difference in which order we catch these exceptions in a single try-catch block? Will this code work correctly?

```
try {
    // potential FileNotFoundException or IOException
} catch (IOException e) {
    // handling IOException
} catch (FileNotFoundException e) {
    // handling FileNotFoundException
}
```

The answer is NO.

If you handle IOException first, you will never reach FileNotFoundException handling block, because FileNotFoundException inherits from IOException and will be handled in the first catch clause. So the second clause will be unreachable and you won’t even be able to compile this code. The correct order would be:

```
try {
    // potential FileNotFoundException or IOException
} catch (FileNotFoundException e) {
    // handling FileNotFoundException
} catch (IOException e) {
    // handling IOException
}
```
