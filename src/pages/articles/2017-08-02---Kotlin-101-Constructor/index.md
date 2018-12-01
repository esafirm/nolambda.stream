---
title: "Kotlin 101 - Constructors"
date: "2017-08-02T12:37:17.0Z"
layout: post
draft: false
path: "/posts/kotlin-101-consturctors/"
category: "Tech"
tags:
 - "Kotlin"
description: "If you're familiar with OOP then you must be familiar with constructors.
A constructors is a special method of a `class` that initialize an object of that type. Simply put, a constructors is a function that return your object."
---

If you're familiar with OOP then you must be familiar with constructors. 

A constructors is a special method of a `class` that initialize an object of that type. Simply put, a constructors is a function that return your object.

## Syntax

Let's see an example of a constructor and how you create an instance from it

```kotlin
// declaration of class
class Animal(val name: String) 

// animal is an object of Animal class
val animal = Animal("Bird")
println(animal.name) // print "Bird"
```
Calling a constructor in Kotlin is simply invoking a function with a name of its `class`. 

If you're familiar with Java or Javascript, invoking a constructor required you to declare a `new` keyword. This is omitted in Kotlin.

### Type

There are basically two type of constructors in Kotlin. I think you already know the difference just by seeing the name.

1. Default Constructor / No Argument Constructor
2. Parameterized Constructor

It is no differ with Java concept (or any other OOP language?)

What's difference in Kotlin is we also had two styles to declare a constructor. 

1. Primary Constructor
2. Secondary Constructor

#### Primary Constructor

```kotlin
class Animal(name: String)

// Create Animal instance
val animal = Animal("Bird")
```

A primary constructor is simple declaration after the `class` name. If you have no parameter (no arg constructor) you can omit the parentheses, the compiler will take care of it.

```kotlin
// Bare minimum of class declaration in Kotlin
class Animal 

// Create Animal instance
val animal = Animal()
```
You can also have `constructor` keyword before the parentheses, this is useful if you want to apply visibility modifier or annotation to your constructor. 

```kotlin
class Animal private constructor(){}
```

#### Secondary Constructor

Secondary constructor declared inside class *body* and prefixed with `constructor` keyword. Just like `constructor` keyword in primary constructor, it can have a visibility modifier or annotation.

``` 
class Animal {
 // `internal` make this class can only invoked from same package
 internal constructor(name: String)
}
```

### Initialization Block

After reading all the sample code above, did you realize it doesn't have any initialization block? 

This is because initialization block is optional in secondary constructor and non existent in primary constructor. If you want to have initialization code you have to put in in **initializer blocks**

Initializer block can be declared with `init` keyword inside class 

```kotlin
class Animal(name: String) {
    init {
        println("The animal name is $name")
    }
} 
```

Please note, initializer blocks will **always** be invoked every time object created. If you just want your code invoked in certain constructor, you can use the secondary constructor block

```kotlin
class Animal() {
    constructor(name: String): this(){
        println("this animal name is $name")
    }
}
```

### Using Constructor Parameter

The parameters that defined in constructors can be used in property declaration and initialization block, but it can't be used outside that. If we in Java land, to achieve this we can assign it to fields

```java
// Class declaratiob
Class Animal {
   private final String name;

   Animal(String name){
      this.name = name;
   }

   boolean isChicken(){
       return name.equals("chicken")
   }

   String getName(){
       return name;
   }
}

// Getting the name and checking is chiken
Animal animal = new Animal("chicken");
animal.getName();    // return "chicken"
animal.isChicken();  // return true
```

In Kotlin it is much more simpler! If you are using primary constructor all you have to do is adding the `val` or `var` keyword, just like when you declared a property

```kotlin
// class declaration
class Animal(val name: String){
    fun isChicken() = name == "chicken"
}

// Getting the name checking is chicken
val animal = Animal("chicken")
animal.name         // return "chicken"
animal.isChicken()  // return true
```
More compact isn't i? 
For another example on this, please find it on my [Github](https://github.com/esafirm/kotlin-playground/blob/master/src/main/kotlin/nolambda.playground/constructors/ConstructorsPlayground.kt) 🐙

Up next, we're gonna talk about inheritance in Kotlin. Stay tune, cao ~ 👋