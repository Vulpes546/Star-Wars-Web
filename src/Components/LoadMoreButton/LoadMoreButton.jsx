import "./LoadMoreButton.css"

export default function LoadMoreButton(props) {
    return (
        <button disabled={props.appState.buttonDisabled} onClick={() => {
            props.setAppState((oldState) => {
                return {
                    ...oldState,
                    expCharNum: oldState.expCharNum + 8,
                    buttonDisabled: true
                }
            })
        }
        }>Load more</button>
    )
}