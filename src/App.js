import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';

import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';

const App = () => {
	const theme = useSelector(state => state.theme);

	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	);
};

export default App;
