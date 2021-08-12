import React from 'react'

const Ulke = (props) => {


    const { id, name, capital, flag } = props.ulke;
    return (
        <div className="text-center " key={id}>
                                <h4>{name}</h4>
                                <p>{capital}</p>
                                <img className="" src={flag} width="50%" alt="resim" />
                            
                            </div>
    )
}

export default Ulke;
