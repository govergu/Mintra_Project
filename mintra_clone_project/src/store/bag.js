import { createSlice} from '@reduxjs/toolkit'
const bagSlice = createSlice({
    name: 'bag',
    initialState: [],
    reducers: {
        addtobag: (store,actions) =>{
            store.push(actions.payload); 
        },
        removefrombag: (store,actions) =>{
            return store.filter(itemId => itemId!==actions.payload); 
        }
    }
})

export const bagActions = bagSlice.actions;
export default bagSlice;