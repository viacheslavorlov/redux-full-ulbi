import {put, takeEvery, call} from "redux-saga/effects"
import {
	DELETE_USER_SAGA_ASYNC,
	DELETE_USER_SAGA_creator,
	GET_USERS_SAGA_ASYNC,
	GET_USERS_SAGA_creator
} from "./sagaUsersReducer";


const fetchingUsers = () => {
	return fetch('https://jsonplaceholder.typicode.com/users/')
		.then(res => res.json())
}

function* fetchUserWorker() {
	const data = yield call(fetchingUsers)
	yield put(GET_USERS_SAGA_creator(data))
}

function* deleteUserWorker() {
	yield put(DELETE_USER_SAGA_creator())
}


export function* userWatcher() {
	yield takeEvery(GET_USERS_SAGA_ASYNC, fetchUserWorker)
	yield takeEvery(DELETE_USER_SAGA_ASYNC, deleteUserWorker)
}