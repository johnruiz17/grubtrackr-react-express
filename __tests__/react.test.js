// initial attempt to test the various react elements

import Reach from 'react';
import { fireEvent, render, screen } from '@testing-library/react';

import RestaurantQuery from '../src/containers/RestaurantQuery';
import { describe, test } from 'node:test';

describe('Unit testing the react components', () => {
  describe('Restaurant Query', () => {
    let queryBox;
    let props = {};

    beforeEach(() => {
      queryBox = render(<RestaurantQuery {...props} />);
    });

    test('It has a button to submit a search', () => {
      const buttons = screen.getAllByRole('button', { hidden: true });
      expect(buttons.length).toEqual(1);
    });

    test('The functions passed down should be invoked when clicking the button', async () => {
      const onClick = jest.fn();
      queryBox.rerender(<RestaurantQuery onClick={onClick} />);

      const button = await screen.findByText('Search');
      fireEvent.click(button);
      expect(onClick).toHaveBeenCalledTimes(1);
    });

    test('The functions passed down should be invoked when pressing enter in the search bar', async () => {});
  });
});
