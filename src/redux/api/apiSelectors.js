export const selectCategories = state => state.api.categories; // []

export const selectExercises = state => state.api.exercises; // [{}]

export const selectFilters = state => state.api.filters; // [{}]

export const selectProducts = state => state.api.products; // [{}]

export const selectIsLoading = state => state.api.isLoading; // boolean

export const selectError = state => state.api.error; // {message: string}
