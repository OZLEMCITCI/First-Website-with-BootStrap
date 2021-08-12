import React, { useState, useEffect } from 'react';
import "./UseEffectFetch.css"
import Ulke from "./Ulke.js"


const UseEffectFetch = () => {

    const [ulkeler, setulkeler] = useState([]);
    
    const [ulkeadi, setUlkeadi] = useState("");

    





    useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all")
            .then((res) => res.json())
            .then(data => setulkeler(data))
            .catch((err) => console.log(err));
        
    }, []);
    console.log(ulkeler);

    
    return (
        <div>
            
            <nav className="navbar navbar-light bg-light">
                
                <div className="container-fluid d-flex justify-content-center">
                    
                    <a className="navbar-brand">Country Name:</a>
                    <form className="d-flex">
                        
                        <input placeholder="Search" type="text" name="ad" required=""   onChange={(event)=>setUlkeadi(event.target.value)}></input>
  
      
                    </form>
    
    
                </div>
  
            </nav>

            
            
  
            
            <div className="grid">
          
                {

                    ulkeler.filter(
                        (ulke) => {
                            if (ulkeadi === "") {
                                return ulke;
                            } else if (ulke.name.toLowerCase().includes(ulkeadi.toLocaleLowerCase())) {
                                return ulke;
                            }
                        }
                    ).map((ulke) => {
            
                        //const { id, name, capital, flag } = ulke;
    return (
        <Ulke ulke={ulke} />
    )

                    })}



            
    
    
            </div>
    
        </div>
        
        
    
    )
}

export default UseEffectFetch
