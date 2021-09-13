import { useHistory } from 'react-router';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import Button from '../components/UI/Button';

const Wrapper = styled.div`
	height: 70vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
`;

const Numbers = styled.p`
	font-size: 10rem;
	color: var(--accent-color);
	font-weight: 800;
`;

const Hidden = styled.h5`
	color: ${props => props.theme.mainBg};
`;

const NotFound = () => {
	const history = useHistory();
	const goHome = () => history.push('/#home');
	return (
		<Layout>
			<Wrapper>
				<h1>Oops!</h1>
				<Numbers>404</Numbers>
				<h5>That's somehow embarassing, isn't it?</h5>
				<Hidden>But at least you found this hidden text ;)</Hidden>
				<Button onClick={goHome}>Go to the home page</Button>
			</Wrapper>
		</Layout>
	);
};

export default NotFound;
