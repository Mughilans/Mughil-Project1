import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import UserReducer from './User/UserReducer'
import CartReducer from './Cart/CartReducer'
import directoryReducer from './Directory/DirectoryReducer'
import shopReducer from './Shop/ShopReducer'


const persistConfig = {
    key: "root",
    storage,
    whitelist: ['cart']
}

const rootReducer = combineReducers({
    user: UserReducer,
    cart: CartReducer,
    directory: directoryReducer,
    shop: shopReducer
})

export default persistReducer(persistConfig, rootReducer)