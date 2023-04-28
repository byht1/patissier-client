import { server } from './basic';

const UrlCourses = Object.freeze({ 
    courses: '/courses',
});
// Function for requests on the main page and all courses page:
export const getCourses = async (skip = 0, count = 3) => {
  const query = `${UrlCourses.courses}?skip=${skip}&count=${count}`;
  try {
    const { data } = await server.get(query);
    return data;
  } catch (error) {
    throw error;
  }
};