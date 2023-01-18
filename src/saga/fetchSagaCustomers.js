import {GET_USERS_SAGA} from "./sagaActions";

export const fetchSagaCustomers = () => {
	return dispatch => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((response) => response.json())
			.then((json) => dispatch(GET_USERS_SAGA(json)));
	}
}