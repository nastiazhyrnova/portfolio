import styled from 'styled-components';
import NavItem from './NavItems/NavItem';

import NavItems from './NavItems/NavItems';

const MainNav = () => {
	const items = [
		{ name: 'Home', path: '/' },
		{ name: 'Skills', path: '/skills' },
		{ name: 'Projects', path: '/projects' },
		{ name: 'About', path: '/about' },
		{ name: 'CV', path: '/cv' },
		{ name: 'Contact', path: '/contact' },
	];

	return (
		<nav>
			<NavItems items={items} navlink />
		</nav>
	);
};

export default MainNav;
