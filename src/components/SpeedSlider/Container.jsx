import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { changeSpeed } from "./actions";

const Container = ({ actions, speed }) => {
  const handleChangeSpeed = speed => {
    actions.changeSpeed(speed);
  };

  return <Component onChangeSpeed={handleChangeSpeed} speed={speed} />;
};

const mapStateToProps = state => ({
  speed: state.speedSlider.speed
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      changeSpeed
    },
    dispatch
  )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
