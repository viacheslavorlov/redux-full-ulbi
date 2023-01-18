const defaultState = {
	usersSaga: []
}

export const GET_USERS_SAGA = "GET_USERS_SAGA"
export const GET_USERS_SAGA_ASYNC = "GET_USERS_SAGA_ASYNC"

export const DELETE_USER_SAGA = "DELETE_USER_SAGA"
export const DELETE_USER_SAGA_ASYNC = "DELETE_USER_SAGA_ASYNC"

export const usersReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "GET_USERS_SAGA":
			return {
				...state,
				usersSaga: [...state.usersSaga, ...action.payload.filter(user => !state.usersSaga.some(item => item.id === user.id))]
			}
		case "DELETE_USER_SAGA":
			return {
				...state,
				usersSaga: [...state.usersSaga.filter(user => action.payload !== user.id)]
			}
		default:
			return state;
	}
}

export const GET_USERS_SAGA_creator = (customers) => ({type: GET_USERS_SAGA, payload: customers})
export const GET_USERS_SAGA_ASYNC_creator = () => ({type: GET_USERS_SAGA_ASYNC})
export const DELETE_USER_SAGA_creator = (id) => ({type: DELETE_USER_SAGA, payload: id})
export const DELETE_USER_SAGA_ASYNC_creator = () => ({type: DELETE_USER_SAGA_ASYNC})