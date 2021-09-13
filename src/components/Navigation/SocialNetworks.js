import styled from 'styled-components';

import { AiFillGithub, AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';

import Icon from '../UI/Icon';

const IconsContainer = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: center;
`;

const SocialNetworks = props => {
	return (
		<IconsContainer>
			<Icon
				icon={<AiFillGithub />}
				link='https://github.com/nastiazhyrnova'
				title='Github'
				size='1.5rem'
			/>
			<Icon
				icon={<AiOutlineTwitter />}
				link='https://twitter.com/nastiazdev'
				title='Twitter'
				size='1.5rem'
			/>
			<Icon
				icon={<AiFillLinkedin />}
				link='https://www.linkedin.com/in/anastasiiazhyrnova/'
				title='Linkedin'
				size='1.5rem'
			/>
		</IconsContainer>
	);
};

export default SocialNetworks;
