import { ENABLE_RNG, ENABLE_PRNG } from "./actions";

const initialState = {
  generatorType: "PRNG"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ENABLE_RNG:
      return {
        ...state,
        generatorType: "RNG"
      };
    case ENABLE_PRNG:
      return {
        ...state,
        generatorType: "PRNG"
      };
    default:
      return state;
  }
};
