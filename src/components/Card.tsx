interface CardProps {
    title: string
}

export const Card = (props: CardProps) => {
    return <div data-testid='CardTitle'>{props.title}</div>
}