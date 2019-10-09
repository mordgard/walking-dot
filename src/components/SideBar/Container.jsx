import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { openSidebar, closeSidebar } from "./actions";

const Container = ({ isSidebarOpen, actions }) => {
  const handleCloseSidebar = () => {
    actions.closeSidebar();
  };

  const propsToComponent = { isSidebarOpen, handleCloseSidebar };

  return <Component {...propsToComponent} />;
};

const mapStateToProps = state => ({
  isSidebarOpen: state.sidebar.isOpen
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
