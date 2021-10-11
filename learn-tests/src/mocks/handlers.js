import { rest } from 'msw';

import { baseURL } from '../services';

export const handlers = [
  rest.get(`${baseURL}/users/mario-aj/repos`, (req, res, ctx) => {
    return res(
      ctx.json([
        { full_name: 'react-hooks' },
        { full_name: 'react-ui' },
        { full_name: 'learn-react' },
        { full_name: 'learn-react' },
      ])
    );
  }),
];
