import { OPEN_SIDEBAR, CLOSE_SIDEBAR } from "./actions";

const initialState = {
  isOpen: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        isOpen: action.payload
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        isOpen: action.payload
      };
    default:
      return state;
  }
};
