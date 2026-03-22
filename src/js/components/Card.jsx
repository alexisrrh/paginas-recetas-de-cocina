import React, {useEffect, useState} from "react";
import Card2 from "./Card2";

const Card = () => {

    const [receta, setReceta] = useState([]);
    const [carta, setCarta] = useState(null);

    const infoReceta = () => {
        fetch('https://dummyjson.com/recipes', {method: "GET"})
        .then((res) => res.json())
        .then((data) => setReceta(data.recipes))
        .catch((error) => console.log(error));
    }
    
    useEffect(()=>{
        infoReceta()
    },[]);

const Borrar=(id)=>{

        fetch(`https://dummyjson.com/recipes/${id}`, {method: "DELETE"})
        .then((response) =>{ console.log("status:", Response.status)
            if(response.ok){
                setReceta(receta.filter(item=> item.id !== id))
            }
      else{
        console.log("error al borrar")}
      })
        .catch((error) => console.log(error));

}



    return(
    
<div className="container-row text-center mt-5">

    <ul className="row justify-content-center">
        {receta.map((item) => (
            <li className="col-md-4 mb-4 d-flex justify-content-center" key={item.id}>
                {carta && carta.id === item.id?  (<Card2 receta={carta} onVolver={() => setCarta(null)}/>) :(
                
                <div className="card" style={{width: 400}} key={item.id}>
                    <img src={item.image} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.difficulty}</p>
                                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                                  <button type="button" class="btn btn-dark"><i class="fa-light fa-star"></i></button>
                                  <button type="button" class="btn btn-dark"onClick={()=>setCarta(item)}>ver</button>
                               <button type="button" class="btn btn-dark" onClick={()=>Borrar(item.id)}>eliminar</button>
                               
                                </div>
                        </div>
                        
                </div> 
                )}
            </li>
              ))}
        </ul>
       
    </div>
    
    )
}

export default Card;
