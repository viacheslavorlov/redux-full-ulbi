import {ADD_MANY_CUSTOMERS} from "../actions/actions";

export const fetchCustomers = () => {
	return function (dispatch) {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(json => dispatch(ADD_MANY_CUSTOMERS(json)))
	}
}