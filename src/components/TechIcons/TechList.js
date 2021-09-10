import {
	SiReact,
	SiRedux,
	SiJavascript,
	SiHtml5,
	SiCss3,
	SiFirebase,
	SiPostman,
	SiVisualstudiocode,
	SiNpm,
} from 'react-icons/si';
import { IoLogoSass } from 'react-icons/io';
import { FaGitAlt } from 'react-icons/fa';
import { ImWordpress } from 'react-icons/im';

export const TECHS = [
	{
		title: 'ReactJS',
		subtitle: '(Classes, Hooks)',
		icon: <SiReact />,
	},
	{
		title: 'Redux & Redux',
		subtitle: 'toolkit',
		icon: <SiRedux />,
	},
	{
		title: 'JavaScript',
		subtitle: 'ES6',
		icon: <SiJavascript />,
	},
	{
		title: 'HTML',
		icon: <SiHtml5 />,
	},
	{
		title: 'CSS',
		icon: <SiCss3 />,
	},
	{
		title: 'SASS',
		icon: <IoLogoSass />,
	},
	{
		title: 'Firebase',
		icon: <SiFirebase />,
	},
	{
		title: 'Postman',
		icon: <SiPostman />,
	},
	{
		title: 'VS Code',
		icon: <SiVisualstudiocode />,
	},
	{
		title: 'npm',
		icon: <SiNpm />,
	},
	{
		title: 'Git',
		icon: <FaGitAlt />,
	},
	{
		title: 'Wordpress',
		icon: <ImWordpress />,
	},
];
