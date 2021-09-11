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
	SiStyledComponents,
	SiReactrouter,
	SiAdobephotoshop,
	SiAdobeillustrator,
	SiAdobexd,
	SiAdobeindesign,
	SiSap,
	SiTrello,
	SiNotion,
	SiMicrosoftexcel,
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
		title: 'Redux & toolkit,',
		subtitle: 'Redux-thunk',
		icon: <SiRedux />,
	},
	{
		title: 'React Router',
		icon: <SiReactrouter />,
	},
	{
		title: 'styled-components',
		icon: <SiStyledComponents />,
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

export const OTHER = [
	{
		title: 'Adobe',
		subtitle: 'XD',
		icon: <SiAdobexd />,
	},
	{
		title: 'Adobe',
		subtitle: 'Photoshop',
		icon: <SiAdobephotoshop />,
	},
	{
		title: 'Adobe',
		subtitle: 'Illustrator',
		icon: <SiAdobeillustrator />,
	},
	// {
	// 	title: 'Adobe InDesign',
	// 	icon: <SiAdobeindesign />,
	// },
	{
		title: 'SAP',
		subtitle: '(FI, MM)',
		icon: <SiSap />,
	},
	{
		title: 'Excel',
		subtitle: '(+macros)',
		icon: <SiMicrosoftexcel />,
	},

	{
		title: 'Trello',
		icon: <SiTrello />,
	},
	{
		title: 'Notion',
		icon: <SiNotion />,
	},
];
