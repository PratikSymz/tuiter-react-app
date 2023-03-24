import React from "react";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";
import hello from "./reducers/hello";
import HelloReduxExampleComponent from "./hello-redux-example-component";
import todos from "./reducers/todos-reducer";
import Todos from "./todos-component";

// // Create data storage/store
// const store = createStore(hello)

// Combine all reducers into a single store
const store = configureStore({
	reducer: {hello, todos}
});

const ReduxExamples = () => {
	return (
			// Provider delivers data in store to child elements
			<Provider store={store}>
				<div>
					<h2>Redux Examples</h2>
					<Todos/>
					{/* Component consumes the data	*/}
					<HelloReduxExampleComponent/>
				</div>
			</Provider>
	);
};

export default ReduxExamples;