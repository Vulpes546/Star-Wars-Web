import "./CharacterCard.css"
import {useEffect, useState} from "react";

export default function CharacterCard({character}) {
    const [state, setState] = useState({character: {...character}, species: []})
    useEffect(() => {
        if (state.character.species !== []) {
            for (const url of state.character.species) {
                fetch(url)
                    .then((response) => response.json())
                    .then((specie) => {
                        setState((oldState) => {
                            return {
                                ...oldState,
                                species: [...oldState.species, specie]
                            }
                        })
                    })
            }
        }
    }, [character])
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