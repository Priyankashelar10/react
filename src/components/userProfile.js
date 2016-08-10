import React, { Component, PropTypes } from 'react';
import "../assets/pages/css/profile.min.css"; 

class UserProfileView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="page-head">
                    <div className="container">
                        <div className="page-title">
                            <h1>User Profile
                            </h1>
                        </div>
                        <div className="page-toolbar">
                            <div className="btn-group btn-theme-panel">
                                <a href="javascript:;" className="btn dropdown-toggle" data-toggle="dropdown">
                                    <i className="icon-settings"></i>
                                </a>
                                <div className="dropdown-menu theme-panel pull-right dropdown-custom hold-on-click">
                                    <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
                                            <h3>THEME COLORS</h3>
                                            <div className="row">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <ul className="theme-colors">
                                                        <li className="theme-color theme-color-default" data-theme="default">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Default</span>
                                                        </li>
                                                        <li className="theme-color theme-color-blue-hoki" data-theme="blue-hoki">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Blue Hoki</span>
                                                        </li>
                                                        <li className="theme-color theme-color-blue-steel" data-theme="blue-steel">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Blue Steel</span>
                                                        </li>
                                                        <li className="theme-color theme-color-yellow-orange" data-theme="yellow-orange">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Orange</span>
                                                        </li>
                                                        <li className="theme-color theme-color-yellow-crusta" data-theme="yellow-crusta">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Yellow Crusta</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <ul className="theme-colors">
                                                        <li className="theme-color theme-color-green-haze" data-theme="green-haze">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Green Haze</span>
                                                        </li>
                                                        <li className="theme-color theme-color-red-sunglo" data-theme="red-sunglo">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Red Sunglo</span>
                                                        </li>
                                                        <li className="theme-color theme-color-red-intense" data-theme="red-intense">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Red Intense</span>
                                                        </li>
                                                        <li className="theme-color theme-color-purple-plum" data-theme="purple-plum">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Purple Plum</span>
                                                        </li>
                                                        <li className="theme-color theme-color-purple-studio" data-theme="purple-studio">
                                                            <span className="theme-color-view"></span>
                                                            <span className="theme-color-name">Purple Studio</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12 seperator">
                                            <h3>LAYOUT</h3>
                                            <ul className="theme-settings">
                                                <li> Layout
                                                    <select className="theme-setting theme-setting-layout form-control input-sm input-small input-inline tooltips" data-original-title="Change layout type" data-container="body" data-placement="left">
                                                        <option value="boxed" selected="selected">Boxed</option>
                                                        <option value="fluid">Fluid</option>
                                                    </select>
                                                </li>
                                                <li> Top Menu Style
                                                    <select className="theme-setting theme-setting-top-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change top menu dropdowns style" data-container="body"
                                                        data-placement="left">
                                                        <option value="dark" selected="selected">Dark</option>
                                                        <option value="light">Light</option>
                                                    </select>
                                                </li>
                                                <li> Top Menu Mode
                                                    <select className="theme-setting theme-setting-top-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) top menu" data-container="body"
                                                        data-placement="left">
                                                        <option value="fixed">Fixed</option>
                                                        <option value="not-fixed" selected="selected">Not Fixed</option>
                                                    </select>
                                                </li>
                                                <li> Mega Menu Style
                                                    <select className="theme-setting theme-setting-mega-menu-style form-control input-sm input-small input-inline tooltips" data-original-title="Change mega menu dropdowns style" data-container="body"
                                                        data-placement="left">
                                                        <option value="dark" selected="selected">Dark</option>
                                                        <option value="light">Light</option>
                                                    </select>
                                                </li>
                                                <li> Mega Menu Mode
                                                    <select className="theme-setting theme-setting-mega-menu-mode form-control input-sm input-small input-inline tooltips" data-original-title="Enable fixed(sticky) mega menu" data-container="body"
                                                        data-placement="left">
                                                        <option value="fixed" selected="selected">Fixed</option>
                                                        <option value="not-fixed">Not Fixed</option>
                                                    </select>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="page-content">
                    <div className="container">
                        <ul className="page-breadcrumb breadcrumb">
                            <li>
                                <a href="index.html">Home</a>
                                <i className="fa fa-circle"></i>
                            </li>
                            <li>
                                <a href="#">Pages</a>
                                <i className="fa fa-circle"></i>
                            </li>
                            <li>
                                <span>User</span>
                            </li>
                        </ul>
                        <div className="page-content-inner">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="profile-sidebar">
                                        <div className="portlet light profile-sidebar-portlet ">
                                            <div className="profile-userpic">
                                                <img src="../assets/pages/media/profile/profile_user.jpg" className="img-responsive" alt=""/> </div>
                                            <div className="profile-usertitle">
                                                <div className="profile-usertitle-name"> Marcus Doe </div>
                                                <div className="profile-usertitle-job"> Developer </div>
                                            </div>
                                            <div className="profile-userbuttons">
                                                <button type="button" className="btn btn-circle green btn-sm">Follow</button>
                                                <button type="button" className="btn btn-circle red btn-sm">Message</button>
                                            </div>
                                            <div className="profile-usermenu">
                                                <ul className="nav">
                                                    <li className="active">
                                                        <a href="page_user_profile_1.html">
                                                            <i className="icon-home"></i> Overview </a>
                                                    </li>
                                                    <li>
                                                        <a href="page_user_profile_1_account.html">
                                                            <i className="icon-settings"></i> Account Settings </a>
                                                    </li>
                                                    <li>
                                                        <a href="page_user_profile_1_help.html">
                                                            <i className="icon-info"></i> Help </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="portlet light ">
                                            <div className="row list-separated profile-stat">
                                                <div className="col-md-4 col-sm-4 col-xs-6">
                                                    <div className="uppercase profile-stat-title"> 37 </div>
                                                    <div className="uppercase profile-stat-text"> Projects </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-xs-6">
                                                    <div className="uppercase profile-stat-title"> 51 </div>
                                                    <div className="uppercase profile-stat-text"> Tasks </div>
                                                </div>
                                                <div className="col-md-4 col-sm-4 col-xs-6">
                                                    <div className="uppercase profile-stat-title"> 61 </div>
                                                    <div className="uppercase profile-stat-text"> Uploads </div>
                                                </div>
                                            </div>
                                            <div>
                                                <h4 className="profile-desc-title">About Marcus Doe</h4>
                                                <span className="profile-desc-text"> Lorem ipsum dolor sit amet diam nonummy nibh dolore.</span>
                                                <div className="margin-top-20 profile-desc-link">
                                                    <i className="fa fa-globe"></i>
                                                    <a href="http://www.keenthemes.com">www.keenthemes.com</a>
                                                </div>
                                                <div className="margin-top-20 profile-desc-link">
                                                    <i className="fa fa-twitter"></i>
                                                    <a href="http://www.twitter.com/keenthemes/"> @keenthemes</a>
                                                </div>
                                                <div className="margin-top-20 profile-desc-link">
                                                    <i className="fa fa-facebook"></i>
                                                    <a href="http://www.facebook.com/keenthemes/">keenthemes</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-content">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="portlet light ">
                                                    <div className="portlet-title">
                                                        <div className="caption caption-md">
                                                            <i className="icon-bar-chart theme-font hide"></i>
                                                            <span className="caption-subject font-blue-madison bold uppercase">Your Activity</span>
                                                            <span className="caption-helper hide">weekly stats...</span>
                                                        </div>
                                                        <div className="actions">
                                                            <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                                <label className="btn btn-transparent grey-salsa btn-circle btn-sm active">
                                                                    <input type="radio" name="options" className="toggle" id="option1"/>Today</label>
                                                                <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                                    <input type="radio" name="options" className="toggle" id="option2"/>Week</label>
                                                                <label className="btn btn-transparent grey-salsa btn-circle btn-sm">
                                                                    <input type="radio" name="options" className="toggle" id="option2"/>Month</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="portlet-body">
                                                        <div className="row number-stats margin-bottom-30">
                                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                                <div className="stat-left">
                                                                    <div className="stat-chart">
                                                                        <div id="sparkline_bar"></div>
                                                                    </div>
                                                                    <div className="stat-number">
                                                                        <div className="title"> Total </div>
                                                                        <div className="number"> 2460 </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6 col-sm-6 col-xs-6">
                                                                <div className="stat-right">
                                                                    <div className="stat-chart">
                                                                        <div id="sparkline_bar2"></div>
                                                                    </div>
                                                                    <div className="stat-number">
                                                                        <div className="title"> New </div>
                                                                        <div className="number"> 719 </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="table-scrollable table-scrollable-borderless">
                                                            <table className="table table-hover table-light">
                                                                <thead>
                                                                    <tr className="uppercase">
                                                                        <th colspan="2"> MEMBER </th>
                                                                        <th> Earnings </th>
                                                                        <th> CASES </th>
                                                                        <th> CLOSED </th>
                                                                        <th> RATE </th>
                                                                    </tr>
                                                                </thead>
                                                                <tr>
                                                                    <td className="fit">
                                                                        <img className="user-pic" src="../assets/pages/media/users/avatar4.jpg"/> </td>
                                                                    <td>
                                                                        <a href="javascript:;" className="primary-link">Brain</a>
                                                                    </td>
                                                                    <td> $345 </td>
                                                                    <td> 45 </td>
                                                                    <td> 124 </td>
                                                                    <td>
                                                                        <span className="bold theme-font">80%</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fit">
                                                                        <img className="user-pic" src="../assets/pages/media/users/avatar5.jpg"/> </td>
                                                                    <td>
                                                                        <a href="javascript:;" className="primary-link">Nick</a>
                                                                    </td>
                                                                    <td> $560 </td>
                                                                    <td> 12 </td>
                                                                    <td> 24 </td>
                                                                    <td>
                                                                        <span className="bold theme-font">67%</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fit">
                                                                        <img className="user-pic" src="../assets/pages/media/users/avatar6.jpg"/> </td>
                                                                    <td>
                                                                        <a href="javascript:;" className="primary-link">Tim</a>
                                                                    </td>
                                                                    <td> $1, 345 </td>
                                                                    <td> 450 </td>
                                                                    <td> 46 </td>
                                                                    <td>
                                                                        <span className="bold theme-font">98%</span>
                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="fit">
                                                                        <img className="user-pic" src="../assets/pages/media/users/avatar7.jpg"/> </td>
                                                                    <td>
                                                                        <a href="javascript:;" className="primary-link">Tom</a>
                                                                    </td>
                                                                    <td> $645 </td>
                                                                    <td> 50 </td>
                                                                    <td> 89 </td>
                                                                    <td>
                                                                        <span className="bold theme-font">58%</span>
                                                                    </td>
                                                                </tr>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="portlet light ">
                                                    <div className="portlet-title tabbable-line">
                                                        <div className="caption caption-md">
                                                            <i className="icon-globe theme-font hide"></i>
                                                            <span className="caption-subject font-blue-madison bold uppercase">Feeds</span>
                                                        </div>
                                                        <ul className="nav nav-tabs">
                                                            <li className="active">
                                                                <a href="#tab_1_1" data-toggle="tab"> System </a>
                                                            </li>
                                                            <li>
                                                                <a href="#tab_1_2" data-toggle="tab"> Activities </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="portlet-body">
                                                        <div className="tab-content">
                                                            <div className="tab-pane active" id="tab_1_1">
                                                                <div className="scroller" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                                    <ul className="feeds">
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-success">
                                                                                            <i className="fa fa-bell-o"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> You have 4 pending tasks.
                                                                                            <span className="label label-sm label-info"> Take action
                                                                                                <i className="fa fa-share"></i>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> Just now </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New version v1.4 just lunched! </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> 20 mins </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-danger">
                                                                                            <i className="fa fa-bolt"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Database server #12 overloaded.Please fix the issue.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 24 mins </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-info">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New order received and pending for process.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 30 mins </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-success">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New payment refund and pending approval.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 40 mins </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-warning">
                                                                                            <i className="fa fa-plus"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New member registered.Pending approval.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 1.5 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-success">
                                                                                            <i className="fa fa-bell-o"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Web server hardware needs to be upgraded.
                                                                                            <span className="label label-sm label-default "> Overdue </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 2 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-default">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Prod01 database server is overloaded 90%.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 3 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-warning">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New group created.Pending manager review.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 5 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-info">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Order payment failed.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 18 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-default">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New application received.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 21 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-info">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Dev90 web server restarted.Pending overall system check.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 22 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-default">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New member registered.Pending approval </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 21 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-info">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> L45 Network failure.Schedule maintenance.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 22 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-default">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Order canceled with failed payment.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 21 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-info">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Web-A2 clound instance created.Schedule full scan.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 22 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-default">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Member canceled.Schedule account review.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 21 hours </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-info">
                                                                                            <i className="fa fa-bullhorn"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> New order received.Please take care of it.</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 22 hours </div>
                                                                            </div>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <div className="tab-pane" id="tab_1_2">
                                                                <div className="scroller" data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                                    <ul className="feeds">
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New order received </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> 10 mins </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <div className="col1">
                                                                                <div className="cont">
                                                                                    <div className="cont-col1">
                                                                                        <div className="label label-sm label-danger">
                                                                                            <i className="fa fa-bolt"></i>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="cont-col2">
                                                                                        <div className="desc"> Order #24DOP4 has been rejected.
                                                                                            <span className="label label-sm label-danger "> Take action
                                                                                                <i className="fa fa-share"></i>
                                                                                            </span>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col2">
                                                                                <div className="date"> 24 mins </div>
                                                                            </div>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                        <li>
                                                                            <a href="javascript:;">
                                                                                <div className="col1">
                                                                                    <div className="cont">
                                                                                        <div className="cont-col1">
                                                                                            <div className="label label-sm label-success">
                                                                                                <i className="fa fa-bell-o"></i>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="cont-col2">
                                                                                            <div className="desc"> New user registered </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="col2">
                                                                                    <div className="date"> Just now </div>
                                                                                </div>
                                                                            </a>
                                                                        </li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="portlet light ">
                                                    <div className="portlet-title">
                                                        <div className="caption caption-md">
                                                            <i className="icon-bar-chart theme-font hide"></i>
                                                            <span className="caption-subject font-blue-madison bold uppercase">Customer Support</span>
                                                            <span className="caption-helper">45 pending</span>
                                                        </div>
                                                        <div className="inputs">
                                                            <div className="portlet-input input-inline input-small ">
                                                                <div className="input-icon right">
                                                                    <i className="icon-magnifier"></i>
                                                                    <input type="text" className="form-control form-control-solid" placeholder="search..."/> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="portlet-body">
                                                        <div className="scroller"  data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                            <div className="general-item-list">
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar4.jpg"/>
                                                                            <a href="" className="item-name primary-link">Nick Larson</a>
                                                                            <span className="item-label">3 hrs ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-success"></span> Open</span>
                                                                    </div>
                                                                    <div className="item-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar3.jpg"/>
                                                                            <a href="" className="item-name primary-link">Mark</a>
                                                                            <span className="item-label">5 hrs ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-warning"></span> Pending</span>
                                                                    </div>
                                                                    <div className="item-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat tincidunt ut laoreet.</div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar6.jpg"/>
                                                                            <a href="" className="item-name primary-link">Nick Larson</a>
                                                                            <span className="item-label">8 hrs ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-primary"></span> Closed</span>
                                                                    </div>
                                                                    <div className="item-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh.</div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar7.jpg"/>
                                                                            <a href="" className="item-name primary-link">Nick Larson</a>
                                                                            <span className="item-label">12 hrs ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-danger"></span> Pending</span>
                                                                    </div>
                                                                    <div className="item-body"> Consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                                                                    </div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar9.jpg"/>
                                                                            <a href="" className="item-name primary-link">Richard Stone</a>
                                                                            <span className="item-label">2 days ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-danger"></span> Open</span>
                                                                    </div>
                                                                    <div className="item-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, ut laoreet dolore magna aliquam erat volutpat.</div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar8.jpg"/>
                                                                            <a href="" className="item-name primary-link">Dan</a>
                                                                            <span className="item-label">3 days ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-warning"></span> Pending</span>
                                                                    </div>
                                                                    <div className="item-body"> Lorem ipsum dolor sit amet, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                                </div>
                                                                <div className="item">
                                                                    <div className="item-head">
                                                                        <div className="item-details">
                                                                            <img className="item-pic" src="../assets/pages/media/users/avatar2.jpg"/>
                                                                            <a href="" className="item-name primary-link">Larry</a>
                                                                            <span className="item-label">4 hrs ago</span>
                                                                        </div>
                                                                        <span className="item-status">
                                                                            <span className="badge badge-empty badge-success"></span> Open</span>
                                                                    </div>
                                                                    <div className="item-body"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="portlet light  tasks-widget">
                                                    <div className="portlet-title">
                                                        <div className="caption caption-md">
                                                            <i className="icon-bar-chart theme-font hide"></i>
                                                            <span className="caption-subject font-blue-madison bold uppercase">Tasks</span>
                                                            <span className="caption-helper">16 pending</span>
                                                        </div>
                                                        <div className="inputs">
                                                            <div className="portlet-input input-small input-inline">
                                                                <div className="input-icon right">
                                                                    <i className="icon-magnifier"></i>
                                                                    <input type="text" className="form-control form-control-solid" placeholder="search..."/> </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="portlet-body">
                                                        <div className="task-content">
                                                            <div className="scroller"  data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                                <ul className="task-list">
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="hidden" value="1" name="test" />
                                                                            <input type="checkbox" className="liChild" value="2" name="test" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Present 2013 Year IPO Statistics at Board Meeting </span>
                                                                            <span className="label label-sm label-success">Company</span>
                                                                            <span className="task-bell">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Hold An Interview for Marketing Manager Position </span>
                                                                            <span className="label label-sm label-danger">Marketing</span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> AirAsia Intranet System Project Internal Meeting </span>
                                                                            <span className="label label-sm label-success">AirAsia</span>
                                                                            <span className="task-bell">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Technical Management Meeting </span>
                                                                            <span className="label label-sm label-warning">Company</span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Kick-off Company CRM Mobile App Development </span>
                                                                            <span className="label label-sm label-info">Internal Products</span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Prepare Commercial Offer For SmartVision Website Rewamp </span>
                                                                            <span className="label label-sm label-danger">SmartVision</span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Sign-Off The Comercial Agreement With AutoSmart </span>
                                                                            <span className="label label-sm label-default">AutoSmart</span>
                                                                            <span className="task-bell">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li>
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> Company Staff Meeting </span>
                                                                            <span className="label label-sm label-success">Cruise</span>
                                                                            <span className="task-bell">
                                                                                <i className="fa fa-bell-o"></i>
                                                                            </span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                    <li className="last-line">
                                                                        <div className="task-checkbox">
                                                                            <input type="checkbox" className="liChild" value="" /> </div>
                                                                        <div className="task-title">
                                                                            <span className="task-title-sp"> KeenThemes Investment Discussion </span>
                                                                            <span className="label label-sm label-warning">KeenThemes </span>
                                                                        </div>
                                                                        <div className="task-config">
                                                                            <div className="task-config-btn btn-group">
                                                                                <a className="btn btn-sm default" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true">
                                                                                    <i className="fa fa-cog"></i>
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </a>
                                                                                <ul className="dropdown-menu pull-right">
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-check"></i> Complete </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-pencil"></i> Edit </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">
                                                                                            <i className="fa fa-trash-o"></i> Cancel </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="task-footer">
                                                            <div className="btn-arrow-link pull-right">
                                                                <a href="javascript:;">See All Tasks</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="portlet light portlet-fit ">
                                                    <div className="portlet-title">
                                                        <div className="caption">
                                                            <i className="icon-microphone font-green"></i>
                                                            <span className="caption-subject bold font-green uppercase"> Timeline</span>
                                                            <span className="caption-helper">user timeline</span>
                                                        </div>
                                                        <div className="actions">
                                                            <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                                <label className="btn btn-transparent dark btn-outline btn-circle btn-sm active">
                                                                    <input type="radio" name="options" className="toggle" id="option1"/>Actions</label>
                                                                <label className="btn btn-transparent dark btn-outline btn-circle btn-sm">
                                                                    <input type="radio" name="options" className="toggle" id="option2"/>Settings</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="portlet-body">
                                                        <div className="timeline">
                                                            <div className="timeline-item">
                                                                <div className="timeline-badge">
                                                                    <img className="timeline-badge-userpic" src="../assets/pages/media/users/avatar80_2.jpg"/> </div>
                                                                <div className="timeline-body">
                                                                    <div className="timeline-body-arrow"> </div>
                                                                    <div className="timeline-body-head">
                                                                        <div className="timeline-body-head-caption">
                                                                            <a href="javascript:;" className="timeline-body-title font-blue-madison">Lisa Strong</a>
                                                                            <span className="timeline-body-time font-grey-cascade">Replied at 17: 45 PM</span>
                                                                        </div>
                                                                        <div className="timeline-body-head-actions">
                                                                            <div className="btn-group">
                                                                                <button className="btn btn-circle green btn-outline btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </button>
                                                                                <ul className="dropdown-menu pull-right" role="menu">
                                                                                    <li>
                                                                                        <a href="javascript:;">Action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Another action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Something else here </a>
                                                                                    </li>
                                                                                    <li className="divider"> </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Separated link </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-body-content">
                                                                        <span className="font-grey-cascade"> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut consectetuer adipiscing elit laoreet dolore magna aliquam erat volutpat.
                                                                            Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline-item">
                                                                <div className="timeline-badge">
                                                                    <img className="timeline-badge-userpic" src="../assets/pages/media/users/avatar80_7.jpg"/> </div>
                                                                <div className="timeline-body">
                                                                    <div className="timeline-body-arrow"> </div>
                                                                    <div className="timeline-body-head">
                                                                        <div className="timeline-body-head-caption">
                                                                            <a href="javascript:;" className="timeline-body-title font-blue-madison">Paul Kiton</a>
                                                                            <span className="timeline-body-time font-grey-cascade">Added office location at 2: 50 PM</span>
                                                                        </div>
                                                                        <div className="timeline-body-head-actions">
                                                                            <div className="btn-group">
                                                                                <button className="btn btn-circle red btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </button>
                                                                                <ul className="dropdown-menu pull-right" role="menu">
                                                                                    <li>
                                                                                        <a href="javascript:;">Action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Another action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Something else here </a>
                                                                                    </li>
                                                                                    <li className="divider"> </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Separated link </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-body-content">
                                                                        <div id="gmap_polygons" className="gmaps"> </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline-item">
                                                                <div className="timeline-badge">
                                                                    <div className="timeline-icon">
                                                                        <i className="icon-user-following font-green-haze"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline-body">
                                                                    <div className="timeline-body-arrow"> </div>
                                                                    <div className="timeline-body-head">
                                                                        <div className="timeline-body-head-caption">
                                                                            <span className="timeline-body-alerttitle font-red-intense">You have new follower</span>
                                                                            <span className="timeline-body-time font-grey-cascade">at 11: 00 PM</span>
                                                                        </div>
                                                                        <div className="timeline-body-head-actions">
                                                                            <div className="btn-group">
                                                                                <button className="btn btn-circle green btn-outline btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </button>
                                                                                <ul className="dropdown-menu pull-right" role="menu">
                                                                                    <li>
                                                                                        <a href="javascript:;">Action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Another action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Something else here </a>
                                                                                    </li>
                                                                                    <li className="divider"> </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Separated link </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-body-content">
                                                                        <span className="font-grey-cascade"> You have new follower
                                                                            <a href="javascript:;">Ivan Rakitic</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="timeline-item">
                                                                <div className="timeline-badge">
                                                                    <div className="timeline-icon">
                                                                        <i className="icon-docs font-red-intense"></i>
                                                                    </div>
                                                                </div>
                                                                <div className="timeline-body">
                                                                    <div className="timeline-body-arrow"> </div>
                                                                    <div className="timeline-body-head">
                                                                        <div className="timeline-body-head-caption">
                                                                            <span className="timeline-body-alerttitle font-green-haze">Server Report</span>
                                                                            <span className="timeline-body-time font-grey-cascade">Yesterday at 11: 00 PM</span>
                                                                        </div>
                                                                        <div className="timeline-body-head-actions">
                                                                            <div className="btn-group dropup">
                                                                                <button className="btn btn-circle red btn-sm dropdown-toggle" type="button" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Actions
                                                                                    <i className="fa fa-angle-down"></i>
                                                                                </button>
                                                                                <ul className="dropdown-menu pull-right" role="menu">
                                                                                    <li>
                                                                                        <a href="javascript:;">Action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Another action </a>
                                                                                    </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Something else here </a>
                                                                                    </li>
                                                                                    <li className="divider"> </li>
                                                                                    <li>
                                                                                        <a href="javascript:;">Separated link </a>
                                                                                    </li>
                                                                                </ul>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="timeline-body-content">
                                                                        <span className="font-grey-cascade"> Lorem ipsum dolore sit amet
                                                                            <a href="javascript:;">Ispect</a>
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfileView