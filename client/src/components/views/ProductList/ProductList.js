import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Products from '../../features/Products/Products';
import { fetchProducts } from '../../../redux/productsRedux';
import { getAllProducts } from '../../../redux/productsRedux';

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  const products = useSelector(getAllProducts);

  return (
    <>
      <h1>Produkty</h1>
      <Products products={products} />;
    </>
  );
};

export default ProductList;
