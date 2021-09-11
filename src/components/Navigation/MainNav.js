import NavItems from './NavItems/NavItems';

const MainNav = props => {
	const items = [
		{ name: 'Home', path: '/#home', hashlink: true },
		{ name: 'Skills', path: '/#skills', hashlink: true },
		{ name: 'Projects', path: '/projects' },
		{ name: 'About', path: '/about' },
		{ name: 'CV', path: '/#cv', hashlink: true },
		{ name: 'Contact', path: '/contact' },
	];

	return (
		<nav>
			<NavItems items={items} navlink closeMobileMenu={props.closeMobileMenu} />
		</nav>
	);
};

export default MainNav;
