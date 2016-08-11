import React, { Component, PropTypes } from 'react';

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
export class DashboardView extends Component {
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DashboardView