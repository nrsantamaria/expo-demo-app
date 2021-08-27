## Pre-reqs
1. Download node.js (https://nodejs.org/en/) (nvm use v12.20.1)
2. Install expo (https://expo.io/): `npm install -g expo-cli`
3. Install react-native-cli globally (not required but helpful): `npm install -g react-native-cli`
4. Setting up xcode for the simulator: Preferences > Locations > Command Line Tools: Choose the latest version in the dropdown.

## Launch
1. npm install
2. npm start
### Run on External Device
1. Download Expo app on device
2. Scan the QR code from the running server
### Run on Simulator
1. Open simulator device
2. In the running server terminal, enter `i` to open app in iOS Simulator or `a` to open app in Android Simulator

### Resolving Errors
- if `EMFILE: too many open files, watch`
  then `brew reinstall watchman`
- iOS Simulator
  - Cannot reach internet?
    - From within simulator: Settings > Developer > Allow HTTP Services
    - Device > Restart
  - if `Cannot reach exp:host` then `expo logout`
- IDK whats wrong
```
  rm -rf node_modules
  npm cache clean --force
  watchman watch-del-all
  npm i
  expo r -c
  npm start
```

OR (have two diff devices open so they get new expo apps installed during process)

```
  expo upgrade
  npm start
```

## Other
### Debugging
- iOS Simulator: cmd + d
- Android Simulator: cmd + m

*IMPORTANT NOTE:* When testing complete, choose 'Stop Debug Remote JS' from menu options, so your app doesn't slow down

To debug in Chrome:
  - Choose 'Debug Remote JS' from menu options

To debug in React Native Debugger:
  - First download the React Native Debugger App with homebrew: (https://github.com/jhen0409/react-native-debugger) and set up the debugger:
    - Open React Native Debugger App
    - Debugger > Open Config File
    - Change defaultRNPackagerPorts to `defaultRNPackagerPorts: [19000]`
    - Save and close config file

  Using the Debugger:
  - Open React Native Debugger App
    - cmd + t for a new tab in Native Debugger App, choose the server you are running the project on if it is not 19000
  - Choose 'Debug Remote JS' from menu options of your emulator.

  *Notes about React Native Debugger:*
  - Tools in Debugger
    - Elements tab: you can change state, props, etc.
    - Profiler tab records your clicks in app. You can see if there are re-render issues.
    - Right click in Debugger, enable networking requests so you can see network requests in the console/network tab
  - Debugging Redux
    Add to code:
    ```
    import { composeWithDevTools } from 'redux-devtools-extension';

    const store = createStore(reducer, composeWithDevTools());
    ```
    Remove when done debugging.

### Style Stuff
Find the right icon: https://icons.expo.fyi/
