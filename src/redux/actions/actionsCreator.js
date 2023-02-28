import { ADD_FAVORITE,DELETE_FAVORITE,FILTER,ORDER,DESFILTER} from "./types"

export const addFavorite=(favorito)=>{
    return({type:ADD_FAVORITE,payload:favorito})
}

export const deleteFavorite=(id)=>{
  return({type:DELETE_FAVORITE,payload:id})
}

export const filterCards=(gender)=>{
  console.log("en filter action ", gender);
  return({type:FILTER,payload:gender})
}

export const orderCards=(orden)=>{
  return({type:ORDER,payload:orden})
}

export const desfilter=()=>{
  return ({type:DESFILTER})
}