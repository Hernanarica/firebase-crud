import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import db from "../../firebase/firebaseConfig";

function Tasks() {
	const [ tasks, setTasks ] = useState([]);
	
	useEffect(async () => {
		const querySnapshot = await getDocs(collection(db, 'tasks'));
		querySnapshot.forEach(doc => {
			setTasks(state => state = [ ...state, { ...doc.data(), id: doc.id } ]);
		});
	}, []);
	
	return (
		<>
			<h1>My tasks</h1>
			<hr />
			{
				(tasks.length === 0)
					? <h1>Loading your tasks...</h1>
					: tasks.map(task => <li key={ task.id }>
						<strong>{ task.title }</strong>
						<p>{ task.description }</p>
					</li>)
			}
		</>
	);
}

export default Tasks;