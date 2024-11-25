import { setupServer } from 'msw/node';
import { handlers } from './handlers';

export const server = setupServer(
  // skip the "delay" in unit tests
  ...handlers.slice(1)
);
