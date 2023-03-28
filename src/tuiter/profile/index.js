import React from "react";
import {Button} from "react-bootstrap";
import BioInfo from "./BioInfo";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const ProfileComponent = () => {
	const profile = useSelector(state => state.profile);
	
	const navigate = useNavigate();
	const navToEdit = () => {
		const path = "/tuiter/edit-profile";
		navigate(path);
	}
	
	return (
			<>
				<nav className="navbar">
					<div className="container-fluid justify-content-start">
						<i className="bi bi-arrow-left navbar-brand me-4" style={{color: "white"}}></i>
						<span>
							<div className="fs-5 text-white fw-bold">{profile.firstName} {profile.lastName}</div>
							6,114 Tweets
						</span>
					</div>
				</nav>
				
				{/* Image banner */}
				<div className="row align-items-center">
					<div
							className="col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3 wd-banner wd-banner-container">
						<img src={require("../res/starship_banner.webp")} alt=''
						     className="w-100 rounded-0 rounded-top" style={{height: "400px"}}/>
						<img src={require("../res/profile_nyp.png")} alt=''
						     className="rounded-circle ms-4" width={150}
						     style={{marginTop: "-4.5rem"}}/>
						<Button className="float-end rounded-5 mt-3 ps-3 pe-3 fw-bold"
						        onClick={navToEdit}>
							Edit profile
						</Button>
					</div>
				</div>
				
				<div className="mt-4">
					<div className="fw-bold fs-5 text-white">{profile.firstName} {profile.lastName}</div>
					{profile.handle}
					
					<div className="mt-4 text-white">{profile.bio}</div>
					
					<BioInfo/>
				</div>
			</>
	);
}

export default ProfileComponent;