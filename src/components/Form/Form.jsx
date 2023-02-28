import s from "./form.module.css"
import React , {useEffect} from 'react'
import {validation} from './validation'
export default function Form(props){
    const [userData, setUserData] = React.useState({ username: '', 
                                                     password: '' });

    const [errors,setErrors]=React.useState({});

    useEffect(() => {
    
    console.log("en el form, en useEffect");
      return () => {
        <></>
      }
    }, [])
    
    const handleInputChange=(e)=>{
       setUserData({...userData,[e.target.name]:e.target.value});
       setErrors(validation({...userData,[e.target.name]:e.target.value}));
    }    
       
    const handleSubmit=(e)=>{
       
            e.preventDefault();
            props.login({...userData})
           
    }
    return(
      
        <form className={s.form} onSubmit={handleSubmit}>
            {console.log("en el form, en render")}
            <label>Username: 
                <input type="text" onChange={handleInputChange} value={userData.username} name="username"></input>
            </label>
            {console.log("errores: ",errors.username)}
            {errors.username && errors.username.map((error,i)=>{
            return<p className={s.p} key={`username-${i}`}>{error+ "-"}</p>
        })} 
            <label>Password
                <input type="password" onChange={handleInputChange} value={userData.password} name="password"/>
            </label>
            {errors.password && errors.password.map((error,i)=>{
                return<p key={`pass-${i}`} className={s.p}>{error+ "-"}</p>
            })}
            <button type="submit" className={s.boton}>Login</button>
        </form>
    )
}