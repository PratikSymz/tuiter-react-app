import React from "react";
import "./index.css";
import PostSummaryList from "../post-summary-list";

const ExploreComponent = () => {
	return (
			<>
				{/* Search field and cog */}
				<div className="row align-items-center">
					<div className="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-10">
						<div className="row align-items-center ps-2">
							<i className="bi bi-search wd-search-icon"></i>
							<input type="text" className="form-control form-input rounded-pill"
							       placeholder="Search Twitter"/>
						</div>
					</div>
					<div className="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-2 col-xs-2 pe-3">
						<a href="explore-settings.html" style={{'textDecoration': 'none'}}>
							<i className="fa fa-cog fa-2x d-flex justify-content-end text-primary"></i>
						</a>
					</div>
				</div>
				
				{/* Navigation Bar */}
				<div className="row align-items-center">
					<div
							className="w-100 n-1 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3"
							style={{'marginLeft': '-10px'}}>
						<ul className="nav nav-tabs">
							<li className="nav-item">
								<a className="nav-link active" href="for-you.html">For you</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="trending.html">Trending</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="news.html">News</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="sports.html">Sports</a>
							</li>
							<li className="nav-item d-none d-md-block">
								<a className="nav-link" href="entertainment.html">Entertainment</a>
							</li>
						</ul>
					</div>
				</div>
				
				{/* Image banner */}
				<div className="row align-items-center">
					<div
							className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 wd-banner wd-banner-container">
						<img src={require("../res/starship_banner.webp")} alt=''
						     className="wd-img-dimension rounded-0 rounded-top"/>
						<div className="wd-text-bottom-left ps-3">SpaceX's Starship</div>
					</div>
				</div>
				
				{/* News Articles */}
				<PostSummaryList/>
			</>
	);
};

export default ExploreComponent;