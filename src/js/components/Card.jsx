import React, {useEffect, useState} from "react";
import Card2 from "./Card2";

const Card = () => {

    const [receta, setReseta] = useState([]);
    const [carta, setCarta] = useState(null);

    const infoReceta = () => {
        fetch('https://dummyjson.com/recipes', {method: "GET"})
        .then((res) => res.json())
        .then((data) => setReseta(data.recipes))
        .catch((error) => console.log(error));
    }
    
    useEffect(()=>{
        infoReceta()
    },[]);

    const handleChange = (e) => {

    }

    return(
    
<div className="container-row text-center mt-5">

    <ul className="row justify-content-center">
        {receta.map((item) => (
            <li className="col-md-4 mb-4 d-flex justify-content-center" key={item.id}>
                <div className="card" style={{width: 400}} key={item.id}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.difficulty}</p>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio1" autoComplete="off" readOnly/>
                                    <label className="btn btn-outline-primary" htmlFor="btnradio1" onChange={()=>setCarta(item)}>Ver</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio2" autoComplete="off"/>
                                    <label className="btn btn-outline-secondary" htmlFor="btnradio2">Editar</label>

                                    <input type="radio" className="btn-check" name="btnradio" id="btnradio3" autoComplete="off"/>
                                    <label className="btn btn-outline-danger" htmlFor="btnradio3">Eliminar</label>
                                </div>
                        </div>
                        
                </div> 
            
            </li>
              ))}
        </ul>
        {carta && <Card2 carta={carta}/>}
    </div>
    
    )
}

export default Card;
