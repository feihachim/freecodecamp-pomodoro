import { combineReducers } from "redux";
import pomodoro from "./pomodoro";

const rootReducer = combineReducers({ pomodoro: pomodoro });

export default rootReducer;
