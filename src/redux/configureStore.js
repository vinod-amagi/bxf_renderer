import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './reducers'
import scheduleReducer from '../schedule/features/schedule/reducer/Schedule'


export default function configureStore(preloadedState) {
  return createStore(
    combineReducers({
      app: appReducer,
      schedule: scheduleReducer
    }),
    preloadedState,
    applyMiddleware(
      thunkMiddleware
    )
  )
}
