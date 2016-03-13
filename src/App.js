import React from 'react'
import styles from './App.css';
import SubmitButton from './components/submitButton.js';
import Footer from './components/footer.js';
import submitButtonThemeA from './components/submitButtonThemeA.css';

export default React.createClass({
	render() {
		return <div className={styles.app}>
			<h1 className={styles.title}>CSS Modules Demo!</h1>

			<h3>Submit Buttons:</h3>
			<SubmitButton />
			<SubmitButton initialStatus='disabled' />
			<SubmitButton initialStatus='error' />
			<SubmitButton initialStatus='progress' />
			<h3>Style Overrides</h3>
			<SubmitButton styles={submitButtonThemeA} />
			<SubmitButton initialStatus='error' styles={submitButtonThemeA} />
			<Footer />
		</div>
	}
})
