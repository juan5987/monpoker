import React from 'react';
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuopen] = React.useState(false);

  return (
    <header>
      <nav className={styles.navbar}>
        <span className={styles.title}>monpoker</span>
        <ul className={styles.list}>
          <li>
            <Link href='/' className={styles.element}>
              accueil
            </Link>
          </li>

          <li>
            <Link href='/tournaments' className={styles.element}>
              tournois
            </Link>
          </li>
          <li>
            <Link href='/chips' className={styles.element}>
              jetons
            </Link>
          </li>

          <li>
            <Link href='/account' className={styles.element}>
              compte
            </Link>
          </li>

          <li>
            <Link href='/login' className={`${styles.element} ${styles.login}`}>
              connexion
            </Link>
          </li>
        </ul>
        <div
          onClick={() => setIsMenuopen(!isMenuOpen)}
          className={isMenuOpen ? styles.burgerOpen : styles.burger}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul className={isMenuOpen ? styles.listMobile : styles.listMobileClose}>
          <li className={styles.li}>
            <Link href='/' className={styles.elementMobile}>
              accueil
            </Link>
          </li>

          <li className={styles.li}>
            <Link href='/tournaments' className={styles.elementMobile}>
              tournois
            </Link>
          </li>
          <li className={styles.li}>
            <Link href='/chips' className={styles.elementMobile}>
              jetons
            </Link>
          </li>

          <li className={styles.li}>
            <Link href='/account' className={styles.elementMobile}>
              compte
            </Link>
          </li>

          <li className={styles.li}>
            <Link href='/login' className={styles.elementMobile}>
              connexion
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
