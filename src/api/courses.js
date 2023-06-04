import { server } from './basic';

const UrlCourses = Object.freeze({
  courses: '/courses',
});
// Function for requests on the main page and all courses page:
export const getCourses = async ({ skip = 0, limit = 3 }) => {
  const query = `${UrlCourses.courses}?skip=${skip}&limit=${limit}`;
  console.log(`${UrlCourses.courses}?skip=${skip}&limit=${limit}`);
  try {
    const { data } = await server.get(query);
    const { courses } = data;
    console.log(courses);
    return courses;
  } catch (error) {
    throw error;
  }
};

export const getCoursesByCategory = async ({ type, skip = 0, limit = 3 }) => {
  const query = `${UrlCourses.courses}?type=${type}&skip=${skip}&limit=${limit}`;
  console.log(`${UrlCourses.courses}?type=${type}&skip=${skip}&limit=${limit}`);
  try {
    const { data } = await server.get(query);
    const { courses } = data;
    console.log(courses);
    return courses;
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
