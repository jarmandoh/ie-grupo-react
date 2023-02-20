import React from "react";

import { TodoContext } from '../TodoContext';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoItem } from '../TodoItem';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoList } from '../TodoList';


function AppUI(){
	const {error, loading, searchedTodos, completeTodo, deleteTodo} = React.useContext(TodoContext)
    return(
        <>
			<TodoCounter/>
			<TodoSearch/>

			<TodoList>
				{error && <p>Error...</p>}
				{loading && <p>Estamos cargando...</p>}
				{(!loading && !searchedTodos.length) && <p>¡Crea tu primer todo! </p>}
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
			
			<CreateTodoButton/>
		</>
    );
}
export {AppUI }