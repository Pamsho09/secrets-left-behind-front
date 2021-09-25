import React from 'react'
import styled  from 'styled-components'
const InputC =styled.input` 
min-height: 2em;
padding: 10px;
color: #b3b3b3;
font-weight: 500;
background: rgba( 255, 255, 255, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 5.5px );
-webkit-backdrop-filter: blur( 5.5px );
border-radius: 10px;
border: none;
outline:none;
`
interface IProps{
    placeholder:string
    defaulValue?:string
    type:string
    onChange?:any
}
function Input({placeholder,type,defaulValue,onChange}:IProps) {
    return (
        <>
        <InputC placeholder={placeholder} onChange={onChange} value={defaulValue} type={type}/>
            
        </>
    )
}

export default Input
