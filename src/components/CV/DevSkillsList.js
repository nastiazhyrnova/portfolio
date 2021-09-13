import styled from 'styled-components';

const DevSkillsListStyled = styled.ul`
	list-style-type: '→ ';
	text-align: left;
	margin: 0 auto;
	max-width: 300px;

	li {
		padding-bottom: 0.5rem;
	}
`;

const DevSkillsList = () => {
	return (
		<DevSkillsListStyled>
			<li>REST API</li>
			<li>OOP</li>
			<li>Chrome DevTools debugging</li>
			<li>BEM</li>
			<li>Clean Code Principles</li>
			<li>SOLID, DRY, KISS, YAGNI</li>
			<li>CLI</li>
			<li>MVC</li>
		</DevSkillsListStyled>
	);
};

export default DevSkillsList;
