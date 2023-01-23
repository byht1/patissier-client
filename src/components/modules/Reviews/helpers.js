export const formatDate = date => {
  const nd = date.split('-');
  nd.splice(2, 1, nd[2].split('T')[0]);
  return nd.reverse().join('.');
};
