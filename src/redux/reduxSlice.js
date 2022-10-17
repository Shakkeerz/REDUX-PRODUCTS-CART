import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
        count :0 ,
        color:"red"
}
const counterSlice = createSlice({
    name:"counter",
    initialState: INITIAL_STATE,
    reducers:{
        increment :(state,action)=>{
            state.count += 1 
        },
    }
})

export const {increment} = counterSlice.actions
export default counterSlice.reducer