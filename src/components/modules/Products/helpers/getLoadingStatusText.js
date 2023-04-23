export const getLoadingStatusText = (status, error) => {
  switch (status) {
    case 'loading':
      return <p>Loading...</p>;
    case 'error':
      return <p>Error: {error.message}</p>;
    default:
      return '';
  }
};
