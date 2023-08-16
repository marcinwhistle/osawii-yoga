import React from 'react';
import ProductList from '../../views/ProductList/ProductList';
import styles from './Homepage.module.scss';
import Container from 'react-bootstrap/esm/Container';

const Homepage = () => {
  return (
    <>
      <div className={styles.backgroundImage}></div>
      <Container>
        <h1>Odzyskaj swoją wewnętrzną równowagę:</h1>
        <ProductList />
      </Container>
    </>
  );
};

export default Homepage;
