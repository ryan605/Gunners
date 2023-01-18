import React from "react";
import NewItem from "../NewItem/NewItem";

function Home(){
    return(
        <div className="container mt-4 ms-4">
            <div className="row">
                <NewItem />
            </div>
        </div>
    )
}
export default Home