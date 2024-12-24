import { combineReducers, legacy_createStore as createStore } from 'redux'
import { appReducer } from './app-reducer'
import { todolistsReducer } from '../features/todolists/model/todolists-reducer'
import { tasksReducer } from '../features/todolists/model/tasks-reducer'
 
// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
  tasks: tasksReducer,
  todolists: todolistsReducer,
  app: appReducer,
})
// непосредственно создаём store
export const store = createStore(rootReducer)
 
// определить автоматически тип всего объекта состояния
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
 
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store