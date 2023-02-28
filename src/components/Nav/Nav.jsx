import SearchBar from '../SearchBar/SearchBar'
import { Link,useLocation } from 'react-router-dom'
import s from "./Nav.module.css"

const estilo={
    color:"chartreuse",
    textAlign:"center",
    margin: "1em"
  }

export const Nav=(props)=>{

    let location = useLocation();
           return(
            <nav>

                <Link to="/home"  style={estilo}>🏠Home</Link>
                <Link to="/about"  style={estilo}>🤷‍♂️About</Link>
                <Link to="/favorites"  style={estilo}>💗Favorites</Link>
                <button onClick={props.logout }  style={estilo} className={s.boton}> 🚪 Logout </button>
               {location.pathname==="/home" && <SearchBar onSearch={props.onSearch}/>}
                
            </nav>
           )
}