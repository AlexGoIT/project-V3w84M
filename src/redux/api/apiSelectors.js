export const selectCategories = state => state.api.categories; // []

export const selectExercises = state => state.api.exercises; // { result: [], total_results: number }

export const selectFilters = state => state.api.filters; // { result: [], total_results: number }

export const selectProducts = state => state.api.products; // { result: [], total_results: number }

export const selectIsLoading = state => state.api.isLoading; // boolean

export const selectError = state => state.api.error; // { message: string }

export const selectCalculate = state => state.api.calculate; // {}

export const selectDiary = state => state.api.diary; // {}

export const selectDiaryUpdated = state => state.api.diaryUpdated; // boolean

export const selectStatistics = state => state.api.statistics; // {}
