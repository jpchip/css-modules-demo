import styles from './submitButton.css';

import React, { Component } from 'react';

export default class SubmitButton extends Component {

	constructor(props) {
		super(props);

		//use default styles if not given in props
		if(props.styles) {
			for(var style in styles) {
				if(styles.hasOwnProperty(style)) {
					if(!props.styles.hasOwnProperty(style)) {
						props.styles[style] = styles[style];
					}
				}
			}
		}
		this.state = {status: props.initialStatus};
	}

	handleClick() {
		let self = this;
		if(this.state.status === 'disabled') {
			return;
		}

		this.setState({status: 'progress'});
		var timeoutID = window.setTimeout(function() {
			self.setState({status: 'normal'});
		}, 2000);
	}

	render() {
		let className, label = 'Submit';
		if (this.state.status === 'progress') {
			className = this.props.styles.inProgress;
			label = "Processing..."
		} else if (this.state.status === 'error') {
			className = this.props.styles.error;
		} else if (this.state.status === 'disabled') {
			className = this.props.styles.disabled;
		} else {
			className = this.props.styles.normal;
		}

		return (
			<button className={className} type='submit' onClick={this.handleClick.bind(this)} >{label}</button>
		);
	}

};

SubmitButton.propTypes = {
	initialStatus : React.PropTypes.string,
	styles : React.PropTypes.object
};
SubmitButton.defaultProps = { styles: styles, initialStatus: 'normal' };