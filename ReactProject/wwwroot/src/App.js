import React from 'react';
import Products from './components/products';
import ProductsDescription from './components/productsDescription';
import ProductsList from './components/productsList';
import { TopToolbar } from 'react-admin';

class App extends React.Component {

    state = {
        array: undefined,
        error: undefined
    }
    gettingProducts = async (e) => 
    {
        e.preventDefault();
        const api_url = await
        fetch('https://localhost:44382/api/Products');
        const data = await api_url.json();
        console.log(data);

        this.setState(
            {
                array: data,
                error: ""
            });
    }
    render() {
        return (
            <div>
                <ProductsDescription productsMethod={this.gettingProducts}/>

                return (
                <ul>
                </ul>
                );
                <First />
               
            </div>
        );
    }
}

class First extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [{name: 'bob'}, {name: 'chris'}],
      };
    }
    
    render() {
      return (
        <ul>
          {this.state.data.map(d => <li key={d.name}>{d.name}</li>)}
        </ul>
      );
    }
  }
export default App;
