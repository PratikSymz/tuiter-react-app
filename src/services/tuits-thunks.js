import {createAsyncThunk} from "@reduxjs/toolkit";
import * as service from "./tuits-service";

/**
 * Create thunk for findTuits.
 * give unique name, thunk invokes service function. Returned data goes in redux action's payload.
 */
export const findTuitsThunk = createAsyncThunk(
		'tuits/findTuits',
		async () => await service.findTuits()
);

export const deleteTuitThunk = createAsyncThunk(
		'tuits/deleteTuit',
		async (tuitId) => {
			await service.deleteTuit(tuitId)
			// return tuit ID so, we can remove tuit from reducer's store
			return tuitId
		}
);

export const createTuitThunk = createAsyncThunk(
		'tuits/createTuit',
		async (tuit) => {
			return await service.createTuit(tuit)
		}
);

export const updateTuitThunk = createAsyncThunk(
		'tuits/updateTuit',
		async (tuit) => await service.updateTuit(tuit)
);