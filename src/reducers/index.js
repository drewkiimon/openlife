import { combineReducers } from "redux";
import LatticeReducer from "./reducer_lattice";

const rootReducer = combineReducers({
  lattice: LatticeReducer
});

export default rootReducer;
