import NavigationSidebar from "../NavigationSidebar/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";
import HomeComponent from "../HomeScreen/HomeComponent.js";

function mainComponent() {
	$('#wd-posts').append(`
		<div class="row mt-3">
			<div class="col-xxl-3 col-xl-3 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-4">
				${NavigationSidebar('home')}
			</div>
			<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 ps-4 pe-4">
				${HomeComponent()}
			</div>
			<div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-xxl-block d-xl-block d-lg-block pe-4">
				${ExploreComponent()}
			</div>
		</div>
	`)
}

$(mainComponent);