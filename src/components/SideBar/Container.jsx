import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { openSidebar, closeSidebar } from "./actions";

const Container = ({ isSideBarOpen, actions }) => {
  const handleCloseSidebar = () => {
    actions.closeSidebar();
  };

  return (
    <Component
      isSidebarOpen={isSideBarOpen}
      handleCloseSidebar={handleCloseSidebar}
    />
  );
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
