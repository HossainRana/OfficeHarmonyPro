import LeaveBalanceInputs from './input-form/LeaveBalanceInputs'
import LeaveBalanceList from './leave-list/LeaveBalanceList'
import { LeaveBalanceContext } from './LeaveBalanceContext'
import { useState } from 'react'

const LeaveBalanceLayout = () => {
  const [leaveData, setLeaveData]= useState({
    id:0,
    leaveName:'',
    balanceDays:''
  })

  return (
    <div style={{display: 'flex',flexDirection: 'row', paddingTop: '3rem'}}>
      <LeaveBalanceContext.Provider value={{leaveData,setLeaveData}}>
          <LeaveBalanceInputs/>
          <LeaveBalanceList/>
      </LeaveBalanceContext.Provider>
    </div>
  )
}

export default LeaveBalanceLayout