import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./actions";

const Container = () => {
  return <Component />;
};

const mapStateToProps = state => ({
  isSideBarOpen: state.isOpen
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      OPEN_SIDEBAR,
      CLOSE_SIDEBAR
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
