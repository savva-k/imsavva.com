---
title: "Can I use try-finally block (without catch)?"
date: "2016-03-19"
categories:
  - "Coding"
tags:
  - "interview questions"
  - "Java"
---

Yes, you can use the try-finally construction. As a use case, we can try to connect to a database and finally we will close the connection:

```java
Connection connection = null;

try {
    connection = Database.getConnection();
    // some operations
} finally {
    try {
        if (connection != null) {
            connection.close();
        }
    } catch(SomeException e) {
        // what to do
    }
}
```

This code looks a bit redundant. But in Java 7 we can use a try-with-resources block to handle our resources closing in a more convinient way...

In Java 7 we can use a try-with-resources construction:

```java
try (Statement stmt = con.createStatement()) {
    ResultSet rs = stmt.executeQuery(query);

    while (rs.next()) {
        // performing some actions
    }
} catch (SQLException e) {
    // handling an exception
}
```

A try-with-resources construction can also be used with finally block, which will be executed after closing declared resources.
