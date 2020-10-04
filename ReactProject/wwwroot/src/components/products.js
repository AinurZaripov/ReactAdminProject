import React from 'react';

class Products extends React.Component {

    

    render() {
        return (
            <div>
                <p>Наименование: {this.props.name}</p>
                <p>Описание: {this.props.description}</p>
                <p>Цена: {this.props.price}</p>
            </div>
        );
    }
}

export default Products;
