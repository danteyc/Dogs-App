import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./breed.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

export function PageBreed(){
    const { breed } = useParams();
    const[dataBreed,setDataBreed] = useState("");
    const[isLoading,setLoading] = useState(true);
    
    useEffect(()=>{
        axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((respuesta)=>{
            const breedImage = respuesta.data.message;
            setDataBreed(breedImage);
            setLoading(false);
        })
    },[breed])

    return (
        <React.Fragment>
            <h1>
                Raza <span>{breed}</span>
            </h1>
            {isLoading ? (<div className='loading'><FontAwesomeIcon icon={faCircleNotch} className='fa-spin'/></div>) : (
                <figure className="image-dog"><img src={dataBreed} alt={breed}/></figure>
            )
            }
        </React.Fragment>
    )
}