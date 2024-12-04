import { createSlice} from '@reduxjs/toolkit'
const FetchSlice = createSlice({
    name: 'fetch',
    initialState: {
        fetchDone: false, //false ' Pending' true: 'done'
        currentlyFetching: false
    },
    reducers: {
        markFetchingStarted: (state) =>{
           state.currentlyFetching = true;
        },
        markFetchingDone: (state) =>{
            state.fetchDone = true;
        },
        markFetchingFinished: (state) =>{
            state.currentlyFetching = false;
        }
    }
})

export const FetchActions = FetchSlice.actions;
export default FetchSlice;