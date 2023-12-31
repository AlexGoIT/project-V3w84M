import { createSlice } from '@reduxjs/toolkit';
import {
  addExercise,
  addProduct,
  deleteExercise,
  deleteProduct,
  fetchCalculate,
  fetchCategories,
  fetchDiary,
  fetchExercises,
  fetchFilters,
  fetchProducts,
  fetchStatistics,
} from './apiOperations';

const initialState = {
  categories: [],
  exercises: {},
  filters: {},
  products: {},
  calculate: {},
  diary: {},
  statistics: {},
  diaryUpdated: false,
  isLoading: false,
  error: null,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(fetchExercises.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchExercises.fulfilled, (state, action) => {
        state.exercises = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchExercises.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(fetchFilters.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchFilters.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(fetchProducts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(fetchCalculate.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCalculate.fulfilled, (state, action) => {
        state.calculate = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchCalculate.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    //===============================================================
    // Diary
    //===============================================================
    builder
      .addCase(fetchDiary.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDiary.fulfilled, (state, action) => {
        state.diary = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchDiary.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(addProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(addExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(addExercise.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addExercise.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(deleteProduct.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.diary = action.payload;
        state.diaryUpdated = true;
        state.isLoading = false;
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    builder
      .addCase(deleteExercise.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteExercise.fulfilled, (state, action) => {
        state.diary = action.payload;
        state.diaryUpdated = true;
        state.isLoading = false;
      })
      .addCase(deleteExercise.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });

    //===============================================================
    // Statistics
    //===============================================================
    builder
      .addCase(fetchStatistics.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchStatistics.fulfilled, (state, action) => {
        state.statistics = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchStatistics.rejected, (state, action) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  },
  reducers: {
    diaryUpdateReset: state => {
      state.diaryUpdated = false;
    },
  },
});

export const apiReducer = apiSlice.reducer;
