import { TOGGLE_THEME } from '../actionTypes';

const themeReducer = (state = 'light', action) => {
	switch (action.type) {
		case TOGGLE_THEME:
			if (state === 'light') {
				return 'dark';
			} else {
				return 'light';
			}
		default:
			return state;
	}
};

export default themeReducer;
