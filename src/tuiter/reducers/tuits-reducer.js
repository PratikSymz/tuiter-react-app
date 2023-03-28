import {createSlice} from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

// Object representing the currently logged-in user which contains profile information
const currentUser = {
	"profileImg": "profile_verge.webp",
	"userName": "NASA",
	"handle": "@nasa",
}

// A template tuit object with some default values and copy over the fields userName, handle and image from the
// currentUser
const templateTuit = {
	...currentUser,
	"timeAgo": "2h",
	"tweet": "Space",
	"numComments": "0",
	"numRetweets": "0",
	"numLikes": "0",
	"liked": false
}

const tuitsSlice = createSlice({
	name: 'tuits',
	initialState: tuitArray,
	reducers: {
		createTuit(state, action) {
			state.unshift({
				// Append the new tuit in the payload at the beginning of the array of tuits contained in the state.
				...action.payload,
				...templateTuit,
				_id: (new Date()).getTime(),
			})
		},
		
		deleteTuit(state, action) {
			const index = state.findIndex(tuit => tuit._id === action.payload);
			state.splice(index, 1);
		}
	}
});

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;