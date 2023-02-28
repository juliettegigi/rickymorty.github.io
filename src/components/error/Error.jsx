import img from "../../assets/errorImage.png";
import s from './errors.module.css'

export default function Error(){
    return(
        <div className={s.div}>
            
            <img src={img} alt="imgError" className={s.image}/>
            <h1 className={s.letra}>Error 404</h1>
        </div>
    )
}