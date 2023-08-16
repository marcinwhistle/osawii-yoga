import React from 'react';
import Product from '../../views/Product/Product/Product';

const Products = ({ products }) => {
  return (
    <section>
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
};

export default Products;
