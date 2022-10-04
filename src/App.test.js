import AppTwo from "./AppTwo";
import { render, screen, waitFor } from '@testing-library/react'
import { act } from "react-dom/test-utils";
import React from "react";
import mockGame from "./game.mock";

jest.mock('./fetchGames', () => ({
    fetchGames: () => [mockGame]
}))

test('it should render the text', async () => {

    await act(() => {
        render(<AppTwo/>)
    })

    expect(JSON.parse(screen.getByTestId('text').textContent)).toStrictEqual([mockGame])
})