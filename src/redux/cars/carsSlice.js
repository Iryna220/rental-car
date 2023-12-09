import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getCarsThunk } from './fetchCar';

const carsInitialState = {
  cars: [],
  isLoading: false,
  error: null,
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [getCarsThunk];

const addStatusToActs = status => arrOfActs.map(el => el[status]);

export const carsSlice = createSlice({
  name: 'cars',
  initialState: carsInitialState,
  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.cars = payload;
        state.error = null;
      })

      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)

      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected);
  },
});
