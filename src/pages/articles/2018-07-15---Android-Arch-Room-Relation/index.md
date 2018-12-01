---
title: "Android Arch's Room - Relation"
date: '2018-07-15T19:19:20.0Z'
layout: post
draft: false
path: '/posts/android-archs-room-relation/'
category: 'Tech'
tags:
  - 'Android'
  - 'Room'
description: "On the previous post, we already discussed the basic Room from AAC (Android Architecture Component). In this post, we're gonna explore the how to create a relationship between tables"
---

Hi friends! It has been a long time since my last post. I've been really tired for the past 6 months. Let's get to the point then.

On the [previous post](https://nolambda.stream/android-archs-room-getting-started/), we already discussed the basic Room from AAC (Android Architecture Component). In this post, we're gonna explore the how to create a relationship between tables

## Goal

So in the previous post, we have a `User` table with a schema like this:

<table>
    <tr>
        <th>User ID</th>
        <td>Int, Generated, PK</td>
    </tr>
    <tr>
        <th>Name</th>
        <td>String</td>
    </tr>
    <tr>
        <th>Age</th>
        <td>Int</td>
    </tr>
</table>

We want to create a relationship so we need another table. Let's make `Car` table

<table>
    <tr>
        <th>Car Id</th>
        <td>Int, Generated, PK</td>
    </tr>
    <tr>
        <th>Name</th>
        <td>String</td>
    </tr>
    <tr>
        <th>Owner</th>
        <td>Int, FK to User</td>
    </tr>
</table>

The relation will be _one-to-many_ where one user can own many cars.

Our goals are:

1. We can get all the user for certain car name
2. We can query all the users with all their cars.

## Relation

Implementing relationship in Room is very easy, you just have to define the relationship in your `@Entity`. In our case, we have to define that `owner` in `Car` table is an FK to `userId` in the `User` table.

```kotlin
@Entity(
        tableName = "car",
        foreignKeys = [ForeignKey(
                entity = User::class,
                parentColumns = ["userId"],
                childColumns = ["owner"]
        )]
)
data class Car(
        @PrimaryKey(autoGenerate = true)
        val carId: Int? = null,
        val name: String,
        val owner: Int
)
```

Here you can see, we define our relationship in between `Car` and `User` in `Car @Entity`. Let me make a brief explanation:

1. The `entity` is a target class, in this case, is our `User` class.
2. The `parentColumns` is our target column, it has to be a **primary key**. In our case, `userId` column in `User`.
3. The `childColumns` is our **foreign key** defined where this rule is written. In our case, `owner` column in `Car`.

OK, done. Let's create some query!

## First Goal

Our first goal is that we can have all the user that owns certain Car.
For this, we can simply create a query in our **DAO**.

```kotlin
    @Query("SELECT u.* FROM user u JOIN car c WHERE c.name = :name")
    fun getUsersWithCar(name: String): List<User>
```

<small>UserDao.kt</small>

Hooray! We already create our first join query in Room.

## Second Goal

Our second goal is that we can query all the users with all their cars.
We want to make the data representation for this query to be separated.
So we create our `UserWithCars` class that has a content:

```kotlin
data class UserWitCars(
        @Embedded var user: User? = null,
        @Relation(parentColumn = "userId", entityColumn = "owner") var cars: List<Car>? = null
)
```

Simple right? Here we define our relationship for `cars` list.

1. `parentColumn` is our target key in `@Embedded` entity
2. `entityColumn` is our FK in defined list entity

Then we just create or simple query in `UserDao`

```kotlin
@Query("SELECT * FROM user")
fun getUserWithCars(): List<UserWitCars>
```

Done! We just querying all our users will all their cars!

> You can find the source of this example on my [Github](https://github.com/esafirm/android-playground/blob/master/app/src/main/java/com/esafirm/androidplayground/androidarch/room/RelationController.kt)

---

For the next article, we're gonna discuss about creating a transaction in Room. It will be a quick one though.

That's all for now, see you guys later. Cao 👋
