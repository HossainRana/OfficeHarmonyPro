import { createSlice,createAsyncThunk,current } from '@reduxjs/toolkit'
import {fetchEmployees} from '/src/api/employeeAPI'
// import axios from 'axios'

const initialState = {
  employees: [],
  status: 'idle',
  error: null
}

export const getAllEmployees = createAsyncThunk("employees/getEmployees", async () => {
    try{
      const data= await fetchEmployees()
      // console.log(data)
      return data
    } 
    catch(err){
      return err.message
    }
  
  });

export const employeeSlice = createSlice({
    name: 'employeeSlc',
    initialState,
    reducers: {
      // getEmployee: (state,action) => {
      //     state.employees=action.payload
      //     // console.log(action.payload)
      // }
    },
    extraReducers(builder){
      builder
        .addCase(getAllEmployees.pending,(state, action) => {
          state.status = "loading";
          // console.log(state.status)
        })
        .addCase(getAllEmployees.fulfilled,(state, action) => {
          state.status = "succeeded";
          // console.log(action.status)
          state.employees=action.payload
        })
        .addCase(getAllEmployees.rejected,(state, action) => {
          state.status = "failed";
          state.error = action.error.message
          // console.log(state.status)
        })
    }
  })
  
  // Action creators are generated for each case reducer function
  // export const selectAllLeaves =(state)=>state.leaves
  
  // export const { addLeave } = leaveEntrySlice.actions
  
  export default employeeSlice.reducer