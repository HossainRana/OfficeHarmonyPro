import { configureStore } from '@reduxjs/toolkit'
import leaveEntryReducerRef from '../features/leave-entry/leaveEntrySlice'
import employeeSlice from '../features/employee-setup/employeeSlice'

export const store = configureStore({
  reducer: {
    leaveEntriesStored : leaveEntryReducerRef,
    employeeStored : employeeSlice
  },
})