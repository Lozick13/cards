import { PropsWithChildren } from 'react';
import classes from './basebutton.module.css';

const BaseButton = ({ children }: PropsWithChildren) => {
	return (
		<>
			<button className={classes['base-button']}>{children}</button>
		</>
	);
};

export default BaseButton;
