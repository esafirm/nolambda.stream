---
title: "Android Arch's Room - Introduction"
date: "2018-01-06T15:44:34.0Z"
draft: false
category: "Tech"
tags:
 - "Android"
 - "Kotlin"
 - "Room"
summary:  "My first reaction when Android Architecture Component is out is just **meh..**
I mean come on, the ViewModel is heavily tied to Activity and Fragment and basically i don't need it because i use Conductor… "
---

My first reaction when Android Architecture Component is out is just **meh..**

I mean come on, the `ViewModel` is heavily tied to `Activity` and `Fragment` and basically i don't need it because i use Conductor.

The Lifecycle part is better than something like `RxLifecycle` but it's not a new thing. Also with Conductor you can have a listener to your lifecycle event. So no big deal in this part too.

`LiveData` is just a subset from Rx's `Subject` no?
I get it, it can make the development process much painless, but being late released than others community **solutions** make me more skeptical about it.

But there's one thing that caught my interest. And that is **Room!** Being tired from object database like **Realm**, I'm searching for SQL solution again but sadly the options is not so much change from 2+ years ago when i left SQL for object database.

### What is Room?

Taken from the official Android site:

> The Room persistence library provides an abstraction layer over SQLite to allow fluent database access while harnessing the full power of SQLite.

### Room components

There are 3 major components in Room

1. **Database**
   As the name imply, this is your database representation
2. **Entity**
   This represent your table.
3. **DAO (Data Access Object)**
   This represent your query or function to manipulate your database

OK, OK, show me some code!

```kotlin
@Dao
interface UserDao {
    @Query("SELECT * FROM user")
    fun getUsers(): List<User>

    @Delete
    fun deleteUsers(vararg users: User)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertUser(user: User)
}
```

Here's the code for Room data access object (DAO). Well, this remind me to `Retrofit` interface and i really love it!

Next, we will getting our hands dirty with **Room**. Stay tuned! \ud83d\udc4b

Also, check out the official [Android training article](https://developer.android.com/training/data-storage/room/index.html) for more info about Room!
