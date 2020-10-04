import { Admin, Resource, ListGuesser } from 'react-admin';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={ListGuesser} />
        <Resource name="posts" list={ListGuesser} />
      </Admin>
    </div>
  );
}

export default App;
