import { createSlice,createAsyncThunk,current } from '@reduxjs/toolkit'
import {fetchLeaveEntries,addNewLeaveBalance,updateLeaveBalance} from '/src/api/leaveAPI'
// import axios from 'axios'

const initialState = {
  leaves: [
            // {leaveName: "Casual",allowedDays:10},
            // {leaveName: "Sick",allowedDays:14}
          ],
  status: 'idle',
  error: null
}

export const getAllLeaveEntries = createAsyncThunk("leaveEntries/getLeaveEntries", async () => {
  try{
    const data= await fetchLeaveEntries()
    // console.log(data)
    return data
  } 
  catch(err){
    return err.message
  }

});

export const addNewLeave = createAsyncThunk("leaveEntries/addNewLeave", async (newLeave) => {
  try{
    console.log(newLeave)
    const data= await addNewLeaveBalance(newLeave)
    // console.log(newLeave)
    return data
  } 
  catch(err){
    return err.message
  }
});

export const updateLeave = createAsyncThunk("leaveEntries/updateLeave", async (leave) => {
  try{
    console.log(leave)
    const data= await updateLeaveBalance(leave)
    console.log(newLeave)
    return data
  } 
  catch(err){
    return err.message
  }
});

export const leaveEntrySlice = createSlice({
  name: 'leaveEntriesSlc',
  initialState,
  reducers: {
    // addLeave: (state,action) => {
    //     state.leaves.push(action.payload)
    //     // console.log(action.payload)
    // }
  },
  extraReducers(builder){
    builder
      .addCase(getAllLeaveEntries.pending,(state, action) => {
        state.status = "loading";
        console.log(state.status)
      })
      .addCase(getAllLeaveEntries.fulfilled,(state, action) => {
        state.status = "succeeded";
        // console.log(action.status)
        state.leaves=action.payload
      })
      .addCase(getAllLeaveEntries.rejected,(state, action) => {
        state.status = "failed";
        state.error = action.error.message
        // console.log(state.status)
      })
      .addCase(addNewLeave.fulfilled,(state, action) => {
        // action.payload.balanceDays= Number(action.payload.balanceDays)
        state.status = "succeeded";
        state.leaves.push(action.payload)
        // console.log(state.leaves)
      })
      .addCase(updateLeave.fulfilled,(state, action) => {
        const index= state.leaves.findIndex(e=>e.id==action.payload.id)
        state.leaves.splice(index,1,action.payload)
        state.status = "succeeded";

        // console.log(current(state).leaves)
      })
  }
})

// Action creators are generated for each case reducer function
// export const selectAllLeaves =(state)=>state.leaves

// export const { addLeave } = leaveEntrySlice.actions

export default leaveEntrySlice.reducer

