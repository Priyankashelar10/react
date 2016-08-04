import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import HomeView from './home.view';


class HomeContainer extends Component {
    constructor(props) {
        super(props);
        this.state = { };
    }

    render() {
        return (
            <div>
                <HomeView />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeContainer);
