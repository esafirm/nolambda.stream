---
title: "JaCoCo Setup for Android Multi Module Project"
date: "2020-01-19T07:53:17Z"
layout: post
draft: false
path: "/posts/jacoco-setup-for-multi-module-project/"
category: "Tech"
tags:
  - "Jacoco"
  - "Android Development"
  - "Code Coverage"
description: "Easy JaCoCo configuration for your multi module Android projects"
---

In multi-module project structure we can easily limit what to test and known exactly what is the coverage 
of that certain module. But the configuration could be verbose if we define it in every `build.gradle`

There is another use case when we want to combine/aggregate all modules coverage in one report.
Unfortunately, this is also not covered automatically by JaCoCo.

So how we can achieve easy and centralized JaCoCo config for our multi-module projects? 

## Apply JaCoCo

The first thing to do is to create a separate `gradle` file where we write our configuration. 
Let's name it `jacoco.gradle` and put it on `gradle` directory

```
## This is our project structure.
## We use standard Android project structure.

├── app 
│   └── src
├── gradle
│   ├── jacoco.gradle
│   └── wrapper
```

In this file let's apply the JaCoCo gradle plugin for our modules

```groovy

// In here we can filter our what modules that we want to cover
def coveredProject = subprojects 

// configure() method takes a list as an argument and applies the configuration to the projects in this list.
configure(coveredProject) { prj -> 
  
  // Here we apply jacoco plugin to every project
  apply plugin: 'jacoco'

  // Set Jacoco version
  jacoco {
    toolVersion = "0.8.5"
  }

  // Here we create the task to generate Jacoco report
  // It depends to unit test task we don't have to manually running unit test before the task
  task jacocoReport(type: JacocoReport, dependsOn: 'testDebugUnitTest') {

    // Define what type of report we should generate
    // If we don't want to process the data further, html should be enough
    reports {
      csv.enabled = false
      xml.enabled = false
      html.enabled = true
    }

    // Setup the .class, source, and execution directories
    final fileFilter = ['**/R.class', '**/R$*.class', '**/BuildConfig.*', '**/Manifest*.*', 'android/**/*.*']

    // Include this if you use Kotlin
    final kotlinTree = fileTree(dir: "${prj.buildDir}/tmp/kotlin-classes/debug", excludes: fileFilter)
    final javacTree = fileTree(dir: "${prj.buildDir}/intermediates/javac/debug", excludes: fileFilter)
    final mainSrc = "${prj.projectDir}/src/main/java"

    sourceDirectories.setFrom files([mainSrc])
    classDirectories.setFrom files([kotlinTree, javacTree])
    executionData.setFrom fileTree(dir: prj.buildDir, includes: [
      'jacoco/testDebugUnitTest.exec', 'outputs/code-coverage/connected/*coverage.ec'
    ])
  }
}

```

Now we're ready, to run the unit test and generate the code coverage you can use 

```
$ ./gradlew <module_name>:jacocoReport
```

## Aggregate The Coverage

Now, to create the aggregated data what you have to do is basically combine the `jacocoReport` task
Let's add some more configuration to our `jacoco.gradle`

```groovy

apply plugin: 'jacoco'

task jacocoFullReport(type: JacocoReport, group: 'Coverage reports') {
    def projects = coveredProject

    // Here we depends on the jacocoReport task that we created before
    dependsOn(projects.jacocoReport)

    final source = files(projects.jacocoReport.sourceDirectories)

    additionalSourceDirs.setFrom source
    sourceDirectories.setFrom source

    classDirectories.setFrom files(projects.jacocoReport.classDirectories)
    executionData.setFrom files(projects.jacocoReport.executionData)

    reports {
        html {
            enabled true
            destination file('build/reports/jacoco/html')
        }
        csv {
            enabled true
            destination file('build/reports/jacoco/jacocoFullReport.csv')
        }
    }

    doFirst {
        //noinspection GroovyAssignabilityCheck
        executionData.setFrom files(executionData.findAll { it.exists() })
    }
}
```

That's it! To create the aggregated report you can run this in your terminal 

```
$ ./gradlew jacocoFullReport
```

> You can find the full example [in here](https://github.com/esafirm/pokedroid/blob/master/gradle/jacoco.gradle)

Until next time! 👋
