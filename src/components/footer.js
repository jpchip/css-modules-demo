import styles from './Footer.css';

import React, { Component } from 'react';

export default class Footer extends Component {

  render() {
	var year = new Date().getFullYear();
    return (
      <div className={ styles.box }>
        <p className={ styles.copyright }>&copy; {year} some company</p>
      </div>
    );
  }

};
