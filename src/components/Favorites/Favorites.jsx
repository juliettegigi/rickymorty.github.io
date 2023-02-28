import { useEffect } from 'react';
import {useDispatch,useSelector } from 'react-redux'
import {filterCards,desfilter,orderCards} from '../../redux/actions/actionsCreator'
import Cards from '../Cards/Cards'


export default function Favorites(props) {
 const gender=['All','Male', 'Female', 'unknown', 'Genderless'];
 const dispatch=useDispatch();
 const myFavorites=useSelector((state)=>state.myFavorites)
 
useEffect(()=>{
 return(()=>{
    dispatch(desfilter());
 })
},[])

 function filterCardsSelect(e){
  dispatch(filterCards(e.target.value))
 }


function orderCardsSelect(e){
  dispatch(orderCards(e.target.value))
}

  return (
    <div>

<label htmlFor="order">Ordenar: </label>
    <select id="order" onChange={orderCardsSelect} >
       <option  value="Ascendente" >Ascendente</option> 
       <option  value="Descendente" >Descendente</option> 
    </select>

<label htmlFor="listado">Filtrar: </label>
    <select id="listado" onChange={filterCardsSelect} >
      { gender.map(elem=> 
    <option  value={elem}   key={elem}>{elem}</option> )
      }
    </select>
    
   
         
      {myFavorites && <Cards personajes={myFavorites}></Cards>
      }



    </div>
  )
}



