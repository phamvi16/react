import React, { Component } from 'react';
class KeepSignIn extends Component {
    render() {
        return (
            <div>
                {/* Default unchecked disabled */}
                <div class="custom-control custom-checkbox">
                    <input type="checkbox" class="custom-control-input" id="defaultUncheckedDisabled2" indeterminate/>
                    <label class="custom-control-label" for="defaultUncheckedDisabled2">Keep me signed in</label>
                </div>
            </div>
		);
    }
}

export default KeepSignIn;