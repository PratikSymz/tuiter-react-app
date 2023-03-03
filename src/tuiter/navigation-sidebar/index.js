import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
	const {pathname} = useLocation();
	const paths = pathname.split('/')
	const active = paths[2];
	return (
			<>
				<ul className="list-group">
					<li className="list-group-item border-top-0 border-start-0 border-end-0">
						<span><i className="bi bi-twitter" style={{'fontSize': '2rem'}}></i></span>
					</li>
					<Link to="/tuiter/home" className={`list-group-item list-group-item-action ${active === 'home' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-house-door-fill pe-2" style={{'fontSize': '1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Home
							</div>
						</div>
					</Link>
					<Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-hash pe-2" style={{'fontSize': '1.1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Explore
							</div>
						</div>
					</Link>
					<Link to="/" className="list-group-item list-group-item-action">
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-terminal pe-2" style={{'fontSize': '1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Labs
							</div>
						</div>
					</Link>
					<a className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-bell-fill pe-2" style={{'fontSize': '1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Notifications
							</div>
						</div>
					</a>
					<a className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-envelope-fill pe-2" style={{'fontSize': '1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Messages
							</div>
						</div>
					</a>
					<a className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-bookmark-fill pe-2" style={{'fontSize': '1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Bookmarks
							</div>
						</div>
					</a>
					<a className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-list-ul pe-2" style={{'fontSize': '1.1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Lists
							</div>
						</div>
					</a>
					<a className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-person-fill pe-2" style={{'fontSize': '1.1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">Profile
							</div>
						</div>
					</a>
					<a className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
						<div className="row">
							<div className="col-1 me-1"><i
									className="bi bi-three-dots pe-2" style={{'fontSize': '1.1rem'}}></i></div>
							<div className="d-none d-xl-block col-xl d-xxl-block col-xxl">More
							</div>
						</div>
					</a>
				</ul>
				<div>
					<button
							className="btn btn-primary rounded-pill w-100 wd-border-radius-40 mt-3 p-2">
						Tweet
					</button>
				</div>
			</>
	);
};

export default NavigationSidebar;