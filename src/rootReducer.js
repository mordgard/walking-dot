import { combineReducers } from "redux";
import { reducer as sidebar } from "./components/SideBar";
import { reducer as generatorSwitcher } from "./components/GeneratorSwitcher";

export default combineReducers({
  sidebar,
  generatorSwitcher
});
