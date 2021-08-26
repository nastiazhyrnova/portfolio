import { useDispatch, useSelector } from 'react-redux';

import Switch from 'react-switch';

import { IconContext } from 'react-icons/lib';
import { IoIosMoon } from 'react-icons/io';
import { WiDaySunny } from 'react-icons/wi';

import { TOGGLE_THEME } from '../../store/actionTypes';

const ThemeToggle = () => {
	const theme = useSelector(state => state.theme);
	const dispatch = useDispatch();

	const toggleTheme = () => {
		dispatch({
			type: TOGGLE_THEME,
		});
	};

	return (
		<>
			<Switch
				className='react-switch'
				checked={theme === 'light' ? true : false}
				onChange={toggleTheme}
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
