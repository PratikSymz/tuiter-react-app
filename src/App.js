import './App.css';
import Labs from "./labs";
import HelloWorld from "./labs/a6/hello-world";
import Tuiter from "./tuiter";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

function App() {
	return (
			<Router>
				<div className="container-fluid mb-5">
					<Routes>
						<Route path="/hello"
						       element={<HelloWorld/>}/>
						<Route index
						       element={<Labs/>}/>
						<Route path="/tuiter/*"
						       element={<Tuiter/>}/>
					</Routes>
				</div>
			</Router>
	);
}

export default App;
