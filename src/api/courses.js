import { server } from './basic';

const UrlCourses = Object.freeze({
  courses: '/courses',
});
// Function for requests on the main page and all courses page:
export const getCourses = async ({ skip, limit = 3 }) => {
  const query =
    skip === 0
      ? `${UrlCourses.courses}?limit=${limit}`
      : `${UrlCourses.courses}?skip=${skip}&limit=${limit}`;
  try {
    const { data } = await server.get(query);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCoursesByCategory = async ({ type, skip, limit = 3 }) => {
  let query;
  if (skip === 0) {
    query = `${UrlCourses.courses}?type=${type}&limit=${limit}`;
  } else {
    query = `${UrlCourses.courses}?type=${type}&skip=${skip}&limit=${limit}`;
  }
  try {
    const { data } = await server.get(query);
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCourseById = async (courseId, format) => {
  let query = `${UrlCourses.courses}/${courseId}?`;
  if (format && format !== 'all') {
    query += `format=${format}`;
  }
  try {
    const { data } = await server.get(query);
    return data;
  } catch (error) {
    throw error;
  }
};
