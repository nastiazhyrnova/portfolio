import styled from 'styled-components';

import SocialNetworks from '../Navigation/SocialNetworks';

const FooterStyled = styled.footer`
	padding: 1.5rem 0;
	margin-top: 2rem;
	width: 100%;
	color: ${props => props.theme.additionalText};

	p {
		padding-top: 0.5rem;
	}
`;

const Footer = () => {
	return (
		<FooterStyled>
			<div>
				<SocialNetworks />
			</div>
			<p>
				2021 © <a href='https://nastiazhyrnova.com'>Nastia Zhyrnova</a>
			</p>
		</FooterStyled>
	);
};

export default Footer;
