import { fireEvent, render, screen } from "@testing-library/react"
import { Form } from "./Form"

describe('Form', () => {
    it('should render the form components', () => {
        render(<Form onChange={() => {}} />)
        expect(screen.getByTestId('GameSearchForm')).toBeInTheDocument()
        expect(screen.getByTestId('GameSearchFormLabel')).toBeInTheDocument()
        expect(screen.getByTestId('GameSearchFormInput')).toBeInTheDocument()
    })

    it('should run the function passed as a prop, on change of the input field', () => {
        const mockChange = jest.fn()
        render(<Form onChange={mockChange} />)
        fireEvent.change(screen.getByTestId('GameSearchFormInput'), {
            target: {
                value: 'I changed it!'
            }
        })
        expect(mockChange).toHaveBeenCalledTimes(1)
        expect(mockChange.mock.calls[0][0].target).toBeInstanceOf(HTMLInputElement)
    })
})