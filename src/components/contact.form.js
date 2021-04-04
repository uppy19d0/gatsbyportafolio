import React from "react";

// export default ()=>(
// <form className="mt-16 text-center" method="post" name="contact" data-netlify-honeypot="bot-field" data-netlify="true">
//     <label htmlFor="block text-gray-700 text-sm font-bold mb-4">Escriberme para ayudarte hacer esa App que tienen en la Mente</label>
//     <div className="flex shadow rounded bg-white borde p-2">
//     <textarea id ="contact-form" name="message" className="flex-1 py-2 px-3 focus-outline-none focus:shadow-outline"></textarea>
//     <button className="btn ml-4"  type="submit">Enviar</button>
//     </div>
    
// </form>
// );
export default () =>(
    // <Layout>
    //   <h1>Contact</h1>
  
      <form  className="mt-16 text-center" name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <label htmlFor="block text-gray-700 text-sm font-bold mb-4">Escriberme para ayudarte hacer esa App que tienen en la Mente</label>
        <div>
          <label>Message:</label>
          <textarea name="message" />
        </div>
        <button className="btn ml-4" type="submit">Send</button>
      </form>
    // </Layout>
  )