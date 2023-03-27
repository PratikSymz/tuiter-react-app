import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";

const TuitsList = () => {
	const tuitList = useSelector(state => state.tuits);
	
	return (
			<div className="align-items-center">
				<ul className="list-group">
					{
						tuitList.map(tuit =>
								<TuitItem
										key={tuit._id}
										tuit={tuit}/>
						)
					}
				</ul>
			</div>
	);
};

export default TuitsList;