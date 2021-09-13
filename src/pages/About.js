import { useEffect } from 'react';
import styled from 'styled-components';

import Layout from '../components/Layout/Layout';

const Title = styled.h2`
	padding-bottom: 1rem;
`;

const List = styled.ul`
	list-style-type: '→  ';
	color: var(--accent-color);
	li {
		h5,
		p {
			color: ${props => props.theme.mainText};
		}
		margin-bottom: 1.5rem;
		text-align: justify;
	}
`;

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<Layout>
			<Title>About me</Title>
			<p>*Some details which are not included in my CV</p>
			<h4>What I am good at:</h4>
			<List>
				<li>
					<h5>Learning: </h5>
					<p>
						I love acquiring new skills and improve them, whether it is a new
						language, new technology or gardening.
					</p>
				</li>
				<li>
					<h5>Finding solutions: </h5>
					<p>
						Give me a problem and it will be a fuel which I run on for days and
						weeks. I love challenges and see it as a trampoline to gain new
						skills and learn how to improve the current way of things. I do a
						lot of research, and with trial and error find a way to solve it.
					</p>
				</li>
				<li>
					<h5>Automating processes: </h5>
					<p>
						As much as I am a hard working person, I agree to the phrase
						“Laziness is an engine of progress”. I resent repetitive tasks. Once
						I detect one, gears start spinning in my head on the double speed
						until I find a way to avoid it. I apply it in all of my jobs, for
						instance, I got an award while working in “Xerox” for creating
						macros which saved 75% of time in everyday reports generation.
					</p>
				</li>
				<li>
					<h5>Perfectionism and structured approach: </h5>
					<p>
						For me everything should be done well until the last tiny bit.
						Otherwise I wouldn’t be any good at my previous accounting & finance
						positions ;) I apply it also to learning: if I start gaining a new
						skill I do it structurally from basics to more advanced levels, so I
						won’t miss any detail or fundamental knowledge.
					</p>
				</li>
				<li>
					<h5>Visuals: </h5>
					<p>
						I have experience in graphic design, painting and illustration,
						which come in handy also when working in front-end: I can detect
						wrong font-weight or padding in one sight, see incorrect colours and
						very well understand what a right look & feel should look like.
					</p>
				</li>
				<li>
					<h5>Adapting: </h5>
					<p>
						Consider me as a non-conflict person who adapts very good to any
						environment. I used to live in 3 foreign countries and, as much as
						they are all distinct, I didn’t mind their specialities and learned
						quite fast to deal with them. The same applies to friendships and
						working environments.
					</p>
				</li>
				<li>
					<h5>Communicating: </h5>
					<p>
						Despite the fact I am an introvert, I enjoy being in contact with my
						teammates: discuss new ideas, find solutions and express my
						opinions. I might not do it right away, but once I gain confidence
						with people, I consider myself quite talkative and very opened
						person. Also I know what and when I should or shouldn’t say when it
						comes to any communitaction: inside of company or with external
						clients.
					</p>
				</li>
				<li>
					<h5>Doing anything: </h5>
					<p>
						Seriously. I think you should do your best in any activity. I am
						really versatile and good at doing a great deal of things: work-wise
						or in my hobbies. At my current job I do customer attention and
						project management, web development, accounting, graphic design,
						marketing strategies, internal organisation… And what I am not good
						at, I keep improving. Just don’t make my sing, ever. I really can’t
						and it’s not fixable.
					</p>
				</li>
			</List>
			{/* <h3>Work experience</h3> */}
		</Layout>
	);
};

export default About;
