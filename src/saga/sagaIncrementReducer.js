const defaultState = {
	count: 0
}

export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ASYNC_INCREMENT = "ASYNC_INCREMENT"
export const ASYNC_DECREMENT = "ASYNC_DECREMENT"

export const INCREMENT_Creator = () => ({type: INCREMENT, payload: 1});
export const ASYNC_INCREMENT_creator = () => ({type: ASYNC_INCREMENT, payload: 1});
export const DECREMENT_Creator = () => ({type: DECREMENT, payload: 1});
export const ASYNC_DECREMENT_creator = () => ({type: ASYNC_DECREMENT, payload: 1});


export const incrementReducer = (state = defaultState, action) => {
	switch (action.type) {
		case "INCREMENT":
			console.log(action.payload)
			return {...state, count: state.count + action.payload}
		case "DECREMENT":
			return {...state, count: state.count - action.payload}
		default:
			return state;
	}
}

