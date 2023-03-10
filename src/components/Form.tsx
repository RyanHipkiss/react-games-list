import { ChangeEvent } from "react";

interface FormProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Form = (props: FormProps) => {
    const { onChange } = props

    return (
        <form>
            <label>Search for a game!</label>
            <input type="text"onChange={e => onChange(e)} />
        </form>
    )
}