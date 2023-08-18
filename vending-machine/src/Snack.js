import React, { useState } from "react";
import { Link } from "react-router-dom";
import {v4 as uuid} from "uuid";
import './Snack.css';



const Snack = ({ name, message }) => {
    const [chipsNom, setNom] = useState(0);
    const [chipBags, setBags] = useState([])

    const spawnChips = () => {
        const vW = window.innerWidth/3;
        const vH = window.innerHeight/3;
        const x = (Math.random() < 0.5 ? -1 : 1) * Math.random() * vW;
        const y = (Math.random() < 0.5 ? -1 : 1) *  Math.random() * vH;
        console.log(x)
        console.log(y)
        setBags((chipBags)=>{
            return [...chipBags ,<img key={uuid()} src={`./assets/images/${name}.jpg`} alt={name} style={{ width: '300px', position: 'absolute', transform: `translate(${x}px, ${y}px`, zIndex:-1}} />]
        })
    }

    const nomChip = () => {
        setNom((chipsNom) => chipsNom+1);
        spawnChips();
    }

    return <div className="Snack">
        <img src={`./assets/images/${name}.jpg`} alt={name} style={{ width: '300px' }} />
        <p>{message}</p>
        {name === "Chips" ? <>
            <p>Chips Nommed: {chipsNom}</p>
            <button onClick={nomChip}>Nom</button><br/>
        </>
            : null}
        {chipBags.map((bag)=> bag)}
        <Link to="/">Back?</Link>
    </div>

}

export default Snack;