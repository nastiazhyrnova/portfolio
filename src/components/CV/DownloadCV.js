import Button from '../UI/Button';
import Icon from '../UI/Icon';

import { HiDownload } from 'react-icons/hi';

const DownloadCV = props => {
	return (
		<a
			href='/CV-Nastia-Zhyrnova.pdf'
			target='_blank'
			rel='noreferrer'
			title='Download CV'>
			<Button {...props}>
				<Icon icon={<HiDownload />} /> {props.children}
			</Button>
		</a>
	);
};

export default DownloadCV;
