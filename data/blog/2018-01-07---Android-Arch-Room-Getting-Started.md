---
title: "Android Arch's Room - Getting Started"
date: '2018-01-07T19:15:57.0Z'
draft: false
category: 'Tech'
tags:
  - 'Android'
  - 'Room'
summary: "So, on the first post we already have an introduction or more like a sneak peek to Room data access object code. Let's get our hands dirty now!"
---

So, on the first post we already have an [introduction](https://nolambda.stream/android-archs-room-introduction/) or more like a sneak peek to **Room** data access object code. Let's get our hands dirty now!

### Goal

Our goal is to create a simple database that consists of one table only. A `user` table with a schema like this:

<table>
    <tr>
        <th>User ID</th>
        <td>Int, Generated</td>
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

We can create, read, update and delete the `user`. Also, we filter the `user` based on their age.

### Adding Room to project

Pretty straight-forward if you use Gradle. Add this to your module `build.gradle`

```groovy
implementation 'android.arch.persistence.room:runtime:1.0.0'
kapt 'android.arch.persistence.room:compiler:1.0.0'
```

If you don't use **Kotlin**, you can change `kapt` to `annotationProcessor`

### Create the table

To create our table, we need to define Room entity first, basically, it's a POJO class with `@Entity` annotation in it.

```kotlin
// User.kt
@Entity
data class User(
    @PrimaryKey(autoGenerate = true) val userId: Int? = null,
    val name: String,
    val age: Int
)
```

Because we want to make `userId` generated (auto increment in this case) we have to declare it as a nullable property.

Your `Entity` must have a public getter & setter or a public property. This being checked at compile time.

### Create the DAO

Now we have to make functions to manipulate our `user` data. Room DAO is just an `interface` that have `@Dao` annotation over it.

```kotlin
// UserDao.kt
@Dao
interface UserDao {
    @Query("SELECT * FROM user")
    fun getUsers(): List<User>

    @Query("SELECT * FROM user WHERE age = :age")
    fun getUsersWithAge(age: Int): List<User>

    @Delete
    fun deleteUsers(vararg users: User)

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    fun insertUser(user: User)
}
```

Here we have four functions to manipulate or access our data. Let's break it down:

1. `getUsers` as the query in `@Query` annotation explain, basically it fetch all `user` data.
2. `getUsersWithAge(age: Int)` get all users that match the parameter. Please notice in the query there is `:age`. It used as the placeholder that will be replaced by the parameter. Unlike **Retrofit** that use annotation in the parameter, Room use parameter name matching.
3. `deleteUsers(vararg users: User)` delete single or multiple `user`.
4. `insertUser(user: User)` create single user

The SQL query syntax is validate in compile time, so you don't have to worry about typo or wrong table name. To make it more easier, using inject language feature in Android Studio or IntelliJ

<img src="https://github.com/esafirm/esafirm.github.io/blob/ghost-do/content/images/roominject.gif?raw=true" width="400"

### Create the database

Room database is an abstract class with `@Database` annotation over it.

```kotlin
// AppDatabase.kt
@Database(entities = [(User::class)], version = 1)
abstract class AppDatabase : RoomDatabase() {
    abstract fun userDao(): UserDao
}
```

Here we define the database tables in `entities`. We also define the schema version inside the annotation as well.

Inside this abstract class, we declare all the DAO as an abstract function like

```kotlin
abstract fun userDao(): UserDao
```

### Putting it all together

Let's instantiate our database! In real-world application, I think this should be a singleton or at least cached some way

```kotlin
private val database: AppDatabase by lazy {
        Room.databaseBuilder(applicationContext, AppDatabase::class.java, "test.db").build()
    }
```

After this, all the operation is pretty straight-forward. Basically, you just do this:

```
Get Database -> Getting DAO from Database -> Run Operation
```

All operation must be run **outside the UI thread** or Room will throw some error at you!

> The example below will use RxJava for threading option

#### Insert

Here we create a user data with name "Nara" and age 17

```kotlin
Completeable.fromAction {
   val user = User(name = "Nara", age = 17)
   database.userDao().insertUser(user)
}.subscribeOn(Schedulers.io).subscribe()
```

#### Select

Here we select users with age 18

```kotlin
Completable.fromAction {
    val users = database.userDao().getUserWithAge(18)
    Logger.log("There are ${users.size} users with age 18")
}.subscribeOn(Schedulers.io).subscribe()
```

#### Delete

Here we delete the oldest user with age 17

```kotlin
Completable.fromAction {
    val userDao = database.userDao();
    val nara = userDao.getUserWithAge(17).firstOrNull()
        nara?.let { userDao.deleteUsers(it) }
}
```

#### Update

Since we use replace strategy when conflict happens at insert, to update the data we only need a `user` object with the same `userId`

```kotlin
Completable.fromAction {
    val userDao = database.userDao()
    val nika = userDao.getUserWithAge(18).firstOrNull()
    if (nika != null) {
        userDao.insertUser(nika.copy(age = 22))
    }
    Logger.log("Changing nika age to 22")
}
```

> You can find the full example on my [Github](https://github.com/esafirm/android-playground/tree/master/app/src/main/java/com/esafirm/androidplayground/androidarch/room)

That's all for me. Cao! 👋
