const NavigationSidebar = () => {
	return (`
			<div class="align-items-center">
				<ul class="list-group">
					<li class="list-group-item border-top-0 border-start-0 border-end-0">
						<span><i class="fab fa-twitter fa-2x"></i></span>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-home fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Home
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action active">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-hashtag fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Explore
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-bell fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Notifications
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-envelope fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Messages
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-bookmark fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Bookmarks
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-list-ul fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Lists
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-user-alt fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">Profile
							</div>
						</div>
					</li>
					<li class="list-group-item list-group-item-action">
						<div class="row">
							<div class="col-1 me-1"><i
									class="fas fa-ellipsis-v fa-1x pe-2"></i></div>
							<div
									class="d-none d-xl-block col-xl d-xxl-block col-xxl">More
							</div>
						</div>
					</li>
				</ul>
				
				<div>
					<button
							class="w-100 wd-border-radius-40 mt-3 p-2 bg-primary wd-rounded-btn">
						Tweet
					</button>
				</div>
			</div>
	`);
}

export default NavigationSidebar;