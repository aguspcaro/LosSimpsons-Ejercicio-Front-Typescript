
// extras
import { BiSearch } from "react-icons/bi";
import { GrTrash } from "react-icons/gr";

interface props {
    value?: string;
    deleteSearch?: any;
    onClick?: any;
    method?: any;
}

const Search = (props:props) => {

    const button = () => {

        if(!props.value){

            return (

                <button
                    className="search-button"
                    type="button"
                    >
                    <BiSearch onClick={props.deleteSearch} />
                   
                </button>

            )

        } else {

            return (

                <button
                    className="search-button"
                    type="button"
                    >
                    <GrTrash onClick={props.deleteSearch} />
                    
                    
                </button>
            )
        }
    }

    return ( 

        <>
            <input 
                placeholder="Buscá tu simposon aquí" 
                type="text" 
                name="search"
                onChange={props.method}
                value={props.value} // le vamos a mostrar al usuario lo que hay en el estado busqueda. Este se alimenta de la funcion handleChange
            />

            { button() }
            
        </>
    );
}
 
export default Search;