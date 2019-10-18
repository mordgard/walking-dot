import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { changeSpeed } from "./actions";

const Container = ({ actions }) => {
  const handleChangeSpeed = speed => {
    actions.changeSpeed(speed);
  };

  return <Component onChangeSpeed={handleChangeSpeed} />;
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      changeSpeed
    },
    dispatch
  )
});
export default connect(
  null,
  mapDispatchToProps
)(Container);
