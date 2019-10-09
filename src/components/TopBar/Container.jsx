import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { openSidebar, closeSidebar } from "../SideBar/actions";

const Container = ({ isSideBarOpen, actions }) => {
  const handleOpenSidebar = () => {
    actions.openSidebar();
  };

  const propsToComponent = { handleOpenSidebar };

  return <Component {...propsToComponent} />;
};

const mapStateToProps = state => ({
  isSideBarOpen: state.sidebar.isOpen
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      openSidebar,
      closeSidebar
    },
    dispatch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
