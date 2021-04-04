import React from "react";
import Posts from "../components/posts";
import {graphql, useStaticQuery} from "gatsby";
import CursoFinish from "../elements/cursosfinish";
import Curso from "../elements/cursos";

export default ()=>{
const data = useStaticQuery(graphql`
    {
        codigoFacilitoJson {
          id
          data {
            finished_courses {
              title
              url
            }
            courses{
                  title
              progress
              url
            }
          }
        }
      }
      
`);
console.log(data);
return (
    <section>
        <div className="mt-24">
            <div className="max-w-4xl mx-auto">
            <Posts 
            data={data.codigoFacilitoJson.data.finished_courses} 
            card={CursoFinish}
            title="Cursos hecho en CodigoFacilito"/>

            <Posts 
            data={data.codigoFacilitoJson.data.courses.slice(1,4)} 
            card={Curso}
            title="Cursos en CodigoFacilito"/>
            </div>

        </div>
    </section>
)
}