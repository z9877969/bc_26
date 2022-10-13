export const getIsAuth = (state) => Boolean(state.auth.idToken);
export const getIsLoading = (state) => state.auth.isLoading;
export const getLocalId = (state) => state.auth.localId;
