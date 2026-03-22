import React, {useEffect, useState} from "react";

const Card2 = ({receta}) => {


    return(
    
<div className="container-row text-center mt-5">

    <ul className="row justify-content-center">
        {receta.map((item) => (
            <li className="col-md-4 mb-4 d-flex justify-content-center" key={item.id}>
                <div className="card mb-3" style={{width: 500}}>
                    <div className="row g-0">
                        <div className="col-md-4">
                        <img src={item.image} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.ingredients}</p>
                            <p className="card-text">{item.instructions}</p>
                        </div>
                        </div>
                    </div>
                </div>
            
            </li>
              ))}
        </ul>
    </div>
    
    )
}

export default Card2;