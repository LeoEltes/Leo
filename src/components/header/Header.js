// Header.js
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <a className={styles.navLink} href="/blog">Blog</a>
      <a className={styles.navLink} href="/">Home</a>
      <a className={styles.navLink} href="/">Contact</a>
    </header>
  );
};

export default Header;
