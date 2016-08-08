import React, { Component, PropTypes } from 'react';
import "../../../assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.css";
import "../../../assets/global/plugins/morris/morris.css";
import "../../../assets/global/plugins/fullcalendar/fullcalendar.min.css";
import "../../../assets/global/plugins/jqvmap/jqvmap/jqvmap.css";

const styles={
    salesStatistics:{
        height: 267
    },
    scroller:{
        height: 312
    },
     scroller2:{
        height: 338
    },
    scroller3:{
        height: 298
    },
};
class DashboardView extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="page-head">
                    <div className="container">
                        <div className="page-title">
                            <h1>Dashboard
                                <small>dashboard & statistics</small>
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
                                <span>Dashboard</span>
                            </li>
                        </ul>
                        <div className="page-content-inner">
                            <div className="mt-content-body">
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="portlet light ">
                                            <div className="portlet-title">
                                                <div className="caption caption-md">
                                                    <i className="icon-bar-chart font-dark hide"></i>
                                                    <span className="caption-subject font-green-steel uppercase bold">Sales Summary</span>
                                                    <span className="caption-helper hide">weekly stats...</span>
                                                </div>
                                                <div className="actions">
                                                    <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                        <label className="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm active">
                                                            <input type="radio" name="options" className="toggle" id="option1"/>Today</label>
                                                        <label className="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm">
                                                            <input type="radio" name="options" className="toggle" id="option2"/>Week</label>
                                                        <label className="btn btn-transparent btn-no-border blue-oleo btn-outline btn-circle btn-sm">
                                                            <input type="radio" name="options" className="toggle" id="option2"/>Month</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="portlet-body">
                                                <div className="row list-separated">
                                                    <div className="col-md-3 col-sm-3 col-xs-6">
                                                        <div className="font-grey-mint font-sm"> Total Sales </div>
                                                        <div className="uppercase font-hg font-red-flamingo"> 13, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-3 col-xs-6">
                                                        <div className="font-grey-mint font-sm"> Revenue </div>
                                                        <div className="uppercase font-hg theme-font"> 4, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-3 col-xs-6">
                                                        <div className="font-grey-mint font-sm"> Expenses </div>
                                                        <div className="uppercase font-hg font-purple"> 11, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-3 col-sm-3 col-xs-6">
                                                        <div className="font-grey-mint font-sm"> Growth </div>
                                                        <div className="uppercase font-hg font-blue-sharp"> 9, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="list-separated list-inline-xs hide">
                                                    <li>
                                                        <div className="font-grey-mint font-sm"> Total Sales </div>
                                                        <div className="uppercase font-hg font-red-flamingo"> 13, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </li>
                                                    <li> </li>
                                                    <li className="border">
                                                        <div className="font-grey-mint font-sm"> Revenue </div>
                                                        <div className="uppercase font-hg theme-font"> 4, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </li>
                                                    <li className="divider"> </li>
                                                    <li>
                                                        <div className="font-grey-mint font-sm"> Expenses </div>
                                                        <div className="uppercase font-hg font-purple"> 11, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </li>
                                                    <li className="divider"> </li>
                                                    <li>
                                                        <div className="font-grey-mint font-sm"> Growth </div>
                                                        <div className="uppercase font-hg font-blue-sharp"> 9, 760
                                                            <span className="font-lg font-grey-mint">$</span>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <div id="sales_statistics" className="portlet-body-morris-fit morris-chart" style={styles.salesStatistics}> </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="portlet light ">
                                            <div className="portlet-title">
                                                <div className="caption caption-md">
                                                    <i className="icon-bar-chart font-dark hide"></i>
                                                    <span className="caption-subject font-green-steel bold uppercase">Member Activity</span>
                                                    <span className="caption-helper">weekly stats...</span>
                                                </div>
                                                <div className="actions">
                                                    <div className="btn-group btn-group-devided" data-toggle="buttons">
                                                        <label className="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm active">
                                                            <input type="radio" name="options" className="toggle" id="option1"/>Today</label>
                                                        <label className="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm">
                                                            <input type="radio" name="options" className="toggle" id="option2"/>Week</label>
                                                        <label className="btn btn-transparent blue-oleo btn-no-border btn-outline btn-circle btn-sm">
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
                                                                <img className="user-pic rounded" src="../assets/pages/media/users/avatar4.jpg"/> </td>
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
                                                                <img className="user-pic rounded" src="../assets/pages/media/users/avatar5.jpg"/> </td>
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
                                                                <img className="user-pic rounded" src="../assets/pages/media/users/avatar6.jpg"/> </td>
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
                                                                <img className="user-pic rounded" src="../assets/pages/media/users/avatar7.jpg"/> </td>
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
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="portlet light tasks-widget ">
                                            <div className="portlet-title">
                                                <div className="caption">
                                                    <i className="icon-share font-dark hide"></i>
                                                    <span className="caption-subject font-green-steel bold uppercase">Tasks</span>
                                                    <span className="caption-helper">tasks summary...</span>
                                                </div>
                                                <div className="actions">
                                                    <div className="btn-group">
                                                        <a className="btn blue-oleo btn-circle btn-sm" href="javascript:;" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> More
                                                            <i className="fa fa-angle-down"></i>
                                                        </a>
                                                        <ul className="dropdown-menu pull-right">
                                                            <li>
                                                                <a href="javascript:;"> All Project </a>
                                                            </li>
                                                            <li className="divider"> </li>
                                                            <li>
                                                                <a href="javascript:;"> AirAsia </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:;"> Cruise </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:;"> HSBC </a>
                                                            </li>
                                                            <li className="divider"> </li>
                                                            <li>
                                                                <a href="javascript:;"> Pending
                                                                    <span className="badge badge-danger"> 4 </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:;"> Completed
                                                                    <span className="badge badge-success"> 12 </span>
                                                                </a>
                                                            </li>
                                                            <li>
                                                                <a href="javascript:;"> Overdue
                                                                    <span className="badge badge-warning"> 9 </span>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="portlet-body">
                                                <div className="task-content">
                                                    <div className="scroller" style={styles.scroller} data-always-visible="1" data-rail-visible1="1">
                                                        <ul className="task-list">
                                                            <li>
                                                                <div className="task-checkbox">
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                                <div className="task-title">
                                                                    <span className="task-title-sp"> Sign-Off The Comercial Agreement With AutoSmart </span>
                                                                    <span className="label label-sm label-default">AutoSmart</span>
                                                                    <span className="task-bell">
                                                                        <i className="fa fa-bell-o"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="task-config">
                                                                    <div className="task-config-btn btn-group dropup">
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                                <div className="task-title">
                                                                    <span className="task-title-sp"> Company Staff Meeting </span>
                                                                    <span className="label label-sm label-success">Cruise</span>
                                                                    <span className="task-bell">
                                                                        <i className="fa fa-bell-o"></i>
                                                                    </span>
                                                                </div>
                                                                <div className="task-config">
                                                                    <div className="task-config-btn btn-group dropup">
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
                                                                    <label className="mt-checkbox mt-checkbox-single mt-checkbox-outline">
                                                                        <input type="checkbox" className="checkboxes" value="1" />
                                                                        <span></span>
                                                                    </label>
                                                                </div>
                                                                <div className="task-title">
                                                                    <span className="task-title-sp"> KeenThemes Investment Discussion </span>
                                                                    <span className="label label-sm label-warning">KeenThemes </span>
                                                                </div>
                                                                <div className="task-config">
                                                                    <div className="task-config-btn btn-group dropup">
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
                                                        <a href="javascript:;">See All Records</a>
                                                        <i className="icon-arrow-right"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="portlet light ">
                                            <div className="portlet-title">
                                                <div className="caption caption-md">
                                                    <i className="icon-bar-chart font-dark hide"></i>
                                                    <span className="caption-subject font-green-steel bold uppercase">Customer Support</span>
                                                    <span className="caption-helper">45 pending</span>
                                                </div>
                                                <div className="inputs">
                                                    <div className="portlet-input input-inline input-small ">
                                                        <div className="input-icon right">
                                                            <i className="icon-magnifier"></i>
                                                            <input type="text" className="form-control form-control-solid input-circle" placeholder="search..."/> </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="portlet-body">
                                                <div className="scroller" style={styles.scroller2} data-always-visible="1" data-rail-visible1="0" data-handle-color="#D7DCE2">
                                                    <div className="general-item-list">
                                                        <div className="item">
                                                            <div className="item-head">
                                                                <div className="item-details">
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar4.jpg"/>
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
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar3.jpg"/>
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
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar6.jpg"/>
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
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar7.jpg"/>
                                                                    <a href="" className="item-name primary-link">Nick Larson</a>
                                                                    <span className="item-label">12 hrs ago</span>
                                                                </div>
                                                                <span className="item-status">
                                                                    <span className="badge badge-empty badge-danger"></span> Pending</span>
                                                            </div>
                                                            <div className="item-body"> Consectetuer adipiscing elit Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
                                                        </div>
                                                        <div className="item">
                                                            <div className="item-head">
                                                                <div className="item-details">
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar9.jpg"/>
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
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar8.jpg"/>
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
                                                                    <img className="item-pic rounded" src="../assets/pages/media/users/avatar2.jpg"/>
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
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="portlet light ">
                                            <div className="portlet-title">
                                                <div className="caption">
                                                    <i className="icon-share font-dark hide"></i>
                                                    <span className="caption-subject font-green-steel bold uppercase">Regional Stats</span>
                                                </div>
                                                <div className="actions">
                                                    <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                                        <i className="icon-cloud-upload"></i>
                                                    </a>
                                                    <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                                        <i className="icon-wrench"></i>
                                                    </a>
                                                    <a className="btn btn-circle btn-icon-only btn-default fullscreen" data-container="false" data-placement="bottom" href="javascript:;"> </a>
                                                    <a className="btn btn-circle btn-icon-only btn-default" href="javascript:;">
                                                        <i className="icon-trash"></i>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="portlet-body">
                                                <div id="region_statistics_loading">
                                                    <img src="../assets/global/img/loading.gif" alt="loading" /> </div>
                                                <div id="region_statistics_content" className="display-none">
                                                    <div className="btn-toolbar margin-bottom-10">
                                                        <div className="btn-group btn-group-circle" data-toggle="buttons">
                                                            <a href="" className="btn grey-salsa btn-sm active"> Users </a>
                                                            <a href="" className="btn grey-salsa btn-sm"> Orders </a>
                                                        </div>
                                                        <div className="btn-group pull-right">
                                                            <a href="" className="btn btn-circle grey-salsa btn-sm dropdown-toggle" data-toggle="dropdown" data-hover="dropdown" data-close-others="true"> Select Region
                                                                <span className="fa fa-angle-down"> </span>
                                                            </a>
                                                            <ul className="dropdown-menu pull-right">
                                                                <li>
                                                                    <a href="javascript:;" id="regional_stat_world"> World </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:;" id="regional_stat_usa"> USA </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:;" id="regional_stat_europe"> Europe </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:;" id="regional_stat_russia"> Russia </a>
                                                                </li>
                                                                <li>
                                                                    <a href="javascript:;" id="regional_stat_germany"> Germany </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div id="vmap_world" className="vmaps display-none"> </div>
                                                    <div id="vmap_usa" className="vmaps display-none"> </div>
                                                    <div id="vmap_europe" className="vmaps display-none"> </div>
                                                    <div id="vmap_russia" className="vmaps display-none"> </div>
                                                    <div id="vmap_germany" className="vmaps display-none"> </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="portlet light ">
                                            <div className="portlet-title tabbable-line">
                                                <div className="caption">
                                                    <i className="icon-globe font-dark hide"></i>
                                                    <span className="caption-subject font-green-steel bold uppercase">Feeds</span>
                                                </div>
                                                <ul className="nav nav-tabs">
                                                    <li className="active">
                                                        <a href="#tab_1_1" className="active" data-toggle="tab"> System </a>
                                                    </li>
                                                    <li>
                                                        <a href="#tab_1_2" data-toggle="tab"> Activities </a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="portlet-body">
                                                <div className="tab-content">
                                                    <div className="tab-pane active" id="tab_1_1">
                                                        <div className="scroller" style={styles.scroller2} data-always-visible="1" data-rail-visible="0">
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
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                                <div className="desc"> New user registered.</div>
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
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                <li>
                                                                    <div className="col1">
                                                                        <div className="cont">
                                                                            <div className="cont-col1">
                                                                                <div className="label label-sm label-default">
                                                                                    <i className="fa fa-bullhorn"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div className="cont-col2">
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                <li>
                                                                    <div className="col1">
                                                                        <div className="cont">
                                                                            <div className="cont-col1">
                                                                                <div className="label label-sm label-default">
                                                                                    <i className="fa fa-bullhorn"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div className="cont-col2">
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                                <li>
                                                                    <div className="col1">
                                                                        <div className="cont">
                                                                            <div className="cont-col1">
                                                                                <div className="label label-sm label-default">
                                                                                    <i className="fa fa-bullhorn"></i>
                                                                                </div>
                                                                            </div>
                                                                            <div className="cont-col2">
                                                                                <div className="desc"> New order received.Please take care of it.</div>
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
                                                        <div className="scroller" style={styles.scroller3} data-always-visible="1" data-rail-visible1="1">
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardView