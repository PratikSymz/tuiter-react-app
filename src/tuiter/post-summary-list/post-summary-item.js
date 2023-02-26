import React from "react";
import "./index.css";

const PostSummaryItem = ({
	key = 101,
	post = {
		"_id": 123,
		"topic": "Web Development",
		"userName": "ReactJS",
		"timeAgo": "2h",
		"image": "reactjs.png",
		"title": "React.js is a component based front end library that makes it very easy to build "
				+ "Single Page Applications or SPAs",
		"tweets": null
	}
}) => {
	return (
			<li key={key} className="list-group-item list-group-item-action
									d-flex justify-content-center align-items-center p-3">
				<div className="ms-2 me-auto">
					<div className="fw-normal wd-text-gray">{post.topic}</div>
					{
							(post.userName !== null) &&
							<div className="fw-bold">
								{post.userName} <i className="fas fa-check-circle fa-1x"></i>
								{(post.timeAgo !== null) && <span className="fw-normal wd-text-gray"> - {post.timeAgo}</span>}
							</div>
					}
					{(post.title !== null) && <div className="fw-bold">{post.title}</div>}
					{(post.tweets !== null) && <div className="fw-normal wd-text-gray">{post.tweets} Tweets</div>}
				</div>
				<span><img src={require(`../res/${post.image}`)} alt=''
				           className="wd-article-img-dimension wd-border-radius-5 ms-2"/></span>
			</li>
	);
};

export default PostSummaryItem;