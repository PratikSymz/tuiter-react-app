import PostSummaryList from "../PostSummaryList/index.js";

const ExploreComponent = () => {
	return (`
		<!-- Search field and cog -->
		<div class="row align-items-center">
			<div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10">
				<div class="row align-items-center ps-2">
					<i class="fa fa-search wd-search-icon"></i>
					<input type="text" class="form-control form-input"
						placeholder="Search Twitter">
				</div>
			</div>
			<div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 pe-3">
				<a href="explore-settings.html" style="text-decoration: none">
					<i class="fa fa-cog fa-2x d-flex justify-content-end text-primary"></i>
				</a>
			</div>
		</div>
	
		<!-- Navigation Bar -->
		<div class="row align-items-center">
			<div
				class="w-100 n-1 col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-3"
				style="margin-left: -10px">
				<ul class="nav nav-tabs">
					<li class="nav-item">
						<a class="nav-link active" href="for-you.html">For you</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="trending.html">Trending</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="news.html">News</a>
					</li>
					<li class="nav-item">
						<a class="nav-link" href="sports.html">Sports</a>
					</li>
					<li class="nav-item d-none d-md-block">
						<a class="nav-link" href="entertainment.html">Entertainment</a>
					</li>
				</ul>
			</div>
		</div>
	
		<!-- Image banner -->
		<div class="row align-items-center">
			<div
				class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-6 mt-3 wd-banner wd-banner-container">
				<img src="res/starship_banner.webp"
				     class="wd-img-dimension rounded-0 rounded-top">
				<div class="wd-text-bottom-left">SpaceX's Starship</div>
			</div>
		</div>
		
		<!-- News Articles -->
		${PostSummaryList()}
	`);
};

export default ExploreComponent;