import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import db from "../../firebase/firebaseConfig";

function TaskForm() {
	const [ formValues, setFormValues ] = useState({
		title: '',
		description: ''
	});
	
	const { title, description } = formValues;
	
	
	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value
		});
	};
	
	const handleSubmit = async e => {
		e.preventDefault();
		
		const docRef = await addDoc(collection(db, 'tasks'), formValues);
		
		console.log('Se inserto un nuevo documento con ID: ' + docRef.id);
	};
	
	return (
		<form onSubmit={ handleSubmit }>
			<label htmlFor="title">Title:</label>
			<input type="text" name="title" id="title" placeholder="Task title" value={ title } onChange={ handleInputChange } />
			<label htmlFor="description">Description:</label>
			<textarea id="description" name="description" placeholder="Task description" value={ description } onChange={ handleInputChange } />
			<button id="btn__sabe">Save</button>
		</form>
	);
}

export default TaskForm;