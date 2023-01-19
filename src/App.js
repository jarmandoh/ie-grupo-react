import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';

const todos = [
	{text: 'cortar cebolla', completed: false},
	{text: 'tomar el curso de react', completed: false},
	{text: 'llorar con la llorona', completed: false}
]

function App() {
	return (
		<>
			<TodoCounter/>

			<TodoSearch/>
			<TodoList>
				{todos.map( todo => (
					<TodoItem key={todo.text} text={todo.text}/>
				))}
			</TodoList>
			<CreateTodoButton/>
		</>
	);
}

export default App;
