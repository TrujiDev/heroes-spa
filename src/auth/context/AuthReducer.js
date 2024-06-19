import { actionType } from '../actionsTypes/actionTypes';

export const AuthReducer = (state = {}, action) => {
	switch (action.type) {
		case actionType.login:
			return {
				...state,
				logged: true,
				user: action.payload,
			};

		case actionType.logout:
			return {
				logged: false,
			};

		default:
			return state;
	}
};
