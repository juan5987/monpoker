import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.list}>
        <li className={styles.element}>
          <Link href='/infos' className={styles.link}>
            Mentions légales
          </Link>
        </li>
        <li className={styles.element}>
          <Link href='/personnaldata' className={styles.link}>
            Données personnelles
          </Link>
        </li>
        <li className={styles.element}>
          <Link href='/contact' className={styles.link}>
            Contact
          </Link>
        </li>
        <li className={styles.element}>
          <Link href='/faq' className={styles.link}>
            F.A.Q
          </Link>
        </li>
      </ul>
      <span className={styles.copyright}>
        © 2023 Juan5987 - Tous droits réservés
      </span>
    </footer>
  );
};

export default Footer;
