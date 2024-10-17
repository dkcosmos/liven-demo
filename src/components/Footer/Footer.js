import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer} flex-padded-row app-title`}>Liven</footer>
  )
};

export default Footer;