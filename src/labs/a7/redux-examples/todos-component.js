import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteTodo, toggleTodo} from "./reducers/todos-reducer";

const Todos = () => {
	// Retrieve todos from reducer state
	const todos = useSelector((state) => state.todos);
	
	// Create to-do local state variable
	const [todo, setTodo] = useState({do: ''});
	
	// Handle keystroke changes in input field
	// const todoChangeHandler = (event) => {
	// 	const doValue = event.target.value;
	// 	const newTodo = {
	// 		do: doValue
	// 	};
	//
	// 	setTodo(newTodo);
	// };
	//
	const dispatch = useDispatch();
	// const createTodoClickHandler = () => {
	// 	dispatch(addTodo(todo))
	// }
	
	const deleteTodoClickHandler = (index) => {
		dispatch(deleteTodo(index))
	}
	
	const toggleTodoDone = (todo) => {
		dispatch(toggleTodo(todo))
	}
	
	return (
			<>
				<h3>Todos</h3>
				<ul className="list-group">
					{
						todos.map((todo, index) =>
								<li className="list-group-item">
									<button className="btn btn-danger w-25 float-end"
									        onClick={() => deleteTodoClickHandler(index)}>
										Delete
									</button>
									{/*<input className="form-control w-50"*/}
									{/*       value={todo.do}*/}
									{/*       onChange={todoChangeHandler}*/}
									{/*/>*/}
									<input className="me-2"
									       type="checkbox"
									       checked={todo.done}
									       onChange={() => toggleTodoDone(todo)}/>
									{todo.do}
								</li>
						)
					}
				</ul>
			</>
	);
};

export default Todos;