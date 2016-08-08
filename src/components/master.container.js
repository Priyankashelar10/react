import React, {PropTypes} from 'react';
import MasterView from './master.view';

class MasterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <MasterView locationName={this.props.location.pathname} children={this.props.children}/>
      </div>
    );
  }
}


export default MasterContainer;
