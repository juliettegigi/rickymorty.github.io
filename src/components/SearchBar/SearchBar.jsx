import { useState } from "react";
export default function SearchBar(props){

const [id, setId] = useState(0);

const handleInput=(e)=>{
   setId(e.target.value);
}
const handleRandom=()=>{
    let id=Math.floor((Math.random()*826)+1);
    setId(id);
    props.onSearch(id);
}
    return(
      
        <div>
            <label>Id:
            <input type="number" value={id} onChange={handleInput}></input>
            </label>
            <button onClick={()=>{props.onSearch(id)}}>Agregar</button>
            <button onClick={handleRandom}>Add Random</button>
        </div>
       

      
    )

}