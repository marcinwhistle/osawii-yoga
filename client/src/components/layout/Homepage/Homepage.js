import styles from './Homepage.module.scss';
import Container from 'react-bootstrap/esm/Container';

const Homepage = () => {
  return (
    <Container>
      <div className={styles.backgroundImage}></div>
    </Container>
  );
};

export default Homepage;
