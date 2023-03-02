import React from "react";

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';
import { Modal } from '../Modal';
import { TodoForm } from "../TodoForm";

import { TodoError } from '../TodoError';
import { TodosLoading } from '../TodosLoading';
import { EmptyTodos } from '../EmptyTodos';

function AppUI(){
	const {
		error,
		loading,
		searchedTodos,
		completeTodo,
		deleteTodo,
		openModal,
		setOpenModal
	} = React.useContext(TodoContext)
    return(
        <>
			<TodoCounter/>
			<TodoSearch/>

			<TodoList>
				
				{error && <TodoError error={error}/>}
				{loading && new Array(4).fill().map((item, index)=>(
					<TodosLoading key={index}/>
				))}
				{(!loading && !searchedTodos.length) && <EmptyTodos/>}
				{searchedTodos.map( todo => (
					<TodoItem 
						key={todo.text}
						text={todo.text}
						completed={todo.completed}
						onComplete={()=> completeTodo(todo.text)}
						onDelete={()=> deleteTodo(todo.text)}
					/>
				))}
			</TodoList>
			{!!openModal && (
				<Modal>
					<TodoForm/>
				</Modal>
			)}
			<CreateTodoButton 
				setOpenModal= {setOpenModal}
			/>
		</>
    );
}
export {AppUI }