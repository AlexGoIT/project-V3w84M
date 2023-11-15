// boolean
export const selectIsAuthorized = state => state.auth.isAuthorized;

// boolean
export const selectIsRefreshed = state => state.auth.isRefreshed;

// string
export const selectToken = state => state.auth.token;

// { message: string }
export const selectAuthError = state => state.auth.error;

// { name: string, email: string, avatarURL: string, ... }
export const selectUser = state => state.auth.user;
