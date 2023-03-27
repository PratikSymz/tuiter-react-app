import React from "react";
import PostSummaryItem from "./post-summary-item";
import postList from "./post.json";

const PostSummaryList = () => {
	return (
			<div className="row align-items-center">
				<div className="w-100 col-xxl-12 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12"
				     style={{'marginLeft': '-10px'}}>
					<ul className="list-group rounded-0 rounded-bottom">
						{
							postList.map(post =>
									<PostSummaryItem
											key={post._id}
											post={post}/>
							)
						}
					</ul>
				</div>
			</div>
	);
};

export default PostSummaryList;