import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Products from '../../features/Products/Products';
import { fetchProducts } from '../../../redux/productsRedux';
import { getAllProducts } from '../../../redux/productsRedux';
import styles from './ProductList.module.scss';

const ProductList = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchProducts()), [dispatch]);

  const products = useSelector(getAllProducts);

  return (
    <div className={styles.productListContainer}>
      <Products products={products} />
    </div>
  );
};

export default ProductList;
