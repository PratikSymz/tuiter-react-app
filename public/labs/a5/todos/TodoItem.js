const TodoItem = (todo) => {
	return (`
		<li class="list-group-item">
			<input type="checkbox"
        ${todo.done ? 'checked' : ''}/>
			${todo.title} [${todo.status}]
		</li>
	`);
};

export default TodoItem;