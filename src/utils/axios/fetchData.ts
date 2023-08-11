import axios from 'axios';
import { API } from '@src/api/auth/index';
// interface AxiosProps {
//   url: string;
// }

export const fetchData = async () => {
  const dataurl = `${API}/products`;
  try {
    const res = await axios.get(dataurl);
    return res.data;
  } catch (error) {
    return error;
  }
};
