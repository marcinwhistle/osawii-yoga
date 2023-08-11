import Button from '../../common/Button/Button';
import styles from './ProductList.module.scss';

const ProductList = () => {
  return (
    <div className={styles.ProductList}>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src="/images/1.jpg" alt="Product 1" />
          <div className={styles.buttonGroup}>
            <Button variant="outline">Szczegóły</Button>
            <Button variant="outline">Dodaj do koszyka</Button>
          </div>
        </div>
        <div className={styles.col}>
          <img src="/images/2.jpg" alt="Product 2" />
          <div className={styles.buttonGroup}>
            <Button variant="outline">Szczegóły</Button>
            <Button variant="outline">Dodaj do koszyka</Button>
          </div>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.col}>
          <img src="/images/3.jpg" alt="Product 3" />
          <div className={styles.buttonGroup}>
            <Button variant="outline">Szczegóły</Button>
            <Button variant="outline">Dodaj do koszyka</Button>
          </div>
        </div>
        <div className={styles.col}>
          <img src="/images/4.jpg" alt="Product 4" />
          <div className={styles.buttonGroup}>
            <Button variant="outline">Szczegóły</Button>
            <Button variant="outline">Dodaj do koszyka</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
