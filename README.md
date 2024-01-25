# Getting Started with Deel Task

This project is React js cross-platform mobile application using React, Capacitor and TypeScript using node v16

# State Management
state management is done using redux with Epic Middleware and redux-observable


## Getting Started

Clone this repository:

```git clone git@github.com:nabil-alsaadi/deel-task.git```

Install all dependencies:

```npm i```

Sync your web code to native project:

```npx cap sync```

# run on ios:

```npx cap run ios```

then choose a target device


# run on android:

```npx cap open android```

this will open android studio, wait until configuration done 

and make sure you are using correct gradle 17 by going to:

```File -> Settings.. -> Build, Execution, Deployment -> Build Tools -> Gradle" there select your project and set Gradle JVM to your java 17.0.1```

# run on web 
```npm run start```

then open broswer and got to link ```http://localhost:3000/```
