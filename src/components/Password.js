import React, { Component } from 'react';
import { MDBInput } from 'mdbreact';
class Password extends Component {
	render() {
		return (
			<div style={{
                width:500
            }}>
				<MDBInput label="Password" outline size="lg" />
			</div>
		);
	}
}

export default Password;
