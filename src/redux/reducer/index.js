import { ADD_FAVORITE,DELETE_FAVORITE ,FILTER,DESFILTER, ORDER} from "../actions/types"

const initialState={
    myFavorites:[],
    allCharacters:[]
}

export const rootReducer=(state=initialState,{type,payload})=>{
    switch(type){
        case ADD_FAVORITE: 
                 state.allCharacters=[...state.myFavorites,payload];
                 return{...state,myFavorites:state.allCharacters};
        case DELETE_FAVORITE: 
                 state.allCharacters=state.allCharacters.filter((favorito)=>{
                                    return favorito.id!==payload
                 })
                 return {...state,myFavorites:state.allCharacters};
        case FILTER:
            if(payload!=="All")
            return{...state,myFavorites:state.allCharacters.filter((favorito)=>{
              return favorito.gender===payload
            })}
        case DESFILTER:  
            return{...state,myFavorites:state.allCharacters}  
        case ORDER:
            console.log("en order, payload: ",payload);
           let arr=[...state.myFavorites];
            if(payload==="Descendente")
                 return{...state,myFavorites:arr.sort((a,b)=>{if(a.id>b.id) return(-1)})} 
           else return{...state,myFavorites:arr.sort(
                (a,b)=>{if(a.id<b.id) return(-1)})
        }      
        default:return{...state} 
    }
}