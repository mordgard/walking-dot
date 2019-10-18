import { CHANGE_SPEED } from "./actions";

const initialState = {
  speed: 100
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SPEED:
      return {
        ...state,
        speed: action.payload
      };
    default:
      return state;
  }
};
