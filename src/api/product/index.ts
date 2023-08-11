import { API } from '@src/api/auth/index';
import axios from 'axios';

const products = `${API}/products`;

export const getAllProducts = async () => {
  try {
    const response = await axios.get(products);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
