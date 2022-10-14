export const getIsAuth = (state) => Boolean(state.auth.idToken);
export const getIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getIsRefreshing = (state) => state.auth.isRefreshing;
export const getIsLoading = (state) => state.auth.isLoading;
export const getLocalId = (state) => state.auth.localId;
export const getAuthError = (state) => state.auth.error;
