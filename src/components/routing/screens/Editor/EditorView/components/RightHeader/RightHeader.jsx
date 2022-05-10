import './RightHeader.css';

export const RightHeader = () => {
	return (
		<div className='RightHeader'>
			<div className='SearchBarContainer'>
				<input
					type='text'
					placeholder='Filter...'
					className='SearchBar'
				/>{' '}
			</div>
		</div>
	);
};
