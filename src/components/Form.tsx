import { ChangeEvent } from "react";

interface FormProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export const Form = (props: FormProps) => {
    const { onChange } = props

    return (
        <form data-testid="GameSearchForm">
            <label data-testid="GameSearchFormLabel">Search for a game!</label>
            <input data-testid="GameSearchFormInput" type="text"onChange={e => onChange(e)} />
        </form>
    )
}