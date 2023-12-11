import React,{ useState } from 'react'
import './LeaveApplication.css'
import InputField from '../../components/form-field/InputField'
import Paper from '@mui/material/Paper';
import { SaveButton,CancelButton } from '../../components/form-field/FormButton.jsx';

const LeaveApplication = () => {
    //today's date formated as like material date field
    const dateToday=new Date().toISOString().slice(0, 10)

    const initialValue={
        applicationNo:'',
        employeeName:'',
        leaveReason:'',
        fromDate:dateToday,
        toDate:dateToday,
    }

    //formValues state initialize with initial value
    const [formValues, setFormValues]=useState(initialValue)

    //input fields property list for dynamic property based on value
    const inputs=[
      {
        id:1,
        name:'applicationNo',
        label:'Application No',
        type:'text'
      },
      {
        id:2,
        name:'employeeName',
        label:'Employee Name',
        type:'text'
      },
      {
        id:3,
        name:'fromDate',
        label:'From Date',
        type:'date'
      }
      ,
      {
        id:4,
        name:'toDate',
        label:'To Date',
        type:'date'
      },
      {
        id:5,
        name:'leaveReason',
        label:'Leave Reason',
        type:'text',
        multiline: true,
        rows:3 
      },
    ]

    //onchange set property value of targeted property
    const onChange=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
        console.log(formValues)
    }
    //clear fileds on button click
    const clearFields=()=>{
        setFormValues({...formValues,...initialValue})
        
    }
    //handle form submit
    const handleSubmit= async (e)=> {
        e.preventDefault()
        console.log(formValues) 
    }
  return (
    <div>
        <h1>Leave Application</h1>
        <Paper elevation={3} style={{margin:'3rem'}}>
            <form className='apContainer' onSubmit={handleSubmit}>
                {
                    inputs.map((input)=>(
                        <InputField 
                            key={input.id} 
                            {...input} 
                            value={formValues[input.name]}
                            className='inputBoxAp'
                            onChange={onChange}
                        />
                    ))
                }
                <div className='inputBoxAp'>
                    <SaveButton type='submit'>Save</SaveButton>
                    <CancelButton onClick={clearFields}>Clear</CancelButton>
                </div>
            </form>
        </Paper>
    </div>
  )
}

export default LeaveApplication

