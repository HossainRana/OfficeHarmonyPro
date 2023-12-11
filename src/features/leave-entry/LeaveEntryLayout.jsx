import LeaveEntryInputs from './input-form/LeaveEntryInputs'
import LeaveEntryList from './leave-list/LeaveEntryList'
import { LeaveEntryContext } from './LeaveEntryContext'
import { useState } from 'react'

const LeaveEntryLayout = () => {
  const [leaveData, setLeaveData]= useState({
    id:0,
    leaveName:'',
    balanceDays:''
  })

  return (
    <div style={{display: 'flex',flexDirection: 'row', paddingTop: '3rem'}}>
      <LeaveEntryContext.Provider value={{leaveData,setLeaveData}}>
          <LeaveEntryInputs/>
          <LeaveEntryList/>
      </LeaveEntryContext.Provider>
    </div>
  )
}

export default LeaveEntryLayout