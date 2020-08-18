import { createAction, createReducer } from '@reduxjs/toolkit';

const initialState = [];

export const addCar = createAction('ADD_CAR');
export const addCars = createAction('ADD_CARS');

export default createReducer(initialState, {
  [addCar.type]: (state, action) => [ ...state, action.payload ],
  [addCars.type]: (state, action) => [ ...action.payload ]
})
