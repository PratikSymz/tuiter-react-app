import TodoItem from "./todo-item";
import Todos from "./todos";

const TodoList = () => {
	return (
			<>
				<h3>Todo List</h3>
				<ul>
					{
						Todos.map(todo => {
							return <TodoItem todo={todo}/>
						})
					}
				</ul>
			</>
	);
};

export default TodoList;