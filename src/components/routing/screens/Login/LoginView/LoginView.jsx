import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router';
import styles from './LoginView.module.css';
import logo from '../../../../../assets/logo.png';

export const LoginView = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { t } = useTranslation();
	const navigate = useNavigate();

	const loginHandler = (e) => {
		e.preventDefault();
		navigate('/home');
	};

	return (
		<div className={styles.LoginViewContainer}>
			<img src={logo} className={styles.Logo} />
			<form onSubmit={loginHandler} className={styles.LoginForm}>
				<input
					type='text'
					placeholder={t('login.textbox_username')}
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
				<input
					type='password'
					placeholder={t('login.textbox_password')}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<input type='submit' value={t('login.button_submit')} />
			</form>
			<span className={styles.LoginFormLinks}>
				<a href='#'>Create an account</a>
				<a href='#'>What is this site?</a>
			</span>
		</div>
	);
};
