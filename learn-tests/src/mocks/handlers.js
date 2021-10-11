import { rest } from 'msw';

import { httpClientBaseURL } from '../services';

export const handlers = [
  rest.get(`${httpClientBaseURL}/users/mario-aj/repos`, (req, res, ctx) => {
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
