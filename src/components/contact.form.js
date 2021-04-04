import React from "react";

export default ()=>(
<form className="mt-16 text-center" method="POST" name="contact" data-netlify-honeypot="bot-field" data-netlify="true">
    <label htmlFor="block text-gray-700 text-sm font-bold mb-4">Escriberme para ayudarte hacer esa App que tienen en la Mente</label>
    <div className="flex shadow rounded bg-white borde p-2">
    <textarea id ="contact-form" name="message" className="flex-1 py-2 px-3 focus-outline-none focus:shadow-outline"></textarea>
    <button className="btn ml-4"  type="submit">Enviar</button>
    </div>
    
</form>
);