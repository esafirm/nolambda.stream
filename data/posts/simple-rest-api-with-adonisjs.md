---
title: 'Simple REST API with Adonis JS'
date: '2017-12-18T16:20:22.0Z'
draft: false
category: 'Tech'
tags:
  - 'Tech'
summary: "On the last ADB meetup, we have a conversation about what framework we usually use in creating a REST API. Then, Adonis.Js is being mentioned. I know Adonis but haven't got a chance to test it, so let's test it now!"
---

On the last [ADB](https://github.com/AndroidDeveloperBandung/) meetup, we have a conversation about what framework we usually use in creating a REST API. Then, [Adonis.Js](adonisjs.com) is being mentioned. I know Adonis but haven't got a chance to test it, so let's test it now!

> We're gonna use Adonis 4.0 as it the latest version when this article is written

#### Goal

A simple REST API with CRUD functionality. So there will be 4 endpoints.
The model we're gonna build is a `Car` with only `name` and `type` as its property.
The database would be `MySQL` (not to simple, i know)

#### Command Line Interface (CLI)

The cool thing about Adonis is that they have their own CLI. They event have the [library](https://github.com/adonisjs/ace) to create your own CLI application.

You can install it with NPM

```
$ npm i -g @adonisjs/cli
```

#### Getting Started

After installing the CLI we can create the application boilerplate with

```
# simple-api is our project name
$ adonis new simple-api --api-only
```

Hey, your application is starting to have a shape now. You can try the boilerplate code with

```
$ adonis serve --dev
```

This will serve your app in **localhost:3333** assuming you're using default adonis development port.

You should see a hello message within a JSON object if you trying to access the localhost

```
{ "greeting": "Hello world in JSON" }
```

#### Environment & Database

Before we continue, we should setup our environment and database first. To define the database connection, change your `.env` file. It should be something like this

```
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=adonis
```

As for the database, the simplest way is [Docker](https://nolambda.stream/using-mysql-database-with-docker/)

#### Model

Creating model in Adonis is easy, we just use `make:model`

```
$ adonis make:model Car --migratio
$ ✔ create  app/Models/Car.js
$ ✔ create database/migrations/1513565285944_car_schema.js
```

The `--migration` parameter is to create [database migration](https://adonisjs.com/docs/4.0/migrations). In Adonis we use this to create and define database tables. Also as the name imply, you can use it for upgrading or downgrading schema as well.

OK, so let's define our `Car` table first. Open up your schema file that just created by the CLI tools in `database/migrations` directory. So because we only want a `name` and `type` of a car as our data, the schema will goes like this

```javascript
'use strict'

const Schema = use('Schema')

class CarSchema extends Schema {
  up () {
    this.create('cars', (table) => {
      table.increments()
      table.string('name')
      table.string('type) // this could be enum
      table.timestamps()
    })
  }

  down () {
    this.drop('cars')
  }
}

module.exports = CarSchema
```

> The schema builder API is based on [Knex](http://knexjs.org/#Schema-Building).

The last thing to do here is run the migration, but since we use `MySQL` as our database, we have to install the `MySQL` module first.

```
$ adonis install mysql
# adonis install is basically an NPM install with extra step
```

Run the migration through Adonis CLI

```
$ adonis migration:run
```

Done. You can check your `cars` table now.

#### Routes

Now it's time to map the request. Open `start/routes.js`. This file contains your routing definition. The API is pretty simple you can read more about it [here](http://adonisjs.com/docs/4.0/routing)

Since we only want a CRUD functions, the endpoints would consist of:

1. **GET** `/cars` (get all cars)
2. **DELETE** `/cars/:id` (delete one car)
3. **POST** `/cars?name=&type=` (create one car)
4. **POST** `/cars/:id?name=&type=` (update one car)

We also want to group this endpoints into a specific version, in this case `v1`. For this case we use `Route.group`. This will append all the route with prefix `/v1`.

> Ex: If we use **localhost:3333**, get all the cars would be `localhost:3333/v1/cars/`

```javascript
Route.group(() => {
  Route.get('/cars', () => {})
  Route.delete('/cars/:id', () => {})
  Route.post('/cars', () => {})
  Route.post('/cars/:id', () => {})
}).prefix('/v1')
```

#### Putting It All Together

Now we just have to return what each endpoints wants! Technically, in real world example, our business logic and all database query would be placed in different place like [`Controllers`](https://adonisjs.com/docs/3.2/controllers) to keep separation of concerns. But for simplicity we're gonna put it here.

```javascript
Route.group(() => {
  Route.get('/cars', async () => {
    return await Car.all()
  })

  Route.post('/cars', async ({ request }) => {
    const parameter = request.only(['name', 'type'])

    const newCar = new Car()
    newCar.name = parameter.name
    newCar.type = parameter.type

    await newCar.save()

    return newCar
  })

  Route.post('/cars/:id', async ({ params, request }) => {
    const parameter = request.only(['name', 'type'])

    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ message: 'Car not found' })
    }

    car.name = parameter.name
    car.type = parameter.type

    await car.save()

    return car
  })

  Route.delete('/cars/:id', async ({ params, request, response }) => {
    const car = await Car.find(params.id)
    if (!car) {
      return response.status(404).json({ message: 'Car not found' })
    }
    await car.delete()
    return response.status(200).json({ message: 'Car deleted!' })
  })
}).prefix('/v1')
```

Done! We should test our API now.

#### Testing

We're using [HTTPie](https://httpie.org/) as our HTTP client.

> HTTP header will be omitted here

**Run**

```
$ adonis serve --dev
```

**Create** request & response:

```
$ http POST locahost:3333/v1/cars name='Baleno' type='Sedan'
```

```json
{
  "created_at": "2017-12-18 10:50:12",
  "id": 2,
  "name": "yaris",
  "type": "mini bus",
  "updated_at": "2017-12-18 10:50:12"
}
```

**Get all cars** request and response:

```
$ http localhost:3333/v1/cars
```

```json
[
  {
    "created_at": "2017-12-18 10:39:57",
    "id": 1,
    "name": "yaris",
    "type": "mini bus",
    "updated_at": "2017-12-18 10:39:57"
  },
  {
    "created_at": "2017-12-18 10:50:12",
    "id": 2,
    "name": "yaris",
    "type": "mini bus",
    "updated_at": "2017-12-18 10:50:12"
  }
]
```

#### Conclusion

I think Adonis is easy enough to getting started with. The powerful CLI tools and the sufficient official documentation is a great help to move forward.

> All the code here can be accessed on my Github [Repo](https://assets-cdn.github.com/images/modules/logos_page/GitHub-Logo.png)

That's all from me. Cao \ud83d\udc4b
