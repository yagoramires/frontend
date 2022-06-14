import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

//Page and layout imports
import Homepage from './pages/HomePage';
import './global.css';

const client = new ApolloClient({
  uri: 'http://localhost:1338/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className='App'>
      <ApolloProvider client={client}>
        <Homepage />
      </ApolloProvider>
    </div>
  );
}

export default App;
