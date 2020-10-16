import React, { Component } from 'react';
import {MDBInput} from 'mdbreact';
class Username extends Component {
    render() {
        return (
			<div style={{
                width:500
            }}>
				<MDBInput label="Username" outline size="lg" class="w-25 p-3" />
			</div>
		);
    }
}

export default Username;