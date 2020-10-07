import React, {useContext, useState, createContext} from 'react'
import '../styles/dodaj.css'
import {useComment, useAddComment} from '../App'
import Plec from './plec'
import {useWriten} from '../App'
import {useText} from '../App'

const Dodaj = () => {


const inpVal = useText()
const write = useWriten()
const handler =  useAddComment()
const comment = useComment()



    return(
    <div className = 'dodaj'>
        
        <input onChange = {write} value = {inpVal}/>
        <button onClick = {handler}>Add comment</button>
        <Plec/>
       
      
       
    </div>
        )
}
export default Dodaj