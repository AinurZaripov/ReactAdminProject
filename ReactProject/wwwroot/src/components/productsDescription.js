import React from 'react';

class ProductsDescription extends React.Component {

    
    render() {
        return (
            <form onSubmit={this.props.productsMethod}>
                <button>Получить список</button>
            </form>
        );
    }
    
}

export default ProductsDescription;
