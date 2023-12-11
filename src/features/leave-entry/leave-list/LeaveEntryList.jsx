import React,{useEffect} from 'react'
import { Paper,Table,TableContainer,TableHead,TableRow,TableCell,TableBody } from '@mui/material'
import { useSelector,useDispatch } from 'react-redux'
import {getAllLeaveEntries} from '../leaveEntrySlice'
import {EditButton} from '/src/components/form-field/FormButton.jsx'
import { LeaveEntryContext } from '../LeaveEntryContext'
import { useContext } from 'react'

const LeaveEntryList = () => {
    // getting employees from store
    const employeeList = useSelector((state) => state.employeeStored)

    const leaveDayEntries= useSelector((state)=>state.leaveEntriesStored)
    const dispatch = useDispatch()

    const headers=[{name:'Leave Name',id:1},{name:'Balance Days',id:2},{name:'Employee',id:3},{name:'Action',id:4}]

    useEffect(() => {
        dispatch(getAllLeaveEntries())
    }, [])
    // console.log(leaveDayEntries)
    //using context
    const {leaveData, setLeaveData}= useContext(LeaveEntryContext)


    // const [rowVal,setRowVal]=useState([{name:'kuddus', age:12},{name:'belal', age:15}])
  return (
    <>
        {/* <Button onClick={e=>dispatch(getAllLeaveEntries())}>Get Leave</Button> */}
        <Paper style={{margin:'1rem', padding:'1rem', width:'70%'}}>
            <h2 style={{margin:0}}>Leave Types List</h2><br/><hr/>

          {leaveDayEntries.status !="succeeded" && <h3 align="center">Loading....</h3>}
          {leaveDayEntries.status =="succeeded" &&             
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                <TableCell  style={{fontWeight:'bold'}} align="right">SL</TableCell>
                  {
                    headers.map(header=>
                      <TableCell key={header.id} style={{fontWeight:'bold'}} align="center">{header.name}</TableCell>
                    )
                  }
                </TableRow>
              </TableHead>
              <TableBody>
                
                {leaveDayEntries.leaves.map((leave,index) => (
                  <TableRow
                    key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell align="right">{index+1}</TableCell>
                    <TableCell align="center">{leave.leaveName}</TableCell>
                    <TableCell align="center">{leave.balanceDays}</TableCell>
                    <TableCell align="center">{ leave.employeeName}</TableCell>
                    <TableCell align="center"><EditButton onClick={()=>setLeaveData(leave)}>Modify</EditButton></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>}
      </Paper>
    </>
  )
}

export default LeaveEntryList