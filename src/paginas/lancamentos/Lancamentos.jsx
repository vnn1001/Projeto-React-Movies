import React,{useEffect, useState, Fragment} from 'react'
import CardV from "../../componentes/card/card.jsx";
import api from '../../servicos/api.jsx';

export default function Lancamentos(){
    const [filmes,setFilmes] = useState([])

    const api_options = {
        
        params:{       
        api_key: "6fe8f69c49be4d9e06ec3d33cbbaefe2",
        language:"pt_BR"

        }
    }

    useEffect(
        function(){
            load()
        },[]
    )

    async function load(){

        try{
            const resposta = await api.get("movie/upcoming", api_options)
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