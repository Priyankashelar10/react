import React, { Component, PropTypes } from 'react';
import HeaderView from './header.view';

class HeaderContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <HeaderView />
            </div>
        )
    }
}

export default HeaderContainer