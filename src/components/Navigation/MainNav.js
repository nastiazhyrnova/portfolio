import NavItems from './NavItems/NavItems';

const MainNav = () => {
	const items = [
		{ name: 'Home', path: '/' },
		{ name: 'Skills', path: '/#skills', hashlink: true },
		{ name: 'Projects', path: '/projects' },
		{ name: 'About', path: '/about' },
		{ name: 'CV', path: '/#cv', hashlink: true },
		{ name: 'Contact', path: '/contact' },
	];

	return (
		<nav>
			<NavItems items={items} navlink />
		</nav>
	);
};

export default MainNav;
