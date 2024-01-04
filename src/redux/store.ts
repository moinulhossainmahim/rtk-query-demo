import { configureStore } from "@reduxjs/toolkit";
import { postsApi } from "./services/postsApi";
import { setupListeners } from "@reduxjs/toolkit/query";

const store = configureStore({
  reducer: {
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware),
})

export type ReduxStore = ReturnType<typeof store.getState>;

setupListeners(store.dispatch);

export default store;
