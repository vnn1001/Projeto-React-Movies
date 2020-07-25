import React,{useEffect, useState} from 'react'
import CardV from "../../componentes/card/card.jsx";
import axios from 'axios'

export default function Busca(props){

    const [filmes,setFilmes] = useState([])
    const urlApi = "https://api.themoviedb.org/3/search/movie" +
                    props.location.search +
                    "&api_key=6fe8f69c49be4d9e06ec3d33cbbaefe2&language=pt-BRS&page=1"


    useEffect(() => { load() }, [props.location.search]  )

    async function load(){

        try{
            const resposta = await axios.get(urlApi)
            setFilmes(resposta.data.results)
            console.log(props.location)
        }catch(erro){
            console.log(erro)
        }
    }

    return(
        <div className="conteudo">
            {filmes.map((filme) =><CardV key={filme.id} filme={filme}/>)}
        </div>
    );
}