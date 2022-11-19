import "./MainPanel.css"
import CharacterCard from "../CharacterCard/CharacterCard";

export default function MainPanel(props) {
    return (
        <main>
            {
                props.appState.characters.map((val, idx) => <CharacterCard key={idx} character={val}/>)
            }
        </main>
    )
}