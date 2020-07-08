import React,{useState} from 'react'
import "./header.css"
import {withRouter} from 'react-router-dom'

 function Header(props){

    const [procurar, setProcurar] = useState("");

    function buscar(e){
        e.preventDefault()
        props.history.push("/busca?query=" + procurar)
    }

    return( 
        <div className="Header">
            <div className="Logo">VMovies</div>
            <form onSubmit={buscar}>
                <input type="text" name="query" id="query" onChange={e => setProcurar(e.target.value)}
                />
                <button type="submit">buscar</button>
            </form>
            
        </div>
    )
}


export default withRouter(Header)