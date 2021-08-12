import React from 'react';
import { useState, useEffect } from 'react';
import "./Kisiler.css"

const Kisiler = () => {

    const [kisiler, setkisiler] = useState([]);
    const [hata, sethata] = useState(false);
    const [status, setstatus] = useState(200)
    useEffect(() => {
        fetch("https://api.github.com/users").then((res) => {
            if (res.status >= 200 && res.status <= 299) {
                return res.json();
            } else {
                sethata(true);
                setstatus(res.status)
            }
         }).then((data) => setkisiler(data));
        
    }, [])

    if (!hata) {
        return (
        <div >
            <h1 className="text-center bg-warning">GitHup Users</h1>
            <div className="grid">
                 {
                kisiler.map((kisi) => {
                    const { login, avatar_url ,id,html_url} = kisi;

                    return (<div key={id}>
                        <h2>{login}</h2>
                        <h4>{ html_url}</h4>
                        <img alt="resim" src={avatar_url} style={{ width:"150px"} }/>
                    </div>)
                })
         }   
            </div>
           
            
        </div>
    )
    } else {
        return (<div><h1>Veriler cekilemedi </h1> <h2>{ status}</h2></div>)
    }
    
}

export default Kisiler
