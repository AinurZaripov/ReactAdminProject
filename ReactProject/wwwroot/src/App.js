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
/*
    state = {
        name: undefined,
        description: undefined,
        price: undefined,
        error: undefined
    }
   
    stateList = {
        list: undefined
    }
    
 */
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

   /*     this.setState(
            {
                name: data.name,
                description: data.description,
                price: data.price,
                error: ""
            }
        );

        this.setState({
            list: data
        }); */
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
<TopToolbar></TopToolbar>
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
  


{/* <Products 
                    name = {this.state.name}
                    description = {this.state.description}
                    price = {this.state.price }
                /> */}

                 /* <ProductsList list = {this.state.array}/> */
export default App;
