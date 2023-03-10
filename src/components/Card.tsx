interface CardProps {
    title: string
}

export const Card = (props: CardProps) => {
    return <div>{props.title}</div>
}