import React from "react";
import illustration from '../imgs/undraw_Success_factors_re_ce93.svg';
import Form from "./contact.form";
export default()=>(
 <header className="bg-gray-300">
    
    <div className="container mx-auto p-12 max-w-4xl">
        <div className="flex justify-items-center items-center">
            <div className="flex-1">
            <h1 className="font-bold  text-blue-700 text-6xl">!Hola Soy Luis A. Tavarez De Jesus</h1>
            <p className="font-light text-xl">Soy desarrollador Full-stack ,creador de aplicaciones web y moviles</p>
            </div>
            <img src={illustration} alt="Hombre completando tarea" style={{height:"300px"}}></img>
        </div>
        <div>
        <Form></Form>
        </div>
    </div>
 </header>
)