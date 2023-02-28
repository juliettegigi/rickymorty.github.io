import { connect } from 'react-redux'
import { deleteFavorite } from './redux/actions/actionsCreator'
import Cards from './components/Cards/Cards'
import { useState ,useEffect} from 'react'
import './App.css'
import {Nav} from "./components/Nav/Nav"
import { Routes,Route,useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail  from './components/Detail/Detail'
import Error from './components/error/Error'
import Form from './components/Form/Form'
import Favorites from './components/Favorites/Favorites'
function App(props) {
 
  const [characters, setCharacters] = useState([]);
 const [access, setAccess] = useState(false);
let username="julia@g.com";
let password="julia18"


const navigate=useNavigate();

function login(userData){

  if(userData.username===username && password===userData.password){
   navigate('/home');
   setAccess(true);

}
}


useEffect(() => {
  console.log(access);
   !access && navigate('/');
 
}, []);


const logout=()=>{
   setAccess(false);
   navigate('/')
}
  const onClose=(id)=>{
        setCharacters(characters.filter((character)=>{
            return character.id!==id;
        }))
        props.deleteFavorite(id);
  }

  async function  onSearch(characterId) {
    if(characters.some((character)=>{
        return character.id===Number(characterId)
    })) return alert("id ya esxiste")
    
  
    const data=await fetch(`https://rickandmortyapi.com/api/character/${characterId}`)
                     .then((response) => response.json())
       
          if (data.name) {
             setCharacters((oldChars) => [ data,...oldChars]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       
 }



  return (
  
    <div>   
      
       {access && <Nav onSearch={onSearch} logout={logout}/>}
       <Routes>
          <Route path="/" element={<Form login={login}/>}></Route>
         
            { access && <>
              
            <Route path="/home" element={<Cards personajes={[...characters]}
                                                onClose={onClose}/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/detail/:detailId" element={<Detail/>}></Route>
            <Route path="/favorites" element={<Favorites/>}></Route>
           
          </> }
          <Route path="/*" element={<Error/>}></Route> 
       </Routes>

    </div> 
  
  )
}

function mapDispatchToProps(dispatch){
    return{
      deleteFavorite:(id)=>{dispatch(deleteFavorite(id))}
    }
}


export default connect(null,mapDispatchToProps)(App)
