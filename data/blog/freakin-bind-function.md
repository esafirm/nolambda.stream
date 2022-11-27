---
title: "Freakin' bind() Function"
date: '2017-08-12T12:48:06.0Z'
draft: false
category: 'Tech'
tags:
  - 'Javascript'
  - 'React'
  - 'React Native'
summary: 'When i started React Native app development, it started just fine. I love how composition is used rather than inheritance. I prefer…'
---

When i started React Native app development, it started just fine. I love how composition is used rather than inheritance. I prefer the [functional component](https://facebook.github.io/react/docs/components-and-props.html), to me it is more familiar than a [Javascript Class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes). It is just a simple `f(x) = y`.Then, times come when i have to create a click handler in class

```javascript
class TestScreen extends React.Component {
  state = { text: 'Yo' }

  printYo() {
    this.setState({ text: 'Yoo!!!!!' })
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={this.printYo} title={this.state.text} />
      </View>
    )
  }
}
```

The screen will show your button and the code will run just fine until you click that button and something like this will show

```
this.setState is not a function ........ this.setState is undefined
```

The problem is that for whatever reason (i guess it just how Javascript works) in `printYo` function, the context has changed or to simply put it the `this` in `printYo` is not bound to `TestScreen` class. This is not React specific issue and has been documented in [here](https://facebook.github.io/react/docs/handling-events.html)

The common solution for this is to bind the function in constructor like this

```javascript
class Listener {
  constructor() {
    // bind the `extract` function
    this.extract = this.extract.bind(this)
  }

  extract() {
    // calling something with `this`
  }
}
```

If you gets annoyed easily with this `bind` function like me, you should try the experimental [property initializer syntax](https://babeljs.io/docs/plugins/transform-class-properties/) like this

```javascript
 class Listener {
     extract = () => { // calling something with `this` }
}
```

Or just a simple big arrow function

```javascript
class Listener {
    extract(){ // calling something with `this` }

    doSomethingWithCallback(){
        new Executor().run(() => this.extract())
    }
}
```

The two options is simply better and less frustrating for me. Until next time. Cao ~ 👋
