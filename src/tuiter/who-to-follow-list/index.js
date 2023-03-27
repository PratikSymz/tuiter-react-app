import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
	// Extract the whoList from the provider (store) providing the reducer states
	const whoList = useSelector(state => state.who);
	
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