import React, {PropTypes} from 'react';
import HeaderContainer from './common/header.container';
import MenuContainer from './common/menu.container';

class MasterContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.location.pathname === "/login" ?
            <div>
              {this.props.children}
            </div>
            :
            <div>
              <div className="page-wrapper">
                <div className="page-wrapper-row">
                  <div className="page-wrapper-top">
                    <div className="page-header">
                      <HeaderContainer />
                      <MenuContainer />
                    </div>
                  </div>
                </div>
              </div>
              {this.props.children }
            </div>
        }

      </div>
    );
  }
}


export default MasterContainer;
