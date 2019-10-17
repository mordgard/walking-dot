import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Component from "./Component";
import { enableRng, enablePrng } from "./actions";

const Container = ({ generatorType: { generatorType }, actions }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    isChecked ? actions.enablePrng() : actions.enableRng();
  };

  useEffect(() => {
    if (generatorType === "PRNG") {
      setIsChecked(false);
    }
    if (generatorType === "RNG") {
      setIsChecked(true);
    }
  }, [generatorType]);

  const propsToComponent = { isChecked, handleChange };

  return <Component {...propsToComponent} />;
};

const mapStateToProps = state => ({
  generatorType: state.generatorSwitcher
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      enablePrng,
      enableRng
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
