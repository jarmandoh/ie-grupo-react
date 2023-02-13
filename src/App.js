import React from 'react';
import './App.css';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import { TodoList } from './TodoList';

const todos = [
	{text: 'cortar cebolla para detectar que pasa con un texto muy largo', completed: true},
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
					<TodoItem key={todo.text} text={todo.text} completed={todo.completed}/>
				))}
			</TodoList>
			<CreateTodoButton/>
		</>
	);
}

export default App;
