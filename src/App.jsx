import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const { Home } = require('page/Home');

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
}

export default App;
