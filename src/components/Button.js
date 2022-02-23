import styles from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

const Button = ({ children, type, variant = 'primary' }) => {
	return (
		<button
			type={type}
			className={getClasses([
				styles.button,
				styles[`button--${variant}`],
			])}
		>
			{children}
		</button>
	);
};

const SelectButton = ({ children, ...rest }) => {
	return (
		<select
			className={getClasses([styles.button, styles.button__select])}
			{...rest}
		>
			{children}
		</select>
	);
};

export { Button, SelectButton };
