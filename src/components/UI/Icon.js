import { IconContext } from 'react-icons';

const Icon = props => {
	const icon = (
		<IconContext.Provider
			value={{
				color: props.color,
				size: props.size,
				className: 'icon',
				title: props.title,
			}}>
			{props.icon}
		</IconContext.Provider>
	);

	return (
		<>
			{props.link ? (
				<a
					href={props.link}
					target='_blank'
					rel='noreferrer'
					title={props.title}>
					{icon}
				</a>
			) : (
				icon
			)}
		</>
	);
};

export default Icon;
