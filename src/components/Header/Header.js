import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './Header.module.scss';
import { APP_STORE_URL } from '../../constants';

const Header = ({ goToAppPage }) => {
  const goToAppStore = () => window.open(APP_STORE_URL, '_blank');
  return (
    <header className={`${styles.header} flex-padded-row`}>
      <div role="button" onClick={goToAppPage} className="app-title cursor-pointer">Liven</div>
      <Button onClick={goToAppStore}>Get App</Button>
    </header>
  )
};

export default Header;