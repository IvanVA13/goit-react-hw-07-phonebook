import { configureStore } from '@reduxjs/toolkit';
// import logger from 'redux-logger';

import { contacts } from './contacts';

const store = configureStore({
  reducer: {
    contacts,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  // .concat(logger),
});

// eslint-disable-next-line import/no-anonymous-default-export
export default store;
