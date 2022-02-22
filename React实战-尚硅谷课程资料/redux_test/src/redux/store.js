/* 
	该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore, applyMiddleware, 
  // compose
} from 'redux'
//引入汇总之后的reducer
import reducer from './reducers'
//引入redux-thunk，用于支持异步action
import thunk from 'redux-thunk'
//引入redux-devtools-extension
import {composeWithDevTools} from 'redux-devtools-extension'

//暴露store 
// 方式1: redux-devtools工具的使用
export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)), 
)

// 方式2: redux-devtools工具的使用
// const composeEnhances = window.__REDUX_DEVTOOLS_EXTENSION__ ?
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
// const enhancer = composeEnhances(applyMiddleware(thunk))
// export default createStore(
//   reducer,
//   enhancer
// )