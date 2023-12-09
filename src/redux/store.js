import { configureStore } from '@reduxjs/toolkit';
import { carsReducer } from './cars/carsSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'token',
//   storage,
//   whitelist: ['token'],
// };

// const persistedReducer = persistReducer(persistConfig);

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
  // middleware: getDefaultMiddleware =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
