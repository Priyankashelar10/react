import React, { Component, PropTypes } from 'react';
import DashboardView from './dashboard.view';

class DashboardContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <DashboardView />
            </div>
        )
    }
}

export default DashboardContainer