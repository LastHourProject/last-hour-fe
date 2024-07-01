import { configureStore } from '@reduxjs/toolkit';

import users from '../reducer/users';

const store = configureStore({
  reducer: {
    users,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
