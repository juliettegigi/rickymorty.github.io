/*la contraseña tiene que tener al menos un número.
la contraseña tiene que tener una longitud entre 6 y 10 caracteres.. */

export const validation=(inputs)=>{
   const errors={}
   const errorInput=[];
    if(!inputs.username)
      errorInput.push("El nombre de usuario no puede estar vacío");
    else if(!/\S+@\S+\.\S+/.test(inputs.username))
            errorInput.push("El nombre de usuario tiene que ser un email")
        else if(inputs.username.length>35)
                  errorInput.push("El nombre de usuario no puede tener más de 35 caracteres") 

    if(errorInput.length!==0)
      errors.username=errorInput;
    
    const errorPass=[];
    if(inputs.password){
        if(!/[0-9]/.test(inputs.password))
           errorPass.push("La contraseña tiene que tener al menos un número");
        else if(inputs.password.length<6 || inputs.password.length>10)
                errorPass.push("La constraseña tiene que tener una longitud entre 6 y 10 caracteres")   
    }
    if(errorPass.length!==0)
       errors.password=errorPass;
     
       console.log("validaion ", errors);
      return errors;
}