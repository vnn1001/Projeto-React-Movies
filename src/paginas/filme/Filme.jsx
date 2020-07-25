import React,{useEffect, useState} from 'react'
import axios from 'axios'
import "./Filme.css"

export default function Inicio(props){

    const [filme,setFilme] = useState([])
    const imgBaseUrl = "https://image.tmdb.org/t/p/w200/"

    useEffect(
        function(){
            load()
        },[]
    )

    async function load(){

        try{
            const resposta = await axios.get("https://api.themoviedb.org/3/movie/upcoming?api_key=6fe8f69c49be4d9e06ec3d33cbbaefe2&language=pt-BR")
            setFilme(resposta.data)
            console.log(resposta.data)
        }catch(erro){
            console.log(erro)
        }
    }

    return( 
        <div className="hero">
            <button className="btn-voltar" onClick={props.history.goBack}>
                <span className="material-icons">navigate_before</span>voltar
            </button>
            <img src={`${imgBaseUrl}${filme.poster_path}`} alt="poster"/>
            <div className="filme-info">
                <h1>{filme.title}</h1>
                <p className="genero"></p>
                <p>{filme.overview}</p>
            </div>
        </div>
    
    );

}