import React from "react";

const TuitStats = ({tuit}) => {
	return (
			<div className="row justify-content-center mt-3 me-3">
				<div className="col-3">
					<span className="align-items-center">
						<i className="bi bi-chat-left fa-1x me-2"></i>
						<div className="d-inline-block wd-font-size-small">{tuit.numComments}</div>
					</span>
				</div>
				
				<div className="col-3">
					<span className="align-items-center">
						<i className="bi bi-repeat fa-1x me-2"></i>
						<div className="d-inline-block wd-font-size-small">{tuit.numRetweets}</div>
					</span>
				</div>
				
				<div className="col-3">
					<span className="align-items-center">
						{
							(tuit.liked === true) ? <i className="bi bi-heart-fill fa-1x me-2" style={{color: "orangered"}}></i>
									: <i className="bi bi-heart fa-1x me-2"></i>
						}
						<div className="d-inline-block wd-font-size-small">{tuit.numLikes}</div>
					</span>
				</div>
				
				<div className="col-3">
					<i className="bi bi-share fa-1x me-2"></i>
				</div>
			</div>
	);
}

export default TuitStats;