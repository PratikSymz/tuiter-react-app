const PostSummaryItem = (post) => {
	let base = `
			<li class="list-group-item list-group-item-action
									d-flex justify-content-center align-items-center p-3">
				<div class="ms-2 me-auto">
					<div class="fw-normal wd-text-gray">${post.topic}</div>
	`;
	
	if (post.userName !== null) {
		base += `
				<div class="fw-bold text-white">
					${post.userName} <i class="fas fa-check-circle fa-1x"></i>
		`;
		
		if (post.timeAgo !== null) {
			base += `
				<span class="fw-normal wd-text-gray"> - ${post.timeAgo}</span>
			`;
		}
		
		base += `
			</div>
		`;
	}
	
	if (post.title !== null) {
		base += `
				<div class="fw-bold text-white">${post.title}</div>
		`;
	}
	
	if (post.tweets !== null) {
		base += `
				<div class="fw-normal wd-text-gray">${post.tweets} Tweets</div>
		`;
	}
	
	base += `
				</div>
					<span>
						<img src="${post.image}"
					           class="wd-article-img-dimension wd-border-radius-5 ms-2"/>
					</span>
			</li>
	`;
	
	return base;
}

export default PostSummaryItem;