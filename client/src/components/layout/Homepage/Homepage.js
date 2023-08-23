import React from 'react';
import ProductList from '../../views/ProductList/ProductList';
import Container from 'react-bootstrap/esm/Container';
import PageBaner from '../../views/PageBaner/PageBaner';

const Homepage = () => {
  return (
    <>
      <Container>
        <PageBaner text="Odzyskaj swoją wewnętrzną równowagę!" />
        <ProductList />
      </Container>
    </>
  );
};

export default Homepage;
