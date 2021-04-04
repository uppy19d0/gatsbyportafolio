import { graphql, Link, useStaticQuery } from "gatsby";
import React from "react";

export default (props)=>{
    const data = useStaticQuery(graphql`
    {
        allEducationJson {
          edges {
            node {
              slug
              title
              description
              img{
                alt
                url
              }
          }
          }
        } 
    }   
    `);

    return (
        <div className="max-w-4xl mx-auto h-100 ">
        <h2 className="text-3xl font-bold text-center"> Mi Formacion Educativa</h2>
        <nav className="flex justify-items-center mt-8 ">
        {
          data.allEducationJson.edges.map((element,index)=>{
            const {node} = element;
            console.log("!!!!!!!!AVISO!!!!!!!!")
            console.log(node.img.url);
            const PATH_IMG = node.img.url;
            return (
              <article className="flex-1 bg-white shadow m-4 max-w-sm p-4 rounded truncate">
                <header>
                  <p className="font-bold leading-loose truncate">{node.title}</p>
                  <img src={PATH_IMG}  alt={node.img.alt}></img>
                  <div className="mt-8">
                <p className="font-light truncate">
                  {node.description}  
                </p>
                <Link to={`/${node.slug}`} className="btn inline-block mt-4">IR</Link>
                  </div>
                </header>
              </article>
            )
          })
        }
        </nav>
        </div>
    );

}


