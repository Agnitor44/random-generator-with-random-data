import React, {useState, createContext, useContext} from 'react'
import {useKobieta, useMezczyzna} from '../App'
import '../styles/plec.css'
const Plec = () => {

const handM = useMezczyzna()
 const handK = useKobieta()


return(
  
  <div className = 'plec'>
    <label>Woman<input type = 'checkbox'  onChange = {handK}/></label>
    <label>Man<input type = 'checkbox'    onChange = {handM}/></label>
 </div>
)

}

export default Plec