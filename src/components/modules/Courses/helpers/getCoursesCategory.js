export const getCoursesCategory = pathname => {
  let categoryName = '';
  switch (pathname) {
    case 'course':
      categoryName = 'courses';
      break;
    case 'master-classes':
      categoryName = 'master_classes';
      break;
    default:
      categoryName = '';
      break;
  }
  return categoryName;
};
