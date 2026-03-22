import React, {useEffect, useState} from "react";

const Card2 = ({receta,onVolver}) => {

    
 return(
        <div className="container-row text-center mt-5">
            <div className="card mb-3" style={{width: 500}}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={receta.image} className="img-fluid rounded-start" alt={receta.name}/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{receta.name}</h5>
                            <p className="card-text">{receta.ingredients}</p>
                            <p className="card-text">{receta.instructions}</p>
                        </div>
                        <span onClick={onVolver}>x</span>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Card2;