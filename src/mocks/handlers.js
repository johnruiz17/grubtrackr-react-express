// this is from documentation at https://mswjs.io/docs/getting-started/install
import { rest } from 'msw';

export const handlers = [
  // a list of dummy handlers so that we can do some front end testing

  rest.post('/', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([{ id: 1, name: 'Test', price: '$$$', rating: 5 }])
    );
  }),
  rest.get('/', null),
];
