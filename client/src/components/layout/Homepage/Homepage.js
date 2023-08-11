import ProductList from '../../views/ProductList/ProductList';
import styles from './Homepage.module.scss';
import Container from 'react-bootstrap/esm/Container';

const Homepage = () => {
  return (
    <>
      <Container>
        <div className={styles.backgroundImage}></div>
        <ProductList />
      </Container>
    </>
  );
};

export default Homepage;
