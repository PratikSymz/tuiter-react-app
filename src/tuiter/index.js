import NavigationSidebar from "./navigation-sidebar";
import ExploreComponent from "./explore";
import WhoToFollowList from "./who-to-follow-list";
import {Route, Routes} from "react-router";
import "./index.css";

export default function Tuiter() {
	return (
			<div className="row mt-3">
				<div className="col-xxl-3 col-xl-3 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-4">
					<NavigationSidebar active='explore'/>
				</div>
				<div className="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 ps-4 pe-2">
					<ExploreComponent/>
					{/*<Routes>*/}
					{/*	<Route path="home" element={<ExploreComponent/>}/>*/}
					{/*	<Route path="explore" element={<ExploreComponent/>}/>*/}
					{/*</Routes>*/}
				</div>
				<div className="col-xxl-3 col-xl-3 col-lg-4 d-none d-xxl-block d-xl-block d-lg-block pe-4">
					<WhoToFollowList/>
				</div>
			</div>
	);
}