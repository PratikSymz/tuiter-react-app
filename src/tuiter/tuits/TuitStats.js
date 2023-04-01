import React from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuit}) => {
	const dispatch = useDispatch();
	const updateTuitLikesHandler = () => {
		dispatch(updateTuitThunk({...tuit, numLikes: tuit.numLikes + 1}));
	}
	
	const updateTuitDislikesHandler = () => {
		dispatch(updateTuitThunk({...tuit, numDislikes: tuit.numDislikes + 1}));
	}
	
	return (
			<div className="row d-flex justify-content-between mt-3 me-3">
				<div className="col">
					<span className="align-items-center">
						<i className="bi bi-chat-left fa-1x me-2"></i>
						<div className="d-inline-block wd-font-size-small">{tuit.numComments}</div>
					</span>
				</div>
				
				<div className="col">
					<span className="align-items-center">
						<i className="bi bi-repeat fa-1x me-2"></i>
						<div className="d-inline-block wd-font-size-small">{tuit.numRetweets}</div>
					</span>
				</div>
				
				<div className="col">
					<span className="align-items-center">
						{/*{*/}
						{/*	(tuit.liked === true) ? <i className="bi bi-heart-fill fa-1x me-2" style={{color: "orangered"}}*/}
						{/*	                           onClick={updateTuitHandler}></i>*/}
						{/*			: <i className="bi bi-heart fa-1x me-2"></i>*/}
						{/*}*/}
						<i className="bi bi-hand-thumbs-up-fill fa-1x me-2" style={{color: "orangered"}}
						   onClick={updateTuitLikesHandler}></i>
						<div className="d-inline-block wd-font-size-small">{tuit.numLikes}</div>
					</span>
				</div>
				
				<div className="col">
					<span className="align-items-center">
						<i className="bi bi-hand-thumbs-down fa-1x me-2"
						   onClick={updateTuitDislikesHandler}></i>
						<div className="d-inline-block wd-font-size-small">{tuit.numDislikes}</div>
					</span>
				</div>
				
				<div className="col">
					<i className="bi bi-share fa-1x me-2"></i>
				</div>
			</div>
	);
}

export default TuitStats;