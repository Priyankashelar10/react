import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

const styles={
    dropDownMenu:{
        minWidth: 710
    }
};

class MenuView extends Component {
    constructor(props) {
        super(props);
    }

   render() {
        return (
            <div>
                <div className="page-header-menu">
                    <div className="container">
                        <form className="search-form" >
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" name="query" />
                                <span className="input-group-btn">
                                    <a href="javascript:;" className="btn submit">
                                        <i className="icon-magnifier"></i>
                                    </a>
                                </span>
                            </div>
                        </form>
                        <div className="hor-menu  ">
                            <ul className="nav navbar-nav">
                                <li className="menu-dropdown classNameic-menu-dropdown active">
                                    <a href="javascript:;"> Dashboard
                                        <span className="arrow"></span>
                                    </a>
                                    <ul className="dropdown-menu pull-left">
                                        <li className=" active">
                                            <Link to="/dashboard">
                                                <i className="icon-bar-chart"></i>Default Dashboard
                                                <span className="badge badge-success">1</span>
                                            </Link>
                                        </li>
                                        <li className=" ">
                                            <Link to="/userProfile">
                                                <i className="icon-user"></i> User Profile
                                            </Link>
                                        </li>
                                        <li className=" ">
                                            <a href="dashboard_3.html" className="nav-link  ">
                                                <i className="icon-graph"></i> Dashboard 3
                                                <span className="badge badge-danger">3</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-dropdown mega-menu-dropdown  ">
                                    <a href="javascript:;"> UI Features
                                        <span className="arrow"></span>
                                    </a>
                                    <ul className="dropdown-menu" style={styles.dropDownMenu}>
                                        <li>
                                            <div className="mega-menu-content">
                                                <div className="row">
                                                    <div className="col-md-4">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <a href="ui_colors.html"> Color Library </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_general.html"> General Components </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_buttons.html"> Buttons </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_buttons_spinner.html"> Spinner Buttons </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_confirmations.html"> Popover Confirmations </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_icons.html"> Font Icons </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_socicons.html"> Social Icons </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_typography.html"> Typography </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_tabs_accordions_navs.html"> Tabs, Accordions & Navs </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_tree.html"> Tree View </a>
                                                            </li>
                                                            <li>
                                                                <a href="maps_google.html"> Google Maps </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <a href="maps_vector.html"> Vector Maps </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_timeline.html"> Timeline 1 </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_timeline_2.html"> Timeline 2 </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_timeline_horizontal.html"> Horizontal Timeline </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_page_progress_style_1.html"> Page Progress Bar - Flash </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_page_progress_style_2.html"> Page Progress Bar - Big Counter </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_blockui.html"> Block UI </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_bootstrap_growl.html"> Bootstrap Growl Notifications </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_notific8.html"> Notific8 Notifications </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_toastr.html"> Toastr Notifications </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_bootbox.html"> Bootbox Dialogs </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <a href="ui_alerts_api.html"> Metronic Alerts API </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_session_timeout.html"> Session Timeout </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_idle_timeout.html"> User Idle Timeout </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_modals.html"> Modals </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_extended_modals.html"> Extended Modals </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_tiles.html"> Tiles </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_datepaginator.html"> Date Paginator </a>
                                                            </li>
                                                            <li>
                                                                <a href="ui_nestable.html"> Nestable List </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-dropdown classNameic-menu-dropdown ">
                                    <a href="javascript:;"> Layouts
                                        <span className="arrow"></span>
                                    </a>
                                    <ul className="dropdown-menu pull-left">
                                        <li className=" ">
                                            <a href="layout_mega_menu_light.html" className="nav-link  "> Light Mega Menu </a>
                                        </li>
                                        <li className=" ">
                                            <a href="layout_top_bar_light.html" className="nav-link  "> Light Top Bar Dropdowns </a>
                                        </li>
                                        <li className=" ">
                                            <a href="layout_fluid_page.html" className="nav-link  "> Fluid Page </a>
                                        </li>
                                        <li className=" ">
                                            <a href="layout_top_bar_fixed.html" className="nav-link  "> Fixed Top Bar </a>
                                        </li>
                                        <li className=" ">
                                            <a href="layout_mega_menu_fixed.html" className="nav-link  "> Fixed Mega Menu </a>
                                        </li>
                                        <li className=" ">
                                            <a href="layout_disabled_menu.html" className="nav-link  "> Disabled Menu Links </a>
                                        </li>
                                        <li className=" ">
                                            <a href="layout_blank_page.html" className="nav-link  "> Blank Page </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-dropdown mega-menu-dropdown  mega-menu-full">
                                    <a href="javascript:;"> Components
                                        <span className="arrow"></span>
                                    </a>
                                    <ul className="dropdown-menu" style={styles.dropDownMenu}>
                                        <li>
                                            <div className="mega-menu-content">
                                                <div className="row">
                                                    <div className="col-md-3">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <h3>Components 1</h3>
                                                            </li>
                                                            <li>
                                                                <a href="components_date_time_pickers.html"> Date & Time Pickers </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_color_pickers.html"> Color Pickers </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_select2.html"> Select2 Dropdowns </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_select.html"> Bootstrap Select </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_multi_select.html"> Multi Select </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <h3>Components 2</h3>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_select_splitter.html"> Select Splitter </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_typeahead.html"> Typeahead Autocomplete </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_tagsinput.html"> Bootstrap Tagsinput </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_switch.html"> Bootstrap Switch </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_maxlength.html"> Bootstrap Maxlength </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <h3>Components 3</h3>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_fileinput.html"> Bootstrap File Input </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_bootstrap_touchspin.html"> Bootstrap Touchspin </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_form_tools.html"> Form Widgets & Tools </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_context_menu.html"> Context Menu </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_editors.html"> Markdown & WYSIWYG Editors </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-md-3">
                                                        <ul className="mega-menu-submenu">
                                                            <li>
                                                                <h3>Components 4</h3>
                                                            </li>
                                                            <li>
                                                                <a href="components_code_editors.html"> Code Editors </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_ion_sliders.html"> Ion Range Sliders </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_noui_sliders.html"> NoUI Range Sliders </a>
                                                            </li>
                                                            <li>
                                                                <a href="components_knob_dials.html"> Knob Circle Dials </a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-dropdown classNameic-menu-dropdown ">
                                    <a href="javascript:;"> More
                                        <span className="arrow"></span>
                                    </a>
                                    <ul className="dropdown-menu pull-left">
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-settings"></i> Form Stuff
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="form_controls.html" className="nav-link "> Bootstrap Form
                                                        <br/>Controls </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_controls_md.html" className="nav-link "> Material Design
                                                        <br/>Form Controls </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_validation.html" className="nav-link "> Form Validation </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_validation_states_md.html" className="nav-link "> Material Design
                                                        <br/>Form Validation States </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_validation_md.html" className="nav-link "> Material Design
                                                        <br/>Form Validation </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_layouts.html" className="nav-link "> Form Layouts </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_input_mask.html" className="nav-link "> Form Input Mask </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_editable.html" className="nav-link "> Form X-editable </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_wizard.html" className="nav-link "> Form Wizard </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_icheck.html" className="nav-link "> iCheck Controls </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_image_crop.html" className="nav-link "> Image Cropping </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_fileupload.html" className="nav-link "> Multiple File Upload </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="form_dropzone.html" className="nav-link "> Dropzone File Upload </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-briefcase"></i> Tables
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="table_static_basic.html" className="nav-link "> Basic Tables </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="table_static_responsive.html" className="nav-link "> Responsive Tables </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="table_bootstrap.html" className="nav-link "> Bootstrap Tables </a>
                                                </li>
                                                <li className="dropdown-submenu ">
                                                    <a href="javascript:;" className="nav-link nav-toggle"> Datatables
                                                        <span className="arrow"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="">
                                                            <a href="table_datatables_managed.html" className="nav-link "> Managed Datatables </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_buttons.html" className="nav-link "> Buttons Extension </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_colreorder.html" className="nav-link "> Colreorder Extension </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_rowreorder.html" className="nav-link "> Rowreorder Extension </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_scroller.html" className="nav-link "> Scroller Extension </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_fixedheader.html" className="nav-link "> FixedHeader Extension </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_responsive.html" className="nav-link "> Responsive Extension </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_editable.html" className="nav-link "> Editable Datatables </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="table_datatables_ajax.html" className="nav-link "> Ajax Datatables </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="?p=" className="nav-link nav-toggle ">
                                                <i className="icon-wallet"></i> Portlets
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="portlet_boxed.html" className="nav-link "> Boxed Portlets </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="portlet_light.html" className="nav-link "> Light Portlets </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="portlet_solid.html" className="nav-link "> Solid Portlets </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="portlet_ajax.html" className="nav-link "> Ajax Portlets </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="portlet_draggable.html" className="nav-link "> Draggable Portlets </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="?p=" className="nav-link nav-toggle ">
                                                <i className="icon-settings"></i> Elements
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="elements_steps.html" className="nav-link "> Steps </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="elements_lists.html" className="nav-link "> Lists </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="elements_ribbons.html" className="nav-link "> Ribbons </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="elements_overlay.html" className="nav-link "> Overlays </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="elements_cards.html" className="nav-link "> User Cards </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-bar-chart"></i> Charts
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="charts_amcharts.html" className="nav-link "> amChart </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="charts_flotcharts.html" className="nav-link "> Flot Charts </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="charts_flowchart.html" className="nav-link "> Flow Charts </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="charts_google.html" className="nav-link "> Google Charts </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="charts_echarts.html" className="nav-link "> eCharts </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="charts_morris.html" className="nav-link "> Morris Charts </a>
                                                </li>
                                                <li className="dropdown-submenu ">
                                                    <a href="javascript:;" className="nav-link nav-toggle"> HighCharts
                                                        <span className="arrow"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="">
                                                            <a href="charts_highcharts.html" className="nav-link " target="_blank"> HighCharts </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="charts_highstock.html" className="nav-link " target="_blank"> HighStock </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="charts_highmaps.html" className="nav-link " target="_blank"> HighMaps </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menu-dropdown classNameic-menu-dropdown ">
                                    <a href="javascript:;">
                                        <i className="icon-briefcase"></i> Pages
                                        <span className="arrow"></span>
                                    </a>
                                    <ul className="dropdown-menu pull-left">
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-basket"></i> eCommerce
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="ecommerce_index.html" className="nav-link ">
                                                        <i className="icon-home"></i> Dashboard </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="ecommerce_orders.html" className="nav-link ">
                                                        <i className="icon-basket"></i> Orders </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="ecommerce_orders_view.html" className="nav-link ">
                                                        <i className="icon-tag"></i> Order View </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="ecommerce_products.html" className="nav-link ">
                                                        <i className="icon-graph"></i> Products </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="ecommerce_products_edit.html" className="nav-link ">
                                                        <i className="icon-graph"></i> Product Edit </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-docs"></i> Apps
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="app_todo.html" className="nav-link ">
                                                        <i className="icon-clock"></i> Todo 1 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="app_todo_2.html" className="nav-link ">
                                                        <i className="icon-check"></i> Todo 2 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="app_inbox.html" className="nav-link ">
                                                        <i className="icon-envelope"></i> Inbox </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="app_calendar.html" className="nav-link ">
                                                        <i className="icon-calendar"></i> Calendar </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="app_ticket.html" className="nav-link ">
                                                        <i className="icon-notebook"></i> Support </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-user"></i> User
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="page_user_profile_1.html" className="nav-link ">
                                                        <i className="icon-user"></i> Profile 1 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_user_profile_1_account.html" className="nav-link ">
                                                        <i className="icon-user-female"></i> Profile 1 Account </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_user_profile_1_help.html" className="nav-link ">
                                                        <i className="icon-user-following"></i> Profile 1 Help </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_user_profile_2.html" className="nav-link ">
                                                        <i className="icon-users"></i> Profile 2 </a>
                                                </li>
                                                <li className="dropdown-submenu ">
                                                    <a href="javascript:;" className="nav-link nav-toggle">
                                                        <i className="icon-notebook"></i> Login
                                                        <span className="arrow"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="">
                                                            <a href="page_user_login_1.html" className="nav-link " target="_blank"> Login Page 1 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_user_login_2.html" className="nav-link " target="_blank"> Login Page 2 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_user_login_3.html" className="nav-link " target="_blank"> Login Page 3 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_user_login_4.html" className="nav-link " target="_blank"> Login Page 4 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_user_login_5.html" className="nav-link " target="_blank"> Login Page 5 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_user_login_6.html" className="nav-link " target="_blank"> Login Page 6 </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_user_lock_1.html" className="nav-link " target="_blank">
                                                        <i className="icon-lock"></i> Lock Screen 1 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_user_lock_2.html" className="nav-link " target="_blank">
                                                        <i className="icon-lock-open"></i> Lock Screen 2 </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-social-dribbble"></i> General
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="page_general_about.html" className="nav-link ">
                                                        <i className="icon-info"></i> About </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_contact.html" className="nav-link ">
                                                        <i className="icon-call-end"></i> Contact </a>
                                                </li>
                                                <li className="dropdown-submenu ">
                                                    <a href="javascript:;" className="nav-link nav-toggle">
                                                        <i className="icon-notebook"></i> Portfolio
                                                        <span className="arrow"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="">
                                                            <a href="page_general_portfolio_1.html" className="nav-link "> Portfolio 1 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_portfolio_2.html" className="nav-link "> Portfolio 2 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_portfolio_3.html" className="nav-link "> Portfolio 3 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_portfolio_4.html" className="nav-link "> Portfolio 4 </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="dropdown-submenu ">
                                                    <a href="javascript:;" className="nav-link nav-toggle">
                                                        <i className="icon-magnifier"></i> Search
                                                        <span className="arrow"></span>
                                                    </a>
                                                    <ul className="dropdown-menu">
                                                        <li className="">
                                                            <a href="page_general_search.html" className="nav-link "> Search 1 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_search_2.html" className="nav-link "> Search 2 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_search_3.html" className="nav-link "> Search 3 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_search_4.html" className="nav-link "> Search 4 </a>
                                                        </li>
                                                        <li className="">
                                                            <a href="page_general_search_5.html" className="nav-link "> Search 5 </a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_pricing.html" className="nav-link ">
                                                        <i className="icon-tag"></i> Pricing </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_faq.html" className="nav-link ">
                                                        <i className="icon-wrench"></i> FAQ </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_blog.html" className="nav-link ">
                                                        <i className="icon-pencil"></i> Blog </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_blog_post.html" className="nav-link ">
                                                        <i className="icon-note"></i> Blog Post </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_invoice.html" className="nav-link ">
                                                        <i className="icon-envelope"></i> Invoice </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_general_invoice_2.html" className="nav-link ">
                                                        <i className="icon-envelope"></i> Invoice 2 </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="dropdown-submenu ">
                                            <a href="javascript:;" className="nav-link nav-toggle ">
                                                <i className="icon-settings"></i> System
                                                <span className="arrow"></span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className=" ">
                                                    <a href="page_system_coming_soon.html" className="nav-link " target="_blank"> Coming Soon </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_system_404_1.html" className="nav-link "> 404 Page 1 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_system_404_2.html" className="nav-link " target="_blank"> 404 Page 2 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_system_404_3.html" className="nav-link " target="_blank"> 404 Page 3 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_system_500_1.html" className="nav-link "> 500 Page 1 </a>
                                                </li>
                                                <li className=" ">
                                                    <a href="page_system_500_2.html" className="nav-link " target="_blank"> 500 Page 2 </a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

MenuView.propTypes = {
};

export default MenuView