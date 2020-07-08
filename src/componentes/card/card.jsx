import React from 'react'
import './card.css'

export default function CardV({filme}){
const nota= filme.vote_average.toFixed(1)
const imgUrl="https://image.tmdb.org/t/p/w200/"
const data = new Date(filme.release_date)
const data_lancamento = data.toLocaleDateString()


    return (
        <div className="card-v">
            <div className="Imagem"
            style={{ backgroundImage: `url(${imgUrl}${filme.poster_path})`
                }}
            >
            </div>
            <div className="detalhes">
                <h3>{nota}</h3>
                <h1>{filme.title}</h1>
                <h2>{data_lancamento}</h2>
            </div>
            <a href="#" className="btn-detalhe">
                <span className="material-icons">add_circle_outline</span>
            </a>
        </div>
    )
} 