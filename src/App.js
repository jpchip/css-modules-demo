import React from 'react'
import styles from './App.css';
import Footer from './components/Footer.js';

export default React.createClass({
  render() {
    return <div className={styles.app}>
      <h1 className={styles.title}>Welcome to React!</h1>
	  <Footer />
    </div>
  }
})
