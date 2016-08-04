import React, { Component, PropTypes } from 'react';

class HomeView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
               <h1> Hello From React </h1>
            </div>
        )
    }
}

HomeView.propTypes = {
};

export default HomeView