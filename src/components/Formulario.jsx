import styles from './Formulario.module.css'
import useSelect from '../hooks/useSelect';

const Formulario = ({setCategoria}) => {
 
   const opciones = [
       { value: 'general', label:'General'},
       { value: 'business', label:'Negocios'},
       { value: 'entertainment', label:'Entretenimiento'},
       { value: 'health', label:'Salud'},
       { value: 'science', label:'Ciencia'},
       { value: 'sports', label:'Desportes'},
       { value: 'technology', label:'Tecnología'}
   ]

   const [categoria, SelectNoticias] = useSelect('general', opciones) 

   const buscarNoticias = e =>{
        e.preventDefault()
        setCategoria(categoria)
   }

  return (
     <div className={`${styles.buscador} row`}>
          <div className="col s12 m8 offset-m2">
             <form
                 onSubmit={buscarNoticias}
             >
                  <h2 className={styles.heading}>Encuentra Noticias por Categoria</h2>

                  <SelectNoticias/>

                  <div className="input-field col-s12">
                     <input
                         type="submit"
                         className={`${styles.btn_block} btn-large amber darken-2`}
                         value="Buscar"
                     />

                  </div>
             </form>
          </div>
     </div>

  )
};

export default Formulario;
