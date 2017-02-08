export const phoneReducer = (state = { value: 1}, action) => {
	switch(action.type) {
		case 'PHONE_BUTTON' : {
			return {
				...state,
				value: action.payload.value
				
			}
		}
	}
	return state;
}

