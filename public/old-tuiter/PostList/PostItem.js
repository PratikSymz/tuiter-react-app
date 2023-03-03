const PostSummaryItem = (post) => {
	let base = `
			<li class="list-group-item list-group-item-action wd-post-content p-3">
				<div class="wd-post-container">
					<img src="${post.profileImg}" alt=""
					     class="wd-profile-photo-md rounded-circle pull-left">
						<div class="wd-post-detail">
							<div class="align-items-center d-inline-block">
								<span class="fw-bold text-white">${post.userName}</span>
								<i class="fas fa-check-circle text-white fa-1x"></i>
								<span class="fw-normal ms-1">${post.handle}</span>
								<span class="fw-normal"> . ${post.timeAgo}</span>
							</div>
							<span class="pull-right">
									<i class="fas fas fa-ellipsis-h fa-1x"></i>
							</span>
	`;
	
	if (post.link != null) {
		if (post.link.linkImg !== null) {
			base += `
							<div class="fw-normal text-white pt-1">${post.tweet}</div>
							<div class="mt-3">
								<img src="${post.link.linkImg}" alt=""
								     class="wd-post-image">
							</div>
			`;
		}
		
		if (post.link.linkTitle !== null || post.link.linkDesc !== null || post.link.linkRef !== null) {
			base += `
							<div class="wd-tweet-link fw-normal p-3">
			`;
			
			if (post.link.linkTitle !== null) {
				base += `
								<div class="text-white">
									${post.link.linkTitle}
								</div>
				`;
			}
			
			if (post.link.linkDesc !== null) {
				base += `
								<div class="pt-1">
									${post.link.linkDesc}
								</div>
				`;
			}
			
			if (post.link.linkRef !== null) {
				base += `
								<div class="pt-1">
									<i class="fas fas fa-link fa-1x"></i>
									${post.link.linkRef}
								</div>
				`;
			}
			
			base += `
						</div>
			`;
		}
		
		base += `
						<div class="d-flex justify-content-between mt-3">
																<span class="align-items-center">
																	<i class="fas fa fa-comment-o fa-1x me-2"></i>
																	<div class="d-inline-block"
																	     style="font-size: 0.7rem">${post.numComments}</div>
																</span>
							<span class="align-items-center">
																	<i class="fas fas fa-retweet fa-1x me-2"></i>
																	<div class="d-inline-block"
																	     style="font-size: 0.7rem">${post.numRetweets}</div>
																</span>
							<span class="align-items-center">
																	<i class="fas far fa-heart fa-1x me-2"></i>
																	<div class="d-inline-block"
																	     style="font-size: 0.7rem">${post.numLikes}</div>
																</span>
							<i class="fas fas fa-share fa-1x me-2"></i>
						</div>
					</div>
				</div>
			</li>
		`;
	}

	return base;
}

export default PostSummaryItem;