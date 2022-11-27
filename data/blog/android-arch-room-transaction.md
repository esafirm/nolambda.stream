---
title: "Android Arch's Room - Transaction"
date: '2018-07-24T19:24:42.0Z'
draft: false
category: 'Tech'
tags:
  - 'Android'
  - 'Room'
summary: "Sometimes, we need more than one query to execute in one operation. Let's say you have to replace an item."
---

Sometimes, we need more than one query to execute in one operation. Let's say you have to replace an item.

1. First, you have to delete the item from the database
2. Then, you add the new item to the database

Here's the problem, what will happen if the first query is executed but there's an error after that. Your second query will not execute, the new user will not exist in the database and your items data will soon be gone.

We need some contract that wraps this operation so when there's an error in our operation nothings will changes. This is where **transaction** come in.

> You use transactions when the set of database operations you are making needs to be atomic. It means, your operation only can **success** and **fail**. Nothing in between

## Transaction in Room

Creating a transaction in Room is a very easy task. All you have to do is add `@Transaction` annotation in your `Dao`'s method. Here's some example:

```kotlin
@Dao
abstract class UserDao {
@Delete
abstract fun deleteUsers(vararg users: User)

@Insert(onConflict = OnConflictStrategy.REPLACE)
abstract fun insertUser(user: User): Long

@Transaction
open fun replaceUser(old: User, new: User) {
        insertUser(new)
        deleteUsers(old)
    }
}
```

Here's the catch, since default method in Java interface only implemented since Java 8, and Room doesn't support Kotlin interface default function (i don't know if Room support java interface default method), we have to make our `Dao` as an **abstract class**.

## Another approach

So what can we do if we don't want to change our `Dao` to `abstract` class? Or how we can create a transaction across `Dao`s?

Don't panic, `RoomDatabase.runInTransaction()` come to help!

```kotlin
val carDao = database.carDao()
val userDao = database.userDao()

try {
databse.runInTransaction {
    val user = userDao.insertUser(User(name = "Maya", age = 55))
    carDao.insertCar(Car(name = "Ayla", owner = user.toInt()))
}
} catch (e: Exception) {
Logger.log("Error happens!!")
}
```

Here's some gotcha, `RoomDatabase.runInTransaction()` will marked as successful unless some exception is thrown inside the `Runnable` .
It means if you wrap your code in `try catch` inside the `Runnable`, you're gonna have some bad time.

> You can read more about Room transaction in [here](https://developer.android.com/reference/android/arch/persistence/room/Transaction)

> You can find the example code that covers both approaches in [here](https://github.com/esafirm/android-playground/blob/master/app/src/main/java/com/esafirm/androidplayground/androidarch/room/TransactionController.kt)

Well, that's all from me. I hope you enjoy this post. You can find all the others Room related article in [here](https://nolambda.stream/tag/room/)

Cao 👋
