import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
    name: 'card',
    initialState: {
        item:[]
    },
    reducers: {
        addItem:(state,action)=>{
            state.item.push(action.payload)
             
        },
        removeItem: (state)=>{
            state.item.pop()
        },
        clearCard: (state) => {
            state.item = [];
          },
      
        
    }
})

export const {addItem,removeItem,clearCard} = cardSlice.actions;
export default cardSlice.reducer;