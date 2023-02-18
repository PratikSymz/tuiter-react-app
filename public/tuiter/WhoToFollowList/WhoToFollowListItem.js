const ListItem = (who) => {
	return (`
			<li class="list-group-item d-flex justify-content-between align-items-center">
				<span><img src="${who.avatarIcon}"
					class="wd-account-img-dimension rounded-circle me-1"></span>
				<div class="ms-2 me-auto">
					<div class="fw-bold">
						${who.userName} <i class="fas fa-check-circle fa-1x ms-1"></i>
					</div>
					<div class="fw-normal wd-text-gray">${who.handle}</div>
				</div>
				<span class="badge bg-primary wd-border-radius-40">
					<button class="wd-rounded-btn">Follow</button>
				</span>
			</li>
	`);
}

export default ListItem;