import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './styles/Themes';

import GlobalStyles from './styles/GlobalStyles';

const App = () => {
	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			app
		</ThemeProvider>
	);
};

export default App;
