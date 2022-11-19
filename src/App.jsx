import {useEffect, useState} from 'react'
import './App.css'
import MainPanel from "./Components/MainPanel/MainPanel.jsx";
import Header from "./Components/Header/Header";
import LoadMoreButton from "./Components/LoadMoreButton/LoadMoreButton";

function App() {

    const [state, setState] = useState({
        currCharNum: 1,
        expCharNum: 4,
        characters: [],
        buttonDisabled: true
    })

    useEffect(() => {
        async function addCharacter(currNum, expNum, newCharacters = []) {
            console.log(newCharacters);
            if (!(currNum <= expNum)) {
                return Promise.resolve(newCharacters);
            }
            console.log(currNum);
            const response = await fetch(`https://swapi.dev/api/people/${currNum}/`);
            if (response.ok) {
                const character = await response.json();
                newCharacters.push(character);
                return addCharacter(currNum + 1, expNum, newCharacters);
            } else {
                return addCharacter(currNum + 1, expNum, newCharacters);
            }
        }

        addCharacter(state.currCharNum, state.expCharNum).then((newCharacters) => {
            console.log(newCharacters);
            setState((prevState) => {
                return {
                    ...prevState,
                    currCharNum: prevState.currCharNum + newCharacters.length,
                    characters: [...prevState.characters, ...newCharacters],
                    buttonDisabled: false
                }
            })
            console.log(state.characters);
            setTimeout(() => {
                window.scrollTo({
                    top: document.body.scrollHeight,
                    behavior: "smooth"
                });
            }, 100)
        });
    }, [state.expCharNum])

    return (
        <div className="App">
            <Header/>
            <h1>Characters</h1>
            <MainPanel appState={state} setAppState={setState}/>
            <LoadMoreButton appState={state} setAppState={setState}/>
        </div>
    )
}

export default App
