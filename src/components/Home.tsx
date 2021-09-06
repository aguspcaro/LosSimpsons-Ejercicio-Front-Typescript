// componentes
import Body from "./body/Body";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Loading from "./loading/Loading";

// extras
import { useEffect, useState } from "react";
import axios from "axios";
import Search from "./header/search/Search";

const Home = () => {

    // Estados
    const [characters, setCharacters] = useState([]);
    const [listaCharacters , setListaCharacters] = useState<string[]>([]);
    const [busqueda , setBusqueda] = useState("");
    const [loading , setLoading] = useState(true);

    
    // API
    const url= "https://thesimpsonsquoteapi.glitch.me/quotes?count=15";


    // hacemos la peticion y lo guadamos en una funcion para llamarla luego en el useEffect. Guardamos en ambos estados para luego manipularlos
    const peticion = async () => {

        await axios.get(url).then((resp)=>{
            setCharacters(resp.data);
            setListaCharacters(resp.data);
            setLoading(false)

        })
        .catch((e)=>{console.log(e);})
    };


    // Usamos el useEffect para estar todo el tiempo renderizando la api.
    useEffect(() => {
        peticion();
    }, []);


    // Agarramos el valor que viene por el input y le aplicamos la funcion filtrar
    const handleChange:any = (e:any) => {
        setBusqueda(e.target.value); // vamos a mostrarle al usuario lo que esta escribiendo
        filtrar(e.target.value); // vamos a filtrar lo que viene por value y asignarselo al estado setCharacters
    };


    //  Creamos una funcion que filtre a el estado "lista de characters", en este vamos a tener toda la api. Y el filtrado, lo deje en characters
    const filtrar:any = (terminoBusqueda:any) =>{
        let resultado:any = listaCharacters.filter((elemento:any)=>{
            if(elemento.character.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) || elemento.quote.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())){
                return elemento;
            }
        })
        // Vamos a tirar el filtrado al otro estado, a donde vamos a mostrar lo filtrado para que no toque el estado en donde esta toda la api
        setCharacters(resultado)
    };


    // Para borrar el contenido del input y luego mostrar de nuevo la API
    const deleteSearch:any = () => {
        setBusqueda("")
        peticion();
    };


    if(loading){

        return (
        
            <div>
                <Header>

                    <Search 
                        value={busqueda} 
                        method={handleChange}
                        deleteSearch={deleteSearch} 

                    />
                    
                </Header>

                <Loading 
                    loading={loading}
                />
            </div>           

        )
        
    } else {

        return (

            <div>

                <Header>

                    <Search 
                        value={busqueda} 
                        method={handleChange}
                        deleteSearch={deleteSearch} 

                    />

                </Header>

                <Body 
                    characters={characters} 
                />

                <Footer/>

            </div>

        );
    }
}
 
export default Home;