import {put, takeEvery} from "redux-saga/effects"
import {ASYNC_DECREMENT, ASYNC_INCREMENT, DECREMENT_Creator, INCREMENT_Creator} from "./sagaIncrementReducer";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))


function* incrementWorker() {
	yield delay(1000);
	yield put(INCREMENT_Creator());
}


function* decrementWorker() {
	yield delay(1000);
	yield put(DECREMENT_Creator());
}

export function* countWatcher() {
	yield takeEvery(ASYNC_INCREMENT, incrementWorker)
	yield takeEvery(ASYNC_DECREMENT, decrementWorker)
}