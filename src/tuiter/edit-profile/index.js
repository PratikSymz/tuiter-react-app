import React, {useState} from "react";
import {Button} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import nav from "../../nav";
import {editProfile} from "../reducers/profile-reducer";

const EditProfileComponent = () => {
	const profile = useSelector(state => state.profile);
	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}
	
	let [name, setName] = useState(profile.firstName + " " + profile.lastName);
	let [bio, setBio] = useState(profile.bio);
	let [location, setLocation] = useState(profile.location);
	let [website, setWebsite] = useState(profile.website);
	const dispatch = useDispatch();
	
	const editProfileHandler = () => {
		let firstName = name.split(' ')[0];
		let lastName = name.split(' ')[1];
		const newProfile = {
			firstName: firstName,
			lastName: lastName,
			handle: profile.handle,
			profilePicture: profile.profilePicture,
			bannerPicture: profile.bannerPicture,
			bio: bio,
			website: website,
			location: location,
			dateOfBirth: profile.dateOfBirth,
			dateJoined: profile.dateJoined,
			followingCount: profile.followingCount,
			followersCount: profile.followersCount
		}
		
		dispatch(editProfile(newProfile));
		goBack();
	}
	
	return (
			<>
				<nav className="navbar">
					<div className="container-fluid">
						<div className="justify-content-start">
							<Button onClick={goBack} style={{backgroundColor: "transparent", border: "none"}}>
								<i className="bi bi-x-lg navbar-brand me-4" style={{color: "white"}}></i>
							</Button>
							<span className="fs-5 text-white fw-bold">Edit profile</span>
						</div>
						<Button className="ps-4 pe-4 fw-bold rounded-5"
						        onClick={editProfileHandler}>Save</Button>
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
					</div>
				</div>
				
				<div className="mt-4">
					<form className="form-floating mb-4">
						<input type="text" className="form-control" id="floatingName"
						       value={name}
						       onChange={(event) => setName(event.target.value)}/>
						<label htmlFor="floatingName">Name</label>
					</form>
					
					<form className="form-floating mb-4">
						<input type="text" className="form-control" id="floatingBio"
						       value={bio}
						       onChange={(event) => setBio(event.target.value)}/>
						<label htmlFor="floatingBio">Bio</label>
					</form>
					
					<form className="form-floating mb-4">
						<input type="text" className="form-control" id="floatingLocation"
						       value={location}
						       onChange={(event) => setLocation(event.target.value)}/>
						<label htmlFor="floatingLocation">Location</label>
					</form>
					
					<form className="form-floating mb-4">
						<input type="text" className="form-control" id="floatingWeb"
						       value={website}
						       onChange={(event) => setWebsite(event.target.value)}/>
						<label htmlFor="floatingWeb">Website</label>
					</form>
					
					Birth Date . <span style={{color: "cornflowerblue"}}>Edit</span><br/>
					<span className="text-white fw-bold">{profile.dateOfBirth}</span>
					<div className="fw-bold fs-5 text-white"></div>
				</div>
			</>
	);
}

export default EditProfileComponent;