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
  AreaSelectPage, 
  AreaTaskPage,
  CreateArea, PrivacyPage } from './pages';

import Navbar from './components/Navbar';
import NewTaskForm from './components/NewTaskForm';




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
        <Navbar />
        <Routes client={client} >
          <Route path="/" element={<LoginPage client={client} />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/createarea" element={<CreateArea />} />
          <Route path="/createtask/:id" element={<NewTaskForm client={client} />} />
          <Route path="/areaselect" element={<AreaSelectPage client={client} />} />
          <Route path="/areatasks/:id" element={<AreaTaskPage client={client} />} />
        </Routes>
    </div>
    </ApolloProvider>
  );
}

export default App;
