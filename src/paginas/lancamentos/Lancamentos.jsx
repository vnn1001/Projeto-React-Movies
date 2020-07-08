import React,{useEffect, useState} from 'react'
import CardV from "../../componentes/card/card.jsx";
import axios from 'axios'

export default function Lancamentos(){
    const [filmes,setFilmes] = useState([])

    useEffect(
        function(){
            load()
        },[]
    )

    async function load(){

        try{
            const resposta = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=6fe8f69c49be4d9e06ec3d33cbbaefe2&language=pt-BRS&page=1")
            setFilmes(resposta.data.results)
            console.log(resposta.data.results)
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