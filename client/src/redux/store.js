import { userReducer } from "./reducer";
import {createStore,compose,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage: storage,
    // whitelist: ['user'] // which reducer want to store
  };
  
  const rootReducer=userReducer
  const persistedReducer = persistReducer(persistConfig, rootReducer)


let devtools= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store =createStore(persistedReducer,compose(applyMiddleware(thunk),devtools))
const persistor = persistStore(store);
export { persistor, store };