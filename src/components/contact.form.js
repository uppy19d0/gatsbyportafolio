import React from "react";

export default ()=>(
<form className="mt-16 text-center">
    <label htmlFor="block text-gray-700 text-sm font-bold mb-2">Escriberme para ayudarte hacer esa App que tienen en la Mente</label>
    <div className="flex shadow rounded bg-white borde p-2">
    <textarea id ="contact-form" name="contact-form" className="flex-1 py-2 px-3 focus-outline-none focus:shadow-outline"></textarea>
    <button className="btn ml-4">Enviar</button>
    </div>
    
</form>
);