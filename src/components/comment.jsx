import React from 'react'
import { useState } from 'react'
import {useComment } from '../App'
import '../styles/comments.css'


const Comment = () => {
    const commentBox = useComment()
    const [profileActive, setProfileActive] = useState(false)
    const [whitch, setWhitch] = useState(-1)
    const handleActive = (e) => {

        console.log(e.target)
        const id = commentBox.findIndex(item => `<img src="${item.results[0].picture.medium}">` === e.target.outerHTML)
        setWhitch(commentBox[id])

        setProfileActive(prev => !prev)
      
     
       
      
       
    }



    
    const comments = commentBox.map(item => 
    
    <div  key = {item.info.seed + Math.random()} className = 'newComment'>
        <img onClick = {handleActive}  src = {item.results[0].picture.medium}/>
        <h3>{item.results[0].name.first} {item.results[0].name.last}</h3>
        <p>{item.info.seed}</p>
        </div>  )
        
      
        const create = (tab) => {
            const profiles = ( <div   className = 'profile'>

    <section className = 'left'>
    <img src = {tab.results[0].picture.large}/>
    <h3>{tab.results[0].name.first} {tab.results[0].name.last}</h3>
    
      <div className = 'contact'>
    <h4>{tab.results[0].cell}</h4>
    <h4>{tab.results[0].location.city} {tab.results[0].location.postcode}</h4>
    <h4>{tab.results[0].location.country}</h4>
    </div>
    
    </section>
    
    
    <div className ='login'>
    <h1>{tab.results[0].login.username}</h1>
    <h4>{tab.results[0].email}</h4>
    
    </div>
    <h1 className= 'date'>{(tab.results[0].dob.date).substr(0, 10)}</h1>
    <button onClick = {handleActive}>Back</button>
    </div>)
    return profiles
            
        }

    return(
        <>
        {profileActive ? 
        
        
   
        
    create(whitch)
        
        
        : comments}
        </>
    )
}
export default Comment


