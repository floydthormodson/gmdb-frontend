import React from 'react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'
import { render, screen } from '@testing-library/react'
import Home from './Home'

 const server = setupServer(
   rest.get('http://localhost:3001/movies', (request, response, context) => {
    return response(context.json(
        [{poster: "html"}]
    ))
  })
)


beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())


test('Image is displayed', () =>{
    render(<Home/>)
    const movieCard = screen.getByRole('img');
    expect(movieCard).toBeInTheDocument()
})

