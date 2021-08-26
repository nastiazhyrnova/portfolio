import { TOGGLE_THEME, SET_THEME } from '../actionTypes';

const themeReducer = (state = 'light', action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			if (state === 'light') {
				return 'dark';
			} else {
				return 'light';
			}
		case SET_THEME:
			return action.theme;
		default:
			return state;
	}
};

export default themeReducer;
