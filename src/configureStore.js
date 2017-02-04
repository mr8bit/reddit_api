import {createStore, applyMiddleware} from 'redux' // благодаря applyMiddleware у нас становятся доступными
                                                  // аргументы, которые мы можем использовать
                                                 //во благо приложения: store, next, action
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from './reducers'

const loggerMiddleware = createLogger();

export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware(thunkMiddleware, loggerMiddleware)
    )
}
