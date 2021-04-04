import { faEye } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, Link } from "gatsby"
import React from "react"
import NavEduc from "../components/education";
export default props => {
  const pageData = props.data.educationJson
  console.log(props.data)
  return (
    <div>
      <header className="py-12 border-blue-500 border-solid border-t-2">
        <div className="max-w-4xl mx-auto">
        <Link to="/" className="btn inline-block mt-4">Regresar al Inicio</Link>
          <h2 className="capitalize text-6xl font-bold">{pageData.title}</h2>
          <p className="text-xl">{pageData.description}</p>
        </div>
      </header>
      <ul className="max-w-4xl mx-auto pb-8">
        {pageData.items.map((item, index) => (
          <li className="bg-gray-100 shadown mt-4 flex" key={index}>
            <div className="flex items-center flex-1 p-8">
              <div className="flex-1">
                <h3>{item.name}</h3>
                {
                item.degree && <span className="inline-block p-2 radiues bg-blue-100 text-blue-700">
                  {item.degree}
                </span>
                }
                 {
                item.technology && <span className="inline-block p-2 radiues bg-blue-100 text-blue-700">
                  {item.technology}
                </span>
                }
                 {
                item.yearStart && <span className="inline-block p-2 radiues bg-blue-100 text-blue-700">
                  {item.yearStart} hasta {item.yearEnd}
                </span>
                }
                  <div>
                  {
              item.url && <a
              className="btn mt-5 inline-block"
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              >Ver Certificado</a>
                  }    
                  </div>
                  <div className="inline-block">
                  <span className="inline-block p-2 text-2xl bg-green-100 text-green-700">
                      {item.score}
                  </span>
                  </div>                  
              </div>
            </div>
          </li>
        ))}
      </ul>
      <NavEduc/>
    </div>
  )
}

export const query = graphql`
  query($slug: String) {
    educationJson(slug: { eq: $slug }) {
      title
      description
      items {
        name
        yearStart
        yearEnd
        technology
        description
        degree
        url
        score
      }
    }
  }
`
