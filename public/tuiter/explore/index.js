import NavigationSidebar from "../NavigationSidebar/index.js";
import WhoToFollowList from "../WhoToFollowList/index.js";
import ExploreComponent from "../ExploreScreen/ExploreComponent.js";

function mainComponent() {
	$('#wd-explore').append(`
		<div class="row mt-3">
			<div class="col-xxl-3 col-xl-3 col-lg-2 col-md-2 col-sm-2 col-xs-2 ps-4">
				${NavigationSidebar()}
			</div>
			<div class="col-xxl-6 col-xl-6 col-lg-6 col-md-10 col-sm-10 col-xs-10 ps-4 pe-2">
				${ExploreComponent()}
			</div>
			<div class="col-xxl-3 col-xl-3 col-lg-4 d-none d-xxl-block d-xl-block d-lg-block pe-4">
				${WhoToFollowList()}
			</div>
		</div>
	`)
}

$(mainComponent);