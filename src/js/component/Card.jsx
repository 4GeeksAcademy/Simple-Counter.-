import React from "react";

const Card = (props) => {
    return(
        <div className="card bg-black text-light">            
            <div className="card-body">
                <h5 className="card-number">{props.number || "0"}</h5>
            </div>
        </div>
    )
}

export default Card;
