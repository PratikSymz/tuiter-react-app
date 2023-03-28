import React from "react";
import {useSelector} from "react-redux";

const BioInfo = () => {
	const profile = useSelector(state => state.profile);
	
	return (
			<div className="row justify-content-start mt-3 me-3">
				<div className="col-auto">
					<span className="align-items-center">
						<i className="bi bi-geo-alt fa-1x me-2" style={{color: "white"}}></i>
						<div className="d-inline-block">{profile.location}</div>
					</span>
				</div>
				
				<div className="col-auto">
					<span className="align-items-center">
						<i className="bi bi-balloon fa-1x me-2" style={{color: "white"}}></i>
						<div className="d-inline-block">Born {profile.dateOfBirth}</div>
					</span>
				</div>
				
				<div className="col-auto">
					<span className="align-items-center">
						<i className="bi bi-calendar3 fa-1x me-2" style={{color: "white"}}></i>
						<div className="d-inline-block">Joined {profile.dateJoined}</div>
					</span>
				</div>
				
				<div className="mt-3">
					<span className="fw-bold text-white">340</span> Following
					<span className="fw-bold text-white ms-5">223</span> Followers
				</div>
			</div>
	);
}

export default BioInfo;