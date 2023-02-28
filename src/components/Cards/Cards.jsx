import Card from "../Card/Card"
import s from "./cards.module.css"

export default function Cards(props){
   

    return(
        <div className={s.padre}>
           
           
            {     props.personajes.map((personaje,i)=>{
                  return  <div className={s.caja}>
                  <h3>Id: {personaje.id}</h3>
                  <Card name={personaje.name}
                        species={personaje.species}
                        gender={personaje.gender}
                        image={personaje.image}
                        onClose={props.onClose}
                        id={personaje.id}
                        key={`${personaje.name}-${i}`}
                  />
                  </div>
            })
            
            }
          
              
        </div>
    )
}