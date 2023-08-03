// second attempt at testing react, using the documentation found here: https://redux.js.org/usage/writing-tests

import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from './utils/test-utils';
import { server } from '../src/mocks/server';

import App from '../src/components/App';

export const handlers = [
  // rest.get('/', (req, res, ctx) => {
  //   return res(ctx.json({ location: 'Plano' }), ctx.delay(150));
  // }),
  rest.post('/', (req, res, ctx) => {
    return res(
      ctx.json([{ id: 1, name: 'Test', price: '$$$', rating: 5 }]),
      ctx.delay(150)
    );
  }),
];

// const server = setupServer(...handlers);

describe('Testing for the slices', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('testing searching', async () => {
    renderWithProviders(<App />);

    expect(screen.queryByText('Test')).not.toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Search' }));
    expect(screen.queryByText('Test')).not.toBeInTheDocument();

    expect(await screen.queryByText(/Test/i)).toBeInTheDocument();
  });

  // describe('googleSlice', () => {
  //   it('should return a default state when given an undefined input', () => {});

  //   it('should return the original state when given an unknown action', () => {});

  //   it('should move the center when invoked');
  // });
});
