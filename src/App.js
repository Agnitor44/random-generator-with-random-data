import React, {Component, useEffect, useState, createContext, useContext} from 'react';

import Frame from './components/frame'
import Panel from './components/panel'

const Writen = createContext()
const AppContext = createContext()
  const AppContextFuncion = createContext()
  const KobietaDown = createContext()
  const MezczyznaDown = createContext()
  const Tekst = createContext()

 export const useText = () => {
   return useContext(Tekst)
 }
  export const useWriten = () => {
    return useContext(Writen)
  }
  export const useMezczyzna = () => {
    return useContext(MezczyznaDown)
  }
  export const useKobieta = () => {
    return useContext(KobietaDown)
  }
  export const useComment = () => {
    return useContext(AppContext)
  }
  export const useAddComment = () => {
    return useContext(AppContextFuncion)
  }
const App = () => {
    const [newcomment, setNewcomment] = useState([])
    const [kobieta, setKobieta] = useState(false)
    const [mezczyzna, setMezczyzna] = useState(false)
    const [inpVal, setInpVal] = useState('')


    const write = (e) => {
      setInpVal(e.target.value)
  }


    const handK = () => {
      setKobieta(prev => !prev)
}
const handM = () => {
      setMezczyzna(prev => !prev)
}



        const commentAdd = () => {
        if(inpVal) {
        fetch("https://randomuser.me/api/?results=1").
        then(response => response.json()).
        then(data => {
          if(data.results[0].gender !== 'male' && mezczyzna) commentAdd()
          else if(data.results[0].gender !== 'female' && kobieta) commentAdd()
          else {
            data.info.seed = inpVal
            setNewcomment(newcomment =>  [...newcomment, data] )
            console.log(inpVal)
            
          }
          
         
         
        })
        setInpVal('')
        }
        else alert("Error: write your comment")
        if(mezczyzna && kobieta) alert("Error: only one gender require")
      }
   
   

    return(
        <div className = 'wrapper'>
           
            <Tekst.Provider value = {inpVal}>
            <Writen.Provider value = {write}>
            <MezczyznaDown.Provider value = {handM}>
            <KobietaDown.Provider value = {handK}>
            <AppContext.Provider value = {newcomment}>
            <AppContextFuncion.Provider value = {commentAdd}>
        
        <Panel/>
        <Frame/>
        </AppContextFuncion.Provider>
        </AppContext.Provider>
        </KobietaDown.Provider>
        </MezczyznaDown.Provider>
        </Writen.Provider>
        </Tekst.Provider>
       
        </div>
        
    )


}
export default App
