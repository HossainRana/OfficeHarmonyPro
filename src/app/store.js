import { configureStore } from '@reduxjs/toolkit'
import leaveEntryReducerRef from '../features/leave-balance/leaveBalanceSlice'
import employeeSlice from '../features/employee-setup/employeeSlice'

export const store = configureStore({
  reducer: {
    leaveEntriesStored : leaveEntryReducerRef,
    employeeStored : employeeSlice
  },
})