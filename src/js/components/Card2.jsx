import React, {useEffect, useState} from "react";

const Card2 = ({receta,onVolver}) => {


    return (
        <div className="modal show fade d-block" tabIndex="-1">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{receta.name}</h5>
                        <button type="button" className="btn-close" onClick={onVolver}></button>
                    </div>

           
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={receta.image} className="img-fluid rounded" alt={receta.name}/>
                            </div>

                            <div className="col-md-8">
                                <p>
                                    <strong>Ingredientes:</strong><br />
                                    {receta.ingredients}
                                </p>

                                <p>
                                    <strong>Instrucciones:</strong><br />
                                    {receta.instructions}
                                </p>
                            </div>
                        </div>
                    </div>

           
                    <div className="modal-footer">
                        <button className="btn btn-secondary" onClick={onVolver}> Cerrar</button>
                    </div>

                </div>
            </div>
        </div>
    );
};


export default Card2;