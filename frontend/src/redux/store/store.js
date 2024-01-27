import { configureStore } from "@reduxjs/toolkit";
import userSlice from "../slice/user";

const reducers = {
  user: userSlice,
};

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});
