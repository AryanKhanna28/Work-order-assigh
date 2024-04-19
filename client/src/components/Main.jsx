import Buttons from "./Buttons"
import { useState } from "react";
import Try from "./Try";

const Body=()=>{

    const [category,setCategory]=useState("Overview"); 

    const handleCategory=(val)=>{
        setCategory(val);
    }  

    return (
        <div className="body">

            <Buttons category={category} handleCategory={handleCategory}/>

            { category==="Overview"? 
            <div className="main-container">
                <Try/>
            </div>
            : <h3 style={{margin:"40px 100px"}}>Hello World</h3>
            }

        </div>
       
    )
}

export default Body;