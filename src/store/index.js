import {applyMiddleware, combineReducers, createStore} from "redux";
import {cashReducer} from "./reducers/cashReducer";
import {customerReducer} from "./reducers/customerReducer";
// import {composeWithDevTools} from "@redux-devtools/extension";
// import thunk from "redux-thunk";
import {incrementReducer} from "../saga/sagaIncrementReducer";
import {usersReducer} from "../saga/sagaUsersReducer";
import createSagaMiddleware from "redux-saga";
// import {countWatcher} from "../saga/countSaga";
// import {userWatcher} from "../saga/userSaga";
import {rootWatcher} from "../saga";
import {composeWithDevTools} from "@redux-devtools/extension";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
	cash: cashReducer,
	customers: customerReducer,
	sagaIncrement: incrementReducer,
	usersSaga: usersReducer
})

//* Plain redux + react-redux
//* export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

//* redux + react-redux + redux-saga
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)