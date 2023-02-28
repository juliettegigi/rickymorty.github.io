import { useState,useEffect } from "react"
import { useParams,useNavigate } from "react-router-dom"
import s from "./detail.module.css"
export default function Detail(props){
    const {detailId}=useParams();
    const [character, setCharacter] = useState({});
    const [origin,setOrigin]=useState({});
   
    useEffect(() => {
       
       (async()=>{
        const char=await fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          
            if (char) {
              setOrigin(char.origin);
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
        
        })();

        return setCharacter({});
      }, [detailId]);
      /*Este código es el que buscará al personaje de la API cada vez que el componente se monte. Y luego, cada vez que se desmonte, borrará su información.*/
    

  return(
    <>
    <div className={s.div1}>
       
        <img src={character.image} alt={character.name} className={s.image}/>
      <div className={s.div2}>
       <h1>Name: {character.name}</h1>
       <p>Status: {character.status}</p>
       <p>Specie: {character.species}</p>
       <p>Gender: {character.gender}</p>
       <p>Origin: {origin.name}</p>
       {/*<p>Origin:{character.origin.name}</p>*/}
       
       </div>
    </div>
  
    </>
  )
}