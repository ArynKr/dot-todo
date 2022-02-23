import React, { useState } from 'react';
import { Button, SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
	const [modalOpen, setModalOpen] = useState(false);

	function toggleModal() {
		setModalOpen((prev) => {
			setModalOpen(!prev);
		});
	}

	function closeModal() {
		setModalOpen(false);
	}

	return (
		<div className={styles.appHeader}>
			<div onClick={toggleModal}>
				<Button variant='primary' type='button'>
					Add Task
				</Button>
			</div>
			<SelectButton>
				<option value='all'>All</option>
				<option value='incomplete'>Incomplete</option>
				<option value='complete'>Complete</option>
			</SelectButton>
			{modalOpen && <TodoModal closeModal={closeModal} />}
		</div>
	);
}

export default AppHeader;
