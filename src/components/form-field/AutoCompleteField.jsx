import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



export default function AutoCompleteField(props) {

    //destructure the props value for later use
    const{onChange,value,options,renderInput,sx,...others}=props

//   const [value, setValue] = React.useState(options[0]);
//   const [inputValue, setInputValue] = React.useState('');

  return (
    <div>
      <Autocomplete
        value={value}
        onChange={onChange}
        // inputValue={inputValue}
        // onInputChange={onInputChange}
        id="controllable-states-demo"
        options={options}
        sx={ sx }
        renderInput={renderInput}
        {...others}
      />
    </div>
  );
}

// create a autocomplete dropdown reusable component with MUI
