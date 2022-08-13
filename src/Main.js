import React from "react"
import Movies from "./Movies"
import data from "./data";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import Watch from "./Watch";
export default function Main(){
    
   
    const datasss=data.map(item=>{
       return (
        
       <Movies 
        key={item.id}
        name={item.name}
        min={item.minutes}
        img={item.image}
        vid={item.video}
        rated={item.rated}
        />
        
        )
    })
    

    
    return (
         <Router>
        <Routes>
        <Route  path='/' element={<Movies /> , datasss}  exact/>
        <Route  path='/watch' element={<Watch /> } exact/>
        </Routes>
        
          
       
       </Router>
    )
}