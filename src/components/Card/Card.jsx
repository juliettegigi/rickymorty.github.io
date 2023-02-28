import s from './card.module.css'
import { useState } from 'react';
import flecha from "../../assets/arrow-down-circle.svg"
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { useEffect } from 'react';
import {addFavorite,deleteFavorite} from '../../redux/actions/actionsCreator'
const estilo={
  color:"chartreuse",
  textShadow:"black 8px 10px 4px", 
  textAlign:"center"

}


function Card(props){
    
  const [isFav, setIsFav] = useState({isFav:false,img:"🤍"});

  useEffect(() => {
    console.log("renderixando card ");
    console.log("favorites ",props.myFavorites);
    if(props.myFavorites?.some((fav) => (fav.id === props.id))) 
       setIsFav({isFav:true,img:"💗"});
       
  }
 , [props.myFavorites]);

  const handleFavorite=()=>{

    if(isFav.isFav){
      setIsFav({isFav:false,img:"🤍"});
      props.deleteFavorite(props.id);
    } 
    else{
      setIsFav({isFav:true,img:"💗"});
      props.addFavorite({
        species:props.species,
        gender:props.gender,
        image:props.image, 
        id:props.id,
        name:props.name
     })
    }
  
  }

    return(
     
        <div className={s.div}>
     
            <div className={s.div1}>
            <button onClick={handleFavorite} className={s.boton+" "+s.cora} >{isFav.img}</button>

          { props.onClose && <button className={s.boton} onClick={()=>{props.onClose(props.id)}}>X</button>}
            </div>
            <Link to={`/detail/${props.id}`} style={estilo}> 
               <div className={s.div2}> 
                  <p className={s.name}>{props.name}</p> 
                 <img className={s.img} src={props.image} alt={props.name}/>
               </div>
               </Link> 
          <div className={s.div3}>
            <img src={flecha} alt="flecha" className={flecha}/>
            <p>Species: {props.species}</p>
            <p>Gender: {props.gender}</p>   
          </div> 
      </div>
     
    );
}

function mapDispatchToProps(dispatch){
   return {addFavorite:(favorito)=>{dispatch(addFavorite(favorito))},
           deleteFavorite:(id)=>{dispatch(deleteFavorite(id))}
  }
}


function mapStateToProps(state){
  return{
    myFavorites:[...state.myFavorites]
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Card)