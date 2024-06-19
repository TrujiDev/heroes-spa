import { useReducer } from 'react';
import { AuthReducer } from './AuthReducer';
import { AuthContext } from './AuthContext';
import { actionType } from '../actionsTypes/actionTypes';

const init = () => {
	const user = JSON.parse(localStorage.getItem('user'));

	return {
		logged: !!user,
		user,
	};
};

export const AuthProvider = ({ children }) => {
	const [authState, dispatch] = useReducer(AuthReducer, {}, init);

	const login = (name = '') => {
		const user = { name };
		const action = {
			type: actionType.login,
			payload: user,
		};
		localStorage.setItem('user', JSON.stringify(user));
		dispatch(action);
	};

	const logout = () => {
		localStorage.removeItem('user');
		const action = {
			type: actionType.logout,
		};
		dispatch(action);
	};

	return (
		<AuthContext.Provider value={{ ...authState, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};
