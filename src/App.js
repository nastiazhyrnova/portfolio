import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';

import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';

import { SET_THEME } from './store/actionTypes';

const App = () => {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	const setTheme = theme =>
		dispatch({
			type: SET_THEME,
			theme,
		});

	useEffect(() => {
		const localTheme = localStorage.getItem('theme');
		localTheme && setTheme(localTheme);
	}, []);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	);
};

export default App;
