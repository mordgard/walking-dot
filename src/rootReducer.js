import { combineReducers } from "redux";
import { reducer as sidebar } from "./components/SideBar";
import { reducer as generatorSwitcher } from "./components/GeneratorSwitcher";
import { reducer as speedSlider } from "./components/SpeedSlider";

export default combineReducers({
  sidebar,
  generatorSwitcher,
  speedSlider
});
