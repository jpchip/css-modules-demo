import styles from './submitButton.css';

import React, { Component } from 'react';

export default class SubmitButton extends Component {
	
	constructor(props) {
		super(props);
		this.state = {status: props.initialStatus};
	}
	
	handleClick() {
		let self = this;
		if(this.state.status === 'disabled') {
			return;
		}
		
		this.setState({status: 'progress'});
		timeoutID = window.setTimeout(function() {
			self.setState({status: 'normal'});
		}, 2000);
	}

  render() {
	let className, label = 'Submit';
	if (this.state.status === 'progress') {
      className = styles.inProgress;
      label = "Processing..."
    } else if (this.state.status === 'error') {
      className = styles.error;
    } else if (this.state.status === 'disabled') {
      className = styles.disabled;
    } else {
      className = styles.normal;
    }
	  
    return (
      <button className={className} type='submit' onClick={this.handleClick.bind(this)} >{label}</button>
    );
  }

};

SubmitButton.propTypes = {
	status : React.PropTypes.string
}
SubmitButton.defaultProps = { status: 'normal' };