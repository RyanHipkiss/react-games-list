import { render, screen, waitFor } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import React from "react";
import mockGame from "./game.mock";
import App from './App';

jest.mock('./useGames', () => ({
    useGames: () => {
        return { Games: [mockGame], Error: null}
    }
}))

test('it should render the text', async () => {
    await act(() => {
        render(<App/>)
    })

    expect(JSON.parse(screen.getByTestId('games').textContent)).toStrictEqual([mockGame])
})