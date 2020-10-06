import { Admin, Resource } from 'react-admin';
import { UserList } from './users';
import React from 'react';
import logo from './logo.svg';
import './App.css';
import jsonServerProvider from 'ra-data-json-server';
import MyUrlField from './MyUrlField';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div className="App">
      <Admin dataProvider={dataProvider}>
          <Resource name="users" list={UserList} /> 
      </Admin>
    </div>
  );
}

export default App;
