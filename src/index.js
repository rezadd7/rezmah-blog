import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

//Graphql
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:"https://api-us-west-2.hygraph.com/v2/cllz6mriy26ph01rrcr5b3v7b/master",
  cache: new InMemoryCache(),
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>

);


