import React, {PropTypes} from 'react';
import HeaderContainer from './common/header.container';
import MenuContainer from './common/menu.container';
import FooterContainer from './common/footer.container';

class MasterView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.locationName === "/login" ?
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
              <div className="page-wrapper-row full-height">
                <div className="page-wrapper-middle">
                  <div className="page-container">
                    <div className="page-content-wrapper">
                      {this.props.children }
                    </div>
                  </div>
                </div>
              </div>
              <FooterContainer />
            </div>
        }
      </div>
    );
  }
}


export default MasterView;
