import React, {memo} from 'react';
import {useDispatch, useSelector} from "react-redux";
// import {DELETE_USER_SAGA} from "./saga/sagaActions";
// import {fetchSagaCustomers} from "./saga/fetchSagaCustomers";
import {ASYNC_DECREMENT_creator, ASYNC_INCREMENT_creator} from "./saga/sagaIncrementReducer";
import {
	DELETE_USER_SAGA_creator,
	GET_USERS_SAGA_ASYNC_creator
} from "./saga/sagaUsersReducer";

const ReduxSAgaExample = memo(() => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.sagaIncrement.count);
	const users = useSelector(state => state.usersSaga.usersSaga)
	// const getCustomersSaga = () => {
	// 	dispatch(fetchSagaCustomers())
	// }
	// const deleteUserSaga = (id) => {
	// 	dispatch(DELETE_USER_SAGA(id))
	// }

	return (
		<div>
			<button onClick={() => dispatch(ASYNC_INCREMENT_creator())}>increment</button>
			<div>значение: {counter}</div>
			<button onClick={() => dispatch(ASYNC_DECREMENT_creator())}>decrement</button>
			<div>
				<button onClick={() => dispatch(GET_USERS_SAGA_ASYNC_creator())}>get customers</button>
				<ul>
					{users.length && users.map(user => <div>{user.name}
						<button onClick={() => dispatch(DELETE_USER_SAGA_creator(user.id))}>удалить</button>
					</div>)}
				</ul>
			</div>
		</div>
	);
});

export default ReduxSAgaExample;
