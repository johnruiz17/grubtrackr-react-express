import React from 'react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from './utils/test-utils';

import RestaurantQuery from '../src/containers/RestaurantQuery';

export const handlers = [
  rest.get('/', (req, res, ctx) => {
    return res(ctx.json({ location: 'Plano' }), ctx.delay(150));
  }),
];

const server = setupServer(...handlers);

describe('Testing for the slices', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('testing searching', async () => {
    renderWithProviders(<RestaurantQuery />);

    expect(screen.getByText());
  });

  // describe('googleSlice', () => {
  //   it('should return a default state when given an undefined input', () => {});

  //   it('should return the original state when given an unknown action', () => {});

  //   it('should move the center when invoked');
  // });
});
