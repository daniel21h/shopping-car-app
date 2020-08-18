import { configureStore } from '@reduxjs/toolkit';

import rootCars from './ducks/cars';

export default configureStore({
  reducer: {
    cars: rootCars
  }
})