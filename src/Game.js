export function Game(props) {
    const title = props.values.title
    return <p data-testid="game-title">{title}</p>
}