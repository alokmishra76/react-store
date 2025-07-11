// store/loaderMiddleware.js

import { startLoading, stopLoading } from "../../slices/loaderSlice";


const isPending = (type) => type.endsWith('/pending');
const isRejected = (type) => type.endsWith('/rejected');
const isFulfilled = (type) => type.endsWith('/fulfilled');

export const loaderMiddleware = (storeAPI) => (next) => (action) => {

  const skipLoader = action?.meta?.skipLoader;

  if (isPending(action.type) && !skipLoader) {
    storeAPI.dispatch(startLoading());
  }

  if ((isRejected(action.type) || isFulfilled(action.type)) && !skipLoader) {
    storeAPI.dispatch(stopLoading());
  }

  return next(action);
};
