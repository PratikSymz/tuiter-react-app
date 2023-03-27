import {createSlice} from "@reduxjs/toolkit";
import tuitArray from "../data/tuits.json";

const tuitsSlice = createSlice({
	name: 'tuits',
	initialState: tuitArray
});

export default tuitsSlice.reducer;