import { combineReducers } from "redux";
import { todoReducer } from "./reducers/todo-reducer";
import { modalReducer } from "./reducers/modal-reducer";
import { dataReducer } from "./reducers/data-reducer";
import { recepiDetailsReducer } from "./reducers/recepiDetails-reducer";
import { recepiToShowReducer } from "./reducers/recepiToShow-reducer";
import { onUpdateReducer } from "./reducers/onUpdate-reducer";

export const rootReducer = combineReducers({todoReducer,modalReducer,dataReducer,recepiDetailsReducer, recepiToShowReducer, onUpdateReducer })