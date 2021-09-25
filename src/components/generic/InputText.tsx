import React from 'react'
import styled  from 'styled-components'
const InputC =styled.textarea` 
height:350px;
width: 80%;
padding: 10px;
color: #b3b3b3;
font-size: 2em;
font-weight: 500;
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5.5px );
font-family: 'Montserrat', sans-serif;
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 10px;
border: none;
outline:none;
`
interface IProps{
    placeholder:string
    defaulValue?:string
    onChange:any
}


function InputText({placeholder,defaulValue,onChange}:IProps) {
  
    return (
        <>
        <InputC placeholder={placeholder} value={defaulValue} onChange={onChange} />
            
        </>
    )
}

export default InputText
