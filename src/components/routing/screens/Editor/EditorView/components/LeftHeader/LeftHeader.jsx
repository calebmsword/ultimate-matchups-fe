import { useNavigate } from 'react-router';

import './LeftHeader.css';
import logo from '../../../../../../../assets/logo.png';

export const LeftHeader = ({ onClick, right, showRightPanel }) => {
	const navigate = useNavigate();

	const goBack = () => {
		navigate(-1);
	};

	return (
		<>
			<div className='LeftHeader'>
				<div className='LeftSection'>
					{' '}
					<img src={logo} className='HeaderLogo' />
				</div>
				<div className='RightSection'>
					<span className='CharacterName'>Your Mom</span>
					<img
						src='https://media.discordapp.net/attachments/859799626994679838/973356414833655848/20220509_185025.jpg'
						className='CharacterImg'
					/>
				</div>
			</div>
			<div className='LeftHeaderNav'>
				<div onClick={goBack} className='EditorButton'>
					{' '}
					← Back{' '}
				</div>
				<div className='EditorButton'>Save</div>
				<div className='EditorButton'>Options</div>
				<div className='EditorButton'>Add Row</div>
				<div className='EditorButton'>Export MU chart</div>
				<div className='EditorButton' onClick={onClick}>
					{' '}
					{showRightPanel ? 'Hide' : 'Show'}
				</div>
			</div>
		</>
	);
};
