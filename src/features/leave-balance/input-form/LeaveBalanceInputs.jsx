import { useContext, useEffect } from 'react';
import { Paper, TextField } from '@mui/material';
import Autocomplete from '@mui/material/Autocomplete';
import { useForm, Controller } from 'react-hook-form';  // Import Controller and useForm
import { useDispatch, useSelector } from 'react-redux';
import { addNewLeave, updateLeave } from '/src/features/leave-balance/leaveBalanceSlice';
import { LeaveBalanceContext } from '/src/features/leave-balance/LeaveBalanceContext';
import { CancelButton, SaveButton } from '/src/components/form-field/FormButton.jsx';
import { getAllEmployees } from '/src/features/employee-setup/employeeSlice'
import './LeaveBalanceInputs.css';

const initialValue = {
  employee: null,
  employeeId: 0,
  employeeName: '',
  leaveName: '',
  balanceDays: '',
};

const LeaveEntryInputs = () => {
  const { leaveData, setLeaveData } = useContext(LeaveBalanceContext);
  const employeeList = useSelector((state) => state.employeeStored);
  const dispatch = useDispatch();
  const { register, handleSubmit, setValue, formState: { errors }, reset, control }  = useForm({  // Destructure register from useForm
    defaultValues: initialValue,
  });
  // const { register, handleSubmit, setValue, formState: { errors }, reset, control } = useForm<OrderInputs>();

  useEffect(() => {
    dispatch(getAllEmployees());
  }, []);

  const onSubmit = (data) => {
    try {
      if (data.id === 0) {
        dispatch(addNewLeave(data));
      } else {
        dispatch(updateLeave(data));
      }
      setValue('employee', null);
      setValue('employeeId', 0);
      setValue('employeeName', '');
      setValue('leaveName', '');
      setValue('balanceDays', '');
    } catch (err) {
      console.error('Failed to save the post', err);
    }
  };

  useEffect(() => {
    setValue('employee', leaveData.employee);
    setValue('employeeId', leaveData.employeeId);
    setValue('employeeName', leaveData.employeeName);
    setValue('leaveName', leaveData.leaveName);
    setValue('balanceDays', leaveData.balanceDays);
  }, [leaveData, setValue]);

  return (
    <>
      <Paper style={{ padding: '1rem', width: '30%' }}>
        <h2>Leave Balance Entry</h2>
        <hr />
        <form onSubmit={handleSubmit(onSubmit)} className="inputContainer">
          <br />
          <Controller
            name="employee"
            control={control}
            defaultValue={null}
            render={({ field }) => (
              <Autocomplete
                options={employeeList.employees}
                getOptionLabel={(option) => option.employeeName ?? ''}
                isOptionEqualToValue={(option, value) => option === value}
                onChange={(e, newValue) => {
                  field.onChange(newValue);
                  setValue('employeeId', newValue?.id || 0);
                }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    margin='dense'
                    label="Select Employee"
                    error={!!errors.employee}
                    helperText={errors.employee?.message}
                  />
                )}
              />
            )}
          />

          <TextField
            name="leaveName"
            className="inputBox"
            label="Leave Name"
            margin='dense'
            type="text"
            {...register('leaveName', { required: 'Leave Name is required' })}  // Use register here
          />
          {errors.leaveName && <span className="error">{errors.leaveName.message}</span>}

          <TextField
            name="balanceDays"
            className="inputBox"
            type="number"
            label="Balance Days"
            margin='dense'
            {...register('balanceDays', { required: 'Balance Days is required' })}  // Use register here
          />
          {errors.balanceDays && <span className="error">{errors.balanceDays.message}</span>}

          <br />
          <div className="btnRow" style={{ display: 'flex' }}>
            <SaveButton type="submit" style={{ marginRight: '1rem' }}>
              Save
            </SaveButton>
            <CancelButton onClick={() => reset()}>Clear</CancelButton>
          </div>
        </form>
      </Paper>
    </>
  );
};

export default LeaveEntryInputs;
