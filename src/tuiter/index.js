// Reducers imports
import {configureStore} from "@reduxjs/toolkit";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import {Provider} from "react-redux";

import NavigationSidebar from "./navigation-sidebar";
import HomeComponent from "./home";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import {Route, Routes} from "react-router";
import "./index.css"

// Reducer store
const store = configureStore({
	reducer: {
		who: whoReducer,
		tuits: tuitsReducer
	}
});

export default function Tuiter() {
	return (
			<Provider store={store}>
				<div className="row mt-3">
					<div className="col-xxl-3 col-xl-3 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-4">
						<NavigationSidebar active='explore'/>
					</div>
					<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 ps-4 pe-2">
						<Routes>
							<Route path="/" index element={<ExploreComponent/>}/>
							<Route path="home" element={<HomeComponent/>}/>
							<Route path="explore" element={<ExploreComponent/>}/>
						</Routes>
					</div>
					<div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-xxl-block d-xl-block d-lg-block pe-4">
						<WhoToFollowList/>
					</div>
				</div>
			</Provider>
	);
}