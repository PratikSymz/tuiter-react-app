import {createSlice} from "@reduxjs/toolkit";

// Declare an initial set of to-do objects in a constant array
// "initial state"
const initialTodos = [
	{
		_id: "123",
		do: "Accelerate the world's transition to sustainable energy",
		done: false
	},
	{
		_id: "234",
		do: "Reduce space transportation costs to become a spacefaring civilization",
		done: false
	}
];

const todosSlice = createSlice({
	name: 'todos',
	initialState: initialTodos,
	// 'reducer' functions receive current state; mutate current state into new state
	reducers: {
		addTodo(state, {payload}) {
			state.push({
				_id: (new Date()).getTime(),
				do: payload.do,
				done: false
			});
		},
		deleteTodo(state, {payload}) {
			const index = payload;
			state.splice(index, 1)
		},
		toggleTodo(state, {payload}) {
			// Find the to-do from the list based on _id
			const todo = state.find((todo) => todo._id === payload._id);
			todo.done = !todo.done;
		}
	}
});

export const {addTodo, deleteTodo, toggleTodo} = todosSlice.actions;
export default todosSlice.reducer;