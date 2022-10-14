import { refreshToken } from "../auth/authOperations";

export const errorHandler =
  ({ error, cb }) =>
  (dispatch, getState) => {
    if (error.request?.status === 400 || error.request?.status === 401) {
      dispatch(refreshToken(cb));
    }
  };
