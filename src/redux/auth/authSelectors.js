export const selectIsAuthorized = state => state.auth.isAuthorized;

export const selectIsRefreshed = state => state.auth.isRefreshed;

export const selectToken = state => state.auth.token;

export const selectAuthError = state => state.auth.error;
