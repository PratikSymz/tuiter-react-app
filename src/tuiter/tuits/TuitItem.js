import React from "react";
import "./index.css";
import TuitStats from "./TuitStats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = ({
	key = 101,
	tuit = {
		"_id": 123,
		"profileImg": "profile_elon.jpeg",
		"userName": "Elon Musk",
		"handle": "@elonmusk",
		"timeAgo": "23h",
		"tweet": "You want to wake up in the morning and think that the future is going to be great - and that's what a spacefaring civilization is all about. It's about believing in the future will be better than the past. And I can't think of anything more exciting than goign out there and being among the stars.",
		"numComments": "4.2K",
		"numRetweets": "3.5K",
		"numLikes": "37.5K",
		"liked": true
	}
}) => {
	const dispatch = useDispatch();
	const deleteTuitHandler = (id) => {
		dispatch(deleteTuit(id));
	}
	
	return (
			<li key={key} className="list-group-item list-group-item-action wd-post-content p-3">
				<div className="wd-post-container">
					<img src={require(`../res/${tuit.profileImg}`)} alt=""
					     className="wd-profile-photo-md rounded-circle pull-left"/>
					<div className="wd-post-detail">
						<div className="align-items-center d-inline-block">
							<span className="fw-bold text-white">{tuit.userName}</span>
							<i className="bi bi-patch-check-fill text-white fa-1x ms-1 me-1"></i>
							<span className="fw-normal ms-1">{tuit.handle}</span>
							<span className="fw-normal"> . {tuit.timeAgo}</span>
						</div>
						<span className="pull-right">
								<i className="bi bi-x-lg fa-1x float-end"
								   onClick={() => deleteTuitHandler(tuit._id)}></i>
						</span>
						
						<div className="fw-normal text-white pt-1">{tuit.tweet}</div>
						
						<TuitStats tuit={tuit}/>
					</div>
				</div>
			</li>
	);
}

export default TuitItem;