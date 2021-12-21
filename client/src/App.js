import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloProvider
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { 
  LoginPage,
  RegisterPage,
  AreaSelectPage } from './pages';

const httpLink = createHttpLink({
  uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/areaselect" element={<AreaSelectPage />} />
        </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
