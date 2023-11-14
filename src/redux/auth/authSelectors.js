export const selectIsAuthorized = state => state.auth.isAuthorized;

export const selectIsRefreshed = state => state.auth.isRefreshed;

export const selectToken = state => state.auth.token;

export const selectAuthError = state => state.auth.error;

export const selectUser = state => state.auth.user;

export const selectFile = state => state.auth.file;
