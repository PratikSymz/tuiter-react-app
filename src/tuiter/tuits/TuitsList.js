import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findTuitsThunk} from "../../services/tuits-thunks";
import TuitItem from "./TuitItem";

const TuitsList = () => {
	// grab tuits and loading flag from reducer
	const {tuits, loading} = useSelector(state => state.tuitsData);
	
	/*
		on component load, invoke find tuits thunk to fetch tuits and put them in the reducer's store so,
		 we can extract them with useSelector() and render the tuits here.
	 */
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(findTuitsThunk())
	}, []); // eslint-disable-line react-hooks/exhaustive-deps
	
	return (
			<div className="align-items-center">
				<ul className="list-group">
					{
						// if loading flag is true, then show a loading message while data is still coming back from the server
							loading && <li className="list-group-item">Loading</li>
					}
					{
						tuits.map(tuit =>
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