import React from "react";
import whoList from './who.json';
import WhoToFollowListItem from "./who-to-follow-list-item";

const WhoToFollowList = () => {
	return (
			<div className="align-items-center">
				<ul className="list-group">
					<li className="list-group-item fw-bold fs-5">Who to follow</li>
					{
						whoList.map(who =>
								<WhoToFollowListItem
										key={who._id}
										who={who}/>
						)
					}
				</ul>
			</div>
	);
};

export default WhoToFollowList;