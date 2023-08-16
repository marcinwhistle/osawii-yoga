import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getProducts,
  getRequest,
  loadProductsRequest,
} from '../../../redux/productsReducer';
import { useEffect } from 'react';
import Products from '../../features/Products/Products';

const ProductList = () => {
  const dispatch = useDispatch();

  const products = useSelector(getProducts);
  const request = useSelector(getRequest);

  useEffect(() => {
    dispatch(loadProductsRequest());
  }, [dispatch]);

  console.log('Products:', products);
  console.log('Request:', request);

  if (request.pending) return <div>Loading...</div>;
  else if (request.error) return <div>Error {request.error}</div>;
  else if (!request.success || !products.length) return <div>No products</div>;
  else if (request.success) return <Products products={products} />;
};

export default ProductList;
