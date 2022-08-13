import React from "react";
import "./style.css"
export default function Navbar(){
let [formData,setFormData]= React.useState({search:""});
function handleChange(event){
   setFormData(prevFormdata => {
    return { 
        ...prevFormdata ,
            [event.target.name] : event.target.value
    }
   })
}

    return(
        <nav className="navv">
         <h2 className="nitflix">Nitflix</h2>
         <form className="form">
         <input
          type="text"
          placeholder="Search..."
          name="search"
          value={formData.search}
          onChange={handleChange}
         />
         </form>
         </nav>
    );
};