import api from '../../services/api';

import { addCars } from '../ducks/cars';

export const allCars = () => {
  return (dispatch) => {
    api.get('/cars')
      .then((response) => dispatch(addCars(response.data)))
      .catch(console.log)
  }
}