import { setupServer } from 'msw/node';
import { handlers } from './handlers';

// This configures a request mocking server with given request
export const server = setupServer(...handlers)