import "./CharacterCard.css"
import {useEffect, useState} from "react";
import loadingWheel from "../../assets/loading-gif.gif"

export default function CharacterCard({character}) {
    const [state, setState] = useState({character: {...character}, species: [{name: <img className="loading" src={loadingWheel} alt='loading wheel'/>}]});
    useEffect(() => {
        if (state.character.species[0]) {
            const url = state.character.species[0];
            fetch(url)
                .then((response) => response.json())
                .then((species) => {
                    setState((oldState) => {
                        return {
                            ...oldState,
                            species: [species]
                        }
                    })
                })
        } else {
            setState((oldState) => {
                return {
                    ...oldState,
                    species: [{name: "Human"}]
                }
            })
        }
    }, [character])
    console.log(state.species);
    return (
        <article>
            <h2>{state.character.name}</h2>
            <p>height: <strong>{state.character.height}cm</strong></p>
            <p>
                mass: <strong>{`${state.character.mass}${isNaN(state.character.mass.replaceAll(',', '.')) ? "" : "kg"}`}</strong>
            </p>
            <p>species: <strong>{state.species[0] ? state.species[0].name : "Human"}</strong></p>
        </article>
    )
}