import React from 'react'
import { TextField } from '@mui/material'

const InputField = (props) => {
    //destructure the props value for later use
    const{style,type,id,label,name,className,multiline,rows,placeholder,onChange,value,...others}=props
  return (
    <div>
        <TextField 
            style={style}
            type={type} 
            label={label}  
            variant="outlined"  
            onChange={onChange}
            className={className}
            name={name}
            multiline={multiline}
            rows={rows}
            margin='normal'
            placeholder={placeholder}
            value={value}
            {...others}
        />
    </div>
  )
}

export default InputField