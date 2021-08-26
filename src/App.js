import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';

import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/Home';

const App = () => {
	return (
		<ThemeProvider theme={darkTheme}>
			<GlobalStyles />
			<Home />
		</ThemeProvider>
	);
};

export default App;
