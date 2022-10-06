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

jest.mock('./Game', () => ({
    Game: () => {
        return <div>{mockGame.title}</div>
    }
}))

test('it should render the text', () => {
    render(<App/>)
    
    expect(screen.getByTestId('games').innerHTML).toStrictEqual(`<div>${mockGame.title}</div>`)
})