## Links

1. [Box class - Foso](https://foso.github.io/Jetpack-Compose-Playground/layout/box/)
2. [For more complicated use case, you can use `BoxWithConstraint`](https://foso.github.io/Jetpack-Compose-Playground/foundation/layout/boxwithconstraints/)

## Code

```kotlin
@Composable
fun BoxExample() {
    Box(Modifier.fillMaxSize()) {
        Text("This text is drawn first", modifier = Modifier.align(Alignment.TopCenter))
        Box(
            Modifier.align(Alignment.TopCenter).fillMaxHeight().width(
                50.dp
            ).background(Color.Blue)
        )
        Text("This text is drawn last", modifier = Modifier.align(Alignment.Center))
        FloatingActionButton(
            modifier = Modifier.align(Alignment.BottomEnd).padding(12.dp),
            onClick = {}
        ) {
            Text("+")
        }
    }
}
```
