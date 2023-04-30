export const sortProductsMethod = sortMethod => {
  switch (sortMethod) {
    case 'Спочатку дешевші':
      return 'min-max';
    case 'Спочатку дорожчі':
      return 'max-min';
    case 'Спочатку популярні':
      return 'popular';
    default:
      return '';
  }
};
