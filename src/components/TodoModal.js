import { useState } from 'react';
import { MdOutlineClose } from 'react-icons/md';
import styles from '../styles/modules/modal.module.scss';
import { Button } from './Button';

const TodoModal = ({ closeModal }) => {
	const [title, setTitle] = useState('');
	const [status, setStatus] = useState('Incomplete');

	function handleSubmit(e) {
		e.preventDefault();
	}

	return (
		<div className={styles.wrapper} onMouseDown={closeModal}>
			<div className={styles.container}>
				<div
					className={styles.closeButton}
					onClick={closeModal}
					onKeyPress={(e) => e.key === 'Enter' && closeModal()}
					role='button'
					tabIndex={0}
				>
					<MdOutlineClose />
				</div>
				<form
					className={styles.form}
					onSubmit={handleSubmit}
					onMouseDown={(e) => e.stopPropagation()}
					onMouseUp={(e) => e.stopPropagation()}
				>
					<h1 className={styles.formTitle}> Add Task </h1>
					<label htmlFor='title'>
						Title
						<input
							type='text'
							id='title'
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</label>
					<label htmlFor='type'>
						Status
						<select
							name='status'
							id='status'
							value={status}
							onChange={(e) => setStatus(e.target.value)}
						>
							<option value='incomplete'>Incomplete</option>
							<option value='complete'>Complete</option>
						</select>
					</label>
					<div className={styles.buttonContainer}>
						<div onClick={closeModal}>
							<Button type='submit' variant='primary'>
								Add Task
							</Button>
						</div>
						<div onClick={closeModal}>
							<Button type='button' variant='secondary'>
								Cancel
							</Button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default TodoModal;
