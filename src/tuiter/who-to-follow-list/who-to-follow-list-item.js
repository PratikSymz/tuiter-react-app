import React from "react";
import "./index.css";

const WhoToFollowListItem = ({
	key = 101,
	who = {
		avatarIcon: 'nasa.png',
		userName: 'NASA',
		handle: 'nasa'
	}
}) => {
	return (
			<li key={key} className="list-group-item d-flex justify-content-between align-items-center">
				<span><img src={require(`../res/${who.avatarIcon}`)}
				           className="wd-account-img-dimension rounded-circle me-1" alt={''}/></span>
				<div className="ms-2 me-auto">
					<div className="fw-bold">
						{who.userName} <i className="fas fa-check-circle fa-1x ms-1"></i>
					</div>
					<div className="fw-normal wd-text-gray">@{who.handle}</div>
				</div>
				<span className="badge ps-2 pe-2">
						<button className="btn btn-primary rounded-pill ps-3 pe-3">Follow</button></span>
			</li>
	);
};

export default WhoToFollowListItem;