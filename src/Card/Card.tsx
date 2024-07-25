import { FC, ReactNode } from 'react';
import classes from './card.module.css';

interface IProps {
	picture?: string;
	children: ReactNode;
}

const Card: FC<IProps> = ({ picture, children }) => {
	const pictureEl = picture ? (
		<img src={picture} className={classes['card__picture']} />
	) : (
		''
	);

	return (
		<>
			<div className={classes['card']}>
				{pictureEl}
				<div className={classes['card__body']}>{children}</div>
			</div>
		</>
	);
};

export default Card;
