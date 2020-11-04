import {fetchUtils, Admin, Resource, EditGuesser } from 'react-admin';
import { ProductsCreate, ProductsEdit, ProductsList } from './products';
import { AddressList } from './address';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import MyUrlField from './MyUrlField';
import dataProvider from './dataProvider';

// const httpClient = (url, options = {}) => {
//   if (!options.headers) {
//       options.headers = new Headers({ Accept: 'application/json' });
//   }
//   // add your own headers here
//   options.headers.set('access-control-allow-origin', '*'); //<----see here
//   return fetchUtils.fetchJson(url, options);
// };
// const dataProvider = jsonServerProvider('https://localhost:44382/api', httpClient);

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
          <Resource name="Products" list={ProductsList} edit={ProductsEdit}/> 
          <Resource name="Address" list={ProductsList} edit={EditGuesser} /> 
      </Admin>
    </div>
  );  
}

export default App;
