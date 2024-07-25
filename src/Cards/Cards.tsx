import Card from '../Card/Card';
import BaseButton from '../UI/BaseButton/BaseButton';
import classes from './cards.module.css';

const Cards = () => {
	return (
		<>
			<div className={classes['cards']}>
				<Card picture='https://images.panda.org/assets/images/pages/welcome/orangutan_1600x1000_279157.jpg'>
					<h2>Card1</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
					<BaseButton>Click Me</BaseButton>
				</Card>

				<Card>
					<h2>Card2</h2>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
					<BaseButton>Click Me</BaseButton>
				</Card>
			</div>
		</>
	);
};

export default Cards;
