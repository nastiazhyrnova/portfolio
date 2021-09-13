import styled from 'styled-components';

import Layout from '../components/Layout/Layout';
import Icon from '../components/UI/Icon';

import { IoMailOutline, IoPhonePortraitOutline } from 'react-icons/io5';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 60vh;
	p {
		font-size: 1.25rem;
		line-height: 2.5rem;
		a {
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: center;
			gap: 0.5rem;
		}
	}
`;

const Contact = () => {
	return (
		<Layout>
			<Wrapper>
				<h2>Contact me</h2>
				<div>
					<p>
						<a
							href='mailto:nastia.zhyrnova@gmail.com'
							title='nastia.zhyrnova@gmail.com'>
							<Icon
								icon={<IoMailOutline />}
								size='1.75rem'
								color='var(--accent-color)'
								title='Email address'
							/>
							nastia.zhyrnova@gmail.com
						</a>
					</p>
					<p>
						<a href='tel:+34717704028' title='+34717704028'>
							<Icon
								icon={<IoPhonePortraitOutline />}
								size='1.75rem'
								color='var(--accent-color)'
								title='Phone number'
							/>
							+34 717 704 028
						</a>
					</p>
				</div>
			</Wrapper>
		</Layout>
	);
};

export default Contact;
