import React from 'react'
import styled from 'styled-components'
import CreateGame from './CreateGame'
const ModalC =styled.div`
width: 100%;
background-color: #ffffff2d;
height: 100vh;
position: fixed;
top:0;
display: grid;
place-items: center;


`
interface IProps{
    type:string
}

function Modal({type}:IProps) {
    const TypeModals:any={
        CREATE :<CreateGame/>
    }
    return (
        <ModalC>
            {TypeModals[type]}
        </ModalC>
    )
}

export default Modal
