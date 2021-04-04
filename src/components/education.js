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
          }
          }
        } 
    }   
    `);

    return (
        <div className="max-w-4xl mx-auto truncate">
        <h2 className="text-3xl font-bold text-center"> Mi Formacion Educativa</h2>
        <nav className="flex justify-items-center mt-5 ">
        {
          data.allEducationJson.edges.map((element,index)=>{
            const {node} = element;

            return (
              <article className="flex-1 bg-white shadow m-4 max-w-sm p-4 rounded">
                <header>
                  <p className="font-bold leading-loose">{node.title}</p>
                  <div className="mt-8">
                <p className="font-light">
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


