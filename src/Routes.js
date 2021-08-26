import { Route, Switch } from 'react-router';

import Home from './pages/Home';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact>
				<Home />
			</Route>
		</Switch>
	);
};

export default Routes;
