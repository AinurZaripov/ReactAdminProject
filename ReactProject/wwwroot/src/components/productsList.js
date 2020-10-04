import React from 'react';

function Item(props) {
    return <li>{props.name}</li>;
  }

class ProductsList extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.array.data.map((name) => <Item key={name} name={name} />)}
                </ul>
            </div>
        );
    }
}


export default ProductsList;
