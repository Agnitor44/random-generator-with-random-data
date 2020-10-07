import React, {useState}from 'react'
import '../styles/panel.css'
import Dodaj from './dodaj'
const Panel = () => {

    const [active, setActive] = useState(false)
   const handleActive = () => {
        setActive(active => !active)
    }
    return(
        <div className = 'panel'>
            
            
            <button onClick = {handleActive}>{active? "Hide" : "Show"}</button>


            {active? <Dodaj/>: null}
            
        </div>
    )
}
export default Panel