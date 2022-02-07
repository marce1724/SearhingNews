import { Fragment , useState, useEffect } from "react"
import Header from "./components/Header"
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"

function App() {

  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(()=>{
     
     const consultarAPI = async() =>{
       const appiKey = 'cadefe4877b84cd79b6f63c0366ff36d'
       const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=${appiKey}`
       const respuesta = await fetch(url)
       const noticias = await respuesta.json()

       setNoticias(noticias.articles)

     }
     consultarAPI()

  }, [categoria])


  return (
     <Fragment>
        <Header
          titulo="Buscador de Noticias"
        />

        <div className="container white">
           <Formulario
             setCategoria={setCategoria}
           />

           <ListadoNoticias
             noticias={noticias}
           />
        </div>
     </Fragment>
  )
}

export default App
