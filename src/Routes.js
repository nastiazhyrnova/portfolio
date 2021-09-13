import { Route, Switch } from 'react-router';

import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import About from './pages/About';
import NotFound from './pages/NotFound';

const Routes = () => {
	return (
		<Switch>
			<Route path='/' exact>
				<Home />
			</Route>
			<Route path='/projects' exact>
				<Projects />
			</Route>
			<Route path='/contact' exact>
				<Contact />
			</Route>
			{/* <Route path='/about' exact>
				<About />
			</Route> */}
			<Route path='*'>
				<NotFound />
			</Route>
		</Switch>
	);
};

export default Routes;
