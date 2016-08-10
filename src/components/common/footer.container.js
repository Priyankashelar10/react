import React, { Component, PropTypes } from 'react';
import FooterView from './footer.view';

class FooterContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <FooterView />
            </div>
        )
    }
}

export default FooterContainer