import React from "react";
import "./index.css";

const TuitPostItem = ({
	key = 101,
	tuit = {
		"_id": 123,
		"profileImg": "profile_elon.jpeg",
		"userName": "Elon Musk",
		"handle": "@elonmusk",
		"timeAgo": "23h",
		"tweet": "Amazing show about @Inspiration4x mission!",
		"link": {
			"linkImg": "post_countdown.jpeg",
			"linkTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
			"linkDesc": "From training to launch to landing, this all-access docuseries rides along with the Inspiration5 crew on the first all-civilian orbital space...",
			"linkRef": "netflix.com"
		},
		"numComments": "4.2K",
		"numRetweets": "3.5K",
		"numLikes": "37.5K"
	}
}) => {
	return (
			<li key={key} className="list-group-item list-group-item-action wd-post-content p-3">
				<div className="wd-post-container">
					<img src={require(`../res/${tuit.profileImg}`)} alt=""
					     className="wd-profile-photo-md rounded-circle pull-left"/>
					<div className="wd-post-detail">
						<div className="align-items-center d-inline-block">
							<span className="fw-bold text-white">{tuit.userName}</span>
							<i className="fas fa-check-circle text-white fa-1x"></i>
							<span className="fw-normal ms-1">{tuit.handle}</span>
							<span className="fw-normal"> . {tuit.timeAgo}</span>
						</div>
						<span className="pull-right">
								<i className="fas fas fa-ellipsis-h fa-1x"></i>
						</span>
						
						<div className="fw-normal text-white pt-1">{tuit.tweet}</div>
						{
								(tuit.link !== null) &&
								<>
									{
											(tuit.link.linkImg !== null) &&
											<div className="mt-3">
												<img src={require(`../res/${tuit.link.linkImg}`)} alt=""
												     className="wd-post-image"/>
											</div>
									}
									{
											(tuit.link.linkTitle !== null || tuit.link.linkDesc !== null || tuit.link.linkRef !== null) &&
											<div className="wd-tweet-link fw-normal p-3">
												<div className="text-white">
													{tuit.link.linkTitle}
												</div>
												<div className="pt-1">
													{tuit.link.linkDesc}
												</div>
												<div className="pt-1">
													<i className="fas fas fa-link fa-1x"></i>
													{tuit.link.linkRef}
												</div>
											</div>
									}
								</>
						}
						
						<div className="d-flex justify-content-between mt-3 ms-3 me-3">
							<span className="align-items-center">
								<i className="bi bi-repeat fa-1x me-2"></i>
								<div className="d-inline-block wd-font-size-small">{tuit.numComments}</div>
							</span>
							<span className="align-items-center">
								<i className="bi bi-chat-left fa-1x me-2"></i>
								<div className="d-inline-block wd-font-size-small">{tuit.numRetweets}</div>
							</span>
							<span className="align-items-center">
								<i className="bi bi-heart fa-1x me-2"></i>
								<div className="d-inline-block wd-font-size-small">{tuit.numLikes}</div>
							</span>
							<i className="bi bi-share fa-1x me-2"></i>
						</div>
					</div>
				</div>
			</li>
	);
}

export default TuitPostItem;