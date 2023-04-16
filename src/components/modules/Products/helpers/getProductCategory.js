export const getProductCategory = pathname => {
  let categoryName = '';
  switch (pathname) {
    case 'cakes':
      categoryName = 'Торти';
      break;
    case 'pastries':
      categoryName = 'Тістечка';
      break;
    case 'cookies':
      categoryName = 'Печиво';
      break;
    case 'bakering':
      categoryName = 'Випічка';
      break;
    case 'pies':
      categoryName = 'Пироги';
      break;
    default:
      categoryName = '';
      break;
  }
  return categoryName;
};
