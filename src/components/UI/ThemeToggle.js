import { useState } from 'react';
import Switch from 'react-switch';

import { IconContext } from 'react-icons/lib';
import { IoIosMoon } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';

import 'react-toggle/style.css';

const ThemeToggle = () => {
	const [lightTheme, setLightTheme] = useState(false);

	const toggleTheme = () => setLightTheme(!lightTheme);

	//TODO: connect global state to the theme switcher
	return (
		<>
			<Switch
				className='react-switch'
				onChange={toggleTheme}
				checked={lightTheme}
				aria-label='Toggle between dark and light mode'
				checkedIcon={
					<IconContext.Provider
						value={{
							size: '100%',
							color: '#333333',
							style: {
								verticalAlign: 'middle',
							},
						}}>
						<WiDaySunny />
					</IconContext.Provider>
				}
				uncheckedIcon={
					<IconContext.Provider
						value={{
							size: '95%',
							color: '#FFFFFF',
							style: {
								verticalAlign: 'middle',
							},
						}}>
						<IoIosMoon />
					</IconContext.Provider>
				}
				handleDiameter={22}
				onColor='#F5F5F5'
				onHandleColor='#FFFFFF'
				offColor='#777777'
				offHandleColor='#D3D3D3'
				activeBoxShadow='0 0 2px 3px #F15A29'
			/>
		</>
	);
};

export default ThemeToggle;
