import React, {PropTypes} from 'react';

class MasterContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

MasterContainer.propTypes = {
};

export default MasterContainer;
