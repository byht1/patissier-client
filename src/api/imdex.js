import axios from 'axios';

const URL = 'https://patissier-server.herokuapp.com';

export const server = axios.create({
  baseURL: URL,
});

// axios.defaults.baseURL = 'https://patissier-server.herokuapp.com'

export const getClosestCourses = async () => {
  const res = await axios.get(`${URL}/courses/all`)
  // console.log('res.data: ', res.data)
  return res.data;
}
