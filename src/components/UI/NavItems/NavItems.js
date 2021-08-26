import styled from 'styled-components';

import NavItem from './NavItem';

const List = styled.ul`
	list-style: none;
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0rem;
`;

const NavItems = props => {
	return (
		<List>
			{props.items.map(item => (
				<NavItem
					key={item.name}
					name={item.name}
					path={item.path}
					navlink={props.navlink}
				/>
			))}
		</List>
	);
};

export default NavItems;