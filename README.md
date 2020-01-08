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
dispatch(fetchUser())
// also it can dispatch multiple thunk actions
dispatch([fetchUser(), fetchUserWishList()])
```

#### It can dispatch multiple actions, if provided argument is an `array` of actions.

```js
dispatch([
  addToDo('Learn how to use redux-soldier 👨🏼‍✈️'),
  addToDo('Install redux-soldier and start using in my project'),
])
```

#### It can create an `action` and dispatch this. Is a simple replacement for `actionCreators`

```js
dispatch('ADD_TODO', 'Learn how to use redux-soldier 👨🏼‍✈️')
/* 
  it create {type: 'ADD_TODO', payload: 'Learn how to use redux-soldier 👨🏼‍✈️'} and then dispatches this action
  first argument represent 'action type' and last 'action payload'
*/
// also it can create and dispatch multiple actions
dispatch([
  ['ADD_TODO', 'Learn how to use redux-soldier 👨🏼‍✈️'],
  ['ADD_TODO', 'Install redux-soldier and start using in my project'],
])
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**[@Gherciu/redux-soldier](https://github.com/Gherciu/redux-soldier)** © [GHERCIU](https://github.com/Gherciu), Released under the [MIT](https://github.com/Gherciu/redux-soldier/blob/master/LICENSE) License.<br>
Authored and maintained by GHERCIU with help from contributors ([list](https://github.com/Gherciu/redux-soldier/contributors)).

#### If you like this repository star⭐ and watch👀 on [GitHub](https://github.com/Gherciu/redux-soldier)
