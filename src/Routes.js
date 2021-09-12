import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Projects from './pages/Projects';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact>
				<Home />
			</Route>
			<Route path='/projects' exact>
				<Projects />
			</Route>
		</Switch>
	);
};

export default Routes;
