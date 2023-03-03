import React from "react";
import tuitList from "./tuit.json";
import TuitPostItem from "./tuit-post-item";

const TuitPostList = () => {
	return (
			<div className="align-items-center">
				<ul className="list-group">
					{
						tuitList.map(tuit =>
								<TuitPostItem
										key={tuit._key}
										tuit={tuit}/>
						)
					}
				</ul>
			</div>
	);
};

export default TuitPostList;