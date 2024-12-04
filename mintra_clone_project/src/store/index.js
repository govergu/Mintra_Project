import {configureStore} from '@reduxjs/toolkit'
import itemSlice from './itemSlice';
import FetchSlice from './fetching';
import bagSlice from './bag';



const myntraStore = configureStore({
    reducer: {
        items: itemSlice.reducer,
        fetchStatus: FetchSlice.reducer,
        bag: bagSlice.reducer
     }

})

export default myntraStore;

