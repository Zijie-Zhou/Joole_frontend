import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { userSlice } from './Reducer/user';
import { themeSlice } from './Reducer/theme';
import { filterSlice } from './Reducer/filter';
import { persistStore, persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import thunk from'redux-thunk';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    user: userSlice.reducer,
    theme: themeSlice.reducer,
    filter: filterSlice.reducer,
});

const persistConfig = {
    key: 'persist-key',

    storage
}


const persistedReducer = persistReducer(persistConfig, rootReducer);



const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk]
});

const persistor = persistStore(store);

export default store

export {persistor}