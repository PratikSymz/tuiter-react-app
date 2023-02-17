import TodoItem from "./TodoItem.js";
import Todos from "./Todos.js";

const TodoList = () => {
	return (`
		<ul class="list-group">
			${
				Todos.map(todo => {
					return (TodoItem(todo));
				}).join('')
			}
		</ul>
	`);
};

export default TodoList;