import {combineReducers} from "redux";

import employees from "./employeeDetailsReducer";

export const rootReducer = combineReducers({
    employees: employees
})