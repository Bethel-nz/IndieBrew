import { FC } from 'react';
import { wrapperProps } from '../../types/types';

const Wrapper: FC<wrapperProps> = ({ children, className }) => {
	return (
		<div className={`max-w-7xl md:m-auto w-full px-4 ${className}`}>
			{children}
		</div>
	);
};

export default Wrapper;
