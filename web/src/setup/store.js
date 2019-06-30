// Imports
import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

// App Imports
import common from '../components/common/api/state'
import * as thoughts from '../components/thoughts/api/state'
import * as users from '../components/users/api/state'

// Root Reducer
const rootReducer = combineReducers({
  common,
  ...thoughts,
  ...users
})

// Store
export const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(thunk),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );