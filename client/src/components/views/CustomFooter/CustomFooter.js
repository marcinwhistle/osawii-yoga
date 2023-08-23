import styles from './CustomFooter.module.scss';

const CustomFooter = () => {
  return (
    <div className={styles.root}>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles['footer-col']}>
              <ul>
                <h4>O nas</h4>
                <li>
                  <a href="#">Szkoła jogi</a>
                </li>
                <li>
                  <a href="#">Zajęcia indywidualne</a>
                </li>
                <li>
                  <a href="#">Imprezy okolicznościowe</a>
                </li>
                <li>
                  <a href="#">Praktyka uważności</a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <ul>
                <h4>Pomoc</h4>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Polityka prywatności</a>
                </li>
                <li>
                  <a href="#">Regulamin</a>
                </li>
                <li>
                  <a href="#">Uprawnienia</a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <ul>
                <h4>Sklep online</h4>
                <li>
                  <a href="#">Kursy</a>
                </li>
                <li>
                  <a href="#">Platforma jogi</a>
                </li>
                <li>
                  <a href="#">Szkolenia</a>
                </li>
              </ul>
            </div>
            <div className={styles['footer-col']}>
              <ul className={styles['social-links']}>
                <h4>Śledź nas</h4>
                <a href="#">
                  <i className="fab fa-facebook"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin"></i>
                </a>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CustomFooter;
