<div align="center">
  <img width="200" height="200"
    src="https://raw.githubusercontent.com/Gherciu/redux-soldier/master/logo.png">
  <h1>redux-soldier</h1>
  <p>👨🏼‍✈️ redux-soldier is a redux middleware that can handle 'dispatch method' arguments in a smart way</p>
</div>

[![GitHub](https://img.shields.io/github/license/Gherciu/redux-soldier)](https://github.com/Gherciu/redux-soldier/blob/master/LICENSE)
[![Multipack](https://img.shields.io/badge/Generated%20from-Gherciu%2Fmultipack-green)](https://github.com/Gherciu/multipack)

## Getting started

```bash
npm install redux-soldier
```

Then, to enable `redux-soldier`, use `applyMiddleware()`:

```js
import { createStore, applyMiddleware } from 'redux'
import { reduxSoldierMiddleware } from 'redux-soldier'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(reduxSoldierMiddleware))
```

## What can `redux-soldier`

#### It can dispatch `thunk` actions, if provided argument is a `function`. In this case works same as `redux-thunk`

```js
dispatch(fetchUser()) // thunk action

// also it can dispatch multiple thunk actions

dispatch([
  fetchUser(), // thunk action
  fetchUserWishList(), // thunk action
])
```

#### It can dispatch multiple actions, if provided argument is an `array` of actions.

```js
dispatch([
  addToDo('Learn how to use redux-soldier 👨🏼‍✈️'), // traditional action creator
  { type: 'INCREMENT' }, // traditional action
])
```

#### It can dispatch multiple `mixed actions`, if provided argument is an `array` of actions.

```js
dispatch([
  fetchUser(), // thunk action
  addToDo('Learn how to use redux-soldier 👨🏼‍✈️'), // traditional action creator
  { type: 'INCREMENT' }, // traditional action
])
```

#### It can return a `promise` or `array of promises` if provided argument is a `async thunk action` or an `array` of `thunk actions`.

Note: if is provided an array of mixed actions it returns only an array of thunk actions promises

```js
dispatch(fetchUser()).then(response => {
  /* do stuff */
})

// or multiple thunc actions

dispatch([
  fetchUser(), // thunk action
  fetchUserWishList(), // thunk action
]).forEach(promise => {
  promise.then(response => {
    // do stuff
  })
})
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

#### Or you can sponsor via [Open Collective](https://opencollective.com/gherciu-gheorghe/)

[![Open Collective](https://opencollective.com/gherciu-gheorghe/tiers/sponsor.svg?avatarHeight=60)](https://opencollective.com/gherciu-gheorghe/)


## Author

**[@Gherciu/redux-soldier](https://github.com/Gherciu/redux-soldier)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/redux-soldier/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/redux-soldier/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/redux-soldier)
