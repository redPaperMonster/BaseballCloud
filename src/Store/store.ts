import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "./UserSlice/UserSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfigUserName = {
  key: "user",
  storage,
};

const persistedUserReducer = persistReducer(persistConfigUserName, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
