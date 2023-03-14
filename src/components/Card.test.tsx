import { render, screen } from "@testing-library/react"
import { Card } from "./Card"

describe('Card', () => {
    it('renders the correct elements', () => {
        render(<Card title="Awesome Title" />)
        expect(screen.getByTestId('CardTitle')).toBeInTheDocument()
    })

    it('renders the correct title passed as a prop', () => {
        render(<Card title='Awesome New Title' />)
        expect(screen.getByTestId('CardTitle')).toHaveTextContent('Awesome New Title')
    })

    it('should render no text if the title is empty', () => {
        render(<Card title="" />)
        expect(screen.getByTestId('CardTitle')).toHaveTextContent('')
    })
})