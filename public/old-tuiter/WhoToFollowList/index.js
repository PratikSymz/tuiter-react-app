import Who from "./Who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
	return (`
			<div class="align-items-center">
				<ul class="list-group">
					<li class="list-group-item fw-bold text-white fs-5">
						Who to follow</li>
					${
						Who.map(item => {
							return WhoToFollowListItem(item);
						}).join('')
					}
				</ul>
			</div>
	`);
}

export default WhoToFollowList;