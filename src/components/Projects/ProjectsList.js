import {
	SiReact,
	SiRedux,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiFirebase,
	SiStyledComponents,
	SiReactrouter,
} from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaCcStripe } from 'react-icons/fa';

import fbMessenger from '../../assets/images/projects/fb-messenger.jpg';
import vevescan from '../../assets/images/projects/vevescan.jpg';
import swimwear from '../../assets/images/projects/swimwear.jpg';
import meme from '../../assets/images/projects/meme-generator.jpg';
import weather from '../../assets/images/projects/weather.jpg';
import music from '../../assets/images/projects/music.jpg';
import hangman from '../../assets/images/projects/hangman.jpg';
import quiz from '../../assets/images/projects/quiz.jpg';
import simpleLogin from '../../assets/images/projects/simple-login.jpg';

export const PROJECTSLIST = [
	{
		id: '1',
		title: '"VeVeScan": Vegan and vegetarian food barcode scanner',
		short_description:
			'Progressive Web App with an access to the camera: after scanning product barcode shows if a product is vegan or vegetarian and, in case not, all ingredients in question. Connected to Open Food Facts API (mostly Spanish products).',
		tags: ['PWA', 'RestAPI', 'reactHooks', 'myDesign'],
		stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'SASS'],
		demo: 'https://vevescan.web.app/',
		git: 'https://github.com/nastiazhyrnova/VeVeScan',
		image: vevescan,
	},
	{
		id: '2',
		title: 'E-Commerce with visual swimwear constructor',
		short_description:
			'Online shop with an additional section to combine your own swimwear pair (different models & colors). All checkout process from registration to finished orders list. Illustrations are made by me too.',
		tags: [
			'ecommerce',
			'reactHooks',
			'authentication',
			'cardPayment',
			'RestAPI',
			'myDesign',
		],
		stack: [
			'ReactJS',
			'JavaScript',
			'HTML',
			'CSS',
			'Redux',
			'React Router',
			'Firebase',
			'Stripe',
		],
		demo: 'https://bikini-shop-25276.web.app/',
		git: 'https://github.com/nastiazhyrnova/swimwear-shop',
		image: swimwear,
	},
	{
		id: '3',
		title: 'Facebook Messenger Clone',
		short_description:
			'Simple and functional: write your name and start chatting immediately.',
		tags: ['reactHooks', 'clone'],
		stack: ['ReactJS', 'JavaScript', 'HTML', 'CSS', 'Firebase'],
		demo: 'https://fb-messenger-clone-41cdf.web.app/',
		git: 'https://github.com/nastiazhyrnova/fb-messenger-clone',
		image: fbMessenger,
	},
	{
		id: '4',
		title: 'Meme Generator',
		short_description:
			'SPA to generate a meme: upload a photo, write texts and download your ready to post meme image.',
		tags: ['reactHooks', 'HTMLcanvas', 'myDesign'],
		stack: [
			'ReactJS',
			'JavaScript',
			'HTML',
			'CSS',
			'Redux',
			'styled-components',
		],
		demo: 'https://meme-generator-nz.web.app/',
		git: 'https://github.com/nastiazhyrnova/meme-generator',
		image: meme,
	},
	{
		id: '9',
		title: 'Login and load userlist',
		short_description:
			'Authentification form made with Reqres.in API. Once authenticated, user can access userlist or logout.',
		tags: ['reactHooks', 'authentication', 'RestAPI', 'myDesign'],
		stack: [
			'ReactJS',
			'Redux',
			'React Router',
			'styled-components',
			'JavaScript',
			'HTML',
			'CSS',
		],
		demo: 'https://simple-login-and-userlist.web.app',
		git: 'https://github.com/nastiazhyrnova/simple-login-and-userslist',
		image: simpleLogin,
	},
	{
		id: '5',
		title: 'Music app (Spotify clone)',
		short_description: 'Made with Vanilla JS. One page Spotify clone',
		tags: ['vanillaJS', 'clone'],
		stack: ['JavaScript', 'HTML', 'CSS'],
		demo: 'https://nastiazhyrnova.github.io/Music-app/',
		git: 'https://github.com/nastiazhyrnova/Music-app',
		image: music,
	},
	{
		id: '6',
		title: 'Hangman game',
		short_description:
			'Made with Vanilla JS. Fetches random words from Wordly API. You have 7 lives to guess a word.',
		tags: ['vanillaJS', 'HTMLcanvas', 'RestAPI', 'game', 'myDesign'],
		stack: ['JavaScript', 'HTML', 'CSS'],
		demo: 'https://nastiazhyrnova.github.io/Hangman-app/',
		git: 'https://github.com/nastiazhyrnova/Hangman-app',
		image: hangman,
	},
	{
		id: '7',
		title: 'Weather forecast',
		short_description:
			'Made with Vanilla JS. Uses REST API to fetch data. Possibility to search by city and check detailed forecast for each of the available days.',
		tags: ['vanillaJS', 'RestAPI'],
		stack: ['JavaScript', 'HTML', 'CSS', 'SASS'],
		demo: 'https://nastiazhyrnova.github.io/Weather-app/',
		git: 'https://github.com/nastiazhyrnova/Weather-app',
		image: weather,
	},
	{
		id: '8',
		title: 'Trivia Quiz',
		short_description:
			'Made with Vanilla JS. Uses REST API to fetch random Trivia quiz questions.',
		tags: ['vanillaJS', 'RestAPI'],
		stack: ['JavaScript', 'HTML', 'CSS'],
		demo: 'https://nastiazhyrnova.github.io/Quiz/',
		git: 'https://github.com/nastiazhyrnova/Quiz',
		image: quiz,
	},
];

export const STACK_ICONS = [
	{
		title: 'ReactJS',
		icon: <SiReact />,
		color: '#61DBFB',
	},
	{
		title: 'Redux',
		icon: <SiRedux />,
		color: '#61DBFB',
	},
	{
		title: 'React Router',
		icon: <SiReactrouter />,
		color: '#CA4245',
	},
	{
		title: 'styled-components',
		icon: <SiStyledComponents />,
		color: '#D378B0',
	},
	{
		title: 'JavaScript',
		icon: <SiJavascript />,
		color: '#F7DF1E',
	},
	{
		title: 'HTML',
		icon: <SiHtml5 />,
		color: '#E44D26',
	},
	{
		title: 'CSS',
		icon: <SiCss3 />,
		color: '#0070BA',
	},
	{
		title: 'SASS',
		icon: <IoLogoSass />,
		color: '#CD6799',
	},
	{
		title: 'Firebase',
		icon: <SiFirebase />,
		color: '#FFCA28',
	},
	{
		title: 'Stripe',
		icon: <FaCcStripe />,
		color: '#6772E5',
	},
];
