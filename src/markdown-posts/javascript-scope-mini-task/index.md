---
title: "JavaScript scope mini-task"
date: "2016-02-19"
categories:
  - "Coding"
tags:
  - "JavaScript"
image: images/main.png
---

What we will see in the console?

```javascript
var obj = {
    heroName: "Gandalf",
    func: function() {
        var that = this;
        console.log("outer func:  this.heroName = " + this.heroName);
        console.log("outer func:  that.heroName = " + that.heroName);
        (function() {
            console.log("inner func:  this.heroName = " + this.heroName);
            console.log("inner func:  that.heroName = " + that.heroName);
        }());
    }
};
obj.func();
```

The result will be:

```
outer func:  this.heroName = Gandalf
outer func:  that.heroName = Gandalf
inner func:  this.heroName = undefined
inner func:  that.heroName = Gandalf
```

In the outer function `this` refers to the object, because the outer func is invoked as a method. But the inner function is invoked as a usual function, and hence `this` refers to `window` object. However, the inner function still can see its parent's scope, that's why that.name is accessible.

Understanding scopes: [http://ryanmorr.com/understanding-scope-and-context-in-javascript/](http://ryanmorr.com/understanding-scope-and-context-in-javascript/)
