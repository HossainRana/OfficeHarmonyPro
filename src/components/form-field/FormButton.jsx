import React from 'react'
import Button from '@mui/material/Button';
import SaveAltOutlinedIcon from '@mui/icons-material/SaveAltOutlined';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

import CancelIcon from '@mui/icons-material/Cancel';

export function SaveButton(props) {
    return (
      <div>
          <Button  
              variant='contained' 
              color='primary'
              size='large'
              endIcon={<SaveAltOutlinedIcon/>}
              style={props.style}
  
              {...props}
              >{props.children}
          </Button> 
      </div>
    )
  }
  
  export function EditButton(props) {
    return (
      <div>
          <Button  
              variant='contained' 
              size='large'
              color='secondary'
              endIcon={<BorderColorIcon/>}
              style={props.style}
              {...props}
              >{props.children}
          </Button> 
      </div>
    )
  }
  
  export function DeleteButton(props) {
    return (
      <div>
          <Button  
              variant='contained' 
              size='large'
              color='warning'
              endIcon={<DeleteForeverIcon/>}
              style={props.style}
              >{props.children}
          </Button> 
      </div>
    )
  }
  
  export function CancelButton(props) {
    return (
      <div>
          <Button  
              variant='contained' 
              size='large'
              color='error'
              endIcon={<CancelIcon/>}
              style={props.style}
              onClick={props.onClick}
              >{props.children}
          </Button> 
      </div>
    )
  }
  