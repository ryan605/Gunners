import React from "react";

const NewItem = () =>{
    return(
    <div className="col-3 p-1">
        <div className="card">
            <img src="" className="card-img-top"alt="gunners"></img>
            <div className="card-body ">
                <h3 className="card-title">{"HELLO NEWS"}</h3>
                <p class="card-text">{"something random ....."}</p>
                <a target={"_blank"} href="#" class="btn btn-warning">{"VISIT PAGE"}</a>
            </div>
        </div>
    </div>
    )
}
export default NewItem